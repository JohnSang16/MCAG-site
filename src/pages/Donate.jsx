import { ZELLE_NUMBER } from '../config'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { PageHero } from '../components/PageHero'
import { Card } from '../components/Card'
import { FacebookCTAStrip } from '../components/FacebookCTAStrip'

const steps = [
  { n: 1, text: 'Open the Zelle app or find Zelle inside your bank\'s mobile app.' },
  { n: 2, text: `Tap "Send Money" and enter the phone number: ${ZELLE_NUMBER}.` },
  { n: 3, text: 'Enter the amount you wish to give.' },
  { n: 4, text: 'In the memo field write "Tithe" or "Offering" so we can acknowledge your gift.' },
  { n: 5, text: 'Review the details and tap Send. Your gift reaches us instantly.' },
]

export default function Donate() {
  return (
    <div className="bg-ivory min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero */}
        <PageHero title="Give" subtitle="Every gift advances the Kingdom and strengthens our community." />

        {/* 2. Why We Give */}
        <section className="py-20 px-4 max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">Why We Give</h2>
          <p className="font-body text-text-secondary leading-relaxed">
            Generosity is an act of worship. When we give, we participate in God's work — supporting
            the church community, funding outreach, and investing in the lives of people around us.
            Giving is not an obligation; it is a privilege and a joy for those whose hearts God has
            touched. Every contribution, large or small, is received with gratitude and used faithfully.
          </p>
        </section>

        {/* 3. Bible Verse */}
        <section className="py-12 px-4 bg-surface">
          <blockquote className="max-w-xl mx-auto text-center">
            <p className="font-heading text-xl text-text-primary leading-relaxed mb-4">
              "Each of you should give what you have decided in your heart to give, not reluctantly
              or under compulsion, for God loves a cheerful giver."
            </p>
            <cite className="font-body text-text-secondary text-sm not-italic">— 2 Corinthians 9:7</cite>
          </blockquote>
        </section>

        {/* 4. Zelle Instructions */}
        <section className="py-20 px-4 max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-3 text-center">Give via Zelle</h2>
          <p className="font-body text-text-secondary text-center mb-10">
            Zelle is free, instant, and available inside most major banking apps.
          </p>
          <ol className="space-y-4">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-teal text-surface font-body font-bold text-sm flex items-center justify-center">
                  {s.n}
                </span>
                <p className="font-body text-text-primary leading-relaxed pt-1">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 5. Zelle Number Display */}
        <section className="py-16 px-4 bg-surface">
          <div className="max-w-sm mx-auto">
            <Card className="text-center">
              <p className="font-body text-text-secondary text-sm mb-2">Send Zelle to</p>
              <p className="font-heading text-4xl font-bold text-brand-teal tracking-wide">{ZELLE_NUMBER}</p>
              <p className="font-body text-text-secondary text-xs mt-3">Miracle Center Assembly of God · 4113 Church St, Clarkston, GA 30021</p>
            </Card>
          </div>
        </section>

        {/* 6. Facebook CTA */}
        <FacebookCTAStrip />
      </main>

      <Footer />
    </div>
  )
}
