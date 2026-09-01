import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Utensils, Languages, ChevronRight, X } from 'lucide-react';
import { StateData } from '../types';
import { triggerTricolorConfetti } from '../utils/confetti';

interface StateGridDrawerProps {
  states: StateData[];
  onSelectState: (state: StateData) => void;
  onClose: () => void;
}

export const StateGridDrawer: React.FC<StateGridDrawerProps> = ({
  states,
  onSelectState,
  onClose,
}) => {
  const handleItemClick = (state: StateData) => {
    triggerTricolorConfetti(0.5, 0.5);
    onSelectState(state);
  };

  return (
    <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl p-5 sm:p-7 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h2 className="text-2xl font-black text-slate-900 font-['Outfit'] uppercase tracking-tight">
              All States & Union Territories
            </h2>
            <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#138808] text-white">
              {states.length} listed
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Tap any card to inspect its capital, famous cuisine, official language, and fun fact.
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-2xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          title="Return to Map"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Grid of State Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto pr-1">
        {states.map((state) => (
          <motion.div
            key={state.id}
            id={`state-card-item-${state.shortCode.toLowerCase()}`}
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleItemClick(state)}
            className="p-4 rounded-3xl bg-white border border-slate-200 hover:border-[#138808] hover:shadow-md cursor-pointer transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-mono font-black px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700">
                    {state.shortCode}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {state.region}
                  </span>
                </div>
                <span className="text-2xl group-hover:scale-125 transition-transform">
                  {state.famousFood.emoji}
                </span>
              </div>

              <h3 className="text-lg font-black text-slate-900 group-hover:text-[#138808] transition-colors font-['Outfit']">
                {state.name}
              </h3>

              <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="text-[#FF9933]">🏛️</span>
                  <span className="truncate">Capital: <b className="text-slate-800 font-bold">{state.capital}</b></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF9933]">🍲</span>
                  <span className="truncate">Food: <b className="text-slate-800 font-bold">{state.famousFood.name}</b></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF9933]">🗣️</span>
                  <span className="truncate">Language: <b className="text-slate-800 font-bold">{state.primaryLanguage}</b></span>
                </div>
              </div>
            </div>

            <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#138808] group-hover:text-green-700">
              <span className="truncate italic font-normal text-slate-400 line-clamp-1 text-[11px]">
                "{state.greeting.phrase}"
              </span>
              <span className="flex items-center uppercase text-[10px] tracking-wider font-black">
                Explore <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
