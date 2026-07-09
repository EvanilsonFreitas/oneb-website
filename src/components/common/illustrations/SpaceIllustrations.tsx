import type { SVGProps } from 'react'

/**
 * Site-wide space illustrations (astronaut, planet, rocket) — the visual
 * motif behind the OneBI brand identity (universo, galáxias, constelações).
 * Soft gradient shading gives them dimensionality without becoming literal
 * skeuomorphic 3D renders, kept in the same teal/violet palette as the rest
 * of the Design System.
 */

type Props = SVGProps<SVGSVGElement>

const TEAL = '#3EF0AA'
const VIOLET = '#7E57E1'

/** Astronaut floating, tethered by a curved cable — used on empty/lost states. */
export function IllustrationAstronaut(props: Props) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <radialGradient id="astro-glow" cx="0.5" cy="0.42" r="0.6">
          <stop offset="0" stopColor={TEAL} stopOpacity="0.16" />
          <stop offset="1" stopColor={TEAL} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="astro-suit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e8e9ec" />
          <stop offset="1" stopColor="#b9bcc4" />
        </linearGradient>
        <linearGradient id="astro-visor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={VIOLET} />
          <stop offset="1" stopColor={TEAL} />
        </linearGradient>
      </defs>

      <rect width="400" height="400" fill="url(#astro-glow)" />

      {/* Scattered stars */}
      {[
        [60, 70],
        [340, 60],
        [46, 210],
        [356, 230],
        [90, 330],
        [310, 340],
      ].map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="2.5"
          fill="#ffffff"
          opacity="0.5"
        />
      ))}

      {/* Tether cable */}
      <path
        d="M180 330 C 120 350, 60 310, 70 260"
        stroke={TEAL}
        strokeWidth="2.5"
        strokeDasharray="2 8"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Backpack */}
      <rect
        x="168"
        y="168"
        width="64"
        height="90"
        rx="14"
        fill="#1c1c20"
        stroke="#ffffff14"
      />

      {/* Body / suit */}
      <path
        d="M140 190 C140 160 164 142 200 142 C236 142 260 160 260 190 L262 268 C262 296 234 314 200 314 C166 314 138 296 138 268 Z"
        fill="url(#astro-suit)"
      />
      {/* Chest control panel */}
      <rect x="176" y="208" width="48" height="30" rx="6" fill="#0c0c0d" />
      <circle cx="188" cy="223" r="4" fill={TEAL} />
      <circle cx="200" cy="223" r="4" fill={VIOLET} />
      <circle cx="212" cy="223" r="4" fill="#ffffff40" />
      {/* Suit panel lines */}
      <path d="M150 260 L250 260" stroke="#00000022" strokeWidth="3" />
      <path d="M158 280 L242 280" stroke="#00000018" strokeWidth="3" />

      {/* Arms */}
      <path
        d="M142 196 C110 200 92 226 100 258 C104 274 120 280 132 272"
        stroke="url(#astro-suit)"
        strokeWidth="30"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M258 196 C288 206 300 234 288 262"
        stroke="url(#astro-suit)"
        strokeWidth="30"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="130" cy="270" r="15" fill="#dfe1e5" />
      <circle cx="290" cy="264" r="15" fill="#dfe1e5" />

      {/* Legs */}
      <path
        d="M170 306 C166 330 168 352 176 366"
        stroke="url(#astro-suit)"
        strokeWidth="32"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M230 306 C236 330 236 352 228 366"
        stroke="url(#astro-suit)"
        strokeWidth="32"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="176" cy="372" rx="20" ry="11" fill="#0c0c0d" />
      <ellipse cx="228" cy="372" rx="20" ry="11" fill="#0c0c0d" />

      {/* Helmet */}
      <circle cx="200" cy="118" r="62" fill="#e8e9ec" />
      <circle
        cx="200"
        cy="118"
        r="62"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.5"
      />
      <ellipse cx="200" cy="120" rx="42" ry="40" fill="url(#astro-visor)" />
      {/* Visor reflection */}
      <ellipse
        cx="184"
        cy="102"
        rx="12"
        ry="18"
        fill="#ffffff"
        opacity="0.35"
      />
      <ellipse
        cx="206"
        cy="132"
        rx="18"
        ry="10"
        fill="#000000"
        opacity="0.12"
      />

      {/* Antenna */}
      <path
        d="M240 66 L252 42"
        stroke="#c7c9cf"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="254" cy="38" r="6" fill={TEAL} />
    </svg>
  )
}

/** Ringed planet with a small orbiting moon — used as decorative background art. */
export function IllustrationPlanet(props: Props) {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <radialGradient id="planet-glow" cx="0.5" cy="0.45" r="0.65">
          <stop offset="0" stopColor={VIOLET} stopOpacity="0.18" />
          <stop offset="1" stopColor={VIOLET} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="planet-sphere" cx="0.36" cy="0.34" r="0.75">
          <stop offset="0" stopColor="#5fead1" />
          <stop offset="0.45" stopColor={TEAL} />
          <stop offset="1" stopColor="#0f3d33" />
        </radialGradient>
        <linearGradient id="planet-ring" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={VIOLET} stopOpacity="0" />
          <stop offset="0.5" stopColor={VIOLET} stopOpacity="0.9" />
          <stop offset="1" stopColor={VIOLET} stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="400" height="320" fill="url(#planet-glow)" />

      {[
        [40, 50],
        [360, 40],
        [30, 260],
        [370, 270],
        [200, 20],
      ].map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="2"
          fill="#ffffff"
          opacity="0.5"
        />
      ))}

      {/* Ring — back half (behind planet) */}
      <ellipse
        cx="200"
        cy="168"
        rx="150"
        ry="34"
        stroke="url(#planet-ring)"
        strokeWidth="10"
        fill="none"
        opacity="0.55"
      />

      {/* Planet sphere */}
      <circle cx="200" cy="160" r="86" fill="url(#planet-sphere)" />
      <ellipse
        cx="200"
        cy="160"
        rx="86"
        ry="86"
        fill="#000000"
        opacity="0.08"
      />
      <ellipse
        cx="168"
        cy="128"
        rx="30"
        ry="18"
        fill="#ffffff"
        opacity="0.12"
      />
      <ellipse cx="240" cy="190" rx="22" ry="10" fill="#0b2b24" opacity="0.4" />
      <ellipse cx="160" cy="196" rx="14" ry="7" fill="#0b2b24" opacity="0.3" />

      {/* Ring — front half (in front of planet) */}
      <path
        d="M62 160 C62 182 122 198 200 198 C278 198 338 182 338 160"
        stroke="url(#planet-ring)"
        strokeWidth="12"
        fill="none"
      />

      {/* Small moon */}
      <circle cx="330" cy="90" r="16" fill={VIOLET} opacity="0.85" />
      <ellipse cx="325" cy="85" rx="5" ry="4" fill="#ffffff" opacity="0.3" />
    </svg>
  )
}

/** Rocket launching with an exhaust trail — used for growth/momentum moments (careers, CTAs). */
export function IllustrationRocket(props: Props) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <radialGradient id="rocket-glow" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0" stopColor={TEAL} stopOpacity="0.16" />
          <stop offset="1" stopColor={TEAL} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rocket-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c7c9cf" />
          <stop offset="0.5" stopColor="#f2f3f5" />
          <stop offset="1" stopColor="#9ea1a8" />
        </linearGradient>
        <linearGradient id="rocket-flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={TEAL} />
          <stop offset="0.6" stopColor={VIOLET} />
          <stop offset="1" stopColor={VIOLET} stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="400" height="400" fill="url(#rocket-glow)" />

      {[
        [70, 60],
        [330, 90],
        [50, 200],
        [350, 210],
        [90, 320],
      ].map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="2.4"
          fill="#ffffff"
          opacity="0.5"
        />
      ))}

      {/* Motion streaks */}
      <path
        d="M110 120 L86 96"
        stroke={TEAL}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M130 90 L112 68"
        stroke={TEAL}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.35"
      />

      <g transform="rotate(35 200 200)">
        {/* Exhaust flame */}
        <path
          d="M186 268 C186 268 160 320 200 360 C240 320 214 268 214 268 Z"
          fill="url(#rocket-flame)"
        />

        {/* Fins */}
        <path d="M172 246 L134 292 L176 282 Z" fill={VIOLET} />
        <path d="M228 246 L266 292 L224 282 Z" fill={VIOLET} />

        {/* Body */}
        <path
          d="M200 60 C236 100 244 170 236 250 L164 250 C156 170 164 100 200 60 Z"
          fill="url(#rocket-body)"
          stroke="#00000012"
        />

        {/* Nose cone accent */}
        <path
          d="M200 60 C214 78 222 100 226 124 L174 124 C178 100 186 78 200 60 Z"
          fill={TEAL}
        />

        {/* Window */}
        <circle cx="200" cy="168" r="26" fill="#0c0c0d" />
        <circle cx="200" cy="168" r="19" fill={VIOLET} opacity="0.85" />
        <ellipse cx="192" cy="160" rx="6" ry="8" fill="#ffffff" opacity="0.4" />

        {/* Body panel lines */}
        <path d="M168 210 L232 210" stroke="#00000014" strokeWidth="2.5" />
      </g>
    </svg>
  )
}
