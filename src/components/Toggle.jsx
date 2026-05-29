import React from 'react'

export default function Toggle({ checked, onChange, label }) {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none">
      <span className="text-white/90 text-sm">{label}</span>
      <span className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={e => onChange?.(e.target.checked)}
        />
        <span className={`block w-11 h-6 rounded-full ${checked ? 'bg-white/70' : 'bg-white/30'}`}></span>
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transform transition-transform ${checked ? 'translate-x-5' : ''}`}
        ></span>
      </span>
    </label>
  )
}
