import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

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

const ministries = [
  {
    name: "Women's Night",
    day: 'Every Friday',
    time: '6:00 PM',
    img: '/assets/mcaglive/nupite.jpg',
    description: 'A dedicated space for the women of the congregation to worship, pray, study Scripture, and build one another up in faith. Led by Pastor Sarah Muan Cing.',
  },
  {
    name: 'Youth Service',
    day: 'Every Saturday',
    time: '7:30 – 9:00 PM',
    img: '/assets/mcaglive/sundayschool1.jpg',
    description: 'The youth lead the Saturday night service themselves. They open with worship, share Bible verses, and give testimonials about what God is doing in their lives. It is a place to connect with other young believers, grow in faith intentionally, and experience God in a space that is fully theirs.',
  },
  {
    name: 'Sunday Congregation',
    day: 'Every Sunday',
    time: '4:00 – 6:30 PM',
    img: '/assets/mcaglive/groupimg2.jpg',
    description: 'The full church family comes together for worship, the preached Word, prayer, and fellowship. Everyone is welcome at every service.',
  },
]

const beliefs = [
  {
    title: 'The Bible',
    body: 'We believe the Bible is the inspired, infallible Word of God and the final authority for Christian faith and practice.',
    img: '/assets/stockimg/scripture.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Salvation Through Jesus',
    body: 'We believe that Jesus Christ is the Son of God, that he died for our sins and rose from the dead, and that salvation comes through faith in him alone.',
    img: '/assets/stockimg/jc-cross.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Baptism in the Holy Spirit',
    body: 'We believe in the baptism of the Holy Spirit as a distinct experience after salvation, evidenced by speaking in tongues, and empowering believers for witness and service.',
    img: '/assets/stockimg/holyspirit.webp',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
  {
    title: 'Divine Healing',
    body: 'We believe that healing for the body, mind, and soul is provided through the atonement of Christ. God still heals today, and we pray for healing in every service.',
    img: '/assets/stockimg/healing.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'The Second Coming',
    body: 'We believe in the imminent, personal return of Jesus Christ. This hope shapes how we live, how we worship, and how we serve our community.',
    img: '/assets/stockimg/divinity.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: 'The Church as Family',
    body: 'We believe the local church is not a building but a family of believers called to love one another, bear each other\'s burdens, and together advance the Kingdom of God.',
    img: '/assets/mcaglive/groupimg2.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function About() {
  return (
    <div className="bg-ivory min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <div className="relative h-[460px] overflow-hidden">
          <img
            src="/assets/mcaglive/groupimg.jpg"
            alt="Miracle Center congregation"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 flex flex-col items-center justify-center text-center px-6">
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
              Who we are, what we believe, and why we exist
            </motion.p>
          </div>
        </div>

        {/* Who We Are */}
        <section className="py-20 px-6" style={{ background: 'linear-gradient(160deg, #eaf0fb 0%, #f5f0e8 60%, #e6f4f1 100%)' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <p className="font-body text-brand-teal text-xs font-bold uppercase tracking-widest mb-3">Our Community</p>
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-6">Who We Are</h2>
              <p className="font-body text-text-secondary leading-relaxed mb-4">
                Miracle Center Assembly of God is a Spirit-filled Pentecostal church in Clarkston, Georgia. We are rooted in the Burmese and Chin (Zo) community. Many of our members are immigrants and refugees who carried their faith across oceans to plant it here in the American South.
              </p>
              <p className="font-body text-text-secondary leading-relaxed mb-4">
                Clarkston is one of the most ethnically diverse cities in the United States, and our congregation reflects that. While our cultural roots are Burmese and Chin (Zo), people of every nationality, background, and walk of life are not just welcomed. They are family.
              </p>
              <p className="font-body text-text-secondary leading-relaxed">
                We speak different languages, come from different countries, and carry different stories. But we are united by one faith, one Lord, and one hope.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="grid grid-cols-2 gap-3">
                <img src="/assets/mcaglive/groupimg2.jpg" alt="Congregation" className="rounded-2xl w-full h-44 object-cover shadow-md" />
                <img src="/assets/mcaglive/sundayschool2.jpg" alt="Sunday school" className="rounded-2xl w-full h-44 object-cover shadow-md mt-6" />
                <img src="/assets/mcaglive/papite.jpg" alt="Worship" className="rounded-2xl w-full h-44 object-cover shadow-md" />
                <img src="/assets/mcaglive/nupite.jpg" alt="Community" className="rounded-2xl w-full h-44 object-cover shadow-md mt-6" />
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Vision */}
        <section
          className="py-24 px-6 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a3aad 0%, #0e7c6e 100%)' }}
        >
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <FadeUp>
              <p className="font-body text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">Why We Exist</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-surface mb-8">Our Vision</h2>
              <p className="font-body text-surface/90 text-lg leading-relaxed mb-6">
                The name "Miracle Center Assembly of God" was chosen intentionally. From the very beginning, God gave our founders a bold vision: that this church would be a center of miracles.
              </p>
              <p className="font-body text-surface/80 leading-relaxed mb-6">
                Not miracles as spectacle, but miracles as the natural overflow of a God who is still alive and still moves. Healing in the body. Restoration of broken marriages. Freedom from addiction and depression. Lives transformed by the power of the Holy Spirit.
              </p>
              <p className="font-body text-surface/80 leading-relaxed">
                The vision from the beginning was that droves of people would come to this church and leave healed and transformed. That vision has not changed. Every service, every prayer, every act of worship is an act of faith that God will do what only He can do.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Meet the Pastors */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-5xl mx-auto">
            <FadeUp>
              <p className="font-body text-brand-teal text-xs font-bold uppercase tracking-widest mb-3 text-center">Leadership</p>
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-3 text-center">Meet the Pastors</h2>
              <p className="font-body text-text-secondary text-center mb-12 max-w-xl mx-auto">
                Servant leaders who said yes to a calling before they knew what it would cost, and have never looked back.
              </p>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  name: 'Pastor Abraham Thang',
                  title: 'Lead Pastor',
                  img: '/assets/mcaglive/lp1.jpg',
                  imgClass: 'w-full h-full object-cover object-[center_28%] scale-150',
                  bio: [
                    'Born in Myanmar and raised in a family of deep faith, Pastor Abraham came to the United States carrying a God-given burden for the Burmese and Chin (Zo) community. He served faithfully at another congregation before the Holy Spirit called him to something new: plant a church of his own.',
                    'Pastor Abraham preaches with boldness and clarity, uncompromising in his conviction that the God of the Bible is alive today. His singular focus is on seeing people healed, delivered, and transformed. Not just to come to church, but to encounter God.',
                    'He believes Miracle Center is not just a congregation. It is a declaration that miracles still happen.',
                  ],
                },
                {
                  name: 'Pastor Sarah Muan Cing',
                  title: 'Pastor',
                  img: '/assets/mcaglive/ap1.jpg',
                  imgClass: 'w-full h-full object-cover object-center',
                  bio: [
                    'Pastor Sarah has a deep heart for the youth and for anyone who feels broken. She believes that young people do not have to wait to be part of what God is doing. They are full members of the body of Christ right now, and she pours into them accordingly.',
                    'She leads Women\'s Night every Friday and plays a central role in the Saturday youth service, where she helps create a space for young people to lead, share testimonies, speak Scripture, and grow in faith together. She wants every young person to leave knowing they are seen, known, and loved by God.',
                    'Her message to the hurting and the broken is the same every time: you are not too far gone. God specializes in restoring what looks beyond repair.',
                  ],
                },
              ].map(({ name, title, img, imgClass, bio }, i) => (
                <FadeUp key={name} delay={i * 0.1}>
                  <div className="rounded-3xl overflow-hidden border border-border shadow-sm bg-ivory flex flex-col">
                    <div className="w-full h-72 overflow-hidden shrink-0">
                      <img src={img} alt={name} className={imgClass} />
                    </div>
                    <div className="p-8 flex flex-col gap-4">
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-text-primary">{name}</h3>
                        <p className="font-body text-sm text-brand-teal font-medium mt-1">{title}</p>
                      </div>
                      <div className="flex flex-col gap-3">
                        {bio.map((para, j) => (
                          <p key={j} className="font-body text-sm text-text-secondary leading-relaxed">{para}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Ministries */}
        <section className="py-20 px-6 bg-ivory">
          <div className="max-w-5xl mx-auto">
            <FadeUp>
              <p className="font-body text-brand-teal text-xs font-bold uppercase tracking-widest mb-3 text-center">How We Gather</p>
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-3 text-center">Our Ministries</h2>
              <p className="font-body text-text-secondary text-center mb-12 max-w-xl mx-auto">
                Every service is an opportunity to encounter God. Here is how we meet throughout the week.
              </p>
            </FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {ministries.map(({ name, day, time, img, description }, i) => (
                <FadeUp key={name} delay={i * 0.1}>
                  <div className="rounded-2xl overflow-hidden border border-border bg-surface shadow-sm flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img src={img} alt={name} className="w-full h-full object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 px-4 pb-4">
                        <p className="font-body text-xs text-white/80 font-bold uppercase tracking-widest">{day}</p>
                        <p className="font-heading font-bold text-white text-lg leading-tight">{time}</p>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col gap-2 flex-1">
                      <h3 className="font-heading font-bold text-lg text-text-primary">{name}</h3>
                      <p className="font-body text-sm text-text-secondary leading-relaxed">{description}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-5xl mx-auto">
            <FadeUp>
              <p className="font-body text-brand-blue text-xs font-bold uppercase tracking-widest mb-3 text-center">Our Faith</p>
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-3 text-center">What We Believe</h2>
              <p className="font-body text-text-secondary text-center mb-12 max-w-xl mx-auto">
                As a member church of the Assemblies of God, our beliefs are rooted in Scripture and Pentecostal tradition. Here is what we stand on.
              </p>
            </FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {beliefs.map(({ title, body, img, icon }, i) => (
                <FadeUp key={title} delay={(i % 3) * 0.1}>
                  <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 h-72">
                    <img
                      src={img}
                      alt={title}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                    <div className="absolute inset-0 flex flex-col justify-between p-5">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-surface shrink-0"
                        style={{ background: 'linear-gradient(135deg, #0e7c6e, #1a3aad)' }}>
                        {icon}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg text-surface mb-1.5">{title}</h3>
                        <p className="font-body text-sm text-surface/80 leading-relaxed">{body}</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp delay={0.2}>
              <div className="mt-10 text-center">
                <p className="font-body text-sm text-text-secondary mb-4">For the full Assemblies of God Statement of Fundamental Truths:</p>
                <a
                  href="https://ag.org/beliefs/statement-of-fundamental-truths"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-body text-sm font-semibold text-brand-blue hover:underline"
                >
                  Read the full statement at ag.org →
                </a>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* History CTA */}
        <section className="py-20 px-6 bg-ivory">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <p className="font-body text-brand-teal text-xs font-bold uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">Where We Came From</h2>
              <p className="font-body text-text-secondary leading-relaxed mb-8 max-w-xl mx-auto">
                Founded in 2021, the story of Miracle Center is a story of faith, obedience, and a God who keeps his promises. From a living room in Clarkston to a growing congregation, every step has been led by his hand.
              </p>
              <Link
                to="/about/history"
                className="inline-block font-body font-semibold text-sm px-8 py-4 rounded-full text-surface transition-colors duration-200"
                style={{ background: 'linear-gradient(135deg, #0e7c6e, #1a3aad)' }}
              >
                Read Our Full History →
              </Link>
            </FadeUp>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
