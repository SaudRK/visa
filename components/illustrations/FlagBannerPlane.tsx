import UsFlag from "./UsFlag";

export default function FlagBannerPlane({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center gap-4 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 80 60" width="80" height="60" className="shrink-0 drop-shadow-md">
        <ellipse cx="40" cy="50" rx="30" ry="6" fill="#e2e8f0" opacity="0.5" />
        <path d="M10 35 L70 35 L75 30 L78 35 L75 40 L70 35 Z" fill="#94a3b8" />
        <path d="M15 35 L5 25 L12 35 L5 45 Z" fill="#64748b" />
        <circle cx="72" cy="35" r="8" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
        <line x1="72" y1="35" x2="60" y2="35" stroke="#64748b" strokeWidth="2" />
        {[0, 1, 2].map((i) => (
          <line key={i} x1="60" y1="35" x2="55" y2={28 + i * 7} stroke="#64748b" strokeWidth="1.5" />
        ))}
      </svg>
      <div className="relative overflow-hidden rounded-lg shadow-lg animate-float-slow">
        <UsFlag width={180} height={108} />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
      </div>
    </div>
  );
}
