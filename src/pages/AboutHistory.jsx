import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Timeline } from '../components/Timeline'

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

const storyImages = [
  { src: '/assets/stockimg/thecalling.webp',   alt: 'The calling of God' },
  { src: '/assets/stockimg/jcheaing.webp',        alt: 'Jesus Christ healing' },
  { src: '/assets/stockimg/homeworship.webp',   alt: 'Home worship gathering' },
  { src: '/assets/stockimg/beingwritten.jpg',   alt: 'A story still being written' },
]

export default function AboutHistory() {
  return (
    <div className="bg-ivory min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* Hero banner */}
        <div className="relative h-[420px] overflow-hidden">
          <img
            src="/assets/stockimg/ourhistory.jpg"
            alt="Church history"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-heading text-4xl md:text-5xl font-bold text-surface mb-4"
            >
              Our History
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="font-body text-surface/80 text-lg max-w-xl"
            >
              From a living room to a congregation: the story of Miracle Center
            </motion.p>
          </div>
        </div>

        {/* Story + side images */}
        <section className="py-20 px-4 max-w-5xl mx-auto">
          <FadeUp>
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-12 text-center">Our Story</h2>
          </FadeUp>

          <div className="space-y-20">
            {[
              {
                heading: 'A Calling, Not a Building',
                body: 'The story of Miracle Center Assembly of God begins not with a building, but with a calling. While serving faithfully at another congregation in the metro Atlanta area, Pastors Abraham and Sarah Thang felt a clear and unmistakable stirring from the Holy Spirit, a call to step out in faith and plant a new church in Clarkston, Georgia, serving the Burmese and Chin (Zo) community and anyone God would bring through the door.',
                img: storyImages[0],
                reverse: false,
              },
              {
                heading: 'Why We Are Called Miracle Center',
                body: 'The name was not chosen lightly. From the very beginning, God gave Pastor Abraham and Pastor Sarah a bold vision: that this church would be a center of miracles. They believed God was calling them to see people healed, droves of them, coming broken and leaving whole. Healing in the body. Healing in the mind. Healing from depression, addiction, grief, and pain. The name "Miracle Center" is a declaration of faith that the same God who healed in Scripture heals today, and that this congregation would be a place where His power is on full display.',
                img: storyImages[1],
                reverse: true,
              },
              {
                heading: 'The Living Room Church',
                body: 'It was not an easy decision. It required laying down the comfort of the familiar and trusting God with the unknown. But in obedience, they said yes. The earliest gatherings were held right in their family home, a living room full of prayer, worship, and the Word of God. The warmth of those first services set the tone for everything that followed: a church where every person is known, welcomed, and loved.',
                img: storyImages[2],
                reverse: false,
              },
              {
                heading: 'A Story Still Being Written',
                body: 'Year by year, the congregation grew. Neighbors invited neighbors. Families joined families. The living room gave way to larger spaces as the community of believers expanded. Today, Miracle Center Assembly of God stands as a living testimony to what God can do when ordinary people walk in extraordinary obedience, and you are invited to be part of it.',
                img: storyImages[3],
                reverse: true,
              },
            ].map(({ heading, body, img, reverse }, i) => (
              <FadeUp key={heading} delay={0.1}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${reverse ? 'md:[direction:rtl]' : ''}`}>
                  <div className={reverse ? '[direction:ltr]' : ''}>
                    <h3 className="font-heading text-2xl font-bold text-text-primary mb-4">{heading}</h3>
                    <p className="font-body text-text-secondary leading-relaxed">{body}</p>
                  </div>
                  <div className={reverse ? '[direction:ltr]' : ''}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className={img.imgClass ?? "w-full h-64 object-cover rounded-xl shadow-md"}
                    />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 bg-surface">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-12 text-center">Our Journey</h2>
            </FadeUp>
            <Timeline />
          </div>
        </section>

        {/* Closing image banner */}
        <div className="relative h-56 overflow-hidden">
          <img
            src="/assets/mcaglive/groupimg2.jpg"
            alt="Miracle Center congregation"
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <FadeUp>
              <p className="font-heading italic text-surface text-2xl text-center px-6 max-w-2xl">
                "Jesus Christ is the same yesterday and today and forever." (Hebrews 13:8)
              </p>
            </FadeUp>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  )
}
