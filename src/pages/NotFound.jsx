import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="font-heading font-bold text-6xl text-text-primary mb-4">404</h1>
        <p className="font-body text-text-secondary text-lg mb-8">
          This page could not be found.
        </p>
        <Link
          to="/"
          className="font-body text-sm font-medium bg-text-primary text-surface px-6 py-3 rounded hover:opacity-80 transition-opacity"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  )
}
