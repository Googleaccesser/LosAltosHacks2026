'use client'

import { useEffect, useState } from 'react'
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import { startCheckoutSession } from '@/app/actions/stripe'
import { Spinner } from '@/components/ui/spinner'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)
    setErrorMessage('')

    const { error } = await stripe.confirmSetup({
      elements,
      redirect: 'if_required',
    })

    if (error) {
      setErrorMessage(error.message || 'An unexpected error occurred. Please try again.')
      setIsLoading(false)
    } else {
      setIsSuccess(true)
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-14 h-14 rounded-full bg-lime-400/20 border border-lime-400/40 flex items-center justify-center mb-4">
          <svg className="h-7 w-7 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-white font-semibold text-lg mb-1">Payment method saved</h4>
        <p className="text-white/50 text-sm">Your subscription is being activated. {"You'll"} receive a confirmation email shortly.</p>
      </div>
    )
  }

  if (!stripe || !elements) {
    return (
      <div className="flex items-center justify-center py-10">
        <Spinner className="h-6 w-6" />
        <span className="ml-3 text-white/60 text-sm">Loading payment form...</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-6">
        <PaymentElement
          options={{
            layout: 'tabs',
          }}
        />
      </div>
      {errorMessage && (
        <div className="mb-5 p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-300 text-sm leading-relaxed">
          {errorMessage}
        </div>
      )}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200
                   bg-lime-400 text-black hover:bg-lime-300 active:scale-[0.99]
                   disabled:opacity-60 disabled:cursor-not-allowed
                   flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Spinner className="h-4 w-4" />
            Processing...
          </>
        ) : (
          'Subscribe now'
        )}
      </button>
      <p className="mt-3 text-center text-white/30 text-xs">
        Secured by Stripe · Cancel anytime
      </p>
    </form>
  )
}

export function Checkout({ productId }: { productId: string }) {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const initCheckout = async () => {
      try {
        const secret = await startCheckoutSession(productId)
        setClientSecret(secret)
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : "Unknown error"
        setError(errorMsg)
      } finally {
        setLoading(false)
      }
    }

    initCheckout()
  }, [productId])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Spinner className="h-8 w-8" />
        <span className="ml-3 text-white/70">Loading checkout...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-400 font-medium mb-2">Error initializing checkout</p>
        <p className="text-white/60 text-sm">{error}</p>
      </div>
    )
  }

  if (!clientSecret) {
    return (
      <div className="text-center py-16">
        <p className="text-red-400 font-medium">Failed to load checkout</p>
        <p className="text-white/60 text-sm mt-1">Please try selecting a plan again</p>
      </div>
    )
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: 'night',
          variables: {
            colorBackground: '#0f0f0f',
            colorDanger: '#ff6b6b',
            colorDangerText: '#ffffff',
            colorIcon: '#c6ff3a',
            colorInput: '#1a1a1a',
            colorInputBackground: '#0f0f0f',
            colorInputBorder: '#333333',
            colorInputText: '#ffffff',
            colorLinkHover: '#c6ff3a',
            colorPrimary: '#c6ff3a',
            colorPrimaryText: '#0f0f0f',
            colorSecondary: '#666666',
            colorSecondaryBorder: '#333333',
            colorSecondaryText: '#a0a0a0',
            colorSuccess: '#10b981',
            colorSuccessText: '#ffffff',
            colorText: '#ffffff',
            colorTextPlaceholder: '#666666',
            colorTextSecondary: '#a0a0a0',
            colorWarning: '#f59e0b',
            colorWarningText: '#ffffff',
            borderRadius: '12px',
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", sans-serif',
            fontSizeBase: '16px',
            lineHeightBase: '1.5',
            spacingUnit: '4px',
          },
        },
      }}
    >
      <CheckoutForm />
    </Elements>
  )
}
