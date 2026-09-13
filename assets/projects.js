/**
 * Bespoke Visual Artwork & SVG Graphics for Rahf's Portfolio
 * High-resolution, retina-ready vector graphics and illustrations
 */

const ProjectArtworks = {
  // Stylized avatar illustration for Rahf
  avatar: `
    <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="avatarBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e1b4b"/>
          <stop offset="50%" stop-color="#312e81"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#18181b"/>
          <stop offset="100%" stop-color="#09090b"/>
        </linearGradient>
        <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fde047" stop-opacity="0.2"/>
          <stop offset="0%" stop-color="#e0a98b"/>
          <stop offset="100%" stop-color="#c98a6a"/>
        </linearGradient>
        <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#8b5cf6"/>
          <stop offset="50%" stop-color="#ec4899"/>
          <stop offset="100%" stop-color="#06b6d4"/>
        </linearGradient>
        <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4338ca"/>
          <stop offset="100%" stop-color="#1e1b4b"/>
        </linearGradient>
        <filter id="avatarGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="12" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>
      <!-- Background Circles -->
      <circle cx="200" cy="200" r="185" fill="url(#avatarBg)" stroke="url(#accentGlow)" stroke-width="4" />
      <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(139, 92, 246, 0.25)" stroke-width="1.5" stroke-dasharray="8 6"/>
      <circle cx="200" cy="200" r="135" fill="none" stroke="rgba(6, 182, 212, 0.2)" stroke-width="1" />

      <!-- Glowing Backing Halo -->
      <circle cx="200" cy="170" r="85" fill="#8b5cf6" opacity="0.25" filter="url(#avatarGlow)" />

      <!-- Hair Backing -->
      <path d="M125 180 C120 110, 280 110, 275 180 C275 250, 260 280, 260 280 C230 250, 170 250, 140 280 C140 280, 125 240, 125 180 Z" fill="url(#hairGrad)" />

      <!-- Neck & Shoulders -->
      <path d="M175 230 L225 230 L235 285 L165 285 Z" fill="url(#skinGrad)" />
      <!-- Minimalist Modern Blazer / Attire -->
      <path d="M110 370 C120 280, 165 270, 200 275 C235 270, 280 280, 290 370 Z" fill="url(#jacketGrad)" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
      <!-- Inner top / collar -->
      <path d="M175 275 L200 325 L225 275 Z" fill="#090a0f" />
      <line x1="200" y1="325" x2="200" y2="370" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
      <!-- Sleek lapels -->
      <path d="M150 285 L185 350 L160 370" fill="none" stroke="url(#accentGlow)" stroke-width="2" />
      <path d="M250 285 L215 350 L240 370" fill="none" stroke="url(#accentGlow)" stroke-width="2" />

      <!-- Face Shape -->
      <path d="M150 160 C150 120, 250 120, 250 160 C250 215, 225 245, 200 245 C175 245, 150 215, 150 160 Z" fill="url(#skinGrad)" />

      <!-- Stylish Hair Front & Strands -->
      <path d="M142 165 C145 110, 210 100, 255 125 C262 145, 258 175, 255 180 C240 135, 195 130, 155 150 C148 155, 144 160, 142 165 Z" fill="#18181b" />
      <path d="M140 165 C135 195, 140 230, 148 245 C146 215, 148 180, 152 160 Z" fill="#111827" />
      <path d="M258 165 C263 195, 258 230, 250 245 C252 215, 250 180, 246 160 Z" fill="#111827" />

      <!-- Modern Wireframe Glasses -->
      <rect x="156" y="160" width="36" height="26" rx="8" fill="rgba(6, 182, 212, 0.12)" stroke="#38bdf8" stroke-width="2" />
      <rect x="208" y="160" width="36" height="26" rx="8" fill="rgba(6, 182, 212, 0.12)" stroke="#38bdf8" stroke-width="2" />
      <path d="M192 170 L208 170" stroke="#38bdf8" stroke-width="2" />
      <path d="M156 168 L146 165" stroke="#38bdf8" stroke-width="1.5" />
      <path d="M244 168 L254 165" stroke="#38bdf8" stroke-width="1.5" />

      <!-- Eyes Behind Glasses -->
      <circle cx="174" cy="172" r="4.5" fill="#18181b" />
      <circle cx="175.5" cy="170.5" r="1.5" fill="#ffffff" />
      <circle cx="226" cy="172" r="4.5" fill="#18181b" />
      <circle cx="227.5" cy="170.5" r="1.5" fill="#ffffff" />

      <!-- Eyebrows -->
      <path d="M162 154 Q174 150 186 153" stroke="#27272a" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <path d="M214 153 Q226 150 238 154" stroke="#27272a" stroke-width="2.5" stroke-linecap="round" fill="none" />

      <!-- Nose & Warm Smile -->
      <path d="M198 176 L196 195 L204 196" fill="none" stroke="#a2694b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M185 212 Q200 224 215 212" fill="none" stroke="#9f1239" stroke-width="2.5" stroke-linecap="round" />
      <!-- Cheerful cheek glow -->
      <circle cx="166" cy="200" r="10" fill="#fb7185" opacity="0.25" />
      <circle cx="234" cy="200" r="10" fill="#fb7185" opacity="0.25" />

      <!-- Floating Tech Badges around avatar -->
      <g transform="translate(45, 110)">
        <rect width="64" height="28" rx="14" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(139, 92, 246, 0.6)" stroke-width="1.5" />
        <text x="32" y="18" fill="#a78bfa" font-size="11" font-family="'Outfit', sans-serif" font-weight="bold" text-anchor="middle">React</text>
      </g>
      <g transform="translate(290, 85)">
        <rect width="60" height="28" rx="14" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(6, 182, 212, 0.6)" stroke-width="1.5" />
        <text x="30" y="18" fill="#38bdf8" font-size="11" font-family="'Outfit', sans-serif" font-weight="bold" text-anchor="middle">AI / ML</text>
      </g>
      <g transform="translate(305, 240)">
        <rect width="62" height="28" rx="14" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(244, 63, 94, 0.6)" stroke-width="1.5" />
        <text x="31" y="18" fill="#fb7185" font-size="11" font-family="'Outfit', sans-serif" font-weight="bold" text-anchor="middle">UI / UX</text>
      </g>
      <g transform="translate(35, 255)">
        <rect width="66" height="28" rx="14" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(16, 185, 129, 0.6)" stroke-width="1.5" />
        <text x="33" y="18" fill="#34d399" font-size="11" font-family="'Outfit', sans-serif" font-weight="bold" text-anchor="middle">Node.js</text>
      </g>
    </svg>
  `,

  // 1. NovaCore AI Platform Showcase
  novacore: `
    <svg viewBox="0 0 800 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgNova" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0d1117"/>
          <stop offset="50%" stop-color="#161b26"/>
          <stop offset="100%" stop-color="#0a0d14"/>
        </linearGradient>
        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#8b5cf6"/>
          <stop offset="100%" stop-color="#d946ef"/>
        </linearGradient>
        <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#06b6d4"/>
          <stop offset="100%" stop-color="#3b82f6"/>
        </linearGradient>
      </defs>
      <!-- Canvas Backdrop -->
      <rect width="800" height="480" fill="url(#bgNova)" rx="16"/>
      <!-- Grid Lines -->
      <g stroke="rgba(255, 255, 255, 0.04)" stroke-width="1">
        <line x1="0" y1="80" x2="800" y2="80" />
        <line x1="0" y1="160" x2="800" y2="160" />
        <line x1="0" y1="240" x2="800" y2="240" />
        <line x1="0" y1="320" x2="800" y2="320" />
        <line x1="0" y1="400" x2="800" y2="400" />
        <line x1="160" y1="0" x2="160" y2="480" />
        <line x1="320" y1="0" x2="320" y2="480" />
        <line x1="480" y1="0" x2="480" y2="480" />
        <line x1="640" y1="0" x2="640" y2="480" />
      </g>
      <!-- Ambient Glow Behind Cards -->
      <circle cx="280" cy="220" r="140" fill="#7c3aed" opacity="0.2" filter="blur(40px)"/>
      <circle cx="560" cy="260" r="130" fill="#06b6d4" opacity="0.18" filter="blur(40px)"/>

      <!-- Window Mockup Frame -->
      <rect x="50" y="40" width="700" height="400" rx="12" fill="rgba(17, 24, 39, 0.75)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5"/>
      <!-- Window Controls -->
      <circle cx="75" cy="65" r="5" fill="#ef4444"/>
      <circle cx="95" cy="65" r="5" fill="#eab308"/>
      <circle cx="115" cy="65" r="5" fill="#22c55e"/>
      <text x="145" y="69" fill="rgba(255,255,255,0.4)" font-size="12" font-family="'Outfit', sans-serif">novacore.ai/agent-orchestrator</text>

      <!-- Sidebar -->
      <rect x="50" y="90" width="150" height="350" fill="rgba(10, 14, 23, 0.6)"/>
      <rect x="68" y="115" width="114" height="24" rx="6" fill="rgba(139, 92, 246, 0.25)" stroke="rgba(139, 92, 246, 0.5)"/>
      <text x="80" y="131" fill="#c4b5fd" font-size="11" font-family="sans-serif">● Agent Pipeline</text>
      <text x="80" y="165" fill="#64748b" font-size="11" font-family="sans-serif">◌ Model Fine-tune</text>
      <text x="80" y="195" fill="#64748b" font-size="11" font-family="sans-serif">◌ Vector Store</text>
      <text x="80" y="225" fill="#64748b" font-size="11" font-family="sans-serif">◌ Telemetry Logs</text>
      <text x="80" y="255" fill="#64748b" font-size="11" font-family="sans-serif">◌ API Keys</text>

      <!-- Main Agent Visualizer Area -->
      <!-- Neural Nodes Graph -->
      <g stroke="rgba(139, 92, 246, 0.4)" stroke-width="2">
        <line x1="280" y1="180" x2="380" y2="140" />
        <line x1="280" y1="180" x2="380" y2="230" />
        <line x1="380" y1="140" x2="520" y2="180" />
        <line x1="380" y1="230" x2="520" y2="180" />
        <line x1="520" y1="180" x2="650" y2="160" />
        <line x1="520" y1="180" x2="650" y2="250" />
      </g>
      <!-- Node Pills -->
      <g transform="translate(240, 160)">
        <rect width="80" height="40" rx="8" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="2"/>
        <text x="40" y="24" fill="#e9d5ff" font-size="11" text-anchor="middle" font-family="sans-serif" font-weight="bold">Input Prompt</text>
      </g>
      <g transform="translate(340, 115)">
        <rect width="90" height="42" rx="8" fill="#0f172a" stroke="#06b6d4" stroke-width="2"/>
        <text x="45" y="25" fill="#67e8f9" font-size="11" text-anchor="middle" font-family="sans-serif" font-weight="bold">Embeddings</text>
      </g>
      <g transform="translate(340, 210)">
        <rect width="90" height="42" rx="8" fill="#0f172a" stroke="#ec4899" stroke-width="2"/>
        <text x="45" y="25" fill="#f472b6" font-size="11" text-anchor="middle" font-family="sans-serif" font-weight="bold">RAG Retrieval</text>
      </g>
      <g transform="translate(480, 160)">
        <rect width="90" height="42" rx="8" fill="#1e1b4b" stroke="#a855f7" stroke-width="2"/>
        <text x="45" y="25" fill="#f3e8ff" font-size="11" text-anchor="middle" font-family="sans-serif" font-weight="bold">LLM Synthesis</text>
      </g>
      <g transform="translate(615, 140)">
        <rect width="85" height="38" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
        <text x="42" y="23" fill="#6ee7b7" font-size="10" text-anchor="middle" font-family="sans-serif" font-weight="bold">Action Call</text>
      </g>
      <g transform="translate(615, 230)">
        <rect width="85" height="38" rx="8" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
        <text x="42" y="23" fill="#e2e8f0" font-size="10" text-anchor="middle" font-family="sans-serif" font-weight="bold">JSON Output</text>
      </g>

      <!-- Bottom Metrics Bar -->
      <rect x="220" y="310" width="505" height="105" rx="8" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255,255,255,0.08)"/>
      <text x="240" y="335" fill="#94a3b8" font-size="12" font-family="sans-serif">Live Performance & Token Latency</text>
      <path d="M240 385 Q300 350, 360 370 T480 340 T600 355 T700 330" fill="none" stroke="url(#purpleGrad)" stroke-width="3"/>
      <path d="M240 395 Q320 375, 400 385 T540 365 T640 370 T700 350" fill="none" stroke="url(#cyanGrad)" stroke-width="2" stroke-dasharray="4 4"/>
      <circle cx="600" cy="355" r="4" fill="#ec4899"/>
      <text x="612" y="358" fill="#f472b6" font-size="11" font-family="sans-serif">98.4ms avg</text>
    </svg>
  `,

  // 2. Zenith Wealth FinTech App
  zenith: `
    <svg viewBox="0 0 800 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgZenith" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#05131e"/>
          <stop offset="60%" stop-color="#0b2233"/>
          <stop offset="100%" stop-color="#02080d"/>
        </linearGradient>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4"/>
          <stop offset="50%" stop-color="#3b82f6"/>
          <stop offset="100%" stop-color="#1d4ed8"/>
        </linearGradient>
        <linearGradient id="cardDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
        <linearGradient id="chartGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect width="800" height="480" fill="url(#bgZenith)" rx="16"/>

      <!-- Ambient Glow -->
      <circle cx="200" cy="220" r="160" fill="#06b6d4" opacity="0.15" filter="blur(50px)"/>
      <circle cx="620" cy="300" r="150" fill="#10b981" opacity="0.12" filter="blur(50px)"/>

      <!-- 3D Floating Credit Card Mockup -->
      <g transform="translate(90, 70) rotate(-6)">
        <rect width="280" height="175" rx="16" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" filter="drop-shadow(0 20px 30px rgba(0,0,0,0.6))"/>
        <!-- Card Chip -->
        <rect x="30" y="35" width="40" height="30" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="1"/>
        <line x1="50" y1="35" x2="50" y2="65" stroke="#ca8a04" stroke-width="1"/>
        <line x1="30" y1="50" x2="70" y2="50" stroke="#ca8a04" stroke-width="1"/>
        <!-- Contactless icon -->
        <path d="M85 42 Q92 50 85 58 M92 37 Q102 50 92 63" stroke="rgba(255,255,255,0.8)" stroke-width="2" fill="none"/>
        <text x="30" y="115" fill="rgba(255,255,255,0.9)" font-size="16" font-family="'Outfit', sans-serif" letter-spacing="3">•••• 8492</text>
        <text x="30" y="145" fill="rgba(255,255,255,0.7)" font-size="10" font-family="sans-serif">CARDHOLDER</text>
        <text x="30" y="158" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold">RAHF AL-MANSOOR</text>
        <text x="210" y="158" fill="#ffffff" font-size="16" font-family="'Outfit', sans-serif" font-weight="bold">VISA</text>
      </g>

      <!-- Secondary Dark Card Behind -->
      <g transform="translate(160, 180) rotate(8)">
        <rect width="260" height="160" rx="16" fill="url(#cardDark)" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" filter="drop-shadow(0 20px 25px rgba(0,0,0,0.5))"/>
        <text x="25" y="45" fill="#38bdf8" font-size="14" font-family="sans-serif" font-weight="bold">ZENITH PLATINUM</text>
        <text x="25" y="120" fill="rgba(255,255,255,0.8)" font-size="14" font-family="monospace">•••• 3120</text>
        <circle cx="210" cy="120" r="14" fill="#ef4444" opacity="0.8"/>
        <circle cx="225" cy="120" r="14" fill="#f59e0b" opacity="0.8"/>
      </g>

      <!-- Analytics Glass Panel on Right -->
      <rect x="420" y="60" width="330" height="360" rx="16" fill="rgba(15, 23, 42, 0.75)" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
      <text x="445" y="95" fill="#94a3b8" font-size="12" font-family="sans-serif">PORTFOLIO VALUATION</text>
      <text x="445" y="130" fill="#ffffff" font-size="28" font-family="'Outfit', sans-serif" font-weight="bold">$248,910.45</text>
      <rect x="635" y="108" width="90" height="26" rx="13" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981"/>
      <text x="680" y="125" fill="#34d399" font-size="11" font-family="sans-serif" text-anchor="middle">+ 18.4% YTD</text>

      <!-- Gradient Area Chart -->
      <path d="M445 270 Q490 240, 530 250 T610 210 T670 220 T720 170 L720 310 L445 310 Z" fill="url(#chartGlow)"/>
      <path d="M445 270 Q490 240, 530 250 T610 210 T670 220 T720 170" fill="none" stroke="#10b981" stroke-width="3"/>
      <circle cx="720" cy="170" r="5" fill="#34d399"/>

      <!-- Asset breakdown pills -->
      <g transform="translate(445, 335)">
        <rect width="80" height="60" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
        <text x="12" y="24" fill="#94a3b8" font-size="10">Crypto Index</text>
        <text x="12" y="46" fill="#38bdf8" font-size="13" font-weight="bold">42.5%</text>
      </g>
      <g transform="translate(540, 335)">
        <rect width="80" height="60" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
        <text x="12" y="24" fill="#94a3b8" font-size="10">Global Equities</text>
        <text x="12" y="46" fill="#a78bfa" font-size="13" font-weight="bold">38.0%</text>
      </g>
      <g transform="translate(635, 335)">
        <rect width="85" height="60" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
        <text x="12" y="24" fill="#94a3b8" font-size="10">Yield Vaults</text>
        <text x="12" y="46" fill="#34d399" font-size="13" font-weight="bold">19.5%</text>
      </g>
    </svg>
  `,

  // 3. Aura Luxe Architectural E-Commerce
  auraluxe: `
    <svg viewBox="0 0 800 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgAura" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1c1917"/>
          <stop offset="50%" stop-color="#292524"/>
          <stop offset="100%" stop-color="#0c0a09"/>
        </linearGradient>
        <linearGradient id="warmGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#fcd34d"/>
        </linearGradient>
      </defs>
      <rect width="800" height="480" fill="url(#bgAura)" rx="16"/>

      <!-- Architectural grid accents -->
      <line x1="80" y1="0" x2="80" y2="480" stroke="rgba(255,255,255,0.05)"/>
      <line x1="720" y1="0" x2="720" y2="480" stroke="rgba(255,255,255,0.05)"/>

      <!-- Editorial Header -->
      <text x="120" y="80" fill="#fcd34d" font-size="11" font-family="'Outfit', sans-serif" letter-spacing="4">COLLECTION N° 04 • RIYADH / PARIS</text>
      <text x="120" y="125" fill="#f5f5f4" font-size="34" font-family="Georgia, serif" font-weight="normal">Aura Maison d'Art</text>

      <!-- Center Featured Product Visual (Sculptural Minimalist Chair / Lamp) -->
      <g transform="translate(420, 90)">
        <rect width="300" height="330" rx="12" fill="#141211" stroke="rgba(255,255,255,0.08)"/>
        <!-- Abstract Architectural Sculpture -->
        <circle cx="150" cy="130" r="70" fill="none" stroke="url(#warmGold)" stroke-width="2"/>
        <path d="M110 180 C130 110, 170 110, 190 180 L170 240 L130 240 Z" fill="#44403c" stroke="#d6d3d1" stroke-width="1.5"/>
        <line x1="150" y1="60" x2="150" y2="110" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="150" cy="60" r="14" fill="#fbbf24" opacity="0.6" filter="blur(6px)"/>
        <!-- Product caption -->
        <text x="25" y="280" fill="#fafaf9" font-size="14" font-family="Georgia, serif">The Travertine Pedestal</text>
        <text x="25" y="302" fill="#a8a29e" font-size="12" font-family="sans-serif">Edition 12/50 — $4,850</text>
        <rect x="220" y="275" width="55" height="28" rx="14" fill="#f59e0b"/>
        <text x="247" y="293" fill="#000000" font-size="10" font-weight="bold" font-family="sans-serif" text-anchor="middle">VIEW</text>
      </g>

      <!-- Left Column Editorial Copy & Features -->
      <g transform="translate(120, 160)">
        <text x="0" y="20" fill="#d6d3d1" font-size="14" font-family="sans-serif" width="260">
          Curated spatial design objects blending tactile brutalism
        </text>
        <text x="0" y="42" fill="#d6d3d1" font-size="14" font-family="sans-serif">
          with modern fluid digital interactivity.
        </text>

        <rect x="0" y="70" width="240" height="65" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)"/>
        <text x="16" y="94" fill="#f59e0b" font-size="11" font-family="sans-serif">MATERIAL ARCHIVE</text>
        <text x="16" y="118" fill="#e7e5e4" font-size="13" font-family="sans-serif">Roman Travertine & Blackened Zinc</text>

        <rect x="0" y="150" width="240" height="65" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)"/>
        <text x="16" y="174" fill="#f59e0b" font-size="11" font-family="sans-serif">COMMERCE STACK</text>
        <text x="16" y="198" fill="#e7e5e4" font-size="13" font-family="sans-serif">Headless Shopify • Three.js 3D</text>

        <!-- CTA button -->
        <rect x="0" y="235" width="160" height="42" rx="21" fill="none" stroke="#fcd34d" stroke-width="1.5"/>
        <text x="80" y="261" fill="#fcd34d" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">EXPLORE RUNWAY →</text>
      </g>
    </svg>
  `,

  // 4. PulseOps Telemetry
  pulseops: `
    <svg viewBox="0 0 800 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgPulse" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#090d16"/>
          <stop offset="100%" stop-color="#05080e"/>
        </linearGradient>
      </defs>
      <rect width="800" height="480" fill="url(#bgPulse)" rx="16"/>

      <!-- Matrix grid background -->
      <g stroke="rgba(14, 165, 233, 0.08)" stroke-width="1">
        <line x1="0" y1="120" x2="800" y2="120"/>
        <line x1="0" y1="240" x2="800" y2="240"/>
        <line x1="0" y1="360" x2="800" y2="360"/>
        <line x1="200" y1="0" x2="200" y2="480"/>
        <line x1="400" y1="0" x2="400" y2="480"/>
        <line x1="600" y1="0" x2="600" y2="480"/>
      </g>

      <!-- Glowing Header bar -->
      <rect x="50" y="40" width="700" height="50" rx="8" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(56, 189, 248, 0.3)"/>
      <circle cx="75" cy="65" r="6" fill="#10b981"/>
      <text x="95" y="70" fill="#38bdf8" font-size="14" font-family="monospace" font-weight="bold">PULSEOPS :: K8S CLUSTER [US-EAST-2 / ME-CENTRAL]</text>
      <text x="640" y="70" fill="#a7f3d0" font-size="12" font-family="monospace">STATUS: 99.998% UP</text>

      <!-- Realtime tracing nodes -->
      <g transform="translate(60, 120)">
        <rect width="320" height="180" rx="10" fill="rgba(15, 23, 42, 0.7)" stroke="rgba(255,255,255,0.08)"/>
        <text x="20" y="35" fill="#94a3b8" font-size="12" font-family="sans-serif">MICROSERVICE TRACES</text>
        <path d="M25 70 H300 M25 105 H260 M25 140 H285" stroke="rgba(255,255,255,0.05)" stroke-width="12" stroke-linecap="round"/>
        <path d="M25 70 H180" stroke="#38bdf8" stroke-width="12" stroke-linecap="round"/>
        <path d="M120 105 H220" stroke="#a855f7" stroke-width="12" stroke-linecap="round"/>
        <path d="M40 140 H160" stroke="#10b981" stroke-width="12" stroke-linecap="round"/>
        <text x="200" y="74" fill="#38bdf8" font-size="10" font-family="monospace">auth-svc (18ms)</text>
        <text x="235" y="109" fill="#c084fc" font-size="10" font-family="monospace">api-gateway (34ms)</text>
        <text x="175" y="144" fill="#34d399" font-size="10" font-family="monospace">db-replica (8ms)</text>
      </g>

      <!-- Latency & Throughput Canvas on right -->
      <g transform="translate(410, 120)">
        <rect width="330" height="180" rx="10" fill="rgba(15, 23, 42, 0.7)" stroke="rgba(255,255,255,0.08)"/>
        <text x="20" y="35" fill="#94a3b8" font-size="12" font-family="sans-serif">THROUGHPUT (RPS / SEC)</text>
        <!-- Bar histogram -->
        <rect x="25" y="110" width="18" height="45" fill="#0284c7" rx="3"/>
        <rect x="52" y="80" width="18" height="75" fill="#0284c7" rx="3"/>
        <rect x="79" y="95" width="18" height="60" fill="#0284c7" rx="3"/>
        <rect x="106" y="60" width="18" height="95" fill="#38bdf8" rx="3"/>
        <rect x="133" y="45" width="18" height="110" fill="#38bdf8" rx="3"/>
        <rect x="160" y="75" width="18" height="80" fill="#0284c7" rx="3"/>
        <rect x="187" y="55" width="18" height="100" fill="#38bdf8" rx="3"/>
        <rect x="214" y="40" width="18" height="115" fill="#06b6d4" rx="3"/>
        <rect x="241" y="65" width="18" height="90" fill="#0284c7" rx="3"/>
        <rect x="268" y="85" width="18" height="70" fill="#0284c7" rx="3"/>
        <text x="20" y="170" fill="#38bdf8" font-size="11" font-family="monospace">Current: 48,200 req/s • 0.001% err</text>
      </g>

      <!-- Terminal logs pane at bottom -->
      <rect x="60" y="320" width="680" height="120" rx="10" fill="#030712" stroke="rgba(255,255,255,0.1)"/>
      <text x="80" y="348" fill="#10b981" font-size="11" font-family="monospace">✓ [2026-09-13 01:40:02 UTC] Ingress autoscaled: +4 pods spawned across zone-b</text>
      <text x="80" y="372" fill="#38bdf8" font-size="11" font-family="monospace">ℹ [2026-09-13 01:40:15 UTC] TLS Certificates renewed automatically via ACME Vault</text>
      <text x="80" y="396" fill="#f59e0b" font-size="11" font-family="monospace">⚡ [2026-09-13 01:40:33 UTC] Distributed trace latency median: 14.2ms (Healthy)</text>
      <text x="80" y="420" fill="#64748b" font-size="11" font-family="monospace">> pulseops --monitor --live-tailing</text>
    </svg>
  `,

  // 5. Mirage Studio 3D Spatial Audio
  mirage: `
    <svg viewBox="0 0 800 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgMirage" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#18002e"/>
          <stop offset="50%" stop-color="#2d0b4d"/>
          <stop offset="100%" stop-color="#0a0014"/>
        </linearGradient>
        <radialGradient id="audioSphere" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#f43f5e"/>
          <stop offset="40%" stop-color="#a855f7"/>
          <stop offset="80%" stop-color="#6366f1"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </radialGradient>
      </defs>
      <rect width="800" height="480" fill="url(#bgMirage)" rx="16"/>

      <!-- Concentric soundwaves -->
      <circle cx="400" cy="240" r="210" fill="none" stroke="rgba(244, 63, 94, 0.15)" stroke-width="1.5" stroke-dasharray="6 8"/>
      <circle cx="400" cy="240" r="170" fill="none" stroke="rgba(168, 85, 247, 0.25)" stroke-width="2"/>
      <circle cx="400" cy="240" r="130" fill="none" stroke="rgba(99, 102, 241, 0.3)" stroke-width="2.5" stroke-dasharray="12 6"/>

      <!-- Central Spatial Hologram Sphere -->
      <circle cx="400" cy="240" r="85" fill="url(#audioSphere)" filter="drop-shadow(0 0 35px rgba(244, 63, 94, 0.6))"/>
      <circle cx="400" cy="240" r="85" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>

      <!-- Waveform rings -->
      <path d="M220 240 Q260 160 310 240 T400 240 T490 240 T580 240" fill="none" stroke="#f43f5e" stroke-width="3"/>
      <path d="M240 240 Q290 310 340 240 T400 240 T460 240 T560 240" fill="none" stroke="#38bdf8" stroke-width="2.5"/>

      <!-- UI Knobs and Sliders on bottom -->
      <rect x="150" y="380" width="500" height="60" rx="30" fill="rgba(15, 23, 42, 0.8)" stroke="rgba(255,255,255,0.15)"/>
      <circle cx="200" cy="410" r="16" fill="#a855f7"/>
      <text x="230" y="414" fill="#e9d5ff" font-size="11" font-family="sans-serif">Spatial Reverb</text>

      <circle cx="340" cy="410" r="16" fill="#f43f5e"/>
      <text x="370" y="414" fill="#fecdd3" font-size="11" font-family="sans-serif">Binaural Panning</text>

      <circle cx="500" cy="410" r="16" fill="#06b6d4"/>
      <text x="530" y="414" fill="#cffafe" font-size="11" font-family="sans-serif">BPM 128.0</text>

      <text x="400" y="65" fill="#f472b6" font-size="12" font-family="'Outfit', sans-serif" letter-spacing="4" text-anchor="middle">WEBGL & WEB AUDIO ENGINE</text>
      <text x="400" y="100" fill="#ffffff" font-size="24" font-family="'Outfit', sans-serif" font-weight="bold" text-anchor="middle">Mirage Spatial Synthesizer</text>
    </svg>
  `,

  // 6. Noor Health Telehealth Portal
  noorhealth: `
    <svg viewBox="0 0 800 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgNoor" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#042f2e"/>
          <stop offset="50%" stop-color="#064e3b"/>
          <stop offset="100%" stop-color="#021c17"/>
        </linearGradient>
        <linearGradient id="mintGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#10b981"/>
          <stop offset="100%" stop-color="#34d399"/>
        </linearGradient>
      </defs>
      <rect width="800" height="480" fill="url(#bgNoor)" rx="16"/>

      <!-- Ambient Glow -->
      <circle cx="240" cy="240" r="140" fill="#10b981" opacity="0.18" filter="blur(40px)"/>

      <!-- Clean White/Glass Telehealth Dashboard -->
      <rect x="70" y="50" width="660" height="380" rx="14" fill="rgba(10, 37, 34, 0.85)" stroke="rgba(52, 211, 153, 0.3)" stroke-width="1.5"/>

      <!-- Header inside app -->
      <circle cx="105" cy="85" r="14" fill="url(#mintGrad)"/>
      <path d="M101 85 H109 M105 81 V89" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
      <text x="130" y="90" fill="#ecfdf5" font-size="16" font-family="'Outfit', sans-serif" font-weight="bold">Noor Health Intelligence</text>
      <rect x="570" y="73" width="130" height="26" rx="13" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981"/>
      <text x="635" y="89" fill="#6ee7b7" font-size="11" font-family="sans-serif" text-anchor="middle">HIPAA Compliant</text>

      <!-- Vitals Card -->
      <rect x="100" y="130" width="180" height="130" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
      <text x="120" y="160" fill="#99f6e4" font-size="12" font-family="sans-serif">Resting Heart Rate</text>
      <text x="120" y="200" fill="#ffffff" font-size="28" font-family="'Outfit', sans-serif" font-weight="bold">68 <tspan font-size="14" fill="#a7f3d0">BPM</tspan></text>
      <!-- ECG Line -->
      <path d="M120 230 L150 230 L155 215 L162 245 L170 210 L178 235 L185 230 L250 230" fill="none" stroke="#f43f5e" stroke-width="2"/>

      <!-- AI Biomarker Card -->
      <rect x="300" y="130" width="180" height="130" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
      <text x="320" y="160" fill="#99f6e4" font-size="12" font-family="sans-serif">Preventive Health Index</text>
      <text x="320" y="200" fill="#ffffff" font-size="28" font-family="'Outfit', sans-serif" font-weight="bold">96.4 <tspan font-size="14" fill="#34d399">/ 100</tspan></text>
      <rect x="320" y="222" width="140" height="8" rx="4" fill="rgba(255,255,255,0.1)"/>
      <rect x="320" y="222" width="125" height="8" rx="4" fill="#10b981"/>

      <!-- Active Video Consultation Mockup -->
      <rect x="500" y="130" width="200" height="260" rx="10" fill="#022c22" stroke="rgba(52, 211, 153, 0.4)"/>
      <circle cx="600" cy="200" r="40" fill="#0f766e"/>
      <circle cx="600" cy="190" r="16" fill="#ccfbf1"/>
      <path d="M575 225 C580 210 620 210 625 225 Z" fill="#ccfbf1"/>
      <text x="600" y="265" fill="#f0fdf4" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">Dr. Sarah Khalid</text>
      <text x="600" y="285" fill="#99f6e4" font-size="11" font-family="sans-serif" text-anchor="middle">Cardiology Consultant</text>
      <rect x="540" y="325" width="120" height="34" rx="17" fill="#10b981"/>
      <text x="600" y="347" fill="#022c22" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Join Encrypted Call</text>

      <!-- Bottom Doctor Notes Timeline -->
      <rect x="100" y="280" width="380" height="110" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
      <text x="120" y="308" fill="#a7f3d0" font-size="12" font-family="sans-serif">Recent Diagnostics & AI Insights</text>
      <circle cx="125" cy="335" r="4" fill="#34d399"/>
      <text x="140" y="338" fill="#e2e8f0" font-size="11" font-family="sans-serif">Blood pressure stable at 118/76 mmHg across 14-day window.</text>
      <circle cx="125" cy="365" r="4" fill="#38bdf8"/>
      <text x="140" y="368" fill="#e2e8f0" font-size="11" font-family="sans-serif">Preventive diet & hydration goals matched 94% compliance.</text>
    </svg>
  `
};
