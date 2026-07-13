interface HotAirBalloonProps {
  size?: "lg" | "sm";
  className?: string;
}

export default function HotAirBalloon({
  size = "lg",
  className = "",
}: HotAirBalloonProps) {
  const scale = size === "lg" ? 1 : 0.55;

  return (
    <div
      className={`relative ${className}`}
      style={{ transform: `scale(${scale})`, transformOrigin: "bottom center" }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 280" width="200" height="280" className="drop-shadow-2xl">
        <defs>
          <linearGradient id="balloonShine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <clipPath id="balloonClip">
            <ellipse cx="100" cy="90" rx="75" ry="85" />
          </clipPath>
        </defs>
        <ellipse cx="100" cy="90" rx="75" ry="85" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
        <g clipPath="url(#balloonClip)">
          <rect x="25" y="20" width="150" height="90" fill="#B22234" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} y={20 + i * 18} width="150" height="9" fill="#fff" />
          ))}
          <rect x="25" y="20" width="60" height="52" fill="#3C3B6E" />
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3, 4].map((col) => (
              <circle
                key={`${row}-${col}`}
                cx={33 + col * 12 + (row % 2 ? 6 : 0)}
                cy={28 + row * 12}
                r="2.5"
                fill="#fff"
              />
            ))
          )}
        </g>
        <ellipse cx="100" cy="90" rx="75" ry="85" fill="url(#balloonShine)" />
        <line x1="60" y1="170" x2="85" y2="210" stroke="#94a3b8" strokeWidth="2" />
        <line x1="100" y1="175" x2="100" y2="215" stroke="#94a3b8" strokeWidth="2" />
        <line x1="140" y1="170" x2="115" y2="210" stroke="#94a3b8" strokeWidth="2" />
        <rect x="78" y="215" width="44" height="32" rx="6" fill="#92400e" />
        <rect x="78" y="215" width="44" height="8" rx="4" fill="#b45309" />
      </svg>
    </div>
  );
}
