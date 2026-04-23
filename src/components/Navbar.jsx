import { useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FACEBOOK_URL } from '../config'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/about/history', label: 'History' },
  { to: '/about/jesus', label: 'Jesus' },
  { to: '/about/beliefs', label: 'Beliefs' },
  { to: '/faithfulness', label: 'Faithfulness' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/donate', label: 'Donate' },
]

function SlidingNav() {
  const navigate = useNavigate()
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 })

  return (
    <ul
      className="relative flex w-fit rounded-full border border-border bg-ivory p-1"
      onMouseLeave={() => setPosition(pv => ({ ...pv, opacity: 0 }))}
    >
      {navLinks.map((item) => (
        <NavItem key={item.to} to={item.to} setPosition={setPosition} navigate={navigate}>
          {item.label}
        </NavItem>
      ))}
      <motion.li
        animate={position}
        className="absolute top-1 bottom-1 z-0 rounded-full bg-text-primary pointer-events-none"
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
      />
    </ul>
  )
}

function NavItem({ to, children, setPosition, navigate }) {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return
        setPosition({ width: ref.current.offsetWidth, opacity: 1, left: ref.current.offsetLeft })
      }}
      onClick={() => navigate(to)}
      className="relative z-10 block cursor-pointer px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white mix-blend-difference select-none"
    >
      <NavLink to={to} className={() => ''} tabIndex={-1}>
        {children}
      </NavLink>
    </li>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-surface border-b border-border sticky top-0 z-50">
      <div className="w-full px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/assets/logos/mcag_logo-removebg-preview.png"
            alt="Miracle Center AG"
            className="h-12 w-auto"
            onError={e => { e.target.style.display = 'none' }}
          />
          <span className="font-heading font-semibold text-text-primary text-sm leading-tight hidden lg:block">
            Miracle Center Assembly of God
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
          <SlidingNav />

          <a
            href={FACEBOOK_URL !== 'TBD' ? FACEBOOK_URL : '#'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-text-secondary hover:text-brand-blue transition-colors"
          >
            <FacebookIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-surface px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)}
              className={({ isActive }) => `font-body text-sm font-medium py-2 ${isActive ? 'text-brand-blue' : 'text-text-secondary'}`}>
              {label}
            </NavLink>
          ))}

          <a
            href={FACEBOOK_URL !== 'TBD' ? FACEBOOK_URL : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-medium text-text-secondary flex items-center gap-2 py-2"
          >
            <FacebookIcon className="w-4 h-4" />
            Facebook
          </a>
        </div>
      )}
    </nav>
  )
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  )
}

function MenuIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function XIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
