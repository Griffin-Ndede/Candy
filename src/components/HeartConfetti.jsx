export default function HeartConfetti({ pieces }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-[200] overflow-hidden" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute -top-[50px] animate-fall text-[#a0673c] [text-shadow:0_3px_8px_rgb(127_85_57/10%)]"
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
