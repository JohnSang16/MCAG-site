import leaderboardData from '../data/leaderboard.json'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { PageHero } from '../components/PageHero'
import { LeaderboardTable } from '../components/LeaderboardTable'

export default function Leaderboard() {
  return (
    <div className="bg-ivory min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHero title="Bible Competition Leaderboard" />

        {/* Mission statement */}
        <section className="py-14 px-6 bg-surface border-b border-border">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="font-body text-text-secondary leading-relaxed">
              We are journeying through the entire Bible — starting from Genesis — with the goal of
              teaching every member the full Word of God from cover to cover. Every other week we take
              a test on the passages we've studied together, checking our understanding and keeping
              one another accountable to the Word.
            </p>
            <p className="font-body text-text-secondary leading-relaxed">
              The leaderboard tracks cumulative scores across every test. Study hard, stay consistent,
              and the crown is yours.
            </p>
          </div>
        </section>

        {/* Grand Prize banner */}
        <section className="py-16 px-6 bg-gradient-to-br from-brand-blue via-brand-blue to-brand-teal">
          <div className="max-w-2xl mx-auto text-center">

            {/* Trophy SVG */}
            <div className="flex justify-center mb-6">
              <svg viewBox="0 0 80 80" className="w-20 h-20 drop-shadow-lg" fill="none">
                <circle cx="40" cy="40" r="38" fill="rgba(201,168,76,0.15)" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="4 3" />
                {/* Cup body */}
                <path d="M26 18h28v20c0 9-6 15-14 16v4h6v4H34v-4h6v-4C32 53 26 47 26 38V18z" fill="#C9A84C" />
                {/* Cup shine */}
                <path d="M30 22h4v14c0 5 2 9 6 11" stroke="#FFE066" strokeWidth="1.5" strokeLinecap="round" />
                {/* Left handle */}
                <path d="M26 22h-5a5 5 0 000 10h5" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                {/* Right handle */}
                <path d="M54 22h5a5 5 0 010 10h-5" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                {/* Stars */}
                <text x="34" y="26" fontSize="7" fill="#FFF8E0">★</text>
                <text x="42" y="22" fontSize="5" fill="#FFE066">★</text>
                <text x="44" y="30" fontSize="6" fill="#FFF8E0">★</text>
              </svg>
            </div>

            <p className="font-body text-brand-gold/80 text-xs font-bold tracking-widest uppercase mb-3">Grand Prize</p>

            <div className="font-heading font-black text-surface leading-none mb-4"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 6rem)' }}>
              $500
            </div>

            <p className="font-body text-surface/70 text-sm leading-relaxed max-w-md mx-auto">
              The member with the highest cumulative score across all tests, at the end of the
              competition, wins the grand prize. One winner. One Bible. Five hundred dollars.
            </p>
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
