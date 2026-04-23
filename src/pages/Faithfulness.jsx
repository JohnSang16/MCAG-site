import { useState } from 'react'
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
    spot: 'Your Local Library',
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
  { name: 'Miracle Center Assembly of God', note: 'Open for individual prayer. Our doors are open to anyone seeking a quiet space with God.', address: '4113 Church St, Clarkston, GA 30021' },
  { name: 'Clarkston Community Center Park', note: 'A quiet public green space ideal for walking prayer.', address: 'Clarkston, GA 30021' },
  { name: 'Stone Mountain Park Trails', note: 'Wide open space with forest trails. Ideal for extended prayer walks away from noise.', address: 'Stone Mountain, GA 30083' },
  { name: 'Redan Park', note: 'A calm neighborhood park suitable for quiet reflection.', address: 'Stone Mountain, GA 30088' },
  { name: 'Clarkston International Bible Church Garden', note: 'A peaceful garden space open to the community for prayer and reflection.', address: 'Clarkston, GA 30021' },
  { name: 'Your Local Library', note: 'Most Clarkston and DeKalb branch libraries have quiet study rooms available for free.', address: 'DeKalb County, GA' },
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
        <section className="py-20 px-6 text-center max-w-3xl mx-auto">
          <p className="font-body text-brand-teal text-xs font-bold uppercase tracking-widest mb-4">
            Daily Resource · Clarkston, GA
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-text-primary mb-5 leading-tight">
            Faithfulness
          </h1>
          <p className="font-body text-text-secondary text-lg leading-relaxed">
            We understand it is hard to stay focused sometimes, so we built this for you. One place for Scripture, prayer spots near you, and practical fuel for your daily walk with God.
          </p>
          <p className="font-body text-text-secondary text-sm mt-3">
            Your single source of truth for the Christian life.
          </p>
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
                <span className="font-body text-xs font-bold uppercase tracking-widest text-text-secondary">Scripture Engine</span>
              </div>

              {/* Theme pills */}
              <div className="px-6 py-4 border-b border-border flex flex-wrap gap-2">
                {THEMES.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTheme(t)}
                    className="font-body text-xs px-4 py-1.5 rounded-full border transition-all duration-200"
                    style={{
                      background: activeTheme.id === t.id ? '#0e7c6e' : 'transparent',
                      color: activeTheme.id === t.id ? '#ffffff' : '#6b6b6b',
                      borderColor: activeTheme.id === t.id ? '#0e7c6e' : '#e5e0d8',
                      fontWeight: activeTheme.id === t.id ? 600 : 400,
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
                    <p className="font-body text-xs font-bold uppercase tracking-widest text-brand-teal mb-2">{v.ref}</p>
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
                <span className="font-body text-xs font-bold uppercase tracking-widest text-text-secondary">Daily Fuel</span>
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
                <span className="font-body text-xs font-bold uppercase tracking-widest text-text-secondary">Prayer Locator</span>
                <span className="ml-auto font-body text-xs text-text-secondary">Near Clarkston, GA</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Highlighted spot tied to selected verse */}
                <div className="p-6 border-b md:border-b-0 md:border-r border-border bg-brand-blue/5">
                  <p className="font-body text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">Suggested for {activeTheme.label}</p>
                  <h3 className="font-heading font-bold text-text-primary text-base mb-2">{activeSpot.name}</h3>
                  <p className="font-body text-text-secondary text-sm leading-relaxed mb-3">{activeSpot.note}</p>
                  <p className="font-body text-text-secondary text-xs">{activeSpot.address}</p>
                </div>

                {/* Other spots */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2">
                  {SPOTS.filter(s => s.name !== activeSpot.name).slice(0, 4).map((spot, i, arr) => (
                    <div
                      key={spot.name}
                      className="p-5 border-b border-border last:border-b-0"
                      style={{ borderRight: i % 2 === 0 ? '1px solid #e5e0d8' : 'none' }}
                    >
                      <h4 className="font-heading font-semibold text-text-primary text-sm mb-1">{spot.name}</h4>
                      <p className="font-body text-text-secondary text-xs leading-relaxed mb-2">{spot.note}</p>
                      <p className="font-body text-text-secondary text-xs opacity-60">{spot.address}</p>
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
