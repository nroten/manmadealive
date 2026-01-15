// Rugged masculine background texture components

// Topography/Terrain Lines Pattern
export const TopographyPattern = ({ className = "" }: { className?: string }) => (
  <svg 
    className={`absolute inset-0 w-full h-full ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="topo-lines" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
        {/* Terrain contour lines */}
        <path 
          d="M0 50 Q50 30 100 50 T200 50" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5"
          opacity="0.15"
        />
        <path 
          d="M0 80 Q60 60 120 85 T200 75" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5"
          opacity="0.1"
        />
        <path 
          d="M0 120 Q40 100 80 125 T160 110 T200 120" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5"
          opacity="0.12"
        />
        <path 
          d="M0 160 Q70 140 140 165 T200 155" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5"
          opacity="0.08"
        />
        <path 
          d="M0 190 Q50 175 100 195 T200 185" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5"
          opacity="0.1"
        />
        {/* Elevation markers */}
        <circle cx="45" cy="45" r="1" fill="currentColor" opacity="0.1" />
        <circle cx="150" cy="100" r="1.5" fill="currentColor" opacity="0.08" />
        <circle cx="80" cy="160" r="1" fill="currentColor" opacity="0.1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#topo-lines)" />
  </svg>
);

// Kevlar/Carbon Fiber Weave Pattern
export const KevlarPattern = ({ className = "" }: { className?: string }) => (
  <svg 
    className={`absolute inset-0 w-full h-full ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="kevlar-weave" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
        {/* Diagonal weave pattern */}
        <rect x="0" y="0" width="8" height="8" fill="currentColor" opacity="0.03" />
        <rect x="8" y="8" width="8" height="8" fill="currentColor" opacity="0.03" />
        <rect x="0" y="8" width="8" height="8" fill="currentColor" opacity="0.015" />
        <rect x="8" y="0" width="8" height="8" fill="currentColor" opacity="0.015" />
        {/* Cross-hatch overlay */}
        <line x1="0" y1="0" x2="16" y2="16" stroke="currentColor" strokeWidth="0.3" opacity="0.05" />
        <line x1="16" y1="0" x2="0" y2="16" stroke="currentColor" strokeWidth="0.3" opacity="0.05" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#kevlar-weave)" />
  </svg>
);

// Iron/Metal Brushed Texture
export const IronTexture = ({ className = "" }: { className?: string }) => (
  <svg 
    className={`absolute inset-0 w-full h-full ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="iron-brush" x="0" y="0" width="100" height="4" patternUnits="userSpaceOnUse">
        {/* Horizontal brushed metal lines */}
        <line x1="0" y1="1" x2="100" y2="1" stroke="currentColor" strokeWidth="0.3" opacity="0.06" />
        <line x1="5" y1="2" x2="95" y2="2" stroke="currentColor" strokeWidth="0.2" opacity="0.04" />
        <line x1="10" y1="3" x2="85" y2="3" stroke="currentColor" strokeWidth="0.4" opacity="0.03" />
      </pattern>
      {/* Add some rivets/bolts */}
      <pattern id="iron-rivets" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.05" />
        <circle cx="140" cy="140" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        <circle cx="140" cy="140" r="1.5" fill="currentColor" opacity="0.05" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#iron-brush)" />
    <rect width="100%" height="100%" fill="url(#iron-rivets)" />
  </svg>
);

// Wood Grain Pattern
export const WoodGrainPattern = ({ className = "" }: { className?: string }) => (
  <svg 
    className={`absolute inset-0 w-full h-full ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="wood-grain" x="0" y="0" width="300" height="50" patternUnits="userSpaceOnUse">
        {/* Wood grain lines - flowing, organic */}
        <path 
          d="M0 5 Q75 2 150 8 T300 5" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.6"
          opacity="0.06"
        />
        <path 
          d="M0 15 Q100 12 200 18 T300 14" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.4"
          opacity="0.04"
        />
        <path 
          d="M0 25 Q50 22 100 27 T200 24 T300 26" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5"
          opacity="0.05"
        />
        <path 
          d="M0 35 Q80 32 160 38 T300 34" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.3"
          opacity="0.04"
        />
        <path 
          d="M0 45 Q120 42 240 48 T300 44" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5"
          opacity="0.05"
        />
        {/* Knots */}
        <ellipse cx="250" cy="25" rx="8" ry="4" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.06" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#wood-grain)" />
  </svg>
);

// Grid/Technical Blueprint Pattern
export const BlueprintGrid = ({ className = "" }: { className?: string }) => (
  <svg 
    className={`absolute inset-0 w-full h-full ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="blueprint-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
        {/* Main grid */}
        <rect width="50" height="50" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.08" />
        {/* Sub grid */}
        <line x1="25" y1="0" x2="25" y2="50" stroke="currentColor" strokeWidth="0.15" opacity="0.05" />
        <line x1="0" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="0.15" opacity="0.05" />
        {/* Corner markers */}
        <rect x="0" y="0" width="3" height="3" fill="currentColor" opacity="0.04" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
  </svg>
);

// Scratched Metal Overlay
export const ScratchedMetal = ({ className = "" }: { className?: string }) => (
  <svg 
    className={`absolute inset-0 w-full h-full ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="scratches" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
        {/* Random scratch marks */}
        <line x1="20" y1="10" x2="45" y2="35" stroke="currentColor" strokeWidth="0.3" opacity="0.06" />
        <line x1="80" y1="50" x2="95" y2="48" stroke="currentColor" strokeWidth="0.2" opacity="0.04" />
        <line x1="150" y1="30" x2="180" y2="60" stroke="currentColor" strokeWidth="0.25" opacity="0.05" />
        <line x1="30" y1="100" x2="60" y2="95" stroke="currentColor" strokeWidth="0.3" opacity="0.04" />
        <line x1="120" y1="120" x2="140" y2="150" stroke="currentColor" strokeWidth="0.2" opacity="0.05" />
        <line x1="170" y1="150" x2="195" y2="145" stroke="currentColor" strokeWidth="0.3" opacity="0.04" />
        <line x1="50" y1="170" x2="75" y2="190" stroke="currentColor" strokeWidth="0.25" opacity="0.05" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#scratches)" />
  </svg>
);
