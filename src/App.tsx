import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState("v5");
  const pincode = "625017";

  return (
    <div style={{minHeight:'100vh', background:'#f8fffe', fontFamily:"'Noto Sans Tamil', Arial, sans-serif"}}>
      
      {/* TOP HEADER */}
      <div style={{background:'linear-gradient(90deg, #0a174e, #1e40af)', color:'white', padding:'16px 12px', textAlign:'center', position:'sticky', top:0, zIndex:100, boxShadow:'0 4px 20px rgba(0,0,0,0.3)'}}>
        <h1 style={{margin:0, fontSize:'22px', fontWeight:'900', letterSpacing:'0.5px'}}>🌍 Geo Bharat - Complete Platform V2-V5</h1>
        <p style={{fontSize:'11px', margin:'4px 0 0 0', opacity:0.9}}>Built by Mahima Arul Dharshini J | Valavanur {pincode} | Varum Mun Kappom, Namai Namai Kappom | வரும் முன் காப்போம்</p>
        <div style={{display:'flex', gap:'8px', justifyContent:'center', marginTop:'14px', flexWrap:'wrap'}}>
          {[
            {id:"v2", label:"♻️ V2 Waste to Fuel", color:"#22c55e"},
            {id:"v3", label:"🌾 V3 Farmers", color:"#16a34a"},
            {id:"v4", label:"🌊 V4 Before Flood", color:"#0e7490"},
            {id:"v5", label:"🛰️ V5 NASA + Razorpay", color:"#0ea5e9"},
          ].map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)} style={{
              background: tab===t.id ? t.color : 'white',
              color: tab===t.id ? 'white' : '#0a174e',
              border:'none', padding:'10px 18px', borderRadius:'30px',
              fontWeight:'800', fontSize:'12px', cursor:'pointer',
              boxShadow: tab===t.id ? '0 4px 12px rgba(0,0,0,0.3)' : '0 2px 6px rgba(0,0,0,0.1)',
              transform: tab===t.id ? 'scale(1.05)' : 'scale(1)',
              transition:'all 0.2s'
            }}>{t.label}</button>
          ))}
        </div>
      </div>

      <div style={{maxWidth:'1200px', margin:'0 auto', padding:'16px'}}>

      {/* ================= V2 ================= */}
      {tab==="v2" && (
        <>
        <div style={{background:'white', borderRadius:'20px', overflow:'hidden', boxShadow:'0 8px 30px rgba(0,0,0,0.1)', border:'3px solid #1e40af'}}>
          <div style={{background:'linear-gradient(90deg, #1e40af, #3b82f6)', color:'white', padding:'20px', textAlign:'center'}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'12px'}}>
              <span style={{fontSize:'30px'}}>♻️</span>
              <div>
                <h2 style={{margin:0, fontSize:'26px', fontWeight:'900'}}>Geo Bharat V2 - Waste to Fuel</h2>
                <p style={{margin:'4px 0 0 0', fontSize:'13px', opacity:0.9}}>Waste Segregation & Conversion Process | கழிவு பிரித்தல் & எரிபொருள் உற்பத்தி</p>
              </div>
            </div>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'16px', padding:'20px'}}>
            <div style={{background:'linear-gradient(135deg, #dbeafe, #eff6ff)', padding:'16px', borderRadius:'16px', borderLeft:'6px solid #2563eb'}}>
              <div style={{background:'#2563eb', color:'white', width:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900'}}>01</div>
              <h3 style={{margin:'10px 0 4px 0', color:'#1e40af'}}>Segregate at Source</h3>
              <p style={{margin:0, fontSize:'13px', fontWeight:'700', color:'#15803d'}}>மூலத்திலேயே பிரிக்கவும்</p>
              <div style={{marginTop:'10px', background:'white', padding:'10px', borderRadius:'10px', textAlign:'center'}}>🏘️👨‍👩‍👧<br/><span style={{fontSize:'11px'}}>Separate waste at home/community level<br/>வீட்டிலே/சமூகத்திலே கழிவைப் பிரிக்கவும்</span></div>
            </div>

            <div style={{background:'linear-gradient(135deg, #dbeafe, #eff6ff)', padding:'16px', borderRadius:'16px', borderLeft:'6px solid #2563eb'}}>
              <div style={{background:'#2563eb', color:'white', width:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900'}}>02</div>
              <h3 style={{margin:'10px 0 4px 0', color:'#1e40af'}}>Collect Waste</h3>
              <p style={{margin:0, fontSize:'13px', fontWeight:'700', color:'#15803d'}}>கழிவு சேகரிப்பு</p>
              <div style={{marginTop:'10px', background:'white', padding:'10px', borderRadius:'10px', textAlign:'center'}}>🚛♻️<br/><span style={{fontSize:'11px'}}>Collected from bins/points by waste collectors<br/>கழிவு சேகரிப்பாளர்களால் கழிவு சேகரிக்கப்படுகிறது</span></div>
            </div>

            <div style={{background:'linear-gradient(135deg, #dcfce7, #f0fdf4)', padding:'16px', borderRadius:'16px', borderLeft:'6px solid #16a34a'}}>
              <div style={{background:'#16a34a', color:'white', width:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900'}}>03</div>
              <h3 style={{margin:'10px 0 4px 0', color:'#15803d'}}>Separate Bins</h3>
              <p style={{margin:0, fontSize:'13px', fontWeight:'700'}}>தனித்தனி தொட்டிகள்</p>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', marginTop:'10px'}}>
                <div style={{background:'#16a34a', color:'white', padding:'8px', borderRadius:'10px', textAlign:'center'}}><b>Green Bin</b><br/><span style={{fontSize:'10px'}}>(Biodegradable)<br/>மக்கும் குப்பை பச்சை தொட்டி<br/>🍎🥬🍃</span></div>
                <div style={{background:'#2563eb', color:'white', padding:'8px', borderRadius:'10px', textAlign:'center'}}><b>Blue Bin</b><br/><span style={{fontSize:'10px'}}>(Non-Biodegradable)<br/>மக்காத குப்பை நீல தொட்டி<br/>🧴📄🧃</span></div>
              </div>
            </div>

            <div style={{background:'linear-gradient(135deg, #ffedd5, #fff7ed)', padding:'16px', borderRadius:'16px', borderLeft:'6px solid #ea580c'}}>
              <div style={{background:'#ea580c', color:'white', width:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900'}}>04</div>
              <h3 style={{margin:'10px 0 4px 0', color:'#9a3412'}}>Process in Facility</h3>
              <p style={{margin:0, fontSize:'13px', fontWeight:'700', color:'#15803d'}}>செயலாக்க வசதியில் செயலாக்கம்</p>
              <div style={{marginTop:'10px', background:'white', padding:'10px', borderRadius:'10px', textAlign:'center'}}>🏭⚙️<br/><span style={{fontSize:'11px'}}>Sorting, cleaning & processing at facility<br/>வசதியில் வரிசைப்படுத்தி, சுத்தம் செய்து செயலாக்கம்</span></div>
            </div>

            <div style={{background:'linear-gradient(135deg, #dcfce7, #fef3c7)', padding:'16px', borderRadius:'16px', borderLeft:'6px solid #16a34a', gridColumn:'span 1'}}>
              <div style={{background:'#16a34a', color:'white', width:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900'}}>05</div>
              <h3 style={{margin:'10px 0 4px 0', color:'#15803d'}}>Convert to Fuel</h3>
              <p style={{margin:0, fontSize:'13px', fontWeight:'700'}}>எரிபொருளாக மாற்றுதல்</p>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', marginTop:'10px'}}>
                <div style={{background:'#bbf7d0', padding:'10px', borderRadius:'10px', textAlign:'center', border:'2px dashed #16a34a'}}><span style={{fontSize:'20px'}}>🍃🔥</span><br/><b style={{fontSize:'11px', color:'#14532d'}}>Biogas = இயற்கை எரிவாயு</b><br/><span style={{fontSize:'9px'}}>For cooking & power generation</span></div>
                <div style={{background:'#fde68a', padding:'10px', borderRadius:'10px', textAlign:'center', border:'2px dashed #d97706'}}><span style={{fontSize:'20px'}}>🔥</span><br/><b style={{fontSize:'11px', color:'#92400e'}}>RDF Fuel = எரிபொருள்</b><br/><span style={{fontSize:'9px'}}>Refuse Derived Fuel for industry</span></div>
              </div>
            </div>

            <div style={{background:'linear-gradient(135deg, #ede9fe, #f5f3ff)', padding:'16px', borderRadius:'16px', borderLeft:'6px solid #7c3aed'}}>
              <div style={{background:'#7c3aed', color:'white', width:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900'}}>06</div>
              <h3 style={{margin:'10px 0 4px 0', color:'#6d28d9'}}>Use Fuel</h3>
              <p style={{margin:0, fontSize:'13px', fontWeight:'700'}}>எரிபொருள் பயன்பாடு</p>
              <div style={{marginTop:'10px', background:'white', padding:'10px', borderRadius:'10px', textAlign:'center'}}>🏭⚡🚌<br/><span style={{fontSize:'11px'}}>Used in industries, power, transportation<br/>தொழில்துறை, மின்சாரம், போக்குவரத்தில் பயன்பாடு</span></div>
            </div>
          </div>
          <div style={{background:'#1e40af', color:'white', padding:'12px', textAlign:'center', fontSize:'12px', fontWeight:'700'}}>Geo Bharat V2 — Sustainable Waste Management for Cleaner Tomorrow | தூய்மையான நாளைக்கான நிலையான கழிவு மேலாண்மை • Eco-friendly • Sustainable • Circular Economy</div>
        </div>

        {/* V2 PART 2 - Waste to Wealth */}
        <div style={{marginTop:'20px', background:'white', borderRadius:'20px', overflow:'hidden', boxShadow:'0 8px 30px rgba(0,0,0,0.1)', border:'3px solid #14532d'}}>
          <div style={{background:'#14532d', color:'white', padding:'14px 20px', display:'flex', justifyContent:'space-between'}}>
            <b>🌱 Geo Bharat</b>
            <span style={{fontSize:'12px', fontWeight:'700'}}>Geo Bharat for Farmers - Waste to Wealth | விவசாயிகளுக்கான கழிவிலிருந்து செல்வம்</span>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'0'}}>
            <div style={{background:'#dcfce7', padding:'16px', textAlign:'center', borderRight:'3px solid white'}}>
              <div style={{background:'#16a34a', color:'white', width:'32px', height:'32px', borderRadius:'50%', margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900'}}>1</div>
              <h4 style={{margin:'10px 0 0 0', color:'#14532d'}}>மக்கும் குப்பை சேகரிப்பு<br/>Collect Biodegradable Waste</h4>
              <div style={{marginTop:'10px', fontSize:'40px'}}>👨‍🌾🌴</div>
              <div style={{background:'white', padding:'8px', borderRadius:'8px', marginTop:'10px', fontSize:'11px'}}><b>மக்கும் குப்பை<br/>Biodegradable Waste Only</b><br/>🥥🍃♻️</div>
            </div>
            <div style={{background:'#fefce8', padding:'16px', textAlign:'center', borderRight:'3px solid white'}}>
              <div style={{background:'#ca8a04', color:'white', width:'32px', height:'32px', borderRadius:'50%', margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900'}}>2</div>
              <h4 style={{margin:'10px 0 0 0', color:'#854d0e'}}>கழிவை செல்வமாக மாற்றுதல்<br/>Waste → Wealth Conversion</h4>
              <div style={{marginTop:'10px', fontSize:'30px'}}>⚙️🔥</div>
              <div style={{background:'white', padding:'8px', borderRadius:'8px', marginTop:'10px', fontSize:'10px', textAlign:'left'}}>
                🔥 இயற்கை எரிவாயு - Biogas<br/>🍳 Cooking Fuel + Power<br/>🌱 இயற்கை உரம் - Organic Compost<br/>📈 Soil Nutrition + More Yield
              </div>
            </div>
            <div style={{background:'#dbeafe', padding:'16px', textAlign:'center'}}>
              <div style={{background:'#2563eb', color:'white', width:'32px', height:'32px', borderRadius:'50%', margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900'}}>3</div>
              <h4 style={{margin:'10px 0 0 0', color:'#1e40af'}}>பயன் & வருமானம்<br/>Happy Farmer • Prosperity</h4>
              <div style={{marginTop:'10px', fontSize:'30px'}}>👨‍👩‍👧🍲</div>
              <div style={{background:'white', padding:'8px', borderRadius:'8px', marginTop:'10px', fontSize:'11px'}}><b>₹2500 வருமானம்<br/>Earn Money Reward</b><br/>🍳 Cooking with Biogas<br/>💰 Extra Income • Better Harvest</div>
            </div>
          </div>
          <div style={{background:'#14532d', color:'white', padding:'10px', textAlign:'center', fontSize:'11px', fontWeight:'700'}}>Clean • Green • Profitable Farming | Turn Your Farm Waste into Energy & Income Today! • Eco-Friendly • Save on LPG Costs • Boost Crop Yield</div>
        </div>
        </>
      )}

      {/* ================= V3 ================= */}
      {tab==="v3" && (
        <div style={{background:'white', borderRadius:'20px', overflow:'hidden', boxShadow:'0 8px 30px rgba(0,0,0,0.1)', border:'3px solid #16a34a'}}>
          <div style={{background:'linear-gradient(90deg, #f0fdf4, #dcfce7)', padding:'20px', textAlign:'center'}}>
            <h2 style={{margin:0, fontSize:'32px', color:'#1e40af', fontWeight:'900'}}>🌱 Geo Bharat V3</h2>
            <p style={{margin:'6px 0 0 0', fontSize:'16px', fontWeight:'800', color:'#14532d'}}>Varum Mun Kappom, Namai Namai Kappom | வரும் முன் காப்போம், நம்மை நாமே காப்போம்</p>
            <p style={{margin:'6px 0 0 0', fontSize:'11px', color:'#555'}}>Holistic Support Platform for Tamil Nadu Farmers — Protect Before It Comes, Protect Ourselves</p>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'1fr 220px 1fr', gap:'16px', padding:'20px', alignItems:'start'}}>
            <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
              <div style={{background:'#dcfce7', padding:'16px', borderRadius:'16px', border:'3px solid #22c55e'}}>
                <h3 style={{margin:0, color:'#14532d'}}>01 Patta Loan Help<br/><span style={{fontSize:'13px'}}>பட்டா கடன் உதவி</span></h3>
                <div style={{marginTop:'10px', background:'white', padding:'10px', borderRadius:'10px', fontSize:'11px'}}>👨‍🌾🤝👨‍💼<br/>✅ Document & Patta Verification Support<br/>✅ Low-interest Farmer Loan Assistance<br/>✅ Quick Approval & Guidance</div>
              </div>
              <div style={{background:'#dcfce7', padding:'16px', borderRadius:'16px', border:'3px solid #22c55e'}}>
                <h3 style={{margin:0, color:'#14532d'}}>03 Soil Checking<br/><span style={{fontSize:'13px'}}>மண் பரிசோதனை</span></h3>
                <div style={{marginTop:'10px', background:'white', padding:'10px', borderRadius:'10px', fontSize:'11px'}}>
                  <div style={{background:'#1e293b', color:'#22c55e', padding:'6px', borderRadius:'6px', display:'inline-block', fontWeight:'900'}}>pH: 6.5 Neutral</div><br/>👨‍🔬🧪<br/>
                  ✅ Soil pH & Nutrient Testing<br/>✅ Custom Fertilizer Recommendation<br/>✅ Boost Crop Health & Yield
                </div>
              </div>
            </div>

            <div style={{textAlign:'center'}}>
              <div style={{background:'#e0f2fe', borderRadius:'20px', padding:'20px', border:'3px solid #0ea5e9'}}>
                <div style={{fontSize:'90px'}}>🗺️</div>
                <div style={{background:'#16a34a', color:'white', padding:'8px', borderRadius:'20px', fontWeight:'900', marginTop:'10px'}}>Tamil Nadu<br/><span style={{fontSize:'12px'}}>தமிழ்நாடு</span></div>
                <p style={{fontSize:'10px', marginTop:'10px', color:'#666'}}>38 Districts Coverage • Real-time</p>
              </div>
            </div>

            <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
              <div style={{background:'#dbeafe', padding:'16px', borderRadius:'16px', border:'3px solid #3b82f6'}}>
                <h3 style={{margin:0, color:'#1e40af'}}>02 Kuppai Segregation<br/><span style={{fontSize:'12px'}}>மக்கும் குப்பை & மக்காத குப்பை</span></h3>
                <div style={{marginTop:'10px', background:'white', padding:'10px', borderRadius:'10px', fontSize:'11px', display:'grid', gridTemplateColumns:'1fr auto 1fr', gap:'6px', alignItems:'center', textAlign:'center'}}>
                  <div><div style={{background:'#16a34a', color:'white', padding:'6px', borderRadius:'8px'}}>🟩<br/>மக்கும் குப்பை<br/>Biodegradable</div></div>
                  <div>🔥<br/>Fuel<br/>Biogas</div>
                  <div><div style={{background:'#1e40af', color:'white', padding:'6px', borderRadius:'8px'}}>🟦<br/>மக்காத குப்பை<br/>Non-Bio</div></div>
                </div>
                <p style={{fontSize:'10px', marginTop:'8px', textAlign:'center'}}>→ Recycling • Waste to Wealth</p>
              </div>
              <div style={{background:'#dbeafe', padding:'16px', borderRadius:'16px', border:'3px solid #3b82f6'}}>
                <h3 style={{margin:0, color:'#1e40af'}}>04 Flood Water Removal<br/><span style={{fontSize:'12px'}}>வெள்ள நீர் அகற்றுதல்</span></h3>
                <div style={{marginTop:'10px', background:'white', padding:'10px', borderRadius:'10px', fontSize:'11px'}}>🌊☀️📶<br/>✅ Smart Drainage & Pump System<br/>✅ Excess Water Removal & Diversion<br/>✅ Early Flood Prevention & Safeguard</div>
              </div>
            </div>
          </div>
          <div style={{background:'linear-gradient(90deg, #16a34a, #1e40af)', color:'white', padding:'14px', textAlign:'center', fontWeight:'900', fontSize:'13px'}}>GEO BHARAT V3 – EMPOWERING TAMIL NADU FARMERS WITH TECHNOLOGY, KNOWLEDGE & SAFETY | Early Warning • Sustainable Farming • Self-Reliant Communities</div>
        </div>
      )}

      {/* ================= V4 ================= */}
      {tab==="v4" && (
        <div style={{background:'white', borderRadius:'20px', overflow:'hidden', boxShadow:'0 8px 30px rgba(0,0,0,0.1)', border:'3px solid #0f2d5c'}}>
          <div style={{background:'linear-gradient(90deg, #0f2d5c, #1e40af)', color:'white', padding:'20px'}}>
            <h2 style={{margin:0, fontSize:'22px', fontWeight:'900'}}>Geo Bharat V4 – Before Flood Alert System | வெள்ளம் வரும் முன் எச்சரிக்கை | Varum Mun Kappom</h2>
            <p style={{margin:'8px 0 0 0', fontSize:'12px', color:'#93c5fd'}}>Empowering Farmers with Early Flood Warning & Support • விவசாயிகளுக்கு வெள்ள எச்சரிக்கை மற்றும் ஆதரவு</p>
          </div>

          <div style={{padding:'20px'}}>
            <div style={{display:'grid', gridTemplateColumns:'280px 1fr', gap:'20px', alignItems:'start'}}>
              <div style={{textAlign:'center'}}>
                <div style={{background:'#0f172a', borderRadius:'20px', padding:'10px', border:'3px solid #334155'}}>
                  <div style={{background:'white', borderRadius:'16px', height:'320px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', position:'relative'}}>
                    <div style={{fontSize:'50px'}}>📱</div>
                    <div style={{background:'#ef4444', color:'white', padding:'10px', borderRadius:'10px', marginTop:'12px', fontSize:'11px', fontWeight:'800', width:'90%'}}>
                      ⚠️ வெள்ள அபாய எச்சரிக்கை!<br/>24 மணி நேரத்தில் வெள்ளம் வரலாம்<br/>- பயிரை பாதுகாக்கவும்
                    </div>
                    <p style={{fontSize:'9px', marginTop:'8px', color:'#666'}}>Today • 06:30 AM • Alert Level: HIGH • 24h Forecast</p>
                  </div>
                </div>
                <div style={{marginTop:'12px', background:'#dcfce7', padding:'12px', borderRadius:'12px', textAlign:'left', border:'2px solid #16a34a'}}>
                  <b style={{fontSize:'11px'}}>🗺️ Tamil Nadu Live Alert Zones • நேரடி எச்சரிக்கை பகுதிகள்</b><br/>
                  <div style={{fontSize:'40px', textAlign:'center', marginTop:'6px'}}>🌿🗺️📍</div>
                  <p style={{fontSize:'10px', textAlign:'center', marginTop:'6px'}}>Wet/ Nazard • Madurai • Trichy</p>
                </div>
              </div>

              <div>
                <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                  <div style={{width:'60px', height:'60px', background:'white', border:'4px solid #f59e0b', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'28px', fontWeight:'900', color:'#0f2d5c'}}>5.</div>
                  <h3 style={{margin:0, color:'#0f2d5c', fontSize:'18px', lineHeight:'22px'}}>5. BEFORE FLOOD ALERT SYSTEM<br/><span style={{fontSize:'14px'}}>5. வெள்ளம் வரும் முன் எச்சரிக்கை<br/><span style={{color:'#16a34a'}}>பயிர் பாதுகாப்பு</span></span></h3>
                </div>

                <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'12px', marginTop:'20px'}}>
                  {[
                    {icon:"📡", t1:"Weather Radar", t2:"வானிலை ரேடார்"},
                    {icon:"📟", t1:"IoT Field Sensor", t2:"மண் & நீர் உணரி"},
                    {icon:"💬", t1:"SMS Alert", t2:"குறுஞ்செய்தி எச்சரிக்கை"},
                    {icon:"🚨", t1:"Early Warning Siren", t2:"முன்கூட்டிய எச்சரிக்கை ஒலி"},
                  ].map((s,i)=>(
                    <div key={i} style={{textAlign:'center', background:'#f8fafc', padding:'12px', borderRadius:'12px', border:'1px solid #e2e8f0'}}>
                      <div style={{fontSize:'32px'}}>{s.icon}</div>
                      <b style={{fontSize:'11px', display:'block', marginTop:'6px'}}>{s.t1}<br/><span style={{fontWeight:'400'}}>{s.t2}</span></b>
                    </div>
                  ))}
                </div>

                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px', marginTop:'24px'}}>
                  <div style={{border:'3px solid #16a34a', borderRadius:'14px', padding:'14px', background:'#f0fdf4'}}>
                    <div style={{display:'flex', gap:'10px', alignItems:'center'}}><span style={{fontSize:'24px'}}>📄</span><b style={{fontSize:'14px'}}>1. PATTA LOAN<br/><span style={{fontSize:'12px'}}>1. பட்டா கடன்</span></b></div>
                    <p style={{fontSize:'11px', margin:'8px 0 0 0'}}>Crop Loan Support for Farmers<br/>விவசாயிகளுக்கு பயிர்க்கடன் உதவி</p>
                  </div>
                  <div style={{border:'3px solid #06b6d4', borderRadius:'14px', padding:'14px', background:'#ecfeff'}}>
                    <div style={{display:'flex', gap:'10px', alignItems:'center'}}><span style={{fontSize:'24px'}}>🧪</span><b style={{fontSize:'14px'}}>3. SOIL CHECKING<br/><span style={{fontSize:'12px'}}>3. மண் பரிசோதனை</span></b></div>
                    <p style={{fontSize:'11px', margin:'8px 0 0 0'}}>Soil Health Analysis & Fertilizer Advice<br/>மண் ஆரோக்கியம் மற்றும் உர ஆலோசனை</p>
                  </div>
                  <div style={{border:'3px solid #16a34a', borderRadius:'14px', padding:'14px', background:'#f0fdf4'}}>
                    <div style={{display:'flex', gap:'10px', alignItems:'center'}}><span style={{fontSize:'24px'}}>♻️</span><b style={{fontSize:'14px'}}>2. KUPPAI SEGREGATION<br/><span style={{fontSize:'12px'}}>2. குப்பை பிரித்தல்</span></b></div>
                    <p style={{fontSize:'11px', margin:'8px 0 0 0'}}>Waste Segregation for Clean Villages<br/>சுத்தமான கிராமங்களுக்கு குப்பை பிரித்தல்</p>
                  </div>
                  <div style={{border:'3px solid #2563eb', borderRadius:'14px', padding:'14px', background:'#eff6ff'}}>
                    <div style={{display:'flex', gap:'10px', alignItems:'center'}}><span style={{fontSize:'24px'}}>🚰</span><b style={{fontSize:'14px'}}>4. FLOOD WATER REMOVAL<br/><span style={{fontSize:'12px'}}>4. வெள்ள நீர் அகற்றம்</span></b></div>
                    <p style={{fontSize:'11px', margin:'8px 0 0 0'}}>Drainage & Pump Support in Flood Areas<br/>வெள்ள நீர் வடிகால் & பம்ப் உதவி</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{background:'#0f766e', color:'white', padding:'14px', textAlign:'center', fontWeight:'900', fontSize:'14px'}}>Varum Mun Kappom, Namai Namai Kappom • வரும் முன் காப்போம், நம்மை நாமே காப்போம் | Geo Bharat V4 | Version 4.0 • Real-time Monitoring • Rural Tech Solution</div>
        </div>
      )}

      {/* ================= V5 ================= */}
      {tab==="v5" && (
        <div style={{background:'#020617', color:'white', borderRadius:'20px', overflow:'hidden', boxShadow:'0 8px 40px rgba(0,0,0,0.5)', border:'3px solid #0ea5e9'}}>
          <div style={{padding:'20px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', background:'linear-gradient(90deg, #020617, #0f172a)'}}>
            <div style={{display:'flex', gap:'16px', alignItems:'center'}}>
              <div style={{width:'70px', height:'70px', background:'white', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900', color:'#0b3d91', fontSize:'20px', border:'3px solid #38bdf8'}}>NASA</div>
              <div>
                <h2 style={{margin:0, color:'#38bdf8', fontSize:'32px', fontWeight:'900'}}>Geo Bharat V5</h2>
                <p style={{margin:0, fontSize:'13px', color:'#e0f2fe'}}>NASA + Razorpay Flood Alert | நாசா + ரேசர்பே வெள்ள எச்சரிக்கை</p>
              </div>
            </div>
            <div style={{textAlign:'right'}}>
              <b style={{fontSize:'22px', fontStyle:'italic', color:'#38bdf8'}}>Razorpay</b><br/>
              <span style={{fontSize:'10px', color:'#7dd3fc'}}>Secure Payouts • UPI • Instant</span>
            </div>
          </div>

          <div style={{padding:'16px', display:'grid', gridTemplateColumns:'280px 1fr 300px', gap:'16px'}}>
            <div style={{background:'linear-gradient(180deg, #1e40af, #1e3a8a)', padding:'16px', borderRadius:'16px', border:'2px solid #3b82f6'}}>
              <div style={{background:'#0ea5e9', padding:'6px 12px', borderRadius:'20px', fontWeight:'900', fontSize:'12px', display:'inline-block'}}>LEFT NASA METHOD</div>
              <div style={{marginTop:'16px', fontSize:'12px', lineHeight:'18px'}}>
                <p><span style={{fontSize:'18px'}}>🛰️</span> <b>NASA Satellite<br/>GPM • SMAP • MODIS</b><br/><span style={{opacity:0.8}}>Constellation Monitoring</span></p>
                <div style={{height:'1px', background:'rgba(255,255,255,0.2)', margin:'12px 0'}}></div>
                <p><span style={{fontSize:'18px'}}>🌧️</span> <b>GPM Precipitation Data</b><br/><span style={{opacity:0.8}}>Real-time rainfall from space • 0.1mm accuracy</span></p>
                <div style={{height:'1px', background:'rgba(255,255,255,0.2)', margin:'12px 0'}}></div>
                <p><span style={{fontSize:'18px'}}>💧</span> <b>SMAP Soil Moisture</b><br/><span style={{opacity:0.8}}>Soil saturation mapping • Flood risk assessment</span></p>
                <div style={{height:'1px', background:'rgba(255,255,255,0.2)', margin:'12px 0'}}></div>
                <p><span style={{fontSize:'18px'}}>🗺️</span> <b>MODIS Flood Mapping</b><br/><span style={{opacity:0.8}}>Surface water detection • Flood extent tracking</span></p>
                <div style={{background:'#38bdf8', color:'black', padding:'12px', borderRadius:'12px', marginTop:'16px', fontWeight:'800'}}>
                  🕐 48-Hour Early Prediction<br/><span style={{fontWeight:'400', fontSize:'11px'}}>Predicts flooding 48 hours before event using AI + satellite data</span>
                </div>
                <p style={{fontSize:'8px', marginTop:'12px', opacity:0.6}}>Data Source: NASA Earth Observing System</p>
              </div>
            </div>

            <div>
              <div style={{background:'linear-gradient(90deg, #0f172a, #1e3a8a)', padding:'14px', borderRadius:'14px', textAlign:'center', border:'2px solid #38bdf8'}}>
                <b style={{color:'#facc15', fontSize:'20px', lineHeight:'22px'}}>Varum Mun Kappom<br/><span style={{fontSize:'13px'}}>வரும் முன் காப்போம்</span><br/><span style={{fontSize:'12px', color:'white', fontWeight:'400'}}>Prevent Before It Comes</span></b>
              </div>

              <div style={{background:'#0f172a', border:'2px solid #0ea5e9', borderRadius:'16px', padding:'14px', marginTop:'14px'}}>
                <b style={{color:'#38bdf8', display:'block', textAlign:'center', marginBottom:'12px', fontSize:'13px'}}>FLOOD ALERT SYSTEM WORKFLOW</b>
                <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'8px', fontSize:'10px', textAlign:'center'}}>
                  <div style={{background:'#1e293b', padding:'10px', borderRadius:'10px', border:'1px solid #334155'}}><b>Step 1<br/>🚀 NASA Data</b><br/><span style={{opacity:0.7}}>Satellite • Rainfall • Soil Moisture</span></div>
                  <div style={{background:'#1e293b', padding:'10px', borderRadius:'10px', border:'1px solid #334155'}}><b>Step 2<br/>🧠 AI Analysis</b><br/><span style={{opacity:0.7}}>Machine Learning • Risk Prediction</span></div>
                  <div style={{background:'#1e293b', padding:'10px', borderRadius:'10px', border:'1px solid #334155'}}><b>Step 3<br/>💬 Tamil SMS Alert</b><br/><span style={{opacity:0.7}}>வெள்ள எச்சரிக்கை • உடனடி SMS அனுப்பப்படும்</span></div>
                  <div style={{background:'#1e293b', padding:'10px', borderRadius:'10px', border:'1px solid #334155'}}><b>Step 4<br/>💰 Razorpay Reward</b><br/><span style={{opacity:0.7}}>Instant ₹2 / ₹10 payout via RazorpayX</span></div>
                </div>

                <div style={{marginTop:'20px', background:'radial-gradient(circle, #1e3a8a, #020617)', borderRadius:'16px', padding:'16px', textAlign:'center', border:'1px solid #1e40af'}}>
                  <b style={{color:'#38bdf8', fontSize:'14px'}}>Tamil Nadu Coverage</b>
                  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', marginTop:'12px', fontSize:'11px'}}>
                    <div>📍 Chennai<br/>📍 Coimbatore</div>
                    <div>📍 Madurai<br/>📍 Tiruchirappalli</div>
                  </div>
                  <div style={{fontSize:'50px', marginTop:'10px'}}>🗺️🌿</div>
                  <div style={{display:'flex', gap:'10px', justifyContent:'center', fontSize:'9px', marginTop:'10px'}}>
                    <span style={{color:'#22c55e'}}>● Active Monitoring</span>
                    <span style={{color:'#3b82f6'}}>● Flood Risk Zone</span>
                    <span style={{color:'#facc15'}}>● Alert Sent</span>
                  </div>
                  <p style={{fontSize:'9px', marginTop:'8px', opacity:0.7}}>Satellite Coverage: All 38 Districts • Real-time Monitoring</p>
                </div>
              </div>
            </div>

            <div style={{background:'linear-gradient(180deg, #0f766e, #115e59)', padding:'16px', borderRadius:'16px', border:'2px solid #14b8a6'}}>
              <div style={{background:'#14b8a6', padding:'6px 12px', borderRadius:'20px', fontWeight:'900', fontSize:'12px', display:'inline-block'}}>RIGHT Razorpay METHOD</div>
              <div style={{marginTop:'16px', fontSize:'12px', lineHeight:'18px'}}>
                <p><span style={{fontSize:'18px'}}>💳</span> <b>Razorpay X Payouts</b><br/><span style={{opacity:0.9}}>Instant cash rewards to farmers via UPI</span></p>
                <div style={{height:'1px', background:'rgba(255,255,255,0.2)', margin:'12px 0'}}></div>
                <p><span style={{fontSize:'18px'}}>📸</span> <b>Farmer Uploads Flood Photo<br/>Get ₹2 Instant Reward</b><br/><span style={{background:'#a7f3d0', color:'black', padding:'3px 10px', borderRadius:'20px', fontWeight:'900', fontSize:'11px', display:'inline-block', marginTop:'6px'}}>₹2 INSTANT</span></p>
                <div style={{height:'1px', background:'rgba(255,255,255,0.2)', margin:'12px 0'}}></div>
                <p><span style={{fontSize:'18px'}}>⭐</span> <b>₹10 Bonus for Accurate Early</b><br/><span style={{opacity:0.9}}>Bonus awarded if alert is confirmed</span><br/><span style={{background:'#fde68a', color:'black', padding:'3px 10px', borderRadius:'20px', fontWeight:'900', fontSize:'11px', display:'inline-block', marginTop:'6px'}}>₹10 BONUS</span></p>
                <div style={{height:'1px', background:'rgba(255,255,255,0.2)', margin:'12px 0'}}></div>
                <p><span style={{fontSize:'18px'}}>📄</span> <b>Patta Loan Disbursement via Razorpay</b><br/><span style={{opacity:0.9}}>Micro-loan for relief & recovery • Fast approval & disbursement</span></p>

                <div style={{background:'white', padding:'12px', borderRadius:'12px', marginTop:'16px', textAlign:'center'}}>
                  <div style={{width:'100px', height:'100px', background:'linear-gradient(45deg, black, #333)', margin:'0 auto', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:'10px', fontWeight:'800'}}>QR<br/>SCAN</div>
                  <p style={{color:'black', margin:'8px 0 0 0', fontSize:'10px', fontWeight:'700'}}>Scan to Join & Claim Rewards<br/><span style={{fontWeight:'400'}}>UPI / Razorpay QR • Relief Funds</span></p>
                </div>
              </div>
            </div>
          </div>

          <div style={{background:'#020617', borderTop:'1px solid #1e3a8a', padding:'10px 16px', display:'flex', justifyContent:'space-between', fontSize:'10px', color:'#7dd3fc'}}>
            <span>Powered by: Geo Bharat V5 | Collaboration: NASA Earth Science + Razorpay</span>
            <span>Real-time • Secure • Scalable • Bilingual: English / தமிழ்</span>
          </div>
        </div>
      )}

      </div>

      <div style={{textAlign:'center', padding:'24px', fontSize:'11px', color:'#666', lineHeight:'16px'}}>
        <b>Built with ❤️ by Mahima Arul Dharshini J | Valavanur | Pincode {pincode}</b><br/>
        Geo Bharat V2 - Waste to Fuel | V3 - Farmers Holistic | V4 - Before Flood Alert | V5 - NASA + Razorpay<br/>
        Varum Mun Kappom, Namai Namai Kappom • வரும் முன் காப்போம், நம்மை நாமே காப்போம்<br/>
        Clean Build • THE HINDU Removed • bharat-chi.vercel.app
      </div>
    </div>
  );
                }
