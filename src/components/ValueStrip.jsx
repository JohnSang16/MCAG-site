import { Card } from './Card'

const values = [
  {
    label: 'Community',
    description: 'We are a family rooted in love, walking together through every season of life.',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    icon: (
      <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Worship',
    description: 'We encounter God through passionate, Spirit-led worship — where hearts are opened and lives are changed.',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80',
    icon: (
      <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    label: 'Prayer',
    description: 'We believe in the transforming power of prayer and seek God together in every circumstance.',
    img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80',
    icon: (
      <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

export function ValueStrip({ className = 'pt-4 pb-20' }) {
  return (
    <section className={`${className} px-6 bg-ivory`}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {values.map(({ label, description, img, icon }) => (
          <Card key={label} className="group p-0 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
            <div className="overflow-hidden">
              <img
                src={img}
                alt={label}
                className="w-full h-40 object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-center text-center gap-4 p-6">
              <div className="p-4 bg-ivory rounded-full border border-border transition-transform duration-200 group-hover:scale-110">
                {icon}
              </div>
              <h3 className="font-heading font-semibold text-2xl text-text-primary">{label}</h3>
              <p className="font-body text-text-secondary leading-relaxed">{description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
