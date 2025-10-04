
import React, { useState } from 'react';

// ============================================================================
// 1. ALL STYLES FOR THE APPLICATION
// ============================================================================
const AppStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

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
    .insurance-view-plans-btn {
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
const InsuranceComparisonPage = () => {
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

  // Payment frequency options
  const paymentOptions = [
    { label: 'Monthly', value: 'Monthly', savings: null },
    { label: 'Yearly', value: 'Yearly', savings: 'Saving 5%' },
    { label: 'One Time', value: 'One Time', savings: 'Saving 10%' }
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
                <div className="price-section">
                  <p className="price">{formatPrice(calculatePrice(plan.basePrice))}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <aside className="sidebar">
          <button className="call-button">Get a call from an Expert</button>
          <div className="sidebar-card">
            <h4>Why Policybazaar?</h4>
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

// ============================================================================
// 3. MAIN APP COMPONENT (CONTROLLER)
// ============================================================================
function InsuranceForm() {
  // State to control which page is visible
  const [showPlansPage, setShowPlansPage] = useState(false);

  // Function to change the state, passed to the form component
  const handleViewPlans = () => {
    setShowPlansPage(true);
  };

  return (
    <>
      <AppStyles />
      <div className="App">
        {/* Ternary operator to conditionally render the correct page */}
        {showPlansPage ? (
          <InsuranceComparisonPage />
        ) : (
          <TermLifeInsuranceForm onViewPlansClick={handleViewPlans} />
        )}
      </div>
    </>
  );
}

export default InsuranceForm;