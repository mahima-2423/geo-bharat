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
      
      <div style={{background:'linear-gradient(135deg,#0f172a,#1e3a8a)',color:'white',padding:'22px 16px',textAlign:'center'}}>
        <h1 style={{fontSize:'28px',fontWeight:800}}>🌍 Geo Bharat - வரும் முன் காப்போம்</h1>
        <p style={{marginTop:'8px',fontSize:'12px',opacity:0.95,lineHeight:'1.5'}}>India 1950-2024: 325 Floods | 923M Affected | 81K Deaths | Global: 1.81B (23%) at Risk $388B | LIVE Bhotekoshi M5.2 GLOF Aug 26 2026: 1114 Deaths | The Hindu Sep 2 2026 Chain</p>
        <div style={{display:'flex',gap:'8px',justifyContent:'center',flexWrap:'wrap',marginTop:'14px'}}>
          <span style={{background:'#059669',padding:'8px 14px',borderRadius:'20px',fontSize:'11px',color:'white',fontWeight:700}}>🌍 1.81B at Risk</span>
          <span style={{background:'#dc2626',padding:'8px 14px',borderRadius:'20px',fontSize:'11px',color:'white',fontWeight:700}}>🚨 GLOF 15m @167km/h</span>
          <span style={{background:'#7c3aed',padding:'8px 14px',borderRadius:'20px',fontSize:'11px',color:'white',fontWeight:700}}>📰 The Hindu Verified</span>
        </div>
      </div>

      <div style={{background:'white',margin:'12px',borderRadius:'16px',border:'3px solid #7f1d1d',overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.1)'}}>
        <div style={{background:'#7f1d1d',color:'white',padding:'12px 16px',fontSize:'13px',fontWeight:800}}>
          📰 THE HINDU - WEDNESDAY SEP 2 2026 - MADURAI EDITION
          <div style={{fontSize:'11px',fontWeight:400,marginTop:'4px',opacity:0.9}}>By M. Jawahar | MUD AND WATER NO MATTER BUT HATERS OF NATURE ARE | INDIA'S CLIMATE CHAIN: FROM SUN TO FLOOD</div>
        </div>
        <div style={{padding:'16px',fontSize:'13px',lineHeight:'1.8',color:'#1f2937'}}>
          <p>It does NOT start in mountains. It starts 7 crore sq.km away in Indian Ocean, under noon sun. Ocean heats to <b>28-30°C</b>, evaporates, vapour rises, wind born. Monsoon travels west to east, meets <b>150-million-year-old Western Ghats</b> → West gets <b>3000-4000mm</b> rain (Western Feast), 50km East drought. Dry hot wind goes North to Himalaya → heats glaciers → glacial lake forms → dam breaks → <b>15m wall @167km/h</b> → Bhotekoshi Nepal (M5.2 triggered) to Bihar → 3000+ lives lost. <b>Chain: Sun → Ocean → Vapour → Ghats → Drought → Himalaya → GLOF → Flood.</b></p>
          
          <div style={{background:'#fef2f2',border:'2px dashed #fca5a5',padding:'12px',borderRadius:'12px',marginTop:'14px'}}>
            <b style={{display:'block',textAlign:'center',color:'#991b1b',fontSize:'12px'}}>👇 NEWSPAPER PROOF - Upload Tomorrow to /public 👇</b>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',marginTop:'10px'}}>
              <div style={{textAlign:'center'}}>
                <div style={{width:'100%',minHeight:'200px',background:'#f3f4f6',borderRadius:'8px',border:'2px solid #000',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
                  <img src="/hindu-english.jpg" alt="Hindu English" style={{width:'100%',height:'100%',objectFit:'contain'}} onError={(e)=>{e.currentTarget.style.display='none'; e.currentTarget.nextElementSibling.style.display='block'}} />
                  <span style={{display:'none',fontSize:'11px',padding:'20px'}}>Tomorrow upload: hindu-english.jpg</span>
                </div>
                <p style={{fontSize:'10px',marginTop:'6px',fontWeight:700}}>English - MUD AND WATER...</p>
              </div>
              <div style={{textAlign:'center'}}>
                <div style={{width:'100%',minHeight:'200px',background:'#f3f4f6',borderRadius:'8px',border:'2px solid #000',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
                  <img src="/hindu-tamil.jpg" alt="Hindu Tamil" style={{width:'100%',height:'100%',objectFit:'contain'}} onError={(e)=>{e.currentTarget.style.display='none'; e.currentTarget.nextElementSibling.style.display='block'}} />
                  <span style={{display:'none',fontSize:'11px',padding:'20px'}}>Tomorrow upload: hindu-tamil.jpg</span>
                </div>
                <p style={{fontSize:'10px',marginTop:'6px',fontWeight:700}}>Tamil - சேறும் தண்ணீரும்...</p>
              </div>
            </div>
          </div>

          <div style={{background:'#0f172a',color:'white',padding:'12px',borderRadius:'10px',marginTop:'14px',textAlign:'center'}}>
            <b style={{fontSize:'13px'}}>💬 "Mud and water no matter but haters of nature are"</b>
            <div style={{fontSize:'11px',marginTop:'6px',opacity:0.9}}>Solution: ICIMOD (glacier watch) + IMD (rain) + Gemini AI (alert) + Razorpay (pay BEFORE) + Google Maps (safe route) = <b>வரும் முன் காப்போம்</b></div>
          </div>
          <p style={{marginTop:'10px',fontSize:'10px',color:'#6b7280',textAlign:'center'}}>Sources: NDMA 325 floods, World Bank 1.81B risk 89% low-income $388B, NatGeo 90% disasters, Kaziranga 2012 rhinos / 2024 200 animals, Great Barrier Reef 2019 pollution.</p>
        </div>
      </div>

      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} selectedRegion={selectedRegion} onSelectRegion={setSelectedRegion} onSurpriseMe={handleSurpriseMe} onOpenQuiz={() => setIsQuizOpen(true)} onToggleList={() => setIsListOpen((prev) => !prev)} isListOpen={isListOpen} totalStatesCount={ALL_STATES_DATA.length} filteredCount={filteredStates.length} />
      <div className="flex-1"><IndiaMap states={filteredStates} onSelectState={setSelectedState} /></div>
      {selectedState && <StateModal state={selectedState} onClose={() => setSelectedState(null)} />}
      <StateGridDrawer states={filteredStates} onSelect={setSelectedState} isOpen={isListOpen} onClose={() => setIsListOpen(false)} />
      {isQuizOpen && <QuizModal onClose={() => setIsQuizOpen(false)} />}
    </div>
  );
}
