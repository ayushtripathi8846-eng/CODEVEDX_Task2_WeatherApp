import React from 'react'
import Icon from './Icon'
import { kelvinToC } from '../utils/weatherUtils'

export default function ForecastCard({ item }) {
  const k = item.weather?.[0]?.main || ''
  const desc = item.weather?.[0]?.description || ''
  return (
    <div className="card-glass p-4 w-40 flex-shrink-0 hover:scale-[1.02] transition-transform">
      <div className="text-white/90 text-sm">
        {new Date(item.dt * 1000).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
      </div>
      <div className="flex items-center gap-3 mt-2">
        <Icon owMain={k} className="w-10 h-10" />
        <div className="text-white">
          <div className="text-lg font-semibold">{kelvinToC(item.main?.temp)}°C</div>
          <div className="text-xs opacity-80 capitalize">{desc}</div>
        </div>
      </div>
    </div>
  )
}
