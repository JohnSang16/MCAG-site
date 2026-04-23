import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { PageHero } from '../components/PageHero'
import { Card } from '../components/Card'

export default function AboutBeliefs() {
  return (
    <div className="bg-ivory min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero title="What We Believe" subtitle="Grounded in Scripture, alive in the Spirit" />

        {/* Assemblies of God */}
        <section className="py-20 px-4 max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">Our Tradition</h2>
          <p className="font-body text-text-secondary leading-relaxed mb-6">
            Miracle Center Assembly of God is a member congregation of the{' '}
            <span className="text-text-primary font-medium">Assemblies of God</span>, one of the world's
            largest Pentecostal denominations. We stand in the Pentecostal tradition, believing in the
            authority of Scripture, the transforming power of the Holy Spirit, and the gifts of the Spirit
            active in the church today.
          </p>
          <a
            href="https://ag.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-brand-blue hover:underline"
          >
            Learn more at ag.org →
          </a>
        </section>

        {/* Core Beliefs */}
        <section className="py-20 px-4 bg-surface">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-10 text-center">What We Value</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">Community</h3>
                <p className="font-body text-text-secondary leading-relaxed text-sm">
                  We believe the church is not a building but a people. At Miracle Center, every person is
                  known by name, welcomed without condition, and invited into a family that looks out for
                  one another through every season of life.
                </p>
              </Card>
              <Card>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">Prayer</h3>
                <p className="font-body text-text-secondary leading-relaxed text-sm">
                  Prayer is the heartbeat of this church. From the earliest home services to today, we have
                  built everything on conversation with God. We pray together, we pray for one another, and
                  we trust that God hears and answers every prayer lifted to Him.
                </p>
              </Card>
              <Card>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">The Holy Spirit</h3>
                <p className="font-body text-text-secondary leading-relaxed text-sm">
                  We believe in the baptism of the Holy Spirit as a gift available to every believer, with
                  the evidence of speaking in tongues and the ongoing operation of the gifts of the Spirit
                  in the life of the church.
                </p>
              </Card>
              <Card>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">Scripture</h3>
                <p className="font-body text-text-secondary leading-relaxed text-sm">
                  The Bible is the inspired and infallible Word of God — our ultimate authority for faith
                  and practice. Everything we teach and everything we do is tested against and shaped by
                  the truth of God's Word.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Statement of Faith summary */}
        <section className="py-20 px-4 max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-text-primary mb-6 text-center">The 16 Fundamental Truths</h2>
          <p className="font-body text-text-secondary leading-relaxed text-center mb-8">
            As an Assemblies of God church, we hold to the 16 Fundamental Truths — a statement of
            biblical doctrine covering salvation, the Holy Spirit, divine healing, and the Second Coming
            of Christ. You can read the full statement on the Assemblies of God website.
          </p>
          <div className="text-center">
            <a
              href="https://ag.org/beliefs/statement-of-fundamental-truths"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body font-semibold text-sm px-6 py-3 rounded-full bg-brand-blue text-surface hover:bg-brand-blue/90 transition-colors"
            >
              Read the Full Statement →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
