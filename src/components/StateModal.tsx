import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  MapPin, 
  Utensils, 
  Languages, 
  Volume2, 
  ChevronLeft, 
  ChevronRight, 
  Copy, 
  Check, 
  PartyPopper,
  Sparkles
} from 'lucide-react';
import { StateData } from '../types';
import { speakText } from '../utils/sound';
import { triggerTricolorConfetti } from '../utils/confetti';
import { TricolorRibbon } from './TricolorDecorations';

interface StateModalProps {
  state: StateData | null;
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
}

export const StateModal: React.FC<StateModalProps> = ({
  state,
  onClose,
  onSelectNext,
  onSelectPrev,
}) => {
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  if (!state) return null;

  const handleSpeak = () => {
    setIsSpeaking(true);
    const speech = `${state.name}. Capital is ${state.capital}. Famous food is ${state.famousFood.name}. Greeting: ${state.greeting.phrase}.`;
    speakText(speech);
    setTimeout(() => setIsSpeaking(false), 3000);
  };

  const handleCopyFacts = () => {
    const text = `🇮🇳 Geo Bharat - ${state.name} (${state.type})
🏛️ Capital: ${state.capital}
🍲 Famous Food: ${state.famousFood.name} (${state.famousFood.description})
🗣️ Language: ${state.primaryLanguage} (Greeting: ${state.greeting.phrase})
✨ Fun Fact: ${state.funFact}
📍 Landmark: ${state.famousLandmark}`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleConfetti = () => {
    triggerTricolorConfetti(0.5, 0.5);
  };

  return (
    <AnimatePresence>
      <div 
        id="state-detail-modal-overlay" 
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border-2 border-slate-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Tricolor Strip */}
          <TricolorRibbon className="h-2" />

          {/* Close button */}
          <button
            id="btn-close-state-modal"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* 1. Header Banner matching Professional Polish */}
            <div className="bg-white p-6 rounded-3xl border-2 border-[#138808] shadow-lg flex flex-col gap-2 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-36 h-36 bg-[#138808]/10 rounded-full pointer-events-none" />
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] uppercase font-black tracking-widest px-2.5 py-0.5 rounded-full bg-[#138808] text-white">
                  {state.type}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                  {state.region} India • {state.shortCode}
                </span>
              </div>

              <div className="flex items-baseline justify-between flex-wrap gap-2">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h2 className="text-3xl sm:text-4xl font-black text-[#138808] uppercase tracking-tighter font-['Outfit']">
                    {state.name}
                  </h2>
                  {state.nativeName && (
                    <span className="text-xl font-bold text-amber-700 font-serif">
                      {state.nativeName}
                    </span>
                  )}
                </div>

                <button
                  id="btn-pronounce-state"
                  onClick={handleSpeak}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isSpeaking 
                      ? 'bg-amber-500 text-white animate-pulse' 
                      : 'bg-[#fdf2e9] text-[#FF9933] hover:bg-orange-100 border border-[#FF9933]/30'
                  }`}
                  title="Hear pronunciation & traditional greeting"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{isSpeaking ? 'Speaking...' : 'Pronounce & Greet'}</span>
                </button>
              </div>

              <p className="text-slate-500 font-medium italic text-sm sm:text-base">
                "{state.knownAs}"
              </p>
            </div>

            {/* 2. Four Clean Stat Cards Grid (2x2) matching Professional Polish */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Capital City Card */}
              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center hover:border-slate-300 transition-colors">
                <div className="text-[#FF9933] text-3xl mb-1.5">🏛️</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Capital City</div>
                <div className="text-xl font-bold text-slate-800 font-['Outfit']">{state.capital}</div>
                <div className="text-xs text-slate-500 mt-1 line-clamp-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#FF9933] shrink-0" />
                  <span>{state.famousLandmark}</span>
                </div>
              </div>

              {/* Famous Food Card */}
              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center hover:border-slate-300 transition-colors">
                <div className="text-[#FF9933] text-3xl mb-1.5">{state.famousFood.emoji || '🍲'}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Famous Food</div>
                <div className="text-xl font-bold text-slate-800 font-['Outfit'] line-clamp-1">{state.famousFood.name}</div>
                <div className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {state.famousFood.description}
                </div>
              </div>

              {/* Language Card */}
              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center hover:border-slate-300 transition-colors">
                <div className="text-[#FF9933] text-3xl mb-1.5">🗣️</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Language</div>
                <div className="text-xl font-bold text-slate-800 font-['Outfit']">{state.primaryLanguage}</div>
                <div className="text-xs text-slate-500 mt-1">
                  Greeting: <b className="text-slate-700 font-semibold">{state.greeting.phrase}</b>
                </div>
              </div>

              {/* Emblem / Culture / Region Card */}
              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center hover:border-slate-300 transition-colors">
                <div className="text-[#FF9933] text-3xl mb-1.5">✨</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Region & Heritage</div>
                <div className="text-xl font-bold text-slate-800 font-['Outfit']">{state.region} Region</div>
                <div className="text-xs text-slate-500 mt-1">
                  "{state.greeting.meaning}"
                </div>
              </div>

              {/* 3. Fun Fact Full Width Box */}
              <div className="sm:col-span-2 bg-[#fdf2e9] p-6 rounded-3xl border border-[#FF9933]/30 shadow-inner flex gap-4 items-start">
                <div className="text-2xl mt-0.5 shrink-0">💡</div>
                <div>
                  <div className="text-[10px] text-[#FF9933] font-black uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <span>Fun Fact</span>
                    <Sparkles className="w-3 h-3 text-[#FF9933]" />
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                    {state.funFact}
                  </p>
                </div>
              </div>

            </div>

            {/* 4. Professional Polish Footer Bar */}
            <footer className="bg-slate-900 text-white p-5 rounded-3xl flex items-center justify-between border border-slate-800 gap-3 flex-wrap">
              <div className="flex items-center gap-4">
                <button
                  id="btn-prev-state"
                  onClick={onSelectPrev}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Previous State"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Territory</span>
                  <span className="text-sm font-bold text-white truncate max-w-[120px] sm:max-w-none">{state.name}</span>
                </div>

                <div className="h-8 w-px bg-slate-700 hidden sm:block" />

                <div className="flex flex-col hidden sm:flex">
                  <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Language Group</span>
                  <span className="text-sm font-bold text-white">{state.primaryLanguage}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="btn-fire-confetti"
                  onClick={handleConfetti}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-yellow-400 transition-colors"
                  title="Trigger confetti"
                >
                  <PartyPopper className="w-4 h-4" />
                </button>

                <button
                  id="btn-copy-state-fact"
                  onClick={handleCopyFacts}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    copied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  }`}
                  title="Copy facts"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Share'}</span>
                </button>

                <button
                  id="btn-next-state"
                  onClick={onSelectNext}
                  className="bg-[#138808] px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest text-white cursor-pointer hover:bg-green-700 transition-colors flex items-center gap-1 shadow-md"
                >
                  <span>Next State</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </footer>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
