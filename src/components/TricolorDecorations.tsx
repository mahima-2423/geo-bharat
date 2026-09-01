import React from 'react';

export const AshokaChakra: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => {
  const spokes = 24;
  const radius = 18;
  const cx = 24;
  const cy = 24;

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`animate-spin-slow text-[#000080] ${className}`}
      aria-label="Ashoka Chakra"
    >
      <circle cx={cx} cy={cy} r="22" stroke="currentColor" strokeWidth="2.5" />
      <circle cx={cx} cy={cy} r="4" fill="currentColor" />
      {Array.from({ length: spokes }).map((_, index) => {
        const angle = (index * 360) / spokes;
        const rad = (angle * Math.PI) / 180;
        const x2 = cx + radius * Math.cos(rad);
        const y2 = cy + radius * Math.sin(rad);
        return (
          <line
            key={index}
            x1={cx}
            y1={cy}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
};

export const TricolorRibbon: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full flex h-1.5 overflow-hidden ${className}`}>
      <div className="flex-1 bg-[#FF9933]" />
      <div className="flex-1 bg-white" />
      <div className="flex-1 bg-[#138808]" />
    </div>
  );
};
