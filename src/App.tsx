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
        if (!s.name.toLowerCase().includes(searchQuery.toLowerCase()) &&!s.capital.toLowerCase().includes(searchQuery.toLowerCase())) return false
      }
      return true
    })
  }, [selectedRegion, searchQuery])

  const V:any = {
    V1:{tamil:"பட்டா கடன்",eng:"Patta Loan",color:"#2563eb",bg:"#dbeafe",desc:`Pincode ${searchQuery} VAO → Patta Verify → Loan Instant`,tag:"VAO + Razorpay"},
    V2:{tamil:"குப்பை பிரித்தல்",eng:"Waste Segregation",color:"#16a34a",bg:"#dcfce7",desc:`Waste in ${searchQuery} → AI Segregate → ₹2/kg Reward`,tag:"NASA GPM + Gemini"},
    V3:{tamil:"மண் பரிசோதனை",eng:"Soil Testing",color:"#d97706",bg:"#fef3c7",desc:`Soil ${searchQuery} + IMD → pH 6.5 → Nellu`,tag:"IMD + Gemini"},
    V4:{tamil:"வெள்ள நீர் அகற்றம்",eng:"Flood Removal",color:"#4f46e5",bg:"#e0e7ff",desc:`Flood 2ft in ${searchQuery} → Pump → BEFORE ₹10`,tag:"Maps + Razorpay"},
    V5:{tamil:"முன் எச்சரிக்கை",eng:"BEFORE Flood",color:"#059669",bg:"#ecfdf5",desc:`NASA GPM: ${searchQuery} heavy in 6hrs → BEFORE pay`,tag:"NASA + Razorpay BEFORE"},
    V6:{tamil:"காலநிலை சங்கிலி",eng:"Climate Chain",color:"#ea580c",bg:"#fff7ed",desc:"Sun 28-30°C → Monsoon → Ghats 150M yr → Himalaya → 15m@167km/h → Bhotekoshi 27.9N 85.9E → Varum Mun Kappom",tag:"ICIMOD+IMD+Gemini+Maps"},
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white text-center py-1.5 text-[11px] font-bold">✨ OFFICIAL RELEASE BY MAHIMA ARUL DHARSHINI J ✨</div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} setIsQuizOpen={setIsQuizOpen} setIsListOpen={setIsListOpen} />
      <div className="bg-white p-3 sticky top-[64px] z-20 shadow-sm">
        <h2 className="text-[13px] font-black mb-2">🌍 Geo Bharat V1-V6 One Page | {searchQuery}</h2>
        <div className="flex gap-2 overflow-x-auto">{Object.keys(V).map(k=><button key={k} onClick={()=>setActive(k)} style={{background:active===k?V[k].color:'#f1f5f9',color:active===k?'white':'#334155'}} className="px-3 py-2 rounded-full text-[11px] font-bold border-0 whitespace-nowrap">{k}: {V[k].tamil}</button>)}</div>
        <div style={{background:V[active].bg,borderLeft:`5px solid ${V[active].color}`}} className="mt-3 p-3 rounded-xl">
          <b style={{color:V[active].color}} className="text-[13px]">{active}: {V[active].tamil} - {V[active].eng}</b>
          <p className="text-[12px] mt-1 leading-6">{V[active].desc}</p>
          <span className="text-[10px] bg-white px-2 py-1 rounded-full mt-2 inline-block border">🔗 {V[active].tag} | {searchQuery}</span>
        </div>
      </div>
      <div className="p-3">
        <div className="bg-white rounded-xl overflow-hidden shadow">
          <div className="bg-slate-900 text-white p-2 text-[11px] flex justify-between"><span>🗺️ LIVE MAP {searchQuery} | Bhotekoshi 27.9N 85.9E | NO CHINA</span><button onClick={()=>triggerTricolorConfetti()} className="bg-orange-500 px-3 py-1 rounded-full text-[10px]">🎉</button></div>
          <iframe title="map" src={`https://www.google.com/maps?q=${searchQuery}&z=11&output=embed`} className="w-full h-[360px] border-0" />
        </div>
      </div>
      <IndiaMap selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} onStateClick={setSelectedState} filteredStates={filteredStates} />
      <StateGridDrawer isOpen={isListOpen} onClose={()=>setIsListOpen(false)} states={filteredStates} onStateClick={setSelectedState} />
      {selectedState && <StateModal state={selectedState} onClose={()=>setSelectedState(null)} />}
      {isQuizOpen && <QuizModal onClose={()=>setIsQuizOpen(false)} />}
      <div className="text-center p-5 bg-slate-900 text-white mt-4">
        <p className="text-[11px] text-yellow-300 font-bold">BUILT WITH ❤️ BY</p>
        <p className="text-[18px] font-black">Mahima Arul Dharshini J</p>
        <p className="text-[11px] opacity-80">mahima-2423 | Valavanur | v6.0 | bharat-chi.vercel.app</p>
        <p className="text-[10px] mt-3 opacity-60">© 2026 Mahima Arul Dharshini J | Varum Mun Kappom | No Newspaper Affiliation</p>
      </div>
    </div>
  )
}
