import { Check } from 'lucide-react'

function Sidebar({ steps, currentStep, setCurrentStep }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-eyebrow">
        Marketing Intake
      </div>

      <div className="sidebar-title">
        Build your campaign brief.
      </div>

      <p className="sidebar-copy">
        Give us the context we need to understand your business,
        audience, offer, and campaign goals.
      </p>

      <div className="steps-list">
        {steps.map((step, index) => {
          const stepNumber = index + 1
          const isActive = stepNumber === currentStep
          const isComplete = stepNumber < currentStep

          return (
            <button
              key={step}
              type="button"
              className={`step-item ${isActive ? 'active' : ''} ${
                isComplete ? 'complete' : ''
              }`}
              onClick={() => {
                if (stepNumber <= currentStep) {
                  setCurrentStep(stepNumber)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
            >
              <div className="step-number">
                {isComplete ? (
                  <Check size={17} strokeWidth={2.4} />
                ) : (
                  String(stepNumber).padStart(2, '0')
                )}
              </div>

              <div className="step-text">
                <span className="step-label">
                  STEP {String(stepNumber).padStart(2, '0')}
                </span>

                <span className="step-name">
                  {step}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      <div className="sidebar-footer">
        <span className="sidebar-footer-line" />
        <p>
          Strategy starts with clarity.
        </p>
      </div>
    </aside>
  )
}

export default Sidebar
