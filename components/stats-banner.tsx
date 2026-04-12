"use client"

import { useEffect, useState } from "react"

const stats = [
  "🌡️ 61,000 deaths attributed to extreme heat in the US in 2023",
  "🏙️ Cities with optimized cooling see 23% fewer heat hospitalizations",
  "⚡ Civic Digital Twin evaluates interventions in seconds, not months",
]

const CYCLE_INTERVAL = 4000

export function StatsBanner() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % stats.length)
        setVisible(true)
      }, 400)
    }, CYCLE_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-[#0a0a0a] border-b border-white/10 py-2.5 px-4">
      <div className="container mx-auto flex items-center justify-center">
        <p
          className="text-xs sm:text-sm text-neutral-300 text-center transition-opacity duration-400"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {stats[current]}
        </p>
      </div>
    </div>
  )
}
