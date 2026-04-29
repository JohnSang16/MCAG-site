import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const PRESETS = [25, 50, 100, 250]

function CheckoutForm({ amountDisplay, onSuccess }) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!stripe || !elements) return
    setLoading(true)
    setError(null)

    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.href },
      redirect: 'if_required',
    })

    if (stripeError) {
      setError(stripeError.message)
      setLoading(false)
    } else {
      onSuccess()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="font-body text-text-secondary text-sm">
        Giving <span className="font-bold text-text-primary">{amountDisplay}</span>. Your payment is secured by Stripe.
      </p>
      {!stripe && <p className="font-body text-sm text-red-600">Stripe failed to load. Check your publishable key.</p>}
      <div className="min-h-[200px]">
        <PaymentElement />
      </div>
      {error && <p className="font-body text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full py-4 rounded-xl font-heading font-bold text-surface text-lg transition-opacity disabled:opacity-60"
        style={{ background: 'linear-gradient(135deg, #1a3aad 0%, #0e7c6e 100%)' }}
      >
        {loading ? 'Processing...' : `Give ${amountDisplay}`}
      </button>
    </form>
  )
}

export function DonationForm() {
  const [selectedPreset, setSelectedPreset] = useState(null)
  const [customAmount, setCustomAmount] = useState('')
  const [clientSecret, setClientSecret] = useState(null)
  const [step, setStep] = useState('amount')
  const [fetchError, setFetchError] = useState(null)
  const [loading, setLoading] = useState(false)

  const activeAmount = selectedPreset ?? (customAmount ? parseFloat(customAmount) : null)
  const amountDisplay = activeAmount ? `$${activeAmount % 1 === 0 ? activeAmount : activeAmount.toFixed(2)}` : null

  async function handleGiveNow() {
    if (!activeAmount || activeAmount < 1) return
    setLoading(true)
    setFetchError(null)
    try {
      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Math.round(activeAmount * 100) }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setClientSecret(data.clientSecret)
      setStep('payment')
    } catch (err) {
      setFetchError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (step === 'success') {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-text-primary">Thank You!</h3>
        <p className="font-body text-text-secondary max-w-sm mx-auto">
          Your gift of {amountDisplay} has been received. May God multiply it back to you.
        </p>
        <button
          onClick={() => { setStep('amount'); setSelectedPreset(null); setCustomAmount(''); setClientSecret(null) }}
          className="font-body text-sm text-brand-blue underline underline-offset-2"
        >
          Give again
        </button>
      </div>
    )
  }

  if (step === 'payment' && clientSecret) {
    return (
      <div>
        <button
          onClick={() => setStep('amount')}
          className="flex items-center gap-1 font-body text-sm text-text-secondary mb-6 hover:text-text-primary transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance: {
              theme: 'stripe',
              variables: { colorPrimary: '#1a3aad', borderRadius: '12px' },
            },
          }}
        >
          <CheckoutForm amountDisplay={amountDisplay} onSuccess={() => setStep('success')} />
        </Elements>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="font-body text-text-secondary text-sm mb-3">Select an amount</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {PRESETS.map((p) => (
            <button
              key={p}
              onClick={() => { setSelectedPreset(p); setCustomAmount('') }}
              className={`py-3 rounded-xl border font-heading font-bold text-lg transition-colors ${
                selectedPreset === p
                  ? 'bg-brand-blue text-surface border-brand-blue'
                  : 'border-border text-text-primary bg-surface hover:border-brand-blue'
              }`}
            >
              ${p}
            </button>
          ))}
        </div>
      </div>

      <div>
        <button
          onClick={() => { setSelectedPreset(null); setCustomAmount('') }}
          className={`w-full py-3 rounded-xl border font-body text-sm transition-colors mb-2 ${
            selectedPreset === null && customAmount === ''
              ? 'border-brand-blue text-brand-blue'
              : 'border-border text-text-secondary hover:border-brand-blue'
          }`}
        >
          Any Amount
        </button>
        {selectedPreset === null && (
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-text-secondary">$</span>
            <input
              type="number"
              min="1"
              step="1"
              placeholder="Enter amount"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full pl-8 pr-4 py-3 rounded-xl border border-border bg-surface font-body text-text-primary focus:outline-none focus:border-brand-blue"
            />
          </div>
        )}
      </div>

      {fetchError && <p className="font-body text-sm text-red-600">{fetchError}</p>}

      <button
        onClick={handleGiveNow}
        disabled={!activeAmount || activeAmount < 1 || loading}
        className="w-full py-4 rounded-xl font-heading font-bold text-surface text-lg transition-opacity disabled:opacity-40"
        style={{ background: 'linear-gradient(135deg, #1a3aad 0%, #0e7c6e 100%)' }}
      >
        {loading ? 'Loading...' : `Give Now${amountDisplay ? ` — ${amountDisplay}` : ''}`}
      </button>

      <p className="font-body text-xs text-text-secondary text-center">
        Secured by Stripe. We accept card and ACH bank transfer.
      </p>
    </div>
  )
}
