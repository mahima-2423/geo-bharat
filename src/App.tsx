import React, { useState, useMemo } from 'react';
import { ALL_STATES_DATA } from './data/mapPaths';
import { StateData, Region } from './types';
import { Header } from './components/Header';
import { IndiaMap } from './components/IndiaMap';
import { StateModal } from './components/StateModal';
import { StateGridDrawer } from './components/StateGridDrawer';
import { QuizModal } from './components/QuizModal';
import { triggerTricolorConfetti } from './utils/confetti';

export default function App() {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);

  const filteredStates = useMemo(() => {
    let data = selectedRegion === 'All' ? ALL_STATES_DATA : ALL_STATES_DATA.filter(s => s.region === selectedRegion);
    if (searchQuery) data = data.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return data;
  }, [selectedRegion, searchQuery]);

  const handleSurpriseMe = () => {
    const randomState = ALL_STATES_DATA[Math.floor(Math.random() * ALL_STATES_DATA.length)];
    setSelectedState(randomState);
    triggerTricolorConfetti(0.5, 0.4);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      
      {/* === VARUM MUN KAAPOM - ELITE BANNER === */}
      <div style={{background:'linear-gradient(135deg,#0f172a,#1e3a8a)',color:'white',padding:'24px 16px',textAlign:'center'}}>
        <h1 style={{fontSize:'26px',fontWeight:800}}>🌍 Geo Bharat - வரும் முன் காப்போம்</h1>
        <p style={{marginTop:'8px',fontSize:'13px',opacity:0.9}}>India 1950-2024: 325 Major Floods, 923M Affected, 81K Deaths, Max 1977: 11316 | Global: 1.81B (23%) at Risk, 89% in Low-Income, $388B Loss | LIVE Nepal Bhotekoshi M5.2 GLOF Aug 26 2026: 1114 Deaths</p>
        <div style={{display:'flex',gap:'8px',justifyContent:'center',flexWrap:'wrap',marginTop:'12px'}}>
          <span style={{background:'#dc2626',padding:'6px 12px',borderRadius:'20px',fontSize:'12px'}}>🇮🇳 325 Floods NDMA</span>
          <span style={{background:'#059669',padding:'6px 12px',borderRadius:'20px',fontSize:'12px'}}>🌍 1.81B Risk WorldBank</span>
          <span style={{background:'#7c3aed',padding:'6px 12px',borderRadius:'20px',fontSize:'12px'}}>🚨 LIVE 2026 Nepal 1114</span>
          <span style={{background:'#ea580c',padding:'6px 12px',borderRadius:'20px',fontSize:'12px'}}>📚 NatGeo 3 Types + Hindu Chain</span>
        </div>
      </div>

      <div style={{background:'white',margin:'12px',padding:'14px',borderRadius:'12px',borderLeft:'5px solid #dc2626',fontSize:'13px',lineHeight:'1.6'}}>
        <b>🚨 The Hindu Sep 2 2026 - Soil Erosion Chain:</b> Sun heats Indian Ocean 28-30°C → Vapour to Western Ghats (150M years old) splits rain: West 3000-4000mm, East drought 50km away → Dry hot wind to North → Himalaya glacier melt → Moraine dam break → GLOF 15m @167km/h → Mudflow. 440 India + 1114 Nepal deaths 2026. <b>"Mud and water no matter but haters of nature are"</b> <br/>
        <b>NatGeo:</b> Flood=overflow, 90% disasters. Coastal (Michaung), Riverine slow/rapid (Kosi 1987), Flash most dangerous (Bhotekoshi). Effects: Erosion, sedimentation clogs rivers, pollution (Great Barrier Reef 2019), disease Cholera, but nutrients (Nile). 2012 India rhinos dead, 2024 Kaziranga 200. <br/>
        <span style={{background:'#1e1b4b',color:'white',padding:'4px 8px',borderRadius:'6px'}}>Fix: ICIMOD + IMD + Gemini alert + Razorpay BEFORE flood + Google Maps - வரும் முன் காப்போம்!</span>
      </div>
      {/* === END BANNER === */}

      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedRegion={selectedRegion}
        onSelectRegion={setSelectedRegion}
        onSurpriseMe={handleSurpriseMe}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onToggleList={() => setIsListOpen((prev) => !prev)}
        isListOpen={isListOpen}
        totalStatesCount={ALL_STATES_DATA.length}
        filteredCount={filteredStates.length}
      />

      <div className="flex-1">
        <IndiaMap states={filteredStates} onSelectState={setSelectedState} />
      </div>

      {selectedState && <StateModal state={selectedState} onClose={() => setSelectedState(null)} />}
      <StateGridDrawer states={filteredStates} onSelect={setSelectedState} isOpen={isListOpen} onClose={() => setIsListOpen(false)} />
      {isQuizOpen && <QuizModal onClose={() => setIsQuizOpen(false)} />}
    </div>
  );
}
