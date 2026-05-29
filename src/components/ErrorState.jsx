import React from 'react'

export default function ErrorState({ message, onRetry }) {
  return (
    <div className="card-glass p-6 text-center text-white">
      <p className="text-sm opacity-90">{message || 'Something went wrong'}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white"
        >
          Retry
        </button>
      )}
    </div>
  )
}
