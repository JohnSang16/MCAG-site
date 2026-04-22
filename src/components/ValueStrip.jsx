const values = [
  {
    label: 'Community',
    description: 'We are a family rooted in love, walking together through every season of life.',
    icon: (
      <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Prayer',
    description: 'We believe in the transforming power of prayer and seek God together in every circumstance.',
    icon: (
      <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

export function ValueStrip() {
  return (
    <section className="py-20 px-6 bg-ivory">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
        {values.map(({ label, description, icon }) => (
          <div key={label} className="flex flex-col items-center text-center gap-4">
            <div className="p-4 bg-surface rounded-full border border-border">{icon}</div>
            <h3 className="font-heading font-semibold text-2xl text-text-primary">{label}</h3>
            <p className="font-body text-text-secondary leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
