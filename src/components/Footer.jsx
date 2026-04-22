import { Link } from 'react-router-dom'
import { FACEBOOK_URL, CONTACT_EMAIL } from '../config'

export function Footer() {
  return (
    <footer className="bg-text-primary text-surface mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading font-semibold text-base mb-3">Service Times</h3>
          <p className="font-body text-sm text-gray-300 leading-relaxed">
            Saturday: 7:30 – 9:00 pm (Youth)<br />
            Sunday: 4:00 – 6:30 pm
          </p>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-base mb-3">Location</h3>
          <p className="font-body text-sm text-gray-300 leading-relaxed">
            Clarkston, GA
          </p>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-base mb-3">Connect</h3>
          <div className="flex flex-col gap-2">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-body text-sm text-gray-300 hover:text-surface transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={FACEBOOK_URL !== 'TBD' ? FACEBOOK_URL : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-gray-300 hover:text-surface transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-body text-xs text-gray-400">
            © {new Date().getFullYear()} Miracle Center Assembly of God. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/" className="font-body text-xs text-gray-400 hover:text-surface transition-colors">Home</Link>
            <Link to="/about" className="font-body text-xs text-gray-400 hover:text-surface transition-colors">About</Link>
            <Link to="/donate" className="font-body text-xs text-gray-400 hover:text-surface transition-colors">Donate</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
