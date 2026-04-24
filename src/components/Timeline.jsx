const milestones = [
  {
    label: 'The Calling',
    description: "Pastors Abraham and Sarah receive God's calling to start a new congregation.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    label: 'First Home Service',
    description: 'The church holds its first service from the family home in Clarkston, GA.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    label: 'Growing Together',
    description: 'The congregation outgrows the home and moves to a larger space.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'A Church of Our Own',
    description: 'Miracle Center Assembly of God establishes its current home in Clarkston, GA.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

export function Timeline() {
  return (
    <div className="relative">
      {/* Centre vertical line — desktop only */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-px bg-gradient-to-b from-brand-teal via-brand-blue to-brand-teal" />

      <ol className="space-y-12">
        {milestones.map((m, i) => {
          const isLeft = i % 2 === 0
          return (
            <li key={m.label} className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-0">

              {/* Left slot */}
              <div className={isLeft ? 'md:pr-10 md:text-right' : 'hidden md:block'}>
                {isLeft && <Card m={m} />}
              </div>

              {/* Centre dot */}
              <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full text-surface shadow-lg flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #0e7c6e, #1a3aad)' }}>
                {m.icon}
              </div>

              {/* Right slot */}
              <div className={!isLeft ? 'md:pl-10' : 'hidden md:block'}>
                {!isLeft && <Card m={m} />}
              </div>

              {/* Mobile — single column with dot on left */}
              <div className="md:hidden flex items-start gap-4 col-span-1">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full text-surface shadow-md mt-1"
                  style={{ background: 'linear-gradient(135deg, #0e7c6e, #1a3aad)' }}>
                  {m.icon}
                </div>
                <Card m={m} />
              </div>

            </li>
          )
        })}
      </ol>
    </div>
  )
}

function Card({ m }) {
  return (
    <div className="rounded-2xl border border-border bg-surface shadow-sm overflow-hidden w-full">
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #0e7c6e, #1a3aad)' }} />
      <div className="px-6 py-5">
        <p className="font-body text-xs font-bold uppercase tracking-widest text-brand-teal mb-1">
          Chapter {['I','II','III','IV'][['The Calling','First Home Service','Growing Together','A Church of Our Own'].indexOf(m.label)]}
        </p>
        <h4 className="font-heading text-xl font-bold text-text-primary mb-2">{m.label}</h4>
        <p className="font-body text-sm text-text-secondary leading-relaxed">{m.description}</p>
      </div>
    </div>
  )
}
