import { ArrowLeft, ArrowRight } from 'lucide-react'

const goals = [
  'Get more leads',
  'Book more appointments',
  'Generate phone calls',
  'Increase online sales',
  'Grow local awareness',
  'Promote an event',
  'Launch a new product/service',
  'Grow social media',
  'Other',
]

function GoalStep({
  formData,
  updateForm,
  nextStep,
  previousStep,
}) {
  return (
    <section className="form-step">
      <div className="step-kicker">STEP 02 — YOUR GOAL</div>

      <div className="step-header">
        <h1>What are we trying to make happen?</h1>

        <p>
          Strong campaigns start with one clear objective. Tell us what
          result matters most so we can build the strategy around it.
        </p>
      </div>

      <div className="insight-box">
        <span className="insight-label">STRATEGY NOTE</span>

        <p>
          Trying to optimize for too many outcomes at once usually weakens
          the campaign. Pick the primary result you want us to drive first.
        </p>
      </div>

      <div className="form-grid">
        <div className="field-group full-width">
          <label>What is your primary marketing goal?</label>

          <div className="goal-grid">
            {goals.map((goal) => (
              <button
                key={goal}
                type="button"
                className={`goal-card ${
                  formData.primaryGoal === goal ? 'selected' : ''
                }`}
                onClick={() => updateForm('primaryGoal', goal)}
              >
                <span>{goal}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="field-group full-width">
          <label>What would make this campaign successful?</label>

          <textarea
            rows="4"
            placeholder="Example: 20 qualified leads per month, 10 new appointments per week, or $5,000/month in online sales."
            value={formData.successTarget}
            onChange={(e) =>
              updateForm('successTarget', e.target.value)
            }
          />
        </div>

        <div className="field-group full-width">
          <label>
            Which service or product should we promote first?
          </label>

          <textarea
            rows="4"
            placeholder="Tell us the main service, product, offer, or category you want the campaign focused on."
            value={formData.promotedService}
            onChange={(e) =>
              updateForm('promotedService', e.target.value)
            }
          />
        </div>
      </div>

      <div className="form-actions">
        <button
          type="button"
          className="secondary-button"
          onClick={previousStep}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          type="button"
          className="primary-button"
          onClick={nextStep}
        >
          Define the audience
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  )
}

export default GoalStep
