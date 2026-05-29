import React from 'react'
import Icon from './Icon'
import DetailRow from './DetailRow'

export default function MainCard({ city, current }) {
  const { temp, feelsLike, humidity, wind, description, condition } = current
  return (
    <section className="card-glass p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-white text-xl md:text-2xl font-semibold">{city}</h2>
          <p className="text-white/80 capitalize">{description}</p>
        </div>
        <Icon owMain={condition} className="w-16 h-16 md:w-20 md:h-20" />
      </div>

      <div className="mt-4 md:mt-6 flex items-end gap-4">
        <div className="text-white text-5xl md:text-7xl font-semibold leading-none">{temp}°C</div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <DetailRow label="Humidity" value={`${humidity}%`} />
        <DetailRow label="Wind" value={`${wind} km/h`} />
        <DetailRow label="Feels like" value={`${feelsLike}°C`} />
      </div>
    </section>
  )
}
