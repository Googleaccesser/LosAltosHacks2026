import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Civic Digital Twin",
  description: "Learn how Civic Digital Twin collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
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
                  <h1 className="text-4xl font-bold tracking-tight text-white">Privacy Policy</h1>
                  <p className="text-neutral-400 text-sm">Last updated: April 2026</p>
                  <p className="text-neutral-300 leading-relaxed">
                    Civic Digital Twin (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This
                    Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our
                    platform, website, and related services (collectively, the &quot;Services&quot;).
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    We collect information you provide directly to us and information generated through your use of the
                    Services.
                  </p>
                  <h3 className="text-base font-semibold text-white/80 mt-4">1.1 Information You Provide</h3>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400 leading-relaxed">
                    <li>Account registration details such as name, email address, and organization.</li>
                    <li>Billing and payment information processed securely through Stripe.</li>
                    <li>Communications you send us, including support requests and feedback.</li>
                    <li>Simulation inputs, scenario configurations, and planning parameters.</li>
                  </ul>
                  <h3 className="text-base font-semibold text-white/80 mt-4">1.2 Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400 leading-relaxed">
                    <li>Log data including IP address, browser type, pages visited, and timestamps.</li>
                    <li>Device identifiers and operating system information.</li>
                    <li>Usage patterns and feature interactions within the platform.</li>
                    <li>Cookies and similar tracking technologies described in Section 5.</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">2. How We Use Your Information</h2>
                  <p className="text-neutral-300 leading-relaxed">We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400 leading-relaxed">
                    <li>Provide, maintain, and improve the Civic Digital Twin platform.</li>
                    <li>Process transactions and manage subscription billing.</li>
                    <li>Personalize your experience and remember your simulation preferences.</li>
                    <li>Send transactional emails such as account confirmations and receipts.</li>
                    <li>Respond to inquiries and provide technical support.</li>
                    <li>Analyze aggregated, anonymized usage trends to enhance platform features.</li>
                    <li>Comply with applicable laws, regulations, and legal obligations.</li>
                  </ul>
                  <p className="text-neutral-300 leading-relaxed">
                    We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">3. How We Share Your Information</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    We may share your information only in the following limited circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400 leading-relaxed">
                    <li>
                      <span className="text-white font-medium">Service Providers:</span> Trusted third-party vendors
                      who assist in operating our Services, including Stripe for payments, Supabase for database
                      infrastructure, and Palantir for ontology and AI processing.
                    </li>
                    <li>
                      <span className="text-white font-medium">Legal Compliance:</span> When required by law,
                      regulation, court order, or governmental authority.
                    </li>
                    <li>
                      <span className="text-white font-medium">Business Transfers:</span> In connection with a merger,
                      acquisition, or sale of assets, subject to standard confidentiality protections.
                    </li>
                    <li>
                      <span className="text-white font-medium">With Your Consent:</span> When you explicitly authorize
                      sharing with specific third parties.
                    </li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">4. Data Retention</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    We retain your personal information for as long as your account is active or as needed to provide
                    the Services. Simulation history and scenario data are retained for 24 months following last
                    activity. You may request deletion of your account and associated data at any time by contacting us
                    at{" "}
                    <a href="mailto:privacy@civicdigitaltwin.com" className="text-lime-300 underline">
                      privacy@civicdigitaltwin.com
                    </a>
                    .
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">5. Cookies and Tracking Technologies</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    We use cookies and similar technologies to authenticate sessions, remember preferences, and analyze
                    platform usage. You can control cookie behavior through your browser settings. Disabling certain
                    cookies may affect platform functionality, including authentication and personalization features.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">6. Data Security</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    We implement industry-standard security measures including TLS encryption in transit, AES-256
                    encryption at rest, row-level security policies on our database, and regular security audits. While
                    we take commercially reasonable precautions, no system is entirely secure and we cannot guarantee
                    absolute security.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">7. Your Rights</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    Depending on your jurisdiction, you may have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400 leading-relaxed">
                    <li>Access the personal data we hold about you.</li>
                    <li>Request correction of inaccurate or incomplete data.</li>
                    <li>Request deletion of your personal data (&quot;right to be forgotten&quot;).</li>
                    <li>Object to or restrict certain processing activities.</li>
                    <li>Data portability — receive your data in a structured, machine-readable format.</li>
                    <li>Withdraw consent at any time where processing is based on consent.</li>
                  </ul>
                  <p className="text-neutral-300 leading-relaxed">
                    To exercise any of these rights, contact us at{" "}
                    <a href="mailto:privacy@civicdigitaltwin.com" className="text-lime-300 underline">
                      privacy@civicdigitaltwin.com
                    </a>
                    . We will respond within 30 days.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">8. Children&apos;s Privacy</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    The Services are not directed to individuals under 16 years of age. We do not knowingly collect
                    personal information from children. If you believe a child has provided us with their information,
                    please contact us immediately.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">9. Changes to This Policy</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    We may update this Privacy Policy periodically to reflect changes in our practices or applicable
                    law. We will notify registered users via email and update the &quot;Last updated&quot; date at the top of this
                    page. Continued use of the Services after changes constitutes acceptance.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">10. Contact Us</h2>
                  <p className="text-neutral-300 leading-relaxed">
                    If you have questions or concerns about this Privacy Policy or our data practices, please contact
                    us:
                  </p>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1 text-sm text-neutral-300">
                    <p className="font-semibold text-white">Civic Digital Twin</p>
                    <p>
                      Email:{" "}
                      <a href="mailto:privacy@civicdigitaltwin.com" className="text-lime-300 underline">
                        privacy@civicdigitaltwin.com
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
