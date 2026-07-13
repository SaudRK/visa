export default function AirplaneIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg viewBox="0 0 320 240" width="320" height="240" className="drop-shadow-xl animate-fly">
        {/* Boarding pass */}
        <g transform="translate(180, 120) rotate(12)">
          <rect x="0" y="0" width="120" height="70" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
          <rect x="0" y="0" width="120" height="18" rx="8" fill="#5b21b6" />
          <rect x="0" y="10" width="120" height="8" fill="#5b21b6" />
          <text x="12" y="13" fill="white" fontSize="8" fontWeight="bold">BOARDING PASS</text>
          <text x="12" y="32" fill="#64748b" fontSize="7">US VISA</text>
          <text x="12" y="48" fill="#1e1b4b" fontSize="10" fontWeight="bold">JFK → LAX</text>
          <line x1="12" y1="55" x2="108" y2="55" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4" />
          <text x="12" y="64" fill="#64748b" fontSize="6">SEAT 12A · GATE B4</text>
        </g>
        {/* Airplane body */}
        <g transform="translate(20, 40)">
          <ellipse cx="100" cy="60" rx="90" ry="18" fill="#e2e8f0" opacity="0.5" />
          <path
            d="M20 60 L180 60 L200 50 L210 60 L200 70 L180 60 Z"
            fill="#f1f5f9"
            stroke="#cbd5e1"
            strokeWidth="2"
          />
          <path d="M60 60 L40 30 L55 60 Z" fill="#94a3b8" />
          <path d="M60 60 L40 90 L55 60 Z" fill="#94a3b8" />
          <path d="M130 60 L150 45 L145 60 Z" fill="#64748b" />
          <path d="M130 60 L150 75 L145 60 Z" fill="#64748b" />
          {/* Tail */}
          <path d="M20 60 L5 45 L15 60 L5 75 Z" fill="#5b21b6" />
          {/* Windows */}
          {[0, 1, 2, 3, 4].map((i) => (
            <circle key={i} cx={70 + i * 18} cy="55" r="4" fill="#7c3aed" opacity="0.6" />
          ))}
          {/* Nose accent */}
          <path d="M195 60 L210 60 L205 55 L205 65 Z" fill="#5b21b6" />
        </g>
      </svg>
    </div>
  );
}
