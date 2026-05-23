const ArtDecoBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at top center, hsl(var(--primary) / 0.04) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, hsl(var(--primary) / 0.03) 0%, transparent 40%),
            radial-gradient(ellipse at bottom left, hsl(var(--accent) / 0.02) 0%, transparent 40%)
          `
        }}
      />

      {/* Art Deco Fan Pattern - Top */}
      <svg 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.03]"
        viewBox="0 0 800 400"
        fill="none"
      >
        {/* Radiating lines from center */}
        {Array.from({ length: 15 }).map((_, i) => {
          const angle = -90 + (i - 7) * 12;
          const x2 = 400 + Math.cos((angle * Math.PI) / 180) * 380;
          const y2 = 400 + Math.sin((angle * Math.PI) / 180) * 380;
          return (
            <line
              key={i}
              x1="400"
              y1="400"
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary"
            />
          );
        })}
        {/* Concentric arcs */}
        {[100, 180, 260, 340].map((r, i) => (
          <path
            key={i}
            d={`M ${400 - r} 400 A ${r} ${r} 0 0 1 ${400 + r} 400`}
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-primary"
          />
        ))}
      </svg>

      {/* Geometric diamond pattern - scattered */}
      <div className="absolute inset-0">
        {/* Top left diamond cluster */}
        <svg className="absolute top-20 left-10 w-16 h-16 opacity-[0.04] text-primary" viewBox="0 0 40 40">
          <rect x="20" y="5" width="15" height="15" transform="rotate(45 20 20)" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <rect x="20" y="10" width="10" height="10" transform="rotate(45 20 20)" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
        
        {/* Top right diamond */}
        <svg className="absolute top-32 right-20 w-12 h-12 opacity-[0.03] text-primary" viewBox="0 0 40 40">
          <rect x="20" y="8" width="12" height="12" transform="rotate(45 20 20)" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
        
        {/* Mid left geometric */}
        <svg className="absolute top-1/3 left-8 w-20 h-20 opacity-[0.025] text-primary" viewBox="0 0 60 60">
          <polygon points="30,5 55,30 30,55 5,30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <polygon points="30,15 45,30 30,45 15,30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="30" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>

        {/* Right side chevrons */}
        <svg className="absolute top-1/2 right-6 w-8 h-32 opacity-[0.03] text-primary" viewBox="0 0 20 80">
          {[0, 20, 40, 60].map((y) => (
            <polyline key={y} points={`2,${y + 10} 10,${y} 18,${y + 10}`} fill="none" stroke="currentColor" strokeWidth="0.5"/>
          ))}
        </svg>

        {/* Bottom left fan */}
        <svg className="absolute bottom-40 left-16 w-24 h-24 opacity-[0.03] text-primary" viewBox="0 0 60 60">
          {[0, 15, 30, 45, 60, 75, 90].map((angle) => (
            <line
              key={angle}
              x1="5"
              y1="55"
              x2={5 + Math.cos(((angle - 45) * Math.PI) / 180) * 50}
              y2={55 + Math.sin(((angle - 45) * Math.PI) / 180) * -50}
              stroke="currentColor"
              strokeWidth="0.5"
            />
          ))}
          <path d="M 5 55 A 40 40 0 0 1 45 15" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>

        {/* Bottom right geometric */}
        <svg className="absolute bottom-20 right-12 w-16 h-16 opacity-[0.03] text-primary" viewBox="0 0 50 50">
          <rect x="5" y="5" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <rect x="12" y="12" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <rect x="19" y="19" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* Vertical decorative lines */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary/[0.06] to-transparent" />
      <div className="absolute right-8 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent" />

      {/* Horizontal accent lines */}
      <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/[0.03] to-transparent" />
      <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/[0.02] to-transparent" />

      {/* Corner ornaments */}
      <svg className="absolute top-4 left-4 w-12 h-12 opacity-[0.05] text-primary" viewBox="0 0 40 40">
        <path d="M 0 40 L 0 0 L 40 0" fill="none" stroke="currentColor" strokeWidth="1"/>
        <path d="M 5 35 L 5 5 L 35 5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="5" cy="5" r="2" fill="currentColor"/>
      </svg>
      
      <svg className="absolute top-4 right-4 w-12 h-12 opacity-[0.05] text-primary" viewBox="0 0 40 40">
        <path d="M 40 40 L 40 0 L 0 0" fill="none" stroke="currentColor" strokeWidth="1"/>
        <path d="M 35 35 L 35 5 L 5 5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="35" cy="5" r="2" fill="currentColor"/>
      </svg>
      
      <svg className="absolute bottom-4 left-4 w-12 h-12 opacity-[0.05] text-primary" viewBox="0 0 40 40">
        <path d="M 0 0 L 0 40 L 40 40" fill="none" stroke="currentColor" strokeWidth="1"/>
        <path d="M 5 5 L 5 35 L 35 35" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="5" cy="35" r="2" fill="currentColor"/>
      </svg>
      
      <svg className="absolute bottom-4 right-4 w-12 h-12 opacity-[0.05] text-primary" viewBox="0 0 40 40">
        <path d="M 40 0 L 40 40 L 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
        <path d="M 35 5 L 35 35 L 5 35" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="35" cy="35" r="2" fill="currentColor"/>
      </svg>

      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default ArtDecoBackground;
