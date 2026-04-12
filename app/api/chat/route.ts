export const maxDuration = 60

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const message = body.message || body.messages?.[body.messages.length - 1]?.content || "Help me analyze city risks"

    const palantirUrl = process.env.PALANTIR_URL
    const palantirToken = process.env.PALANTIR_TOKEN
    const agentRid = process.env.PALANTIR_AGENT_RID
    const mlApiUrl = process.env.ML_API_URL

    if (!palantirUrl || !palantirToken || !agentRid) {
      throw new Error("Missing Palantir environment variables")
    }

    // Step 1 — Parse user intent via Palantir
    const sessionRes = await fetch(
      `${palantirUrl}/api/v2/aipAgents/agents/${agentRid}/sessions?preview=true`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${palantirToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    )

    if (!sessionRes.ok) {
      const err = await sessionRes.text()
      throw new Error(`Session creation failed ${sessionRes.status}: ${err}`)
    }

    const session = await sessionRes.json()
    const sessionRid = session.rid

    // Step 2 — Ask agent to parse the intent
    const parseRes = await fetch(
      `${palantirUrl}/api/v2/aipAgents/agents/${agentRid}/sessions/${sessionRid}/blockingContinue?preview=true`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${palantirToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userInput: {
            text: `Parse this request and return ONLY a JSON object with no other text: "${message}".
            Return exactly: {"city_name": string or null, "cooling_centers_delta": integer or null,
            "medical_resources_delta": integer or null, "budget_change_pct": float or null, "other_changes": string or null}`
          }
        }),
      }
    )

    let parsedParams = {
      city_name: null as string | null,
      cooling_centers_delta: null as number | null,
      medical_resources_delta: null as number | null,
      budget_change_pct: null as number | null,
      other_changes: null as string | null
    }

    if (parseRes.ok) {
      const parseData = await parseRes.json()
      const parseText = parseData.agentMarkdownResponse ?? ""
      try {
        const jsonMatch = parseText.match(/\{[\s\S]*\}/)
        if (jsonMatch) {
          parsedParams = { ...parsedParams, ...JSON.parse(jsonMatch[0]) }
        }
      } catch (e) {
        console.warn("Could not parse agent JSON response")
      }
    }

    // Step 3 — Call ML model if we have a city
    let mlData = null
    if (mlApiUrl && parsedParams.city_name) {
      try {
        const mlRes = await fetch(`${mlApiUrl}/api/predict`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsedParams),
        })
        if (mlRes.ok) {
          mlData = await mlRes.json()
        }
      } catch (e) {
        console.warn("ML model call failed:", e)
      }
    }

    // Step 4 — Generate insight via Palantir with ML results
    const insightPrompt = mlData
      ? `The user asked: "${message}"
         ML model results for ${mlData.city_name}:
         - Previous risk score: ${mlData.previous_risk_score}/100
         - New risk score: ${mlData.new_risk_score}/100
         - Risk level: ${mlData.risk_level}
         - Top contributing factors: ${mlData.top_features.join(", ")}
         - Risk reduction: ${mlData.risk_reduction_pct}%
         Generate a clear, actionable 3-paragraph insight explaining these results.`
      : `The user asked: "${message}".
         No ML data available. Generate a helpful response about urban health risk
         and what interventions might help, using your knowledge of city planning.`

    const insightSession = await fetch(
      `${palantirUrl}/api/v2/aipAgents/agents/${agentRid}/sessions?preview=true`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${palantirToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    )

    const insightSessionData = await insightSession.json()
    const insightSessionRid = insightSessionData.rid

    const insightRes = await fetch(
      `${palantirUrl}/api/v2/aipAgents/agents/${agentRid}/sessions/${insightSessionRid}/blockingContinue?preview=true`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${palantirToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userInput: { text: insightPrompt }
        }),
      }
    )

    if (!insightRes.ok) {
      const err = await insightRes.text()
      throw new Error(`Insight generation failed ${insightRes.status}: ${err}`)
    }

    const insightData = await insightRes.json()
    const reply = insightData.agentMarkdownResponse ?? "No response from agent"

    return Response.json({
      reply,
      riskData: mlData
    })

  } catch (error: any) {
    console.error("[chat] error:", error?.message)
    return Response.json(
      { error: error?.message || "An error occurred" },
      { status: 500 }
    )
  }
}