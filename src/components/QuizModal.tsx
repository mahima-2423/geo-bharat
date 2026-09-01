import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Trophy, CheckCircle2, XCircle, RotateCcw, ArrowRight } from 'lucide-react';
import { BHARAT_QUIZ_QUESTIONS } from '../data/quizData';
import { triggerTricolorConfetti, triggerGrandCelebration } from '../utils/confetti';
import { TricolorRibbon, AshokaChakra } from './TricolorDecorations';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  if (!isOpen) return null;

  const currentQ = BHARAT_QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (opt: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(opt);
    setIsAnswerSubmitted(true);

    if (opt === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
      triggerTricolorConfetti(0.5, 0.4);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < BHARAT_QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizComplete(true);
      triggerGrandCelebration();
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizComplete(false);
  };

  return (
    <AnimatePresence>
      <div 
        id="quiz-modal-overlay" 
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-slate-200"
          onClick={(e) => e.stopPropagation()}
        >
          <TricolorRibbon className="h-2" />

          {/* Header */}
          <div className="px-6 py-4 bg-[#FF9933] text-white flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1.5 flex items-center justify-center shadow-inner">
                <AshokaChakra size={22} className="text-[#000080]" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white font-['Outfit'] uppercase tracking-tight">
                  Geo Bharat Quiz
                </h3>
                <p className="text-xs text-orange-100 font-medium">
                  Test your knowledge of Indian states, capitals, cuisines & facts
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            {!isQuizComplete ? (
              <div className="space-y-4">
                {/* Progress Bar */}
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                  <span>Question {currentIdx + 1} of {BHARAT_QUIZ_QUESTIONS.length}</span>
                  <span className="text-[#138808] font-black uppercase">Score: {score}</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200">
                  <div 
                    className="bg-gradient-to-r from-[#FF9933] to-[#138808] h-full transition-all duration-300 rounded-full"
                    style={{ width: `${((currentIdx + 1) / BHARAT_QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>

                {/* Question Card */}
                <div className="p-5 rounded-3xl bg-slate-50 border-2 border-slate-200">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FF9933] mb-1 block">
                    {currentQ.type.toUpperCase()} CHALLENGE
                  </span>
                  <h4 className="text-base font-bold text-slate-900 font-['Outfit'] leading-snug">
                    {currentQ.question}
                  </h4>
                </div>

                {/* Options */}
                <div className="space-y-2.5">
                  {currentQ.options.map((option, idx) => {
                    const isSelected = selectedOption === option;
                    const isCorrect = option === currentQ.correctAnswer;
                    
                    let btnStyle = "bg-white border-slate-200 text-slate-800 hover:border-slate-400 hover:bg-slate-50";
                    if (isAnswerSubmitted) {
                      if (isCorrect) {
                        btnStyle = "bg-emerald-50 border-2 border-[#138808] text-emerald-950 font-bold shadow-xs";
                      } else if (isSelected && !isCorrect) {
                        btnStyle = "bg-red-50 border-2 border-red-500 text-red-950 font-bold";
                      } else {
                        btnStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(option)}
                        disabled={isAnswerSubmitted}
                        className={`w-full p-3.5 rounded-2xl border text-left text-sm font-medium transition-all flex items-center justify-between ${btnStyle}`}
                      >
                        <span>{option}</span>
                        {isAnswerSubmitted && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-[#138808] shrink-0" />
                        )}
                        {isAnswerSubmitted && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation feedback */}
                {isAnswerSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-3xl bg-[#fdf2e9] border border-[#FF9933]/30 text-xs text-slate-800 space-y-3"
                  >
                    <p className="font-medium leading-relaxed">{currentQ.explanation}</p>
                    <button
                      onClick={handleNext}
                      className="w-full py-3 rounded-2xl bg-[#138808] text-white font-black text-xs uppercase tracking-widest hover:bg-green-700 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{currentIdx + 1 === BHARAT_QUIZ_QUESTIONS.length ? 'View Results' : 'Next Question'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              /* Quiz Finished Summary */
              <div className="text-center py-6 space-y-5">
                <div className="w-20 h-20 mx-auto rounded-full bg-slate-900 text-white p-4 shadow-xl flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-yellow-400" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900 font-['Outfit'] uppercase tracking-tight">
                    {score >= 8 ? 'Shaandaar! Master of Bharat! 🇮🇳' : score >= 5 ? 'Great Knowledge! 👍' : 'Good Effort! Keep Exploring! 🚀'}
                  </h4>
                  <p className="text-sm text-slate-600 mt-1 font-medium">
                    You scored <b className="text-[#138808] text-lg font-black">{score}</b> out of <b>{BHARAT_QUIZ_QUESTIONS.length}</b>!
                  </p>
                </div>

                <div className="flex gap-2.5 justify-center pt-2">
                  <button
                    onClick={handleRestart}
                    className="px-5 py-3 rounded-2xl bg-[#138808] hover:bg-green-700 text-white font-black uppercase tracking-wider text-xs shadow-md transition-colors flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Play Again</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black uppercase tracking-wider text-xs transition-colors"
                  >
                    Explore Map
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
