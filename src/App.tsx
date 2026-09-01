import React, { useState, useMemo } from 'react';
import { ALL_STATES_DATA } from './data/mapPaths';
import { StateData, Region } from './types';
import { Header } from './components/Header';
import { IndiaMap } from './components/IndiaMap';
import { StateModal } from './components/StateModal';
import { StateGridDrawer } from './components/StateGridDrawer';
import { QuizModal } from './components/QuizModal';
import { triggerTricolorConfetti } from './utils/confetti';
import { AshokaChakra, TricolorRibbon } from './components/TricolorDecorations';
import { Sparkles, MapPin, Utensils, BookOpen, Compass, Award } from 'lucide-react';

export default function App() {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);

  // Filtered states based on region and search query
  const filteredStates = useMemo(() => {
    return ALL_STATES_DATA.filter((state) => {
      const matchesRegion =
        selectedRegion === 'All' || state.region === selectedRegion;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesRegion;

      const matchesSearch =
        state.name.toLowerCase().includes(query) ||
        state.capital.toLowerCase().includes(query) ||
        state.famousFood.name.toLowerCase().includes(query) ||
        state.primaryLanguage.toLowerCase().includes(query) ||
        state.shortCode.toLowerCase().includes(query) ||
        state.funFact.toLowerCase().includes(query);

      return matchesRegion && matchesSearch;
    });
  }, [selectedRegion, searchQuery]);

  // Handle selecting a state
  const handleSelectState = (state: StateData) => {
    setSelectedState(state);
  };

  // Next / Previous state navigation within the list
  const handleSelectNextState = () => {
    if (!selectedState) return;
    const currentIndex = ALL_STATES_DATA.findIndex((s) => s.id === selectedState.id);
    const nextIndex = (currentIndex + 1) % ALL_STATES_DATA.length;
    setSelectedState(ALL_STATES_DATA[nextIndex]);
    triggerTricolorConfetti(0.5, 0.4);
  };

  const handleSelectPrevState = () => {
    if (!selectedState) return;
    const currentIndex = ALL_STATES_DATA.findIndex((s) => s.id === selectedState.id);
    const prevIndex = (currentIndex - 1 + ALL_STATES_DATA.length) % ALL_STATES_DATA.length;
    setSelectedState(ALL_STATES_DATA[prevIndex]);
    triggerTricolorConfetti(0.5, 0.4);
  };

  // Surprise / Random state picker
  const handleSurpriseMe = () => {
    const randomState = ALL_STATES_DATA[Math.floor(Math.random() * ALL_STATES_DATA.length)];
    setSelectedState(randomState);
    triggerTricolorConfetti(0.5, 0.4);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* App Header */}
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

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        
        {/* Quick Informational Hero Pill (Clean & Polished) */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-3xl border-2 border-slate-200 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="hidden sm:flex p-2.5 rounded-2xl bg-[#FF9933]/15 text-[#FF9933]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-black text-slate-900 font-['Outfit'] uppercase tracking-tight">
                Explore the Tapestry of India • 28 States & 8 Union Territories
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Tap any state on the map to explore its <span className="font-bold text-[#FF9933]">Capital</span>, <span className="font-bold text-orange-600">Famous Food</span>, <span className="font-bold text-[#138808]">Language</span> & <span className="font-bold text-slate-800">Fun Fact</span> with tricolor celebrations!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-[#FF9933]" />
              <span>28 States</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-[#138808]">
              <Award className="w-3.5 h-3.5 text-[#138808]" />
              <span>8 UTs</span>
            </div>
          </div>
        </div>

        {/* View Layout: Grid List or Interactive SVG Map */}
        <div className="w-full flex-1">
          {isListOpen ? (
            <StateGridDrawer
              states={filteredStates}
              onSelectState={handleSelectState}
              onClose={() => setIsListOpen(false)}
            />
          ) : (
            <IndiaMap
              states={filteredStates}
              selectedStateId={selectedState?.id || null}
              selectedRegion={selectedRegion}
              onSelectState={handleSelectState}
              searchQuery={searchQuery}
            />
          )}
        </div>

        {/* Informative Stats & Cultural Diversity Cards (Professional Polish) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5 hover:border-slate-300 transition-colors">
            <div className="p-3 rounded-2xl bg-orange-50 text-[#FF9933] text-2xl">
              🏛️
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Territories</p>
              <p className="text-base font-black text-slate-900 font-['Outfit']">28 States & 8 UTs</p>
              <p className="text-xs text-slate-500 font-medium">From Kashmir to Kanyakumari</p>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5 hover:border-slate-300 transition-colors">
            <div className="p-3 rounded-2xl bg-orange-50 text-[#FF9933] text-2xl">
              🍲
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Signature Foods</p>
              <p className="text-base font-black text-slate-900 font-['Outfit']">36+ Delicacies</p>
              <p className="text-xs text-slate-500 font-medium">Biryani, Litti, Dosa, Dhokla</p>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5 hover:border-slate-300 transition-colors">
            <div className="p-3 rounded-2xl bg-emerald-50 text-[#138808] text-2xl">
              🗣️
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Languages</p>
              <p className="text-base font-black text-slate-900 font-['Outfit']">22 Scheduled Tongues</p>
              <p className="text-xs text-slate-500 font-medium">With Native Greetings & Audio</p>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5 hover:border-slate-300 transition-colors">
            <div className="p-3 rounded-2xl bg-amber-50 text-[#FF9933] text-2xl">
              💡
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Cultural Facts</p>
              <p className="text-base font-black text-slate-900 font-['Outfit']">100% Curated Trivia</p>
              <p className="text-xs text-slate-500 font-medium">Interactive Bharat Quiz Game</p>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="mt-auto bg-white border-t border-slate-200 py-4 px-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <AshokaChakra size={18} className="text-[#000080]" />
            <span className="font-black text-slate-900 uppercase tracking-tight font-['Outfit']">Geo Bharat</span>
            <span>• Celebrating India’s Incredible Cultural Diversity & Geography</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400 font-bold uppercase tracking-wider text-[11px]">
            <span className="text-[#FF9933]">Saffron</span>
            <span>•</span>
            <span className="text-slate-400">White</span>
            <span>•</span>
            <span className="text-[#138808]">Green</span>
            <span className="text-sm">🇮🇳</span>
          </div>
        </div>
      </footer>

      {/* Bottom Tricolor Accent Bar */}
      <div className="h-3 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] shrink-0 border-t border-slate-200" />

      {/* State Detail Modal (On Tap) */}
      <StateModal
        state={selectedState}
        onClose={() => setSelectedState(null)}
        onSelectNext={handleSelectNextState}
        onSelectPrev={handleSelectPrevState}
      />

      {/* Bharat Quiz Modal */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />
    </div>
  );
}
