import React from 'react'

export default function DetailRow({ label, value }) {
  return (
    <div className="flex items-center justify-between text-white/90">
      <span className="text-sm">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  )
}
