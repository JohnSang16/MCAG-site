import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { ValueStrip } from '../components/ValueStrip'
import { PrayerRequestForm } from '../components/PrayerRequestForm'
import { FacebookCTAStrip } from '../components/FacebookCTAStrip'
import { ContainerScroll, BentoGrid, BentoCell, ContainerScale } from '../components/HeroGalleryScroll'

// size = diameter in px, top = vertical offset from top of section (px)
const FLOAT_CIRCLES = [
  { img: '/assets/mcaglive/lp1.jpg',     objPos: 'object-[center_28%]', size: 100, top: 18  },
  { img: '/assets/mcaglive/bg1.jpg',     objPos: 'object-center',        size: 90,  top: 140 },
  { img: '/assets/mcaglive/nupite.jpg',  objPos: 'object-center',        size: 118, top: 50  },
  { img: '/assets/mcaglive/bg2.jpg',     objPos: 'object-center',        size: 80,  top: 190 },
  { img: '/assets/mcaglive/ap1.jpg',     objPos: 'object-center',        size: 90,  top: 100 },
  { img: '/assets/mcaglive/bg3.jpg',     objPos: 'object-center',        size: 104, top: 10  },
  { img: '/assets/mcaglive/papite.jpg',  objPos: 'object-center',        size: 96,  top: 160 },
  { img: '/assets/mcaglive/bg4.jpg',     objPos: 'object-center',        size: 76,  top: 70  },
  { img: '/assets/mcaglive/ap2.jpg',     objPos: 'object-center',        size: 84,  top: 210 },
  { img: '/assets/mcaglive/bg5.jpg',     objPos: 'object-center',        size: 108, top: 30  },
  { img: '/assets/mcaglive/bg 6.jpg',    objPos: 'object-center',        size: 88,  top: 130 },
  { img: '/assets/mcaglive/bg7.jpg',     objPos: 'object-center',        size: 96,  top: 180 },
  { img: '/assets/mcaglive/bg8.jpg',     objPos: 'object-center',        size: 74,  top: 55  },
  { img: '/assets/mcaglive/bg9.jpg',     objPos: 'object-center',        size: 100, top: 230 },
  { img: '/assets/mcaglive/bg10.jpg',    objPos: 'object-center',        size: 82,  top: 90  },
  { img: '/assets/mcaglive/bg11.jpg',    objPos: 'object-center',        size: 112, top: 160 },
  { img: '/assets/mcaglive/nupite.jpg',  objPos: 'object-center',        size: 70,  top: 20  },
  { img: '/assets/mcaglive/bg3.jpg',     objPos: 'object-center',        size: 86,  top: 200 },
]

const HEART_PATH = "M50,82 C50,82 8,55 8,30 C8,13 21,4 35,11 C42,14 47,21 50,27 C53,21 58,14 65,11 C79,4 92,13 92,30 C92,55 50,82 50,82 Z"

function HeartImg({ src, size, idx }) {
  const id = `hclip-${idx}`
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block', flexShrink: 0 }} aria-hidden="true">
      <defs>
        <clipPath id={id}>
          <path d={HEART_PATH} />
        </clipPath>
      </defs>
      {src && <image href={src} x="0" y="0" width="100" height="100" preserveAspectRatio="xMidYMid slice" clipPath={`url(#${id})`} />}
      <path d={HEART_PATH} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2.5" />
    </svg>
  )
}

const HERO_IMAGES = [
  '/assets/mcaglive/groupimg2.jpg',
  '/assets/mcaglive/nupite.jpg',
  '/assets/mcaglive/sundayschool2.jpg',
  '/assets/mcaglive/papite.jpg',
  '/assets/mcaglive/groupimg.jpg',
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

        <ContainerScale className="z-10 text-center flex flex-col items-center" style={{ width: 'min(100vw, 58rem)' }}>
          {/* Frosted glass card */}
          <div className="rounded-3xl px-10 py-10 flex flex-col items-center" style={{ background: 'rgba(245,240,232,0.82)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)' }}>

            {/* Eyebrow label */}
            <p
              className="font-body font-bold tracking-widest uppercase mb-6"
              style={{ fontSize: '0.72rem', letterSpacing: '0.22em', color: '#0e7c6e' }}
            >
              Clarkston, GA · Assemblies of God · Pentecostal
            </p>

            {/* Main heading */}
            <h1
              className="font-heading font-black uppercase text-text-primary leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 6.5vw, 6rem)', lineHeight: 0.95 }}
            >
              <span className="block" style={{ fontWeight: 700, fontSize: '0.85em', marginBottom: '0.05em', color: '#4a6080' }}>Welcome to</span>
              <span className="block">MIRACLE CENTER</span>
              <span className="block whitespace-nowrap">
                ASSEMBLY OF{' '}
                <span
                  className="inline-block bg-brand-gold text-surface align-middle"
                  style={{ fontSize: '1em', lineHeight: 0.95, verticalAlign: 'top', margin: '0', paddingTop: '0.03em', paddingBottom: '0.03em', paddingLeft: '0.25em', paddingRight: '0.25em', borderRadius: '0.2em 0.2em 0.2em 0' }}
                >
                  GOD
                </span>
              </span>
            </h1>

            {/* Verse */}
            <p
              className="font-body text-text-secondary mt-8 leading-relaxed"
              style={{ fontSize: '1rem', maxWidth: 480 }}
            >
              "Have I not commanded you? Be strong and courageous." (Joshua 1:9)
            </p>

            {/* CTA */}
            <a href="#services" onClick={scrollToServices} className="inline-block mt-8">
              <button className="font-body font-semibold text-sm px-8 py-4 rounded-full bg-text-primary text-surface flex items-center gap-2 hover:bg-text-secondary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-text-primary">
                JOIN US
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </a>
          </div>
        </ContainerScale>
      </ContainerScroll>

      {/* Intro Blurb */}
      <section className="bg-brand-blue relative overflow-hidden" style={{ minHeight: 320 }}>

        {/* Single carousel strip — all circles, all moving right to left, staggered vertically */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <div
            className="absolute top-0 left-0 h-full flex items-start"
            style={{ width: 'max-content', animation: 'mcag-scroll-left 45s linear infinite' }}
          >
            {[...FLOAT_CIRCLES, ...FLOAT_CIRCLES].map((c, i) => (
              <div key={i} style={{ marginTop: c.top, marginRight: 28, flexShrink: 0 }}>
                <HeartImg src={c.img} size={c.size} idx={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Fade left and right edges */}
        <div className="absolute inset-y-0 left-0 w-24 pointer-events-none" style={{ zIndex: 2, background: 'linear-gradient(to right, #1a3aad, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-24 pointer-events-none" style={{ zIndex: 2, background: 'linear-gradient(to left, #1a3aad, transparent)' }} />

        {/* Text — z-10 so circles behind it are at z-0, some visually overlap */}
        <div className="relative z-10 flex items-center justify-center px-6 py-20" style={{ minHeight: 320 }}>
          <div
            className="max-w-2xl w-full text-center rounded-2xl px-8 py-8"
            style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.18)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12)',
            }}
          >
            <p className="font-body text-surface/90 text-lg leading-relaxed">
              We are a Spirit-filled Pentecostal church in Clarkston, GA, rooted in the Burmese and Chin (Zo) community. We believe in miracles. We believe God heals bodies, minds, and broken lives, and we named this church accordingly. People of every nationality and background are welcome here. Come as you are.
            </p>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section id="services" className="py-20 px-6 bg-ivory">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* Left — Visit info stacked */}
          <div className="flex flex-col">
            <h2 className="font-heading font-bold text-3xl text-text-primary mb-8">Visit Us</h2>
            <div className="flex flex-col gap-6 flex-1">
              <Card className="flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-ivory rounded-full border border-border shrink-0">
                    <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-text-primary">Congregation Times</h3>
                </div>
                <div className="flex flex-col flex-1 divide-y divide-border font-body">
                  {[
                    { day: 'Friday', time: '6:00 pm', note: "Women's Night" },
                    { day: 'Saturday', time: '7:30 – 9:00 pm', note: 'Youth Service' },
                    { day: 'Sunday', time: '4:00 – 6:30 pm', note: '' },
                  ].map(({ day, time, note }) => (
                    <div key={day} className="flex flex-1 items-center justify-between py-3">
                      <span className="font-bold text-text-primary uppercase tracking-widest text-xs">{day}</span>
                      <div className="text-right">
                        <p className="text-sm text-text-primary font-medium">{time}</p>
                        {note && <p className="text-xs text-text-secondary mt-0.5">{note}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="flex-1 flex flex-col p-0 overflow-hidden">
                <div className="flex items-center gap-3 p-4 border-b border-border">
                  <div className="p-2 bg-ivory rounded-full border border-border shrink-0">
                    <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-text-primary">Location</h3>
                </div>
                <div className="flex flex-col flex-1 divide-y divide-border font-body px-4 py-0">
                  <div className="flex flex-1 items-center justify-between py-3 px-0">
                    <span className="font-bold text-text-primary uppercase tracking-widest text-xs">Address</span>
                    <div className="text-right">
                      <p className="text-sm text-text-primary font-medium">4113 Church St</p>
                      <p className="text-xs text-text-secondary mt-0.5">Clarkston, GA 30021</p>
                    </div>
                  </div>
                </div>
                <iframe
                  title="Church location"
                  src="https://www.google.com/maps?q=4113+Church+St,+Clarkston,+GA+30021&output=embed"
                  className="w-full flex-1 min-h-[160px]"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
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
                    src="/assets/stockimg/jc1.avif"
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
            We started with a living room and a calling. God has been faithful every step of the way, and we are just getting started.
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

      {/* Donation CTA */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl text-text-primary mb-4">Support the Ministry</h2>
            <p className="font-body text-text-secondary leading-relaxed mb-6">
              Your generosity fuels everything we do, from outreach in Clarkston to discipleship, worship,
              and serving families in need. Every gift, large or small, is an act of faith that advances
              the Kingdom of God.
            </p>
            <p className="font-body text-sm text-text-secondary mb-8">
              <span className="font-medium text-text-primary">Zelle:</span> 404-207-6509
            </p>
            <Link
              to="/donate"
              className="inline-block font-body font-semibold text-sm px-8 py-4 rounded-full bg-brand-gold text-text-primary hover:bg-brand-gold/90 transition-colors duration-200"
            >
              Give Now →
            </Link>
          </div>
          <div className="relative">
            <img
              src="/assets/stockimg/prayer.jpg"
              alt="Supporting the ministry"
              className="w-full h-72 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brand-blue/40 to-transparent" />
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

      {/* Meet the Pastors */}
      <section className="pt-0 pb-20 px-6 bg-ivory">
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
                img: '/assets/mcaglive/lp1.jpg',
                imgClass: 'w-full h-full object-cover object-[center_28%] scale-150',
              },
              {
                name: 'Pastor Sarah Muan Cing', title: 'Pastor',
                img: '/assets/mcaglive/ap1.jpg',
                imgClass: 'w-full h-full object-cover object-center',
              },
            ].map(({ name, title, img, imgClass }) => (
              <Card key={name} className="flex flex-col items-center text-center gap-4 overflow-hidden p-0">
                <div className="w-full h-64 overflow-hidden shrink-0">
                  <img src={img} alt={name} className={imgClass} />
                </div>
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
