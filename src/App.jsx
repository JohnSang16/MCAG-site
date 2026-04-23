import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import Home from './pages/Home'
import About from './pages/About'
import AboutHistory from './pages/AboutHistory'
import AboutBeliefs from './pages/AboutBeliefs'
import AboutJesus from './pages/AboutJesus'
import Leaderboard from './pages/Leaderboard'
import Donate from './pages/Donate'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/history" element={<AboutHistory />} />
        <Route path="/about/beliefs" element={<AboutBeliefs />} />
        <Route path="/about/jesus" element={<AboutJesus />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
