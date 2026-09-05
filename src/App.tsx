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

  const V = {
    V1: { tamil: "பட்டா கடன்", eng: "Patta Loan", color: "#2563eb", bg: "#dbeafe", desc: `Land Record Upload in ${searchQuery} VAO Office → AI Verify → Bank Loan Instant Approval`, tag: "VAO API + Razorpay" },
    V2: { tamil: "குப்பை பிரித்தல்", eng: "Waste Segregation", color: "#16a34a", bg: "#dcfce7", desc: `AI Camera scans waste in ${searchQuery} → Plastic / Wet / Dry → Reward ₹2/kg → Clean City`, tag: "NASA GPM + Gemini Vision" },
    V3: { tamil: "மண் பரிசோதனை", eng: "Soil Testing", color: "#d97706", bg: "#fef3c7", desc: `Soil Photo + IMD Rain Data ${searchQuery} → pH 6.5, NPK Good → Crop: Nellu, Karumbu Suggest`, tag: "IMD + Gemini AI" },
    V4: { tamil: "வெள்ள நீர் அகற்றம்", eng: "Flood Water Removal", color: "#4f46e5", bg: "#e0e7ff", desc: `Flood Water 2ft in ${searchQuery} → Pump Booking → Community Help → Razorpay BEFORE ₹10`, tag: "Google Maps + Razorpay" },
    V5: { tamil: "முன் எச்சரிக்கை", eng: "BEFORE Flood Alert", color: "#059669", bg: "#ecfdf5", desc: `NASA GPM predicts Heavy Rain in ${searchQuery} in 6hrs → Razorpay BEFORE pays BEFORE flood → Alert Sent`, tag: "NASA + Razorpay BEFORE" },
    V6: { tamil: "காலநிலை சங்கிலி", eng: "Climate Chain", color: "#ea580c", bg: "#fff7ed", desc: "Sun 28-30°C Ocean → Vapour → Monsoon → Western Ghats 150M yr (West 3000mm/East drought) → Himalaya Melt → Lake Break → 15m wall @167km/h → Bhotekoshi GLOF 27.9N 85.9E → Bihar 1114 deaths → Fix: ICIMOD + IMD + Gemini + Maps = வரும் முன் காப்போம்", tag: "ICIMOD + IMD + Gemini + Maps" },
  } as const

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white text-center py-1.5 text-[11px] font-bold tracking-wide">
        ✨ OFFICIAL RELEASE BY MAHIMA ARUL DHARSHINI J | VALAVANUR, TN ✨
      </div>

      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} setIsQuizOpen={setIsQuizOpen} setIsListOpen={setIsListOpen} />

      {/* V1-V6 ONE PAGE */}
      <div className="bg-white p-3 sticky top-[64px] z-20 shadow-sm">
        <h2 className="text-[13px] font-black mb-2">🌍 Geo Bharat - V1 to V6 One Page | Pincode Live = {searchQuery}</h2>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {Object.keys(V).map(k => (
            <button key={k} onClick={() => setActive(k)} style={{ background: active === k? (V as any)[k].color : '#f1f5f9', color: active === k? 'white' : '#334155' }} className="whitespace-nowrap px-3 py-2 rounded-full text-[11px] font-bold border-0">
              {k}: {(V as any)[k].tamil}
            </button>
          ))}
        </div>
        <div style={{ background: (V as any)[active].bg, borderLeft: `5px solid ${(V as any)[active].color}` }} className="mt-3 p-3 rounded-xl">
          <b style={{ color: (V as any)[active].color }} className="text-[13px]">{active}: {(V as any)[active].tamil} - {(V as any)[active].eng}</b>
          <p className="text-[12px] mt-1 leading-6">{(V as any)[active].desc}</p>
          <span className="text-[10px] bg-white px-2 py-1 rounded-full mt-2 inline-block border">🔗 {(V as any)[active].tag} | Pincode: {searchQuery}</span>
          {active === 'V6' && (
            <div className="mt-2 bg-slate-900 text-white p-2.5 rounded-lg text-[11px] leading-5">
              Fix: <b className="text-yellow-300">ICIMOD + IMD + Gemini + Razorpay BEFORE + Google Maps = வரும் முன் காப்போம்</b>
              <br/>Bhotekoshi GLOF Origin: 27.9N 85.9E - Xixiabangma Peak - Nepal
            </div>
          )}
        </div>
      </div>

      {/* LIVE GOOGLE MAP - PINCODE CONNECTED - NO CHINA MAP */}
      <div className="p-3">
        <div className="bg-white rounded-xl overflow-hidden shadow">
          <div className="bg-slate-900 text-white p-2 text-[11px] flex justify-between items-center">
            <span>🗺️ LIVE MAP - Pincode {searchQuery} |
