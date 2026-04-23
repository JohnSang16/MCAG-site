import { useRef } from 'react'
import { Link } from 'react-router-dom'
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

const beliefs = [
  {
    title: 'His Divinity',
    body: 'Jesus is not merely a great teacher or moral example. He is the eternal Son of God — "the image of the invisible God" (Colossians 1:15) — who existed before creation and through whom all things were made.',
    img: '/assets/stockimg/divinity.jpg',
  },
  {
    title: 'His Death and Resurrection',
    body: 'Jesus died on the cross as the atoning sacrifice for the sins of the world, and rose bodily from the dead on the third day, conquering sin and death and securing eternal life for all who believe.',
    img: '/assets/stockimg/jcdr.jpg',
  },
  {
    title: 'Salvation Through Him',
    body: '"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." (John 3:16). Salvation is a free gift, received through faith.',
    img: '/assets/stockimg/salvation.webp',
  },
  {
    title: 'His Return',
    body: 'Jesus ascended to heaven after his resurrection and promised to return. We live in anticipation of his Second Coming — when he will establish his Kingdom in fullness and make all things new.',
    img: '/assets/stockimg/jcreturn.jpg',
    imgClass: 'object-[center_15%]',
  },
]

export default function AboutJesus() {
  return (
    <div className="bg-ivory min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <div className="relative h-[480px] overflow-hidden">
          <img
            src="/assets/stockimg/jc1.avif"
            alt="Jesus Christ"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 flex flex-col items-center justify-center text-center px-6">
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.4em' }}
              animate={{ opacity: 1, letterSpacing: '0.2em' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="font-body text-brand-gold text-xs uppercase tracking-widest mb-4 font-semibold"
            >
              Who He Is · What He Did · Why It Matters
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="font-heading text-4xl md:text-6xl font-bold text-surface mb-4 leading-tight"
            >
              More About<br />Jesus Christ
            </motion.h1>
          </div>
        </div>

        {/* Belief cards with images */}
        <section className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #f5f0e8 0%, #eaf0fb 60%, #e6f4f1 100%)' }}>
          {/* Decorative faint cross */}
          <svg className="absolute right-0 top-0 w-[420px] h-[520px] opacity-[0.045] pointer-events-none select-none" viewBox="0 0 200 260" fill="none">
            <rect x="88" y="0" width="24" height="260" rx="4" fill="#1a3aad" />
            <rect x="10" y="68" width="180" height="24" rx="4" fill="#1a3aad" />
          </svg>
          <svg className="absolute left-0 bottom-0 w-[280px] h-[360px] opacity-[0.04] pointer-events-none select-none" viewBox="0 0 200 260" fill="none">
            <rect x="88" y="0" width="24" height="260" rx="4" fill="#0e7c6e" />
            <rect x="10" y="68" width="180" height="24" rx="4" fill="#0e7c6e" />
          </svg>
          <div className="max-w-5xl mx-auto relative z-10">
            <FadeUp>
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-10 text-center">What We Believe About Jesus</h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {beliefs.map(({ title, body, img, imgClass = 'object-center' }, i) => (
                <FadeUp key={title} delay={i * 0.1}>
                  <Card className="overflow-hidden p-0 h-full flex flex-col">
                    <img src={img} alt={title} className={`w-full h-44 object-cover ${imgClass}`} />
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

        {/* Who is Jesus — text + image side by side */}
        <section className="py-20 px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">Who Is Jesus?</h2>
              <div className="font-body text-text-secondary leading-relaxed space-y-4">
                <p>
                  Jesus Christ is the Son of God — fully God and fully human — who entered history some 2,000
                  years ago in the person of Jesus of Nazareth. Born of the Virgin Mary in Bethlehem, he lived
                  a sinless life, taught with unmatched authority, healed the sick, raised the dead, and
                  demonstrated the Kingdom of God through every word and action.
                </p>
                <p>
                  We believe, as the Bible teaches, that all humanity is separated from God by sin. But God,
                  in his extraordinary love, did not leave us there. He sent his own Son to close the gap.
                </p>
                <p>
                  Jesus went to the cross voluntarily. He bore the full weight of human sin and died in our
                  place. Three days later, he rose from the dead — proof that death has been conquered and
                  new life is available to anyone who turns to him.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <img
                src="/assets/stockimg/jc-cross.jpg"
                alt="Jesus on the cross"
                className="w-full h-full object-contain rounded-2xl shadow-lg"
              />
            </FadeUp>
          </div>
        </section>

        {/* Scripture banner */}
        <div className="relative py-24 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a3aad 0%, #0e7c6e 100%)' }}>
          <FadeUp>
            <p className="font-heading italic text-surface text-2xl md:text-3xl text-center max-w-2xl mx-auto leading-relaxed">
              "I am the way, the truth, and the life. No one comes to the Father except through me."
            </p>
            <p className="font-body text-surface/60 text-sm text-center mt-4">— John 14:6</p>
          </FadeUp>
        </div>

        {/* CTA */}
        <section className="py-20 px-4 max-w-2xl mx-auto text-center">
          <FadeUp>
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">Want to Know More?</h2>
            <p className="font-body text-text-secondary leading-relaxed mb-8">
              We would love to talk with you about faith, Jesus, and what a relationship with God can look
              like in your life. Come visit us or send a prayer request — our church family is here.
            </p>
            <Link
              to="/"
              className="inline-block font-body font-semibold text-sm px-6 py-3 rounded-full bg-brand-teal text-surface hover:bg-brand-teal/90 transition-colors"
            >
              Reach Out →
            </Link>
          </FadeUp>
        </section>

      </main>
      <Footer />
    </div>
  )
}
