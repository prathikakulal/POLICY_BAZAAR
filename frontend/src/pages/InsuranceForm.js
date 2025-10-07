import React, { useState, useEffect } from 'react';

// ============================================================================
// 1. ALL STYLES FOR THE APPLICATION
// ============================================================================
const AppStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    body {
      margin: 0;
      font-family: 'Roboto', sans-serif;
      background-color: #f4f7fa;
      color: #333;
    }

    /* --- Styles for TermLifeInsuranceForm --- */
    .insurance-main-container {
      min-height: 800px;
      max-width: 1000px;
      margin: 20px auto;
      padding: 80px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.08);
      height: auto;
    }
    .insurance-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .insurance-logo { width: 150px; }
    .insurance-btn-group button {
      margin-left: 10px;
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 6px;
      background: #f7f7f7;
      cursor: pointer;
      font-size: 12px;
    }
    .insurance-headline {
      text-align: center;
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .insurance-price { color: #d62828; }
    .insurance-form-field { margin-bottom: 15px; text-align: left; }
    .insurance-field-label { font-size: 14px; margin-bottom: 5px; display: block; }
    .insurance-input-field {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 6px;
      box-sizing: border-box;
    }
      .insurance-header { margin-bottom: 30px; }
.insurance-headline { margin-bottom: 30px; }
.insurance-gender-selector { margin-bottom: 30px; }
.insurance-form-field { margin-bottom: 25px; }
    .insurance-view-plans-btn {
      margin-top: auto; /* This will push the button to the bottom */
      margin-bottom: 0;
      width: 100%;
      padding: 15px;
      font-size: 18px;
      font-weight: 700;
      color: white;
      background: linear-gradient(to right, #f77f00, #d62828);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 10px;
    }
    .insurance-gender-selector {
        display: flex;
        margin-bottom: 15px;
    }
    .insurance-gender-btn {
        flex: 1;
        padding: 12px;
        border: 1px solid #ccc;
        cursor: pointer;
    }
    .insurance-gender-btn:first-child { border-radius: 6px 0 0 6px; }
    .insurance-gender-btn:last-child { border-radius: 0 6px 6px 0; }
    .insurance-gender-btn-active { background-color: #007bff; color: white; border-color: #007bff; }
    .insurance-gender-btn-inactive { background-color: #f8f9fa; }

    /* --- Styles for InsuranceComparisonPage --- */
    .page-container {
      max-width: 1200px;
      margin: 20px auto;
      padding: 0 20px;
    }
    .page-header { text-align: center; margin-bottom: 20px; }
    .main-content { display: flex; gap: 20px; flex-wrap: wrap; }
    .plans-container { flex: 3; min-width: 300px; }
    .sidebar { flex: 1; min-width: 280px; }
    .filters-bar {
      display: flex;
      align-items: center;
      background-color: white;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 20px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      gap: 15px;
      flex-wrap: wrap;
    }
    .filter-dropdown {
      position: relative;
      display: inline-block;
    }
    .filter-button {
      padding: 8px 15px;
      background-color: #f8f9fa;
      border: 1px solid #ddd;
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .filter-dropdown-content {
      display: none;
      position: absolute;
      background-color: white;
      min-width: 200px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.1);
      border-radius: 6px;
      z-index: 1;
      padding: 10px 0;
      border: 1px solid #ddd;
    }
    .filter-dropdown:hover .filter-dropdown-content {
      display: block;
    }
    .filter-option {
      padding: 10px 15px;
      cursor: pointer;
      border: none;
      background: none;
      width: 100%;
      text-align: left;
    }
    .filter-option:hover {
      background-color: #f8f9fa;
    }
    .filter-option.selected {
      background-color: #007bff;
      color: white;
    }
    .payment-options {
      display: flex;
      background-color: #f8f9fa;
      border-radius: 6px;
      overflow: hidden;
      border: 1px solid #ddd;
    }
    .payment-option {
      padding: 8px 15px;
      cursor: pointer;
      border: none;
      background: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .payment-option.selected {
      background-color: #28a745; 
      color: white;
    }
    .savings-badge {
      font-size: 12px;
      color: #28a745;
      margin-left: 5px;
    }
    .insurance-card {
      background-color: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .insurance-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0,0,0,0.12);
    }
    .card-header { display: flex; align-items: center; gap: 15px; margin-bottom: 15px; }
    .provider-logo { width: 50px; height: 50px; object-fit: contain; }
    .card-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
      text-align: center;
      padding: 15px 0;
      border-top: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      margin-bottom: 15px;
      gap: 10px;
    }
    .detail-label { font-size: 12px; color: #666; }
    .detail-value { font-size: 16px; font-weight: 700; }
    .card-footer { display: flex; justify-content: space-between; align-items: center; }
    .price-section {
      background-color: #f77f00;
      color: white;
      padding: 8px 15px;
      border-radius: 6px;
      text-align: right;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    .price-section:hover {
      background-color: #e57200;
    }
    .price { margin: 0; font-size: 22px; font-weight: 700; }
    .sidebar-card {
        background-color: white;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        margin-bottom: 15px;
    }
    .call-button {
      width: 100%;
      padding: 15px;
      font-size: 16px;
      font-weight: 700;
      color: white;
      background-color: #28a745;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      margin-bottom: 15px;
    }
    .plan-count {
      font-size: 14px;
      color: #666;
      margin-bottom: 15px;
    }

    /* Plan Details Page Styles */
    .plan-details-container {
      max-width: 1200px;
      margin: 20px auto;
      padding: 0 20px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }

    .plan-details-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      border-bottom: 1px solid #e0e0e0;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .back-button {
      padding: 8px 16px;
      background: #6c757d;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }

    .user-badge {
      display: flex;
      align-items: center;
      gap: 10px;
      background: #f8f9fa;
      padding: 8px 15px;
      border-radius: 20px;
      font-size: 14px;
    }

    .edit-btn {
      background: #007bff;
      color: white;
      border: none;
      padding: 4px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
    }

    .plan-details-content {
      padding: 20px;
    }

    .plan-summary {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
    }

    .provider-info {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 15px;
    }

    .provider-logo-large {
      width: 60px;
      height: 60px;
      object-fit: contain;
    }

    .discount-banner {
      background: #d4edda;
      color: #155724;
      padding: 10px 15px;
      border-radius: 6px;
      margin-bottom: 15px;
    }

    .premium-summary {
      background: white;
      padding: 15px;
      border-radius: 6px;
    }

    .premium-item {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
    }

    .premium-item.total {
      border-top: 2px solid #007bff;
      font-weight: bold;
      font-size: 18px;
    }

    .premium-amount {
      font-weight: bold;
      color: #d62828;
    }

    .details-tabs {
      display: flex;
      border-bottom: 1px solid #e0e0e0;
      margin-bottom: 20px;
    }

    .tab-button {
      padding: 12px 24px;
      border: none;
      background: none;
      cursor: pointer;
      font-size: 16px;
      border-bottom: 3px solid transparent;
    }

    .tab-button.active {
      border-bottom-color: #007bff;
      color: #007bff;
      font-weight: bold;
    }

    .tab-content {
      min-height: 400px;
    }

    /* Tab specific styles */
    .plan-highlights {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin-bottom: 20px;
    }

    .highlight-item {
      background: #f8f9fa;
      padding: 15px;
      border-radius: 6px;
      text-align: center;
    }

    .policybazaar-advantage {
      background: #e7f3ff;
      padding: 15px;
      border-radius: 6px;
      margin-bottom: 20px;
    }

    .claim-stats {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
    }

    .stat-item {
      text-align: center;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 6px;
      flex: 1;
    }

    .user-details {
      background: white;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #e0e0e0;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    .form-group input,
    .form-group select {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
    }

    .form-group small {
      color: #666;
      font-size: 12px;
    }

    /* Benefits tab styles */
    .benefit-card {
      background: white;
      padding: 20px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      margin-bottom: 15px;
    }

    .benefit-card h4 {
      color: #007bff;
      margin-bottom: 10px;
    }

    /* Boundary conditions styles */
    .boundary-section {
      margin-bottom: 30px;
    }

    .boundary-values {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin-top: 10px;
    }

    .payment-frequencies {
      display: flex;
      gap: 15px;
      margin-top: 10px;
    }

    .payment-option-boundary {
      flex: 1;
      background: #f8f9fa;
      padding: 15px;
      border-radius: 6px;
      text-align: center;
    }

    .pay-options {
      margin-top: 30px;
    }

    .pay-option-card {
      background: white;
      border: 1px solid #e0e0e0;
      padding: 15px;
      border-radius: 6px;
      margin-bottom: 15px;
    }

    .policy-note {
      background: #fff3cd;
      padding: 15px;
      border-radius: 6px;
      margin-top: 20px;
      font-size: 14px;
      color: #856404;
    }

    .plan-details-footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: white;
      padding: 15px 20px;
      box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
      border-top: 1px solid #e0e0e0;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .final-premium {
      font-size: 18px;
    }

    .proceed-button {
      padding: 12px 40px;
      background: linear-gradient(to right, #f77f00, #d62828);
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }

    /* --- New Styles for Modern Payment Page --- */
    .payment-page-body {
        font-family: 'Inter', sans-serif;
        background-color: #f0f4ff;
    }
    .payment-option-active {
        background-color: #eef2ff;
        color: #4338ca;
        border-left: 3px solid #4338ca;
    }
    .step {
        display: flex;
        align-items: center;
    }
    .step-icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 600;
    }
    .step-icon-active {
        background-color: #16a34a;
        color: white;
    }
    .step-icon-inactive {
        background-color: #e5e7eb;
        color: #6b7280;
    }
    .step-line {
        height: 2px;
        flex-grow: 1;
        background-color: #d1d5db;
    }
    .step-line-active {
         background-color: #16a34a;
    }
  `}</style>
);

// ============================================================================
// 2. CHILD COMPONENTS DEFINITION
// ============================================================================

// --- Component 1: The Initial Form ---
const TermLifeInsuranceForm = ({ onViewPlansClick }) => {
  const [gender, setGender] = useState('Male');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="insurance-main-container">
      <div className="insurance-header">
        <img src="https://placehold.co/200x50/000000/FFFFFF?text=PolicyBazaar" alt="PolicyBazaar Logo" className="insurance-logo" />
        <div className="insurance-btn-group">
          <button>🛟 Claim Assistance</button>
          <button>📞 Talk to Expert</button>
        </div>
      </div>

      <div className="insurance-headline">
        <span className="insurance-amount">₹1 Crore</span> life cover starting <span className="insurance-price">from ₹485</span>/month
      </div>

      <div className="insurance-gender-selector">
        <button
          className={`insurance-gender-btn ${gender === 'Male' ? 'insurance-gender-btn-active' : 'insurance-gender-btn-inactive'}`}
          onClick={() => setGender('Male')}
        >
          Male
        </button>
        <button
          className={`insurance-gender-btn ${gender === 'Female' ? 'insurance-gender-btn-active' : 'insurance-gender-btn-inactive'}`}
          onClick={() => setGender('Female')}
        >
          Female
        </button>
      </div>

      <div className="insurance-form-field">
        <label className="insurance-field-label">Your Name</label>
        <input type="text" className="insurance-input-field" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" />
      </div>

      <div className="insurance-form-field">
        <label className="insurance-field-label">Date of Birth</label>
        <input type="text" className="insurance-input-field" value={dob} onChange={(e) => setDob(e.target.value)} placeholder="DD/MM/YYYY" />
      </div>
      
      <div className="insurance-form-field">
        <label className="insurance-field-label">Mobile Number</label>
        <input type="text" className="insurance-input-field" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your 10 digit mobile number" />
      </div>

      <button className="insurance-view-plans-btn" onClick={onViewPlansClick}>
        View Plans
      </button>
    </div>
  );
};

// --- Component 2: The Plans Comparison Page ---
const InsuranceComparisonPage = ({ onPlanSelect }) => {
  // State for filters
  const [lifeCover, setLifeCover] = useState('1 Crore');
  const [coverTill, setCoverTill] = useState('65 Yrs');
  const [paymentFrequency, setPaymentFrequency] = useState('Monthly');
  const [sortBy, setSortBy] = useState('price');

  // Life cover options with multiplier for pricing
  const lifeCoverOptions = [
    { label: '50 Lacs', value: '50 Lacs', multiplier: 0.5 },
    { label: '75 Lacs', value: '75 Lacs', multiplier: 0.75 },
    { label: '1 Crore', value: '1 Crore', multiplier: 1 },
    { label: '1.25 Crore', value: '1.25 Crore', multiplier: 1.25 },
    { label: '1.5 Crore', value: '1.5 Crore', multiplier: 1.5 },
    { label: '1.75 Crore', value: '1.75 Crore', multiplier: 1.75 },
    { label: '2 Crore', value: '2 Crore', multiplier: 2 },
    { label: '2.5 Crore', value: '2.5 Crore', multiplier: 2.5 },
    { label: '3 Crore', value: '3 Crore', multiplier: 3 }
  ];

  // Cover till options with age multiplier
  const coverTillOptions = [
    { label: '60 Yrs', value: '60 Yrs', multiplier: 0.9 },
    { label: '65 Yrs', value: '65 Yrs', multiplier: 1 },
    { label: '70 Yrs', value: '70 Yrs', multiplier: 1.3 },
    { label: '75 Yrs', value: '75 Yrs', multiplier: 1.6 },
    { label: '80 Yrs', value: '80 Yrs', multiplier: 2 },
    { label: 'Whole Life', value: 'Whole Life', multiplier: 2.5 }
  ];

  // Extended insurance plans data (20+ plans)
  const basePlans = [
    { id: 1, provider: 'Digit', logo: 'https://media.licdn.com/dms/image/C4D0BAQFvYp5204SUnA/company-logo_200_200/0/1630659974355/godigit_logo?e=2147483647&v=beta&t=o1f7Bvea1PchqRdaQf3OKyGf2910GsfHChV-hDNxXkI', claimSettled: 99.5, basePrice: 1590, planName: 'Digit Glow Plus', rating: 4.5 },
    { id: 2, provider: 'Kotak Life', logo: 'https://media.licdn.com/dms/image/C4D0BAQG5k2I2l9qX8g/company-logo_200_200/0/1665640243455/kotak_life_logo?e=2147483647&v=beta&t=P3vXzG09n4Y52m0K6n_M8jLz_B8uI7eH0Lq5TjRk-0M', claimSettled: 98.6, basePrice: 2024, planName: 'Kotak e-Term', rating: 4.3 },
    { id: 3, provider: 'TATA AIA', logo: 'https://media.licdn.com/dms/image/D4D0BAQE2iGlJgn4YcQ/company-logo_200_200/0/1684496739343/tataaia_logo?e=2147483647&v=beta&t=4G0hP5mB0j5Lw9tX-tGj9j8l9k4sY5n_K0f3o2p2Q3A', claimSettled: 99.4, basePrice: 1907, planName: 'Sampoorna Raksha', rating: 4.7 },
    { id: 4, provider: 'ICICI', logo: 'https://media.licdn.com/dms/image/C510BAQENi8m4276Mog/company-logo_200_200/0/1631333061266?e=2147483647&v=beta&t=7lUo87sYl0jR3jCg-qJ4fQ-x9c-k9dG4j7a7aW2q8QY', claimSettled: 99.3, basePrice: 1717, planName: 'iProtect Smart Plus', rating: 4.6 },
    { id: 5, provider: 'HDFC Life', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/HDFC_Life_Logo.svg/1200px-HDFC_Life_Logo.svg.png', claimSettled: 98.9, basePrice: 1850, planName: 'Click 2 Protect', rating: 4.4 },
    { id: 6, provider: 'Max Life', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Max_Life_Insurance_Company_logo.svg/1200px-Max_Life_Insurance_Company_logo.svg.png', claimSettled: 99.1, basePrice: 1950, planName: 'Online Term Plan', rating: 4.5 },
    { id: 7, provider: 'SBI Life', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sbi-life-insurance-logo.png/800px-Sbi-life-insurance-logo.png', claimSettled: 97.8, basePrice: 1650, planName: 'eShield', rating: 4.2 },
    { id: 8, provider: 'Bajaj Allianz', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Bajaj_Allianz_Logo.svg/1200px-Bajaj_Allianz_Logo.svg.png', claimSettled: 98.5, basePrice: 1780, planName: 'eTouch', rating: 4.3 },
    { id: 9, provider: 'Aditya Birla', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Aditya_Birla_Capital_logo.png/800px-Aditya_Birla_Capital_logo.png', claimSettled: 97.9, basePrice: 1720, planName: 'Flexi Secure', rating: 4.1 },
    { id: 10, provider: 'PNB MetLife', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/PNB_MetLife_logo.svg/1200px-PNB_MetLife_logo.svg.png', claimSettled: 98.2, basePrice: 1690, planName: 'Mera Term Plan', rating: 4.0 },
    { id: 11, provider: 'Aegon Life', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Aegon_Life_Insurance_logo.svg/1200px-Aegon_Life_Insurance_logo.svg.png', claimSettled: 97.5, basePrice: 1550, planName: 'iTerm', rating: 3.9 },
    { id: 12, provider: 'Aviva', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Aviva_Logo.svg/1200px-Aviva_Logo.svg.png', claimSettled: 98.8, basePrice: 1820, planName: 'iLife', rating: 4.3 },
    { id: 13, provider: 'Canara HSBC', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Canara_HSBC_Life_Insurance_logo.png/800px-Canara_HSBC_Life_Insurance_logo.png', claimSettled: 98.4, basePrice: 1760, planName: 'Invest 4G', rating: 4.2 },
    { id: 14, provider: 'Exide Life', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Exide_Life_Insurance_logo.png/800px-Exide_Life_Insurance_logo.png', claimSettled: 97.7, basePrice: 1680, planName: 'Easy Save', rating: 4.0 },
    { id: 15, provider: 'Future Generali', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Future_Generali_logo.svg/1200px-Future_Generali_logo.svg.png', claimSettled: 98.1, basePrice: 1740, planName: 'Online Term Plan', rating: 4.1 },
    { id: 16, provider: 'IndiaFirst', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/IndiaFirst_Life_Insurance_logo.png/800px-IndiaFirst_Life_Insurance_logo.png', claimSettled: 97.6, basePrice: 1620, planName: 'Term Plan', rating: 3.9 },
    { id: 17, provider: 'LIC', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/LIC_Logo.svg/1200px-LIC_Logo.svg.png', claimSettled: 98.7, basePrice: 1880, planName: 'Tech Term', rating: 4.4 },
    { id: 18, provider: 'Reliance Nippon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Reliance_Nippon_Life_Insurance_logo.png/800px-Reliance_Nippon_Life_Insurance_logo.png', claimSettled: 97.4, basePrice: 1580, planName: 'Online Term Plan', rating: 3.8 },
    { id: 19, provider: 'Shriram Life', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Shriram_Life_Insurance_logo.png/800px-Shriram_Life_Insurance_logo.png', claimSettled: 97.2, basePrice: 1520, planName: 'Shriram Life Term', rating: 3.7 },
    { id: 20, provider: 'Star Union', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Star_Union_Dai-ichi_Life_Insurance_logo.png/800px-Star_Union_Dai-ichi_Life_Insurance_logo.png', claimSettled: 97.8, basePrice: 1660, planName: 'Online Term Plan', rating: 4.0 },
    { id: 21, provider: 'Bharti AXA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Bharti_Axa_Life_Insurance_logo.png/800px-Bharti_Axa_Life_Insurance_logo.png', claimSettled: 98.0, basePrice: 1700, planName: 'Life Elite', rating: 4.1 },
    { id: 22, provider: 'Edelweiss Tokio', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Edelweiss_Tokio_Life_Insurance_logo.png/800px-Edelweiss_Tokio_Life_Insurance_logo.png', claimSettled: 97.9, basePrice: 1670, planName: 'Zindagi Plus', rating: 4.0 }
  ];

  // Get current multipliers
  const getCurrentMultipliers = () => {
    const lifeCoverMultiplier = lifeCoverOptions.find(opt => opt.value === lifeCover)?.multiplier || 1;
    const coverTillMultiplier = coverTillOptions.find(opt => opt.value === coverTill)?.multiplier || 1;
    return { lifeCoverMultiplier, coverTillMultiplier };
  };

  // Calculate price based on all factors
  const calculatePrice = (basePrice) => {
    const { lifeCoverMultiplier, coverTillMultiplier } = getCurrentMultipliers();
    let calculatedPrice = basePrice * lifeCoverMultiplier * coverTillMultiplier;
    
    // Apply payment frequency discounts
    if (paymentFrequency === 'Yearly') {
      calculatedPrice = calculatedPrice * 12 * 0.95; // 5% discount for yearly
    } else if (paymentFrequency === 'One Time') {
      calculatedPrice = calculatedPrice * 12 * 20 * 0.90; // 10% discount for one-time (assuming 20 years)
    }
    
    return Math.round(calculatedPrice);
  };

  // Format price display
  const formatPrice = (price) => {
    if (paymentFrequency === 'Yearly') {
      return `₹${price.toLocaleString('en-IN')}/yr`;
    } else if (paymentFrequency === 'One Time') {
      return `₹${price.toLocaleString('en-IN')}`;
    }
    return `₹${price.toLocaleString('en-IN')}/m`;
  };

  // Sort plans based on current sort criteria
  const getSortedPlans = () => {
    const sortedPlans = [...basePlans];
    
    switch (sortBy) {
      case 'price':
        return sortedPlans.sort((a, b) => calculatePrice(a.basePrice) - calculatePrice(b.basePrice));
      case 'price-desc':
        return sortedPlans.sort((a, b) => calculatePrice(b.basePrice) - calculatePrice(a.basePrice));
      case 'claim':
        return sortedPlans.sort((a, b) => b.claimSettled - a.claimSettled);
      case 'rating':
        return sortedPlans.sort((a, b) => b.rating - a.rating);
      default:
        return sortedPlans;
    }
  };

  const sortedPlans = getSortedPlans();

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Term Insurance Plans</h1>
        <p>Compare and choose the best plan for your needs.</p>
      </header>
      <main className="main-content">
        <div className="plans-container">
          <div className="filters-bar">
            {/* Life Cover Filter */}
            <div className="filter-dropdown">
              <button className="filter-button">
                Life cover: {lifeCover} ▼
              </button>
              <div className="filter-dropdown-content">
                {lifeCoverOptions.map(option => (
                  <button
                    key={option.value}
                    className={`filter-option ${lifeCover === option.value ? 'selected' : ''}`}
                    onClick={() => setLifeCover(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Cover Till Filter */}
            <div className="filter-dropdown">
              <button className="filter-button">
                Cover till: {coverTill} ▼
              </button>
              <div className="filter-dropdown-content">
                {coverTillOptions.map(option => (
                  <button
                    key={option.value}
                    className={`filter-option ${coverTill === option.value ? 'selected' : ''}`}
                    onClick={() => setCoverTill(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>            
           {/* Payment Frequency Filter - As Dropdown */}
              <div className="filter-dropdown">
                <button className="filter-button">
                  Payment: {paymentFrequency} {paymentFrequency === 'Yearly' && '**Saving 5%'} ▼
                </button>
                <div className="filter-dropdown-content">
                  <button
                    className={`filter-option ${paymentFrequency === 'Monthly' ? 'selected' : ''}`}
                    onClick={() => setPaymentFrequency('Monthly')}
                  >
                    Monthly
                  </button>
                  <button
                    className={`filter-option ${paymentFrequency === 'Yearly' ? 'selected' : ''}`}
                    onClick={() => setPaymentFrequency('Yearly')}
                  >
                    Yearly <span style={{color: '#28a745', marginLeft: '8px'}}>**Saving 5%</span>
                  </button>
                  <button
                    className={`filter-option ${paymentFrequency === 'Now' ? 'selected' : ''}`}
                    onClick={() => setPaymentFrequency('Now')}
                  >
                    Now
                  </button>
                </div>
              </div>

            {/* Sort/Filter Button */}
            <div className="filter-dropdown">
              <button className="filter-button">
                Sort by: {sortBy === 'price' ? 'Price' : sortBy === 'price-desc' ? 'Price High' : sortBy === 'claim' ? 'Claim Ratio' : 'Rating'} ▼
              </button>
              <div className="filter-dropdown-content">
                <button className={`filter-option ${sortBy === 'price' ? 'selected' : ''}`} onClick={() => setSortBy('price')}>Price: Low to High</button>
                <button className={`filter-option ${sortBy === 'price-desc' ? 'selected' : ''}`} onClick={() => setSortBy('price-desc')}>Price: High to Low</button>
                <button className={`filter-option ${sortBy === 'claim' ? 'selected' : ''}`} onClick={() => setSortBy('claim')}>Claim Settlement Ratio</button>
                <button className={`filter-option ${sortBy === 'rating' ? 'selected' : ''}`} onClick={() => setSortBy('rating')}>Company Rating</button>
              </div>
            </div>
          </div>

          <div className="plan-count">
            Showing {sortedPlans.length} plans for {lifeCover} coverage till {coverTill}
          </div>

          {/* Insurance Plans */}
          {sortedPlans.map(plan => (
            <div className="insurance-card" key={plan.id}>
              <div className="card-header">
                <img src={plan.logo} alt={`${plan.provider} logo`} className="provider-logo" />
                <div>
                  <h3>{plan.provider}</h3>
                  <p>{plan.planName}</p>
                  <small>⭐ {plan.rating}/5</small>
                </div>
              </div>
              <div className="card-details">
                <div>
                  <p className="detail-label">Life cover</p>
                  <p className="detail-value">{lifeCover}</p>
                </div>
                <div>
                  <p className="detail-label">Cover till age</p>
                  <p className="detail-value">{coverTill}</p>
                </div>
                <div>
                  <p className="detail-label">Claim settled</p>
                  <p className="detail-value">{plan.claimSettled}%</p>
                </div>
                <div>
                  <p className="detail-label">Policy Term</p>
                  <p className="detail-value">30 Years</p>
                </div>
              </div>
              <div className="card-footer">
                <div>✅ Free medical checkup included</div>
                <div className="price-section" onClick={() => onPlanSelect(plan)}>
                  <p className="price">{formatPrice(calculatePrice(plan.basePrice))}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <aside className="sidebar">
          <button className="call-button">Get a call from an Expert</button>
          <div className="sidebar-card">
            <h4>Why CuraSure?</h4>
            <p>Free dedicated claim assistance for your family.</p>
          </div>
          <div className="sidebar-card">
            <h4>Important Information</h4>
            <p>Premiums can increase with industry-wide hikes. Lock in your premium now.</p>
          </div>
          <div className="sidebar-card">
            <h4>Current Selection</h4>
            <p><strong>Coverage:</strong> {lifeCover}</p>
            <p><strong>Cover Till:</strong> {coverTill}</p>
            <p><strong>Payment:</strong> {paymentFrequency}</p>
          </div>
        </aside>
      </main>
    </div>
  );
};

// --- Component 3: The Plan Details Page ---
const PlanDetailsPage = ({ plan, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentPage, setCurrentPage] = useState('details'); // 'details' or 'payment'

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

  // Update the PROCEED TO PAYMENT button in the footer
  const handleProceedToPayment = () => {
    setCurrentPage('payment');
  };

  const handlePaymentComplete = () => {
    // Handle successful payment
    // For now, we can just go back to the details page.
    setCurrentPage('details');
  };

  const handleBackFromPayment = () => {
    setCurrentPage('details');
  };

  if (currentPage === 'payment') {
    return (
      <ModernPaymentPage 
        planDetails={plan} 
        onBack={handleBackFromPayment}
        onPaymentComplete={handlePaymentComplete}
      />
    );
  }

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
                <div className="payment-option-boundary">
                  <span>Monthly</span>
                  <span className="premium-amount">{currentPlan.premiums.monthly}</span>
                </div>
                <div className="payment-option-boundary">
                  <span>Half Yearly</span>
                  <span className="premium-amount">{currentPlan.premiums.halfYearly}</span>
                </div>
                <div className="payment-option-boundary">
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
              <h4>CuraSure Advantage</h4>
              <div className="advantage-item">✅ 100% GENUINE CLAIMS ASSURANCE</div>
              <div className="advantage-item">✅ CuraSure Lowest Price Guarantee</div>
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
                  <input type="text" placeholder="Enter your Name"/>
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
          <img src="https://placehold.co/200x50/000000/FFFFFF?text=PolicyBazaar" alt="PolicyBazaar Logo" className="insurance-logo" />
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
            <img src={plan.logo} alt={`${plan.provider} logo`} className="provider-logo-large" />
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
          <button className="proceed-button" onClick={handleProceedToPayment}>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Component 4: NEW Modern Payment Page Component ---
const ModernPaymentPage = ({ planDetails, onBack, onPaymentComplete }) => {
    const [activeTab, setActiveTab] = useState('netbanking');

    return (
        <div className="payment-page-body p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <button onClick={onBack} className="mb-4 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="m15 18-6-6 6-6"/></svg>
                    Back to Plan Details
                </button>

                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
                    <div className="max-w-md mx-auto mb-8">
                        <div className="flex items-center justify-center">
                            <div className="step">
                                <div className="step-icon step-icon-active">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                                </div>
                                <span className="ml-2 text-sm font-semibold text-gray-800">Payment Mode</span>
                            </div>
                            <div className="step-line mx-4"></div>
                            <div className="step">
                                <div className="step-icon step-icon-inactive"></div>
                                <span className="ml-2 text-sm font-medium text-gray-500">Payment Complete</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-3">
                            <div className="space-y-2">
                                <button onClick={() => setActiveTab('netbanking')} className={`w-full flex items-center p-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 ${activeTab === 'netbanking' ? 'payment-option-active' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-5 w-5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                                    NetBanking
                                </button>
                                <button onClick={() => setActiveTab('upi')} className={`w-full flex items-center p-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 ${activeTab === 'upi' ? 'payment-option-active' : ''}`}>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-5 w-5"><path d="M7 7h4v4H7z"/><path d="M13 7h4v4h-4z"/><path d="M7 13h4v4H7z"/><path d="M15 15h2v2h-2z"/><path d="M13 13h2v2h-2z"/><path d="M17 13h2v2h-2z"/><path d="M13 17h2v2h-2z"/><path d="M17 17h2v2h-2z"/></svg>
                                    UPI
                                </button>
                                <button onClick={() => setActiveTab('creditcard')} className={`w-full flex items-center p-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 ${activeTab === 'creditcard' ? 'payment-option-active' : ''}`}>
                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-5 w-5"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                                    Credit Card
                                </button>
                                 <button onClick={() => setActiveTab('debitcard')} className={`w-full flex items-center p-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 ${activeTab === 'debitcard' ? 'payment-option-active' : ''}`}>
                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-5 w-5"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                                    Debit Card
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-5 border-l border-r border-gray-200 px-8">
                            <div className={activeTab === 'netbanking' ? '' : 'hidden'}>
                                <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-700 p-3 rounded-md mb-6 text-sm">
                                    <p>State Bank of India is currently facing some technical issues.</p>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Select your Bank</h3>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <button className="flex items-center p-3 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 text-left">
                                        <img src="https://placehold.co/32x32/FF5733/FFFFFF?text=HDFC" alt="HDFC Bank" className="w-8 h-8 mr-3 rounded-full"/>
                                        <span className="font-medium">HDFC</span>
                                    </button>
                                    <button className="flex items-center p-3 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 text-left">
                                        <img src="https://placehold.co/32x32/C70039/FFFFFF?text=ICICI" alt="ICICI Bank" className="w-8 h-8 mr-3 rounded-full"/>
                                        <span className="font-medium">ICICI</span>
                                    </button>
                                    <button className="flex items-center p-3 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 text-left">
                                        <img src="https://placehold.co/32x32/1E90FF/FFFFFF?text=SBI" alt="SBI Bank" className="w-8 h-8 mr-3 rounded-full"/>
                                        <span className="font-medium">SBI</span>
                                    </button>
                                    <button className="flex items-center p-3 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 text-left">
                                        <img src="https://placehold.co/32x32/DAF7A6/000000?text=KM" alt="Kotak Mahindra" className="w-8 h-8 mr-3 rounded-full"/>
                                        <span className="font-medium">Kotak Mahindra</span>
                                    </button>
                                    <button className="flex items-center p-3 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 text-left">
                                        <img src="https://placehold.co/32x32/FFC300/FFFFFF?text=PNB" alt="Punjab National Bank" className="w-8 h-8 mr-3 rounded-full"/>
                                        <span className="font-medium">Punjab National</span>
                                    </button>
                                     <button className="flex items-center p-3 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 text-left">
                                        <img src="https://placehold.co/32x32/581845/FFFFFF?text=BOB" alt="Bank of Baroda" className="w-8 h-8 mr-3 rounded-full"/>
                                        <span className="font-medium">Bank of Baroda</span>
                                    </button>
                                </div>
                                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-6">
                                    <option>Select Another Bank</option>
                                    <option>Axis Bank</option>
                                    <option>Yes Bank</option>
                                </select>
                                <button onClick={onPaymentComplete} className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                    Pay Now
                                </button>
                            </div>
                            
                            <div className={activeTab === 'upi' ? '' : 'hidden'}>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Pay using UPI</h3>
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                    <div className="text-center p-4 border-r border-gray-200">
                                        <p className="font-medium mb-2">Scan and Pay</p>
                                        <div className="relative w-40 h-40 mx-auto bg-gray-200 rounded-lg flex items-center justify-center blur-sm">
                                            {/* <!-- Blurred QR code placeholder --> */}
                                        </div>
                                        <button className="mt-[-2.5rem] relative bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50">View</button>
                                    </div>
                                    <div>
                                        <label htmlFor="upi-id" className="block text-sm font-medium text-gray-700 mb-1">Enter UPI ID</label>
                                        <input type="text" id="upi-id" placeholder="mobilenumber@upi" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-3"/>
                                        <button onClick={onPaymentComplete} className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors mb-4">
                                            Verify & Pay
                                        </button>
                                        <ul className="space-y-3 text-sm text-gray-500">
                                            <li className="flex items-center"><span className="w-4 h-4 mr-2 border-2 border-gray-300 rounded-full"></span>Enter your registered VPA</li>
                                            <li className="flex items-center"><span className="w-4 h-4 mr-2 border-2 border-gray-300 rounded-full"></span>Receive payment request</li>
                                            <li className="flex items-center"><span className="w-4 h-4 mr-2 border-2 border-gray-300 rounded-full"></span>Authorize payment request</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={activeTab === 'creditcard' ? '' : 'hidden'}>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Enter your Credit Card details</h3>
                                 <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onPaymentComplete(); }}>
                                    <div className="relative">
                                        <input type="text" placeholder="Credit Card Number" className="w-full p-3 pl-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                                        </span>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Enter Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                                        <p className="text-xs text-gray-500 mt-1 ml-1">As mentioned on your Credit Card</p>
                                    </div>
                                    <div className="flex space-x-4">
                                        <input type="text" placeholder="Expiry Month & Year" className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                                        <div className="w-1/2 relative">
                                            <input type="text" placeholder="CVV" className="w-full p-3 pl-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="6" x2="8" y1="15" y2="15"/><line x1="10" x2="14" y1="15" y2="15"/></svg>
                                            </span>
                                        </div>
                                    </div>
                                     <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                        Pay Now
                                    </button>
                                </form>
                            </div>

                            <div className={activeTab === 'debitcard' ? '' : 'hidden'}>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Enter your Debit Card details</h3>
                                 <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onPaymentComplete(); }}>
                                    <div className="relative">
                                        <input type="text" placeholder="Debit Card Number" className="w-full p-3 pl-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                                        </span>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Enter Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                                        <p className="text-xs text-gray-500 mt-1 ml-1">As mentioned on your Debit Card</p>
                                    </div>
                                    <div className="flex space-x-4">
                                        <input type="text" placeholder="Expiry Month & Year" className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                                        <div className="w-1/2 relative">
                                            <input type="text" placeholder="CVV" className="w-full p-3 pl-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="6" x2="8" y1="15" y2="15"/><line x1="10" x2="14" y1="15" y2="15"/></svg>
                                            </span>
                                        </div>
                                    </div>
                                     <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                        Pay Now
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="bg-slate-50 rounded-xl p-6 space-y-4">
                                <div className="bg-violet-100 text-violet-800 p-3 rounded-lg flex justify-between items-center">
                                    <span className="font-medium text-sm">Order Number</span>
                                    <span className="font-bold text-sm">PB139753581</span>
                                </div>

                                <div className="space-y-3 pt-2">
                                     <div className="flex justify-between items-center text-gray-600">
                                        <span>Premium</span>
                                        <span className="font-semibold text-gray-800">₹ 22,694.00</span>
                                    </div>
                                    <div className="flex justify-between items-center text-gray-600">
                                        <span>Total Premium</span>
                                        <span className="font-semibold text-gray-800">₹ 22,694.00</span>
                                    </div>
                                     <div className="flex justify-between items-center text-gray-600">
                                        <span>Max Recurring Amount</span>
                                        <span className="font-semibold text-gray-800">₹ 26,703.00</span>
                                    </div>
                                </div>

                                <hr/>

                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-800">Pay frequency</span>
                                    <span className="bg-gray-200 text-gray-800 text-xs font-bold px-3 py-1 rounded-full">YEARLY</span>
                                </div>
                                
                                <div>
                                    <div className="flex justify-between items-center cursor-pointer p-3 rounded-lg">
                                        <h4 className="font-semibold text-gray-800">Plan Details</h4>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                                    </div>
                                     <div className="bg-green-50 text-green-800 p-4 rounded-lg text-sm space-y-1 mt-1">
                                        <p>Your premium is <span className="font-bold">₹22,694.00</span> for the first year. From 2nd year onwards your premium will be <span className="font-bold">₹26699.00</span>.</p>
                                        <p className="font-bold text-green-600">You save ₹4005.00 (15.00%)</p>
                                    </div>
                                </div>

                                 <div>
                                    <div className="flex justify-between items-center cursor-pointer p-3 rounded-lg">
                                        <h4 className="font-semibold text-gray-800">Proposer Details</h4>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center mt-8 pt-6 border-t border-gray-200">
                        <div className="flex justify-center items-center space-x-6 text-xs text-gray-500">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                            <a href="#" className="hover:underline">Terms & Conditions</a>
                            <a href="#" className="hover:underline">FAQ</a>
                        </div>
                         <div className="flex justify-center mt-4">
                             <img src="https://placehold.co/100x40/FFFFFF/000000?text=PCIDSS+Certified" alt="PCI DSS Certified" className="h-10"/>
                         </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// ============================================================================
// 3. MAIN APP COMPONENT (CONTROLLER)
// ============================================================================
function InsuranceForm() {
  const [currentPage, setCurrentPage] = useState('form'); // 'form', 'plans', 'details'
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    // Dynamically load Tailwind CSS via CDN
    if (!document.getElementById('tailwind-cdn')) {
        const script = document.createElement('script');
        script.id = 'tailwind-cdn';
        script.src = "https://cdn.tailwindcss.com";
        document.head.appendChild(script);
    }

    // Dynamically load Google Font 'Inter'
    if (!document.getElementById('inter-font')) {
        const fontLink = document.createElement('link');
        fontLink.id = 'inter-font';
        fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
        fontLink.rel = "stylesheet";
        document.head.appendChild(fontLink);
    }
  }, []);

  const handleViewPlans = () => {
    setCurrentPage('plans');
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setCurrentPage('details');
  };

  const handleBackToPlans = () => {
    setCurrentPage('plans');
    setSelectedPlan(null);
  };

  return (
    <>
      <AppStyles />
      <div className="App" style={{ paddingBottom: currentPage === 'details' ? '100px' : '0' }}>
        {currentPage === 'details' && selectedPlan ? (
          <PlanDetailsPage plan={selectedPlan} onBack={handleBackToPlans} />
        ) : currentPage === 'plans' ? (
          <InsuranceComparisonPage onPlanSelect={handlePlanSelect} />
        ) : (
          <TermLifeInsuranceForm onViewPlansClick={handleViewPlans} />
        )}
      </div>
    </>
  );
}

export default InsuranceForm;

