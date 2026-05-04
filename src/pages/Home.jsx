import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { ValueStrip } from '../components/ValueStrip'
import { PrayerRequestForm } from '../components/PrayerRequestForm'
import { FacebookCTAStrip } from '../components/FacebookCTAStrip'
import { ContainerScroll, BentoGrid, BentoCell, ContainerScale } from '../components/HeroGalleryScroll'
import { ZELLE_NUMBER } from '../config'

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

// size = diameter in px, top = vertical offset from top of section (px)
const FLOAT_CIRCLES_DESKTOP = [
  { img: '/assets/mcaglive/lp1.jpg',     size: 150, top: 30  },
  { img: '/assets/mcaglive/bg1.jpg',     size: 110, top: 310 },
  { img: '/assets/mcaglive/nupite.jpg',  size: 180, top: 180 },
  { img: '/assets/mcaglive/bg2.jpg',     size: 95,  top: 420 },
  { img: '/assets/mcaglive/ap1.jpg',     size: 130, top: 90  },
  { img: '/assets/mcaglive/bg3.jpg',     size: 160, top: 250 },
  { img: '/assets/mcaglive/papite.jpg',  size: 140, top: 370 },
  { img: '/assets/mcaglive/bg4.jpg',     size: 100, top: 140 },
  { img: '/assets/mcaglive/ap2.jpg',     size: 120, top: 460 },
  { img: '/assets/mcaglive/bg5.jpg',     size: 165, top: 50  },
  { img: '/assets/mcaglive/bg 6.jpg',    size: 115, top: 200 },
  { img: '/assets/mcaglive/bg7.jpg',     size: 145, top: 340 },
  { img: '/assets/mcaglive/bg8.jpg',     size: 90,  top: 110 },
  { img: '/assets/mcaglive/bg9.jpg',     size: 155, top: 430 },
  { img: '/assets/mcaglive/bg10.jpg',    size: 125, top: 270 },
  { img: '/assets/mcaglive/bg11.jpg',    size: 170, top: 15  },
  { img: '/assets/mcaglive/nupite.jpg',  size: 105, top: 390 },
  { img: '/assets/mcaglive/bg3.jpg',     size: 135, top: 220 },
]

const FLOAT_CIRCLES = [
  { img: '/assets/mcaglive/lp1.jpg',     objPos: 'object-[center_28%]', size: 150, top: 10  },
  { img: '/assets/mcaglive/bg1.jpg',     objPos: 'object-center',        size: 110, top: 490 },
  { img: '/assets/mcaglive/nupite.jpg',  objPos: 'object-center',        size: 180, top: 30  },
  { img: '/assets/mcaglive/bg2.jpg',     objPos: 'object-center',        size: 95,  top: 520 },
  { img: '/assets/mcaglive/ap1.jpg',     objPos: 'object-center',        size: 130, top: 80  },
  { img: '/assets/mcaglive/bg3.jpg',     objPos: 'object-center',        size: 160, top: 460 },
  { img: '/assets/mcaglive/papite.jpg',  objPos: 'object-center',        size: 140, top: 15  },
  { img: '/assets/mcaglive/bg4.jpg',     objPos: 'object-center',        size: 100, top: 500 },
  { img: '/assets/mcaglive/ap2.jpg',     objPos: 'object-center',        size: 120, top: 55  },
  { img: '/assets/mcaglive/bg5.jpg',     objPos: 'object-center',        size: 165, top: 470 },
  { img: '/assets/mcaglive/bg 6.jpg',    objPos: 'object-center',        size: 115, top: 5   },
  { img: '/assets/mcaglive/bg7.jpg',     objPos: 'object-center',        size: 145, top: 510 },
  { img: '/assets/mcaglive/bg8.jpg',     objPos: 'object-center',        size: 90,  top: 100 },
  { img: '/assets/mcaglive/bg9.jpg',     objPos: 'object-center',        size: 155, top: 450 },
  { img: '/assets/mcaglive/bg10.jpg',    objPos: 'object-center',        size: 125, top: 40  },
  { img: '/assets/mcaglive/bg11.jpg',    objPos: 'object-center',        size: 170, top: 480 },
  { img: '/assets/mcaglive/nupite.jpg',  objPos: 'object-center',        size: 105, top: 70  },
  { img: '/assets/mcaglive/bg3.jpg',     objPos: 'object-center',        size: 135, top: 530 },
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
  '/assets/mcaglive/sundayschool1.jpg',
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
      <ContainerScroll className="h-[200vh]">
        <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-3 gap-3">
          {HERO_IMAGES.map((src, i) => (
            <BentoCell key={i} className="overflow-hidden rounded-xl shadow-lg">
              <img className="size-full object-cover object-center" src={src} alt="" aria-hidden="true" />
            </BentoCell>
          ))}

        </BentoGrid>

        <ContainerScale className="z-10 text-center flex flex-col items-center" style={{ width: 'clamp(20rem, 96vw, 58rem)' }}>
          {/* Frosted glass card */}
          <div className="rounded-3xl px-6 py-8 md:px-10 md:py-10 flex flex-col items-center" style={{ background: 'rgba(234,240,251,0.88)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', boxShadow: '0 8px 40px rgba(26,58,173,0.10), inset 0 1px 0 rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.6)' }}>

            {/* Eyebrow label */}
            <p
              className="font-body font-bold tracking-widest uppercase mb-4"
              style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: '#0e7c6e' }}
            >
              Clarkston, GA · Assemblies of God · Pentecostal
            </p>

            {/* Main heading */}
            <h1
              className="font-heading font-black uppercase text-text-primary leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 6.5vw, 6rem)', lineHeight: 0.95 }}
            >
              <span className="block" style={{ fontWeight: 700, fontSize: '0.85em', marginBottom: '0.05em', color: 'rgb(90,115,203)' }}>Welcome to</span>
              <span className="block">MIRACLE CENTER</span>
              <span className="block">
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
              className="font-body text-text-secondary mt-5 leading-relaxed"
              style={{ fontSize: '0.78rem', maxWidth: 480 }}
            >
              "Have I not commanded you? Be strong and courageous." (Joshua 1:9)
            </p>

            {/* CTA */}
            <a href="#services" onClick={scrollToServices} className="inline-block mt-8">
              <button className="font-body font-semibold text-xs px-6 py-3 rounded-full bg-text-primary text-surface flex items-center gap-2 hover:bg-text-secondary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-text-primary">
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
      <section
        className="relative overflow-hidden min-h-[640px]"
        style={{ background: 'linear-gradient(to right, #1a3aad 0%, #0e7c6e 100%)' }}
      >
        {/* Gold top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-gold z-[5]" />

        {/* Watermark — ghost "MIRACLE" behind everything */}
        <div className="absolute inset-0 flex items-center justify-center -translate-y-16 pointer-events-none select-none z-[1]">
          <span
            className="font-heading font-black uppercase text-white whitespace-nowrap"
            style={{ fontSize: 'clamp(6rem, 18vw, 19rem)', opacity: 0.045, letterSpacing: '-0.02em' }}
          >
            MIRACLE
          </span>
        </div>

        {/* Heart carousel — mobile */}
        <div className="md:hidden absolute inset-0 pointer-events-none z-[2] opacity-60">
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

        {/* Heart carousel — desktop */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-[2] opacity-50">
          <div
            className="absolute top-0 left-0 h-full flex items-start"
            style={{ width: 'max-content', animation: 'mcag-scroll-left 45s linear infinite' }}
          >
            {[...FLOAT_CIRCLES_DESKTOP, ...FLOAT_CIRCLES_DESKTOP].map((c, i) => (
              <div key={i} style={{ marginTop: c.top, marginRight: 28, flexShrink: 0 }}>
                <HeartImg src={c.img} size={c.size} idx={`d${i}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Edge fades — match gradient endpoints */}
        <div className="absolute inset-y-0 left-0 w-16 pointer-events-none z-[3]" style={{ background: 'linear-gradient(to right, #1a3aad80, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-32 pointer-events-none z-[3]" style={{ background: 'linear-gradient(to left, #0e7c6e, transparent)' }} />

        {/* Content — open editorial layout, no frosted glass box */}
        <div className="relative z-[4] flex items-center justify-center px-6 py-28 min-h-[640px]">
          <div className="max-w-3xl w-full text-center flex flex-col items-center">

            {/* Main headline */}
            <h2
              className="font-heading font-black text-surface uppercase leading-none mb-8"
              style={{ fontSize: 'clamp(2.6rem, 6.5vw, 5.5rem)', letterSpacing: '-0.025em' }}
            >
              Born to Carry<br />
              <span className="text-brand-gold">Miracles</span>
            </h2>

            {/* Cross divider */}
            <div className="flex items-center gap-5 mb-10 w-full max-w-xs">
              <div className="h-px flex-1 bg-white/20" />
              <svg className="w-4 h-6 text-brand-gold shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 36" aria-hidden="true">
                <path d="M12 2v32M4 12h16" />
              </svg>
              <div className="h-px flex-1 bg-white/20" />
            </div>

            {/* Body text */}
            <p className="font-body text-surface/80 text-base md:text-lg leading-relaxed max-w-2xl">
              We are a Spirit-filled Pentecostal church located in Clarkston, GA. Rooted in the Burmese and Chin (Zo) community. We believe in miracles. We believe God heals bodies, minds, and broken lives, and we named this church accordingly. People of every nationality and background are welcome here. Come as you are.
            </p>


          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-6 bg-ivory">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
          <div className="text-center mb-10">
            <p className="font-body text-brand-teal text-sm font-bold uppercase tracking-widest mb-3">Mark Your Calendar</p>
            <h2 className="font-heading font-bold text-3xl text-text-primary">Upcoming Events</h2>
          </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                date: 'May 11',
                day: 'Sunday',
                title: "Mother's Day Celebration",
                description: "Join us as we honor the mothers and mother-figures in our congregation. Special worship, a message of gratitude, and a time of blessing for every mom.",
                img: '/assets/stockimg/mothersday.jpeg',
                accent: '#0e7c6e',
              },
              {
                date: 'Jun 15',
                day: 'Sunday',
                title: "Father's Day Celebration",
                description: "We celebrate the fathers and father-figures who shape our families and community. Come worship together and honor the men God has placed in our lives.",
                img: '/assets/stockimg/fathersday.webp',
                accent: '#1a3aad',
              },
            ].map(({ date, day, title, description, img, accent }, i) => (
              <FadeUp key={title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-surface shadow-sm overflow-hidden flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 px-5 pb-4">
                    <span
                      className="font-body text-xs font-bold uppercase tracking-widest text-white/90"
                      style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
                    >
                      {day} · {date}
                    </span>
                  </div>
                  <div
                    className="absolute top-0 left-0 w-full h-1"
                    style={{ background: accent }}
                  />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="font-heading font-bold text-xl text-text-primary">{title}</h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">{description}</p>
                  <p className="font-body text-xs text-text-secondary">4:00 – 6:30 pm · 4113 Church St, Clarkston, GA</p>
                </div>
              </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us + What We Believe */}
      <section id="services" className="py-24 px-6" style={{ background: 'linear-gradient(160deg, #eaf0fb 0%, #f5f0e8 60%, #e6f4f1 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp>
          {/* Two-column card panel */}
          <div className="rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2" style={{ background: '#ffffff' }}>

            {/* Left — Visit Us */}
            <div className="p-8 lg:p-10 flex flex-col border-b lg:border-b-0 lg:border-r border-border">
              <p className="font-body text-brand-teal text-sm font-bold uppercase tracking-widest mb-2">Come Join Us</p>
              <h2 className="font-heading font-bold text-3xl text-text-primary mb-8">Visit Us</h2>

              {/* Service Times */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-base text-text-primary tracking-wide uppercase">Service Times</h3>
                </div>
                <div className="flex flex-col divide-y divide-border font-body rounded-xl overflow-hidden border border-border">
                  {[
                    { day: 'Friday', time: '6:00 pm', note: "Women's Night" },
                    { day: 'Saturday', time: '7:30 – 9:00 pm', note: 'Youth Service' },
                    { day: 'Sunday', time: '4:00 – 6:30 pm', note: '' },
                  ].map(({ day, time, note }) => (
                    <div key={day} className="flex items-center justify-between px-4 py-3 bg-ivory/60">
                      <span className="font-bold text-brand-blue uppercase tracking-widest text-xs">{day}</span>
                      <div className="text-right">
                        <p className="text-sm text-text-primary font-medium">{time}</p>
                        {note && <p className="text-xs text-text-secondary mt-0.5">{note}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-base text-text-primary tracking-wide uppercase">Location</h3>
                </div>
                <div className="flex items-center justify-between px-4 py-3 bg-ivory/60 rounded-xl border border-border mb-3">
                  <span className="font-bold text-brand-teal uppercase tracking-widest text-xs">Address</span>
                  <div className="text-right">
                    <p className="text-sm text-text-primary font-medium">4113 Church St</p>
                    <p className="text-xs text-text-secondary mt-0.5">Clarkston, GA 30021</p>
                  </div>
                </div>
                <div className="flex-1 rounded-xl overflow-hidden border border-border min-h-[160px]">
                  <iframe
                    title="Church location"
                    src="https://www.google.com/maps?q=4113+Church+St,+Clarkston,+GA+30021&output=embed"
                    className="w-full h-full min-h-[160px]"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Right — What We Believe */}
            <div className="p-8 lg:p-10 flex flex-col">
              <p className="font-body text-brand-blue text-sm font-bold uppercase tracking-widest mb-2">Our Faith</p>
              <h2 className="font-heading font-bold text-3xl text-text-primary mb-8">What We Believe</h2>
              <div className="flex flex-col gap-5 flex-1">
                <Link to="/about/jesus" className="block group flex-1">
                  <div className="relative overflow-hidden rounded-2xl h-full shadow-sm group-hover:shadow-md transition-shadow duration-300" style={{ minHeight: 160 }}>
                    <img src="/assets/stockimg/jc1.avif" alt="Jesus Christ" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <h3 className="font-heading font-bold text-lg text-surface mb-1">Learn About Jesus Christ</h3>
                      <p className="font-body text-sm text-surface/75 leading-relaxed">Who he is, what he did, and what it means to follow him today.</p>
                    </div>
                  </div>
                </Link>

                <Link to="/about/beliefs" className="block group flex-1">
                  <div className="relative overflow-hidden rounded-2xl h-full shadow-sm group-hover:shadow-md transition-shadow duration-300" style={{ minHeight: 160 }}>
                    <img src="/assets/stockimg/holyspirit.webp" alt="Assembly of God worship" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <h3 className="font-heading font-bold text-lg text-surface mb-1">What It Means to Be Assembly of God</h3>
                      <p className="font-body text-sm text-surface/75 leading-relaxed">Pentecostal faith, Spirit-filled living, and the AG statement of beliefs.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

          </div>
          </FadeUp>
        </div>
      </section>

      {/* Values Strip */}
      <ValueStrip className="pt-10 pb-20" />

      {/* Featured Quote */}
      <section
        className="relative py-12 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0e7c6e 0%, #1a3aad 100%)' }}
      >
        <FadeUp>
        <div className="relative z-10 max-w-[680px] mx-auto text-center">
          <span className="font-heading text-brand-gold text-7xl leading-none select-none">&ldquo;</span>
          <p className="font-heading italic text-surface text-2xl leading-relaxed -mt-4">
            We started with a living room and a calling. God has been faithful every step of the way, and we are just getting started.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-surface/40 shrink-0">
              <img src="/assets/mcaglive/leadpastorheadshot.jpg" alt="Pastor Abraham Thang" className="w-full h-full object-cover object-[center_20%]" />
            </div>
            <div className="text-left">
              <p className="font-body font-bold text-surface text-sm">Pastor Abraham Thang</p>
              <p className="font-body text-surface/70 text-xs mt-0.5">Lead Pastor, Miracle Center Assembly of God</p>
            </div>
          </div>
        </div>
        </FadeUp>
      </section>

      {/* Donation CTA */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(160deg, #eaf0fb 0%, #f5f0e8 60%, #e6f4f1 100%)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeUp>
          <div>
            <p className="font-body text-brand-teal text-sm font-bold uppercase tracking-widest mb-3">Generosity</p>
            <h2 className="font-heading font-bold text-3xl text-text-primary mb-6">Support the Ministry</h2>
            <img
              src="/assets/stockimg/supportheministry.webp"
              alt="Supporting the ministry"
              className="md:hidden w-full h-56 object-cover rounded-2xl shadow-lg mb-6"
            />
            <p className="font-body text-text-secondary leading-relaxed mb-6">
              Your generosity fuels everything we do, from outreach in Clarkston to discipleship, worship,
              and serving families in need. Every gift, large or small, is an act of faith that advances
              the Kingdom of God.
            </p>
            <blockquote className="border-l-4 border-brand-gold pl-5 py-1 mb-8">
              <p className="font-heading italic text-text-primary leading-relaxed">
                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
              </p>
              <cite className="font-body text-text-secondary text-sm not-italic mt-2 block">2 Corinthians 9:7</cite>
            </blockquote>
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'linear-gradient(135deg, #0e7c6e, #1a3aad)' }}>
                  <svg className="w-4 h-4 text-surface" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <p className="font-body text-text-secondary leading-relaxed text-sm">
                  <span className="font-semibold text-text-primary">Card or bank transfer:</span> Give securely online with Stripe, including ACH for large gifts.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'linear-gradient(135deg, #0e7c6e, #1a3aad)' }}>
                  <svg className="w-4 h-4 text-surface" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-body text-text-secondary leading-relaxed text-sm">
                  <span className="font-semibold text-text-primary">Zelle (no fees):</span> {ZELLE_NUMBER}
                </p>
              </div>
            </div>
            <Link
              to="/donate"
              className="inline-block font-body font-semibold text-sm px-8 py-4 rounded-full bg-brand-gold text-text-primary hover:bg-brand-gold/90 transition-colors duration-200"
            >
              Give Now →
            </Link>
          </div>
          </FadeUp>
          <FadeUp delay={0.15}>
          <img
            src="/assets/stockimg/supportheministry.webp"
            alt="Supporting the ministry"
            className="hidden md:block w-full h-80 object-cover rounded-2xl shadow-lg"
          />
          </FadeUp>
        </div>
      </section>

      {/* Meet the Pastors */}
      <section className="pt-8 pb-20 px-6 bg-ivory">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
          <div className="flex justify-center mb-10">
            <div className="w-36 h-0.5 bg-brand-gold rounded-full" />
          </div>
          <div className="text-center mb-12">
            <p className="font-body text-brand-teal text-sm font-bold uppercase tracking-widest mb-3">Leadership</p>
            <h2 className="font-heading font-bold text-3xl text-text-primary mb-4">Meet the Pastors</h2>
            <p className="font-body text-text-secondary max-w-xl mx-auto leading-relaxed">
              Servant leaders called to build this congregation with love and obedience.
            </p>
          </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                name: 'Pastor Abraham Thang', title: 'Lead Pastor',
                img: '/assets/mcaglive/lp1.jpg',
                imgClass: 'w-full h-full object-cover object-[center_28%] scale-150',
                bio: 'Born in Myanmar and raised in a family of faith, Pastor Abraham answered God\'s call to plant Miracle Center Assembly of God in Clarkston. He leads with boldness, a deep conviction for healing prayer, and an unwavering belief that God still performs miracles today.',
              },
              {
                name: 'Pastor Sarah Muan Cing', title: 'Pastor',
                img: '/assets/mcaglive/ap1.jpg',
                imgClass: 'w-full h-full object-cover object-center',
                bio: 'Pastor Sarah carries a special grace for the women and families of the congregation. She leads Women\'s Night, mentors young believers, and brings a compassionate, Spirit-led presence to everything she does.',
              },
            ].map(({ name, title, img, imgClass, bio }, i) => (
              <FadeUp key={name} delay={i * 0.1}>
              <Card className="flex flex-col items-center text-center gap-4 overflow-hidden p-0">
                <div className="w-full h-80 overflow-hidden shrink-0">
                  <img src={img} alt={name} className={imgClass} />
                </div>
                <div className="px-8 pb-8 flex flex-col items-center gap-4">
                  <div>
                    <h3 className="font-heading font-semibold text-2xl text-text-primary">{name}</h3>
                    <p className="font-body text-sm text-brand-teal font-medium mt-1">{title}</p>
                  </div>
                  <p className="font-body text-base text-text-secondary leading-relaxed">{bio}</p>
                  <Link to="/about" className="font-body text-sm text-brand-blue hover:underline">
                    Learn more
                  </Link>
                </div>
              </Card>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Request Form */}
      <section className="py-20 px-6 bg-surface">
        <FadeUp>
        <div className="max-w-xl mx-auto text-center mb-10">
          <h2 className="font-heading font-bold text-3xl text-text-primary mb-3">
            Prayer Requests
          </h2>
          <p className="font-body text-text-secondary">
            We believe in the power of prayer. Share your request and our church family will
            pray alongside you.
          </p>
        </div>
        </FadeUp>
        <PrayerRequestForm />
      </section>

      {/* Facebook CTA */}
      <FacebookCTAStrip />

      <Footer />
    </div>
  )
}
