import { FACEBOOK_URL } from '../config'

export function FacebookCTAStrip() {
  return (
    <div className="py-6 px-6 border-t border-border bg-surface">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <p className="font-body text-sm text-text-secondary">
          Stay connected with our community on Facebook.
        </p>
        <a
          href={FACEBOOK_URL !== 'TBD' ? FACEBOOK_URL : '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body font-semibold text-xs px-4 py-2 rounded-full border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-surface transition-colors shrink-0"
        >
          Follow Us on Facebook →
        </a>
      </div>
    </div>
  )
}
