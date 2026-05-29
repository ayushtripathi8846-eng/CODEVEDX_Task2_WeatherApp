import React, { useState } from 'react'

export default function SearchBar({ onSearch, initial = '', onLocate }) {
  const [value, setValue] = useState(initial)

  function submit(e) {
    e.preventDefault()
    const v = value.trim()
    if (v) onSearch?.(v)
  }

  return (
    <form onSubmit={submit} className="w-full flex items-center justify-center">
      <div className="flex w-full max-w-xl gap-2">
        <input
          className="flex-1 px-4 py-3 rounded-xl bg-white/20 placeholder-white/70 text-white outline-none focus:ring-2 ring-white/50"
          placeholder="Search city e.g. London"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-3 rounded-xl bg-white/80 hover:bg-white text-slate-800 font-medium"
        >
          Search
        </button>
        <button
          type="button"
          title="Use my location"
          onClick={onLocate}
          className="px-3 py-3 rounded-xl bg-white/20 hover:bg-white/30 text-white"
        >
          🎯
        </button>
      </div>
    </form>
  )
}
