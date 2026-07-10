/* eslint-disable react-refresh/only-export-components -- this file is a library of logo components plus the `brandLogos` array that indexes them */
import type { SVGProps } from 'react'

/**
 * Placeholder "LogoIpsum"-style brand marks rendered as inline SVG.
 * Monochrome (currentColor) so they blend into the dark theme as client logos
 * until real client logos are provided.
 */

type LogoProps = SVGProps<SVGSVGElement>

function LogoIpsum1(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 160 32"
      fill="none"
      role="img"
      aria-label="LogoIpsum"
      {...props}
    >
      <path
        d="M6 6l10 20 10-20"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <text
        x="34"
        y="22"
        fill="currentColor"
        fontFamily="inherit"
        fontSize="19"
        fontWeight="800"
        letterSpacing="-0.5"
      >
        logoipsum
      </text>
    </svg>
  )
}

function LogoIpsum2(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 160 32"
      fill="none"
      role="img"
      aria-label="LogoIpsum"
      {...props}
    >
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 8v16M8 16h16" stroke="currentColor" strokeWidth="2.5" />
      <text
        x="38"
        y="22"
        fill="currentColor"
        fontFamily="inherit"
        fontSize="19"
        fontWeight="800"
        letterSpacing="-0.5"
      >
        logoipsum
      </text>
    </svg>
  )
}

function LogoIpsum3(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 160 32"
      fill="none"
      role="img"
      aria-label="LogoIpsum"
      {...props}
    >
      <rect
        x="5"
        y="5"
        width="22"
        height="22"
        rx="6"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="16" cy="16" r="4.5" fill="currentColor" />
      <text
        x="36"
        y="22"
        fill="currentColor"
        fontFamily="inherit"
        fontSize="19"
        fontWeight="800"
        letterSpacing="-0.5"
      >
        logoipsum
      </text>
    </svg>
  )
}

function LogoIpsum4(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 160 32"
      fill="none"
      role="img"
      aria-label="LogoIpsum"
      {...props}
    >
      <path
        d="M16 4l12 7v10l-12 7-12-7V11z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
      <text
        x="36"
        y="22"
        fill="currentColor"
        fontFamily="inherit"
        fontSize="19"
        fontWeight="800"
        letterSpacing="-0.5"
      >
        logoipsum
      </text>
    </svg>
  )
}

function LogoIpsum5(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 160 32"
      fill="none"
      role="img"
      aria-label="LogoIpsum"
      {...props}
    >
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2.4" />
      <ellipse
        cx="16"
        cy="16"
        rx="4.5"
        ry="11"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <text
        x="38"
        y="22"
        fill="currentColor"
        fontFamily="inherit"
        fontSize="19"
        fontWeight="800"
        letterSpacing="-0.5"
      >
        logoipsum
      </text>
    </svg>
  )
}

function LogoIpsum6(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 160 32"
      fill="none"
      role="img"
      aria-label="LogoIpsum"
      {...props}
    >
      <rect x="5" y="6" width="22" height="5" rx="2.5" fill="currentColor" />
      <rect
        x="5"
        y="14"
        width="22"
        height="5"
        rx="2.5"
        fill="currentColor"
        fillOpacity="0.7"
      />
      <rect
        x="5"
        y="22"
        width="22"
        height="5"
        rx="2.5"
        fill="currentColor"
        fillOpacity="0.4"
      />
      <text
        x="36"
        y="22"
        fill="currentColor"
        fontFamily="inherit"
        fontSize="19"
        fontWeight="800"
        letterSpacing="-0.5"
      >
        logoipsum
      </text>
    </svg>
  )
}

function LogoIpsum7(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 160 32"
      fill="none"
      role="img"
      aria-label="LogoIpsum"
      {...props}
    >
      <path
        d="M4 26L14 8l6 10 4-6 6 14z"
        fill="currentColor"
        fillOpacity="0.85"
      />
      <text
        x="40"
        y="22"
        fill="currentColor"
        fontFamily="inherit"
        fontSize="19"
        fontWeight="800"
        letterSpacing="-0.5"
      >
        logoipsum
      </text>
    </svg>
  )
}

export const brandLogos = [
  LogoIpsum1,
  LogoIpsum2,
  LogoIpsum3,
  LogoIpsum4,
  LogoIpsum5,
  LogoIpsum6,
  LogoIpsum7,
]
