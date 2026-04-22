import { useState } from 'react'
import { Button } from './Button'

export function PrayerRequestForm() {
  const [form, setForm] = useState({ name: '', email: '', request: '' })
  const [status, setStatus] = useState('idle')

  const formspreeId = import.meta.env.VITE_FORMSPREE_ID

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.request }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-surface border border-border rounded-lg p-8 text-center max-w-xl mx-auto">
        <div className="w-12 h-12 rounded-full bg-surface border border-brand-teal flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-heading text-lg text-text-primary">
          Your prayer request has been received. Check your email for confirmation.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface border border-border rounded-lg p-8 max-w-xl mx-auto flex flex-col gap-5"
    >
      <div className="flex flex-col gap-1.5">
        <label className="font-body text-sm font-medium text-text-primary" htmlFor="prayer-name">
          Name
        </label>
        <input
          id="prayer-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className="font-body text-sm border border-border rounded px-4 py-2.5 bg-ivory focus:outline-none focus:ring-2 focus:ring-brand-blue/40 text-text-primary placeholder:text-text-secondary"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-body text-sm font-medium text-text-primary" htmlFor="prayer-email">
          Email
        </label>
        <input
          id="prayer-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="font-body text-sm border border-border rounded px-4 py-2.5 bg-ivory focus:outline-none focus:ring-2 focus:ring-brand-blue/40 text-text-primary placeholder:text-text-secondary"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-body text-sm font-medium text-text-primary" htmlFor="prayer-request">
          Prayer Request
        </label>
        <textarea
          id="prayer-request"
          name="request"
          required
          rows={5}
          value={form.request}
          onChange={handleChange}
          placeholder="Share your prayer request..."
          className="font-body text-sm border border-border rounded px-4 py-2.5 bg-ivory focus:outline-none focus:ring-2 focus:ring-brand-blue/40 text-text-primary placeholder:text-text-secondary resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="font-body text-sm text-red-600">Something went wrong. Please try again.</p>
      )}

      <Button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Submit Prayer Request'}
      </Button>
    </form>
  )
}
