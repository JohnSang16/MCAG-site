import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { PageHero } from '../components/PageHero'
import { Card } from '../components/Card'

export default function AboutJesus() {
  return (
    <div className="bg-ivory min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero title="More About Jesus Christ" subtitle="Who he is, what he did, and why it matters" />

        {/* Who is Jesus */}
        <section className="py-20 px-4 max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-6 text-center">Who Is Jesus?</h2>
          <div className="font-body text-text-primary leading-relaxed space-y-4 text-base">
            <p>
              Jesus Christ is the Son of God — fully God and fully human — who entered history some 2,000
              years ago in the person of Jesus of Nazareth. Born of the Virgin Mary in Bethlehem, he lived
              a sinless life, taught with unmatched authority, healed the sick, raised the dead, and
              demonstrated the Kingdom of God through every word and action.
            </p>
            <p>
              We believe, as the Bible teaches, that all humanity is separated from God by sin — not
              simply bad behavior, but a fundamental turning away from the God who made us. The consequence
              of that separation is spiritual death. But God, in his extraordinary love, did not leave us
              there. He sent his own Son to close the gap.
            </p>
            <p>
              Jesus went to the cross voluntarily. He bore the full weight of human sin — yours, mine, the
              world's — and died in our place. Three days later, he rose from the dead. The resurrection
              is not a metaphor. It is the hinge of history: proof that death has been conquered, that sin
              has been paid for, and that new life is available to anyone who turns to him.
            </p>
          </div>
        </section>

        {/* Core truths in cards */}
        <section className="py-20 px-4 bg-surface">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-10 text-center">What We Believe About Jesus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">His Divinity</h3>
                <p className="font-body text-text-secondary leading-relaxed text-sm">
                  Jesus is not merely a great teacher or moral example. He is the eternal Son of God —
                  "the image of the invisible God" (Colossians 1:15) — who existed before creation and
                  through whom all things were made.
                </p>
              </Card>
              <Card>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">His Death and Resurrection</h3>
                <p className="font-body text-text-secondary leading-relaxed text-sm">
                  Jesus died on the cross as the atoning sacrifice for the sins of the world, and rose
                  bodily from the dead on the third day, conquering sin and death and securing eternal
                  life for all who believe.
                </p>
              </Card>
              <Card>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">Salvation Through Him</h3>
                <p className="font-body text-text-secondary leading-relaxed text-sm">
                  "For God so loved the world that he gave his one and only Son, that whoever believes in
                  him shall not perish but have eternal life." (John 3:16). Salvation is a free gift,
                  received through faith.
                </p>
              </Card>
              <Card>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">His Return</h3>
                <p className="font-body text-text-secondary leading-relaxed text-sm">
                  Jesus ascended to heaven after his resurrection and promised to return. We live in
                  anticipation of his Second Coming — when he will establish his Kingdom in fullness and
                  make all things new.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">Want to Know More?</h2>
          <p className="font-body text-text-secondary leading-relaxed mb-8">
            We would love to talk with you about faith, Jesus, and what a relationship with God can look
            like in your life. Come visit us or send a prayer request — our church family is here.
          </p>
          <Link
            to="/#prayer"
            className="inline-block font-body font-semibold text-sm px-6 py-3 rounded-full bg-brand-teal text-surface hover:bg-brand-teal/90 transition-colors"
          >
            Reach Out →
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
