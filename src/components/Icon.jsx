import React from 'react'
import { iconMap } from '../utils/weatherUtils'
import { clsx } from 'clsx'

// Minimal, scalable icons (SVG). Visually prominent.
const paths = {
  sunny: (
    <g>
      <circle cx="12" cy="12" r="4" />
      <g strokeLinecap="round">
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
        <line x1="4.2" y1="4.2" x2="6.3" y2="6.3" />
        <line x1="17.7" y1="17.7" x2="19.8" y2="19.8" />
        <line x1="4.2" y1="19.8" x2="6.3" y2="17.7" />
        <line x1="17.7" y1="6.3" x2="19.8" y2="4.2" />
      </g>
    </g>
  ),
  cloudy: (
    <g>
      <path d="M7 16a4 4 0 1 1 1-7.874A5.5 5.5 0 0 1 18 11a4 4 0 0 1 0 8H8a4 4 0 0 1-1-7.874" />
    </g>
  ),
  rain: (
    <g>
      <path d="M7 16a4 4 0 1 1 1-7.874A5.5 5.5 0 0 1 18 11a4 4 0 0 1 0 8H8" />
      <g strokeLinecap="round">
        <line x1="9" y1="20" x2="9" y2="22" />
        <line x1="13" y1="20" x2="13" y2="22" />
        <line x1="17" y1="20" x2="17" y2="22" />
      </g>
    </g>
  ),
  storm: (
    <g>
      <path d="M7 16a4 4 0 1 1 1-7.874A5.5 5.5 0 0 1 18 11a4 4 0 0 1 0 8H8" />
      <polyline points="12 14 9 20 14 18 11 24" />
    </g>
  ),
  snow: (
    <g>
      <path d="M7 16a4 4 0 1 1 1-7.874A5.5 5.5 0 0 1 18 11a4 4 0 0 1 0 8H8" />
      <g strokeLinecap="round">
        <line x1="10" y1="20" x2="10" y2="22" />
        <line x1="14" y1="20" x2="14" y2="22" />
        <line x1="12" y1="19" x2="12" y2="23" />
      </g>
    </g>
  ),
  fog: (
    <g>
      <path d="M7 16a4 4 0 1 1 1-7.874A5.5 5.5 0 0 1 18 11a4 4 0 0 1 0 8H8" />
      <g strokeLinecap="round">
        <line x1="6" y1="20" x2="18" y2="20" />
        <line x1="8" y1="22" x2="20" y2="22" />
      </g>
    </g>
  ),
  wind: (
    <g strokeLinecap="round">
      <path d="M3 12h10a3 3 0 1 0-3-3" />
      <path d="M3 18h14a3 3 0 1 0-3-3" />
    </g>
  )
}

export default function Icon({ owMain = '', className = '' }) {
  const key = (paths[owMain.toLowerCase()] && owMain.toLowerCase()) || iconMap[owMain.toLowerCase()] || iconMap['clouds']
  const node = paths[key] || paths.cloudy
  return (
    <svg
      viewBox="0 0 24 24"
      className={clsx('w-16 h-16 stroke-white/90 fill-none', className)}
      strokeWidth="1.6"
    >
      {node}
    </svg>
  )
}
