const values = [
  {
    label: 'Community',
    description: 'We are a family rooted in love, walking together through every season of life.',
    img: '/assets/stockimg/community.jpg',
    icon: (
      <svg className="w-7 h-7 text-surface" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Worship',
    description: 'We encounter God through passionate, Spirit-led worship, where hearts are opened and lives are changed.',
    img: '/assets/stockimg/worship.jpg',
    icon: (
      <svg className="w-7 h-7 text-surface" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    label: 'Prayer',
    description: 'We believe in the transforming power of prayer and seek God together in every circumstance.',
    img: '/assets/stockimg/prayer.jpg',
    icon: (
      <svg className="w-7 h-7 text-surface" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

export function ValueStrip({ className = 'py-20' }) {
  return (
    <section className={`${className} px-6 bg-ivory`}>
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12">
          <p className="font-body text-brand-teal text-xs font-bold uppercase tracking-widest mb-3">What We Are Built On</p>
          <h2 className="font-heading font-bold text-4xl text-text-primary">Our Core Values</h2>
          <p className="font-body text-text-secondary mt-4 max-w-xl mx-auto leading-relaxed">
            Everything we do flows from these three convictions. They shape how we gather, how we serve, and how we grow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map(({ label, description, img, icon }) => (
            <div key={label} className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 h-96">
              {/* Background image */}
              <img
                src={img}
                alt={label}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                {/* Icon top-left */}
                <div className="w-11 h-11 rounded-full bg-brand-teal/80 backdrop-blur-sm flex items-center justify-center">
                  {icon}
                </div>

                {/* Label + description bottom */}
                <div>
                  <h3 className="font-heading font-bold text-3xl text-surface mb-2">{label}</h3>
                  <p className="font-body text-surface/80 text-base leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
