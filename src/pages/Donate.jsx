import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ZELLE_NUMBER } from '../config'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { FacebookCTAStrip } from '../components/FacebookCTAStrip'
import { PrayerRequestForm } from '../components/PrayerRequestForm'

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

const steps = [
  { n: 1, text: 'Open the Zelle app or find Zelle inside your bank\'s mobile app.' },
  { n: 2, text: `Tap "Send Money" and enter the phone number: ${ZELLE_NUMBER}.` },
  { n: 3, text: 'Enter the amount you wish to give.' },
  { n: 4, text: 'In the memo field write "Tithe" or "Offering" so we can acknowledge your gift.' },
  { n: 5, text: 'Review the details and tap Send. Your gift reaches us instantly.' },
]

const impacts = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Community Outreach',
    body: 'Funding events, meals, and care for families in need throughout Clarkston.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    label: 'Discipleship',
    body: 'Bible study materials, training, and the Bible competition that sharpens the whole congregation.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    label: 'Worship',
    body: 'Sustaining Spirit-filled services where people encounter God and lives are changed.',
  },
]

export default function Donate() {
  return (
    <div className="bg-ivory min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <div className="relative h-[460px] overflow-hidden">
          <img
            src="/assets/stockimg/support.webp"
            alt="Support the ministry"
            className="w-full h-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/75 flex flex-col items-center justify-center text-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="font-body text-brand-gold text-xs font-bold uppercase tracking-widest mb-4"
            >
              Generosity
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="font-heading text-4xl md:text-5xl font-bold text-surface mb-4"
            >
              Support the Ministry
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="font-body text-surface/80 text-lg max-w-xl"
            >
              Every gift, large or small, is an act of faith that advances the Kingdom of God.
            </motion.p>
          </div>
        </div>

        {/* Why We Give */}
        <section className="py-20 px-6" style={{ background: 'linear-gradient(160deg, #eaf0fb 0%, #f5f0e8 60%, #e6f4f1 100%)' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <p className="font-body text-brand-teal text-xs font-bold uppercase tracking-widest mb-3">Why We Give</p>
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">Generosity Is an Act of Worship</h2>
              <img
                src="/assets/stockimg/geneorsity.avif"
                alt="Prayer and giving"
                className="md:hidden w-full h-64 object-cover rounded-2xl shadow-lg mb-6"
              />
              <p className="font-body text-text-secondary leading-relaxed mb-4">
                When we give, we participate in God's work. We are not funding a program. We are investing in people, in healing, in outreach, and in the next generation of believers being raised up right here in Clarkston.
              </p>
              <p className="font-body text-text-secondary leading-relaxed mb-6">
                Giving is not an obligation. It is a privilege for those whose hearts God has touched. Every contribution is received with gratitude and used faithfully for the Kingdom.
              </p>
              <blockquote className="border-l-4 border-brand-gold pl-5 py-1">
                <p className="font-heading italic text-text-primary text-lg leading-relaxed">
                  "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
                </p>
                <cite className="font-body text-text-secondary text-sm not-italic mt-2 block">2 Corinthians 9:7</cite>
              </blockquote>
            </FadeUp>
            <FadeUp delay={0.15}>
              <img
                src="/assets/stockimg/geneorsity.avif"
                alt="Prayer and giving"
                className="hidden md:block w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </FadeUp>
          </div>
        </section>

        {/* Where Your Gift Goes */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-5xl mx-auto">
            <FadeUp>
              <p className="font-body text-brand-blue text-xs font-bold uppercase tracking-widest mb-3 text-center">Impact</p>
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-3 text-center">Where Your Gift Goes</h2>
              <p className="font-body text-text-secondary text-center mb-12 max-w-xl mx-auto">
                Your generosity fuels everything we do, from worship on Sunday to outreach throughout the week.
              </p>
            </FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {impacts.map(({ icon, label, body }, i) => (
                <FadeUp key={label} delay={i * 0.1}>
                  <div className="rounded-2xl border border-border bg-ivory p-7 flex flex-col gap-4 h-full">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-surface shrink-0"
                      style={{ background: 'linear-gradient(135deg, #0e7c6e, #1a3aad)' }}>
                      {icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-text-primary mb-2">{label}</h3>
                      <p className="font-body text-sm text-text-secondary leading-relaxed">{body}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Give via Zelle */}
        <section className="py-20 px-6 bg-ivory">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Steps */}
            <FadeUp>
              <p className="font-body text-brand-teal text-xs font-bold uppercase tracking-widest mb-3">How to Give</p>
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-3">Give via Zelle</h2>
              <p className="font-body text-text-secondary mb-8">
                Zelle is free, instant, and available inside most major banking apps. No account setup required.
              </p>
              <ol className="space-y-5">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full text-surface font-heading font-bold text-sm flex items-center justify-center shadow-sm"
                      style={{ background: 'linear-gradient(135deg, #0e7c6e, #1a3aad)' }}>
                      {s.n}
                    </span>
                    <p className="font-body text-text-primary leading-relaxed pt-1.5">{s.text}</p>
                  </li>
                ))}
              </ol>
            </FadeUp>

            {/* Zelle number card */}
            <FadeUp delay={0.15}>
              <div
                className="rounded-3xl p-10 text-center shadow-xl flex flex-col items-center gap-4"
                style={{ background: 'linear-gradient(135deg, #1a3aad 0%, #0e7c6e 100%)' }}
              >
                <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mb-2">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-body text-white/70 text-sm font-medium uppercase tracking-widest">Send Zelle to</p>
                <p className="font-heading text-5xl font-black text-white tracking-tight">{ZELLE_NUMBER}</p>
                <div className="w-16 h-px bg-white/20 my-1" />
                <p className="font-body text-white/60 text-xs leading-relaxed">
                  Miracle Center Assembly of God<br />4113 Church St, Clarkston, GA 30021
                </p>
                <p className="font-body text-white/50 text-xs mt-2">
                  Please write "Tithe" or "Offering" in the memo field.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        <FacebookCTAStrip />
      </main>
      <Footer />
    </div>
  )
}
