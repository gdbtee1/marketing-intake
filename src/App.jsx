import { useState } from 'react'
import './App.css'

import Sidebar from './components/Sidebar'
import ProgressBar from './components/ProgressBar'

import BusinessStep from './pages/BusinessStep'
import GoalStep from './pages/GoalStep'
import AudienceStep from './pages/AudienceStep'
import CampaignStep from './pages/CampaignStep'
import LaunchStep from './pages/LaunchStep'

const steps = [
  'Your business',
  'Your goal',
  'Your audience',
  'Your campaign',
  'Launch details',
]

function App() {
  const [currentStep, setCurrentStep] = useState(1)

  const [formData, setFormData] = useState({
    businessName: '',
    name: '',
    email: '',
    phone: '',
    industry: '',
    city: '',
    website: '',
    socials: '',
    yearsInBusiness: '',

    primaryGoal: '',
    successTarget: '',
    promotedService: '',

    idealCustomer: '',
    ageRange: '',
    gender: '',
    targetLocations: '',
    travelDistance: '',
    customerProblem: '',
    differentiator: '',
    bestCustomer: '',

    primaryOffer: '',
    averageSaleValue: '',
    highestValueService: '',
    currentlyRunningAds: '',
    adPlatforms: [],
    monthlyBudget: '',
    previousMarketing: '',
    whatWorked: '',
    whatDidntWork: '',

    facebookUrl: '',
    instagramUrl: '',
    tiktokUrl: '',
    googleBusinessUrl: '',
    metaAccess: '',
    trackingInstalled: '',
    finalNotes: '',
  })

  const updateForm = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderStep = () => {
    const props = {
      formData,
      updateForm,
      nextStep,
      previousStep,
    }

    switch (currentStep) {
      case 1:
        return <BusinessStep {...props} />
      case 2:
        return <GoalStep {...props} />
      case 3:
        return <AudienceStep {...props} />
      case 4:
        return <CampaignStep {...props} />
      case 5:
        return <LaunchStep {...props} />
      default:
        return <BusinessStep {...props} />
    }
  }

  return (
    <div className="app">
      <div className="topbar">
        <div className="brand">
          <div className="brand-mark">T</div>

          <div>
            <div className="brand-name">Techuvo</div>
            <div className="brand-subtitle">Marketing Intake</div>
          </div>
        </div>

        <div className="request-pill">
          Marketing Request
        </div>
      </div>

      <ProgressBar
        currentStep={currentStep}
        totalSteps={steps.length}
      />

      <div className="app-layout">
        <Sidebar
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />

        <main className="main-content">
          {renderStep()}
        </main>
      </div>
    </div>
  )
}

export default App
