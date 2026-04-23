import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { PageHero } from '../components/PageHero'
import { Card } from '../components/Card'

const subpages = [
  {
    to: '/about/history',
    label: 'Our History',
    description: 'How Miracle Center began — from a living room calling to a growing congregation.',
    img: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80',
  },
  {
    to: '/about/jesus',
    label: 'More About Jesus Christ',
    description: 'Who Jesus is, what he did, and what it means to follow him today.',
    img: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80',
  },
  {
    to: '/about/beliefs',
    label: 'What We Believe',
    description: 'Our Pentecostal faith, core values, and the Assemblies of God statement of beliefs.',
    img: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80',
  },
]

export default function About() {
  return (
    <div className="bg-ivory min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero title="About Us" subtitle="A church built on obedience, community, and faith" />

        {/* Subpage cards */}
        <section className="py-20 px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subpages.map(({ to, label, description, img }) => (
              <Link key={to} to={to} className="group block">
                <Card className="p-0 overflow-hidden h-full flex flex-col transition-shadow group-hover:shadow-lg">
                  <img
                    src={img}
                    alt={label}
                    className="w-full h-44 object-cover object-center"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading font-bold text-lg text-text-primary mb-2">{label}</h3>
                    <p className="font-body text-sm text-text-secondary leading-relaxed flex-1">{description}</p>
                    <span className="font-body text-sm text-brand-blue mt-4 inline-block group-hover:underline">Read more →</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Meet Our Pastors */}
        <section className="py-20 px-4 bg-surface">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-10 text-center">Meet Our Pastors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-border mb-5 flex items-center justify-center">
                  <span className="font-body text-text-secondary text-sm">Photo</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-1">Pastor Abraham Thang</h3>
                <p className="font-body text-brand-teal text-sm font-medium mb-4">Lead Pastor</p>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  Pastor Abraham has served the Clarkston community with a shepherd's heart for years. His
                  preaching is grounded in Scripture and animated by the Holy Spirit, drawing people into a
                  deeper relationship with God.
                </p>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-border mb-5 flex items-center justify-center">
                  <span className="font-body text-text-secondary text-sm">Photo</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-1">Pastor Sarah Muan Cing</h3>
                <p className="font-body text-brand-teal text-sm font-medium mb-4">Pastor</p>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  Pastor Sarah is a woman of deep faith and extraordinary compassion. She plays a vital role
                  in shepherding the congregation, leading worship, and nurturing the spiritual growth of
                  every member.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Times */}
        <section className="py-20 px-4 bg-ivory">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-8">Service Times</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="text-center">
                <p className="font-heading text-lg font-semibold text-text-primary mb-1">Saturday</p>
                <p className="font-body text-text-secondary text-sm">7:30 – 9:00 PM</p>
                <p className="font-body text-brand-teal text-xs font-medium mt-2">Youth Service</p>
              </Card>
              <Card className="text-center">
                <p className="font-heading text-lg font-semibold text-text-primary mb-1">Sunday</p>
                <p className="font-body text-text-secondary text-sm">4:00 – 6:30 PM</p>
                <p className="font-body text-brand-teal text-xs font-medium mt-2">Main Service</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Find Us */}
        <section className="py-20 px-4 max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-4 text-center">Find Us</h2>
          <p className="font-body text-text-secondary text-center mb-8">
            We are located at 4113 Church St, Clarkston, GA 30021 — a vibrant, diverse community just east of Atlanta.
          </p>
          <div className="rounded-lg overflow-hidden border border-border">
            <iframe
              title="Miracle Center Assembly of God location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26504.98!2d-84.24!3d33.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a5ef5d5cdb09%3A0x6b0cef7f28a7a2c7!2sClarkston%2C%20GA!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full block"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
