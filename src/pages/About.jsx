import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { PageHero } from '../components/PageHero'
import { Card } from '../components/Card'
import { Timeline } from '../components/Timeline'

export default function About() {
  return (
    <div className="bg-ivory min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* 1. Page Hero */}
        <PageHero
          title="About Us"
          subtitle="A church built on obedience, community, and faith"
        />

        {/* 2. Founding Story */}
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

        {/* 3. Pastor Bios */}
        <section className="py-20 px-4 bg-surface">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-10 text-center">Meet Our Pastors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-border mb-5 flex items-center justify-center">
                  <span className="font-body text-text-secondary text-sm">Photo</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-1">Pastor Abraham Thang</h3>
                <p className="font-body text-brand-teal text-sm font-medium mb-4">Lead Pastor</p>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  Pastor Abraham has served the Clarkston community with a shepherd's heart for years. His
                  preaching is grounded in Scripture and animated by the Holy Spirit, drawing people into a
                  deeper relationship with God. He and Pastor Sarah founded Miracle Center together in
                  obedience to a clear divine calling.
                </p>
              </Card>

              <Card className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-border mb-5 flex items-center justify-center">
                  <span className="font-body text-text-secondary text-sm">Photo</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-1">Pastor Sarah Muan Cing</h3>
                <p className="font-body text-brand-teal text-sm font-medium mb-4">Pastor</p>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  Pastor Sarah is a woman of deep faith and extraordinary compassion. She plays a vital role
                  in shepherding the congregation, leading worship, and nurturing the spiritual growth of
                  every member. Her warmth and dedication create a space where people feel truly at home in
                  the presence of God.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* 4. Denomination Note */}
        <section className="py-14 px-4 max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">Our Tradition</h2>
          <p className="font-body text-text-secondary leading-relaxed">
            Miracle Center Assembly of God is a member congregation of the{' '}
            <span className="text-text-primary font-medium">Assemblies of God</span>, one of the world's
            largest Pentecostal denominations. We stand in the Pentecostal tradition, believing in the
            authority of Scripture, the transforming power of the Holy Spirit, and the gifts of the Spirit
            active in the church today.
          </p>
        </section>

        {/* 5. Values */}
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
            </div>
          </div>
        </section>

        {/* 6. Timeline */}
        <section className="py-20 px-4 max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-12 text-center">Our Journey</h2>
          <Timeline />
        </section>

        {/* 7. Service Times */}
        <section className="py-20 px-4 bg-surface">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-8">Service Times</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="text-center">
                <p className="font-heading text-lg font-semibold text-text-primary mb-1">Saturday</p>
                <p className="font-body text-text-secondary text-sm">7:30 – 9:00 PM</p>
                <p className="font-body text-brand-teal text-xs font-medium mt-2">Youth Service</p>
              </Card>
              <Card className="text-center">
                <p className="font-heading text-lg font-semibold text-text-primary mb-1">Sunday</p>
                <p className="font-body text-text-secondary text-sm">4:00 – 6:30 PM</p>
                <p className="font-body text-brand-teal text-xs font-medium mt-2">Main Service</p>
              </Card>
            </div>
          </div>
        </section>

        {/* 8. Location + Directions */}
        <section className="py-20 px-4 max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-4 text-center">Find Us</h2>
          <p className="font-body text-text-secondary text-center mb-8">
            We are located in Clarkston, GA — a vibrant, diverse community just east of Atlanta.
          </p>
          <div className="rounded-lg overflow-hidden border border-border">
            <iframe
              title="Miracle Center Assembly of God location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26504.98!2d-84.24!3d33.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a5ef5d5cdb09%3A0x6b0cef7f28a7a2c7!2sClarkston%2C%20GA!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full block"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
