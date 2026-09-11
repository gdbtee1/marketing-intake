import { useState } from 'react'
import {
  ArrowLeft,
  Check,
  Upload,
  Send,
} from 'lucide-react'

function LaunchStep({
  formData,
  updateForm,
  previousStep,
}) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = new FormData()

    Object.entries(formData).forEach(([key, value]) => {
      payload.append(
        key,
        Array.isArray(value) ? value.join(', ') : value
      )
    })

    payload.append(
      '_subject',
      `New Techuvo Marketing Intake — ${formData.businessName || 'New Lead'}`
    )

    payload.append('_captcha', 'false')
    payload.append('_template', 'table')

    const fileInput = document.getElementById('marketing-assets')

    if (fileInput?.files?.length) {
      Array.from(fileInput.files).forEach((file) => {
        payload.append('attachment', file)
      })
    }

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/techuvodesign@gmail.com',
        {
          method: 'POST',
          body: payload,
        }
      )

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.error(error)
      alert(
        'Something went wrong while sending your marketing brief. Please try again.'
      )
    }
  }

  if (submitted) {
    return (
      <section className="form-step confirmation-step">
        <div className="confirmation-icon">
          <Check size={30} strokeWidth={2.2} />
        </div>

        <div className="step-kicker">
          MARKETING BRIEF RECEIVED
        </div>

        <div className="step-header">
          <h1>Your strategy brief is in.</h1>

          <p>
            We’ll review your business, audience, offer, current marketing,
            and campaign goals before moving into strategy and execution.
          </p>
        </div>

        <div className="confirmation-card">
          <span className="confirmation-label">
            WHAT HAPPENS NEXT
          </span>

          <h2>
            We turn this information into a campaign plan.
          </h2>

          <p>
            Techuvo will use your answers to understand what should be
            promoted, who should see it, and what the campaign needs to
            accomplish.
          </p>
        </div>
      </section>
    )
  }

  return (
    <form
      className="form-step"
      onSubmit={handleSubmit}
    >
      <div className="step-kicker">
        STEP 05 — LAUNCH DETAILS
      </div>

      <div className="step-header">
        <h1>Give us what we need to launch.</h1>

        <p>
          Add your marketing accounts, creative assets, and any final context
          that will help us prepare your campaign properly.
        </p>
      </div>

      <div className="insight-box">
        <span className="insight-label">
          FINAL STEP
        </span>

        <p>
          The more complete your assets and account access are, the faster
          we can move from strategy into execution.
        </p>
      </div>

      <div className="form-grid">
        <div className="field-group full-width">
          <label>Upload marketing assets</label>

          <label className="upload-zone">
            <Upload size={26} />

            <strong>
              Drop files here or choose files
            </strong>

            <span>
              Logos, photos, videos, testimonials, flyers, brand guides,
              or previous ads
            </span>

            <input
              id="marketing-assets"
              type="file"
              multiple
              accept="image/*,video/*,.pdf,.doc,.docx"
            />
          </label>
        </div>

        <div className="field-group">
          <label>Facebook page URL</label>

          <input
            type="url"
            placeholder="https://facebook.com/yourbusiness"
            value={formData.facebookUrl}
            onChange={(e) =>
              updateForm('facebookUrl', e.target.value)
            }
          />
        </div>

        <div className="field-group">
          <label>Instagram</label>

          <input
            type="text"
            placeholder="@yourbusiness"
            value={formData.instagramUrl}
            onChange={(e) =>
              updateForm('instagramUrl', e.target.value)
            }
          />
        </div>

        <div className="field-group">
          <label>TikTok</label>

          <input
            type="text"
            placeholder="@yourbusiness"
            value={formData.tiktokUrl}
            onChange={(e) =>
              updateForm('tiktokUrl', e.target.value)
            }
          />
        </div>

        <div className="field-group">
          <label>Google Business Profile</label>

          <input
            type="url"
            placeholder="Paste your Google Business Profile link"
            value={formData.googleBusinessUrl}
            onChange={(e) =>
              updateForm('googleBusinessUrl', e.target.value)
            }
          />
        </div>

        <div className="field-group full-width">
          <label>
            Do you have access to your Meta Business Manager?
          </label>

          <div className="choice-grid">
            {['Yes', 'No', 'Not sure'].map((option) => (
              <button
                key={option}
                type="button"
                className={`choice-button ${
                  formData.metaAccess === option
                    ? 'selected'
                    : ''
                }`}
                onClick={() =>
                  updateForm('metaAccess', option)
                }
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="field-group full-width">
          <label>
            Do you currently have tracking installed?
          </label>

          <p className="field-helper">
            This can include the Meta Pixel, Google Analytics,
            Google Ads conversion tracking, or similar tools.
          </p>

          <div className="choice-grid">
            {['Yes', 'No', 'Not sure'].map((option) => (
              <button
                key={option}
                type="button"
                className={`choice-button ${
                  formData.trackingInstalled === option
                    ? 'selected'
                    : ''
                }`}
                onClick={() =>
                  updateForm('trackingInstalled', option)
                }
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="field-group full-width">
          <label>
            Anything else we should know?
          </label>

          <textarea
            rows="6"
            placeholder="Upcoming promotions, deadlines, brand restrictions, competitors, special requests, previous agency experience, or anything else that could help us."
            value={formData.finalNotes}
            onChange={(e) =>
              updateForm('finalNotes', e.target.value)
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
          type="submit"
          className="primary-button submit-button"
        >
          Send Marketing Brief
          <Send size={18} />
        </button>
      </div>
    </form>
  )
}

export default LaunchStep
