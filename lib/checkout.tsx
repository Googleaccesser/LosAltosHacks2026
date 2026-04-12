'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import { startCheckoutSession } from '@/app/actions/stripe'
import { Spinner } from '@/components/ui/spinner'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export function Checkout({ productId }: { productId: string }) {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initCheckout = async () => {
      try {
        const secret = await startCheckoutSession(productId)
        setClientSecret(secret)
      } catch (error) {
        console.error('Failed to initialize checkout:', error)
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
      </div>
    )
  }

  if (!clientSecret) {
    return (
      <div className="text-center py-16 text-red-400">
        Failed to load checkout. Please try again.
      </div>
    )
  }

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
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
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
