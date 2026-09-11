import { ArrowLeft, ArrowRight } from 'lucide-react'

const ageRanges = [
  '18–24',
  '25–34',
  '35–44',
  '45–54',
  '55+',
  'Not sure',
]

const genders = [
  'Mostly women',
  'Mostly men',
  'Everyone',
  'Not sure',
]

function AudienceStep({
  formData,
  updateForm,
  nextStep,
  previousStep,
}) {
  return (
    <section className="form-step">
      <div className="step-kicker">STEP 03 — YOUR AUDIENCE</div>

      <div className="step-header">
        <h1>Who are we trying to reach?</h1>

        <p>
          The better we understand your ideal customer, the better we can
          shape your targeting, messaging, creative, and offer.
        </p>
      </div>

      <div className="insight-box">
        <span className="insight-label">AUDIENCE NOTE</span>

        <p>
          Great marketing starts with specificity. “Everyone” is rarely a
          useful target audience, so describe the people most likely to buy.
        </p>
      </div>

      <div className="form-grid">
        <div className="field-group full-width">
          <label>Describe your ideal customer</label>

          <textarea
            rows="4"
            placeholder="Who typically buys from you? What kind of person gets the most value from your product or service?"
            value={formData.idealCustomer}
            onChange={(e) =>
              updateForm('idealCustomer', e.target.value)
            }
          />
        </div>

        <div className="field-group full-width">
          <label>Typical customer age range</label>

          <div className="choice-grid">
            {ageRanges.map((option) => (
              <button
                key={option}
                type="button"
                className={`choice-button ${
                  formData.ageRange === option ? 'selected' : ''
                }`}
                onClick={() => updateForm('ageRange', option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="field-group full-width">
          <label>Who do you primarily serve?</label>

          <div className="choice-grid">
            {genders.map((option) => (
              <button
                key={option}
                type="button"
                className={`choice-button ${
                  formData.gender === option ? 'selected' : ''
                }`}
                onClick={() => updateForm('gender', option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="field-group">
          <label>Locations you want to target</label>

          <input
            type="text"
            placeholder="Detroit, Metro Detroit, nationwide..."
            value={formData.targetLocations}
            onChange={(e) =>
              updateForm('targetLocations', e.target.value)
            }
          />
        </div>

        <div className="field-group">
          <label>How far will customers travel?</label>

          <input
            type="text"
            placeholder="10 miles, 25 miles, statewide, online..."
            value={formData.travelDistance}
            onChange={(e) =>
              updateForm('travelDistance', e.target.value)
            }
          />
        </div>

        <div className="field-group full-width">
          <label>What problem are they trying to solve?</label>

          <textarea
            rows="4"
            placeholder="What pain point, frustration, need, or desire brings customers to your business?"
            value={formData.customerProblem}
            onChange={(e) =>
              updateForm('customerProblem', e.target.value)
            }
          />
        </div>

        <div className="field-group full-width">
          <label>Why do customers choose you over competitors?</label>

          <textarea
            rows="4"
            placeholder="Price, speed, quality, convenience, experience, trust, unique service, location..."
            value={formData.differentiator}
            onChange={(e) =>
              updateForm('differentiator', e.target.value)
            }
          />
        </div>

        <div className="field-group full-width">
          <label>Describe your best customer in one paragraph</label>

          <textarea
            rows="5"
            placeholder="Example: Women ages 25–45 around Detroit who want premium protective hairstyles, value convenience, and are willing to pay more for a private studio experience."
            value={formData.bestCustomer}
            onChange={(e) =>
              updateForm('bestCustomer', e.target.value)
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
          Build the campaign
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  )
}

export default AudienceStep
