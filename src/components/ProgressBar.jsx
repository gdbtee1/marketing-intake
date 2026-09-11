function ProgressBar({ currentStep, totalSteps }) {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="progress-shell">
      <div className="progress-meta">
        <span>
          MARKETING BRIEF — {currentStep}/{totalSteps}
        </span>

        <span>
          {Math.round(progress)}%
        </span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
