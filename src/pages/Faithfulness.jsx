import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'

const THEMES = [
  {
    id: 'strength',
    label: 'Strength',
    tip: 'Start your morning by writing one thing you are trusting God for today.',
    spot: 'Clarkston Community Center Park',
    verses: [
      { ref: 'Philippians 4:13', text: 'I can do all things through Christ who strengthens me.' },
      { ref: 'Isaiah 40:31', text: 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.' },
      { ref: 'Psalm 46:1', text: 'God is our refuge and strength, an ever-present help in trouble.' },
      { ref: '2 Corinthians 12:9', text: 'My grace is sufficient for you, for my power is made perfect in weakness.' },
      { ref: 'Ephesians 6:10', text: 'Finally, be strong in the Lord and in his mighty power.' },
      { ref: 'Psalm 28:7', text: 'The Lord is my strength and my shield; my heart trusts in him, and he helps me.' },
    ],
  },
  {
    id: 'peace',
    label: 'Peace',
    tip: 'Spend 5 minutes in silence before checking your phone in the morning.',
    spot: 'Stone Mountain Park Trails',
    verses: [
      { ref: 'John 14:27', text: 'Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.' },
      { ref: 'Philippians 4:6-7', text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts.' },
      { ref: 'Isaiah 26:3', text: 'You will keep in perfect peace those whose minds are steadfast, because they trust in you.' },
      { ref: 'Romans 8:6', text: 'The mind governed by the flesh is death, but the mind governed by the Spirit is life and peace.' },
      { ref: 'Colossians 3:15', text: 'Let the peace of Christ rule in your hearts, since as members of one body you were called to peace.' },
      { ref: 'Psalm 29:11', text: 'The Lord gives strength to his people; the Lord blesses his people with peace.' },
    ],
  },
  {
    id: 'hope',
    label: 'Hope',
    tip: 'Journal one thing you are hopeful about and thank God for it specifically.',
    spot: 'Clarkston International Bible Church Garden',
    verses: [
      { ref: 'Jeremiah 29:11', text: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.' },
      { ref: 'Romans 15:13', text: 'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.' },
      { ref: 'Psalm 31:24', text: 'Be strong and take heart, all you who hope in the Lord.' },
      { ref: 'Lamentations 3:22-23', text: 'Because of the Lord\'s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.' },
      { ref: 'Romans 5:3-4', text: 'We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope.' },
      { ref: 'Hebrews 10:23', text: 'Let us hold unswervingly to the hope we profess, for he who promised is faithful.' },
    ],
  },
  {
    id: 'courage',
    label: 'Courage',
    tip: 'Do one thing today that you have been putting off out of fear.',
    spot: 'Miracle Center Assembly of God',
    verses: [
      { ref: 'Joshua 1:9', text: 'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.' },
      { ref: 'Deuteronomy 31:6', text: 'Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.' },
      { ref: 'Psalm 27:1', text: 'The Lord is my light and my salvation — whom shall I fear? The Lord is the stronghold of my life — of whom shall I be afraid?' },
      { ref: '2 Timothy 1:7', text: 'For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.' },
      { ref: 'Isaiah 41:10', text: 'Do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you.' },
      { ref: '1 Chronicles 28:20', text: 'Be strong and courageous, and do the work. Do not be afraid or discouraged, for the Lord God, my God, is with you.' },
    ],
  },
  {
    id: 'faith',
    label: 'Faith',
    tip: 'Read one chapter of the Gospels and underline one thing Jesus said.',
    spot: 'Redan Park',
    verses: [
      { ref: 'Hebrews 11:1', text: 'Now faith is confidence in what we hope for and assurance about what we do not see.' },
      { ref: 'Mark 11:24', text: 'Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours.' },
      { ref: 'Romans 10:17', text: 'Consequently, faith comes from hearing the message, and the message is heard through the word about Christ.' },
      { ref: 'James 2:17', text: 'In the same way, faith by itself, if it is not accompanied by action, is dead.' },
      { ref: 'Matthew 17:20', text: 'Truly I tell you, if you have faith as small as a mustard seed, you can say to this mountain, "Move from here to there," and it will move.' },
      { ref: 'Galatians 2:20', text: 'I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God.' },
    ],
  },
  {
    id: 'love',
    label: 'Love',
    tip: 'Reach out to one person today just to encourage them with no agenda.',
    spot: 'Clarkston Branch Library',
    verses: [
      { ref: '1 Corinthians 13:4-5', text: 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered.' },
      { ref: 'John 3:16', text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.' },
      { ref: 'Romans 8:38-39', text: 'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God.' },
      { ref: '1 John 4:19', text: 'We love because he first loved us.' },
      { ref: 'John 15:13', text: 'Greater love has no one than this: to lay down one\'s life for one\'s friends.' },
      { ref: 'Romans 5:8', text: 'But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.' },
    ],
  },
]

const TIPS = [
  { title: 'Anchor Your Morning', body: 'Before the noise of the day begins, give God the first 10 minutes. Even one verse read slowly is better than none.' },
  { title: 'Pray Out Loud', body: 'Praying aloud engages your focus in a way that silent prayer often cannot. Find a private space and speak to God like you are talking to someone in the room.' },
  { title: 'Memorize One Verse This Week', body: 'Pick a single verse and repeat it throughout the day. Scripture stored in your heart becomes available in your hardest moments.' },
  { title: 'Fast One Distraction', body: 'Choose one thing to abstain from today, social media, a show, a snack, and redirect that energy toward God.' },
  { title: 'Write Your Prayers', body: 'Journaling your prayers forces clarity. You will be surprised how specific God is when you look back weeks later.' },
]

const SPOTS = [
  { name: "Daniel's Prayer Garden", note: "Pastor Abraham's personal favorite. A quiet, tucked-away garden he returns to again and again for extended time with God. Come and see why.", address: '3430 Land Rd, Alpharetta, GA 30009', img: 'https://static.wixstatic.com/media/5211f4_88ae256387b54cf4822e336b587d2017~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_90/PeterHo_20211015_16_edited.jpg', pastorPick: true },
  { name: 'Miracle Center Assembly of God', note: 'Open for individual prayer. Our doors are open to anyone seeking a quiet space with God.', address: '4113 Church St, Clarkston, GA 30021', img: '/assets/mcaglive/groupimg.jpg' },
  { name: 'Clarkston Community Center Park', note: 'A quiet public green space ideal for walking prayer.', address: '3701 College Ave, Clarkston, GA 30021', img: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Milam_Park_Pool_at_Dusk.jpg' },
  { name: 'Stone Mountain Park Trails', note: 'Wide open space with forest trails. Ideal for extended prayer walks away from noise.', address: 'Stone Mountain, GA 30083', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Stone_mountain_walkup.jpg' },
  { name: 'Redan Park', note: 'A calm neighborhood park with open fields, trails, and a disc golf course. Good for quiet walks.', address: '1839 Phillips Rd, Lithonia, GA 30058', img: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Gresham_Park%2C_Gresham_Park%2C_Georgia_June_2017.jpg' },
  { name: 'Clarkston International Bible Church Garden', note: 'A peaceful garden space open to the community for prayer and reflection.', address: '1000 Rowland St, Clarkston, GA 30021', img: 'https://cibcfamily.com/wp-content/uploads/2025/10/IMG_2214-scaled.jpg' },
  { name: 'Clarkston Branch Library', note: 'The Clarkston branch has quiet rooms available for free. A peaceful place to read Scripture and pray.', address: '951 N Indian Creek Dr, Clarkston, GA 30021', img: 'https://dekalblibrary.org/images/branches/clar-ext-510x310_2021-09-29-154129_mmte.png' },
]

export default function Faithfulness() {
  const [activeTheme, setActiveTheme] = useState(THEMES[0])
  const activeTip = TIPS[THEMES.findIndex(t => t.id === activeTheme.id) % TIPS.length]
  const activeSpot = SPOTS.find(s => s.name === activeTheme.spot) || SPOTS[0]

  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      <Navbar />

      <main className="flex-1">

        {/* Hero */}
        <div className="relative h-[420px] overflow-hidden">
          <img
            src="/assets/stockimg/faitfulnessbg.jpg"
            alt="Faithfulness"
            className="w-full h-full object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/75 flex flex-col items-center justify-center text-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-body text-brand-gold text-sm font-bold uppercase tracking-widest mb-4"
            >
              Daily Resource · Clarkston, GA
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-bold text-4xl md:text-5xl text-surface mb-5 leading-tight"
            >
              Faithfulness
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-surface/80 text-lg leading-relaxed max-w-xl"
            >
              One place for Scripture, prayer spots near you, and practical fuel for your daily walk with God.
            </motion.p>
          </div>
        </div>

        {/* Image + intro strip */}
        <section className="py-16 px-6" style={{ background: 'linear-gradient(160deg, #eaf0fb 0%, #f5f0e8 100%)' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-body text-brand-teal text-sm font-bold uppercase tracking-widest mb-3">Your Daily Walk</p>
              <h2 className="font-heading text-2xl font-bold text-text-primary mb-4">Built for the Everyday Believer</h2>
              <p className="font-body text-text-secondary leading-relaxed mb-3">
                We understand it is hard to stay focused sometimes. Life is loud, the week is full, and the quiet moments slip by quickly. This page was built for exactly that struggle.
              </p>
              <p className="font-body text-text-secondary leading-relaxed">
                Pick a theme, read the verses, take the tip into your day, and find a place near you to pray. Small acts of faithfulness, done consistently, are what God builds with.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-64">
              <img
                src="/assets/stockimg/faithfulness.jpg"
                alt="Congregation in prayer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent" />
              <div className="absolute bottom-0 left-0 px-5 pb-5">
                <p className="font-heading italic text-surface text-sm leading-relaxed max-w-xs">
                  "Great is your faithfulness." (Lamentations 3:23)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to use — 3-step guide */}
        <section className="px-4 pt-2 pb-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-start gap-3 pl-4">
            {[
              { step: '1', label: 'Pick a theme below' },
              { step: '2', label: 'Read the verses' },
              { step: '3', label: 'Find a place to pray' },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-2.5 w-52">
                <span className="w-7 h-7 rounded-full bg-brand-teal text-white text-xs font-bold font-body flex items-center justify-center shrink-0">{item.step}</span>
                <span className="font-body text-sm text-text-secondary">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bento command center */}
        <section className="px-4 pb-24 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            {/* Scripture Engine — large left panel */}
            <Card className="lg:col-span-2 flex flex-col p-0 overflow-hidden">
              <div className="px-6 py-4 border-b border-border flex items-center gap-2 bg-ivory">
                <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="font-body text-sm font-bold uppercase tracking-widest text-text-secondary">Step 1 — Choose a Theme</span>
              </div>

              {/* Theme pills */}
              <div className="px-6 py-4 border-b border-border flex flex-wrap gap-2">
                {THEMES.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTheme(t)}
                    className="font-body text-xs px-4 py-1.5 rounded-full border transition-all duration-200 cursor-pointer hover:border-brand-teal hover:text-brand-teal"
                    style={{
                      background: activeTheme.id === t.id ? '#0e7c6e' : '#ffffff',
                      color: activeTheme.id === t.id ? '#ffffff' : '#1a1a1a',
                      borderColor: activeTheme.id === t.id ? '#0e7c6e' : '#c5c0b8',
                      fontWeight: activeTheme.id === t.id ? 600 : 500,
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Scrollable verse list for selected theme */}
              <div className="overflow-y-auto divide-y divide-border" style={{ maxHeight: 380 }}>
                {activeTheme.verses.map((v, i) => (
                  <div key={i} className="px-6 py-5">
                    <p className="font-body text-sm font-bold uppercase tracking-widest text-brand-teal mb-2">{v.ref}</p>
                    <p className="font-heading text-text-primary text-base leading-relaxed italic">"{v.text}"</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Daily Fuel — right panel */}
            <Card className="flex flex-col p-0 overflow-hidden">
              <div className="px-6 py-4 border-b border-border flex items-center gap-2 bg-ivory">
                <svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-body text-sm font-bold uppercase tracking-widest text-text-secondary">Step 2 — Try This Today</span>
              </div>

              {/* Contextual tip tied to selected verse */}
              <div className="px-6 py-5 border-b border-border bg-brand-teal/5">
                <p className="font-body text-xs text-brand-teal font-bold uppercase tracking-widest mb-2">Related to {activeTheme.label}</p>
                <h3 className="font-heading font-bold text-text-primary text-base mb-2">{activeTip.title}</h3>
                <p className="font-body text-text-secondary text-sm leading-relaxed">{activeTip.body}</p>
              </div>

              {/* Other tips */}
              <div className="flex-1 px-6 py-4 flex flex-col divide-y divide-border">
                {TIPS.filter(t => t.title !== activeTip.title).slice(0, 3).map(tip => (
                  <div key={tip.title} className="py-4 first:pt-0">
                    <p className="font-heading font-semibold text-text-primary text-sm mb-1">{tip.title}</p>
                    <p className="font-body text-text-secondary text-xs leading-relaxed">{tip.body}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Prayer Locator — full width bottom */}
            <Card className="lg:col-span-3 p-0 overflow-hidden">
              <div className="px-6 py-4 border-b border-border flex items-center gap-2 bg-ivory">
                <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-body text-sm font-bold uppercase tracking-widest text-text-secondary">Step 3 — Find a Place to Pray</span>
                <span className="ml-auto font-body text-xs text-text-secondary">Near Clarkston, GA</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Highlighted spot tied to selected verse */}
                <div className="border-b md:border-b-0 md:border-r border-border overflow-hidden flex flex-col">
                  <div className="relative h-36 overflow-hidden shrink-0">
                    <img src={activeSpot.img} alt={activeSpot.name} className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-3 left-3 font-body text-xs text-white font-bold uppercase tracking-widest bg-brand-teal/80 px-2.5 py-1 rounded-full">Suggested for {activeTheme.label}</span>
                  </div>
                  <div className="p-5 bg-brand-blue/5 flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <h3 className="font-heading font-bold text-text-primary text-base">{activeSpot.name}</h3>
                      {activeSpot.pastorPick && (
                        <span className="shrink-0 mt-0.5 inline-flex items-center gap-1 bg-brand-gold/15 text-brand-gold border border-brand-gold/30 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-body">
                          Pastor's Pick
                        </span>
                      )}
                    </div>
                    <p className="font-body text-text-secondary text-sm leading-relaxed mb-3">{activeSpot.note}</p>
                    <p className="font-body text-text-secondary text-xs">{activeSpot.address}</p>
                  </div>
                </div>

                {/* Other spots */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2">
                  {SPOTS.filter(s => s.name !== activeSpot.name).slice(0, 4).map((spot, i) => (
                    <div
                      key={spot.name}
                      className="flex flex-col border-b border-border last:border-b-0 overflow-hidden"
                      style={{ borderRight: i % 2 === 0 ? '1px solid #e5e0d8' : 'none' }}
                    >
                      <div className="relative h-24 overflow-hidden shrink-0">
                        <img src={spot.img} alt={spot.name} className="w-full h-full object-cover object-center" />
                        <div className="absolute inset-0 bg-black/30" />
                      </div>
                      <div className="p-4 flex-1">
                        <div className="flex items-start gap-1.5 mb-1">
                          <h4 className="font-heading font-semibold text-text-primary text-sm">{spot.name}</h4>
                          {spot.pastorPick && (
                            <span className="shrink-0 mt-0.5 inline-flex items-center bg-brand-gold/15 text-brand-gold border border-brand-gold/30 rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider font-body">
                              Pastor's Pick
                            </span>
                          )}
                        </div>
                        <p className="font-body text-text-secondary text-xs leading-relaxed mb-2">{spot.note}</p>
                        <p className="font-body text-text-secondary text-xs opacity-60">{spot.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
