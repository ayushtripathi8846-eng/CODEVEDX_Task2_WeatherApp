import { useCallback, useEffect, useMemo, useState } from 'react'
import { kelvinToC, msToKmh, pickDailyForecast } from '../utils/weatherUtils'

const API = 'https://api.openweathermap.org/data/2.5'

export default function useWeather() {
  const [query, setQuery] = useState('')
  const [city, setCity] = useState(null)
  const [current, setCurrent] = useState(null)
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const key = import.meta.env.VITE_OPENWEATHER_API_KEY

  const fetchByCity = useCallback(async (name) => {
    if (!name) return
    setLoading(true); setError(null)
    try {
      const [cRes, fRes] = await Promise.all([
        fetch(`${API}/weather?q=${encodeURIComponent(name)}&appid=${key}`),
        fetch(`${API}/forecast?q=${encodeURIComponent(name)}&appid=${key}`)
      ])
      if (!cRes.ok) throw new Error('City not found')
      const cData = await cRes.json()
      const fData = await fRes.json()
      setCity(cData.name)
      setCurrent({
        temp: kelvinToC(cData.main.temp),
        feelsLike: kelvinToC(cData.main.feels_like),
        humidity: cData.main.humidity,
        wind: msToKmh(cData.wind.speed),
        condition: cData.weather?.[0]?.main || '',
        description: cData.weather?.[0]?.description || '',
        icon: cData.weather?.[0]?.icon || '01d',
        timezone: cData.timezone,
        dt: cData.dt
      })
      setForecast(pickDailyForecast(fData.list || []))
    } catch (e) {
      setError(e.message || 'Something went wrong')
      setCity(null); setCurrent(null); setForecast([])
    } finally {
      setLoading(false)
    }
  }, [key])

  const fetchByCoords = useCallback(async (lat, lon) => {
    setLoading(true); setError(null)
    try {
      const [cRes, fRes] = await Promise.all([
        fetch(`${API}/weather?lat=${lat}&lon=${lon}&appid=${key}`),
        fetch(`${API}/forecast?lat=${lat}&lon=${lon}&appid=${key}`)
      ])
      if (!cRes.ok) throw new Error('Location not found')
      const cData = await cRes.json()
      const fData = await fRes.json()
      setCity(cData.name)
      setCurrent({
        temp: kelvinToC(cData.main.temp),
        feelsLike: kelvinToC(cData.main.feels_like),
        humidity: cData.main.humidity,
        wind: msToKmh(cData.wind.speed),
        condition: cData.weather?.[0]?.main || '',
        description: cData.weather?.[0]?.description || '',
        icon: cData.weather?.[0]?.icon || '01d',
        timezone: cData.timezone,
        dt: cData.dt
      })
      setForecast(pickDailyForecast(fData.list || []))
    } catch (e) {
      setError(e.message || 'Something went wrong')
      setCity(null); setCurrent(null); setForecast([])
    } finally {
      setLoading(false)
    }
  }, [key])

  const autoDetect = useCallback(() => {
    if (!navigator.geolocation) return
    navigator.geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords
        fetchByCoords(latitude, longitude)
      },
      () => setError('Location permission denied')
    )
  }, [fetchByCoords])

  const state = useMemo(() => ({
    query, setQuery, city, current, forecast, loading, error,
    fetchByCity, autoDetect
  }), [query, city, current, forecast, loading, error, fetchByCity, autoDetect])

  return state
}
