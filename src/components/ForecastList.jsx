import React from 'react'
import ForecastCard from './ForecastCard'

export default function ForecastList({ items }) {
  return (
    <div className="mt-6 overflow-x-auto no-scrollbar">
      <div className="flex gap-4 min-w-max">
        {items.map((it) => (
          <ForecastCard key={it.dt} item={it} />
        ))}
      </div>
    </div>
  )
}
