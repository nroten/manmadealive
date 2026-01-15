// Rugged masculine background texture components

// Topography/Terrain Lines Pattern - Realistic mountainous contours with organic flowing lines
export const TopographyPattern = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg 
    className={`absolute inset-0 w-full h-full ${className}`}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="topo-mountain" x="0" y="0" width="800" height="600" patternUnits="userSpaceOnUse">
        <g fill="none" stroke="currentColor" strokeWidth="0.6">
          {/* Large irregular flowing contour region - upper left */}
          <path d="M50,80 Q90,45 140,60 Q195,40 240,70 Q280,50 330,85 Q295,120 240,100 Q180,130 120,105 Q70,125 50,80" opacity="0.25" />
          <path d="M30,105 Q85,25 160,50 Q230,20 290,65 Q350,35 400,90 Q355,145 270,115 Q190,155 100,125 Q40,155 30,105" opacity="0.2" />
          <path d="M10,130 Q75,5 175,35 Q275,0 350,55 Q420,15 480,85 Q430,165 310,130 Q200,185 80,145 Q15,185 10,130" opacity="0.15" />
          
          {/* Central complex terrain formation */}
          <path d="M420,180 Q480,140 550,165 Q610,135 660,175 Q700,150 750,190 Q710,235 640,210 Q570,250 490,220 Q430,255 390,205 Q420,180 420,180" opacity="0.28" />
          <path d="M390,210 Q470,120 570,155 Q660,115 720,170 Q780,135 800,195 Q760,265 655,230 Q550,285 445,245 Q375,290 340,225 Q390,210 390,210" opacity="0.22" />
          <path d="M360,240 Q455,100 580,140 Q700,90 780,160 Q800,125 800,200 Q780,300 665,255 Q535,320 410,275 Q325,330 290,250 Q360,240 360,240" opacity="0.16" />
          
          {/* Flowing terrain lines - middle section */}
          <path d="M0,280 Q100,250 200,275 Q320,245 440,270 Q560,240 680,265 Q760,250 800,270" opacity="0.18" strokeWidth="0.5" />
          <path d="M0,310 Q120,275 250,300 Q380,265 510,295 Q640,260 750,290 Q800,280 800,305" opacity="0.15" strokeWidth="0.5" />
          <path d="M0,345 Q90,315 180,340 Q290,305 400,335 Q520,300 640,330 Q740,305 800,340" opacity="0.12" strokeWidth="0.5" />
          
          {/* Lower left terrain blob */}
          <path d="M80,380 Q130,350 190,370 Q250,340 300,380 Q340,355 385,395 Q345,430 280,410 Q210,445 140,415 Q85,445 60,395 Q80,380 80,380" opacity="0.26" />
          <path d="M50,410 Q120,330 210,360 Q300,315 370,375 Q435,340 480,405 Q425,465 330,435 Q220,485 115,445 Q45,490 20,420 Q50,410 50,410" opacity="0.2" />
          <path d="M20,445 Q105,305 230,345 Q355,285 450,365 Q535,315 600,400 Q525,495 385,455 Q235,525 95,475 Q5,535 0,455 L20,445" opacity="0.14" />
          
          {/* Upper right irregular formation */}
          <path d="M620,70 Q665,45 715,65 Q760,40 800,75 Q800,45 800,80 Q770,115 710,95 Q650,125 600,90 Q620,70 620,70" opacity="0.24" />
          <path d="M590,100 Q655,25 730,55 Q790,25 800,70 Q800,25 800,85 Q780,135 705,110 Q625,150 565,110 Q590,100 590,100" opacity="0.18" />
          
          {/* Right side winding features */}
          <path d="M680,320 Q720,290 770,315 Q800,295 800,330 Q780,365 730,345 Q680,375 640,340 Q680,320 680,320" opacity="0.22" />
          <path d="M650,355 Q715,270 785,305 Q800,275 800,325 Q790,395 720,365 Q645,410 590,365 Q650,355 650,355" opacity="0.16" />
          
          {/* Bottom flowing contours */}
          <path d="M0,500 Q80,475 160,495 Q260,465 360,490 Q470,460 580,485 Q700,455 800,480" opacity="0.14" strokeWidth="0.5" />
          <path d="M0,535 Q100,505 210,530 Q330,495 450,525 Q580,490 700,520 Q770,500 800,525" opacity="0.11" strokeWidth="0.5" />
          <path d="M0,570 Q120,540 250,565 Q400,530 550,560 Q700,530 800,555" opacity="0.09" strokeWidth="0.5" />
          
          {/* Small detail formations scattered throughout */}
          <path d="M280,120 Q310,100 345,115 Q375,95 400,125 Q370,150 335,135 Q295,160 270,130 Q280,120 280,120" opacity="0.2" strokeWidth="0.5" />
          <path d="M260,145 Q305,80 365,105 Q420,75 455,120 Q415,170 355,150 Q285,185 245,145 Q260,145 260,145" opacity="0.15" strokeWidth="0.5" />
          
          <path d="M520,420 Q560,395 610,415 Q655,390 690,425 Q655,460 600,440 Q545,470 510,435 Q520,420 520,420" opacity="0.2" strokeWidth="0.5" />
          <path d="M495,450 Q555,375 630,405 Q700,365 750,420 Q700,485 620,455 Q530,505 470,455 Q495,450 495,450" opacity="0.14" strokeWidth="0.5" />
          
          {/* Additional organic blobs */}
          <path d="M150,200 Q185,175 225,195 Q260,170 290,205 Q260,235 220,220 Q175,245 150,210 Q150,200 150,200" opacity="0.18" strokeWidth="0.5" />
          <path d="M130,225 Q180,160 245,185 Q305,150 350,200 Q305,255 240,230 Q165,275 120,230 Q130,225 130,225" opacity="0.12" strokeWidth="0.5" />
        </g>
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
