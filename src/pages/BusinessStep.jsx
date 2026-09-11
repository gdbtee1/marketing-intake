import { ArrowRight } from 'lucide-react'

function BusinessStep({ formData, updateForm, nextStep }) {
  return (
    <section className="form-step">
      <div className="step-kicker">STEP 01 — YOUR BUSINESS</div>

      <div className="step-header">
        <h1>First, tell us who we’re growing.</h1>
        <p>
          Give us the core details about your business so we can understand
          what you do, where you operate, and how customers currently find you.
        </p>
      </div>

      <div className="form-grid">
        <div className="field-group full-width">
          <label>Business name</label>
          <input
            type="text"
            placeholder="Your business name"
            value={formData.businessName}
            onChange={(e) => updateForm('businessName', e.target.value)}
          />
        </div>

        <div className="field-group">
          <label>Your name</label>
          <input
            type="text"
            placeholder="First and last name"
            value={formData.name}
            onChange={(e) => updateForm('name', e.target.value)}
          />
        </div>

        <div className="field-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="you@business.com"
            value={formData.email}
            onChange={(e) => updateForm('email', e.target.value)}
          />
        </div>

        <div className="field-group">
          <label>Phone</label>
          <input
            type="tel"
            placeholder="(555) 555-5555"
            value={formData.phone}
            onChange={(e) => updateForm('phone', e.target.value)}
          />
        </div>

        <div className="field-group">
          <label>Industry</label>
          <input
            type="text"
            placeholder="Beauty, construction, clothing, legal..."
            value={formData.industry}
            onChange={(e) => updateForm('industry', e.target.value)}
          />
        </div>

        <div className="field-group">
          <label>City / service area</label>
          <input
            type="text"
            placeholder="Detroit, MI / Nationwide / etc."
            value={formData.city}
            onChange={(e) => updateForm('city', e.target.value)}
          />
        </div>

        <div className="field-group">
          <label>Website</label>
          <input
            type="url"
            placeholder="https://yourbusiness.com"
            value={formData.website}
            onChange={(e) => updateForm('website', e.target.value)}
          />
        </div>

        <div className="field-group full-width">
          <label>Social media</label>
          <input
            type="text"
            placeholder="@yourbusiness or paste your main social links"
            value={formData.socials}
            onChange={(e) => updateForm('socials', e.target.value)}
          />
        </div>

        <div className="field-group full-width">
          <label>How long have you been in business?</label>

          <div className="choice-grid">
            {[
              'Just getting started',
              'Less than 1 year',
              '1–3 years',
              '3–5 years',
              '5+ years',
            ].map((option) => (
              <button
                key={option}
                type="button"
                className={`choice-button ${
                  formData.yearsInBusiness === option ? 'selected' : ''
                }`}
                onClick={() => updateForm('yearsInBusiness', option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="form-actions right">
        <button
          type="button"
          className="primary-button"
          onClick={nextStep}
        >
          Continue to goals
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  )
}

export default BusinessStep
