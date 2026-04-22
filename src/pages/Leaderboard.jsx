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

        <section className="py-16 px-4 max-w-4xl mx-auto">
          <p className="font-body text-text-secondary text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Each week our members are tested on the church teachings and Bible passages covered that week.
            The leaderboard tracks cumulative performance across all tests. The top scorer at the end of the
            competition takes home a{' '}
            <span className="font-semibold text-text-primary">$500 prize</span>.
          </p>

          <LeaderboardTable data={leaderboardData} />
        </section>
      </main>

      <Footer />
    </div>
  )
}
