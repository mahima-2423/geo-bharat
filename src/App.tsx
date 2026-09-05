import React, { useState, useMemo } from 'react'
import { ALL_STATES_DATA } from './data'
import { StateData, Region } from './types'
import { Header } from './components/Header'
import { IndiaMap } from './components/IndiaMap'
import { StateModal } from './components/StateModal'
import { StateGridDrawer } from './components/StateGridDrawer'
import { QuizModal } from './components/QuizModal'

export default function App() {
  const [selectedState, setSelectedState] = useState<StateData | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<Region>('All')
  const [searchQuery, setSearchQuery] = useState('625017')
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [isListOpen, setIsListOpen] = useState(false)
  const [active, setActive] = useState('V1')

  const filteredStates = useMemo(() => {
    return ALL_STATES_DATA.filter((s) => {
      if (selectedRegion!== 'All' && s.region!== selectedRegion) return false
      if (searchQuery && isNaN(Number(searchQuery))) {
        const q = searchQuery.toLowerCase()
        return s.name.toLowerCase().includes(q) || s.capital.toLowerCase().includes(q)
      }
      return true
    })
  }, [selectedRegion, searchQuery])

  const versions: any = {
    V1: { t: 'பட்டா கடன்', c: '#2563eb', bg: '#dbeafe', d: 'VAO Verify + Bank Loan - Pincode ' + searchQuery },
    V2: { t: 'குப்பை பிரித்தல்', c: '#16a34a', bg: '#dcfce7', d: 'AI Waste Scan + Rs2/kg - ' + searchQuery },
    V3: { t: 'மண் பரிசோதனை', c: '#d97706', bg: '#fef3c7', d: 'Soil pH 6.5 + IMD Rain - ' + searchQuery },
    V4: { t: 'வெள்ள நீர்', c: '#4f46e5', bg: '#e0e7ff', d: 'Flood Pump Booking + BEFORE Rs10' },
    V5: { t: 'முன் எச்சரிக்கை', c: '#059669', bg: '#ecfdf5', d: 'NASA GPM + Razorpay BEFORE - Varum Mun Kappom' },
    V6: { t: 'காலநிலை சங்கிலி', c: '#ea580c', bg: '#fff7ed', d: 'Sun to Flood: 150M yr Ghats + Bhotekoshi 27.9N 85.9E + 15m wall @167km/h' },
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white text-center py-1.5 text-[11px] font-bold">
        OFFICIAL RELEASE BY MAHIMA ARUL DHARSHINI J | VALAVANUR
      </div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} setIsQuizOpen={setIsQuizOpen} setIsListOpen={setIsListOpen} />
      <div className="bg-white p-3 sticky top-[64px] z-20 shadow-sm">
        <h2 className="text-[13px] font-black mb-2">Geo Bharat V1-V6 One Page | Live: {searchQuery}</h2>
        <div className="flex gap-2 overflow-x-auto">
          {Object.keys(versions).map((k) => (
            <button key={k} onClick={() => setActive(k)} style={{ background: active === k? versions[k].c : '#f1f5f9', color: active === k? 'white' : '#334155' }} className="px-3 py-2 rounded-full text-[11px] font-bold border-0 whitespace-nowrap">
              {k}: {versions[k].t}
            </button>
          ))}
        </div>
        <div style={{ background: versions[active].bg, borderLeft: '5px solid ' + versions[active].c }} className="mt-3 p-3 rounded-xl">
          <b style={{ color: versions[active].c }} className="text-[13px]">{active}: {versions[active].t}</b>
          <p className="text-[12px] mt-1">{versions[active].d}</p>
          {active === 'V6' && <div className="mt-2 bg-slate-900 text-white p-2 rounded-lg text-[11px]">Fix: ICIMOD + IMD + Gemini + Razorpay BEFORE + Google Maps = Varum Mun Kappom | Bhotekoshi 27.9N 85.9E</div>}
        </div>
      </div>
      <div className="p-3">
        <div className="bg-white rounded-xl overflow-hidden shadow">
          <div className="bg-slate-900 text-white p-2 text-[11px]">LIVE MAP {searchQuery} | 27.9N 85.9E | NO CHINA</div>
          <iframe title="map" src={'https://www.google.com/maps?q=' + searchQuery + '&z=11&output=embed'} className="w-full h-[360px] border-0" />
        </div>
      </div>
      <IndiaMap selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} onStateClick={setSelectedState} filteredStates={filteredStates} />
      <StateGridDrawer isOpen={isListOpen} onClose={() => setIsListOpen(false)} states={filteredStates} onStateClick={setSelectedState} />
      {selectedState && <StateModal state={selectedState} onClose={() => setSelectedState(null)} />}
      {isQuizOpen && <QuizModal onClose={() => setIsQuizOpen(false)} />}
      <div className="text-center p-5 bg-slate-900 text-white mt-4">
        <p className="text-[11px] text-yellow-300 font-bold">BUILT WITH LOVE BY</p>
        <p className="text-[18px] font-black">Mahima Arul Dharshini J</p>
        <p className="text-[11px] opacity-80">mahima-2423 | Valavanur | v6.0 | bharat-chi.vercel.app</p>
        <p className="text-[10px] mt-3 opacity-60">2026 Mahima Arul Dharshini J | Varum Mun Kappom | ICIMOD + IMD + Gemini | No Newspaper Affiliation</p>
      </div>
    </div>
  )
}
