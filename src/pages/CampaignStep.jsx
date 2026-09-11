import { ArrowLeft, ArrowRight } from 'lucide-react'

const adPlatforms = [
  'Meta / Facebook & Instagram',
  'Google Ads',
  'TikTok Ads',
  'YouTube',
  'Other',
]

const budgets = [
  'Under $500',
  '$500–$1,000',
  '$1,000–$2,500',
  '$2,500–$5,000',
  '$5,000+',
]

function CampaignStep({
  formData,
  updateForm,
  nextStep,
  previousStep,
}) {
  const togglePlatform = (platform) => {
    const current = formData.adPlatforms || []

    if (current.includes(platform)) {
      updateForm(
        'adPlatforms',
        current.filter((item) => item !== platform)
      )
    } else {
      updateForm('adPlatforms', [...current, platform])
    }
  }

  return (
    <section className="form-step">
      <div className="step-kicker">STEP 04 — YOUR CAMPAIGN</div>

      <div className="step-header">
        <h1>What are we putting in front of them?</h1>

        <p>
          Now we need to understand your offer, economics, current marketing,
          and how aggressively you want to grow.
        </p>
      </div>

      <div className="insight-box">
        <span className="insight-label">CAMPAIGN NOTE</span>

        <p>
          Advertising gets attention. Your offer gives people a reason to act.
          The strongest campaigns combine the right audience, message, creative,
          and offer.
        </p>
      </div>

      <div className="form-grid">
        <div className="field-group full-width">
          <label>What is your primary offer?</label>

          <textarea
            rows="4"
            placeholder="Example: Free consultation, $50 off your first service, book today, free estimate, limited-time package..."
            value={formData.primaryOffer}
            onChange={(e) =>
              updateForm('primaryOffer', e.target.value)
            }
          />
        </div>

        <div className="field-group">
          <label>Average sale value</label>

          <input
            type="text"
            placeholder="Example: $150"
            value={formData.averageSaleValue}
            onChange={(e) =>
              updateForm('averageSaleValue', e.target.value)
            }
          />
        </div>

        <div className="field-group">
          <label>Highest-value product or service</label>

          <input
            type="text"
            placeholder="Example: Full service package"
            value={formData.highestValueService}
            onChange={(e) =>
              updateForm('highestValueService', e.target.value)
            }
          />
        </div>

        <div className="field-group full-width">
          <label>Are you currently running paid ads?</label>

          <div className="choice-grid">
            {['Yes', 'No', 'I have before'].map((option) => (
              <button
                key={option}
                type="button"
                className={`choice-button ${
                  formData.currentlyRunningAds === option ? 'selected' : ''
                }`}
                onClick={() =>
                  updateForm('currentlyRunningAds', option)
                }
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="field-group full-width">
          <label>Which platforms have you used?</label>

          <div className="choice-grid">
            {adPlatforms.map((platform) => {
              const isSelected =
                formData.adPlatforms?.includes(platform)

              return (
                <button
                  key={platform}
                  type="button"
                  className={`choice-button ${
                    isSelected ? 'selected' : ''
                  }`}
                  onClick={() => togglePlatform(platform)}
                >
                  {platform}
                </button>
              )
            })}
          </div>
        </div>

        <div className="field-group full-width">
          <label>Monthly marketing budget</label>

          <div className="choice-grid">
            {budgets.map((budget) => (
              <button
                key={budget}
                type="button"
                className={`choice-button ${
                  formData.monthlyBudget === budget ? 'selected' : ''
                }`}
                onClick={() =>
                  updateForm('monthlyBudget', budget)
                }
              >
                {budget}
              </button>
            ))}
          </div>
        </div>

        <div className="field-group full-width">
          <label>What marketing have you tried before?</label>

          <textarea
            rows="4"
            placeholder="Paid ads, organic social media, influencers, flyers, email, referrals, SEO, cold outreach..."
            value={formData.previousMarketing}
            onChange={(e) =>
              updateForm('previousMarketing', e.target.value)
            }
          />
        </div>

        <div className="field-group">
          <label>What worked?</label>

          <textarea
            rows="5"
            placeholder="Tell us what has produced leads, sales, engagement, or positive results."
            value={formData.whatWorked}
            onChange={(e) =>
              updateForm('whatWorked', e.target.value)
            }
          />
        </div>

        <div className="field-group">
          <label>What didn’t work?</label>

          <textarea
            rows="5"
            placeholder="Tell us what you spent time or money on without seeing strong results."
            value={formData.whatDidntWork}
            onChange={(e) =>
              updateForm('whatDidntWork', e.target.value)
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
          Finish launch details
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  )
}

export default CampaignStep
