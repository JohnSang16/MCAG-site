import { FACEBOOK_URL } from '../config'

export function FacebookCTAStrip() {
  return (
    <section className="bg-brand-blue py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-heading text-xl text-surface mb-6">
          Stay connected with our church community on Facebook.
        </p>
        <a
          href={FACEBOOK_URL !== 'TBD' ? FACEBOOK_URL : '#'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="font-body font-medium text-sm px-6 py-3 rounded bg-surface text-brand-blue hover:opacity-90 transition-opacity">
            Follow Us
          </button>
        </a>
      </div>
    </section>
  )
}
