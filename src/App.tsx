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
      
      <div style={{background:'linear-gradient(135deg,#0f172a,#1e3a8a)',color:'white',padding:'24px 16px',textAlign:'center'}}>
        <h1 style={{fontSize:'26px',fontWeight:800}}>🌍 Geo Bharat - வரும் முன் காப்போம்</h1>
        <p style={{marginTop:'8px',fontSize:'12px',opacity:0.9,lineHeight:'1.5'}}>India 1950-2024: 325 Major Floods, 923M Affected, 81K Deaths | Global: 1.81B (23%) at Risk, $388B Loss | LIVE Nepal Bhotekoshi M5.2 GLOF Aug 26 2026: 1114 Deaths | Hindu Sep 2 Chain: 28-30°C → Western Ghats 150M yr → GLOF 15m @167km/h</p>
        <div style={{display:'flex',gap:'8px',justifyContent:'center',flexWrap:'wrap',marginTop:'14px'}}>
          <a href="https://ndma.gov.in/Natural-Hazards/Floods" target="_blank" rel="noopener noreferrer" style={{background:'#dc2626',padding:'8px 14px',borderRadius:'20px',fontSize:'12px',color:'white',textDecoration:'none',cursor:'pointer',fontWeight:600}}>🇮🇳 IN 325 Floods NDMA ↗</a>
          <a href="https://www.worldbank.org/en/topic/disasterriskmanagement/brief/climate-and-disaster-resilience" target="_blank" rel="noopener noreferrer" style={{background:'#059669',padding:'8px 14px',borderRadius:'20px',fontSize:'12px',color:'white',textDecoration:'none',cursor:'pointer',fontWeight:600}}>🌍 1.81B Risk WorldBank ↗</a>
          <a href="https://www.google.com/search?q=Bhotekoshi+GLOF+August+26+2026+Nepal" target="_blank" rel="noopener noreferrer" style={{background:'#2563eb',padding:'8px 14px',borderRadius:'20px',fontSize:'12px',color:'white',textDecoration:'none',cursor:'pointer',fontWeight:600}}>🚨 LIVE 2026 Nepal 1114 ↗</a>
          <a href="https://education.nationalgeographic.org/resource/flood/" target="_blank" rel="noopener noreferrer" style={{background:'#ea580c',padding:'8px 14px',borderRadius:'20px',fontSize:'12px',color:'white',textDecoration:'none',cursor:'pointer',fontWeight:600}}>📚 NatGeo Flood Types ↗</a>
          <a href="https://www.thehindu.com" target="_blank" rel="noopener noreferrer" style={{background:'#7c3aed',padding:'8px 14px',borderRadius:'20px',fontSize:'12px',color:'white',textDecoration:'none',cursor:'pointer',fontWeight:600}}>📰 The Hindu Chain ↗</a>
        </div>
      </div>

      <div style={{background:'white',margin:'12px',padding:'14px',borderRadius:'12px',borderLeft:'5px solid #dc2626',fontSize:'13px',lineHeight:'1.7'}}>
        <b>🚨 Full Chain (The Hindu Sep 2 2026):</b> Sun heats Indian Ocean 28-30°C → Vapour to Western Ghats (150M yrs) → West 3000mm, East drought 50km → North → Himalaya glacier melt → Moraine dam break → GLOF 15m @167km/h → Mudflow. 440 India + 1114 Nepal 2026. <b>"Mud and water no matter but haters of nature are"</b><br/>
        <b>NatGeo:</b> Coastal (Michaung), Riverine slow/rapid (Kosi 1987), Flash most dangerous (Bhotekoshi). Effects: Erosion, sedimentation, pollution (Great Barrier Reef 2019), Cholera, but Nile nutrients. 2012 rhinos, 2024 Kaziranga 200 deaths.<br/>
        <span style={{background:'#0f172a',color:'white',padding:'5px 10px',borderRadius:'8px',display:'inline-block',marginTop:'6px'}}>Fix: ICIMOD + IMD + Gemini alert + Razorpay BEFORE flood + Google Maps - வரும் முன் காப்போம்! Click top buttons for proof ↗</span>
      </div>

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
