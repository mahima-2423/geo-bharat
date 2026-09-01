import React from 'react';
import { Search, Sparkles, ListFilter, MapPin, Shuffle } from 'lucide-react';
import { Region } from '../types';
import { AshokaChakra } from './TricolorDecorations';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedRegion: Region;
  onSelectRegion: (region: Region) => void;
  onSurpriseMe: () => void;
  onOpenQuiz: () => void;
  onToggleList: () => void;
  isListOpen: boolean;
  totalStatesCount: number;
  filteredCount: number;
}

const REGIONS: Region[] = [
  'All',
  'North',
  'South',
  'West',
  'East',
  'Central',
  'North East',
  'Islands & UTs',
];

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  selectedRegion,
  onSelectRegion,
  onSurpriseMe,
  onOpenQuiz,
  onToggleList,
  isListOpen,
  totalStatesCount,
  filteredCount,
}) => {
  return (
    <header className="bg-[#FF9933] text-white shadow-md shrink-0 border-b border-orange-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Logo & Branding matching Professional Polish */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="bg-white rounded-full p-2 flex items-center justify-center shadow-inner shrink-0">
                <AshokaChakra size={28} className="text-[#000080]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight uppercase text-white font-['Outfit'] drop-shadow-xs">
                    Geo Bharat
                  </h1>
                  <span className="text-[10px] uppercase font-black tracking-widest px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-xs border border-white/30">
                    Interactive Map
                  </span>
                </div>
                <p className="text-xs text-orange-100 font-medium hidden sm:block">
                  Discover 28 States & 8 Union Territories • Capitals, Cuisines, Languages & Facts
                </p>
              </div>
            </div>

            {/* Quick Territory Counters on Header */}
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-white/15 px-3 py-1.5 rounded-xl border border-white/20 shrink-0">
              <span className="text-white">States: 28</span>
              <span className="text-white/60">|</span>
              <span className="text-emerald-200">UTs: 8</span>
            </div>
          </div>

          {/* Search bar & action buttons */}
          <div className="flex items-center gap-2.5 flex-1 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="search-state-input"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search state, capital, food (e.g. Jaipur, Biryani, Dosa)..."
                className="w-full pl-10 pr-8 py-2.5 bg-white text-slate-900 placeholder-slate-400 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#FF9933] shadow-md transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 p-0.5 font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                id="desktop-btn-random"
                onClick={onSurpriseMe}
                className="px-3.5 py-2.5 rounded-2xl bg-white text-orange-800 text-xs font-bold shadow-md hover:bg-orange-50 transition-all flex items-center gap-1.5 shrink-0 active:scale-95"
                title="Explore a random state"
              >
                <Shuffle className="w-3.5 h-3.5 text-orange-600" />
                <span className="hidden sm:inline">Surprise State</span>
                <span className="sm:hidden">Random</span>
              </button>

              <button
                id="desktop-btn-quiz"
                onClick={onOpenQuiz}
                className="px-3.5 py-2.5 rounded-2xl bg-[#138808] text-white text-xs font-bold shadow-md hover:bg-green-700 transition-all flex items-center gap-1.5 shrink-0 active:scale-95 border border-green-500"
                title="Play Bharat Quiz"
              >
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                <span>Quiz</span>
              </button>

              <button
                id="desktop-btn-toggle-list"
                onClick={onToggleList}
                className={`px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 shadow-md ${
                  isListOpen
                    ? 'bg-slate-900 text-white'
                    : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                }`}
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{isListOpen ? 'Show Map' : 'List View'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Region filter chips */}
        <div className="mt-3.5 pt-3 border-t border-white/20 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-orange-100 font-bold uppercase tracking-wider text-[11px] shrink-0 flex items-center gap-1 pl-0.5">
            <MapPin className="w-3 h-3 text-white" />
            Region:
          </span>
          {REGIONS.map((region) => {
            const isSelected = selectedRegion === region;
            return (
              <button
                key={region}
                id={`filter-region-${region.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => onSelectRegion(region)}
                className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-bold text-xs transition-all ${
                  isSelected
                    ? 'bg-white text-slate-900 shadow-md scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30 border border-white/20'
                }`}
              >
                {region}
              </button>
            );
          })}

          <span className="ml-auto text-[11px] font-bold text-white shrink-0 bg-white/20 px-2.5 py-1 rounded-xl border border-white/20">
            {filteredCount} / {totalStatesCount}
          </span>
        </div>
      </div>
    </header>
  );
};
