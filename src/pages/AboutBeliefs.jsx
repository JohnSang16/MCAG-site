import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'

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

const values = [
  {
    title: 'Community',
    body: 'We believe the church is not a building but a people. At Miracle Center, every person is known by name, welcomed without condition, and invited into a family that looks out for one another through every season of life.',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Prayer',
    body: 'Prayer is the heartbeat of this church. From the earliest home services to today, we have built everything on conversation with God. We pray together, we pray for one another, and we trust that God hears and answers every prayer lifted to Him.',
    img: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'The Holy Spirit',
    body: 'We believe in the baptism of the Holy Spirit as a gift available to every believer, with the evidence of speaking in tongues and the ongoing operation of the gifts of the Spirit in the life of the church.',
    img: 'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Scripture',
    body: 'The Bible is the inspired and infallible Word of God — our ultimate authority for faith and practice. Everything we teach and everything we do is tested against and shaped by the truth of God\'s Word.',
    img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80',
  },
]

export default function AboutBeliefs() {
  return (
    <div className="bg-ivory min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <div className="relative h-[420px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80"
            alt="Worship"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 to-brand-blue/50 flex flex-col items-center justify-center text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-heading text-4xl md:text-5xl font-bold text-surface mb-4"
            >
              What We Believe
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="font-body text-surface/80 text-lg max-w-xl"
            >
              Grounded in Scripture, alive in the Spirit
            </motion.p>
          </div>
        </div>

        {/* Tradition section — text + AG logo area */}
        <section className="py-20 px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeUp>
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
                className="inline-block font-body font-semibold text-sm px-5 py-2.5 rounded-full border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-surface transition-colors"
              >
                Learn more at ag.org →
              </a>
            </FadeUp>
            <FadeUp delay={0.15}>
              <img
                src="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=800&q=80"
                alt="Pentecostal worship"
                className="w-full h-72 object-cover rounded-2xl shadow-lg"
              />
            </FadeUp>
          </div>
        </section>

        {/* Values grid with images */}
        <section className="py-20 px-4 bg-surface">
          <div className="max-w-5xl mx-auto">
            <FadeUp>
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-10 text-center">What We Value</h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map(({ title, body, img }, i) => (
                <FadeUp key={title} delay={i * 0.1}>
                  <Card className="overflow-hidden p-0 h-full flex flex-col">
                    <img src={img} alt={title} className="w-full h-44 object-cover" />
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-heading text-xl font-bold text-text-primary mb-3">{title}</h3>
                      <p className="font-body text-text-secondary leading-relaxed text-sm">{body}</p>
                    </div>
                  </Card>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* 16 Truths banner */}
        <div className="relative py-20 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1600&q=80"
            alt="Open Bible"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-blue/80" />
          <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
            <FadeUp>
              <h2 className="font-heading text-3xl font-bold text-surface mb-6">The 16 Fundamental Truths</h2>
              <p className="font-body text-surface/80 leading-relaxed mb-8">
                As an Assemblies of God church, we hold to the 16 Fundamental Truths — a statement of
                biblical doctrine covering salvation, the Holy Spirit, divine healing, and the Second Coming
                of Christ.
              </p>
              <a
                href="https://ag.org/beliefs/statement-of-fundamental-truths"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body font-semibold text-sm px-6 py-3 rounded-full bg-brand-gold text-text-primary hover:bg-brand-gold/90 transition-colors"
              >
                Read the Full Statement →
              </a>
            </FadeUp>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  )
}
