export default function ConsultantCharacter({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="rounded-3xl bg-gradient-to-br from-violet-100 to-indigo-50 p-8 shadow-[var(--shadow-soft)]">
        <svg viewBox="0 0 200 260" width="200" height="260">
          {/* Body / suit */}
          <ellipse cx="100" cy="230" rx="70" ry="20" fill="#e2e8f0" opacity="0.5" />
          <path d="M55 130 Q100 110 145 130 L155 230 Q100 240 45 230 Z" fill="#1e293b" />
          {/* Shirt */}
          <path d="M75 130 L100 160 L125 130 L120 230 L80 230 Z" fill="#f8fafc" />
          {/* Tie */}
          <path d="M95 130 L100 160 L105 130 L108 210 L100 220 L92 210 Z" fill="#f97316" />
          {/* Head */}
          <circle cx="100" cy="85" r="42" fill="#fcd9b6" />
          {/* Hair */}
          <path d="M58 75 Q100 35 142 75 Q130 55 100 50 Q70 55 58 75" fill="#334155" />
          {/* Eyes */}
          <ellipse cx="85" cy="88" rx="5" ry="6" fill="#1e293b" />
          <ellipse cx="115" cy="88" rx="5" ry="6" fill="#1e293b" />
          <circle cx="87" cy="86" r="2" fill="#fff" />
          <circle cx="117" cy="86" r="2" fill="#fff" />
          {/* Smile */}
          <path d="M88 105 Q100 115 112 105" fill="none" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
          {/* Document in hand */}
          <rect x="130" y="150" width="45" height="58" rx="4" fill="#fff" stroke="#e2e8f0" strokeWidth="2" transform="rotate(8 152 179)" />
          <line x1="138" y1="165" x2="168" y2="168" stroke="#cbd5e1" strokeWidth="2" transform="rotate(8 152 179)" />
          <line x1="138" y1="175" x2="165" y2="178" stroke="#cbd5e1" strokeWidth="2" transform="rotate(8 152 179)" />
          <line x1="138" y1="185" x2="160" y2="188" stroke="#cbd5e1" strokeWidth="2" transform="rotate(8 152 179)" />
          {/* USCIS stamp */}
          <circle cx="155" cy="195" r="10" fill="none" stroke="#5b21b6" strokeWidth="1.5" transform="rotate(8 152 179)" opacity="0.6" />
        </svg>
      </div>
    </div>
  );
}
