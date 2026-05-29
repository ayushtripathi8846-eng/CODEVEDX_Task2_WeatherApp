import React, { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import MainCard from './components/MainCard'
import ForecastList from './components/ForecastList'
import ErrorState from './components/ErrorState'
import Toggle from './components/Toggle'
import { Skeleton } from './components/Skeleton'
import AnimatedBackground from './components/AnimatedBackground'
import useWeather from './hooks/useWeather'

export default function App() {
  const [dark, setDark] = useState(false)
  const { query, setQuery, city, current, forecast, loading, error, fetchByCity, autoDetect } = useWeather()

  // Dark mode class on html
  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [dark])

  // Auto-detect on first load
  useEffect(() => {
    autoDetect()
  }, [autoDetect])

  const condition = current?.condition || ''
  const temp = current?.temp
  const containerClasses = useMemo(
    () => 'relative z-10 p-4 md:p-8',
    []
  )

  return (
    <AnimatedBackground condition={condition} temp={temp} isDark={dark}>
      <div className={containerClasses}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <Header />
            <Toggle checked={dark} onChange={setDark} label="Dark" />
          </div>

          <div className="mt-2">
            <SearchBar
              onSearch={fetchByCity}
              initial={query}
              onLocate={autoDetect}
            />
          </div>

          <main className="mt-6 grid grid-cols-1 gap-6">
            {loading && (
              <>
                <div className="card-glass p-6">
                  <div className="flex items-center gap-4">
                    <Skeleton className="w-16 h-16 rounded-xl" />
                    <div className="flex-1">
                      <Skeleton className="h-6 w-40 mb-2" />
                      <Skeleton className="h-4 w-64" />
                    </div>
                    <Skeleton className="h-10 w-24" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <Skeleton className="h-6" />
                    <Skeleton className="h-6" />
                    <Skeleton className="h-6" />
                  </div>
                </div>
                <div className="flex gap-4 overflow-x-auto">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="card-glass p-4 w-40">
                      <Skeleton className="h-4 w-20 mb-4" />
                      <div className="flex items-center gap-3">
                        <Skeleton className="w-10 h-10 rounded-lg" />
                        <div className="flex-1">
                          <Skeleton className="h-5 w-16 mb-2" />
                          <Skeleton className="h-3 w-24" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {!loading && error && <ErrorState message={error} onRetry={autoDetect} />}

            {!loading && !error && current && (
              <>
                <MainCard city={city} current={current} />
                {forecast?.length > 0 && (
                  <section aria-label="5-day forecast">
                    <h3 className="text-white text-lg font-semibold mb-2">5-day forecast</h3>
                    <ForecastList items={forecast} />
                  </section>
                )}
              </>
            )}
          </main>

          <footer className="mt-10 text-center text-white/70 text-xs">
            Data by OpenWeather • Built with React + Tailwind
          </footer>
        </div>
      </div>
    </AnimatedBackground>
  )
}
