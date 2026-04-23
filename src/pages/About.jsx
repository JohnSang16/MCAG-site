import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'
import { ValueStrip } from '../components/ValueStrip'

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

const subpages = [
  {
    to: '/about/history',
    label: 'Our History',
    description: 'How Miracle Center began — from a living room calling to a growing congregation.',
    img: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80',
  },
]

export default function About() {
  return (
    <div className="bg-ivory min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <div className="relative h-[420px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1600&q=80"
            alt="About Miracle Center"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex flex-col items-center justify-center text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-heading text-4xl md:text-5xl font-bold text-surface mb-4"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="font-body text-surface/80 text-lg max-w-xl"
            >
              A church built on obedience, community, and faith
            </motion.p>
          </div>
        </div>

        {/* Our History card */}
        <section className="py-20 px-4 max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-10 text-center">Our Story</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link to={subpages[0].to} className="group block">
              <Card className="p-0 overflow-hidden flex flex-col md:flex-row transition-shadow group-hover:shadow-lg">
                <div className="overflow-hidden md:w-64 shrink-0">
                  <img
                    src={subpages[0].img}
                    alt={subpages[0].label}
                    className="w-full h-48 md:h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center flex-1">
                  <h3 className="font-heading font-bold text-xl text-text-primary mb-2">{subpages[0].label}</h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">{subpages[0].description}</p>
                  <span className="font-body text-sm text-brand-blue mt-4 inline-block group-hover:underline">Read more →</span>
                </div>
              </Card>
            </Link>
          </FadeUp>
        </section>

        {/* Meet Our Pastors */}
        <section className="py-20 px-4 bg-surface">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-10 text-center">Meet Our Pastors</h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Pastor Abraham Thang',
                  title: 'Lead Pastor',
                  bio: 'Pastor Abraham has served the Clarkston community with a shepherd\'s heart for years. His preaching is grounded in Scripture and animated by the Holy Spirit, drawing people into a deeper relationship with God.',
                  img: '/assets/mcaglive/lp1.jpg',
                  imgClass: 'w-full h-full object-cover object-[center_28%] scale-150',
                },
                {
                  name: 'Pastor Sarah Muan Cing',
                  title: 'Pastor',
                  bio: 'Pastor Sarah is a woman of deep faith and extraordinary compassion. She plays a vital role in shepherding the congregation, leading worship, and nurturing the spiritual growth of every member.',
                  img: '/assets/mcaglive/ap1.jpg',
                  imgClass: 'w-full h-full object-cover object-center',
                },
              ].map(({ name, title, bio, img, imgClass }, i) => (
                <FadeUp key={name} delay={i * 0.1}>
                  <Card className="flex flex-col items-center text-center overflow-hidden p-0">
                    <div className="w-full h-56 overflow-hidden shrink-0">
                      <img src={img} alt={name} className={imgClass} />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-bold text-text-primary mb-1">{name}</h3>
                      <p className="font-body text-brand-teal text-sm font-medium mb-4">{title}</p>
                      <p className="font-body text-text-secondary text-sm leading-relaxed">{bio}</p>
                    </div>
                  </Card>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <ValueStrip className="py-20" />

        {/* What We Believe */}
        <section className="py-20 px-4 bg-ivory">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-3 text-center">What We Believe</h2>
              <p className="font-body text-text-secondary text-center mb-10">
                Our Pentecostal faith is rooted in Scripture, Spirit-filled living, and the Assemblies of God statement of beliefs.
              </p>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeUp delay={0.1}>
                <Link to="/about/jesus" className="group block h-full">
                  <Card className="p-0 overflow-hidden h-full flex flex-col transition-shadow group-hover:shadow-lg">
                    <div className="overflow-hidden">
                      <img
                        src="/assets/stockimg/jc1.avif"
                        alt="Jesus Christ"
                        className="w-full h-44 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-heading font-bold text-lg text-text-primary mb-2">More About Jesus Christ</h3>
                      <p className="font-body text-sm text-text-secondary leading-relaxed flex-1">
                        Who Jesus is, what he did, and what it means to follow him today.
                      </p>
                      <span className="font-body text-sm text-brand-blue mt-4 inline-block group-hover:underline">Read more →</span>
                    </div>
                  </Card>
                </Link>
              </FadeUp>
              <FadeUp delay={0.2}>
                <Link to="/about/beliefs" className="group block h-full">
                  <Card className="p-0 overflow-hidden h-full flex flex-col transition-shadow group-hover:shadow-lg">
                    <div className="overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80"
                        alt="Assembly of God worship"
                        className="w-full h-44 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-heading font-bold text-lg text-text-primary mb-2">What It Means to Be Assembly of God</h3>
                      <p className="font-body text-sm text-text-secondary leading-relaxed flex-1">
                        Explore the Pentecostal faith, Spirit-filled living, and the AG statement of beliefs.
                      </p>
                      <a
                        href="https://ag.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="font-body text-xs text-brand-blue hover:underline mt-2 inline-block"
                      >
                        Learn more at ag.org →
                      </a>
                    </div>
                  </Card>
                </Link>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Service Times */}
        <section className="py-20 px-4 bg-ivory">
          <div className="max-w-2xl mx-auto text-center">
            <FadeUp>
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
            </FadeUp>
          </div>
        </section>

        {/* Find Us */}
        <section className="py-20 px-4 max-w-4xl mx-auto">
          <FadeUp>
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-4 text-center">Find Us</h2>
            <p className="font-body text-text-secondary text-center mb-8">
              We are located at 4113 Church St, Clarkston, GA 30021 — a vibrant, diverse community just east of Atlanta.
            </p>
            <div className="rounded-xl overflow-hidden border border-border shadow-md">
              <iframe
                title="Miracle Center Assembly of God location"
                src="https://www.google.com/maps?q=4113+Church+St,+Clarkston,+GA+30021&output=embed"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full block"
              />
            </div>
          </FadeUp>
        </section>

      </main>
      <Footer />
    </div>
  )
}
