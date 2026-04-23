import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { PageHero } from '../components/PageHero'
import { Timeline } from '../components/Timeline'

export default function AboutHistory() {
  return (
    <div className="bg-ivory min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageHero title="Our History" subtitle="From a living room to a congregation — the story of Miracle Center" />

        <section className="py-20 px-4 max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-6 text-center">Our Story</h2>
          <div className="font-body text-text-primary leading-relaxed space-y-4 text-base">
            <p>
              The story of Miracle Center Assembly of God begins not with a building, but with a calling.
              While serving faithfully at another congregation in the metro Atlanta area, Pastors Abraham
              and Sarah Thang felt a clear and unmistakable stirring from the Holy Spirit — a call to step
              out in faith and plant a new church in the heart of Clarkston, Georgia.
            </p>
            <p>
              It was not an easy decision. It required laying down the comfort of the familiar and trusting
              God with the unknown. But in obedience, they said yes. The earliest gatherings were held right
              in their family home — a living room full of prayer, worship, and the Word of God. The warmth
              of those first services set the tone for everything that followed: a church where every person
              is known, welcomed, and loved.
            </p>
            <p>
              Year by year, the congregation grew. Neighbors invited neighbors. Families joined families.
              The living room gave way to larger rented spaces as the community of believers expanded beyond
              what any single home could hold. Through every transition, the spirit of the church remained
              the same — rooted in Scripture, alive in the Holy Spirit, and deeply committed to one another.
            </p>
            <p>
              Today, Miracle Center Assembly of God stands as a living testimony to what God can do when
              ordinary people walk in extraordinary obedience. The journey from a small home service to an
              established congregation is a story still being written — and you are invited to be part of it.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-12 text-center">Our Journey</h2>
          <Timeline />
        </section>
      </main>
      <Footer />
    </div>
  )
}
