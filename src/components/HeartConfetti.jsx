export default function HeartConfetti({ pieces }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute -top-12 animate-fall text-saddle"
          // random per-heart values must stay inline
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            fontSize: `${p.size}px`,
            "--drift": `${p.drift}px`,
            "--heart-rotation": `${p.rotation}deg`,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
