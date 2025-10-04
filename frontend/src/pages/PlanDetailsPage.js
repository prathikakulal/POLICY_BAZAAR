import React, { useState } from 'react';

// ============================================================================
// Plan Details Page Component
// ============================================================================
const PlanDetailsPage = ({ plan, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPayment, setSelectedPayment] = useState('Annually');

  // Plan details data based on selected plan
  const planDetails = {
    'Digit Glow Plus': {
      provider: 'Digit',
      planName: 'IPRU Protocol Smart Plus',
      lifeCover: '1 Crore',
      coverTill: '65 Years',
      payFor: '10 Years',
      premiumPayment: 'Annual',
      claimRatio: '99.3%',
      features: [
        'Special Exit Benefit',
        'Option to delay 12 Months Premium',
        'Terminal Illness benefit',
        'Life stage benefit',
        'Tax benefit upto ₹46,800/year'
      ],
      boundaryConditions: {
        lifeCover: { min: '₹50 Lacs', max: '₹20 Crores' },
        coverAge: { min: '18 Years', max: '65 Years' },
        policyTerm: { min: '10 Years', max: '40 Years' }
      },
      premiums: {
        monthly: '₹1,985',
        halfYearly: '₹11,574',
        annually: '₹22,084'
      },
      discounts: {
        firstYear: '15% discount',
        subsequentYears: '5% discount'
      }
    },
    'Kotak e-Term': {
      provider: 'Kotak Life',
      planName: 'Kotak e-Term Plus',
      lifeCover: '1 Crore',
      coverTill: '65 Years',
      payFor: '10 Years',
      premiumPayment: 'Annual',
      claimRatio: '98.6%',
      features: [
        'Special Exit Benefit',
        'Premium Return Option',
        'Critical Illness Cover',
        'Accidental Death Benefit',
        'Tax benefit upto ₹46,800/year'
      ],
      boundaryConditions: {
        lifeCover: { min: '₹25 Lacs', max: '₹25 Crores' },
        coverAge: { min: '18 Years', max: '65 Years' },
        policyTerm: { min: '5 Years', max: '35 Years' }
      },
      premiums: {
        monthly: '₹2,024',
        halfYearly: '₹11,824',
        annually: '₹22,694'
      },
      discounts: {
        firstYear: '10% discount',
        subsequentYears: '5% discount'
      }
    },
    // Add similar data for other plans...
  };

  const currentPlan = planDetails[plan.planName] || planDetails['Digit Glow Plus'];

  const TabContent = () => {
    switch (activeTab) {
      case 'boundary':
        return (
          <div className="tab-content-boundary">
            <h3>Boundary Conditions for this plan</h3>
            
            <div className="boundary-section">
              <h4>Life Cover Amount</h4>
              <div className="boundary-values">
                <div>Minimum: {currentPlan.boundaryConditions.lifeCover.min}</div>
                <div>Maximum: {currentPlan.boundaryConditions.lifeCover.max}</div>
              </div>
            </div>

            <div className="boundary-section">
              <h4>Cover yourself Upto</h4>
              <div className="boundary-values">
                <div>Minimum: {currentPlan.boundaryConditions.coverAge.min}</div>
                <div>Maximum: {currentPlan.boundaryConditions.coverAge.max}</div>
              </div>
            </div>

            <div className="boundary-section">
              <h4>Frequency of payment</h4>
              <div className="payment-frequencies">
                <div className="payment-option">
                  <span>Monthly</span>
                  <span className="premium-amount">{currentPlan.premiums.monthly}</span>
                </div>
                <div className="payment-option">
                  <span>Half Yearly</span>
                  <span className="premium-amount">{currentPlan.premiums.halfYearly}</span>
                </div>
                <div className="payment-option">
                  <span>Annually</span>
                  <span className="premium-amount">{currentPlan.premiums.annually}</span>
                </div>
              </div>
            </div>

            <div className="pay-options">
              <h4>Number of years you can pay for</h4>
              <div className="pay-option-card">
                <strong>Regular Pay</strong>
                <p>You pay premiums throughout the policy duration</p>
              </div>
              <div className="pay-option-card">
                <strong>Limited Pay</strong>
                <p>Pay premiums for a few years and stay covered for the entire policy duration. Choose from 5, 10 and 15 years</p>
              </div>
              <div className="pay-option-card">
                <strong>Single Pay</strong>
                <p>You pay premium only once and stay covered for the entire policy duration</p>
              </div>
            </div>

            <div className="policy-note">
              <p>Policyholder will have an option to review the terms and conditions of the Policy and are allowed to cancel the policy with-in 30 days from the date of receipt of policy documents. The refund of the premium paid is subject to deduction of a proportionate risk premium for the period of cover and the expenses incurred by the insurer on medical examination and stamp duty charges.</p>
            </div>
          </div>
        );

      case 'benefits':
        return (
          <div className="tab-content-benefits">
            <h3>Free Benefits available under this plan</h3>
            
            <div className="benefit-card">
              <h4>Special Exit Benefit</h4>
              <p>You have an option to get all your premiums back (excluding rider premium) from 60 years to 80 years of age and exit the plan.</p>
            </div>

            <div className="benefit-card">
              <h4>Option to delay 12 Months Premium</h4>
              <p>You got an option to defer your premium for 12 months after 5 policy years without any interest or charges. *This option gets reinstated every 5 policy years.</p>
            </div>

            <div className="benefit-card">
              <h4>Terminal Illness benefit</h4>
              <p>Get your cover amount if you are diagnosed with a Terminal illness.</p>
            </div>

            <div className="benefit-card">
              <h4>Life stage benefit</h4>
              <p>Option to increase the Sum Assured on major life events i.e. Marriage, 1st & 2nd child birth/legal adoption.</p>
            </div>

            <div className="benefit-card">
              <h4>Tax benefit</h4>
              <p>Save tax upto ₹46,800 every year under section 80C and get 100% tax free returns on maturity.</p>
            </div>
          </div>
        );

      case 'overview':
      default:
        return (
          <div className="tab-content-overview">
            <div className="plan-highlights">
              <div className="highlight-item">
                <strong>Life Cover</strong>
                <span>{currentPlan.lifeCover}</span>
              </div>
              <div className="highlight-item">
                <strong>Cover Till Age</strong>
                <span>{currentPlan.coverTill}</span>
              </div>
              <div className="highlight-item">
                <strong>Pay For</strong>
                <span>{currentPlan.payFor}</span>
              </div>
              <div className="highlight-item">
                <strong>Premium Payment</strong>
                <span>{currentPlan.premiumPayment}</span>
              </div>
            </div>

            <div className="policybazaar-advantage">
              <h4>Policybazaar Advantage</h4>
              <div className="advantage-item">✅ 100% GENUINE CLAIMS ASSURANCE</div>
              <div className="advantage-item">✅ Policybazaar Lowest Price Guarantee</div>
              <div className="advantage-item">✅ Free Dedicated Claim Support</div>
            </div>

            <div className="claim-stats">
              <div className="stat-item">
                <strong>{currentPlan.claimRatio}</strong>
                <span>Claim Settlement Ratio</span>
              </div>
              <div className="stat-item">
                <strong>30 Days</strong>
                <span>Claim Settlement Period</span>
              </div>
            </div>

            <div className="user-details">
              <h4>Your Details</h4>
              <div className="detail-form">
                <div className="form-group">
                  <label>Full Name as per your ID Proof</label>
                  <input type="text" value="Muttu Raju" readOnly />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label>Occupation</label>
                  <select>
                    <option>Salaried</option>
                    <option>Self-Employed</option>
                    <option>Business</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Annual Income</label>
                  <select>
                    <option>₹5,00,000 - ₹10,00,000</option>
                    <option>₹10,00,000 - ₹20,00,000</option>
                    <option>₹20,00,000 - ₹50,00,000</option>
                  </select>
                  <small>Please do not include Rental property income/income received from interest from bank deposits/dividends/any other investments.</small>
                </div>
                <div className="form-group">
                  <label>Education</label>
                  <select>
                    <option>Graduate</option>
                    <option>Post Graduate</option>
                    <option>Professional</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="plan-details-container">
      <div className="plan-details-header">
        <div className="header-left">
          <img src="https://placehold.co/200x50/000000/FFFFFF?text=PolicyBazaar" alt="PolicyBazaar Logo" className="logo" />
          <button className="back-button" onClick={onBack}>← Back to Plans</button>
        </div>
        <div className="header-right">
          <div className="user-badge">
            <span>DOB: 13/05/1987</span>
            <span>|</span>
            <span>Non Smoker</span>
            <span>|</span>
            <span>Mobile: *****6878</span>
            <button className="edit-btn">EDIT</button>
          </div>
        </div>
      </div>

      <div className="plan-details-content">
        <div className="plan-summary">
          <div className="provider-info">
            <img src={plan.logo} alt={`${plan.provider} logo`} className="provider-logo" />
            <div>
              <h2>{plan.provider}</h2>
              <p>{currentPlan.planName}</p>
            </div>
          </div>
          
          <div className="discount-banner">
            <strong>Congratulations!</strong> You've received {currentPlan.discounts.firstYear} on 1st year premium & {currentPlan.discounts.subsequentYears} on all year premiums with this policy
          </div>

          <div className="premium-summary">
            <div className="premium-breakdown">
              <div className="premium-item">
                <span>Premium for 1st Year</span>
                <span className="premium-amount">₹22,694 Yearly</span>
              </div>
              <div className="premium-item total">
                <span>Total Premium from 2nd year</span>
                <span className="premium-amount">₹20,689 Yearly</span>
              </div>
            </div>
          </div>
        </div>

        <div className="plan-details-main">
          <div className="details-tabs">
            <button 
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Plan Overview
            </button>
            <button 
              className={`tab-button ${activeTab === 'benefits' ? 'active' : ''}`}
              onClick={() => setActiveTab('benefits')}
            >
              Free Benefits
            </button>
            <button 
              className={`tab-button ${activeTab === 'boundary' ? 'active' : ''}`}
              onClick={() => setActiveTab('boundary')}
            >
              Boundary Conditions
            </button>
          </div>

          <div className="tab-content">
            <TabContent />
          </div>
        </div>
      </div>

      <div className="plan-details-footer">
        <div className="footer-content">
          <div className="final-premium">
            <span>Total Premium: </span>
            <span className="premium-amount">₹1,06,944</span>
          </div>
          <button className="proceed-button">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  );
};

export default PlanDetailsPage;