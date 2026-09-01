import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ZoomIn, ZoomOut, RotateCcw, Compass, MapPin, Sparkles } from 'lucide-react';
import { StateData, Region } from '../types';
import { MAP_PATHS } from '../data/mapPaths';
import { triggerTricolorConfetti } from '../utils/confetti';

interface IndiaMapProps {
  states: StateData[];
  selectedStateId: string | null;
  selectedRegion: Region;
  onSelectState: (state: StateData) => void;
  searchQuery: string;
}

// Region-based aesthetic palette for crisp visual distinction
const REGION_COLORS: Record<string, { fill: string; hover: string; border: string; text: string }> = {
  'North': { fill: '#FDE68A', hover: '#F59E0B', border: '#D97706', text: '#78350F' },
  'South': { fill: '#BBF7D0', hover: '#22C55E', border: '#15803D', text: '#14532D' },
  'West': { fill: '#FED7AA', hover: '#F97316', border: '#C2410C', text: '#7C2D12' },
  'East': { fill: '#FEF08A', hover: '#EAB308', border: '#A16207', text: '#713F12' },
  'Central': { fill: '#A7F3D0', hover: '#10B981', border: '#047857', text: '#064E3B' },
  'North East': { fill: '#99F6E4', hover: '#14B8A6', border: '#0F766E', text: '#134E4A' },
  'Islands & UTs': { fill: '#BAE6FD', hover: '#0EA5E9', border: '#0369A1', text: '#0C4A6E' },
};

export const IndiaMap: React.FC<IndiaMapProps> = ({
  states,
  selectedStateId,
  selectedRegion,
  onSelectState,
  searchQuery,
}) => {
  const [hoveredState, setHoveredState] = useState<StateData | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Filtered state ID set
  const filteredStateIds = new Set(states.map((s) => s.id));

  // Small UTs that benefit from quick-tap chips on mobile
  const smallUTs = states.filter(
    (s) => ['IN-DL', 'IN-CH', 'IN-GA', 'IN-PY', 'IN-DN', 'IN-LD', 'IN-AN', 'IN-SK'].includes(s.id)
  );

  const handleStateClick = (state: StateData, e?: React.MouseEvent) => {
    let clientX = 0.5;
    let clientY = 0.5;
    if (e && typeof window !== 'undefined') {
      clientX = e.clientX / window.innerWidth;
      clientY = e.clientY / window.innerHeight;
    }
    triggerTricolorConfetti(clientX, clientY);
    onSelectState(state);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.3, 2.8));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.3, 0.7));
  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Mouse pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPanOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full h-[680px] sm:h-[760px] md:h-[820px] bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden flex flex-col select-none">
      
      {/* Background Dot Matrix Pattern matching Professional Polish */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#138808 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }} 
      />

      {/* Top Map Action Bar - Currently Viewing Badge */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 pointer-events-none sm:pointer-events-auto">
        <div className="bg-slate-100/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-[10px] text-slate-500 font-black uppercase tracking-wider mb-0.5">
            {selectedRegion === 'All' ? 'Currently Viewing' : `${selectedRegion} Region`}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-[#138808] rounded-xs shrink-0 animate-pulse" />
            <div className="font-bold text-slate-800 text-sm font-['Outfit']">
              {hoveredState ? hoveredState.name : states.find((s) => s.id === selectedStateId)?.name || 'Tap on a state to explore'}
            </div>
            <span className="text-[11px] text-slate-400 font-semibold ml-1">
              ({states.length})
            </span>
          </div>
        </div>
      </div>

      {/* Floating Zoom Controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5 bg-white/95 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200 shadow-md">
        <button
          id="btn-map-zoom-in"
          onClick={handleZoomIn}
          className="p-2 rounded-xl text-slate-700 hover:bg-orange-50 hover:text-[#FF9933] transition-colors"
          title="Zoom in"
          aria-label="Zoom in"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          id="btn-map-zoom-out"
          onClick={handleZoomOut}
          className="p-2 rounded-xl text-slate-700 hover:bg-orange-50 hover:text-[#FF9933] transition-colors"
          title="Zoom out"
          aria-label="Zoom out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          id="btn-map-reset-zoom"
          onClick={handleResetZoom}
          className="p-2 rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-[#138808] transition-colors border-t border-slate-100"
          title="Reset map view"
          aria-label="Reset map view"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Interactive SVG Canvas */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          setIsDragging(false);
          setHoveredState(null);
        }}
        className={`w-full h-full flex items-center justify-center p-2 sm:p-6 overflow-hidden cursor-${
          isDragging ? 'grabbing' : 'grab'
        }`}
      >
        <motion.div
          animate={{
            scale: zoomLevel,
            x: panOffset.x,
            y: panOffset.y,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          className="w-full h-full max-w-[650px] max-h-[720px] flex items-center justify-center"
        >
          <svg
            viewBox="0 0 650 720"
            className="w-full h-full filter drop-shadow-md transition-all"
            style={{ touchAction: 'none' }}
          >
            {/* Defs for gradients & filters */}
            <defs>
              <linearGradient id="saffronGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF9933" />
                <stop offset="100%" stopColor="#EA580C" />
              </linearGradient>
              <linearGradient id="greenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
              <filter id="activeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#EA580C" floodOpacity="0.5" />
              </filter>
            </defs>

            {/* Ocean & Boundary Background ambient styling */}
            <g id="ocean-accents" opacity="0.4">
              <text x="70" y="580" fill="#0284C7" fontSize="11" fontWeight="700" letterSpacing="2" className="italic font-serif">
                ARABIAN SEA
              </text>
              <text x="440" y="580" fill="#0284C7" fontSize="11" fontWeight="700" letterSpacing="2" className="italic font-serif">
                BAY OF BENGAL
              </text>
              <text x="250" y="705" fill="#0284C7" fontSize="10" fontWeight="700" letterSpacing="2" className="italic font-serif">
                INDIAN OCEAN
              </text>
            </g>

            {/* Render all states */}
            {states.map((state) => {
              const isFiltered = filteredStateIds.has(state.id);
              const isSelected = selectedStateId === state.id;
              const isHovered = hoveredState?.id === state.id;
              const colors = REGION_COLORS[state.region] || REGION_COLORS['North'];

              return (
                <g
                  key={state.id}
                  id={`map-state-group-${state.shortCode.toLowerCase()}`}
                  onClick={(e) => handleStateClick(state, e)}
                  onMouseEnter={() => setHoveredState(state)}
                  onMouseLeave={() => setHoveredState(null)}
                  className="cursor-pointer transition-all duration-200"
                >
                  {/* State Boundary Path */}
                  <path
                    d={state.path}
                    fill={
                      isSelected
                        ? 'url(#saffronGlow)'
                        : isHovered
                        ? colors.hover
                        : colors.fill
                    }
                    stroke={
                      isSelected
                        ? '#000080'
                        : isHovered
                        ? '#EA580C'
                        : colors.border
                    }
                    strokeWidth={isSelected ? 2.8 : isHovered ? 2.2 : 1.2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    opacity={isFiltered ? 1 : 0.25}
                    filter={isSelected ? 'url(#activeGlow)' : undefined}
                    className="transition-colors duration-150"
                  />

                  {/* Centroid Short Code Label */}
                  {state.labelPos && (
                    <text
                      x={state.labelPos.x}
                      y={state.labelPos.y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={isSelected ? '#FFFFFF' : colors.text}
                      fontSize={isSelected ? '11' : '9.5'}
                      fontWeight="800"
                      pointerEvents="none"
                      className="transition-all select-none font-sans drop-shadow-xs"
                    >
                      {state.shortCode}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </motion.div>
      </div>

      {/* Floating Hover Tooltip on Desktop */}
      {hoveredState && (
        <div
          className="absolute z-30 pointer-events-none transition-all duration-75 bg-slate-900/95 text-white px-3.5 py-2 rounded-2xl shadow-xl border border-amber-400/50 backdrop-blur-md max-w-xs"
          style={{
            left: Math.min(Math.max(tooltipPos.x + 15, 10), (containerRef.current?.clientWidth || 300) - 200),
            top: Math.max(tooltipPos.y - 65, 15),
          }}
        >
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-sm font-bold text-amber-300 font-['Outfit']">
              {hoveredState.name}
            </span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-amber-500/30 text-amber-200 font-mono">
              {hoveredState.shortCode}
            </span>
          </div>
          <div className="text-xs text-slate-300 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Capital: <b className="text-white">{hoveredState.capital}</b></span>
          </div>
          <div className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
            <span className="text-xs">{hoveredState.famousFood.emoji}</span>
            <span className="truncate text-amber-100">{hoveredState.famousFood.name}</span>
          </div>
          <div className="text-[10px] text-amber-400/90 italic mt-1 font-semibold">
            Tap for Capital, Delicacies & Facts ✨
          </div>
        </div>
      )}

      {/* Bottom Quick-Tap Bar for Small UTs & Enclaves (Ensures pristine mobile accessibility) */}
      <div className="bg-slate-50 border-t border-slate-200 px-4 py-2.5 z-20">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
          <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-[#FF9933]" />
            Quick Tap:
          </span>
          {smallUTs.map((ut) => (
            <button
              key={ut.id}
              id={`quick-tap-btn-${ut.shortCode.toLowerCase()}`}
              onClick={(e) => handleStateClick(ut, e)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1 shrink-0 ${
                selectedStateId === ut.id
                  ? 'bg-[#138808] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-orange-50 hover:text-orange-900 border border-slate-200'
              }`}
            >
              <span>{ut.famousFood.emoji}</span>
              <span>{ut.name}</span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
