export function kelvinToC(k) {
  return Math.round(k - 273.15)
}

export function msToKmh(ms) {
  return Math.round(ms * 3.6)
}

export function pickDailyForecast(list) {
  // pick an item near 12:00 each day
  const byDay = {}
  list.forEach(item => {
    const dt = new Date(item.dt * 1000)
    const dayKey = dt.toISOString().slice(0, 10)
    const hour = dt.getUTCHours()
    const diffNoon = Math.abs(hour - 12)
    if (!byDay[dayKey] || diffNoon < byDay[dayKey].noonDiff) {
      byDay[dayKey] = { item, noonDiff: diffNoon }
    }
  })
  // return next 5 days (including today)
  return Object.values(byDay)
    .map(v => v.item)
    .slice(0, 5)
}

export function gradientByWeather(main, temp, isDark) {
  const base = (a, b) =>
    `bg-gradient-to-br ${a} ${b}`
    
  if (temp !== undefined && temp !== null) {
    if (temp >= 30) {
      return base(isDark ? 'from-red-900 to-orange-900' : 'from-red-500 to-orange-400', '')
    } else if (temp >= 20 && (main || '').toLowerCase() === 'clear') {
      return base(isDark ? 'from-orange-800 to-yellow-900' : 'from-orange-300 to-yellow-400', '')
    } else if (temp <= 5) {
      return base(isDark ? 'from-slate-800 to-indigo-900' : 'from-blue-300 to-cyan-200', '')
    } else if (temp <= 15) {
      return base(isDark ? 'from-indigo-900 to-blue-900' : 'from-blue-200 to-sky-300', '')
    }
  }

  switch ((main || '').toLowerCase()) {
    case 'clear':
      return base(
        isDark ? 'from-sky-700 to-indigo-900' : 'from-sky-200 to-blue-400',
        ''
      )
    case 'clouds':
      return base(
        isDark ? 'from-slate-700 to-slate-900' : 'from-slate-200 to-slate-400',
        ''
      )
    case 'rain':
    case 'drizzle':
      return base(
        isDark ? 'from-blue-800 to-slate-900' : 'from-blue-200 to-slate-400',
        ''
      )
    case 'thunderstorm':
      return base(
        isDark ? 'from-indigo-900 to-black' : 'from-indigo-300 to-slate-600',
        ''
      )
    case 'snow':
      return base(
        isDark ? 'from-slate-600 to-slate-900' : 'from-blue-50 to-slate-200',
        ''
      )
    case 'mist':
    case 'fog':
    case 'haze':
      return base(
        isDark ? 'from-slate-700 to-slate-900' : 'from-slate-100 to-slate-300',
        ''
      )
    default:
      return base(
        isDark ? 'from-slate-700 to-slate-900' : 'from-sky-100 to-blue-300',
        ''
      )
  }
}

export function localTimeFromTZ(dt, timezone) {
  // timezone is in seconds offset from UTC
  const local = new Date((dt + timezone) * 1000)
  return local
}

export const iconMap = {
  clear: 'sunny',
  clouds: 'cloudy',
  rain: 'rain',
  drizzle: 'rain',
  thunderstorm: 'storm',
  snow: 'snow',
  mist: 'fog',
  smoke: 'fog',
  haze: 'fog',
  dust: 'fog',
  fog: 'fog',
  sand: 'fog',
  ash: 'fog',
  squall: 'wind',
  tornado: 'wind'
}
