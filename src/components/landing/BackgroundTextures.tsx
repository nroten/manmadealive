// Rugged masculine background texture components

// Topography/Terrain Lines Pattern - Circular mountain contours like real topo maps
export const TopographyPattern = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg 
    className={`absolute inset-0 w-full h-full ${className}`}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="topo-mountain" x="0" y="0" width="500" height="500" patternUnits="userSpaceOnUse">
        {/* Primary mountain peak - organic concentric contours */}
        <path d="M250,250 Q280,230 300,250 Q320,280 300,310 Q270,340 240,320 Q200,290 220,260 Q240,240 250,250" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
        <path d="M250,245 Q290,215 320,245 Q350,290 310,340 Q260,380 210,340 Q170,290 200,250 Q230,220 250,245" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.25" />
        <path d="M250,235 Q305,195 345,240 Q385,300 330,365 Q260,420 190,360 Q140,295 185,240 Q225,195 250,235" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.22" />
        <path d="M250,220 Q320,170 375,230 Q430,310 355,395 Q265,470 170,390 Q100,305 165,225 Q220,160 250,220" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.18" />
        <path d="M250,200 Q340,140 410,215 Q480,320 385,430 Q270,530 145,420 Q55,310 140,205 Q210,120 250,200" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.15" />
        
        {/* Secondary peak - upper left */}
        <path d="M100,120 Q115,105 135,115 Q150,130 140,150 Q125,165 105,155 Q85,140 95,125 Q100,115 100,120" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.28" />
        <path d="M100,110 Q125,90 155,105 Q180,130 165,165 Q140,195 100,180 Q65,155 75,120 Q85,95 100,110" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.22" />
        <path d="M100,95 Q140,65 180,90 Q220,130 195,185 Q155,235 95,210 Q40,175 55,115 Q70,65 100,95" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.16" />
        
        {/* Third peak - lower right */}
        <path d="M420,380 Q440,365 455,380 Q470,400 455,420 Q435,440 415,425 Q395,405 405,385 Q415,370 420,380" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.26" />
        <path d="M420,365 Q450,340 480,365 Q510,400 485,440 Q450,475 405,450 Q365,415 380,375 Q400,345 420,365" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
        <path d="M420,345 Q465,305 510,345 Q555,400 515,465 Q460,520 390,480 Q325,430 355,365 Q385,310 420,345" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.14" />
        
        {/* Flowing contour lines connecting peaks */}
        <path d="M0,80 Q80,50 160,75 Q240,100 320,70 Q400,40 500,65" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.12" />
        <path d="M0,160 Q100,130 200,155 Q300,180 400,150 Q450,135 500,145" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.1" />
        <path d="M0,420 Q80,450 160,430 Q240,410 320,440 Q400,470 500,445" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
        <path d="M0,480 Q120,450 240,475 Q360,500 500,470" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.08" />
        
        {/* Small elevation markers */}
        <circle cx="250" cy="250" r="3" fill="currentColor" opacity="0.15" />
        <circle cx="100" cy="120" r="2" fill="currentColor" opacity="0.12" />
        <circle cx="420" cy="380" r="2.5" fill="currentColor" opacity="0.12" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#topo-mountain)" />
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
