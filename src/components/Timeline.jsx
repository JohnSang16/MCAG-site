const milestones = [
  {
    label: 'The Calling',
    description: "Pastors Abraham and Sarah receive God's calling to start a new congregation.",
  },
  {
    label: 'First Home Service',
    description: 'The church holds its first service from the family home in Clarkston, GA.',
  },
  {
    label: 'Growing Together',
    description: 'The congregation outgrows the home and moves to a larger space.',
  },
  {
    label: 'A Church of Our Own',
    description: 'Miracle Center Assembly of God establishes its current home in Clarkston, GA.',
  },
]

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-teal md:-translate-x-px" />
      <ol className="space-y-10">
        {milestones.map((m, i) => {
          const isEven = i % 2 === 0
          return (
            <li key={m.label} className="relative flex items-start gap-6 md:gap-0">
              <div className="relative z-10 flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-brand-teal border-4 border-ivory flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2 md:mt-0">
                <span className="w-2 h-2 rounded-full bg-surface" />
              </div>
              <div
                className={`md:w-5/12 pl-2 md:pl-0 ${
                  isEven
                    ? 'md:mr-auto md:pr-16 md:text-right'
                    : 'md:ml-auto md:pl-16 md:text-left'
                }`}
              >
                <h4 className="font-heading text-lg font-semibold text-text-primary mb-1">{m.label}</h4>
                <p className="font-body text-text-secondary text-sm leading-relaxed">{m.description}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
