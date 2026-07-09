/* eslint-disable react-refresh/only-export-components -- library of illustration components plus the `solutionIllustrations` lookup map */
import type { SVGProps } from 'react'

/**
 * Thematic, brand-colored SVG illustrations — one per solution — used to make
 * each solution page visually distinct instead of repeating the same card grid.
 * Brand color: #3EF0AA (teal). No secondary/purple accent.
 */

type Props = SVGProps<SVGSVGElement>

const TEAL = '#3EF0AA'

/** Business Intelligence — executive dashboard with chart bars and a donut. */
export function IllustrationBI(props: Props) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="bi-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={TEAL} />
          <stop offset="1" stopColor={TEAL} stopOpacity="0.3" />
        </linearGradient>
        <radialGradient id="bi-glow" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0" stopColor={TEAL} stopOpacity="0.18" />
          <stop offset="1" stopColor={TEAL} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#bi-glow)" />
      <rect
        x="30"
        y="40"
        width="340"
        height="220"
        rx="16"
        fill="#0c0c0d"
        stroke="#ffffff14"
      />
      <rect x="30" y="40" width="340" height="40" rx="16" fill="#111" />
      <circle cx="52" cy="60" r="4" fill={TEAL} />
      <circle cx="68" cy="60" r="4" fill="#ffffff30" />
      <circle cx="84" cy="60" r="4" fill="#ffffff30" />
      <rect
        x="52"
        y="100"
        width="150"
        height="80"
        rx="10"
        fill="#141414"
        stroke="#ffffff10"
      />
      <rect x="66" y="150" width="16" height="18" rx="3" fill="url(#bi-bar)" />
      <rect x="90" y="134" width="16" height="34" rx="3" fill="url(#bi-bar)" />
      <rect x="114" y="122" width="16" height="46" rx="3" fill="url(#bi-bar)" />
      <rect x="138" y="140" width="16" height="28" rx="3" fill="url(#bi-bar)" />
      <rect x="162" y="118" width="16" height="50" rx="3" fill="url(#bi-bar)" />
      <circle
        cx="285"
        cy="140"
        r="38"
        stroke={TEAL}
        strokeWidth="14"
        fill="none"
        opacity="0.35"
      />
      <path
        d="M285 102a38 38 0 0 1 34 55"
        stroke={TEAL}
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
      />
      <rect x="52" y="196" width="266" height="10" rx="5" fill="#141414" />
      <rect
        x="52"
        y="196"
        width="150"
        height="10"
        rx="5"
        fill={TEAL}
        opacity="0.7"
      />
      <rect x="52" y="216" width="266" height="10" rx="5" fill="#141414" />
      <rect
        x="52"
        y="216"
        width="90"
        height="10"
        rx="5"
        fill={TEAL}
        opacity="0.7"
      />
    </svg>
  )
}

/** Microsoft Fabric — unified lakehouse layers (Bronze / Silver / Gold) over OneLake. */
export function IllustrationFabric(props: Props) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <radialGradient id="fab-glow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0" stopColor={TEAL} stopOpacity="0.2" />
          <stop offset="1" stopColor={TEAL} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#fab-glow)" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(0 ${i * 46})`}>
          <path
            d="M200 70l110 30-110 30L90 100z"
            fill={i === 0 ? '#2a2a2e' : TEAL}
            fillOpacity={i === 2 ? 0.85 : i === 1 ? 0.7 : 1}
            stroke="#ffffff20"
          />
        </g>
      ))}
      <path
        d="M200 208l110 30-110 30L90 238z"
        fill="#0c0c0d"
        stroke={TEAL}
        strokeOpacity="0.5"
      />
      <text
        x="200"
        y="244"
        textAnchor="middle"
        fill={TEAL}
        fontSize="13"
        fontWeight="700"
        fontFamily="inherit"
      >
        OneLake
      </text>
      <circle cx="90" cy="100" r="5" fill={TEAL} />
      <circle cx="310" cy="100" r="5" fill={TEAL} />
    </svg>
  )
}

/** Data Engineering — ETL/ELT pipeline: sources → transform → warehouse. */
export function IllustrationEngineering(props: Props) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <radialGradient id="eng-glow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0" stopColor={TEAL} stopOpacity="0.16" />
          <stop offset="1" stopColor={TEAL} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#eng-glow)" />
      {/* sources */}
      {[110, 150, 190].map((y, i) => (
        <rect
          key={i}
          x="34"
          y={y - 14}
          width="60"
          height="28"
          rx="6"
          fill="#141414"
          stroke="#ffffff18"
        />
      ))}
      {/* connectors */}
      <path
        d="M94 110H150l20 40M94 150h56M94 190h56l20-40"
        stroke={TEAL}
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      {/* transform node */}
      <rect
        x="168"
        y="120"
        width="64"
        height="60"
        rx="12"
        fill="#0c0c0d"
        stroke={TEAL}
        strokeOpacity="0.6"
      />
      <path d="M186 150l8-8 8 8-8 8zM206 150l8-8 8 8-8 8z" fill={TEAL} />
      {/* pipe to warehouse */}
      <path d="M232 150h56" stroke={TEAL} strokeWidth="2.5" fill="none" />
      <circle cx="260" cy="150" r="3" fill={TEAL} />
      {/* warehouse */}
      <rect
        x="300"
        y="112"
        width="70"
        height="76"
        rx="10"
        fill="#141414"
        stroke="#ffffff18"
      />
      <path d="M300 132h70M300 152h70M300 172h70" stroke="#ffffff18" />
      <ellipse
        cx="335"
        cy="112"
        rx="35"
        ry="10"
        fill={TEAL}
        fillOpacity="0.25"
        stroke={TEAL}
        strokeOpacity="0.5"
      />
    </svg>
  )
}

/** AI / ML — neural network graph with weighted connections. */
export function IllustrationAI(props: Props) {
  const layers = [
    [70, 130, 190],
    [90, 150, 210],
    [120, 180],
  ]
  const xs = [80, 200, 320]
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <radialGradient id="ai-glow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0" stopColor={TEAL} stopOpacity="0.2" />
          <stop offset="1" stopColor={TEAL} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#ai-glow)" />
      {layers
        .slice(0, 2)
        .map((layer, li) =>
          layer.map((y1, i) =>
            layers[li + 1].map((y2, j) => (
              <line
                key={`${li}-${i}-${j}`}
                x1={xs[li]}
                y1={y1}
                x2={xs[li + 1]}
                y2={y2}
                stroke={TEAL}
                strokeOpacity="0.28"
                strokeWidth="1.4"
              />
            )),
          ),
        )}
      {layers.map((layer, li) =>
        layer.map((y, i) => (
          <circle
            key={`${li}-${i}`}
            cx={xs[li]}
            cy={y}
            r="11"
            fill="#0c0c0d"
            stroke={TEAL}
            strokeWidth="2.5"
          />
        )),
      )}
      <circle cx="320" cy="120" r="4" fill={TEAL} />
      <circle cx="320" cy="180" r="4" fill={TEAL} />
    </svg>
  )
}

/** Consulting — blueprint / strategy with roadmap nodes. */
export function IllustrationConsulting(props: Props) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <radialGradient id="cons-glow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0" stopColor={TEAL} stopOpacity="0.16" />
          <stop offset="1" stopColor={TEAL} stopOpacity="0" />
        </radialGradient>
        <pattern
          id="cons-grid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path d="M24 0H0V24" fill="none" stroke="#ffffff0d" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#cons-glow)" />
      <rect
        x="40"
        y="50"
        width="320"
        height="200"
        rx="14"
        fill="#0c0c0d"
        stroke="#ffffff14"
      />
      <rect
        x="40"
        y="50"
        width="320"
        height="200"
        rx="14"
        fill="url(#cons-grid)"
      />
      <path
        d="M80 200c30-10 40-70 80-70s60 50 100 20 20-70 40-80"
        stroke={TEAL}
        strokeWidth="2.5"
        fill="none"
        strokeDasharray="4 6"
      />
      {[
        [80, 200],
        [160, 130],
        [240, 150],
        [320, 90],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle
            cx={x}
            cy={y}
            r="9"
            fill="#0c0c0d"
            stroke={TEAL}
            strokeWidth="2.5"
          />
          <circle cx={x} cy={y} r="3" fill={TEAL} />
        </g>
      ))}
    </svg>
  )
}

export const solutionIllustrations = {
  IllustrationBI,
  IllustrationFabric,
  IllustrationEngineering,
  IllustrationAI,
  IllustrationConsulting,
} as const

export type SolutionIllustrationKey = keyof typeof solutionIllustrations
