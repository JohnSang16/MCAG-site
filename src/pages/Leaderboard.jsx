import leaderboardData from '../data/leaderboard.json'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { LeaderboardTable } from '../components/LeaderboardTable'

export default function Leaderboard() {
  return (
    <div className="bg-ivory min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* Hero + Mission + Grand Prize — single unified section */}
        <section
          className="relative px-6 pt-20 pb-16 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a3aad 0%, #0e7c6e 100%)' }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-10 bg-white pointer-events-none" />
          <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full opacity-10 bg-white pointer-events-none" />

          <div className="relative max-w-5xl mx-auto">

            {/* Title block */}
            <div className="text-center mb-14">
              <p className="font-body text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">Bible Competition</p>
              <h1 className="font-heading text-4xl md:text-6xl font-black text-surface mb-4">Leaderboard</h1>
              <p className="font-body text-surface/75 text-lg max-w-xl mx-auto">
                Study hard. Stay consistent. The crown is yours.
              </p>
            </div>

            {/* Mission text + Grand Prize card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* Left: mission */}
              <div>
                <p className="font-body text-brand-gold text-xs font-bold uppercase tracking-widest mb-3">The Mission</p>
                <h2 className="font-heading text-2xl font-bold text-surface mb-5">The Whole Bible, Cover to Cover</h2>
                <p className="font-body text-surface/75 leading-relaxed mb-4">
                  We are journeying through the entire Bible, starting from Genesis, with the goal of teaching every member the full Word of God from cover to cover.
                </p>
                <p className="font-body text-surface/75 leading-relaxed mb-8">
                  Every other week we take a test on the passages we have studied together, checking our understanding and keeping one another accountable to the Word. The leaderboard tracks cumulative scores across every test.
                </p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { value: 'Genesis', label: 'Starting Point' },
                    { value: 'Bi-weekly', label: 'Test Frequency' },
                    { value: '$500', label: 'Grand Prize' },
                  ].map(({ value, label }) => (
                    <div key={label} className="rounded-2xl bg-white/10 border border-white/20 p-4">
                      <p className="font-heading font-black text-lg text-white mb-1">{value}</p>
                      <p className="font-body text-xs text-white/60 uppercase tracking-widest">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: grand prize card */}
              <div className="flex flex-col items-center text-center bg-white/10 border border-white/20 rounded-3xl px-8 py-10">
                <svg viewBox="0 0 80 80" className="w-24 h-24 drop-shadow-xl mb-4" fill="none">
                  <circle cx="40" cy="40" r="38" fill="rgba(201,168,76,0.15)" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="4 3" />
                  <path d="M26 18h28v20c0 9-6 15-14 16v4h6v4H34v-4h6v-4C32 53 26 47 26 38V18z" fill="#C9A84C" />
                  <path d="M30 22h4v14c0 5 2 9 6 11" stroke="#FFE066" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M26 22h-5a5 5 0 000 10h5" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M54 22h5a5 5 0 010 10h-5" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <text x="34" y="26" fontSize="7" fill="#FFF8E0">★</text>
                  <text x="42" y="22" fontSize="5" fill="#FFE066">★</text>
                  <text x="44" y="30" fontSize="6" fill="#FFF8E0">★</text>
                </svg>
                <p className="font-body text-brand-gold text-xs font-bold tracking-widest uppercase mb-3">Grand Prize</p>
                <div className="font-heading font-black text-surface leading-none mb-4"
                  style={{ fontSize: 'clamp(4rem, 10vw, 6.5rem)' }}>
                  $500
                </div>
                <p className="font-body text-surface/65 text-sm leading-relaxed">
                  One winner. One Bible. Five hundred dollars. The highest cumulative score at the end of the competition takes it all.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Leaderboard table */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <LeaderboardTable data={leaderboardData} />
        </section>

      </main>
      <Footer />
    </div>
  )
}
