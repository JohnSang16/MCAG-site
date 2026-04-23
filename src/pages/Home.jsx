import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { ValueStrip } from '../components/ValueStrip'
import { PrayerRequestForm } from '../components/PrayerRequestForm'
import { FacebookCTAStrip } from '../components/FacebookCTAStrip'
import { ContainerScroll, BentoGrid, BentoCell, ContainerScale } from '../components/HeroGalleryScroll'

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1569758884145-6a2e8a00e539?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80',
]

export default function Home() {
  function scrollToServices(e) {
    e.preventDefault()
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      <Navbar />

      {/* Hero — scroll-animated bento gallery */}
      <ContainerScroll className="h-[350vh]">
        <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-3 gap-3">
          {HERO_IMAGES.map((src, i) => (
            <BentoCell key={i} className="overflow-hidden rounded-xl shadow-lg">
              <img className="size-full object-cover object-center" src={src} alt="" aria-hidden="true" />
            </BentoCell>
          ))}
        </BentoGrid>

        <ContainerScale className="z-10 text-center px-6 flex flex-col items-center" style={{ width: 'min(100vw, 56rem)' }}>
          {/* Eyebrow label */}
          <p
            className="font-body font-semibold tracking-widest text-brand-teal mb-6 uppercase"
            style={{ fontSize: '0.75rem', letterSpacing: '0.2em' }}
          >
            Clarkston, GA · Assemblies of God · Pentecostal
          </p>

          {/* Main heading */}
          <h1
            className="font-heading font-black uppercase text-text-primary leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 6.5vw, 6rem)', lineHeight: 0.95 }}
          >
            <span className="block">MIRACLE CENTER</span>
            <span className="block whitespace-nowrap">
              ASSEMBLY OF{' '}
              <span
                className="inline-block bg-brand-gold text-text-primary rounded-xl px-4 py-1 align-middle"
                style={{ fontSize: '0.88em', lineHeight: 1.15, verticalAlign: 'middle' }}
              >
                GOD
              </span>
            </span>
          </h1>

          {/* Verse */}
          <p
            className="font-body text-text-primary mt-8 leading-relaxed"
            style={{ fontSize: '1rem', maxWidth: 500 }}
          >
            "Have I not commanded you? Be strong and courageous." — Joshua 1:9
          </p>

          {/* CTA */}
          <a href="#services" onClick={scrollToServices} className="inline-block mt-10">
            <button className="font-body font-semibold text-sm px-8 py-4 rounded-full bg-text-primary text-surface flex items-center gap-2 hover:bg-text-secondary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-text-primary">
              JOIN US
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </a>
        </ContainerScale>
      </ContainerScroll>

      {/* Intro Blurb */}
      <section className="bg-brand-blue py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-surface/90 text-lg leading-relaxed">
            We are a Spirit-filled Pentecostal church in Clarkston, GA, built on faith, obedience, and
            the love of God. Whether you are taking your first steps toward Christ or looking for a
            church family to grow alongside, you are welcome here. Come as you are.
          </p>
        </div>
      </section>

      {/* Visit Us */}
      <section id="services" className="py-20 px-6 bg-ivory">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* Left — Visit info stacked */}
          <div className="flex flex-col">
            <h2 className="font-heading font-bold text-3xl text-text-primary mb-8">Visit Us</h2>
            <div className="flex flex-col gap-6 flex-1">
              <Card className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-ivory rounded-full border border-border shrink-0">
                    <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">Service Times</h3>
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

              <Card className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-ivory rounded-full border border-border shrink-0">
                    <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">Location</h3>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      4113 Church St<br />
                      Clarkston, GA 30021<br />
                      United States
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right — What We Believe */}
          <div className="flex flex-col">
            <h2 className="font-heading font-bold text-3xl text-text-primary mb-8">What We Believe</h2>
            <div className="flex flex-col gap-6 flex-1">
              <Link to="/about/jesus" className="block group flex-1">
                <Card className="transition-shadow group-hover:shadow-md h-full overflow-hidden p-0">
                  <img
                    src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80"
                    alt="Jesus Christ"
                    className="w-full h-36 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-text-primary mb-1">Learn About Jesus Christ</h3>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      Discover who Jesus is, what he did, and what it means to follow him today.
                    </p>
                  </div>
                </Card>
              </Link>

              <Link to="/about/beliefs" className="block group flex-1">
                <Card className="transition-shadow group-hover:shadow-md h-full overflow-hidden p-0">
                  <img
                    src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80"
                    alt="Assembly of God worship"
                    className="w-full h-36 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-text-primary mb-1">What It Means to Be Assembly of God</h3>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      Explore the Pentecostal faith, Spirit-filled living, and the AG statement of beliefs.
                    </p>
                    <a
                      href="https://ag.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="font-body text-xs text-brand-blue hover:underline mt-2 inline-block"
                    >
                      Learn more at ag.org →
                    </a>
                  </div>
                </Card>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Values Strip */}
      <ValueStrip />

      {/* Featured Quote */}
      <section
        className="relative py-24 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0e7c6e 0%, #1a3aad 100%)' }}
      >
        <div className="relative z-10 max-w-[680px] mx-auto text-center">
          <span className="font-heading text-brand-gold text-7xl leading-none select-none">&ldquo;</span>
          <p className="font-heading italic text-surface text-xl leading-relaxed -mt-4">
            We started with a living room and a calling. God has been faithful every step of the way — and we are just getting started.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-surface/20 border border-surface/30 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-surface/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-body font-bold text-surface text-sm">Pastor Abraham Thang</p>
              <p className="font-body text-surface/70 text-xs mt-0.5">Lead Pastor, Miracle Center Assembly of God</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Request Form */}
      <section className="pt-2 pb-20 px-6 bg-ivory">
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

      {/* Meet the Pastors */}
      <section className="py-20 px-6 bg-ivory">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-text-primary text-center mb-2">
            Meet the Pastors
          </h2>
          <p className="font-body text-text-secondary text-center mb-10">
            Servant leaders called to build this congregation with love and obedience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                name: 'Pastor Abraham Thang', title: 'Lead Pastor',
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
              },
              {
                name: 'Pastor Sarah Muan Cing', title: 'Pastor',
                img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80',
              },
            ].map(({ name, title, img }) => (
              <Card key={name} className="flex flex-col items-center text-center gap-4 overflow-hidden p-0">
                <img src={img} alt={name} className="w-full h-48 object-cover object-top" />
                <div className="px-6 pb-6 flex flex-col items-center gap-3">
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-text-primary">{name}</h3>
                    <p className="font-body text-sm text-brand-teal font-medium mt-0.5">{title}</p>
                  </div>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    A devoted servant of God with a heart for the community, called to shepherd this
                    congregation with compassion, truth, and faith.
                  </p>
                  <Link to="/about" className="font-body text-sm text-brand-blue hover:underline">
                    Learn more
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook CTA */}
      <FacebookCTAStrip />

      <Footer />
    </div>
  )
}
