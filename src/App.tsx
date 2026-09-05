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
  const [searchQuery, setSearchQuery] = useState('')
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [isListOpen, setIsListOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('V1')

  const filteredStates = useMemo(() => {
    return ALL_STATES_DATA.filter(s => {
      const matchRegion = selectedRegion === 'All' || s.region === selectedRegion
      const q = searchQuery.toLowerCase()
      const matchSearch =!searchQuery || s.name.toLowerCase().includes(q) || s.capital.toLowerCase().includes(q)
      return matchRegion && matchSearch
    })
  }, [selectedRegion, searchQuery])

  const V: any = {
    V1: { t: 'Patta Loan', c: '#2563eb', d: 'VAO + Razorpay - Pincode ' + (searchQuery || '625017') },
    V2: { t: 'Waste', c: '#16a34a', d: 'NASA GPM + Gemini AI' },
    V3: { t: 'Soil', c: '#d97706', d: 'IMD + Gemini AI - Nellu' },
    V4: { t: 'Flood Removal', c: '#4f46e5', d: 'Maps + Razorpay BEFORE Rs10' },
    V5: { t: 'BEFORE Alert', c: '#059669', d: 'NASA GPM predicts flood 6hrs before' },
    V6: { t: 'Climate Chain', c: '#ea580c', d: 'Sun 28-30C to Bhotekoshi 27.9N 85.9E - 15m wall 167km/h - Varum Mun Kappom' },
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-orange-500 text-white text-center py-1 text-[10px] font-bold">OFFICIAL BY MAHIMA ARUL DHARSHINI J - VALAVANUR</div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} setIsQuizOpen={setIsQuizOpen} setIsListOpen={setIsListOpen} />

      <div className="bg-white p-3">
        <div className="flex gap-2 overflow-x-auto mb-3">
          {Object.keys(V).map(k => (
            <button key={k} onClick={() => setActiveTab(k)} style={{ background: activeTab === k? V[k].c : '#f1f5f9', color: activeTab === k? 'white' : '#333' }} className="px-3 py-2 rounded-full text-xs font-bold">
              {k}
            </button>
          ))}
        </div>
        <div className="p-3 rounded-xl bg-slate-100 border-l-4" style={{ borderColor: V[activeTab].c }}>
          <b>{activeTab}: {V[activeTab].t}</b><p className="text-xs mt-1">{V[activeTab].d}</p>
          <p className="text-[10px] mt-2">ICIMOD + IMD + Gemini + Razorpay + Maps = Varum Mun Kappom | Bhotekoshi 27.9N 85.9E | NO CHINA</p>
        </div>
      </div>

      <IndiaMap selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} onStateClick={setSelectedState} filteredStates={filteredStates} />
      <StateGridDrawer isOpen={isListOpen} onClose={() => setIsListOpen(false)} states={filteredStates} onStateClick={setSelectedState} />
      {selectedState && <StateModal state={selectedState} onClose={() => setSelectedState(null)} />}
      {isQuizOpen && <QuizModal onClose={() => setIsQuizOpen(false)} />}

      <div className="text-center p-4 bg-slate-900 text-white">
        <p className="text-xs text-yellow-300">BUILT BY</p>
        <p className="font-black">Mahima Arul Dharshini J</p>
        <p className="text-[10px] opacity-70">mahima-2423 | bharat-chi.vercel.app | 2026 | No Newspaper Affiliation</p>
      </div>
    </div>
  )
}
