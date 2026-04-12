"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Check, ArrowLeft, Zap, Building2, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkout } from "@/lib/checkout"
import { PRODUCTS } from "@/lib/products"

const PLAN_ICONS = {
  starter: Rocket,
  professional: Zap,
  enterprise: Building2,
}

const PLAN_HIGHLIGHT = {
  starter: false,
  professional: true,
  enterprise: false,
}

export default function PricingPage() {
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null)

  const selectedPlan = PRODUCTS.find((p) => p.id === selectedPlanId)

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 p-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icons/skitbit-white.svg"
                alt="Civic Digital Twin logo"
                width={20}
                height={20}
                className="h-5 w-5"
              />
              <span className="font-semibold tracking-wide text-white text-sm">Civic DT</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl px-4 py-12 pb-24">
        {/* Hero */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass border border-lime-400/20 text-lime-400 text-xs font-medium tracking-wide uppercase mb-6">
            Simple, transparent pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-balance mb-4">
            Choose your plan
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto text-pretty leading-relaxed">
            Empower your city planning with AI-driven simulations. Cancel anytime.
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {PRODUCTS.map((product) => {
            const isSelected = selectedPlanId === product.id
            const isPopular = PLAN_HIGHLIGHT[product.id as keyof typeof PLAN_HIGHLIGHT]
            const Icon = PLAN_ICONS[product.id as keyof typeof PLAN_ICONS] ?? Zap
            const priceInDollars = product.priceInCents / 100

            return (
              <button
                key={product.id}
                onClick={() => setSelectedPlanId(product.id)}
                className={`relative text-left rounded-2xl p-6 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400
                  ${isSelected
                    ? "border-2 border-lime-400 bg-lime-400/5 shadow-[0_0_30px_rgba(163,230,53,0.15)]"
                    : isPopular
                    ? "border border-lime-400/30 liquid-glass-enhanced hover:border-lime-400/60"
                    : "border border-white/10 liquid-glass hover:border-white/25"
                  }`}
              >
                {isPopular && !isSelected && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-lime-400 text-black text-xs font-bold rounded-full tracking-wide">
                    Most Popular
                  </div>
                )}
                {isSelected && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-lime-400 text-black text-xs font-bold rounded-full tracking-wide">
                    Selected
                  </div>
                )}

                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-xl
                    ${isSelected ? "bg-lime-400/20" : "bg-white/5"}`}>
                    <Icon className={`h-5 w-5 ${isSelected ? "text-lime-400" : "text-white/60"}`} />
                  </div>
                  <div>
                    <h2 className="text-white font-semibold text-lg leading-tight">{product.name}</h2>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${isSelected ? "text-lime-400" : "text-white"}`}>
                    ${priceInDollars.toLocaleString()}
                  </span>
                  <span className="text-white/50 text-sm ml-1">/month</span>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${isSelected ? "text-lime-400" : "text-white/40"}`} />
                      <span className="text-white/75">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Indicator */}
                <div className={`mt-6 w-full py-2.5 rounded-xl text-sm font-medium text-center transition-all
                  ${isSelected
                    ? "bg-lime-400 text-black"
                    : "bg-white/5 text-white/70 border border-white/10"
                  }`}>
                  {isSelected ? "Selected — complete below" : "Select plan"}
                </div>
              </button>
            )
          })}
        </div>

        {/* Checkout Section */}
        <div className="transition-all duration-500">
          {selectedPlan ? (
            <div className="liquid-glass-enhanced rounded-2xl border border-white/10 overflow-hidden">
              {/* Checkout Header */}
              <div className="px-8 py-5 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Complete your subscription
                  </h3>
                  <p className="text-white/50 text-sm mt-0.5">
                    {selectedPlan.name} — ${(selectedPlan.priceInCents / 100).toLocaleString()}/month
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedPlanId(null)}
                  className="text-white/50 hover:text-white hover:bg-white/10 rounded-lg text-xs"
                >
                  Change plan
                </Button>
              </div>

              {/* Embedded Stripe Checkout */}
              <div className="p-6 md:p-8 bg-white/[0.02]">
                <Checkout productId={selectedPlan.id} />
              </div>
            </div>
          ) : (
            <div className="liquid-glass rounded-2xl border border-white/10 border-dashed p-12 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
                <Zap className="h-6 w-6 text-white/30" />
              </div>
              <p className="text-white/40 text-sm">
                Select a plan above to proceed to payment
              </p>
            </div>
          )}
        </div>

        {/* Trust signals */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/35 text-xs">
          <span>Secured by Stripe</span>
          <span aria-hidden="true">·</span>
          <span>Cancel anytime</span>
          <span aria-hidden="true">·</span>
          <span>No setup fees</span>
          <span aria-hidden="true">·</span>
          <span>Billed monthly</span>
        </div>
      </main>
    </div>
  )
}
