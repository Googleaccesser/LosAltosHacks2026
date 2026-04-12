import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service — Civic Digital Twin",
  description: "Terms of Service governing your use of the Civic Digital Twin platform.",
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-[#0f0f0f] p-6 sm:p-10 shadow-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(163,230,53,0.08),transparent_55%)]" />
              <div className="relative space-y-10">

                <header className="space-y-3 pb-6 border-b border-white/10">
                  <p className="text-[11px] tracking-widest text-lime-300/80 uppercase">Legal</p>
                  <h1 className="text-4xl font-bold tracking-tight text-white">Terms of Service</h1>
                  <p className="text-neutral-400 text-sm">Last updated: April 2026</p>
                  <p className="text-neutral-300 leading-relaxed">
                    These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Civic Digital Twin platform,
                    website, APIs, and related services (the &quot;Services&quot;) operated by Civic Digital Twin (&quot;we,&quot; &quot;our,&quot;
                    or &quot;us&quot;). By accessing or using the Services, you agree to be bound by these Terms.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    By creating an account or using any part of the Services, you represent that you are at least 16
                    years of age, have the legal capacity to enter into these Terms, and agree to be bound by them and
                    our Privacy Policy. If you are using the Services on behalf of an organization, you represent that
                    you have authority to bind that organization to these Terms.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">2. Description of Services</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    Civic Digital Twin provides an AI-powered urban simulation platform that enables cities, planners,
                    researchers, and policymakers to model climate impacts, evaluate infrastructure interventions, and
                    optimize resource allocation through digital simulation. The platform integrates with Palantir
                    Ontology and AI infrastructure for advanced scenario modeling.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">3. Subscriptions and Billing</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    Access to premium features requires a paid subscription. By subscribing, you authorize us to charge
                    your payment method on a recurring monthly basis. All fees are non-refundable except as required by
                    applicable law or as explicitly stated in a separate written agreement.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400 leading-relaxed">
                    <li>Subscriptions auto-renew unless cancelled at least 24 hours before the renewal date.</li>
                    <li>Pricing changes take effect at the start of the next billing cycle with 30 days notice.</li>
                    <li>Payment processing is handled by Stripe and subject to Stripe&apos;s terms of service.</li>
                    <li>You are responsible for all taxes applicable to your subscription.</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">4. Acceptable Use</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    You agree to use the Services only for lawful purposes and in accordance with these Terms. You must
                    not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400 leading-relaxed">
                    <li>Attempt to gain unauthorized access to the platform, servers, or databases.</li>
                    <li>Use the Services to transmit malware, spam, or other harmful content.</li>
                    <li>Reverse engineer, decompile, or attempt to extract source code from the platform.</li>
                    <li>Use automated scripts to scrape or bulk-extract simulation data without written consent.</li>
                    <li>Misrepresent simulation outputs as official governmental or scientific findings.</li>
                    <li>Violate any applicable local, state, national, or international law or regulation.</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">5. Intellectual Property</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    The Services, including all software, algorithms, models, visual interfaces, and documentation, are
                    owned by Civic Digital Twin and protected by applicable intellectual property laws. You are granted
                    a limited, non-exclusive, non-transferable license to use the Services during your active
                    subscription.
                  </p>
                  <p className="text-neutral-300 leading-relaxed">
                    Simulation outputs, reports, and data you generate using the platform may be used for your internal
                    planning and research purposes. Attribution to Civic Digital Twin is encouraged but not required for
                    non-commercial use.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">6. Data and Privacy</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    Your use of the Services is also governed by our{" "}
                    <a href="/privacy" className="text-lime-300 underline">
                      Privacy Policy
                    </a>
                    , which is incorporated into these Terms by reference. You retain ownership of any data you upload
                    or input into the platform. By submitting data, you grant us a limited license to process it solely
                    to provide the Services.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">7. Disclaimer of Warranties</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
                    IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                    NON-INFRINGEMENT. SIMULATION OUTPUTS ARE PROJECTIONS ONLY AND SHOULD NOT BE USED AS THE SOLE BASIS
                    FOR CRITICAL POLICY OR INFRASTRUCTURE DECISIONS.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">8. Limitation of Liability</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, CIVIC DIGITAL TWIN SHALL NOT BE LIABLE FOR ANY INDIRECT,
                    INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICES. OUR
                    TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING
                    THE CLAIM.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">9. Termination</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    Either party may terminate these Terms at any time. You may cancel your subscription through your
                    account settings. We reserve the right to suspend or terminate your access immediately if you
                    violate these Terms, with or without notice. Upon termination, your right to use the Services ceases
                    immediately.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">10. Changes to These Terms</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    We reserve the right to modify these Terms at any time. We will provide at least 30 days notice of
                    material changes via email or a prominent notice within the platform. Continued use after changes
                    take effect constitutes your acceptance of the revised Terms.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">11. Governing Law</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    These Terms are governed by and construed in accordance with the laws of the State of California,
                    without regard to conflict of law principles. Any disputes shall be resolved exclusively in the
                    state or federal courts located in San Francisco County, California.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">12. Contact Us</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    For questions about these Terms, please contact:
                  </p>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1 text-sm text-neutral-300">
                    <p className="font-semibold text-white">Civic Digital Twin</p>
                    <p>
                      Email:{" "}
                      <a href="mailto:legal@civicdigitaltwin.com" className="text-lime-300 underline">
                        legal@civicdigitaltwin.com
                      </a>
                    </p>
                    <p>
                      General:{" "}
                      <a href="mailto:hello@civicdigitaltwin.com" className="text-lime-300 underline">
                        hello@civicdigitaltwin.com
                      </a>
                    </p>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </section>
      <AppverseFooter />
    </>
  )
}
