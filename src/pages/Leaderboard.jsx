import { motion } from 'framer-motion'
import leaderboardData from '../data/leaderboard.json'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { LeaderboardTable } from '../components/LeaderboardTable'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Leaderboard() {
  return (
    <div className="bg-surface min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section
          className="px-6 pt-16 pb-0"
          style={{ background: '#07091d' }}
        >
          <div className="max-w-5xl mx-auto">

            {/* Label */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={0}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-5 h-px bg-brand-gold" />
              <p className="font-body text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em]">
                Bible Competition
              </p>
            </motion.div>

            {/* Title — one line, full width */}
            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="font-heading font-black text-surface uppercase leading-none mb-10"
              style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', letterSpacing: '-0.01em' }}
            >
              Leaderboard
            </motion.h1>

            {/* Bottom strip — rule + tagline */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="flex items-center justify-between pb-0 pt-5"
            >
              <p className="font-body text-[11px] uppercase tracking-[0.25em] text-white/60">
                Study hard. Stay consistent. The crown is yours.
              </p>
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-gold/60" />
                <p className="font-body text-[11px] uppercase tracking-widest text-white/60">MCAG · Clarkston, GA</p>
              </div>
            </motion.div>

            {/* Stats — flush to hero bottom, sharp top borders */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="grid grid-cols-3 mt-0"
            >
              {[
                { value: 'Genesis', label: 'Starting Book' },
                { value: 'Revelation', label: 'Ending Book' },
                { value: 'Bi-weekly', label: 'Test Frequency' },
              ].map(({ value, label }, i) => (
                <div
                  key={label}
                  className="py-6 px-4 text-center"
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  }}
                >
                  <p className="font-heading font-bold text-surface text-base mb-0.5">{value}</p>
                  <p className="font-body text-[10px] uppercase tracking-widest text-white/60">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Mission + Grand Prize ─────────────────────────────────── */}
        <section className="px-6 py-14 bg-surface">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 overflow-hidden"
              style={{ border: '1px solid #e5e0d8' }}
            >
              {/* Left — Mission */}
              <div
                className="bg-surface px-10 py-10"
                style={{ borderRight: '1px solid #e5e0d8', borderLeft: '4px solid #0e7c6e' }}
              >
                <p className="font-body text-brand-teal text-[10px] font-bold uppercase tracking-[0.25em] mb-4">The Mission</p>
                <h2 className="font-heading text-2xl font-bold text-text-primary leading-snug mb-5">
                  The Whole Bible,<br />Cover to Cover
                </h2>
                <p className="font-body text-text-secondary text-sm leading-relaxed mb-4">
                  We are journeying through the entire Bible, from Genesis to Revelation, with the goal of teaching every member the full Word of God from cover to cover.
                </p>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  Every other week we take a test on the passages we have studied, checking our understanding and keeping one another accountable to the Word. The leaderboard tracks cumulative scores across every test.
                </p>
              </div>

              {/* Right — Grand Prize */}
              <div
                className="relative flex flex-col items-center justify-center text-center px-10 py-12 overflow-hidden"
                style={{ background: '#07091d' }}
              >
                {/* Mobile PRIZE */}
                <span
                  className="md:hidden absolute font-heading font-black italic text-white select-none pointer-events-none"
                  style={{ fontSize: '7.6rem', opacity: 0.22, top: '44%', left: '45%', transform: 'translate(-50%, -50%) rotate(-8deg)', whiteSpace: 'nowrap' }}
                >
                  PRIZE
                </span>
                {/* Desktop PRIZE */}
                <span
                  className="hidden md:block absolute font-heading font-black italic text-white select-none pointer-events-none"
                  style={{ fontSize: 'clamp(5.5rem, 17vw, 12rem)', opacity: 0.22, top: '44%', left: '45%', transform: 'translate(-50%, -50%) rotate(-8deg)', whiteSpace: 'nowrap' }}
                >
                  PRIZE
                </span>

                <p className="relative font-body text-[10px] font-bold tracking-[0.3em] uppercase mb-3 text-brand-gold">
                  Grand Prize
                </p>
                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="relative leading-none"
                  style={{ fontSize: 'clamp(5rem, 12vw, 8rem)', color: '#C9A84C', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}
                >
                  $500
                </motion.p>
                <div className="relative w-8 h-px bg-white/15 mx-auto mt-1 mb-4" />
                <p className="relative font-body text-white/45 text-sm leading-relaxed" style={{ maxWidth: 200 }}>
                  One winner. One Bible. Five hundred dollars. Highest cumulative score takes it all.
                </p>
              </div>

            </motion.div>
          </div>
        </section>

        {/* ── Rankings ─────────────────────────────────────────────── */}
        <section className="px-4 pb-24 max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mb-8 flex items-end justify-between"
          >
            <div>
              <p className="font-body text-brand-teal text-[10px] font-bold uppercase tracking-[0.25em] mb-2">Rankings</p>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Current Standings
              </h2>
            </div>
            <div className="hidden sm:block w-16 h-0.5 bg-brand-gold mb-1" />
          </motion.div>
          <LeaderboardTable data={leaderboardData} />
        </section>

      </main>
      <Footer />
    </div>
  )
}
