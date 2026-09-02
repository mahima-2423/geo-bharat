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
      
      <div style={{background:'linear-gradient(135deg,#0f172a,#1e3a8a)',color:'white',padding:'20px 16px',textAlign:'center'}}>
        <h1 style={{fontSize:'26px',fontWeight:800}}>🌍 Geo Bharat - வரும் முன் காப்போம்</h1>
        <p style={{marginTop:'6px',fontSize:'11px',opacity:0.9,lineHeight:'1.4'}}>India 1950-2024: 325 Floods, 923M Affected, 81K Deaths | Global 1.81B (23%) at Risk $388B | LIVE Nepal Bhotekoshi M5.2 GLOF Aug 26 2026: 1114 Deaths</p>
        <div style={{display:'flex',gap:'6px',justifyContent:'center',flexWrap:'wrap',marginTop:'10px'}}>
          <a href="https://ndma.gov.in" target="_blank" rel="noreferrer" style={{background:'#dc2626',padding:'6px 12px',borderRadius:'20px',fontSize:'10px',color:'white',textDecoration:'none',fontWeight:700}}>🇮🇳 NDMA 325 ↗</a>
          <a href="https://www.worldbank.org/en/topic/water" target="_blank" rel="noreferrer" style={{background:'#059669',padding:'6px 12px',borderRadius:'20px',fontSize:'10px',color:'white',textDecoration:'none',fontWeight:700}}>🌍 WorldBank 1.81B ↗</a>
          <a href="https://en.wikipedia.org/wiki/Glacial_lake_outburst_flood" target="_blank" rel="noreferrer" style={{background:'#2563eb',padding:'6px 12px',borderRadius:'20px',fontSize:'10px',color:'white',textDecoration:'none',fontWeight:700}}>🚨 GLOF Wiki ↗</a>
          <a href="https://education.nationalgeographic.org/resource/flood/" target="_blank" rel="noreferrer" style={{background:'#ea580c',padding:'6px 12px',borderRadius:'20px',fontSize:'10px',color:'white',textDecoration:'none',fontWeight:700}}>📚 NatGeo ↗</a>
          <a href="https://www.thehindu.com/tag/floods/" target="_blank" rel="noreferrer" style={{background:'#7c3aed',padding:'6px 12px',borderRadius:'20px',fontSize:'10px',color:'white',textDecoration:'none',fontWeight:700}}>📰 Hindu Floods ↗</a>
        </div>
      </div>

      <div style={{background:'white',margin:'12px',borderRadius:'16px',border:'3px solid #7f1d1d',overflow:'hidden'}}>
        <div style={{background:'#7f1d1d',color:'white',padding:'10px 16px',fontSize:'13px',fontWeight:800,display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:'6px'}}>
          <span>📰 THE HINDU - WED SEP 2 2026 - MUD AND WATER NO MATTER BUT HATERS OF NATURE ARE</span>
          <span style={{background:'white',color:'#7f1d1d',padding:'2px 8px',borderRadius:'10px',fontSize:'10px'}}>Madurai Edition | By M. Jawahar</span>
        </div>
        <div style={{padding:'14px 16px',fontSize:'13px',lineHeight:'1.7',color:'#1f2937'}}>
          <b>INDIA'S CLIMATE CHAIN: FROM SUN TO FLOOD</b>
          <p style={{marginTop:'8px'}}>It does NOT start in mountains. It starts 7 crore sq.km away in Indian Ocean, under noon sun. Surface warms to 28-30°C, evaporates, vapour rises, low pressure, wind born. Monsoon travels west to east, heavy with moisture, meets 150-million-year-old Western Ghats. Ghats force to climb, cool, squeeze 3000-4000mm rain on west (Western Feast). Same wind now dry, 50km east drought. Dry hot wind turns north, thousands km to Himalaya, heats glaciers, ice collapses, rock & soil left, temporary glacial lake forms, loose wall breaks → 15m wall @167km/h muddy flood → Bhotekoshi Nepal to Bihar, 3000+ lives. Nature moving extra heat sea to mountain.</p>
          
          <div style={{background:'#fef2f2',border:'1px dashed #fca5a5',padding:'12px',borderRadius:'10px',marginTop:'12px'}}>
            <b style={{display:'block',textAlign:'center',color:'#991b1b'}}>👇 YOUR NEWSPAPER PROOF - The Hindu Sep 2 2026 👇</b>
            <p style={{textAlign:'center',fontSize:'10px',color:'#6b7280',marginTop:'4px'}}>Upload your 2 photos to /public as hindu-english.jpg & hindu-tamil.jpg - they will auto appear below</p>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px',marginTop:'10px'}}>
              <div style={{textAlign:'center'}}>
                <img src="/hindu-english.jpg" alt="The Hindu English Sep 2 2026" style={{width:'100%',borderRadius:'8px',border:'2px solid #000',minHeight:'200px',background:'#eee',objectFit:'contain'}} />
                <p style={{fontSize:'10px',marginTop:'4px',fontWeight:700}}>English: MUD AND WATER NO MATTER...</p>
              </div>
              <div style={{textAlign:'center'}}>
                <img src="/hindu-tamil.jpg" alt="The Hindu Tamil Sep 2 2026" style={{width:'100%',borderRadius:'8px',border:'2px solid #000',minHeight:'200px',background:'#eee',objectFit:'contain'}} />
                <p style={{fontSize:'10px',marginTop:'4px',fontWeight:700}}>Tamil: சேறும் தண்ணீரும் பொருட்டல்ல...</p>
              </div>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'8px',marginTop:'12px',fontSize:'10px',textAlign:'center'}}>
              <div style={{background:'#fee2e2',padding:'8px',borderRadius:'8px'}}><b>Coastal</b><br/>Michaung<br/>Sea overflow</div>
              <div style={{background:'#fef3c7',padding:'8px',borderRadius:'8px'}}><b>Riverine</b><br/>Kosi 1987<br/>slow/rapid</div>
              <div style={{background:'#dbeafe',padding:'8px',borderRadius:'8px'}}><b>Flash</b><br/>Bhotekoshi<br/>Most dangerous</div>
            </div>
          </div>

          <div style={{background:'#0f172a',color:'white',padding:'10px',borderRadius:'8px',marginTop:'12px',textAlign:'center',fontSize:'12px'}}>
            <b>💬 "Mud and water no matter but haters of nature are"</b><br/>
            <span style={{fontSize:'11px',opacity:0.85}}>Fix: ICIMOD + IMD + Gemini AI alert + Razorpay BEFORE flood + Google Maps safe route = வரும் முன் காப்போம்!</span>
          </div>
          <p style={{marginTop:'8px',fontSize:'10px',color:'#6b7280'}}>Sources: NDMA 325 floods 1950-2024, World Bank 1.81B at risk 89% low-income $388B loss, NatGeo 90% disasters, 2012 rhinos, 2024 Kaziranga 200 deaths, Great Barrier Reef 2019 pollution.</p>
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
