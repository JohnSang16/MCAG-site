import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="font-body bg-ivory min-h-screen p-8 text-text-primary">Miracle Center AG — scaffold ready</div>} />
      </Routes>
    </BrowserRouter>
  )
}
