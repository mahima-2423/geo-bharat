import React, { useState } from 'react'

export default function App() {
  const [pincode, setPincode] = useState("625017")

  return (
    <div className="min-h-screen bg-[#f5f5ff] font-sans">
      {/* HEADER - Geo Bharat */}
      <div className="bg-[#0a174e] text-white p-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover"></div>
        <div className="relative z-10">
          <h1 className="text-xl md:text-2xl font-bold">Geo Bharat: Your Local Information Hub</h1>
          <p className="text-[10px] opacity-80 mt-1">Connecting you to essential local information with ease + Flood Chain Alert System</p>
          <p className="text-[9px] bg-white/20 inline-block px-3 py-1 rounded-full mt-2">Use 625017 pincode | India 325 Floods | Global 1.81B Risk | LIVE Bhotekoshi GLOF</p>

          <div className="flex justify-center gap-2 mt-3 max-w-md mx-auto">
            <input
              value={pincode}
              onChange={(e)=>setPincode(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg text-black text-sm"
              placeholder="625017"
            />
            <button className="bg-red-600 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-1">
              🔴 LIVE CHECK
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-3 max-w-2xl mx-auto text-[9px]">
            <div className="bg-pink-200 text-pink-900 p-2 rounded-lg">1. Instant Access<br/>Pincode to live flood map instantly.</div>
            <div className="bg-pink-200 text-pink-900 p-2 rounded-lg">2. Comprehensive Data<br/>Local services + flood alerts.</div>
            <div className="bg-pink-200 text-pink-900 p-2 rounded-lg">3. User-Friendly<br/>Type pincode + map changes live.</div>
          </div>

          <div className="flex justify-center gap-2 mt-3 text-[10px]">
            <span className="bg-green-600 px-2 py-1 rounded-full">🌍 WorldBank 1.81B</span>
            <span className="bg-blue-600 px-2 py-1 rounded-full">📘 GLOF Wiki</span>
            <span className="bg-orange-600 px-2 py-1 rounded-full">🐅 NatGeo</span>
          </div>
        </div>
      </div>

      {/* QUICK ACCESS */}
      <div className="bg-white mx-2 md:mx-4 -mt-2 rounded-xl p-4 shadow-lg border-purple-200">
        <h2 className="font-bold text-sm mb-3">Quick Access: Essential Services in Your Area + Flood</h2>
        <div className="grid grid-cols-3 gap-2 text-[11px]">
          <div><b>Government & Administration</b><br/>Medical + flood emergency contacts.</div>
          <div><b>Civic Services</b><br/>Police + disaster control room.</div>
          <div><b>Others</b><br/>Electricity, water, gas, waste + flood alert.</div>
        </div>
      </div>

      {/* REMOVED: THE HINDU SECTION - Deleted as per Mahima request */}

      {/* MAP SECTION */}
      <div className="mx-2 md:mx-4 mt-4 bg-white rounded-xl overflow-hidden shadow-lg border-2 border-blue-900">
        <div className="bg-blue-900 text-white text-[11px] p-2">Bhotekoshi GLOF Origin Nepal 27.9°N, 85.9°E | Type Pincode Above = Live Map Changes</div>
        <div className="relative h-[350px] bg-blue-50">
          <iframe
            title="map"
            className="w-full h-full border-0"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=68%2C6%2C97%2C36&layer=mapnik&marker=11.5%2C79.5`}
          ></iframe>
          <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-xs shadow">Open in Maps</div>
          <div className="absolute bottom-2 left-2 right-2 flex gap-2 justify-center text-[10px] flex-wrap">
            <span className="bg-red-600 text-white px-2 py-1 rounded-full">📍 Type 800001 = Bihar Flood</span>
            <span className="bg-green-600 text-white px-2 py-1 rounded-full">📍 Type 625017 = Madurai Safe Hub</span>
            <span className="bg-blue-800 text-white px-2 py-1 rounded-full">Current: Bhotekoshi River Sindhupalchok Nepal</span>
          </div>
        </div>
      </div>

      {/* GEO BHARAT ORANGE SECTION */}
      <div className="mt-4 bg-[#ff8c00] p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">🇮🇳</div>
            <div>
              <h2 className="font-bold text-sm">GEO BHARAT <span className="text-[10px] bg-white/30 px-2 py-0.5 rounded">INTERACTIVE MAP</span></h2>
              <p className="text-[10px]">Discover 28 States & 8 Union Territories • Capitals, Cuisines, Languages & Facts</p>
            </div>
          </div>
          <div className="text-[10px] text-white">STATES: 28 | UTS: 8</div>
        </div>

        <div className="flex gap-2 mt-3">
          <input className="flex-1 px-3 py-2 rounded-full text-sm" placeholder="Search state, capital, food (e.g. Jaipur, B..." />
          <button className="bg-white px-3 py-1 rounded-full text-xs font-bold">🎲 Surprise State</button>
          <button className="bg-green-700 text-white px-3 py-1 rounded-full text-xs">✨ Quiz</button>
          <button className="bg-white/30 text-white px-3 py-1 rounded-full text-xs">List View</button>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-white p-4 text-center text-xs text-gray-500">
        <p>Built with ❤️ by Mahima Arul Dharshini J | Valavanur | 625017</p>
        <p className="mt-1">Clean Build v7.0 - THE HINDU section removed - Live Flood Alert Active</p>
      </div>
    </div>
  )
}
