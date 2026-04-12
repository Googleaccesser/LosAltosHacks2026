'use server'

import { stripe } from '@/lib/stripe'
import { PRODUCTS } from '@/lib/products'

export async function startCheckoutSession(productId: string) {
  const product = PRODUCTS.find((p) => p.id === productId)
  if (!product) {
    throw new Error(`Product with id "${productId}" not found`)
  }

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded_page',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: product.priceInCents,
          recurring: {
            interval: 'month',
          },
        },
        quantity: 1,
      },
    ],
    mode: 'subscription',
    redirect_on_completion: 'never',
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
  })

  if (!session.client_secret) {
    throw new Error('Failed to create checkout session: no client_secret returned')
  }

  return session.client_secret
}
