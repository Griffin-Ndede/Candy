import { useCallback, useEffect, useRef, useState } from "react";

function makeHearts(count = 40) {
  return Array.from({ length: count }, (_, index) => ({
    id: `${Date.now()}-${index}-${Math.random()}`,
    left: Math.random() * 100,
    delay: Math.random() * 1.8,
    duration: 4 + Math.random() * 5,
    size: 12 + Math.random() * 22,
    drift: -80 + Math.random() * 160,
    rotation: -35 + Math.random() * 70,
    symbol: ["♥", "♡", "❤"][Math.floor(Math.random() * 3)],
  }));
}

export function useHeartConfetti() {
  const [hearts, setHearts] = useState([]);
  const timer = useRef(null);

  const trigger = useCallback(() => {
    window.clearTimeout(timer.current);
    setHearts(makeHearts(40));
    timer.current = window.setTimeout(() => setHearts([]), 9000);
  }, []);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return { hearts, trigger };
}
