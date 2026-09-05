import React, { useState, useMemo } from 'react'
import { ALL_STATES_DATA } from './data'
import { StateData, Region } from './types'
import { Header } from './components/Header'
import { IndiaMap } from './components/IndiaMap'
import { StateModal } from './components/StateModal'
import { StateGridDrawer } from './components/StateGridDrawer'
import { QuizModal } from './components/QuizModal'
import { triggerTricolorConfetti } from './utils/confetti'

export default function App() {
  const [selectedState, setSelectedState] = useState<StateData | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<Region>('All')
  const [searchQuery, setSearchQuery] = useState('625017')
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [isListOpen, setIsListOpen] = useState(false)
  const [active, setActive] = useState('V1')

  const filteredStates = useMemo(() => {
    return ALL_STATES_DATA.filter(s => {
      if (selectedRegion!== 'All' && s.region!== selectedRegion) return false
      if (searchQuery &&!/^\d+$/.test(searchQuery)) {
        const q = searchQuery.toLowerCase()
        if (!s.name.toLowerCase().includes(q) &&!s.capital.toLowerCase().includes(q)) return false
      }
      return true
    })
  }, [selectedRegion, searchQuery])

  const V: any = {
    V1: { t: "பட்டா கடன்", e: "Patta Loan", c: "#2563eb", bg: "#dbeafe", d: `Pincode ${searchQuery} VAO Office → Patta Verify → Bank Loan Instant`, g: "VAO + Razorpay" },
    V2: { t: "குப்பை பிரித்தல்", e: "Waste Segregation", c: "#16a34a", bg: "#dcfce7", d: `Waste in ${searchQuery} → AI Scan → Plastic/Wet/Dry → ₹2/kg Reward`, g: "NASA GPM + Gemini" },
    V3: { t: "மண் பரிசோதனை", e: "Soil Testing", c: "#d97706", bg: "#fef3c7", d: `Soil ${searchQuery} + IMD Rain → pH 6.5 NPK Good → Nellu Crop`, g: "IMD + Gemini AI" },
    V4: { t: "வெள்ள நீர் அகற்றம்", e: "Flood Removal", c: "#4f46e5", bg: "#e0e7ff", d: `Flood 2ft in ${searchQuery} → Pump Booking → Community Help + BEFORE ₹10`, g: "Maps + Razorpay" },
    V5: { t: "முன் எச்சரிக்கை", e: "BEFORE Flood", c: "#059669", bg: "#ecfdf5", d: `NASA GPM predicts ${searchQuery} heavy rain in 6hrs → BEFORE pay → Alert`, g: "NASA + Razorpay BEFORE" },
    V6: { t: "காலநிலை சங்கிலி", e: "Climate Chain", c: "#ea580c", bg: "#fff7ed", d: "Sun 28-30°C → Vapour → Monsoon → Western Ghats 150M yr → Himalaya Melt → 15m wall @167km/h → Bhotekoshi 27.9N 85.9E → Varum Mun Kappom", g: "ICIMOD + IMD + Gemini" },
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white text-center py-1.5 text-[11px] font-bold">
        ✨ OFFICIAL RELEASE BY MAHIMA ARUL DHARSHINI J | VALAVANUR ✨
      </div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} setIsQuizOpen={setIsQuizOpen} setIsListOpen={setIsListOpen} />

      <div className="bg-white p-3 sticky top-[64px] z-20 shadow-sm">
        <h2 className="text-[13px] font-black mb-2">🌍 Geo Bharat V1-V6 One Page | Live: {searchQuery}</h2>
        <div className="flex gap-2 overflow-x-auto">
          {Object.keys(V).map(k => (
            <button key={k} onClick={() => setActive(k)} style={{ background: active === k? V[k].c : '#f1f5f9', color: active === k? 'white' : '#334155' }} className="px-3 py-2 rounded-full text-[11px] font-bold border-0 whitespace-nowrap">
              {k}: {V[k].t}
            </button>
          ))}
        </div>
        <div style={{ background: V[active].bg, borderLeft: `5px solid ${V[active].c}` }} className="mt-3 p-3 rounded-xl">
          <b style={{ color: V[active].c }} className="text-[13px]">{active}: {V[active].t} - {V[active].e}</b>
          <p className="text-[12px] mt-1 leading-6">{V[active].d}</p>
          <span className="text-[10px] bg-white px-2 py-1 rounded-full mt-2 inline-block border">🔗 {V[active].g} | {searchQuery}</span>
          {active === 'V6' && (
            <div className="mt-2 bg-slate-900 text-white p-2.5 rounded-lg text-[11px] leading-5">
              Fix: <b className="text-yellow-300">ICIMOD + IMD + Gemini + Razorpay BEFORE + Google Maps = வரும் முன் காப்போம்</b><br />
              Origin: Bhotekoshi GLOF 27.9N 85.9E - Xixiabangma - Nepal
            </div>
          )}
        </div>
      </div>

      <div className="p-3">
        <div className="bg-white rounded-xl overflow-hidden shadow">
          <div className="bg-slate-900 text-white p-2 text-[11px] flex justify-between items-center">
            <span>🗺️ LIVE MAP - Pincode {searchQuery} | Bhotekoshi 27.9N 85.9E | NO CHINA MAP</span>
            <button onClick={() => triggerTricolorConfetti()} className="bg-orange-500 px-3 py-1 rounded-full text-[10px]">🎉</button>
          </div>
          <iframe title="map" src={`https://www.google.com/maps?q=${searchQuery}&z=11&output=embed`} className="w-full h-[360px] border-0" />
          <div className="p-2 flex gap-2 flex-wrap text-[10px]">
            <span className="bg-red-100 px-2 py-1 rounded-full">📍 {searchQuery} Live</span>
            <span className="bg-green-100 px-2 py-1 rounded-full">🛰️ NASA GPM</span>
            <span className="bg-blue-100 px-2 py-1 rounded-full">💸 Razorpay BEFORE</span>
            <span className="bg-orange-100 px-2 py-1 rounded-full">🏔️ ICIMOD</span>
          </div>
        </div>
      </div>

      <IndiaMap selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} onStateClick={setSelectedState} filteredStates={filteredStates} />
      <StateGridDrawer isOpen={isListOpen} onClose={() => setIsListOpen(false)} states={filteredStates} onStateClick={setSelectedState} />
      {selectedState && <StateModal state={selectedState} onClose={() => setSelectedState(null)} />}
      {isQuizOpen && <QuizModal onClose={() => setIsQuizOpen(false)} />}

      <div className="text-center p-5 bg-slate-900 text-white mt-4">
        <p className="text-[11px] text-yellow-300 font-bold">BUILT WITH ❤️ BY</p>
        <p className="text-[18px] font-black">Mahima Arul Dharshini J</p>
        <p className="text-[11px] opacity-80">mahima-2423 | Valavanur, Tamil Nadu | v6.0</p>
        <p className="text-[11px] mt-2">bharat-chi.vercel.app | github.com/mahima-2/geo-bharat</p>
        <p className="text-[10px] mt-3 opacity-60 leading-5">© 2026 Mahima Arul Dharshini J | Varum Mun Kappom<br />ICIMOD + IMD + Gemini + Razorpay BEFORE + Google Maps<br />Educational Concept - No Newspaper Affiliation</p>
      </div>
    </div>
  )
}
      <div className="p-3">
        <div className="bg-white rounded-xl overflow-hidden shadow">
          <div className="bg-slate-900 text-white p-2 text-[11px] flex justify-between items-center">
            <span>🗺️ LIVE MAP - Pincode {searchQuery} | Bhotekoshi 27.9N 85.9E | NO CHINA MAP</span>
            <button onClick={() => triggerTricolorConfetti()} className="bg-orange-500 px-3 py-1 rounded-full text-[10px]">🎉</button>
          </div>
          <iframe title="map" src={`https://www.google.com/maps?q=${searchQuery}&z=11&output=embed`} className="w-full h-[360px] border-0" />
          <div className="p-2 flex gap-2 flex-wrap text-[10px]">
            <span className="bg-red-100 px-2 py-1 rounded-full">📍 {searchQuery} Live</span>
            <span className="bg-green-100 px-2 py-1 rounded-full">🛰️ NASA GPM</span>
            <span className="bg-blue-100 px-2 py-1 rounded-full">💸 Razorpay BEFORE</span>
            <span className="bg-orange-100 px-2 py-1 rounded-full">🏔️ ICIMOD</span>
          </div>
        </div>
      </div>

      <IndiaMap selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} onStateClick={setSelectedState} filteredStates={filteredStates} />
      <StateGridDrawer isOpen={isListOpen} onClose={() => setIsListOpen(false)} states={filteredStates} onStateClick={setSelectedState} />
      {selectedState && <StateModal state={selectedState} onClose={() => setSelectedState(null)} />}
      {isQuizOpen && <QuizModal onClose={() => setIsQuizOpen(false)} />}

      <div className="text-center p-5 bg-slate-900 text-white mt-4">
        <p className="text-[11px] text-yellow-300 font-bold">BUILT WITH ❤️ BY</p>
        <p className="text-[18px] font-black">Mahima Arul Dharshini J</p>
        <p className="text-[11px] opacity-80">mahima-2423 | Valavanur, Tamil Nadu | v6.0</p>
        <p className="text-[11px] mt-2">bharat-chi.vercel.app | github.com/mahima-2/geo-bharat</p>
        <p className="text-[10px] mt-3 opacity-60 leading-5">© 2026 Mahima Arul Dharshini J | Varum Mun Kappom<br />ICIMOD + IMD + Gemini + Razorpay BEFORE + Google Maps<br />Educational Concept - No Newspaper Affiliation</p>
      </div>
    </div>
  )
}
