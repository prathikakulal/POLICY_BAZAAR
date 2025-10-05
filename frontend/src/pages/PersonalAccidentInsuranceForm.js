
// // import React, { useState, useEffect } from 'react';

// // // --- Styles Component ---
// // const AppStyles = () => (
// //     <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

// //         * {
// //             margin: 0;
// //             padding: 0;
// //             box-sizing: border-box;
// //         }

// //         body {
// //             font-family: 'Roboto', sans-serif;
// //             // background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

// //             background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
// //             display: flex;
// //             justify-content: center;
// //             align-items: center;
// //             min-height: 100vh;
// //             color: #334155;
// //             line-height: 1.6;
// //         }

// //         .app-container {
// //             width: 100%;
// //             padding: 1rem;
// //         }

// //         .form-container {
// //             display: flex;
// //             background-color: #ffffff;
// //             border-radius: 20px;
// //             box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05);
// //             overflow: hidden;
// //             width: 100%;
// //             max-width: 1200px;
// //             margin: 0 auto;
// //             min-height: 700px;
// //         }

// //         /* --- Left Panel --- */
// //         .left-panel {
// //             background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
// //             padding: 40px 30px;
// //             width: 45%;
// //             color: white;
// //             position: relative;
// //             overflow: hidden;
// //         }

// //         .left-panel::before {
// //             content: '';
// //             position: absolute;
// //             top: 0;
// //             left: 0;
// //             right: 0;
// //             bottom: 0;
// //             background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,100 Z" fill="rgba(255,255,255,0.05)"/></svg>');
// //             background-size: cover;
// //         }

// //         .left-panel h1 {
// //             font-size: 28px;
// //             color: #ffffff;
// //             margin-bottom: 15px;
// //             font-weight: 700;
// //             position: relative;
// //         }

// //         .left-panel p {
// //             font-size: 15px;
// //             line-height: 1.6;
// //             color: #e2e8f0;
// //             margin-bottom: 30px;
// //             position: relative;
// //         }
        
// //         .read-more {
// //             color: #93c5fd;
// //             font-weight: 500;
// //             cursor: pointer;
// //             text-decoration: underline;
// //         }
        
// //         .features {
// //             margin-top: 2.5rem;
// //             position: relative;
// //         }
        
// //         .feature-item {
// //             display: flex;
// //             align-items: center;
// //             gap: 15px;
// //             margin-bottom: 1.8rem;
// //             position: relative;
// //         }
        
// //         .feature-icon {
// //             font-size: 22px;
// //             background: rgba(255, 255, 255, 0.2);
// //             width: 50px;
// //             height: 50px;
// //             border-radius: 50%;
// //             display: flex;
// //             align-items: center;
// //             justify-content: center;
// //             flex-shrink: 0;
// //         }

// //         .feature-item strong {
// //             display: block;
// //             font-size: 16px;
// //             color: #ffffff;
// //             font-weight: 600;
// //             margin-bottom: 4px;
// //         }
        
// //         .feature-item small {
// //             font-size: 13px;
// //             color: #cbd5e1;
// //         }

// //         .trust-info-card {
// //             background: rgba(255, 255, 255, 0.1);
// //             border-radius: 16px;
// //             padding: 25px;
// //             margin-top: 2.5rem;
// //             backdrop-filter: blur(10px);
// //             border: 1px solid rgba(255, 255, 255, 0.2);
// //             position: relative;
// //         }
        
// //         .trust-info-card strong {
// //             font-size: 17px;
// //             color: #ffffff;
// //             display: block;
// //             margin-bottom: 15px;
// //         }
        
// //         .trust-stats {
// //             display: flex;
// //             justify-content: space-between;
// //             text-align: center;
// //         }
        
// //         .trust-stats div {
// //             flex: 1;
// //         }
        
// //         .trust-stats strong {
// //             font-size: 20px;
// //             display: block;
// //             margin-bottom: 5px;
// //         }
        
// //         .trust-stats small {
// //             font-size: 12px;
// //             color: #cbd5e1;
// //         }
        
// //         .stars {
// //             color: #fbbf24;
// //             font-size: 14px;
// //             margin-bottom: 8px;
// //         }
        
// //         .footer-text {
// //             font-size: 13px !important;
// //             text-align: center;
// //             margin-top: 2rem;
// //             color: #94a3b8 !important;
// //             position: relative;
// //         }

// //         /* --- Right Panel --- */
// //         .right-panel {
// //             padding: 40px;
// //             width: 55%;
// //             position: relative;
// //             display: flex;
// //             flex-direction: column;
// //             min-height: 700px;
// //         }

// //         .progress-container {
// //             width: 70px;
// //             height: 70px;
// //             position: absolute;
// //             top: 30px;
// //             right: 30px;
// //             display: flex;
// //             align-items: center;
// //             justify-content: center;
// //         }
        
// //         .progress-container span {
// //             position: absolute;
// //             font-weight: bold;
// //             color: #16a34a;
// //             font-size: 16px;
// //         }
        
// //         .progress-ring-circle-bg {
// //             stroke: #f1f5f9;
// //         }
        
// //         .progress-ring-circle {
// //             stroke: #22c55e;
// //             stroke-linecap: round;
// //             transform: rotate(-90deg);
// //             transform-origin: 50% 50%;
// //             transition: stroke-dashoffset 0.5s ease-in-out;
// //             stroke-dasharray: 164;
// //         }

// //         .form-step {
// //             animation: fadeIn 0.5s ease-in-out;
// //             flex-grow: 1;
// //             display: flex;
// //             flex-direction: column;
// //         }
        
// //         @keyframes fadeIn {
// //             from { opacity: 0; transform: translateY(10px); }
// //             to { opacity: 1; transform: translateY(0); }
// //         }

// //         .form-step h2 {
// //             font-size: 24px;
// //             color: #1e293b;
// //             margin-bottom: 10px;
// //             font-weight: 700;
// //         }
        
// //         .form-step p {
// //             color: #64748b;
// //             margin-bottom: 30px;
// //             font-size: 15px;
// //         }
        
// //         .terms-text {
// //             font-size: 12px;
// //             text-align: center;
// //             color: #94a3b8;
// //             margin-top: 20px;
// //         }

// //         /* --- Form Elements --- */
// //         .gender-selector {
// //             display: flex;
// //             gap: 20px;
// //             margin-bottom: 25px;
// //         }
        
// //         .gender-selector label {
// //             display: flex;
// //             align-items: center;
// //             gap: 10px;
// //             font-size: 16px;
// //             cursor: pointer;
// //             padding: 12px 20px;
// //             border: 2px solid #e2e8f0;
// //             border-radius: 12px;
// //             transition: all 0.3s;
// //             flex: 1;
// //             justify-content: center;
// //         }
        
// //         .gender-selector label:hover {
// //             border-color: #3b82f6;
// //         }
        
// //         input[type="radio"] {
// //             accent-color: #3b82f6;
// //             transform: scale(1.2);
// //         }
        
// //         .member-grid {
// //             display: grid;
// //             grid-template-columns: repeat(2, 1fr);
// //             gap: 15px;
// //             margin-bottom: 30px;
// //         }
        
// //         .member-btn {
// //             padding: 16px;
// //             border: 2px solid #e2e8f0;
// //             border-radius: 12px;
// //             background-color: #fff;
// //             cursor: pointer;
// //             transition: all 0.3s;
// //             font-size: 15px;
// //             text-align: left;
// //             display: flex;
// //             align-items: center;
// //             gap: 12px;
// //             font-weight: 500;
// //         }
        
// //         .member-btn:hover {
// //             border-color: #3b82f6;
// //             transform: translateY(-2px);
// //             box-shadow: 0 5px 15px rgba(59, 130, 246, 0.1);
// //         }
        
// //         .member-btn.selected {
// //             background-color: #eff6ff;
// //             border-color: #3b82f6;
// //             color: #1e3a8a;
// //             font-weight: 600;
// //             box-shadow: 0 5px 15px rgba(59, 130, 246, 0.15);
// //         }
        
// //         .member-icon {
// //             font-size: 24px;
// //             width: 30px;
// //             text-align: center;
// //         }
        
// //         .member-icon-small {
// //             font-size: 18px;
// //             width: 24px;
// //             text-align: center;
// //         }

// //         .age-selection-grid {
// //             display: grid;
// //             grid-template-columns: 1fr;
// //             gap: 20px;
// //         }
        
// //         .age-selector {
// //             display: flex;
// //             justify-content: space-between;
// //             align-items: center;
// //             padding: 15px;
// //             border: 1px solid #e2e8f0;
// //             border-radius: 12px;
// //             transition: all 0.3s;
// //         }
        
// //         .age-selector:hover {
// //             border-color: #3b82f6;
// //         }
        
// //         .age-selector label {
// //             display: flex;
// //             align-items: center;
// //             gap: 10px;
// //             font-size: 16px;
// //             font-weight: 500;
// //         }
        
// //         .age-selector select, .city-input {
// //             width: 50%;
// //             padding: 12px 15px;
// //             border: 1px solid #d1d5db;
// //             border-radius: 10px;
// //             font-family: 'Roboto', sans-serif;
// //             font-size: 15px;
// //             background-color: #fff;
// //             transition: all 0.3s;
// //         }
        
// //         .age-selector select:focus, .city-input:focus {
// //             outline: none;
// //             border-color: #3b82f6;
// //             box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
// //         }
        
// //         .city-input {
// //             width: 100%;
// //             margin-bottom: 20px;
// //         }
        
// //         .popular-cities-title {
// //             font-size: 15px;
// //             font-weight: 600;
// //             margin-bottom: 15px !important;
// //             color: #374151;
// //         }
        
// //         .popular-cities {
// //             display: flex;
// //             flex-wrap: wrap;
// //             gap: 10px;
// //             margin-bottom: 25px;
// //         }
        
// //         .popular-cities button {
// //             background: #f8fafc;
// //             border: 1px solid #e2e8f0;
// //             border-radius: 20px;
// //             padding: 8px 16px;
// //             cursor: pointer;
// //             font-size: 14px;
// //             font-family: 'Roboto', sans-serif;
// //             transition: all 0.3s;
// //         }
        
// //         .popular-cities button:hover {
// //             background: #eff6ff;
// //             border-color: #3b82f6;
// //             color: #3b82f6;
// //         }

// //         .medical-grid {
// //             display: grid;
// //             grid-template-columns: repeat(2, 1fr);
// //             gap: 12px;
// //         }
        
// //         .medical-label {
// //             padding: 16px;
// //             border: 2px solid #e2e8f0;
// //             border-radius: 12px;
// //             cursor: pointer;
// //             display: flex;
// //             align-items: center;
// //             gap: 10px;
// //             font-size: 15px;
// //             transition: all 0.3s;
// //             font-weight: 500;
// //         }
        
// //         .medical-label:hover {
// //             border-color: #3b82f6;
// //             transform: translateY(-2px);
// //         }
        
// //         .medical-label input[type="checkbox"] {
// //             display: none;
// //         }
        
// //         .medical-label.selected {
// //             background-color: #eff6ff;
// //             border-color: #3b82f6;
// //             color: #1e3a8a;
// //             font-weight: 600;
// //             box-shadow: 0 5px 15px rgba(59, 130, 246, 0.15);
// //         }
        
// //         .whatsapp-toggle {
// //             display: flex;
// //             justify-content: space-between;
// //             align-items: center;
// //             margin-top: 2.5rem;
// //             padding: 20px;
// //             background: #f8fafc;
// //             border-radius: 12px;
// //             border: 1px solid #e2e8f0;
// //         }
        
// //         .whatsapp-toggle label {
// //             font-weight: 500;
// //             color: #374151;
// //         }
        
// //         .toggle-switch {
// //             position: relative;
// //             display: inline-block;
// //             width: 50px;
// //             height: 28px;
// //         }
        
// //         .toggle-switch input {
// //             display: none;
// //         }
        
// //         .toggle-switch label {
// //             position: absolute;
// //             cursor: pointer;
// //             top: 0;
// //             left: 0;
// //             right: 0;
// //             bottom: 0;
// //             background-color: #ccc;
// //             transition: .4s;
// //             border-radius: 34px;
// //         }
        
// //         .toggle-switch label:before {
// //             position: absolute;
// //             content: "";
// //             height: 20px;
// //             width: 20px;
// //             left: 4px;
// //             bottom: 4px;
// //             background-color: white;
// //             transition: .4s;
// //             border-radius: 50%;
// //         }
        
// //         input:checked + label {
// //             background-color: #22c55e;
// //         }
        
// //         input:checked + label:before {
// //             transform: translateX(22px);
// //         }

// //         /* --- Navigation --- */
// //         .nav-buttons {
// //             display: flex;
// //             justify-content: space-between;
// //             align-items: center;
// //             margin-top: auto;
// //             border-top: 1px solid #f1f5f9;
// //             padding-top: 25px;
// //         }

// //         .btn-primary, .btn-secondary {
// //             padding: 14px 30px;
// //             border: none;
// //             border-radius: 12px;
// //             font-size: 16px;
// //             font-weight: 600;
// //             cursor: pointer;
// //             transition: all 0.3s;
// //             font-family: 'Roboto', sans-serif;
// //         }

// //         .btn-primary {
// //             background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
// //             color: white;
// //             width: 100%;
// //             box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
// //         }
        
// //         .nav-buttons .btn-primary {
// //             width: auto;
// //         }
        
// //         .btn-primary:hover {
// //             transform: translateY(-2px);
// //             box-shadow: 0 6px 15px rgba(59, 130, 246, 0.4);
// //         }

// //         .btn-primary:disabled {
// //             background: #94a3b8;
// //             cursor: not-allowed;
// //             transform: none;
// //             box-shadow: none;
// //         }

// //         .btn-secondary {
// //             background-color: transparent;
// //             color: #64748b;
// //             border: 1px solid #d1d5db;
// //         }
        
// //         .btn-secondary:hover {
// //             background-color: #f8fafc;
// //             border-color: #9ca3af;
// //         }

// //         /* Final Step & Loader */
// //         .final-step {
// //             text-align: center;
// //             justify-content: center;
// //             padding: 40px 0;
// //         }
        
// //         .loader {
// //             border: 4px solid #f3f3f3;
// //             border-top: 4px solid #3b82f6;
// //             border-radius: 50%;
// //             width: 50px;
// //             height: 50px;
// //             animation: spin 1s linear infinite;
// //             margin: 30px auto;
// //         }

// //         @keyframes spin {
// //             0% { transform: rotate(0deg); }
// //             100% { transform: rotate(360deg); }
// //         }

// //         .link-btn {
// //             display: inline-block;
// //             text-decoration: none;
// //             text-align: center;
// //             margin-top: 25px;
// //             padding: 12px 30px;
// //         }

// //         @media (max-width: 1024px) {
// //             .form-container {
// //                 flex-direction: column;
// //                 max-width: 600px;
// //                 margin: auto;
// //             }
            
// //             .left-panel, .right-panel {
// //                 width: 100%;
// //             }
            
// //             .left-panel {
// //                 padding: 30px 25px;
// //             }
            
// //             .right-panel {
// //                 padding: 30px 25px;
// //                 min-height: 600px;
// //             }
            
// //             .progress-container {
// //                 top: 20px;
// //                 right: 20px;
// //             }
// //         }
        
// //         @media (max-width: 640px) {
// //             .app-container {
// //                 padding: 0.5rem;
// //             }
            
// //             .form-container {
// //                 border-radius: 15px;
// //             }
            
// //             .left-panel, .right-panel {
// //                 padding: 25px 20px;
// //             }
            
// //             .member-grid, .medical-grid {
// //                 grid-template-columns: 1fr;
// //             }
            
// //             .trust-stats {
// //                 flex-direction: column;
// //                 gap: 15px;
// //             }
            
// //             .trust-stats div {
// //                 display: flex;
// //                 flex-direction: column;
// //                 align-items: center;
// //             }
            
// //             .nav-buttons {
// //                 flex-direction: column;
// //                 gap: 15px;
// //             }
            
// //             .nav-buttons .btn-primary, .nav-buttons .btn-secondary {
// //                 width: 100%;
// //             }
// //         }
// //     `}</style>
// // );

// // // --- Data for Form Fields ---
// // const members = [
// //     { id: 'self', name: 'Self', icon: '👤' },
// //     { id: 'wife', name: 'Wife', icon: '👩' },
// //     { id: 'son', name: 'Son', icon: '👦' },
// //     { id: 'daughter', name: 'Daughter', icon: '👧' },
// //     { id: 'father', name: 'Father', icon: '👨' },
// //     { id: 'mother', name: 'Mother', icon: '👩' },
// //     { id: 'grandfather', name: 'Grand Father', icon: '👴' },
// //     { id: 'grandmother', name: 'Grand Mother', icon: '👵' },
// // ];

// // const medicalConditions = ['Diabetes', 'Blood Pressure', 'Heart disease', 'Any Surgery', 'Thyroid', 'Asthma', 'Other disease'];

// // const popularCities = ['Delhi', 'Bengaluru', 'Pune', 'Hyderabad', 'Mumbai', 'Thane', 'Gurgaon', 'Chennai', 'Ghaziabad', 'Ernakulam'];

// // // --- Reusable Left Panel Component ---
// // const LeftPanel = () => (
// //     <div className="left-panel">
// //         <h1>Personal Accident Insurance</h1>
// //         <p>Personal Accident Insurance provides complete financial protection to the insured against uncertainties, such as accidental death.… <span className="read-more">Read More</span></p>
// //         <div className="features">
// //             <div className="feature-item">
// //                 <span className="feature-icon">⏱</span>
// //                 <div>
// //                     <strong>30 minutes claim support**</strong>
// //                     <small>(In 120+ cities)</small>
// //                 </div>
// //             </div>
// //             <div className="feature-item">
// //                 <span className="feature-icon">🤝</span>
// //                 <div>
// //                     <strong>Relationship manager</strong>
// //                     <small>For every customer</small>
// //                 </div>
// //             </div>
// //             <div className="feature-item">
// //                  <span className="feature-icon">📞</span>
// //                 <div>
// //                     <strong>24*7 claims assistance</strong>
// //                     <small>In 30 mins. guaranteed*</small>
// //                 </div>
// //             </div>
// //             <div className="feature-item">
// //                  <span className="feature-icon">📄</span>
// //                 <div>
// //                     <strong>Instant policy issuance</strong>
// //                     <small>No medical tests*</small>
// //                 </div>
// //             </div>
// //         </div>
// //         <div className="trust-info-card">
// //               <strong>People trust Policybazaar*</strong>
// //               <div className="trust-stats">
// //                 <div>
// //                     <div className="stars">★★★★☆</div>
// //                     <strong>10.5 crore</strong>
// //                     <small>Registered consumers</small>
// //                 </div>
// //                 <div>
// //                     <strong>51</strong>
// //                     <small>Insurance partners</small>
// //                 </div>
// //                 <div>
// //                     <strong>5.3 crore</strong>
// //                     <small>Policies sold</small>
// //                 </div>
// //               </div>
// //         </div>
// //         <p className="footer-text">Policybazaar is one of India's leading digital insurance platform</p>
// //     </div>
// // );

// // // --- Step 1: Member Selection Component ---
// // const MemberSelection = ({ formData, setFormData, nextStep }) => {
// //     const handleMemberToggle = (memberName) => {
// //         const currentMembers = formData.selectedMembers;
// //         const newMembers = currentMembers.includes(memberName)
// //             ? currentMembers.filter(m => m !== memberName)
// //             : [...currentMembers, memberName];
// //         setFormData({ ...formData, selectedMembers: newMembers });
// //     };

// //     return (
// //         <div className="form-step">
// //             <h2>Save Big with 0% GST &amp; upto 25% Discount**</h2>
// //             <div className="gender-selector">
// //                 <label>
// //                     <input
// //                         type="radio"
// //                         name="gender"
// //                         value="Male"
// //                         checked={formData.gender === 'Male'}
// //                         onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
// //                     /> Male
// //                 </label>
// //                 <label>
// //                     <input
// //                         type="radio"
// //                         name="gender"
// //                         value="Female"
// //                         checked={formData.gender === 'Female'}
// //                         onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
// //                     /> Female
// //                 </label>
// //             </div>
// //             <p>Select members you want to insure</p>
// //             <div className="member-grid">
// //                 {members.map(member => (
// //                     <button
// //                         key={member.id}
// //                         className={`member-btn ${formData.selectedMembers.includes(member.name) ? 'selected' : ''}`}
// //                         onClick={() => handleMemberToggle(member.name)}
// //                     >
// //                         <span className="member-icon">{member.icon}</span>
// //                         {member.name}
// //                     </button>
// //                 ))}
// //             </div>
// //             <div className="nav-buttons">
// //                  <button className="btn-primary" onClick={nextStep} disabled={formData.selectedMembers.length === 0 || !formData.gender}>Continue</button>
// //             </div>
// //             <p className="terms-text">By clicking on "Continue" you agree to our Privacy Policy and Terms of use</p>
// //         </div>
// //     );
// // };

// // // --- Step 2: Age Selection Component ---
// // const AgeSelection = ({ formData, setFormData, nextStep, prevStep }) => {
// //     const handleAgeChange = (member, age) => {
// //         setFormData({
// //             ...formData,
// //             ages: { ...formData.ages, [member]: age }
// //         });
// //     };

// //     const isContinueDisabled = formData.selectedMembers.some(member => !formData.ages[member]);

// //     const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1);

// //     return (
// //         <div className="form-step">
// //             <h2>Select age of covered member(s)</h2>
// //             <p>This will help us calculate the premium &amp; discounts for your family</p>
// //             <div className="age-selection-grid">
// //                 {formData.selectedMembers.map(member => (
// //                     <div key={member} className="age-selector">
// //                         <label>
// //                             <span className="member-icon-small">{members.find(m => m.name === member)?.icon}</span>
// //                             {member}'s age
// //                         </label>
// //                         <select
// //                             value={formData.ages[member] || ''}
// //                             onChange={(e) => handleAgeChange(member, e.target.value)}
// //                         >
// //                             <option value="" disabled>Select Age</option>
// //                             {ageOptions.map(age => <option key={age} value={age}>{age} years</option>)}
// //                         </select>
// //                     </div>
// //                 ))}
// //             </div>
// //             <div className="nav-buttons">
// //                 <button className="btn-secondary" onClick={prevStep}>&lt; Previous step</button>
// //                 <button className="btn-primary" onClick={nextStep} disabled={isContinueDisabled}>Continue</button>
// //             </div>
// //         </div>
// //     );
// // };

// // // --- Step 3: City Selection Component ---
// // const CitySelection = ({ formData, setFormData, nextStep, prevStep }) => (
// //     <div className="form-step">
// //         <h2>Select your city</h2>
// //         <p>This will help us to find the network of Cashless Hospitals in your city</p>
// //         <input
// //             type="text"
// //             placeholder="Enter City"
// //             value={formData.city}
// //             onChange={(e) => setFormData({ ...formData, city: e.target.value })}
// //             className="city-input"
// //         />
// //         <p className="popular-cities-title">Popular Cities</p>
// //         <div className="popular-cities">
// //             {popularCities.map(city => (
// //                 <button key={city} onClick={() => setFormData({ ...formData, city })}>{city}</button>
// //             ))}
// //         </div>
// //         <div className="nav-buttons">
// //             <button className="btn-secondary" onClick={prevStep}>&lt; Previous step</button>
// //             <button className="btn-primary" onClick={nextStep} disabled={!formData.city}>Continue</button>
// //         </div>
// //     </div>
// // );

// // // --- Step 4: Medical History Component ---
// // const MedicalHistory = ({ formData, setFormData, nextStep, prevStep }) => {
// //     const handleConditionToggle = (condition) => {
// //         const currentConditions = formData.medicalHistory;
// //         let newConditions;

// //         if (condition === 'None of these') {
// //             newConditions = currentConditions.includes('None of these') ? [] : ['None of these'];
// //         } else {
// //             newConditions = currentConditions.includes(condition)
// //                 ? currentConditions.filter(c => c !== condition && c !== 'None of these')
// //                 : [...currentConditions.filter(c => c !== 'None of these'), condition];
// //         }
        
// //         if (newConditions.length === 0) newConditions = [];

// //         setFormData({ ...formData, medicalHistory: newConditions });
// //     };
    
// //     const isContinueDisabled = formData.medicalHistory.length === 0;

// //     return (
// //         <div className="form-step">
// //             <h2>Medical history</h2>
// //             <p>Do any member(s) have any existing illnesses for which they take regular medication?</p>
// //             <div className="medical-grid">
// //                 {[...medicalConditions, 'None of these'].map(condition => (
// //                     <label key={condition} className={`medical-label ${formData.medicalHistory.includes(condition) ? 'selected' : ''}`}>
// //                          <input
// //                              type="checkbox"
// //                              checked={formData.medicalHistory.includes(condition)}
// //                              onChange={() => handleConditionToggle(condition)}
// //                          />
// //                         {condition}
// //                     </label>
// //                 ))}
// //             </div>
// //             <div className="nav-buttons">
// //                  <button className="btn-secondary" onClick={prevStep}>&lt; Previous step</button>
// //                  <button className="btn-primary" onClick={nextStep} disabled={isContinueDisabled}>View Plans</button>
// //             </div>
// //               <div className="whatsapp-toggle">
// //                 <label>Get Updates on WhatsApp</label>
// //                 <div className="toggle-switch">
// //                     <input type="checkbox" id="whatsapp" defaultChecked/>
// //                     <label htmlFor="whatsapp"></label>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // // --- Step 5: Final Plan Display Component ---
// // const PlanDisplay = ({ planUrl }) => {
// //     useEffect(() => {
// //         const timer = setTimeout(() => {
// //             // In a real scenario, you'd redirect. Here we avoid it for preview purposes.
// //             console.log(`Redirecting to: ${planUrl}`);
// //         }, 2000);
// //         return () => clearTimeout(timer);
// //     }, [planUrl]);
    
// //     return (
// //         <div className="form-step final-step">
// //             <h2>Thank you!</h2>
// //             <p>We have received your details and are now finding the best insurance plans tailored for you.</p>
// //             <div className="loader"></div>
// //             <p>Please wait while we redirect you...</p>
// //             <a href={planUrl} target="_blank" rel="noopener noreferrer" className="btn-primary link-btn">
// //                 Click here if you are not redirected
// //             </a>
// //         </div>
// //     );
// // };

// // // --- Main App Component ---
// // function PersonalAccidentInsuranceForm() {
// //     const [step, setStep] = useState(1);
// //     const [formData, setFormData] = useState({
// //         gender: 'Male',
// //         selectedMembers: ['Self'],
// //         ages: {},
// //         city: '',
// //         medicalHistory: [],
// //     });

// //     const nextStep = () => setStep(prev => prev + 1);
// //     const prevStep = () => setStep(prev => prev - 1);

// //     const planUrl = "https://www.policybazaar.com/";

// //     const progressPercentage = {
// //         1: 0,
// //         2: 25,
// //         3: 50,
// //         4: 75,
// //         5: 100
// //     };
    
// //     const progress = progressPercentage[step];
// //     const strokeDashoffset = 164 - (164 * progress) / 100;

// //     const renderStep = () => {
// //         switch (step) {
// //             case 1:
// //                 return <MemberSelection formData={formData} setFormData={setFormData} nextStep={nextStep} />;
// //             case 2:
// //                 return <AgeSelection formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
// //             case 3:
// //                 return <CitySelection formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
// //             case 4:
// //                 return <MedicalHistory formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
// //             case 5:
// //                 return <PlanDisplay planUrl={planUrl} />;
// //             default:
// //                 return <MemberSelection formData={formData} setFormData={setFormData} nextStep={nextStep} />;
// //         }
// //     };

// //     return (
// //         <>
// //             <AppStyles />
// //             <div className="app-container">
// //                 <div className="form-container">
// //                     <LeftPanel />
// //                     <div className="right-panel">
// //                        {step < 5 && (
// //                              <div className="progress-container">
// //                                  <svg className="progress-ring" width="70" height="70">
// //                                    <circle className="progress-ring-circle-bg" strokeWidth="4" fill="transparent" r="26" cx="35" cy="35"/>
// //                                    <circle className="progress-ring-circle" strokeWidth="4" fill="transparent" r="26" cx="35" cy="35" style={{ strokeDashoffset }}/>
// //                                  </svg>
// //                                  <span>{progress}%</span>
// //                              </div>
// //                        )}
// //                         {renderStep()}
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // }

// // export default PersonalAccidentInsuranceForm;










// import React, { useState, useEffect } from 'react';

// // --- Styles Component ---
// const AppStyles = () => (
//     <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

//         * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//         }

//         body {
//             font-family: 'Roboto', sans-serif;
//             background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             min-height: 100vh;
//             color: #334155;
//             line-height: 1.6;
//         }

//         .app-container {
//             width: 100%;
//             padding: 1rem;
//         }

//         .form-container {
//             display: flex;
//             background-color: #ffffff;
//             border-radius: 20px;
//             box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05);
//             overflow: hidden;
//             width: 100%;
//             max-width: 1200px;
//             margin: 0 auto;
//             min-height: 700px;
//         }

//         /* --- Left Panel --- */
//         .left-panel {
//             background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
//             padding: 40px 30px;
//             width: 45%;
//             color: white;
//             position: relative;
//             overflow: hidden;
//         }

//         .left-panel::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,100 Z" fill="rgba(255,255,255,0.05)"/></svg>');
//             background-size: cover;
//         }

//         .left-panel h1 {
//             font-size: 28px;
//             color: #ffffff;
//             margin-bottom: 15px;
//             font-weight: 700;
//             position: relative;
//         }

//         .left-panel p {
//             font-size: 15px;
//             line-height: 1.6;
//             color: #e2e8f0;
//             margin-bottom: 30px;
//             position: relative;
//         }
        
//         .read-more {
//             color: #93c5fd;
//             font-weight: 500;
//             cursor: pointer;
//             text-decoration: underline;
//         }
        
//         .features {
//             margin-top: 2.5rem;
//             position: relative;
//         }
        
//         .feature-item {
//             display: flex;
//             align-items: center;
//             gap: 15px;
//             margin-bottom: 1.8rem;
//             position: relative;
//         }
        
//         .feature-icon {
//             font-size: 22px;
//             background: rgba(255, 255, 255, 0.2);
//             width: 50px;
//             height: 50px;
//             border-radius: 50%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             flex-shrink: 0;
//         }

//         .feature-item strong {
//             display: block;
//             font-size: 16px;
//             color: #ffffff;
//             font-weight: 600;
//             margin-bottom: 4px;
//         }
        
//         .feature-item small {
//             font-size: 13px;
//             color: #cbd5e1;
//         }

//         .trust-info-card {
//             background: rgba(255, 255, 255, 0.1);
//             border-radius: 16px;
//             padding: 25px;
//             margin-top: 2.5rem;
//             backdrop-filter: blur(10px);
//             border: 1px solid rgba(255, 255, 255, 0.2);
//             position: relative;
//         }
        
//         .trust-info-card strong {
//             font-size: 17px;
//             color: #ffffff;
//             display: block;
//             margin-bottom: 15px;
//         }
        
//         .trust-stats {
//             display: flex;
//             justify-content: space-between;
//             text-align: center;
//         }
        
//         .trust-stats div {
//             flex: 1;
//         }
        
//         .trust-stats strong {
//             font-size: 20px;
//             display: block;
//             margin-bottom: 5px;
//         }
        
//         .trust-stats small {
//             font-size: 12px;
//             color: #cbd5e1;
//         }
        
//         .stars {
//             color: #fbbf24;
//             font-size: 14px;
//             margin-bottom: 8px;
//         }
        
//         .footer-text {
//             font-size: 13px !important;
//             text-align: center;
//             margin-top: 2rem;
//             color: #94a3b8 !important;
//             position: relative;
//         }

//         /* --- Right Panel --- */
//         .right-panel {
//             padding: 40px;
//             width: 55%;
//             position: relative;
//             display: flex;
//             flex-direction: column;
//             min-height: 700px;
//         }

//         .progress-container {
//             width: 70px;
//             height: 70px;
//             position: absolute;
//             top: 30px;
//             right: 30px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//         }
        
//         .progress-container span {
//             position: absolute;
//             font-weight: bold;
//             color: #16a34a;
//             font-size: 16px;
//         }
        
//         .progress-ring-circle-bg {
//             stroke: #f1f5f9;
//         }
        
//         .progress-ring-circle {
//             stroke: #22c55e;
//             stroke-linecap: round;
//             transform: rotate(-90deg);
//             transform-origin: 50% 50%;
//             transition: stroke-dashoffset 0.5s ease-in-out;
//             stroke-dasharray: 164;
//         }

//         .form-step {
//             animation: fadeIn 0.5s ease-in-out;
//             flex-grow: 1;
//             display: flex;
//             flex-direction: column;
//         }
        
//         @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(10px); }
//             to { opacity: 1; transform: translateY(0); }
//         }

//         .form-step h2 {
//             font-size: 24px;
//             color: #1e293b;
//             margin-bottom: 10px;
//             font-weight: 700;
//         }
        
//         .form-step p {
//             color: #64748b;
//             margin-bottom: 30px;
//             font-size: 15px;
//         }
        
//         .terms-text {
//             font-size: 12px;
//             text-align: center;
//             color: #94a3b8;
//             margin-top: 20px;
//         }

//         /* --- Form Elements --- */
//         .gender-selector {
//             display: flex;
//             gap: 20px;
//             margin-bottom: 25px;
//         }
        
//         .gender-selector label {
//             display: flex;
//             align-items: center;
//             gap: 10px;
//             font-size: 16px;
//             cursor: pointer;
//             padding: 12px 20px;
//             border: 2px solid #e2e8f0;
//             border-radius: 12px;
//             transition: all 0.3s;
//             flex: 1;
//             justify-content: center;
//         }
        
//         .gender-selector label:hover {
//             border-color: #3b82f6;
//         }
        
//         input[type="radio"] {
//             accent-color: #3b82f6;
//             transform: scale(1.2);
//         }
        
//         .member-grid {
//             display: grid;
//             grid-template-columns: repeat(2, 1fr);
//             gap: 15px;
//             margin-bottom: 30px;
//         }
        
//         .member-btn {
//             padding: 16px;
//             border: 2px solid #e2e8f0;
//             border-radius: 12px;
//             background-color: #fff;
//             cursor: pointer;
//             transition: all 0.3s;
//             font-size: 15px;
//             text-align: left;
//             display: flex;
//             align-items: center;
//             gap: 12px;
//             font-weight: 500;
//         }
        
//         .member-btn:hover {
//             border-color: #3b82f6;
//             transform: translateY(-2px);
//             box-shadow: 0 5px 15px rgba(59, 130, 246, 0.1);
//         }
        
//         .member-btn.selected {
//             background-color: #eff6ff;
//             border-color: #3b82f6;
//             color: #1e3a8a;
//             font-weight: 600;
//             box-shadow: 0 5px 15px rgba(59, 130, 246, 0.15);
//         }
        
//         .member-icon {
//             font-size: 24px;
//             width: 30px;
//             text-align: center;
//         }
        
//         .member-icon-small {
//             font-size: 18px;
//             width: 24px;
//             text-align: center;
//         }

//         .age-selection-grid {
//             display: grid;
//             grid-template-columns: 1fr;
//             gap: 20px;
//         }
        
//         .age-selector {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             padding: 15px;
//             border: 1px solid #e2e8f0;
//             border-radius: 12px;
//             transition: all 0.3s;
//         }
        
//         .age-selector:hover {
//             border-color: #3b82f6;
//         }
        
//         .age-selector label {
//             display: flex;
//             align-items: center;
//             gap: 10px;
//             font-size: 16px;
//             font-weight: 500;
//         }
        
//         .age-selector select, .city-input {
//             width: 50%;
//             padding: 12px 15px;
//             border: 1px solid #d1d5db;
//             border-radius: 10px;
//             font-family: 'Roboto', sans-serif;
//             font-size: 15px;
//             background-color: #fff;
//             transition: all 0.3s;
//         }
        
//         .age-selector select:focus, .city-input:focus {
//             outline: none;
//             border-color: #3b82f6;
//             box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
//         }
        
//         .city-input {
//             width: 100%;
//             margin-bottom: 20px;
//         }
        
//         .popular-cities-title {
//             font-size: 15px;
//             font-weight: 600;
//             margin-bottom: 15px !important;
//             color: #374151;
//         }
        
//         .popular-cities {
//             display: flex;
//             flex-wrap: wrap;
//             gap: 10px;
//             margin-bottom: 25px;
//         }
        
//         .popular-cities button {
//             background: #f8fafc;
//             border: 1px solid #e2e8f0;
//             border-radius: 20px;
//             padding: 8px 16px;
//             cursor: pointer;
//             font-size: 14px;
//             font-family: 'Roboto', sans-serif;
//             transition: all 0.3s;
//         }
        
//         .popular-cities button:hover {
//             background: #eff6ff;
//             border-color: #3b82f6;
//             color: #3b82f6;
//         }

//         .medical-grid {
//             display: grid;
//             grid-template-columns: repeat(2, 1fr);
//             gap: 12px;
//         }
        
//         .medical-label {
//             padding: 16px;
//             border: 2px solid #e2e8f0;
//             border-radius: 12px;
//             cursor: pointer;
//             display: flex;
//             align-items: center;
//             gap: 10px;
//             font-size: 15px;
//             transition: all 0.3s;
//             font-weight: 500;
//         }
        
//         .medical-label:hover {
//             border-color: #3b82f6;
//             transform: translateY(-2px);
//         }
        
//         .medical-label input[type="checkbox"] {
//             display: none;
//         }
        
//         .medical-label.selected {
//             background-color: #eff6ff;
//             border-color: #3b82f6;
//             color: #1e3a8a;
//             font-weight: 600;
//             box-shadow: 0 5px 15px rgba(59, 130, 246, 0.15);
//         }
        
//         .whatsapp-toggle {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             margin-top: 2.5rem;
//             padding: 20px;
//             background: #f8fafc;
//             border-radius: 12px;
//             border: 1px solid #e2e8f0;
//         }
        
//         .whatsapp-toggle label {
//             font-weight: 500;
//             color: #374151;
//         }
        
//         .toggle-switch {
//             position: relative;
//             display: inline-block;
//             width: 50px;
//             height: 28px;
//         }
        
//         .toggle-switch input {
//             display: none;
//         }
        
//         .toggle-switch label {
//             position: absolute;
//             cursor: pointer;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background-color: #ccc;
//             transition: .4s;
//             border-radius: 34px;
//         }
        
//         .toggle-switch label:before {
//             position: absolute;
//             content: "";
//             height: 20px;
//             width: 20px;
//             left: 4px;
//             bottom: 4px;
//             background-color: white;
//             transition: .4s;
//             border-radius: 50%;
//         }
        
//         input:checked + label {
//             background-color: #22c55e;
//         }
        
//         input:checked + label:before {
//             transform: translateX(22px);
//         }

//         /* --- Navigation --- */
//         .nav-buttons {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             margin-top: auto;
//             border-top: 1px solid #f1f5f9;
//             padding-top: 25px;
//         }

//         .btn-primary, .btn-secondary {
//             padding: 14px 30px;
//             border: none;
//             border-radius: 12px;
//             font-size: 16px;
//             font-weight: 600;
//             cursor: pointer;
//             transition: all 0.3s;
//             font-family: 'Roboto', sans-serif;
//         }

//         .btn-primary {
//             background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
//             color: white;
//             width: 100%;
//             box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
//         }
        
//         .nav-buttons .btn-primary {
//             width: auto;
//         }
        
//         .btn-primary:hover {
//             transform: translateY(-2px);
//             box-shadow: 0 6px 15px rgba(59, 130, 246, 0.4);
//         }

//         .btn-primary:disabled {
//             background: #94a3b8;
//             cursor: not-allowed;
//             transform: none;
//             box-shadow: none;
//         }

//         .btn-secondary {
//             background-color: transparent;
//             color: #64748b;
//             border: 1px solid #d1d5db;
//         }
        
//         .btn-secondary:hover {
//             background-color: #f8fafc;
//             border-color: #9ca3af;
//         }

//         /* Insurance Plans Page Styles */
//         .plans-page {
//             width: 100%;
//             max-width: 1400px;
//             margin: 0 auto;
//             padding: 20px;
//         }

//         .plans-header {
//             text-align: center;
//             margin-bottom: 30px;
//         }

//         .plans-header h1 {
//             font-size: 32px;
//             color: #1e293b;
//             margin-bottom: 10px;
//         }

//         .plans-layout {
//             display: grid;
//             grid-template-columns: 300px 1fr;
//             gap: 30px;
//         }

//         .filters-sidebar {
//             background: white;
//             padding: 25px;
//             border-radius: 16px;
//             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
//             height: fit-content;
//             position: sticky;
//             top: 20px;
//         }

//         .filter-section {
//             margin-bottom: 25px;
//         }

//         .filter-section h3 {
//             font-size: 18px;
//             color: #1e293b;
//             margin-bottom: 15px;
//             font-weight: 600;
//         }

//         .filter-options {
//             display: flex;
//             flex-direction: column;
//             gap: 12px;
//         }

//         .filter-option {
//             display: flex;
//             align-items: center;
//             gap: 10px;
//             cursor: pointer;
//             padding: 8px 0;
//         }

//         .filter-option input[type="checkbox"] {
//             accent-color: #3b82f6;
//             transform: scale(1.1);
//         }

//         .filter-option label {
//             cursor: pointer;
//             font-size: 14px;
//             color: #475569;
//         }

//         .plans-grid {
//             display: flex;
//             flex-direction: column;
//             gap: 20px;
//         }

//         .plan-card {
//             background: white;
//             border-radius: 16px;
//             padding: 25px;
//             box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
//             border: 1px solid #e2e8f0;
//             transition: all 0.3s ease;
//         }

//         .plan-card:hover {
//             transform: translateY(-2px);
//             box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
//         }

//         .plan-header {
//             display: flex;
//             justify-content: between;
//             align-items: flex-start;
//             margin-bottom: 20px;
//         }

//         .plan-info {
//             flex: 1;
//         }

//         .provider-name {
//             font-size: 16px;
//             color: #64748b;
//             margin-bottom: 5px;
//         }

//         .plan-name {
//             font-size: 20px;
//             color: #1e293b;
//             font-weight: 700;
//             margin-bottom: 10px;
//         }

//         .plan-stats {
//             display: flex;
//             gap: 20px;
//             margin-bottom: 15px;
//         }

//         .stat {
//             display: flex;
//             align-items: center;
//             gap: 8px;
//             font-size: 14px;
//             color: #475569;
//         }

//         .stat-badge {
//             background: #10b981;
//             color: white;
//             padding: 4px 8px;
//             border-radius: 6px;
//             font-size: 12px;
//             font-weight: 600;
//         }

//         .plan-features {
//             display: grid;
//             grid-template-columns: 1fr 1fr;
//             gap: 15px;
//             margin-bottom: 20px;
//         }

//         .feature {
//             display: flex;
//             align-items: center;
//             gap: 8px;
//             font-size: 14px;
//             color: #475569;
//         }

//         .feature-icon {
//             color: #10b981;
//             font-size: 16px;
//         }

//         .coverage-grid {
//             display: grid;
//             grid-template-columns: repeat(4, 1fr);
//             gap: 10px;
//             margin-bottom: 20px;
//         }

//         .coverage-item {
//             text-align: center;
//             padding: 10px;
//             background: #f8fafc;
//             border-radius: 8px;
//         }

//         .coverage-amount {
//             font-size: 16px;
//             font-weight: 700;
//             color: #1e293b;
//             margin-bottom: 4px;
//         }

//         .coverage-label {
//             font-size: 12px;
//             color: #64748b;
//         }

//         .plan-actions {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             margin-top: 20px;
//         }

//         .price-section {
//             text-align: right;
//         }

//         .price {
//             font-size: 24px;
//             font-weight: 700;
//             color: #1e293b;
//             margin-bottom: 5px;
//         }

//         .price-note {
//             font-size: 12px;
//             color: #64748b;
//         }

//         .action-buttons {
//             display: flex;
//             gap: 10px;
//         }

//         .btn-outline {
//             background: transparent;
//             border: 2px solid #3b82f6;
//             color: #3b82f6;
//             padding: 10px 20px;
//             border-radius: 8px;
//             font-weight: 600;
//             cursor: pointer;
//             transition: all 0.3s;
//         }

//         .btn-outline:hover {
//             background: #3b82f6;
//             color: white;
//         }

//         .compare-checkbox {
//             display: flex;
//             align-items: center;
//             gap: 8px;
//             font-size: 14px;
//             color: #475569;
//         }

//         /* Final Step & Loader */
//         .final-step {
//             text-align: center;
//             justify-content: center;
//             padding: 40px 0;
//         }
        
//         .loader {
//             border: 4px solid #f3f3f3;
//             border-top: 4px solid #3b82f6;
//             border-radius: 50%;
//             width: 50px;
//             height: 50px;
//             animation: spin 1s linear infinite;
//             margin: 30px auto;
//         }

//         @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//         }

//         .link-btn {
//             display: inline-block;
//             text-decoration: none;
//             text-align: center;
//             margin-top: 25px;
//             padding: 12px 30px;
//         }

//         @media (max-width: 1024px) {
//             .form-container {
//                 flex-direction: column;
//                 max-width: 600px;
//                 margin: auto;
//             }
            
//             .left-panel, .right-panel {
//                 width: 100%;
//             }
            
//             .left-panel {
//                 padding: 30px 25px;
//             }
            
//             .right-panel {
//                 padding: 30px 25px;
//                 min-height: 600px;
//             }
            
//             .progress-container {
//                 top: 20px;
//                 right: 20px;
//             }

//             .plans-layout {
//                 grid-template-columns: 1fr;
//             }

//             .filters-sidebar {
//                 position: static;
//                 margin-bottom: 20px;
//             }
//         }
        
//         @media (max-width: 640px) {
//             .app-container {
//                 padding: 0.5rem;
//             }
            
//             .form-container {
//                 border-radius: 15px;
//             }
            
//             .left-panel, .right-panel {
//                 padding: 25px 20px;
//             }
            
//             .member-grid, .medical-grid {
//                 grid-template-columns: 1fr;
//             }
            
//             .trust-stats {
//                 flex-direction: column;
//                 gap: 15px;
//             }
            
//             .trust-stats div {
//                 display: flex;
//                 flex-direction: column;
//                 align-items: center;
//             }
            
//             .nav-buttons {
//                 flex-direction: column;
//                 gap: 15px;
//             }
            
//             .nav-buttons .btn-primary, .nav-buttons .btn-secondary {
//                 width: 100%;
//             }

//             .plan-features, .coverage-grid {
//                 grid-template-columns: 1fr;
//             }

//             .plan-actions {
//                 flex-direction: column;
//                 gap: 15px;
//                 align-items: stretch;
//             }

//             .action-buttons {
//                 justify-content: space-between;
//             }
//         }
//     `}</style>
// );

// // --- Data for Form Fields ---
// const members = [
//     { id: 'self', name: 'Self', icon: '👤' },
//     { id: 'wife', name: 'Wife', icon: '👩' },
//     { id: 'son', name: 'Son', icon: '👦' },
//     { id: 'daughter', name: 'Daughter', icon: '👧' },
//     { id: 'father', name: 'Father', icon: '👨' },
//     { id: 'mother', name: 'Mother', icon: '👩' },
//     { id: 'grandfather', name: 'Grand Father', icon: '👴' },
//     { id: 'grandmother', name: 'Grand Mother', icon: '👵' },
// ];

// const medicalConditions = ['Diabetes', 'Blood Pressure', 'Heart disease', 'Any Surgery', 'Thyroid', 'Asthma', 'Other disease'];

// const popularCities = ['Delhi', 'Bengaluru', 'Pune', 'Hyderabad', 'Mumbai', 'Thane', 'Gurgaon', 'Chennai', 'Ghaziabad', 'Ernakulam'];

// // Insurance Plans Data
// const insurancePlans = [
//     {
//         id: 1,
//         provider: "Care Health",
//         name: "Ultimate Care",
//         claimSettled: "100%",
//         cashlessHospitals: 462,
//         roomRent: "No Room Rent Limit",
//         coverage: ["₹10 Lakh", "₹10 Lakh", "₹7 Lakh", "₹5 Lakh"],
//         price: "₹13,322 - ₹13,360",
//         period: "(1 year) incl. GST",
//         features: ["Unlimited Restoration", "9 more plans"]
//     },
//     {
//         id: 2,
//         provider: "Niva Bupa Health Insurance",
//         name: "ReAssure 3.0 Elite",
//         claimSettled: "99%",
//         cashlessHospitals: 310,
//         roomRent: "Single Private AC room",
//         coverage: ["₹10 Lakh", "₹10 Lakh", "₹4 Lakh", "₹5 Lakh"],
//         price: "₹16,834 - ₹15,200",
//         period: "(1 year) incl. GST",
//         features: ["Unlimited Restoration", "13 more plans"]
//     },
//     {
//         id: 3,
//         provider: "Star Health",
//         name: "Super Star",
//         claimSettled: "99%",
//         cashlessHospitals: 563,
//         roomRent: "Single Private AC Room",
//         coverage: ["₹10 Lakh", "₹10 Lakh", "₹75 Lakh", ""],
//         price: "₹14,562 - ₹17,184",
//         period: "(1 year) incl. GST",
//         features: ["₹6 lakh No Claim Bonus", "Unlimited restoration"]
//     },
//     {
//         id: 4,
//         provider: "OneHealth",
//         name: "OneHealth Support Plus",
//         claimSettled: "100%",
//         cashlessHospitals: 462,
//         roomRent: "No Room Rent Limit",
//         coverage: ["₹10 Lakh", "₹10 Lakh", "₹75 Lakh", ""],
//         price: "₹14,016 - ₹16,539",
//         period: "(1 year) incl. GST",
//         features: ["₹1 Lakh No Claim Bonus", "Restoration 5 times per year"]
//     }
// ];

// // --- Reusable Left Panel Component ---
// const LeftPanel = () => (
//     <div className="left-panel">
//         <h1>Personal Accident Insurance</h1>
//         <p>Personal Accident Insurance provides complete financial protection to the insured against uncertainties, such as accidental death.… <span className="read-more">Read More</span></p>
//         <div className="features">
//             <div className="feature-item">
//                 <span className="feature-icon">⏱</span>
//                 <div>
//                     <strong>30 minutes claim support**</strong>
//                     <small>(In 120+ cities)</small>
//                 </div>
//             </div>
//             <div className="feature-item">
//                 <span className="feature-icon">🤝</span>
//                 <div>
//                     <strong>Relationship manager</strong>
//                     <small>For every customer</small>
//                 </div>
//             </div>
//             <div className="feature-item">
//                  <span className="feature-icon">📞</span>
//                 <div>
//                     <strong>24*7 claims assistance</strong>
//                     <small>In 30 mins. guaranteed*</small>
//                 </div>
//             </div>
//             <div className="feature-item">
//                  <span className="feature-icon">📄</span>
//                 <div>
//                     <strong>Instant policy issuance</strong>
//                     <small>No medical tests*</small>
//                 </div>
//             </div>
//         </div>
//         <div className="trust-info-card">
//               <strong>People trust Policybazaar*</strong>
//               <div className="trust-stats">
//                 <div>
//                     <div className="stars">★★★★☆</div>
//                     <strong>10.5 crore</strong>
//                     <small>Registered consumers</small>
//                 </div>
//                 <div>
//                     <strong>51</strong>
//                     <small>Insurance partners</small>
//                 </div>
//                 <div>
//                     <strong>5.3 crore</strong>
//                     <small>Policies sold</small>
//                 </div>
//               </div>
//         </div>
//         <p className="footer-text">Policybazaar is one of India's leading digital insurance platform</p>
//     </div>
// );

// // --- Step 1: Member Selection Component ---
// const MemberSelection = ({ formData, setFormData, nextStep }) => {
//     const handleMemberToggle = (memberName) => {
//         const currentMembers = formData.selectedMembers;
//         const newMembers = currentMembers.includes(memberName)
//             ? currentMembers.filter(m => m !== memberName)
//             : [...currentMembers, memberName];
//         setFormData({ ...formData, selectedMembers: newMembers });
//     };

//     return (
//         <div className="form-step">
//             <h2>Save Big with 0% GST &amp; upto 25% Discount**</h2>
//             <div className="gender-selector">
//                 <label>
//                     <input
//                         type="radio"
//                         name="gender"
//                         value="Male"
//                         checked={formData.gender === 'Male'}
//                         onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
//                     /> Male
//                 </label>
//                 <label>
//                     <input
//                         type="radio"
//                         name="gender"
//                         value="Female"
//                         checked={formData.gender === 'Female'}
//                         onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
//                     /> Female
//                 </label>
//             </div>
//             <p>Select members you want to insure</p>
//             <div className="member-grid">
//                 {members.map(member => (
//                     <button
//                         key={member.id}
//                         className={`member-btn ${formData.selectedMembers.includes(member.name) ? 'selected' : ''}`}
//                         onClick={() => handleMemberToggle(member.name)}
//                     >
//                         <span className="member-icon">{member.icon}</span>
//                         {member.name}
//                     </button>
//                 ))}
//             </div>
//             <div className="nav-buttons">
//                  <button className="btn-primary" onClick={nextStep} disabled={formData.selectedMembers.length === 0 || !formData.gender}>Continue</button>
//             </div>
//             <p className="terms-text">By clicking on "Continue" you agree to our Privacy Policy and Terms of use</p>
//         </div>
//     );
// };

// // --- Step 2: Age Selection Component ---
// const AgeSelection = ({ formData, setFormData, nextStep, prevStep }) => {
//     const handleAgeChange = (member, age) => {
//         setFormData({
//             ...formData,
//             ages: { ...formData.ages, [member]: age }
//         });
//     };

//     const isContinueDisabled = formData.selectedMembers.some(member => !formData.ages[member]);

//     const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1);

//     return (
//         <div className="form-step">
//             <h2>Select age of covered member(s)</h2>
//             <p>This will help us calculate the premium &amp; discounts for your family</p>
//             <div className="age-selection-grid">
//                 {formData.selectedMembers.map(member => (
//                     <div key={member} className="age-selector">
//                         <label>
//                             <span className="member-icon-small">{members.find(m => m.name === member)?.icon}</span>
//                             {member}'s age
//                         </label>
//                         <select
//                             value={formData.ages[member] || ''}
//                             onChange={(e) => handleAgeChange(member, e.target.value)}
//                         >
//                             <option value="" disabled>Select Age</option>
//                             {ageOptions.map(age => <option key={age} value={age}>{age} years</option>)}
//                         </select>
//                     </div>
//                 ))}
//             </div>
//             <div className="nav-buttons">
//                 <button className="btn-secondary" onClick={prevStep}>&lt; Previous step</button>
//                 <button className="btn-primary" onClick={nextStep} disabled={isContinueDisabled}>Continue</button>
//             </div>
//         </div>
//     );
// };

// // --- Step 3: City Selection Component ---
// const CitySelection = ({ formData, setFormData, nextStep, prevStep }) => (
//     <div className="form-step">
//         <h2>Select your city</h2>
//         <p>This will help us to find the network of Cashless Hospitals in your city</p>
//         <input
//             type="text"
//             placeholder="Enter City"
//             value={formData.city}
//             onChange={(e) => setFormData({ ...formData, city: e.target.value })}
//             className="city-input"
//         />
//         <p className="popular-cities-title">Popular Cities</p>
//         <div className="popular-cities">
//             {popularCities.map(city => (
//                 <button key={city} onClick={() => setFormData({ ...formData, city })}>{city}</button>
//             ))}
//         </div>
//         <div className="nav-buttons">
//             <button className="btn-secondary" onClick={prevStep}>&lt; Previous step</button>
//             <button className="btn-primary" onClick={nextStep} disabled={!formData.city}>Continue</button>
//         </div>
//     </div>
// );

// // --- Step 4: Medical History Component ---
// const MedicalHistory = ({ formData, setFormData, nextStep, prevStep }) => {
//     const handleConditionToggle = (condition) => {
//         const currentConditions = formData.medicalHistory;
//         let newConditions;

//         if (condition === 'None of these') {
//             newConditions = currentConditions.includes('None of these') ? [] : ['None of these'];
//         } else {
//             newConditions = currentConditions.includes(condition)
//                 ? currentConditions.filter(c => c !== condition && c !== 'None of these')
//                 : [...currentConditions.filter(c => c !== 'None of these'), condition];
//         }
        
//         if (newConditions.length === 0) newConditions = [];

//         setFormData({ ...formData, medicalHistory: newConditions });
//     };
    
//     const isContinueDisabled = formData.medicalHistory.length === 0;

//     return (
//         <div className="form-step">
//             <h2>Medical history</h2>
//             <p>Do any member(s) have any existing illnesses for which they take regular medication?</p>
//             <div className="medical-grid">
//                 {[...medicalConditions, 'None of these'].map(condition => (
//                     <label key={condition} className={`medical-label ${formData.medicalHistory.includes(condition) ? 'selected' : ''}`}>
//                          <input
//                              type="checkbox"
//                              checked={formData.medicalHistory.includes(condition)}
//                              onChange={() => handleConditionToggle(condition)}
//                          />
//                         {condition}
//                     </label>
//                 ))}
//             </div>
//             <div className="nav-buttons">
//                  <button className="btn-secondary" onClick={prevStep}>&lt; Previous step</button>
//                  <button className="btn-primary" onClick={nextStep} disabled={isContinueDisabled}>View Plans</button>
//             </div>
//               <div className="whatsapp-toggle">
//                 <label>Get Updates on WhatsApp</label>
//                 <div className="toggle-switch">
//                     <input type="checkbox" id="whatsapp" defaultChecked/>
//                     <label htmlFor="whatsapp"></label>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // --- Insurance Plans Component ---
// const InsurancePlans = ({ prevStep }) => {
//     const [selectedPlans, setSelectedPlans] = useState([]);

//     const handleCompareToggle = (planId) => {
//         setSelectedPlans(prev => 
//             prev.includes(planId) 
//                 ? prev.filter(id => id !== planId)
//                 : [...prev, planId]
//         );
//     };

//     return (
//         <div className="plans-page">
//             <div className="plans-header">
//                 <h1>8 plans found</h1>
//             </div>
            
//             <div className="plans-layout">
//                 {/* Filters Sidebar */}
//                 <div className="filters-sidebar">
//                     <div className="filter-section">
//                         <h3>Quick Filters</h3>
//                         <div className="filter-options">
//                             <div className="filter-option">
//                                 <input type="checkbox" id="new-launches" />
//                                 <label htmlFor="new-launches">New Launches</label>
//                             </div>
//                             <div className="filter-option">
//                                 <input type="checkbox" id="top-rated" />
//                                 <label htmlFor="top-rated">Top Rated</label>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div className="filter-section">
//                         <h3>Cover</h3>
//                         <div className="filter-options">
//                             <div className="filter-option">
//                                 <input type="checkbox" id="cover-5" />
//                                 <label htmlFor="cover-5">₹5 Lakh</label>
//                             </div>
//                             <div className="filter-option">
//                                 <input type="checkbox" id="cover-10" />
//                                 <label htmlFor="cover-10">₹10 Lakh</label>
//                             </div>
//                             <div className="filter-option">
//                                 <input type="checkbox" id="cover-15" />
//                                 <label htmlFor="cover-15">₹15 Lakh</label>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div className="filter-section">
//                         <h3>Sort by</h3>
//                         <div className="filter-options">
//                             <div className="filter-option">
//                                 <input type="radio" name="sort" id="premium-low" defaultChecked />
//                                 <label htmlFor="premium-low">Premium (Low to High)</label>
//                             </div>
//                             <div className="filter-option">
//                                 <input type="radio" name="sort" id="cover-high" />
//                                 <label htmlFor="cover-high">Cover (High to Low)</label>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Plans Grid */}
//                 <div className="plans-grid">
//                     {insurancePlans.map(plan => (
//                         <div key={plan.id} className="plan-card">
//                             <div className="plan-header">
//                                 <div className="plan-info">
//                                     <div className="provider-name">{plan.provider}</div>
//                                     <div className="plan-name">{plan.name}</div>
//                                     <div className="plan-stats">
//                                         <div className="stat">
//                                             <span className="stat-badge">Claim settled: {plan.claimSettled}</span>
//                                         </div>
//                                         <div className="stat">
//                                             <span>{plan.cashlessHospitals} Cashless hospitals</span>
//                                         </div>
//                                     </div>
//                                     <div className="feature">
//                                         <span className="feature-icon">🏥</span>
//                                         {plan.roomRent}
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="coverage-grid">
//                                 {plan.coverage.map((amount, index) => (
//                                     amount && (
//                                         <div key={index} className="coverage-item">
//                                             <div className="coverage-amount">{amount}</div>
//                                             <div className="coverage-label">Cover</div>
//                                         </div>
//                                     )
//                                 ))}
//                             </div>

//                             <div className="plan-actions">
//                                 <div className="action-buttons">
//                                     <button className="btn-outline">View all features</button>
//                                     <div className="compare-checkbox">
//                                         <input 
//                                             type="checkbox" 
//                                             id={`compare-${plan.id}`}
//                                             checked={selectedPlans.includes(plan.id)}
//                                             onChange={() => handleCompareToggle(plan.id)}
//                                         />
//                                         <label htmlFor={`compare-${plan.id}`}>Add to compare</label>
//                                     </div>
//                                 </div>
                                
//                                 <div className="price-section">
//                                     <div className="price">{plan.price}</div>
//                                     <div className="price-note">{plan.period}</div>
//                                     {plan.features.map((feature, index) => (
//                                         <div key={index} className="price-note">{feature}</div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="nav-buttons" style={{ marginTop: '40px' }}>
//                 <button className="btn-secondary" onClick={prevStep}>&lt; Back to Medical History</button>
//             </div>
//         </div>
//     );
// };

// // --- Step 5: Final Plan Display Component ---
// const PlanDisplay = ({ planUrl }) => {
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             // In a real scenario, you'd redirect. Here we avoid it for preview purposes.
//             console.log(`Redirecting to: ${planUrl}`);
//         }, 2000);
//         return () => clearTimeout(timer);
//     }, [planUrl]);
    
//     return (
//         <div className="form-step final-step">
//             <h2>Thank you!</h2>
//             <p>We have received your details and are now finding the best insurance plans tailored for you.</p>
//             <div className="loader"></div>
//             <p>Please wait while we redirect you...</p>
//             <a href={planUrl} target="_blank" rel="noopener noreferrer" className="btn-primary link-btn">
//                 Click here if you are not redirected
//             </a>
//         </div>
//     );
// };

// // --- Main App Component ---
// function PersonalAccidentInsuranceForm() {
//     const [step, setStep] = useState(1);
//     const [formData, setFormData] = useState({
//         gender: 'Male',
//         selectedMembers: ['Self'],
//         ages: {},
//         city: '',
//         medicalHistory: [],
//     });

//     const nextStep = () => setStep(prev => prev + 1);
//     const prevStep = () => setStep(prev => prev - 1);

//     const planUrl = "https://www.policybazaar.com/";

//     const progressPercentage = {
//         1: 0,
//         2: 25,
//         3: 50,
//         4: 75,
//         5: 100
//     };
    
//     const progress = progressPercentage[step];
//     const strokeDashoffset = 164 - (164 * progress) / 100;

//     const renderStep = () => {
//         switch (step) {
//             case 1:
//                 return <MemberSelection formData={formData} setFormData={setFormData} nextStep={nextStep} />;
//             case 2:
//                 return <AgeSelection formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
//             case 3:
//                 return <CitySelection formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
//             case 4:
//                 return <MedicalHistory formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
//             case 5:
//                 return <InsurancePlans prevStep={prevStep} />;
//             case 6:
//                 return <PlanDisplay planUrl={planUrl} />;
//             default:
//                 return <MemberSelection formData={formData} setFormData={setFormData} nextStep={nextStep} />;
//         }
//     };

//     return (
//         <>
//             <AppStyles />
//             <div className="app-container">
//                 {step <= 4 ? (
//                     <div className="form-container">
//                         <LeftPanel />
//                         <div className="right-panel">
//                             {step < 5 && (
//                                 <div className="progress-container">
//                                     <svg className="progress-ring" width="70" height="70">
//                                     <circle className="progress-ring-circle-bg" strokeWidth="4" fill="transparent" r="26" cx="35" cy="35"/>
//                                     <circle className="progress-ring-circle" strokeWidth="4" fill="transparent" r="26" cx="35" cy="35" style={{ strokeDashoffset }}/>
//                                     </svg>
//                                     <span>{progress}%</span>
//                                 </div>
//                             )}
//                             {renderStep()}
//                         </div>
//                     </div>
//                 ) : (
//                     renderStep()
//                 )}
//             </div>
//         </>
//     );
// }

// export default PersonalAccidentInsuranceForm;












import React, { useState, useEffect } from 'react';

// --- Styles Component ---
const AppStyles = () => (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Roboto', sans-serif;
            background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            color: #334155;
            line-height: 1.6;
        }

        .app-container {
            width: 100%;
            padding: 1rem;
        }

        .form-container {
            display: flex;
            background-color: #ffffff;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05);
            overflow: hidden;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            min-height: 700px;
        }

        /* --- Left Panel --- */
        .left-panel {
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            padding: 40px 30px;
            width: 45%;
            color: white;
            position: relative;
            overflow: hidden;
        }

        .left-panel::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,100 Z" fill="rgba(255,255,255,0.05)"/></svg>');
            background-size: cover;
        }

        .left-panel h1 {
            font-size: 28px;
            color: #ffffff;
            margin-bottom: 15px;
            font-weight: 700;
            position: relative;
        }

        .left-panel p {
            font-size: 15px;
            line-height: 1.6;
            color: #e2e8f0;
            margin-bottom: 30px;
            position: relative;
        }
        
        .read-more {
            color: #93c5fd;
            font-weight: 500;
            cursor: pointer;
            text-decoration: underline;
        }
        
        .features {
            margin-top: 2.5rem;
            position: relative;
        }
        
        .feature-item {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 1.8rem;
            position: relative;
        }
        
        .feature-icon {
            font-size: 22px;
            background: rgba(255, 255, 255, 0.2);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .feature-item strong {
            display: block;
            font-size: 16px;
            color: #ffffff;
            font-weight: 600;
            margin-bottom: 4px;
        }
        
        .feature-item small {
            font-size: 13px;
            color: #cbd5e1;
        }

        .trust-info-card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 25px;
            margin-top: 2.5rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            position: relative;
        }
        
        .trust-info-card strong {
            font-size: 17px;
            color: #ffffff;
            display: block;
            margin-bottom: 15px;
        }
        
        .trust-stats {
            display: flex;
            justify-content: space-between;
            text-align: center;
        }
        
        .trust-stats div {
            flex: 1;
        }
        
        .trust-stats strong {
            font-size: 20px;
            display: block;
            margin-bottom: 5px;
        }
        
        .trust-stats small {
            font-size: 12px;
            color: #cbd5e1;
        }
        
        .stars {
            color: #fbbf24;
            font-size: 14px;
            margin-bottom: 8px;
        }
        
        .footer-text {
            font-size: 13px !important;
            text-align: center;
            margin-top: 2rem;
            color: #94a3b8 !important;
            position: relative;
        }

        /* --- Right Panel --- */
        .right-panel {
            padding: 40px;
            width: 55%;
            position: relative;
            display: flex;
            flex-direction: column;
            min-height: 700px;
        }

        .progress-container {
            width: 70px;
            height: 70px;
            position: absolute;
            top: 30px;
            right: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .progress-container span {
            position: absolute;
            font-weight: bold;
            color: #16a34a;
            font-size: 16px;
        }
        
        .progress-ring-circle-bg {
            stroke: #f1f5f9;
        }
        
        .progress-ring-circle {
            stroke: #22c55e;
            stroke-linecap: round;
            transform: rotate(-90deg);
            transform-origin: 50% 50%;
            transition: stroke-dashoffset 0.5s ease-in-out;
            stroke-dasharray: 164;
        }

        .form-step {
            animation: fadeIn 0.5s ease-in-out;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .form-step h2 {
            font-size: 24px;
            color: #1e293b;
            margin-bottom: 10px;
            font-weight: 700;
        }
        
        .form-step p {
            color: #64748b;
            margin-bottom: 30px;
            font-size: 15px;
        }
        
        .terms-text {
            font-size: 12px;
            text-align: center;
            color: #94a3b8;
            margin-top: 20px;
        }

        /* --- Form Elements --- */
        .gender-selector {
            display: flex;
            gap: 20px;
            margin-bottom: 25px;
        }
        
        .gender-selector label {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            cursor: pointer;
            padding: 12px 20px;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            transition: all 0.3s;
            flex: 1;
            justify-content: center;
        }
        
        .gender-selector label:hover {
            border-color: #3b82f6;
        }
        
        input[type="radio"] {
            accent-color: #3b82f6;
            transform: scale(1.2);
        }
        
        .member-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-bottom: 30px;
        }
        
        .member-btn {
            padding: 16px;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            background-color: #fff;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 15px;
            text-align: left;
            display: flex;
            align-items: center;
            gap: 12px;
            font-weight: 500;
        }
        
        .member-btn:hover {
            border-color: #3b82f6;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(59, 130, 246, 0.1);
        }
        
        .member-btn.selected {
            background-color: #eff6ff;
            border-color: #3b82f6;
            color: #1e3a8a;
            font-weight: 600;
            box-shadow: 0 5px 15px rgba(59, 130, 246, 0.15);
        }
        
        .member-icon {
            font-size: 24px;
            width: 30px;
            text-align: center;
        }
        
        .member-icon-small {
            font-size: 18px;
            width: 24px;
            text-align: center;
        }

        .age-selection-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
        }
        
        .age-selector {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            transition: all 0.3s;
        }
        
        .age-selector:hover {
            border-color: #3b82f6;
        }
        
        .age-selector label {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            font-weight: 500;
        }
        
        .age-selector select, .city-input {
            width: 50%;
            padding: 12px 15px;
            border: 1px solid #d1d5db;
            border-radius: 10px;
            font-family: 'Roboto', sans-serif;
            font-size: 15px;
            background-color: #fff;
            transition: all 0.3s;
        }
        
        .age-selector select:focus, .city-input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .city-input {
            width: 100%;
            margin-bottom: 20px;
        }
        
        .popular-cities-title {
            font-size: 15px;
            font-weight: 600;
            margin-bottom: 15px !important;
            color: #374151;
        }
        
        .popular-cities {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 25px;
        }
        
        .popular-cities button {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 20px;
            padding: 8px 16px;
            cursor: pointer;
            font-size: 14px;
            font-family: 'Roboto', sans-serif;
            transition: all 0.3s;
        }
        
        .popular-cities button:hover {
            background: #eff6ff;
            border-color: #3b82f6;
            color: #3b82f6;
        }

        .medical-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
        }
        
        .medical-label {
            padding: 16px;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 15px;
            transition: all 0.3s;
            font-weight: 500;
        }
        
        .medical-label:hover {
            border-color: #3b82f6;
            transform: translateY(-2px);
        }
        
        .medical-label input[type="checkbox"] {
            display: none;
        }
        
        .medical-label.selected {
            background-color: #eff6ff;
            border-color: #3b82f6;
            color: #1e3a8a;
            font-weight: 600;
            box-shadow: 0 5px 15px rgba(59, 130, 246, 0.15);
        }
        
        .whatsapp-toggle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 2.5rem;
            padding: 20px;
            background: #f8fafc;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
        }
        
        .whatsapp-toggle label {
            font-weight: 500;
            color: #374151;
        }
        
        .toggle-switch {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 28px;
        }
        
        .toggle-switch input {
            display: none;
        }
        
        .toggle-switch label {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 34px;
        }
        
        .toggle-switch label:before {
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }
        
        input:checked + label {
            background-color: #;
        }
        
        input:checked + label:before {
            transform: translateX(22px);
        }

        /* --- Navigation --- */
        .nav-buttons {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: auto;
            border-top: 1px solid #f1f5f9;
            padding-top: 25px;
        }

        .btn-primary, .btn-secondary {
            padding: 14px 30px;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            font-family: 'Roboto', sans-serif;
        }

        .btn-primary {
            background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
            color: white;
            width: 100%;
            box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
        }
        
        .nav-buttons .btn-primary {
            width: auto;
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(59, 130, 246, 0.4);
        }

        .btn-primary:disabled {
            background: #94a3b8;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }

        .btn-secondary {
            background-color: transparent;
            color: #64748b;
            border: 1px solid #d1d5db;
        }
        
        .btn-secondary:hover {
            background-color: #f8fafc;
            border-color: #9ca3af;
        }

        /* Insurance Plans Page Styles - EXACT MATCH */
        .plans-page {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .plans-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e2e8f0;
        }

        .plans-count {
            font-size: 24px;
            font-weight: 700;
            color: #1e293b;
        }

        .plans-layout {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: 30px;
            align-items: start;
        }

        .filters-sidebar {
            background: #f8fafc;
            padding: 25px;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            height: fit-content;
            position: sticky;
            top: 20px;
        }

        .filter-section {
            margin-bottom: 30px;
        }

        .filter-section h3 {
            font-size: 16px;
            color: #1e293b;
            margin-bottom: 15px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .filter-options {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .filter-option {
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
            padding: 8px 0;
        }

        .filter-option input[type="checkbox"],
        .filter-option input[type="radio"] {
            accent-color: #3b82f6;
            transform: scale(1.2);
            width: 18px;
            height: 18px;
        }

        .filter-option label {
            cursor: pointer;
            font-size: 14px;
            color: #475569;
            font-weight: 500;
        }

        .plans-grid {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .plan-card {
            background: white;
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
        }

        .plan-card:hover {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .plan-main-content {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 30px;
            margin-bottom: 20px;
        }

        .plan-details {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .provider-name {
            font-size: 14px;
            color: #64748b;
            margin-bottom: 5px;
            font-weight: 500;
        }

        .plan-name {
            font-size: 20px;
            color: #1e293b;
            font-weight: 700;
            margin-bottom: 10px;
        }

        .plan-highlights {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 15px;
        }

        .highlight {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: #475569;
        }

        .highlight-badge {
            background: #10b981;
            color: white;
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 600;
        }

        .plan-feature {
            font-size: 14px;
            color: #475569;
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }

        .coverage-section {
            margin-top: 15px;
        }

        .coverage-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            margin-top: 10px;
        }

        .coverage-item {
            text-align: center;
            padding: 12px 8px;
            background: #f8fafc;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
        }

        .coverage-amount {
            font-size: 16px;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 4px;
        }

        .coverage-label {
            font-size: 12px;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .plan-actions-side {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
        }

        .price-section {
            text-align: center;
            margin-bottom: 20px;
        }

        .price {
            font-size: 24px;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 5px;
        }

        .price-note {
            font-size: 12px;
            color: #64748b;
            margin-bottom: 8px;
        }

        .feature-tag {
            font-size: 12px;
            color: #059669;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .more-plans {
            font-size: 12px;
            color: #3b82f6;
            font-weight: 500;
            cursor: pointer;
        }

        .action-buttons {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .btn-view-features {
            background: transparent;
            border: 2px solid #3b82f6;
            color: #3b82f6;
            padding: 10px 16px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 14px;
        }

        .btn-view-features:hover {
            background: #3b82f6;
            color: white;
        }

        .compare-section {
            display: flex;
            align-items: center;
            gap: 8px;
            justify-content: center;
            padding: 8px;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            background: #f8fafc;
        }

        .compare-section input[type="checkbox"] {
            accent-color: #3b82f6;
        }

        .compare-section label {
            font-size: 13px;
            color: #475569;
            cursor: pointer;
        }

        /* Final Step & Loader */
        .final-step {
            text-align: center;
            justify-content: center;
            padding: 40px 0;
        }
        
        .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3b82f6;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin: 30px auto;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .link-btn {
            display: inline-block;
            text-decoration: none;
            text-align: center;
            margin-top: 25px;
            padding: 12px 30px;
        }

        @media (max-width: 1024px) {
            .form-container {
                flex-direction: column;
                max-width: 600px;
                margin: auto;
            }
            
            .left-panel, .right-panel {
                width: 100%;
            }
            
            .left-panel {
                padding: 30px 25px;
            }
            
            .right-panel {
                padding: 30px 25px;
                min-height: 600px;
            }
            
            .progress-container {
                top: 20px;
                right: 20px;
            }

            .plans-layout {
                grid-template-columns: 1fr;
            }

            .filters-sidebar {
                position: static;
                margin-bottom: 20px;
            }

            .plan-main-content {
                grid-template-columns: 1fr;
                gap: 20px;
            }
        }
        
        @media (max-width: 640px) {
            .app-container {
                padding: 0.5rem;
            }
            
            .form-container {
                border-radius: 15px;
            }
            
            .left-panel, .right-panel {
                padding: 25px 20px;
            }
            
            .member-grid, .medical-grid {
                grid-template-columns: 1fr;
            }
            
            .trust-stats {
                flex-direction: column;
                gap: 15px;
            }
            
            .trust-stats div {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .nav-buttons {
                flex-direction: column;
                gap: 15px;
            }
            
            .nav-buttons .btn-primary, .nav-buttons .btn-secondary {
                width: 100%;
            }

            .coverage-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            .plan-highlights {
                flex-direction: column;
                gap: 10px;
            }
        }
    `}</style>
);

// --- Data for Form Fields ---
const members = [
    { id: 'self', name: 'Self', icon: '👤' },
    { id: 'wife', name: 'Wife', icon: '👩' },
    { id: 'son', name: 'Son', icon: '👦' },
    { id: 'daughter', name: 'Daughter', icon: '👧' },
    { id: 'father', name: 'Father', icon: '👨' },
    { id: 'mother', name: 'Mother', icon: '👩' },
    { id: 'grandfather', name: 'Grand Father', icon: '👴' },
    { id: 'grandmother', name: 'Grand Mother', icon: '👵' },
];

const medicalConditions = ['Diabetes', 'Blood Pressure', 'Heart disease', 'Any Surgery', 'Thyroid', 'Asthma', 'Other disease'];

const popularCities = ['Delhi', 'Bengaluru', 'Pune', 'Hyderabad', 'Mumbai', 'Thane', 'Gurgaon', 'Chennai', 'Ghaziabad', 'Ernakulam'];

// Insurance Plans Data - Updated to match reference image
const insurancePlans = [
    {
        id: 1,
        provider: "Care Health",
        name: "Ultimate Care",
        claimSettled: "100%",
        cashlessHospitals: 462,
        roomRent: "No Room Rent Limit",
        coverage: ["₹10 Lakh", "₹10 Lakh", "₹7 Lakh", "₹5 Lakh"],
        price: "₹13,322 - ₹13,360",
        period: "(1 year) incl. GST",
        features: ["Unlimited Restoration"],
        morePlans: "9 more plans"
    },
    {
        id: 2,
        provider: "Niva Bupa Health Insurance",
        name: "ReAssure 3.0 Elite",
        claimSettled: "99%",
        cashlessHospitals: 310,
        roomRent: "Single Private AC room",
        coverage: ["₹10 Lakh", "₹10 Lakh", "₹4 Lakh", "₹5 Lakh"],
        price: "₹16,834 - ₹15,200",
        period: "(1 year) incl. GST",
        features: ["Unlimited Restoration"],
        morePlans: "13 more plans"
    },
    {
        id: 3,
        provider: "Star Health",
        name: "Super Star",
        claimSettled: "99%",
        cashlessHospitals: 563,
        roomRent: "Single Private AC Room",
        coverage: ["₹10 Lakh", "₹10 Lakh", "₹75 Lakh", ""],
        price: "₹14,562 - ₹17,184",
        period: "(1 year) incl. GST",
        features: ["₹6 lakh No Claim Bonus", "Unlimited restoration"],
        morePlans: ""
    },
    {
        id: 4,
        provider: "OneHealth",
        name: "OneHealth Support Plus",
        claimSettled: "100%",
        cashlessHospitals: 462,
        roomRent: "No Room Rent Limit",
        coverage: ["₹10 Lakh", "₹10 Lakh", "₹75 Lakh", "₹51 Lakh"],
        price: "₹14,016 - ₹16,539",
        period: "(1 year) incl. GST",
        features: ["₹1 Lakh No Claim Bonus", "Restoration 5 times per year"],
        morePlans: "3 more plans"
    }
];

// --- Reusable Left Panel Component ---
const LeftPanel = () => (
    <div className="left-panel">
        <h1>Personal Accident Insurance</h1>
        <p>Personal Accident Insurance provides complete financial protection to the insured against uncertainties, such as accidental death.… <span className="read-more">Read More</span></p>
        <div className="features">
            <div className="feature-item">
                <span className="feature-icon">⏱</span>
                <div>
                    <strong>30 minutes claim support**</strong>
                    <small>(In 120+ cities)</small>
                </div>
            </div>
            <div className="feature-item">
                <span className="feature-icon">🤝</span>
                <div>
                    <strong>Relationship manager</strong>
                    <small>For every customer</small>
                </div>
            </div>
            <div className="feature-item">
                 <span className="feature-icon">📞</span>
                <div>
                    <strong>24*7 claims assistance</strong>
                    <small>In 30 mins. guaranteed*</small>
                </div>
            </div>
            <div className="feature-item">
                 <span className="feature-icon">📄</span>
                <div>
                    <strong>Instant policy issuance</strong>
                    <small>No medical tests*</small>
                </div>
            </div>
        </div>
        <div className="trust-info-card">
              <strong>People trust Policybazaar*</strong>
              <div className="trust-stats">
                <div>
                    <div className="stars">★★★★☆</div>
                    <strong>10.5 crore</strong>
                    <small>Registered consumers</small>
                </div>
                <div>
                    <strong>51</strong>
                    <small>Insurance partners</small>
                </div>
                <div>
                    <strong>5.3 crore</strong>
                    <small>Policies sold</small>
                </div>
              </div>
        </div>
        <p className="footer-text">Policybazaar is one of India's leading digital insurance platform</p>
    </div>
);

// --- Step 1: Member Selection Component ---
const MemberSelection = ({ formData, setFormData, nextStep }) => {
    const handleMemberToggle = (memberName) => {
        const currentMembers = formData.selectedMembers;
        const newMembers = currentMembers.includes(memberName)
            ? currentMembers.filter(m => m !== memberName)
            : [...currentMembers, memberName];
        setFormData({ ...formData, selectedMembers: newMembers });
    };

    return (
        <div className="form-step">
            <h2>Save Big with 0% GST &amp; upto 25% Discount**</h2>
            <div className="gender-selector">
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === 'Male'}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    /> Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === 'Female'}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    /> Female
                </label>
            </div>
            <p>Select members you want to insure</p>
            <div className="member-grid">
                {members.map(member => (
                    <button
                        key={member.id}
                        className={`member-btn ${formData.selectedMembers.includes(member.name) ? 'selected' : ''}`}
                        onClick={() => handleMemberToggle(member.name)}
                    >
                        <span className="member-icon">{member.icon}</span>
                        {member.name}
                    </button>
                ))}
            </div>
            <div className="nav-buttons">
                 <button className="btn-primary" onClick={nextStep} disabled={formData.selectedMembers.length === 0 || !formData.gender}>Continue</button>
            </div>
            <p className="terms-text">By clicking on "Continue" you agree to our Privacy Policy and Terms of use</p>
        </div>
    );
};

// --- Step 2: Age Selection Component ---
const AgeSelection = ({ formData, setFormData, nextStep, prevStep }) => {
    const handleAgeChange = (member, age) => {
        setFormData({
            ...formData,
            ages: { ...formData.ages, [member]: age }
        });
    };

    const isContinueDisabled = formData.selectedMembers.some(member => !formData.ages[member]);

    const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1);

    return (
        <div className="form-step">
            <h2>Select age of covered member(s)</h2>
            <p>This will help us calculate the premium &amp; discounts for your family</p>
            <div className="age-selection-grid">
                {formData.selectedMembers.map(member => (
                    <div key={member} className="age-selector">
                        <label>
                            <span className="member-icon-small">{members.find(m => m.name === member)?.icon}</span>
                            {member}'s age
                        </label>
                        <select
                            value={formData.ages[member] || ''}
                            onChange={(e) => handleAgeChange(member, e.target.value)}
                        >
                            <option value="" disabled>Select Age</option>
                            {ageOptions.map(age => <option key={age} value={age}>{age} years</option>)}
                        </select>
                    </div>
                ))}
            </div>
            <div className="nav-buttons">
                <button className="btn-secondary" onClick={prevStep}>&lt; Previous step</button>
                <button className="btn-primary" onClick={nextStep} disabled={isContinueDisabled}>Continue</button>
            </div>
        </div>
    );
};

// --- Step 3: City Selection Component ---
const CitySelection = ({ formData, setFormData, nextStep, prevStep }) => (
    <div className="form-step">
        <h2>Select your city</h2>
        <p>This will help us to find the network of Cashless Hospitals in your city</p>
        <input
            type="text"
            placeholder="Enter City"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="city-input"
        />
        <p className="popular-cities-title">Popular Cities</p>
        <div className="popular-cities">
            {popularCities.map(city => (
                <button key={city} onClick={() => setFormData({ ...formData, city })}>{city}</button>
            ))}
        </div>
        <div className="nav-buttons">
            <button className="btn-secondary" onClick={prevStep}>&lt; Previous step</button>
            <button className="btn-primary" onClick={nextStep} disabled={!formData.city}>Continue</button>
        </div>
    </div>
);

// --- Step 4: Medical History Component ---
const MedicalHistory = ({ formData, setFormData, nextStep, prevStep }) => {
    const handleConditionToggle = (condition) => {
        const currentConditions = formData.medicalHistory;
        let newConditions;

        if (condition === 'None of these') {
            newConditions = currentConditions.includes('None of these') ? [] : ['None of these'];
        } else {
            newConditions = currentConditions.includes(condition)
                ? currentConditions.filter(c => c !== condition && c !== 'None of these')
                : [...currentConditions.filter(c => c !== 'None of these'), condition];
        }
        
        if (newConditions.length === 0) newConditions = [];

        setFormData({ ...formData, medicalHistory: newConditions });
    };
    
    const isContinueDisabled = formData.medicalHistory.length === 0;

    return (
        <div className="form-step">
            <h2>Medical history</h2>
            <p>Do any member(s) have any existing illnesses for which they take regular medication?</p>
            <div className="medical-grid">
                {[...medicalConditions, 'None of these'].map(condition => (
                    <label key={condition} className={`medical-label ${formData.medicalHistory.includes(condition) ? 'selected' : ''}`}>
                         <input
                             type="checkbox"
                             checked={formData.medicalHistory.includes(condition)}
                             onChange={() => handleConditionToggle(condition)}
                         />
                        {condition}
                    </label>
                ))}
            </div>
            <div className="nav-buttons">
                 <button className="btn-secondary" onClick={prevStep}>&lt; Previous step</button>
                 <button className="btn-primary" onClick={nextStep} disabled={isContinueDisabled}>View Plans</button>
            </div>
              <div className="whatsapp-toggle">
                <label>Get Updates on WhatsApp</label>
                <div className="toggle-switch">
                    <input type="checkbox" id="whatsapp" defaultChecked/>
                    <label htmlFor="whatsapp"></label>
                </div>
            </div>
        </div>
    );
};

// --- Insurance Plans Component - UPDATED TO MATCH REFERENCE IMAGE ---
const InsurancePlans = ({ prevStep }) => {
    const [selectedPlans, setSelectedPlans] = useState([]);

    const handleCompareToggle = (planId) => {
        setSelectedPlans(prev => 
            prev.includes(planId) 
                ? prev.filter(id => id !== planId)
                : [...prev, planId]
        );
    };

    return (
        <div className="plans-page">
            <div className="plans-header">
                <div className="plans-count">8 plans found</div>
            </div>
            
            <div className="plans-layout">
                {/* Filters Sidebar */}
                <div className="filters-sidebar">
                    <div className="filter-section">
                        <h3>Quick Filters</h3>
                        <div className="filter-options">
                            <div className="filter-option">
                                <input type="checkbox" id="new-launches" />
                                <label htmlFor="new-launches">New Launches</label>
                            </div>
                            <div className="filter-option">
                                <input type="checkbox" id="top-rated" defaultChecked />
                                <label htmlFor="top-rated">Top Rated</label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="filter-section">
                        <h3>Cover</h3>
                        <div className="filter-options">
                            <div className="filter-option">
                                <input type="checkbox" id="cover-5" />
                                <label htmlFor="cover-5">₹5 Lakh</label>
                            </div>
                            <div className="filter-option">
                                <input type="checkbox" id="cover-10" />
                                <label htmlFor="cover-10">₹10 Lakh</label>
                            </div>
                            <div className="filter-option">
                                <input type="checkbox" id="cover-15" />
                                <label htmlFor="cover-15">₹15 Lakh</label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="filter-section">
                        <h3>Sort by</h3>
                        <div className="filter-options">
                            <div className="filter-option">
                                <input type="radio" name="sort" id="premium-low" />
                                <label htmlFor="premium-low">Premium (Low to High)</label>
                            </div>
                            <div className="filter-option">
                                <input type="radio" name="sort" id="cover-high" defaultChecked />
                                <label htmlFor="cover-high">Cover (High to Low)</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Plans Grid - UPDATED LAYOUT */}
                <div className="plans-grid">
                    {insurancePlans.map(plan => (
                        <div key={plan.id} className="plan-card">
                            <div className="plan-main-content">
                                <div className="plan-details">
                                    <div>
                                        <div className="provider-name">{plan.provider}</div>
                                        <div className="plan-name">{plan.name}</div>
                                    </div>
                                    
                                    <div className="plan-highlights">
                                        <div className="highlight">
                                            <span className="highlight-badge">Claim settled: {plan.claimSettled}</span>
                                        </div>
                                        <div className="highlight">
                                            <span>{plan.cashlessHospitals} Cashless hospitals</span>
                                        </div>
                                    </div>
                                    
                                    <div className="plan-feature">
                                        <span>🏥</span>
                                        {plan.roomRent}
                                    </div>

                                    <div className="coverage-section">
                                        <div className="coverage-grid">
                                            {plan.coverage.map((amount, index) => (
                                                amount && (
                                                    <div key={index} className="coverage-item">
                                                        <div className="coverage-amount">{amount}</div>
                                                        <div className="coverage-label">Cover</div>
                                                    </div>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="plan-actions-side">
                                    <div className="price-section">
                                        <div className="price">{plan.price}</div>
                                        <div className="price-note">{plan.period}</div>
                                        {plan.features.map((feature, index) => (
                                            <div key={index} className="feature-tag">{feature}</div>
                                        ))}
                                        {plan.morePlans && (
                                            <div className="more-plans">{plan.morePlans}</div>
                                        )}
                                    </div>
                                    
                                    <div className="action-buttons">
                                        <button className="btn-view-features">View all features</button>
                                        <div className="compare-section">
                                            <input 
                                                type="checkbox" 
                                                id={`compare-${plan.id}`}
                                                checked={selectedPlans.includes(plan.id)}
                                                onChange={() => handleCompareToggle(plan.id)}
                                            />
                                            <label htmlFor={`compare-${plan.id}`}>Add to compare</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="nav-buttons" style={{ marginTop: '40px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                <button className="btn-secondary" onClick={prevStep}>&lt; Back to Medical History</button>
            </div>
        </div>
    );
};

// --- Step 5: Final Plan Display Component ---
const PlanDisplay = ({ planUrl }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            // In a real scenario, you'd redirect. Here we avoid it for preview purposes.
            console.log(`Redirecting to: ${planUrl}`);
        }, 2000);
        return () => clearTimeout(timer);
    }, [planUrl]);
    
    return (
        <div className="form-step final-step">
            <h2>Thank you!</h2>
            <p>We have received your details and are now finding the best insurance plans tailored for you.</p>
            <div className="loader"></div>
            <p>Please wait while we redirect you...</p>
            <a href={planUrl} target="_blank" rel="noopener noreferrer" className="btn-primary link-btn">
                Click here if you are not redirected
            </a>
        </div>
    );
};

// --- Main App Component ---
function PersonalAccidentInsuranceForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        gender: 'Male',
        selectedMembers: ['Self'],
        ages: {},
        city: '',
        medicalHistory: [],
    });

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const planUrl = "https://www.policybazaar.com/";

    const progressPercentage = {
        1: 0,
        2: 25,
        3: 50,
        4: 75,
        5: 100
    };
    
    const progress = progressPercentage[step];
    const strokeDashoffset = 164 - (164 * progress) / 100;

    const renderStep = () => {
        switch (step) {
            case 1:
                return <MemberSelection formData={formData} setFormData={setFormData} nextStep={nextStep} />;
            case 2:
                return <AgeSelection formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
            case 3:
                return <CitySelection formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
            case 4:
                return <MedicalHistory formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
            case 5:
                return <InsurancePlans prevStep={prevStep} />;
            case 6:
                return <PlanDisplay planUrl={planUrl} />;
            default:
                return <MemberSelection formData={formData} setFormData={setFormData} nextStep={nextStep} />;
        }
    };

    return (
        <>
            <AppStyles />
            <div className="app-container">
                {step <= 4 ? (
                    <div className="form-container">
                        <LeftPanel />
                        <div className="right-panel">
                            {step < 5 && (
                                <div className="progress-container">
                                    <svg className="progress-ring" width="70" height="70">
                                    <circle className="progress-ring-circle-bg" strokeWidth="4" fill="transparent" r="26" cx="35" cy="35"/>
                                    <circle className="progress-ring-circle" strokeWidth="4" fill="transparent" r="26" cx="35" cy="35" style={{ strokeDashoffset }}/>
                                    </svg>
                                    <span>{progress}%</span>
                                </div>
                            )}
                            {renderStep()}
                        </div>
                    </div>
                ) : (
                    renderStep()
                )}
            </div>
        </>
    );
}

export default PersonalAccidentInsuranceForm;