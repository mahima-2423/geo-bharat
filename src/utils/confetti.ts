import confetti from 'canvas-confetti';

export const triggerTricolorConfetti = (originX = 0.5, originY = 0.6) => {
  const tricolorColors = ['#FF9933', '#FFFFFF', '#138808', '#000080', '#FFD700'];

  // Left burst
  confetti({
    particleCount: 40,
    angle: 60,
    spread: 55,
    origin: { x: Math.max(0.1, originX - 0.1), y: originY },
    colors: tricolorColors,
    ticks: 200,
    gravity: 1.2,
    scalar: 1.1,
    shapes: ['square', 'circle'],
  });

  // Right burst
  confetti({
    particleCount: 40,
    angle: 120,
    spread: 55,
    origin: { x: Math.min(0.9, originX + 0.1), y: originY },
    colors: tricolorColors,
    ticks: 200,
    gravity: 1.2,
    scalar: 1.1,
    shapes: ['square', 'circle'],
  });

  // Center star burst
  setTimeout(() => {
    confetti({
      particleCount: 25,
      spread: 100,
      origin: { x: originX, y: originY },
      colors: ['#FF9933', '#138808', '#000080'],
      ticks: 150,
      gravity: 0.8,
      scalar: 1.3,
    });
  }, 100);
};

export const triggerGrandCelebration = () => {
  const end = Date.now() + 1.5 * 1000;
  const colors = ['#FF9933', '#FFFFFF', '#138808', '#000080', '#FFA000'];

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.7 },
      colors: colors,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.7 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
