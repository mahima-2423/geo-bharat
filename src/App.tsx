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
  const [pincode, setPincode] = useState('');

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
      
      {/* MERGED HEADER - Local Hub + Flood */}
      <div style={{background:'linear-gradient(135deg,#0f172a,#1e3a8a)',color:'white',padding:'24px 16px',textAlign:'center',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,opacity:0.15,backgroundImage:'url(https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg)',backgroundSize:'cover'}}></div>
        <div style={{position:'relative'}}>
          <h1 style={{fontSize:'26px',fontWeight:900}}>Geo Bharat: Your Local Information Hub</h1>
          <p style={{marginTop:'6px',fontSize:'12px',opacity:0.9}}>Connecting you to essential local information with ease + Flood Chain Alert System</p>
          <p style={{marginTop:'10px',fontSize:'11px',background:'rgba(255,255,255,0.15)',display:'inline-block',padding:'4px 12px',borderRadius:'20px'}}>Use 302020 pincode | India 325 Floods | Global 1.81B Risk | LIVE Bhotekoshi GLOF 1114 Deaths</p>
          
          <div style={{marginTop:'16px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto',background:'white',borderRadius:'12px',display:'flex',padding:'6px'}}>
            <input value={pincode} onChange={e=>setPincode(e.target.value)} placeholder="Enter Your Pincode for Hyperlocal Information" style={{flex:1,border:'none',outline:'none',padding:'10px 14px',fontSize:'13px',color:'#111'}} />
            <button style={{background:'#1e40af',color:'white',padding:'8px 16px',borderRadius:'8px',border:'none',fontWeight:700}}>📍 🔍</button>
          </div>

          <div style={{display:'flex',gap:'8px',justifyContent:'center',flexWrap:'wrap',marginTop:'16px'}}>
            <span style={{background:'#f9a8d4',color:'#111',padding:'8px 12px',borderRadius:'10px',fontSize:'11px',textAlign:'left'}}><b>1.Instant Access</b><br/>Get immediate access to details specific to your location.</span>
            <span style={{background:'#f9a8d4',color:'#111',padding:'8px 12px',borderRadius:'10px',fontSize:'11px',textAlign:'left'}}><b>2.Comprehensive Data</b><br/>Find contacts and information for essential services in your area.</span>
            <span style={{background:'#f9a8d4',color:'#111',padding:'8px 12px',borderRadius:'10px',fontSize:'11px',textAlign:'left'}}><b>3.User-Friendly</b><br/>Simple and intuitive interface for a seamless experience.</span>
          </div>

          <div style={{display:'flex',gap:'8px',justifyContent:'center',flexWrap:'wrap',marginTop:'12px'}}>
            <a href="https://www.worldbank.org/en/topic/water" target="_blank" rel="noreferrer" style={{background:'#059669',padding:'7px 14px',borderRadius:'20px',fontSize:'11px',color:'white',textDecoration:'none',fontWeight:700}}>🌍 WorldBank 1.81B ↗</a>
            <a href="https://en.wikipedia.org/wiki/Glacial_lake_outburst_flood" target="_blank" rel="noreferrer" style={{background:'#2563eb',padding:'7px 14px',borderRadius:'20px',fontSize:'11px',color:'white',textDecoration:'none',fontWeight:700}}>🚨 GLOF Wiki ↗</a>
            <a href="https://education.nationalgeographic.org/resource/flood/" target="_blank" rel="noreferrer" style={{background:'#ea580c',padding:'7px 14px',borderRadius:'20px',fontSize:'11px',color:'white',textDecoration:'none',fontWeight:700}}>📚 NatGeo ↗</a>
          </div>
        </div>
      </div>

      {/* QUICK ACCESS - OLD IDEA */}
      <div style={{background:'#6366f1',padding:'20px 12px'}}>
        <div style={{background:'white',borderRadius:'16px',padding:'20px',maxWidth:'900px',margin:'0 auto'}}>
          <h2 style={{fontSize:'18px',fontWeight:800}}>Quick Access: Essential Services in Your Area</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'16px',marginTop:'16px',fontSize:'12px'}}>
            <div><div style={{fontSize:'24px'}}>🏥</div><b>Government & Administration</b><br/>Find nearby medical facilities and emergency contacts.</div>
            <div><div style={{fontSize:'24px'}}>🏛️</div><b>Civic Services</b><br/>Access local police station information and contact numbers.</div>
            <div><div style={{fontSize:'24px'}}>⚡</div><b>Others</b><br/>Get details for electricity and water board services.</div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px',marginTop:'16px',fontSize:'12px',borderTop:'1px solid #eee',paddingTop:'16px'}}>
            <div>⛽ <b>3. Gas Supply</b><br/>Information about gas suppliers and emergency contacts.</div>
            <div>🗑️ <b>4. Waste Management</b><br/>Find details about waste collection and disposal services.</div>
          </div>
        </div>
      </div>

      {/* THE HINDU + NEWSPAPER PROOF - NEW IDEA */}
      <div style={{background:'white',margin:'12px',borderRadius:'16px',border:'3px solid #7f1d1d',overflow:'hidden'}}>
        <div style={{background:'#7f1d1d',color:'white',padding:'10px 16px',fontSize:'13px',fontWeight:800}}>📰 THE HINDU - WED SEP 2 2026 - MUD AND WATER NO MATTER BUT HATERS OF NATURE ARE | By M. Jawahar</div>
        <div style={{padding:'14px 16px',fontSize:'13px',lineHeight:'1.7'}}>
          <p><b>INDIA'S CLIMATE CHAIN: FROM SUN TO FLOOD</b><br/>Sun heats Ocean 28-30°C → Vapour → Monsoon → 150M yr Western Ghats → West 3000-4000mm Feast / East drought → Dry wind North → Himalaya glaciers melt → Lake breaks → <b>15m wall @167km/h</b> → Bhotekoshi M5.2 to Bihar 1114 deaths. Fix: ICIMOD+IMD+Gemini+Razorpay BEFORE+Google Maps = வரும் முன் காப்போம்</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px',marginTop:'10px'}}>
            <img src="/hindu-english.jpg" alt="English" style={{width:'100%',borderRadius:'8px',border:'2px solid #000',minHeight:'150px',background:'#eee',objectFit:'contain'}} />
            <img src="/hindu-tamil.jpg" alt="Tamil" style={{width:'100%',borderRadius:'8px',border:'2px solid #000',minHeight:'150px',background:'#eee',objectFit:'contain'}} />
          </div>
          <div style={{background:'#0f172a',color:'white',padding:'10px',borderRadius:'8px',marginTop:'12px',textAlign:'center',fontSize:'12px'}}><b>💬 "Mud and water no matter but haters of nature are"</b> - Integrated with Pincode Services!</div>
        </div>
      </div>

      {/* LIVE GOOGLE MAP - NEW IDEA */}
      <div style={{background:'white',margin:'0 12px 12px 12px',borderRadius:'16px',border:'3px solid #1e40af',overflow:'hidden'}}>
        <div style={{background:'#1e40af',color:'white',padding:'10px 16px',fontSize:'13px',fontWeight:800}}>🗺️ LIVE GOOGLE MAP - Bhotekoshi GLOF Route Nepal → Bihar | Hyperlocal + Flood Alert Merged</div>
        <iframe src="https://www.google.com/maps?q=Bhotekoshi%20River%20Nepal&z=7&output=embed" width="100%" height="400" style={{border:0}} allowFullScreen loading="lazy" title="Live Map"></iframe>
        <div style={{padding:'10px',background:'#eff6ff',fontSize:'11px',display:'flex',gap:'6px',flexWrap:'wrap',justifyContent:'center'}}>
          <span style={{background:'#dc2626',color:'white',padding:'5px 10px',borderRadius:'12px'}}>🔴 Bhotekoshi Origin</span>
          <span style={{background:'#1e40af',color:'white',padding:'5px 10px',borderRadius:'12px'}}>🔵 Bihar Flood 1114 Deaths + Your Pincode Area</span>
        </div>
      </div>

      {/* BREAKING NEWS - OLD IDEA */}
      <div style={{background:'white',padding:'20px',textAlign:'center',margin:'0 12px 12px 12px',borderRadius:'16px',border:'1px solid #e2e8f0'}}>
        <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400" alt="Breaking" style={{width:'200px',borderRadius:'8px',margin:'0 auto'}} />
        <h3 style={{fontSize:'18px',fontWeight:800,marginTop:'12px',color:'#1e3a8a'}}>Latest Local News and Updates -</h3>
        <div style={{marginTop:'12px',background:'#dbeafe',display:'inline-block',padding:'6px 12px',borderRadius:'8px',fontSize:'12px'}}><b>1. Breaking News</b><br/>Stay updated with real-time local news + Flood alerts</div>
      </div>

      <div style={{background:'#6366f1',padding:'20px 12px'}}>
        <div style={{background:'white',borderRadius:'16px',padding:'20px',maxWidth:'700px',margin:'0 auto'}}>
          <h2 style={{fontSize:'20px',fontWeight:900}}>About Geo Bharat: Connecting You to Your Community</h2>
          <p style={{fontSize:'12px',marginTop:'8px',lineHeight:'1.6'}}>Geo Bharat aims to bridge the information gap, empowering citizens with easy access to essential local details. We strive to connect you to your community, making civic engagement simple and seamless. Now with <b>Flood Chain Early Warning + Razorpay BEFORE payment + Google Maps safe route</b>. Our mission is to build a more informed and connected Bharat, one pincode at a time. <b>வரும் முன் காப்போம்</b></p>
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
