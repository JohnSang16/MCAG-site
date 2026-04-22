import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { ValueStrip } from '../components/ValueStrip'
import { PrayerRequestForm } from '../components/PrayerRequestForm'
import { FacebookCTAStrip } from '../components/FacebookCTAStrip'

export default function Home() {
  function scrollToServices(e) {
    e.preventDefault()
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-ivory py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <img
            src="/assets/logo.png"
            alt="Miracle Center Assembly of God"
            className="h-[120px] w-auto"
            onError={e => { e.target.style.display = 'none' }}
          />
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-text-primary leading-tight">
            Miracle Center Assembly of God
          </h1>
          <p className="font-body text-text-secondary text-lg leading-relaxed max-w-xl">
            "Have I not commanded you? Be strong and courageous."
            <span className="block text-sm mt-1 text-text-secondary/70">Joshua 1:9</span>
          </p>
          <a href="#services" onClick={scrollToServices}>
            <Button>Join Us</Button>
          </a>
        </div>
      </section>

      {/* Intro Blurb */}
      <section className="bg-surface py-16 px-6 border-y border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-text-primary text-lg leading-relaxed">
            We are a Spirit-filled Pentecostal church in Clarkston, GA, built on faith, obedience, and
            the love of God. Whether you are taking your first steps toward Christ or looking for a
            church family to grow alongside, you are welcome here. Come as you are.
          </p>
        </div>
      </section>

      {/* Service Times + Location */}
      <section id="services" className="py-20 px-6 bg-ivory">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-text-primary text-center mb-10">
            Visit Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-ivory rounded-full border border-border shrink-0">
                  <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-text-primary mb-3">Service Times</h3>
                  <div className="flex flex-col gap-2 font-body text-sm text-text-secondary">
                    <div>
                      <span className="font-medium text-text-primary">Saturday</span>
                      <p>7:30 – 9:00 pm (Youth Service)</p>
                    </div>
                    <div>
                      <span className="font-medium text-text-primary">Sunday</span>
                      <p>4:00 – 6:30 pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-ivory rounded-full border border-border shrink-0">
                  <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-text-primary mb-3">Location</h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    Clarkston, GA<br />
                    <span className="text-text-secondary/70 text-xs">Exact address available upon contact</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Strip */}
      <ValueStrip />

      {/* Meet the Pastors */}
      <section className="py-20 px-6 bg-surface border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-text-primary text-center mb-2">
            Meet the Pastors
          </h2>
          <p className="font-body text-text-secondary text-center mb-10">
            Servant leaders called to build this congregation with love and obedience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: 'Pastor Abraham Thang', title: 'Lead Pastor' },
              { name: 'Pastor Sarah Muan Cing', title: 'Pastor' },
            ].map(({ name, title }) => (
              <Card key={name} className="flex flex-col items-center text-center gap-4">
                <div className="w-24 h-24 rounded-lg bg-ivory border border-border flex items-center justify-center">
                  <svg className="w-10 h-10 text-text-secondary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-text-primary">{name}</h3>
                  <p className="font-body text-sm text-brand-blue font-medium mt-0.5">{title}</p>
                </div>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  A devoted servant of God with a heart for the community, called to shepherd this
                  congregation with compassion, truth, and faith.
                </p>
                <Link to="/about" className="font-body text-sm text-brand-blue hover:underline">
                  Learn more
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Request Form */}
      <section className="py-20 px-6 bg-ivory">
        <div className="max-w-xl mx-auto text-center mb-10">
          <h2 className="font-heading font-bold text-3xl text-text-primary mb-3">
            Prayer Requests
          </h2>
          <p className="font-body text-text-secondary">
            We believe in the power of prayer. Share your request and our church family will
            pray alongside you.
          </p>
        </div>
        <PrayerRequestForm />
      </section>

      {/* Facebook CTA */}
      <FacebookCTAStrip />

      <Footer />
    </div>
  )
}
