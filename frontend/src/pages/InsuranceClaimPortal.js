import React, { useState } from 'react';

const InsuranceClaimPortal = () => {
  const [selectedInsurance, setSelectedInsurance] = useState('');
  const [claimStatus, setClaimStatus] = useState('');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  // Form states for different insurance types
  const [healthForm, setHealthForm] = useState({
    policyNumber: '',
    provider: '',
    treatmentDate: '',
    hospitalName: '',
    serviceType: '',
    claimAmount: ''
  });

  const [familyHealthForm, setFamilyHealthForm] = useState({
    policyNumber: '',
    provider: '',
    primaryMemberName: '',
    familyMembersCount: '',
    treatmentDate: '',
    hospitalName: '',
    patientName: '',
    relationToPrimary: '',
    serviceType: '',
    claimAmount: ''
  });

  const [lifeForm, setLifeForm] = useState({
    policyNumber: '',
    policyholderName: '',
    nomineeName: '',
    relation: '',
    incidentDate: '',
    claimAmount: ''
  });

  const [vehicleForm, setVehicleForm] = useState({
    policyNumber: '',
    vehicleRegNumber: '',
    vehicleType: '',
    accidentDate: '',
    accidentTime: '',
    location: '',
    claimAmount: ''
  });

  const [travelForm, setTravelForm] = useState({
    policyNumber: '',
    destination: '',
    tripStart: '',
    tripEnd: '',
    claimType: '',
    claimAmount: ''
  });

  const [homeForm, setHomeForm] = useState({
    policyNumber: '',
    propertyAddress: '',
    incidentType: '',
    incidentDate: '',
    estimatedLoss: ''
  });

  const faqs = [
    {
      question: "What documents are required for health claims?",
      answer: "Typically you need medical bills, prescription copies, diagnostic reports, discharge summary (if hospitalized), and policy documents."
    },
    {
      question: "How long does it take to settle a life insurance claim?",
      answer: "Life insurance claims are usually settled within 30 days after all required documents are submitted and verified."
    },
    {
      question: "Can I file a vehicle insurance claim online?",
      answer: "Yes, you can file vehicle insurance claims online by providing accident details, photos, and required documents through our portal."
    },
    {
      question: "What is the maximum time limit to file a claim?",
      answer: "Most insurance policies require claims to be filed within 30-90 days from the date of incident or discovery."
    },
    {
      question: "What is covered under family health insurance?",
      answer: "Family health insurance typically covers hospitalization, OPD treatments, maternity benefits, and critical illnesses for all family members under a single policy."
    }
  ];

  const handleHealthSubmit = (e) => {
    e.preventDefault();
    alert('Health insurance claim submitted successfully!');
    setHealthForm({
      policyNumber: '',
      provider: '',
      treatmentDate: '',
      hospitalName: '',
      serviceType: '',
      claimAmount: ''
    });
  };

  const handleFamilyHealthSubmit = (e) => {
    e.preventDefault();
    alert('Family Health insurance claim submitted successfully!');
    setFamilyHealthForm({
      policyNumber: '',
      provider: '',
      primaryMemberName: '',
      familyMembersCount: '',
      treatmentDate: '',
      hospitalName: '',
      patientName: '',
      relationToPrimary: '',
      serviceType: '',
      claimAmount: ''
    });
  };

  const handleLifeSubmit = (e) => {
    e.preventDefault();
    alert('Life insurance claim submitted successfully!');
    setLifeForm({
      policyNumber: '',
      policyholderName: '',
      nomineeName: '',
      relation: '',
      incidentDate: '',
      claimAmount: ''
    });
  };

  const handleVehicleSubmit = (e) => {
    e.preventDefault();
    alert('Vehicle insurance claim submitted successfully!');
    setVehicleForm({
      policyNumber: '',
      vehicleRegNumber: '',
      vehicleType: '',
      accidentDate: '',
      accidentTime: '',
      location: '',
      claimAmount: ''
    });
  };

  const handleTravelSubmit = (e) => {
    e.preventDefault();
    alert('Travel insurance claim submitted successfully!');
    setTravelForm({
      policyNumber: '',
      destination: '',
      tripStart: '',
      tripEnd: '',
      claimType: '',
      claimAmount: ''
    });
  };

  const handleHomeSubmit = (e) => {
    e.preventDefault();
    alert('Home insurance claim submitted successfully!');
    setHomeForm({
      policyNumber: '',
      propertyAddress: '',
      incidentType: '',
      incidentDate: '',
      estimatedLoss: ''
    });
  };

  const handleTrackClaim = (e) => {
    e.preventDefault();
    if (trackingNumber) {
      setClaimStatus('Your claim is under review. Expected resolution: 7-10 business days.');
    } else {
      setClaimStatus('Please enter a valid claim reference number.');
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="insurance-portal">
      <style jsx>{`
        .insurance-portal {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f8fafc;
          min-height: 100vh;
        }
        
        /* Header Styles */
        .header {
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        
        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
        }
        
        .logo {
          display: flex;
          align-items: center;
        }
        
        .logo-icon {
          width: 40px;
          height: 40px;
          background-color: #2563eb;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 1.25rem;
        }
        
        .logo-text {
          margin-left: 12px;
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
        }
        
        .nav {
          display: none;
        }
        
        @media (min-width: 768px) {
          .nav {
            display: flex;
            gap: 2rem;
          }
        }
        
        .nav-link {
          color: #64748b;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .nav-link:hover {
          color: #2563eb;
        }
        
        .login-btn {
          background-color: #2563eb;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 8px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .login-btn:hover {
          background-color: #1d4ed8;
        }
        
        /* Hero Section */
        .hero {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: white;
          padding: 4rem 1rem;
          text-align: center;
        }
        
        .hero-container {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        
        @media (min-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .cta-button {
          background-color: white;
          color: #2563eb;
          padding: 0.75rem 2rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1.125rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .cta-button:hover {
          background-color: #f1f5f9;
        }
        
        /* Insurance Selection */
        .section {
          padding: 4rem 1rem;
        }
        
        .section-white {
          background-color: white;
        }
        
        .section-gray {
          background-color: #f8fafc;
        }
        
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-title {
          text-align: center;
          font-size: 2.25rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 3rem;
        }
        
        .insurance-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 72rem;
          margin: 0 auto;
        }
        
        @media (min-width: 768px) {
          .insurance-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .insurance-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .insurance-card {
          padding: 1.5rem;
          border-radius: 12px;
          border: 2px solid #e2e8f0;
          background-color: white;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .insurance-card:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .insurance-card.selected {
          border-color: #3b82f6;
          background-color: #eff6ff;
        }
        
        .insurance-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .insurance-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }
        
        .insurance-description {
          color: #64748b;
        }
        
        /* Forms */
        .form-container {
          max-width: 72rem;
          margin: 0 auto;
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          padding: 2rem;
        }
        
        .info-box {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background-color: #eff6ff;
          border-radius: 8px;
          border: 1px solid #bfdbfe;
        }
        
        .info-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e40af;
          margin-bottom: 0.75rem;
        }
        
        .info-text {
          color: #1e40af;
        }
        
        .form-title {
          font-size: 1.875rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1.5rem;
        }
        
        .form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        
        @media (min-width: 768px) {
          .form-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
        }
        
        .form-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.5rem;
        }
        
        .form-input, .form-select {
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        
        .form-input:focus, .form-select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .form-file {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
        }
        
        .file-note {
          font-size: 0.875rem;
          color: #6b7280;
          margin-top: 0.5rem;
        }
        
        .submit-btn {
          background-color: #2563eb;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
          margin-top: 1rem;
        }
        
        .submit-btn:hover {
          background-color: #1d4ed8;
        }
        
        /* Tracking Section */
        .tracking-container {
          max-width: 42rem;
          margin: 0 auto;
          text-align: center;
        }
        
        .tracking-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        @media (min-width: 640px) {
          .tracking-form {
            flex-direction: row;
          }
        }
        
        .tracking-input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
        }
        
        .tracking-btn {
          background-color: #2563eb;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .tracking-btn:hover {
          background-color: #1d4ed8;
        }
        
        .status-box {
          padding: 1rem;
          background-color: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 8px;
        }
        
        .status-text {
          color: #1e40af;
          font-weight: 500;
        }
        
        /* FAQ Section */
        .faq-container {
          max-width: 48rem;
          margin: 0 auto;
        }
        
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .faq-item {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
        }
        
        .faq-question {
          width: 100%;
          padding: 1.5rem;
          text-align: left;
          font-weight: 600;
          color: #1e293b;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background-color 0.2s;
        }
        
        .faq-question:hover {
          background-color: #f8fafc;
        }
        
        .faq-answer {
          padding: 0 1.5rem 1.5rem;
          color: #64748b;
        }
        
        .faq-toggle {
          color: #2563eb;
          font-size: 1.25rem;
        }
        
        /* Footer */
        .footer {
          background-color: #1f2937;
          color: white;
          padding: 3rem 1rem;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        .footer-brand {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .footer-description {
          color: #d1d5db;
        }
        
        .footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .footer-link {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .footer-link:hover {
          color: white;
        }
        
        .footer-contact {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .footer-contact li {
          color: #d1d5db;
        }
        
        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 2rem;
          text-align: center;
          color: #9ca3af;
        }
      `}</style>

      {/* Header & Navigation */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <div className="logo-icon">CE</div>
            <div className="logo-text">ClaimEase</div>
          </div>
          
          {/* <nav className="nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#claim" className="nav-link">Claim</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav> */}
          
          {/* <button className="login-btn">Login / Register</button> */}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Claim Your Insurance Easily</h1>
          <p className="hero-subtitle">
            Select your insurance type, submit required details, and track your claims online.
          </p>
          <button 
            onClick={() => document.getElementById('insurance-selection').scrollIntoView({ behavior: 'smooth' })}
            className="cta-button"
          >
            Start Claim Process
          </button>
        </div>
      </section>

      {/* Insurance Type Selection */}
      <section id="insurance-selection" className="section section-white">
        <div className="section-container">
          <h2 className="section-title">Select Insurance Type</h2>
          
          <div className="insurance-grid">
            {[
              { type: 'health', label: 'Health / OPD Insurance', icon: '🏥' },
              { type: 'family-health', label: 'Family Health Insurance', icon: '👨‍👩‍👧‍👦' },
              { type: 'life', label: 'Life Insurance', icon: '🛡️' },
              { type: 'vehicle', label: 'Vehicle Insurance', icon: '🚗' },
              { type: 'travel', label: 'Travel Insurance', icon: '✈️' },
              { type: 'home', label: 'Home Insurance', icon: '🏠' }
            ].map((insurance) => (
              <div
                key={insurance.type}
                className={`insurance-card ${selectedInsurance === insurance.type ? 'selected' : ''}`}
                onClick={() => setSelectedInsurance(insurance.type)}
              >
                <div className="insurance-icon">{insurance.icon}</div>
                <h3 className="insurance-name">{insurance.label}</h3>
                <p className="insurance-description">Click to start claim process</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Claim Forms */}
      <section id="claim" className="section section-gray">
        <div className="section-container">
          {selectedInsurance && (
            <div className="form-container">
              {/* Information Section */}
              <div className="info-box">
                <h3 className="info-title">Important Information</h3>
                {selectedInsurance === 'health' && (
                  <p className="info-text">
                    Health insurance covers hospitalization, OPD treatments, and diagnostic services. 
                    Keep all medical bills and prescriptions ready for faster processing.
                  </p>
                )}
                {selectedInsurance === 'family-health' && (
                  <p className="info-text">
                    Family Health insurance covers all family members under a single policy including hospitalization, 
                    OPD treatments, maternity benefits, and critical illnesses. Ensure you have documents for the specific family member.
                  </p>
                )}
                {selectedInsurance === 'life' && (
                  <p className="info-text">
                    Life insurance claims require death certificate, policy documents, and nominee identification. 
                    Ensure all documents are properly attested.
                  </p>
                )}
                {selectedInsurance === 'vehicle' && (
                  <p className="info-text">
                    Vehicle insurance covers accident damages, theft, and third-party liabilities. 
                    File FIR for accidents and get garage estimates for repair costs.
                  </p>
                )}
                {selectedInsurance === 'travel' && (
                  <p className="info-text">
                    Travel insurance covers medical emergencies, trip cancellations, and lost baggage. 
                    Keep all travel documents and receipts handy.
                  </p>
                )}
                {selectedInsurance === 'home' && (
                  <p className="info-text">
                    Home insurance covers fire, theft, natural disasters, and structural damages. 
                    Document all damages with photos and get professional assessment reports.
                  </p>
                )}
              </div>

              {/* Health Insurance Form */}
              {selectedInsurance === 'health' && (
                <form onSubmit={handleHealthSubmit} className="form">
                  <h3 className="form-title">Health Insurance Claim</h3>
                  
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Policy Number *</label>
                      <input
                        type="text"
                        required
                        value={healthForm.policyNumber}
                        onChange={(e) => setHealthForm({...healthForm, policyNumber: e.target.value})}
                        className="form-input"
                        placeholder="Enter policy number"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Insurance Provider *</label>
                      <select
                        required
                        value={healthForm.provider}
                        onChange={(e) => setHealthForm({...healthForm, provider: e.target.value})}
                        className="form-select"
                      >
                        <option value="">Select Provider</option>
                        <option value="provider1">Provider 1</option>
                        <option value="provider2">Provider 2</option>
                        <option value="provider3">Provider 3</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Date of Treatment *</label>
                      <input
                        type="date"
                        required
                        value={healthForm.treatmentDate}
                        onChange={(e) => setHealthForm({...healthForm, treatmentDate: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Hospital/Clinic Name *</label>
                      <input
                        type="text"
                        required
                        value={healthForm.hospitalName}
                        onChange={(e) => setHealthForm({...healthForm, hospitalName: e.target.value})}
                        className="form-input"
                        placeholder="Enter hospital name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Type of Service *</label>
                      <select
                        required
                        value={healthForm.serviceType}
                        onChange={(e) => setHealthForm({...healthForm, serviceType: e.target.value})}
                        className="form-select"
                      >
                        <option value="">Select Service</option>
                        <option value="consultation">Consultation</option>
                        <option value="diagnostic">Diagnostic</option>
                        <option value="pharmacy">Pharmacy</option>
                        <option value="surgery">Surgery</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Claim Amount (₹) *</label>
                      <input
                        type="number"
                        required
                        value={healthForm.claimAmount}
                        onChange={(e) => setHealthForm({...healthForm, claimAmount: e.target.value})}
                        className="form-input"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Upload Bills/Prescriptions</label>
                    <input
                      type="file"
                      className="form-file"
                      multiple
                    />
                    <p className="file-note">Upload JPEG, PNG or PDF files (Max 10MB)</p>
                  </div>
                  
                  <button
                    type="submit"
                    className="submit-btn"
                  >
                    Submit Health Claim
                  </button>
                </form>
              )}

              {/* Family Health Insurance Form */}
              {selectedInsurance === 'family-health' && (
                <form onSubmit={handleFamilyHealthSubmit} className="form">
                  <h3 className="form-title">Family Health Insurance Claim</h3>
                  
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Policy Number *</label>
                      <input
                        type="text"
                        required
                        value={familyHealthForm.policyNumber}
                        onChange={(e) => setFamilyHealthForm({...familyHealthForm, policyNumber: e.target.value})}
                        className="form-input"
                        placeholder="Enter family policy number"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Insurance Provider *</label>
                      <select
                        required
                        value={familyHealthForm.provider}
                        onChange={(e) => setFamilyHealthForm({...familyHealthForm, provider: e.target.value})}
                        className="form-select"
                      >
                        <option value="">Select Provider</option>
                        <option value="provider1">Provider 1</option>
                        <option value="provider2">Provider 2</option>
                        <option value="provider3">Provider 3</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Primary Member Name *</label>
                      <input
                        type="text"
                        required
                        value={familyHealthForm.primaryMemberName}
                        onChange={(e) => setFamilyHealthForm({...familyHealthForm, primaryMemberName: e.target.value})}
                        className="form-input"
                        placeholder="Enter primary member name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Total Family Members</label>
                      <input
                        type="number"
                        value={familyHealthForm.familyMembersCount}
                        onChange={(e) => setFamilyHealthForm({...familyHealthForm, familyMembersCount: e.target.value})}
                        className="form-input"
                        placeholder="Number of family members covered"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Date of Treatment *</label>
                      <input
                        type="date"
                        required
                        value={familyHealthForm.treatmentDate}
                        onChange={(e) => setFamilyHealthForm({...familyHealthForm, treatmentDate: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Hospital/Clinic Name *</label>
                      <input
                        type="text"
                        required
                        value={familyHealthForm.hospitalName}
                        onChange={(e) => setFamilyHealthForm({...familyHealthForm, hospitalName: e.target.value})}
                        className="form-input"
                        placeholder="Enter hospital name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Patient Name *</label>
                      <input
                        type="text"
                        required
                        value={familyHealthForm.patientName}
                        onChange={(e) => setFamilyHealthForm({...familyHealthForm, patientName: e.target.value})}
                        className="form-input"
                        placeholder="Enter patient name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Relation to Primary Member *</label>
                      <select
                        required
                        value={familyHealthForm.relationToPrimary}
                        onChange={(e) => setFamilyHealthForm({...familyHealthForm, relationToPrimary: e.target.value})}
                        className="form-select"
                      >
                        <option value="">Select Relation</option>
                        <option value="spouse">Spouse</option>
                        <option value="child">Child</option>
                        <option value="parent">Parent</option>
                        <option value="sibling">Sibling</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Type of Service *</label>
                      <select
                        required
                        value={familyHealthForm.serviceType}
                        onChange={(e) => setFamilyHealthForm({...familyHealthForm, serviceType: e.target.value})}
                        className="form-select"
                      >
                        <option value="">Select Service</option>
                        <option value="consultation">Consultation</option>
                        <option value="diagnostic">Diagnostic</option>
                        <option value="pharmacy">Pharmacy</option>
                        <option value="surgery">Surgery</option>
                        <option value="maternity">Maternity</option>
                        <option value="dental">Dental</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Claim Amount (₹) *</label>
                      <input
                        type="number"
                        required
                        value={familyHealthForm.claimAmount}
                        onChange={(e) => setFamilyHealthForm({...familyHealthForm, claimAmount: e.target.value})}
                        className="form-input"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Upload Medical Bills & Prescriptions</label>
                    <input
                      type="file"
                      className="form-file"
                      multiple
                    />
                    <p className="file-note">Upload JPEG, PNG or PDF files (Max 10MB). Include patient ID proof if required.</p>
                  </div>
                  
                  <button
                    type="submit"
                    className="submit-btn"
                  >
                    Submit Family Health Claim
                  </button>
                </form>
              )}

              {/* Life Insurance Form */}
              {selectedInsurance === 'life' && (
                <form onSubmit={handleLifeSubmit} className="form">
                  <h3 className="form-title">Life Insurance Claim</h3>
                  
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Policy Number *</label>
                      <input
                        type="text"
                        required
                        value={lifeForm.policyNumber}
                        onChange={(e) => setLifeForm({...lifeForm, policyNumber: e.target.value})}
                        className="form-input"
                        placeholder="Enter policy number"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Policyholder's Name *</label>
                      <input
                        type="text"
                        required
                        value={lifeForm.policyholderName}
                        onChange={(e) => setLifeForm({...lifeForm, policyholderName: e.target.value})}
                        className="form-input"
                        placeholder="Enter full name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Nominee Name *</label>
                      <input
                        type="text"
                        required
                        value={lifeForm.nomineeName}
                        onChange={(e) => setLifeForm({...lifeForm, nomineeName: e.target.value})}
                        className="form-input"
                        placeholder="Enter nominee name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Relation to Policyholder *</label>
                      <select
                        required
                        value={lifeForm.relation}
                        onChange={(e) => setLifeForm({...lifeForm, relation: e.target.value})}
                        className="form-select"
                      >
                        <option value="">Select Relation</option>
                        <option value="spouse">Spouse</option>
                        <option value="child">Child</option>
                        <option value="parent">Parent</option>
                        <option value="sibling">Sibling</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Date of Incident *</label>
                      <input
                        type="date"
                        required
                        value={lifeForm.incidentDate}
                        onChange={(e) => setLifeForm({...lifeForm, incidentDate: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Claim Amount (₹) *</label>
                      <input
                        type="number"
                        required
                        value={lifeForm.claimAmount}
                        onChange={(e) => setLifeForm({...lifeForm, claimAmount: e.target.value})}
                        className="form-input"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Upload Death Certificate & ID Proof</label>
                    <input
                      type="file"
                      className="form-file"
                      multiple
                    />
                    <p className="file-note">Upload JPEG, PNG or PDF files (Max 10MB)</p>
                  </div>
                  
                  <button
                    type="submit"
                    className="submit-btn"
                  >
                    Submit Life Insurance Claim
                  </button>
                </form>
              )}

              {/* Vehicle Insurance Form */}
              {selectedInsurance === 'vehicle' && (
                <form onSubmit={handleVehicleSubmit} className="form">
                  <h3 className="form-title">Vehicle Insurance Claim</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Policy Number *</label>
                      <input
                        type="text"
                        required
                        value={vehicleForm.policyNumber}
                        onChange={(e) => setVehicleForm({...vehicleForm, policyNumber: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Vehicle Registration Number *</label>
                      <input
                        type="text"
                        required
                        value={vehicleForm.vehicleRegNumber}
                        onChange={(e) => setVehicleForm({...vehicleForm, vehicleRegNumber: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Vehicle Type *</label>
                      <select
                        required
                        value={vehicleForm.vehicleType}
                        onChange={(e) => setVehicleForm({...vehicleForm, vehicleType: e.target.value})}
                        className="form-select"
                      >
                        <option value="">Select Type</option>
                        <option value="car">Car</option>
                        <option value="bike">Bike</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Accident Date *</label>
                      <input
                        type="date"
                        required
                        value={vehicleForm.accidentDate}
                        onChange={(e) => setVehicleForm({...vehicleForm, accidentDate: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Accident Time</label>
                      <input
                        type="time"
                        value={vehicleForm.accidentTime}
                        onChange={(e) => setVehicleForm({...vehicleForm, accidentTime: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Location</label>
                      <input
                        type="text"
                        value={vehicleForm.location}
                        onChange={(e) => setVehicleForm({...vehicleForm, location: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Claim Amount (₹) *</label>
                      <input
                        type="number"
                        required
                        value={vehicleForm.claimAmount}
                        onChange={(e) => setVehicleForm({...vehicleForm, claimAmount: e.target.value})}
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Upload FIR / Garage Estimate / Photos</label>
                    <input
                      type="file"
                      className="form-file"
                      multiple
                    />
                  </div>
                  <button
                    type="submit"
                    className="submit-btn"
                  >
                    Submit Vehicle Claim
                  </button>
                </form>
              )}

              {/* Travel Insurance Form */}
              {selectedInsurance === 'travel' && (
                <form onSubmit={handleTravelSubmit} className="form">
                  <h3 className="form-title">Travel Insurance Claim</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Policy Number *</label>
                      <input
                        type="text"
                        required
                        value={travelForm.policyNumber}
                        onChange={(e) => setTravelForm({...travelForm, policyNumber: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Travel Destination *</label>
                      <input
                        type="text"
                        required
                        value={travelForm.destination}
                        onChange={(e) => setTravelForm({...travelForm, destination: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Trip Start Date *</label>
                      <input
                        type="date"
                        required
                        value={travelForm.tripStart}
                        onChange={(e) => setTravelForm({...travelForm, tripStart: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Trip End Date *</label>
                      <input
                        type="date"
                        required
                        value={travelForm.tripEnd}
                        onChange={(e) => setTravelForm({...travelForm, tripEnd: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Type of Claim *</label>
                      <select
                        required
                        value={travelForm.claimType}
                        onChange={(e) => setTravelForm({...travelForm, claimType: e.target.value})}
                        className="form-select"
                      >
                        <option value="">Select Claim Type</option>
                        <option value="medical">Medical Emergency</option>
                        <option value="baggage">Lost Baggage</option>
                        <option value="cancellation">Flight Cancellation</option>
                        <option value="delay">Flight Delay</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Claim Amount (₹) *</label>
                      <input
                        type="number"
                        required
                        value={travelForm.claimAmount}
                        onChange={(e) => setTravelForm({...travelForm, claimAmount: e.target.value})}
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Upload Proof Documents</label>
                    <input
                      type="file"
                      className="form-file"
                      multiple
                    />
                  </div>
                  <button
                    type="submit"
                    className="submit-btn"
                  >
                    Submit Travel Claim
                  </button>
                </form>
              )}

              {/* Home Insurance Form */}
              {selectedInsurance === 'home' && (
                <form onSubmit={handleHomeSubmit} className="form">
                  <h3 className="form-title">Home Insurance Claim</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Policy Number *</label>
                      <input
                        type="text"
                        required
                        value={homeForm.policyNumber}
                        onChange={(e) => setHomeForm({...homeForm, policyNumber: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Property Address *</label>
                      <input
                        type="text"
                        required
                        value={homeForm.propertyAddress}
                        onChange={(e) => setHomeForm({...homeForm, propertyAddress: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Incident Type *</label>
                      <select
                        required
                        value={homeForm.incidentType}
                        onChange={(e) => setHomeForm({...homeForm, incidentType: e.target.value})}
                        className="form-select"
                      >
                        <option value="">Select Incident Type</option>
                        <option value="fire">Fire</option>
                        <option value="theft">Theft</option>
                        <option value="natural">Natural Disaster</option>
                        <option value="water">Water Damage</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Date of Incident *</label>
                      <input
                        type="date"
                        required
                        value={homeForm.incidentDate}
                        onChange={(e) => setHomeForm({...homeForm, incidentDate: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Estimated Loss (₹) *</label>
                      <input
                        type="number"
                        required
                        value={homeForm.estimatedLoss}
                        onChange={(e) => setHomeForm({...homeForm, estimatedLoss: e.target.value})}
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Upload Damage Proof</label>
                    <input
                      type="file"
                      className="form-file"
                      multiple
                    />
                  </div>
                  <button
                    type="submit"
                    className="submit-btn"
                  >
                    Submit Home Claim
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Claim Status Tracking */}
      <section className="section section-white">
        <div className="section-container">
          <div className="tracking-container">
            <h2 className="section-title">Track Your Claim Status</h2>
            <form onSubmit={handleTrackClaim} className="tracking-form">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter Claim Reference Number"
                className="tracking-input"
              />
              <button
                type="submit"
                className="tracking-btn"
              >
                Track Claim
              </button>
            </form>
            {claimStatus && (
              <div className="status-box">
                <p className="status-text">{claimStatus}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section section-gray">
        <div className="section-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                    <span className="faq-toggle">
                      {activeFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {activeFaq === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <h3 className="footer-brand">ClaimEase</h3>
              <p className="footer-description">Simplifying insurance claims for everyone. Fast, secure, and reliable.</p>
            </div>
            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home" className="footer-link">Home</a></li>
                <li><a href="#claim" className="footer-link">File Claim</a></li>
                <li><a href="#faq" className="footer-link">FAQ</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">Terms of Use</a></li>
                <li><a href="#" className="footer-link">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Contact Info</h4>
              <ul className="footer-contact">
                <li>📞 +1 (555) 123-4567</li>
                <li>✉️ support@claimease.com</li>
                <li>📍 123 Insurance Street, Financial District</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 ClaimEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InsuranceClaimPortal;