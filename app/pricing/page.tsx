"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Check, ArrowLeft, Zap, Building2, Rocket, Lock, RefreshCw, CreditCard } from "lucide-react"
import { Checkout } from "@/lib/checkout"
import { PRODUCTS } from "@/lib/products"

const PLAN_META: Record<string, { icon: React.ElementType; popular: boolean }> = {
  starter:      { icon: Rocket,    popular: false },
  professional: { icon: Zap,       popular: true  },
  enterprise:   { icon: Building2, popular: false },
}

export default function PricingPage() {
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null)
  const selectedPlan = PRODUCTS.find((p) => p.id === selectedPlanId)

  return (
    <div className="min-h-screen text-white" style={{ background: "#000" }}>

      {/* Subtle background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(198,255,58,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 px-4 pt-4">
        <div className="mx-auto max-w-5xl">
          <div className="flex h-14 items-center justify-between px-5 liquid-glass-header rounded-full">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icons/skitbit-white.svg"
                alt="Civic Digital Twin"
                width={20}
                height={20}
                className="h-5 w-5"
              />
              <span className="font-semibold tracking-wide text-white text-sm">Civic DT</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to home
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-4 py-12 pb-28">

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-lime-400/20 text-lime-400 text-xs font-medium tracking-widest uppercase mb-5">
            Simple, transparent pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-balance mb-3 leading-tight">
            Choose your plan
          </h1>
          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed text-pretty">
            Empower your city planning with AI-driven simulations.
            No setup fees. Cancel anytime.
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {PRODUCTS.map((product) => {
            const isSelected = selectedPlanId === product.id
            const meta = PLAN_META[product.id] ?? { icon: Zap, popular: false }
            const Icon = meta.icon
            const price = product.priceInCents / 100

            return (
              <button
                key={product.id}
                onClick={() => setSelectedPlanId(product.id)}
                aria-pressed={isSelected}
                className={[
                  "relative text-left rounded-2xl p-6 transition-all duration-300 outline-none",
                  "focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                  // Use flex column so the CTA button always sits at the bottom
                  "flex flex-col",
                  isSelected
                    ? "border-2 border-lime-400 bg-lime-400/[0.04] shadow-[0_0_40px_rgba(198,255,58,0.12)]"
                    : meta.popular
                    ? "border border-lime-400/25 liquid-glass-enhanced hover:border-lime-400/50 hover:shadow-[0_0_20px_rgba(198,255,58,0.08)]"
                    : "border border-white/10 liquid-glass hover:border-white/20",
                ].join(" ")}
              >
                {/* Badge */}
                {(isSelected || meta.popular) && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-lime-400 text-black text-[11px] font-bold rounded-full tracking-wide whitespace-nowrap">
                    {isSelected ? "Selected" : "Most Popular"}
                  </div>
                )}

                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex items-center justify-center w-9 h-9 rounded-xl flex-shrink-0 ${isSelected ? "bg-lime-400/15" : "bg-white/[0.06]"}`}>
                    <Icon className={`h-4.5 w-4.5 ${isSelected ? "text-lime-400" : "text-white/50"}`} />
                  </div>
                  <h2 className="text-white font-semibold text-base leading-tight">{product.name}</h2>
                </div>

                {/* Price */}
                <div className="mb-3">
                  <span className={`text-3xl font-bold tabular-nums ${isSelected ? "text-lime-400" : "text-white"}`}>
                    ${price.toLocaleString()}
                  </span>
                  <span className="text-white/40 text-sm ml-1">/mo</span>
                </div>

                {/* Description */}
                <p className="text-white/55 text-sm leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Features — flex-1 so it fills remaining space, pushing button to bottom */}
                <ul className="space-y-2 flex-1 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className={`h-3.5 w-3.5 mt-0.5 flex-shrink-0 ${isSelected ? "text-lime-400" : "text-white/30"}`} />
                      <span className="text-white/70 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA — mt-auto keeps buttons aligned across cards */}
                <div className={[
                  "mt-auto w-full py-2.5 rounded-xl text-sm font-semibold text-center transition-all duration-200",
                  isSelected
                    ? "bg-lime-400 text-black"
                    : "bg-white/[0.05] text-white/60 border border-white/[0.08] hover:bg-white/10 hover:text-white/80",
                ].join(" ")}>
                  {isSelected ? "Selected — complete below" : "Select plan"}
                </div>
              </button>
            )
          })}
        </div>

        {/* Checkout Panel */}
        <div className="transition-all duration-500">
          {selectedPlan ? (
            <div className="liquid-glass-enhanced rounded-2xl border border-white/10 overflow-hidden">

              {/* Panel Header */}
              <div className="px-6 md:px-8 py-5 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-white font-semibold text-base">
                    Complete your subscription
                  </h3>
                  <p className="text-white/45 text-sm mt-0.5">
                    {selectedPlan.name} &mdash; ${(selectedPlan.priceInCents / 100).toLocaleString()}/month
                  </p>
                </div>
                <button
                  onClick={() => setSelectedPlanId(null)}
                  className="flex items-center gap-1.5 text-white/40 hover:text-white/80 transition-colors text-xs font-medium self-start sm:self-auto"
                >
                  <RefreshCw className="h-3 w-3" />
                  Change plan
                </button>
              </div>

              {/* Stripe Payment Element */}
              <div className="p-6 md:p-8">
                <Checkout productId={selectedPlan.id} />
              </div>
            </div>
          ) : (
            <div className="liquid-glass rounded-2xl border border-dashed border-white/[0.08] p-12 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/[0.04] flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-white/25" />
              </div>
              <p className="text-white/35 text-sm">
                Select a plan above to proceed to payment
              </p>
            </div>
          )}
        </div>

        {/* Trust signals */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5 text-white/30 text-xs">
          <span className="flex items-center gap-1.5">
            <Lock className="h-3 w-3" />
            Secured by Stripe
          </span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>Cancel anytime</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>No setup fees</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span>Billed monthly</span>
        </div>
      </main>
    </div>
  )
}
