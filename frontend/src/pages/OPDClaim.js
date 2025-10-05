// import React, { useState } from 'react';

// // --- Style Component ---
// // This component injects a <style> tag with all the necessary CSS directly into the document's head.
// // This is the most reliable way to ensure styles are applied without any build setup.
// const AppStyles = () => (
//   <style>{`
//     /* --- Global & Body Styles --- */
//     body {
//       margin: 0;
//       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//         'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//         sans-serif;
//       -webkit-font-smoothing: antialiased;
//       -moz-osx-font-smoothing: grayscale;
//       background-color: #ffffff;
//       scroll-behavior: smooth;
//     }
//     .container {
//       width: 100%;
//       margin-left: auto;
//       margin-right: auto;
//       padding-left: 1.5rem;
//       padding-right: 1.5rem;
//       box-sizing: border-box;
//     }
//     @media (min-width: 768px) { .container { max-width: 768px; } }
//     @media (min-width: 1024px) { .container { max-width: 1024px; } }
//     @media (min-width: 1280px) { .container { max-width: 1280px; } }
//     /* --- Header --- */
//     .header {
//       background-color: rgba(255, 255, 255, 0.8);
//       backdrop-filter: blur(10px);
//       box-shadow: 0 1px 3px rgba(0,0,0,0.1);
//       position: sticky;
//       top: 0;
//       z-index: 50;
//     }
//     .header-content { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; }
//     .logo-container { display: flex; align-items: center; gap: 0.5rem; }
//     .logo-text { font-size: 1.25rem; font-weight: bold; color: #1f2937; text-decoration: none; }
//     .nav-links { display: none; }
//     @media (min-width: 768px) { .nav-links { display: flex; align-items: center; gap: 2rem; } }
//     .nav-links a { color: #4b5563; font-weight: 500; text-decoration: none; transition: color 0.3s; }
//     .nav-links a:hover { color: #0ea5e9; }
//     .header-login-button-desktop { display: none; }
//     @media (min-width: 768px) { .header-login-button-desktop { display: block; } }
//     .header-button { background-color: #0ea5e9; color: white; font-weight: 600; padding: 0.5rem 1.25rem; border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border: none; cursor: pointer; transition: all 0.3s; }
//     .header-button:hover { background-color: #0284c7; transform: scale(1.05); }
//     .mobile-menu-button { display: block; background: none; border: none; cursor: pointer; }
//     @media (min-width: 768px) { .mobile-menu-button { display: none; } }
//     .mobile-nav { display: block; background-color: white; padding: 0 1.5rem 1rem 1.5rem; border-top: 1px solid #e5e7eb; }
//     @media (min-width: 768px) { .mobile-nav { display: none; } }
//     .mobile-nav a { display: block; padding: 0.5rem 0; color: #4b5563; text-decoration: none; }
//     .mobile-nav .header-button { width: 100%; margin-top: 0.5rem; }
//     /* --- Hero Section --- */
//     .hero-section { position: relative; background-size: cover; background-position: center;font-size: 0.875rem; color: white; padding: 8rem 1.5rem; text-align: center; }
//     .hero-overlay { position: absolute; inset: 0; background-color: rgba(0, 0, 0, 0.5); }
//     .hero-content { position: relative; z-index: 10; }
//     .hero-title { font-size: 2.25rem; font-weight: 800; line-height: 1.2; margin-bottom: 1rem; }
//     @media (min-width: 768px) { .hero-title { font-size: 3.75rem; } }
//     .hero-subtitle { font-size: 1.125rem; max-width: 48rem; margin: 0 auto 2rem auto; }
    
//     /* This is the new, corrected style for a short button */
// .hero-cta-button {
//   background-color: #10b981;
//   color: white;
//   font-weight: bold;
//   padding: 0.75rem 2rem;      /* Adjusted padding for a nice look */
//   font-size: 1rem;           /* Slightly larger text */
//   border-radius: 9999px;
//   box-shadow: 0 10px 15px rgba(0,0,0,0.1);
//   text-decoration: none;
//   transition: all 0.3s;
//   display: inline-block;
//   width: auto;               /* <-- THIS IS THE FIX */
// }
//     .hero-cta-button:hover { background-color: #059669;  }
//     /* --- Form Sections (Shared) --- */
//     .form-section { background-color: #f8fafc; padding: 4rem 1.5rem; }
//     .form-container { background-color: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 10px 15px rgba(0,0,0,0.1); max-width: 48rem; margin: 0 auto; }
//     .form-title { font-size: 1.875rem; font-weight: bold; color: #1f2937; text-align: center; margin-bottom: 0.5rem; }
//     .form-subtitle { text-align: center; color: #6b7280; margin-bottom: 2rem; }
//     .form-grid { display: grid; gap: 1.5rem; }
//     @media (min-width: 768px) { .form-grid { grid-template-columns: repeat(2, 1fr); } .form-grid .col-span-2 { grid-column: span 2; } }
//     .form-label { font-weight: 600; color: #374151; display: block; margin-bottom: 0.25rem; }
//     .form-input, .form-select { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; box-sizing: border-box; font-size: 1rem; }
//     .form-input.error { border-color: #ef4444; }
//     .error-message { color: #ef4444; font-size: 0.875rem; margin-top: 0.25rem; }
//     .form-radio-group { display: flex; gap: 1rem; }
//     .form-radio-label { display: flex; align-items: center; }
//     .form-radio-label input { margin-right: 0.5rem; }
//     .form-button-container { text-align: center; margin-top: 2rem; }
//     /* --- Plans Section --- */
//     .plans-section { padding: 5rem 1.5rem; background-color: white; }
//     .plans-title { font-size: 2.25rem; font-weight: bold; text-align: center; color: #1f2937; margin-bottom: 3rem; }
//     .plans-grid { display: grid; gap: 2rem; }
//     @media (min-width: 768px) { .plans-grid { grid-template-columns: repeat(2, 1fr); } }
//     @media (min-width: 1024px) { .plans-grid { grid-template-columns: repeat(3, 1fr); } }
//     .plan-card { background-color: white; border-radius: 0.75rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border: 1px solid #e5e7eb; overflow: hidden; display: flex; flex-direction: column; transition: box-shadow 0.3s; }
//     .plan-card:hover { box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
//     .plan-header { padding: 1.5rem; background-color: #f9fafb; display: flex; align-items: center; gap: 1rem; border-bottom: 1px solid #e5e7eb; }
//     .plan-header img { width: 4rem; height: 4rem; border-radius: 9999px; object-fit: cover; }
//     .plan-header h3 { font-size: 1.5rem; font-weight: bold; color: #1f2937; margin: 0; }
//     .plan-body { padding: 1.5rem; flex-grow: 1; }
//     .plan-body ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; }
//     .plan-body li { color: #4b5563; }
//     .plan-body li strong { color: #1f2937; }
//     .plan-annual-limit { font-weight: bold; color: #0ea5e9; }
//     .plan-footer { padding: 1.5rem; background-color: #f9fafb; text-align: center; }
//     .plan-premium .price { font-size: 1.875rem; font-weight: bold; color: #1f2937; }
//     .plan-premium .per-month { font-size: 1.125rem; color: #6b7280; }
//     .plan-actions { display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-top: 1rem; }
//     .plan-actions .buy-now { background-color: #10b981; color: white; font-weight: 600; padding: 0.5rem 1.25rem; border-radius: 0.5rem; border: none; cursor: pointer; flex-grow: 1; }
//     .plan-actions .buy-now:hover { background-color: #059669; }
//     .plan-compare-label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: #4b5563; cursor: pointer; }
//     .comparison-table { margin-top: 5rem; }
//     .comparison-table h3 { font-size: 1.875rem; font-weight: bold; text-align: center; color: #1f2937; margin-bottom: 2rem; }
//     .comparison-table table { width: 100%; text-align: left; color: #4b5563; border-collapse: collapse; }
//     .comparison-table thead { background-color: #f3f4f6; color: #374151; text-transform: uppercase; font-size: 0.875rem; }
//     .comparison-table th, .comparison-table td { padding: 0.75rem 1.5rem; }
//     .comparison-table tbody tr { border-bottom: 1px solid #e5e7eb; }
//     /* --- FAQ Section --- */
//     .faq-section { padding: 5rem 1.5rem; background-color: #f8fafc; }
//     .faq-title { font-size: 2.25rem; font-weight: bold; text-align: center; color: #1f2937; margin-bottom: 3rem; }
//     .faq-container { max-width: 48rem; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem; }
//     .faq-item { border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; background-color: white; }
//     .faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; text-align: left; padding: 1.25rem; font-weight: 600; font-size: 1.1rem; color: #1f2937; background-color: transparent; border: none; cursor: pointer; }
//     .faq-question svg { transition: transform 0.3s; }
//     .faq-question.open svg { transform: rotate(180deg); }
//     .faq-answer-container { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-in-out; }
//     .faq-answer { padding: 0 1.25rem 1.25rem 1.25rem; color: #4b5563; }
//     /* --- Footer --- */
//     .footer { background-color: #1f2937; color: white; padding: 3rem 1.5rem; }
//     .footer-grid { display: grid; gap: 2rem; }
//     @media (min-width: 768px) { .footer-grid { grid-template-columns: repeat(2, 1fr); } }
//     @media (min-width: 1024px) { .footer-grid { grid-template-columns: repeat(4, 1fr); } }
//     .footer-heading { font-size: 1.125rem; font-weight: 600; margin-bottom: 1rem; }
//     .footer-text { color: #9ca3af; }
//     .footer-links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
//     .footer-links a { color: #9ca3af; text-decoration: none; }
//     .footer-links a:hover { color: white; }
//     .footer-socials { display: flex; gap: 1rem; }
//     .footer-bottom { margin-top: 2rem; border-top: 1px solid #4b5563; padding-top: 1.5rem; text-align: center; color: #9ca3af; font-size: 0.875rem; }
//   `}</style>
// );

// // --- SVG ICONS ---
// const LogoIcon = () => (<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#0ea5e9' }}><path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12L2 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.5 9.5L12 12L6.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
// const MenuIcon = () => (<svg style={{width: '1.5rem', height: '1.5rem'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>);
// const CloseIcon = () => (<svg style={{width: '1.5rem', height: '1.5rem'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>);
// const ChevronDownIcon = () => (<svg style={{width: '1.25rem', height: '1.25rem'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>);
// const UploadIcon = () => (<svg className="upload-icon" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>);

// // --- DUMMY DATA ---
// const plansData = [ { id: 1, company: 'Arogya Secure', logo: 'https://placehold.co/150x150/81e6d9/ffffff?text=Arogya', coverage: { consultation: 'Up to ₹5,000/year', labTests: 'Covered up to 20%', medicines: 'Up to ₹10,000/year', annualLimit: '₹25,000' }, premium: { monthly: 499, yearly: 5499 }, claimProcess: 'Digital, 24hr settlement' }, { id: 2, company: 'MediHealth Plus', logo: 'https://placehold.co/150x150/63b3ed/ffffff?text=MediHealth', coverage: { consultation: 'Unlimited Tele-consult', labTests: 'Covered up to 30%', medicines: 'Up to ₹15,000/year', annualLimit: '₹50,000' }, premium: { monthly: 799, yearly: 8999 }, claimProcess: 'App-based, instant approval' }, { id: 3, company: 'CareFirst Prime', logo: 'https://placehold.co/150x150/4fd1c5/ffffff?text=CareFirst', coverage: { consultation: 'Up to ₹8,000/year', labTests: 'Covered up to 50%', medicines: 'Up to ₹20,000/year', annualLimit: '₹75,000' }, premium: { monthly: 1199, yearly: 12999 }, claimProcess: 'Zero paperwork, dedicated manager' },];
// const faqData = [ { question: "What is OPD Insurance?", answer: "Outpatient Department (OPD) insurance covers medical expenses incurred without being hospitalized. This includes doctor consultations, diagnostic tests, pharmacy bills, and other minor procedures." }, { question: "How do I claim OPD expenses?", answer: "You can typically claim expenses in two ways: cashless or reimbursement. For reimbursement, you pay first, then submit the bills and prescriptions to the insurer through their portal or app to get the money back." }, { question: "What documents are required for an OPD claim?", answer: "Commonly required documents include a valid doctor's prescription, original pharmacy bills, diagnostic test reports and bills, and a duly filled claim form. Always keep copies of all your documents." }, { question: "Is there a waiting period for OPD claims?", answer: "Most OPD plans have a short waiting period, typically ranging from 30 to 90 days. Please check the policy details." }];

// // --- UI COMPONENTS ---
// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const navLinks = ['Home', 'Plans', 'Claim', 'FAQ', 'Contact'];
//     return (
//         <header className="header">
//             <div className="container header-content">
//                 <div className="logo-container"> <LogoIcon /> <a href="#home" className="logo-text">HealthSecure</a> </div>
//                 {/* <nav className="nav-links"> {navLinks.map(link => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)} </nav> */}
//                 {/* <div className="header-login-button-desktop"> <button className="header-button">Login / Register</button> </div> */}
//                 <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}> {isMenuOpen ? <CloseIcon /> : <MenuIcon />} </button>
//             </div>
//             {isMenuOpen && ( <div className="mobile-nav"> {navLinks.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>{link}</a>)} <button className="header-button">Login / Register</button> </div> )}
//         </header>
//     );
// };

// const HeroSection = () => (
//     <section id="home" className="hero-section" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop')" }}>
//         <div className="hero-overlay"></div>
//         <div className="container hero-content">
//             <h1 className="hero-title">OPD Insurance Claiming Made Easy</h1>
//             <p className="hero-subtitle">Compare OPD insurance plans, submit claims, and secure your healthcare expenses in minutes.</p>
//             <a href="#eligibility" className="hero-cta-button">Get Started</a>
//         </div>
//     </section>
// );

// const UserInfoForm = ({ onFormSubmit }) => {
//     const [hasPreExisting, setHasPreExisting] = useState(false);
//     const [formData, setFormData] = useState({ fullName: '', dob: '', gender: 'Male', mobile: '', email: '', zipCode: '', hasInsurance: 'No', conditionsToggle: 'No', conditions: '' });
//     const [errors, setErrors] = useState({});
//     const validateForm = () => { /* validation logic */ return true; };
//     const handleSubmit = (e) => { e.preventDefault(); if (validateForm()) { onFormSubmit(true); setTimeout(() => { document.getElementById('plans').scrollIntoView({ behavior: 'smooth' }); }, 100); } };
//     const handleChange = (e) => { const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: value })); if (name === 'conditionsToggle') { setHasPreExisting(value === 'Yes'); } };
//     return (
//         <section id="eligibility" className="form-section">
//             <div className="form-container">
//                 <h2 className="form-title">Check Your Eligibility</h2>
//                 <p className="form-subtitle">Fill in your details to discover the best plans for you.</p>
//                 <form onSubmit={handleSubmit} noValidate>
//                     <div className="form-grid">
//                         <div> <label className="form-label">Full Name</label> <input type="text" name="fullName" className={`form-input ${errors.fullName ? 'error' : ''}`} onChange={handleChange} /> {errors.fullName && <p className="error-message">{errors.fullName}</p>} </div>
//                         <div> <label className="form-label">Date of Birth</label> <input type="date" name="dob" className={`form-input ${errors.dob ? 'error' : ''}`} onChange={handleChange} /> {errors.dob && <p className="error-message">{errors.dob}</p>} </div>
//                         <div> <label className="form-label">Gender</label> <select name="gender" className="form-select" onChange={handleChange}> <option>Male</option><option>Female</option><option>Other</option> </select> </div>
//                         <div> <label className="form-label">Mobile Number</label> <div style={{display: 'flex'}}> <span style={{display: 'inline-flex', alignItems: 'center', padding: '0 0.75rem', backgroundColor: '#e5e7eb', border: '1px solid #d1d5db', borderRight: 'none', borderRadius: '0.5rem 0 0 0.5rem'}}>+91</span> <input type="tel" name="mobile" placeholder="9876543210" className={`form-input ${errors.mobile ? 'error' : ''}`} style={{borderRadius: '0 0.5rem 0.5rem 0'}} onChange={handleChange}/> </div> {errors.mobile && <p className="error-message">{errors.mobile}</p>} </div>
//                         <div> <label className="form-label">Email Address</label> <input type="email" name="email" className={`form-input ${errors.email ? 'error' : ''}`} onChange={handleChange}/> {errors.email && <p className="error-message">{errors.email}</p>} </div>
//                         <div> <label className="form-label">City / Zip Code</label> <input type="text" name="zipCode" pattern="\d*" className={`form-input ${errors.zipCode ? 'error' : ''}`} onChange={handleChange}/> {errors.zipCode && <p className="error-message">{errors.zipCode}</p>} </div>
//                         <div className="col-span-2 form-grid">
//                            <div> <label className="form-label">Existing Health Insurance?</label> <div className="form-radio-group"> <label className="form-radio-label"><input type="radio" value="Yes" name="hasInsurance" checked={formData.hasInsurance === 'Yes'} onChange={handleChange} /> Yes</label> <label className="form-radio-label"><input type="radio" value="No" name="hasInsurance" checked={formData.hasInsurance === 'No'} onChange={handleChange} /> No</label> </div> </div>
//                            <div> <label className="form-label">Pre-existing Conditions?</label> <div className="form-radio-group"> <label className="form-radio-label"><input type="radio" value="Yes" name="conditionsToggle" checked={formData.conditionsToggle === 'Yes'} onChange={handleChange} /> Yes</label> <label className="form-radio-label"><input type="radio" value="No" name="conditionsToggle" checked={formData.conditionsToggle === 'No'} onChange={handleChange} /> No</label> </div> </div>
//                         </div>
//                         {hasPreExisting && ( <div className="col-span-2"> <label className="form-label">Please specify conditions</label> <textarea name="conditions" className={`form-input ${errors.conditions ? 'error' : ''}`} rows="3" onChange={handleChange}></textarea> {errors.conditions && <p className="error-message">{errors.conditions}</p>} </div> )}
//                     </div>
//                     <div className="form-button-container"> <button type="submit" className="header-button" style={{padding: '0.75rem 2.5rem', fontSize: '1.125rem'}}>View Recommended Plans</button> </div>
//                 </form>
//             </div>
//         </section>
//     );
// };

// const PlansSection = () => {
//     const [selectedPlanIds, setSelectedPlanIds] = useState([]);
//     const togglePlanSelection = (id) => setSelectedPlanIds(p => p.includes(id) ? p.filter(i => i !== id) : [...p, id]);
//     const selectedPlans = plansData.filter(p => selectedPlanIds.includes(p.id));
//     return (
//         <section id="plans" className="plans-section">
//             <div className="container">
//                 <h2 className="plans-title">Available OPD Insurance Plans</h2>
//                 <div className="plans-grid">
//                     {plansData.map(plan => (
//                         <div key={plan.id} className="plan-card">
//                             <div className="plan-header"> <img src={plan.logo} alt={`${plan.company} logo`} /> <h3>{plan.company}</h3> </div>
//                             <div className="plan-body">
//                                 <ul> <li><strong>Consultation:</strong> {plan.coverage.consultation}</li> <li><strong>Lab Tests:</strong> {plan.coverage.labTests}</li> <li><strong>Medicines:</strong> {plan.coverage.medicines}</li> <li className="plan-annual-limit"><strong>Annual Limit:</strong> {plan.coverage.annualLimit}</li> </ul>
//                                 <p style={{fontSize: '0.875rem', color: '#6b7280', marginTop: '1rem'}}><strong>Claim Process:</strong> {plan.claimProcess}</p>
//                             </div>
//                             <div className="plan-footer">
//                                 <div className="plan-premium"> <p><span className="price">₹{plan.premium.monthly}</span><span className="per-month">/mo</span></p> <p style={{fontSize: '0.875rem', color: '#6b7280'}}>or ₹{plan.premium.yearly}/year</p> </div>
//                                 <div className="plan-actions"> <label className="plan-compare-label"> <input type="checkbox" checked={selectedPlanIds.includes(plan.id)} onChange={() => togglePlanSelection(plan.id)} /> <span>Compare</span> </label> <button className="buy-now">Buy Now</button> </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 {selectedPlans.length > 1 && (
//                     <div className="comparison-table">
//                         <h3>Plan Comparison</h3>
//                         <div style={{overflowX: 'auto', background: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
//                             <table>
//                                 <thead> <tr> <th>Feature</th> {selectedPlans.map(p => <th key={p.id} style={{textAlign: 'center'}}>{p.company}</th>)} </tr> </thead>
//                                 <tbody> <tr><td>Premium (Yearly)</td>{selectedPlans.map(p => <td key={p.id} style={{textAlign: 'center', fontWeight: 'bold', color: '#0ea5e9'}}>₹{p.premium.yearly}</td>)}</tr> <tr><td>Annual OPD Limit</td>{selectedPlans.map(p => <td key={p.id} style={{textAlign: 'center'}}>{p.coverage.annualLimit}</td>)}</tr> <tr><td>Consultation Cover</td>{selectedPlans.map(p => <td key={p.id} style={{textAlign: 'center'}}>{p.coverage.consultation}</td>)}</tr> <tr><td>Diagnostics Cover</td>{selectedPlans.map(p => <td key={p.id} style={{textAlign: 'center'}}>{p.coverage.labTests}</td>)}</tr> <tr><td>Medicines Cover</td>{selectedPlans.map(p => <td key={p.id} style={{textAlign: 'center'}}>{p.coverage.medicines}</td>)}</tr> </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// };

// const ClaimSubmissionSection = () => (
//     <section id="claim" className="form-section">
//         <div className="form-container">
//             <h2 className="form-title">Submit a New Claim</h2>
//             <p className="form-subtitle">Already have a policy? Fill the form below to claim your expenses.</p>
//             <form>
//                 <div className="form-grid">
//                     <div> <label className="form-label">Policy Number</label> <input type="text" className="form-input" placeholder="e.g., POL12345678" /> </div>
//                     <div> <label className="form-label">Insurance Provider</label> <select className="form-select"> <option>Arogya Secure</option><option>MediHealth Plus</option><option>CareFirst Prime</option><option>Other</option> </select> </div>
//                     <div> <label className="form-label">Date of Service</label> <input type="date" className="form-input" /> </div>
//                     <div> <label className="form-label">Hospital/Clinic Name</label> <input type="text" className="form-input" placeholder="e.g., Apollo Clinic" /> </div>
//                     <div className="col-span-2"> <label className="form-label">Type of Service</label> <select className="form-select"> <option>Doctor Consultation</option><option>Diagnostic Test / Lab Work</option><option>Pharmacy / Medicines</option> </select> </div>
//                     <div className="col-span-2">
//                         <label className="form-label">Upload Bills/Prescriptions</label>
//                         <div style={{marginTop:'0.25rem', display:'flex', justifyContent:'center', padding: '1.25rem 1.5rem', border: '2px dashed #d1d5db', borderRadius: '0.5rem'}}>
//                             <div style={{textAlign: 'center'}}>
//                                 <UploadIcon />
//                                 <div style={{display: 'flex', fontSize: '0.875rem', color: '#4b5563'}}>
//                                     <label htmlFor="file-upload" style={{position:'relative', cursor:'pointer', background:'white', borderRadius:'0.375rem', fontWeight:'500', color:'#0ea5e9', hover:{color:'#0284c7'}}}>
//                                         <span>Upload files</span>
//                                         <input id="file-upload" name="file-upload" type="file" style={{display: 'none'}} multiple />
//                                     </label>
//                                     <p style={{paddingLeft: '0.25rem'}}>or drag and drop</p>
//                                 </div>
//                                 <p style={{fontSize: '0.75rem', color: '#6b7280'}}>PNG, JPG, PDF up to 10MB</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-span-2"> <label className="form-label">Claim Amount (₹)</label> <input type="number" className="form-input" placeholder="e.g., 1500" /> </div>
//                 </div>
//                 <div className="form-button-container"> <button type="submit" className="hero-cta-button">Submit Claim</button> </div>
//             </form>
//         </div>
//     </section>
// );

// const FAQSection = () => {
//     const [openFaqIndex, setOpenFaqIndex] = useState(null);
//     const toggleFaq = (index) => setOpenFaqIndex(openFaqIndex === index ? null : index);
//     return (
//         <section id="faq" className="faq-section">
//             <div className="container">
//                 <h2 className="faq-title">Frequently Asked Questions</h2>
//                 <div className="faq-container">
//                     {faqData.map((faq, index) => (
//                         <div key={index} className="faq-item">
//                             <button onClick={() => toggleFaq(index)} className={`faq-question ${openFaqIndex === index ? 'open' : ''}`}>
//                                 <span>{faq.question}</span> <span><ChevronDownIcon /></span>
//                             </button>
//                             <div className="faq-answer-container" style={{maxHeight: openFaqIndex === index ? '500px' : '0'}}>
//                                 <p className="faq-answer">{faq.answer}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// const Footer = () => (
//     <footer id="contact" className="footer">
//         <div className="container">
//             <div className="footer-grid">
//                 <div> <h3 className="footer-heading">HealthSecure</h3> <p className="footer-text">Your trusted partner in securing healthcare expenses with ease and transparency.</p> </div>
//                 <div> <h3 className="footer-heading">Quick Links</h3> <ul className="footer-links"> <li><a href="/privacy">Privacy Policy</a></li> <li><a href="/terms">Terms of Use</a></li> <li><a href="/disclaimer">Disclaimer</a></li> </ul> </div>
//                 <div> <h3 className="footer-heading">Contact Us</h3> <ul className="footer-links" style={{listStyle:'none', padding:0}}> <li>Email: contact@healthsecure.com</li> <li>Phone: +91 99999 88888</li> <li>Address: 123 Health St, Wellness City</li> </ul> </div>
//                 <div> <h3 className="footer-heading">Follow Us</h3> <div className="footer-socials"> <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><svg style={{width: '1.5rem', height: '1.5rem'}} fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"/></svg></a> <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><svg style={{width: '1.5rem', height: '1.5rem'}} fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.215 3.793 4.65-.753.164-1.533.164-2.296 0 .636 1.875 2.479 3.241 4.663 3.28-1.718 1.348-3.873 2.15-6.223 2.15-.404 0-.802-.024-1.195-.07 2.203 1.409 4.823 2.229 7.622 2.229 9.141 0 14.307-7.584 14.04-14.646.962-.692 1.794-1.56 2.457-2.54z"/></svg></a> <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><svg style={{width: '1.5rem', height: '1.5rem'}} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z"/></svg></a> </div> </div>
//             </div>
//             <div className="footer-bottom"> &copy; {new Date().getFullYear()} HealthSecure. All Rights Reserved. </div>
//         </div>
//     </footer>
// );

// // --- Main App Component ---
// export default function OPDClaim() {
//     const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//     return (
//         <div>
//             <AppStyles />
//             <Header />
//             <main>
//                 <HeroSection />
//                 <UserInfoForm onFormSubmit={setIsFormSubmitted} />
//                 {isFormSubmitted && <PlansSection />}
//                 <ClaimSubmissionSection />
//                 <FAQSection />
//             </main>
//             <Footer />
//         </div>
//     );
// }












import React, { useState } from 'react';

const OPDInsurancePortal = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasPreExisting, setHasPreExisting] = useState(false);
  const [selectedPlanIds, setSelectedPlanIds] = useState([]);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  
  const [formData, setFormData] = useState({
    fullName: '', dob: '', gender: 'Male', mobile: '', email: '', zipCode: '', 
    hasInsurance: 'No', conditionsToggle: 'No', conditions: '',
  });
  const [errors, setErrors] = useState({});

  // SVG Icons
  const LogoIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{color: '#0ea5e9'}}>
      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 12L2 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.5 9.5L12 12L6.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const MenuIcon = () => (
    <svg style={{width: '24px', height: '24px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  );

  const CloseIcon = () => (
    <svg style={{width: '24px', height: '24px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const ChevronDownIcon = () => (
    <svg style={{width: '20px', height: '20px', transition: 'transform 0.3s'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  // Data
  const plansData = [
    {
      id: 1,
      company: 'Arogya Secure',
      logo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=150&h=150&fit=crop&crop=center',
      coverage: {
        consultation: 'Up to ₹5,000/year',
        labTests: 'Covered up to 20%',
        medicines: 'Up to ₹10,000/year',
        annualLimit: '₹25,000',
      },
      premium: { monthly: 499, yearly: 5499 },
      claimProcess: 'Digital, 24hr settlement',
      features: ['Telemedicine', 'Cashless Claims', 'Health Checkup']
    },
    {
      id: 2,
      company: 'MediHealth Plus',
      logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=150&h=150&fit=crop&crop=center',
      coverage: {
        consultation: 'Unlimited Tele-consult',
        labTests: 'Covered up to 30%',
        medicines: 'Up to ₹15,000/year',
        annualLimit: '₹50,000',
      },
      premium: { monthly: 799, yearly: 8999 },
      claimProcess: 'App-based, instant approval',
      features: ['Network Hospitals', 'Family Cover', 'Dental Care']
    },
    {
      id: 3,
      company: 'CareFirst Prime',
      logo: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=150&h=150&fit=crop&crop=center',
      coverage: {
        consultation: 'Up to ₹8,000/year',
        labTests: 'Covered up to 50%',
        medicines: 'Up to ₹20,000/year',
        annualLimit: '₹75,000',
      },
      premium: { monthly: 1199, yearly: 12999 },
      claimProcess: 'Zero paperwork, dedicated manager',
      features: ['Comprehensive Cover', 'Wellness Programs', 'International Coverage']
    },
  ];

  const faqData = [
    {
      question: "What is OPD Insurance?",
      answer: "Outpatient Department (OPD) insurance covers medical expenses incurred without being hospitalized. This includes doctor consultations, diagnostic tests, pharmacy bills, and other minor procedures."
    },
    {
      question: "How do I claim OPD expenses?",
      answer: "You can typically claim expenses in two ways: cashless (at a network hospital/clinic) or reimbursement. For reimbursement, you pay first, then submit the bills and prescriptions to the insurer through their portal or app to get the money back."
    },
    {
      question: "What documents are required for an OPD claim?",
      answer: "Commonly required documents include a valid doctor's prescription, original pharmacy bills, diagnostic test reports and bills, and a duly filled claim form. Always keep digital or physical copies of all your documents."
    },
    {
      question: "Is there a waiting period for OPD claims?",
      answer: "Most OPD plans have a short waiting period, typically ranging from 30 to 90 days, before you can start making claims. Some specific treatments may have longer waiting periods. Please check the policy details."
    }
  ];

  const navLinks = ['Home', 'Plans', 'Claim', 'FAQ', 'Contact'];

  // Form Handlers
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.dob) newErrors.dob = 'Date of Birth is required.';
    if (!formData.mobile.match(/^[6-9]\d{9}$/)) newErrors.mobile = 'Enter a valid 10-digit mobile number.';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Enter a valid email address.';
    if (!formData.zipCode.match(/^[1-9][0-9]{5}$/)) newErrors.zipCode = 'Enter a valid 6-digit zip code.';
    if (hasPreExisting && !formData.conditions.trim()) newErrors.conditions = 'Please specify your conditions.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsFormSubmitted(true);
      setTimeout(() => {
        document.getElementById('plans').scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'conditionsToggle') {
      setHasPreExisting(value === 'Yes');
    }
  };

  const togglePlanSelection = (planId) => {
    setSelectedPlanIds(prev => prev.includes(planId) ? prev.filter(id => id !== planId) : [...prev, planId]);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const selectedPlans = plansData.filter(plan => selectedPlanIds.includes(plan.id));

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      backgroundColor: '#ffffff',
      minHeight: '100vh'
    }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .btn-primary {
            background: linear-gradient(135deg, #0ea5e9 0%, #0891b2 100%);
            transition: all 0.3s ease;
          }
          
          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(14, 165, 233, 0.3);
          }
          
          .btn-secondary {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            transition: all 0.3s ease;
          }
          
          .btn-secondary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
          }
          
          .plan-card {
            transition: all 0.3s ease;
          }
          
          .plan-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }
          
          .form-input:focus {
            border-color: #0ea5e9;
            box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-out;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .container {
              padding: 0 16px;
            }
            
            .mobile-hidden {
              display: none;
            }
            
            .mobile-full {
              width: 100%;
            }
          }
        `}
      </style>

      {/* Header */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 0'
        }}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <LogoIcon />
            <a href="#home" style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#1f2937',
              textDecoration: 'none'
            }}>HealthSecure</a>
          </div>
          
          <nav className="mobile-hidden" style={{display: 'flex', alignItems: 'center', gap: '32px'}}>
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{
                color: '#4b5563',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s'
              }} onMouseEnter={(e) => e.target.style.color = '#0ea5e9'} 
                 onMouseLeave={(e) => e.target.style.color = '#4b5563'}>
                {link}
              </a>
            ))}
          </nav>
          
          <div className="mobile-hidden" style={{display: 'flex', alignItems: 'center'}}>
            <button className="btn-primary" style={{
              background: 'linear-gradient(135deg, #0ea5e9 0%, #0891b2 100%)',
              color: 'white',
              fontWeight: '600',
              padding: '8px 20px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)'
            }}>
              Login / Register
            </button>
          </div>
          
          <div style={{display: 'none'}} className="mobile-menu">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{
              background: 'none',
              border: 'none',
              color: '#1f2937',
              cursor: 'pointer'
            }}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div style={{
            background: 'white',
            padding: '0 24px 16px',
            borderTop: '1px solid #e5e7eb'
          }}>
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{
                display: 'block',
                padding: '8px 0',
                color: '#4b5563',
                textDecoration: 'none',
                fontWeight: '500'
              }} onClick={() => setIsMenuOpen(false)}>
                {link}
              </a>
            ))}
            <button className="btn-primary mobile-full" style={{
              background: 'linear-gradient(135deg, #0ea5e9 0%, #0891b2 100%)',
              color: 'white',
              fontWeight: '600',
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer'
            }}>
              Login / Register
            </button>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" style={{
          position: 'relative',
          backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '120px 20px',
          textAlign: 'center'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}></div>
          <div className="container animate-fadeIn" style={{position: 'relative', zIndex: 2}}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '24px'
            }}>
              OPD Insurance Claiming Made Easy
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              maxWidth: '600px',
              margin: '0 auto 32px',
              opacity: 0.9
            }}>
              Compare OPD insurance plans, submit claims, and secure your healthcare expenses in minutes.
            </p>
            <a href="#eligibility" className="btn-secondary" style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white',
              fontWeight: 'bold',
              padding: '12px 32px',
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)',
              transition: 'all 0.3s ease'
            }}>
              Get Started
            </a>
          </div>
        </section>

        {/* User Information Form */}
        <section id="eligibility" style={{
          backgroundColor: '#f8fafc',
          padding: '80px 20px'
        }}>
          <div className="container" style={{maxWidth: '800px'}}>
            <div style={{
              backgroundColor: 'white',
              padding: '48px',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#1f2937',
                textAlign: 'center',
                marginBottom: '8px'
              }}>Check Your Eligibility</h2>
              <p style={{
                textAlign: 'center',
                color: '#6b7280',
                marginBottom: '40px'
              }}>Fill in your details to discover the best plans for you.</p>
              
              <form onSubmit={handleSubmit} noValidate>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '24px',
                  marginBottom: '24px'
                }}>
                  <div>
                    <label style={{
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '8px'
                    }}>Full Name</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} 
                      className="form-input" style={{
                        width: '100%',
                        padding: '12px',
                        border: `2px solid ${errors.fullName ? '#ef4444' : '#d1d5db'}`,
                        borderRadius: '8px',
                        fontSize: '16px'
                      }} required />
                    {errors.fullName && <p style={{color: '#ef4444', fontSize: '14px', marginTop: '4px'}}>{errors.fullName}</p>}
                  </div>

                  <div>
                    <label style={{
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '8px'
                    }}>Date of Birth</label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} 
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: `2px solid ${errors.dob ? '#ef4444' : '#d1d5db'}`,
                        borderRadius: '8px',
                        fontSize: '16px'
                      }} required />
                    {errors.dob && <p style={{color: '#ef4444', fontSize: '14px', marginTop: '4px'}}>{errors.dob}</p>}
                  </div>

                  <div>
                    <label style={{
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '8px'
                    }}>Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} 
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '2px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px',
                        backgroundColor: 'white'
                      }}>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '8px'
                    }}>Mobile Number</label>
                    <div style={{display: 'flex'}}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0 12px',
                        color: '#111827',
                        backgroundColor: '#e5e7eb',
                        border: '2px solid #d1d5db',
                        borderRight: 'none',
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px'
                      }}>+91</span>
                      <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} 
                        placeholder="9876543210" 
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: `2px solid ${errors.mobile ? '#ef4444' : '#d1d5db'}`,
                          borderTopRightRadius: '8px',
                          borderBottomRightRadius: '8px',
                          fontSize: '16px'
                        }} required />
                    </div>
                    {errors.mobile && <p style={{color: '#ef4444', fontSize: '14px', marginTop: '4px'}}>{errors.mobile}</p>}
                  </div>

                  <div>
                    <label style={{
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '8px'
                    }}>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} 
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: `2px solid ${errors.email ? '#ef4444' : '#d1d5db'}`,
                        borderRadius: '8px',
                        fontSize: '16px'
                      }} required />
                    {errors.email && <p style={{color: '#ef4444', fontSize: '14px', marginTop: '4px'}}>{errors.email}</p>}
                  </div>

                  <div>
                    <label style={{
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '8px'
                    }}>City / Zip Code</label>
                    <input type="text" pattern="\d*" name="zipCode" value={formData.zipCode} onChange={handleChange} 
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: `2px solid ${errors.zipCode ? '#ef4444' : '#d1d5db'}`,
                        borderRadius: '8px',
                        fontSize: '16px'
                      }} required />
                    {errors.zipCode && <p style={{color: '#ef4444', fontSize: '14px', marginTop: '4px'}}>{errors.zipCode}</p>}
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '24px',
                  marginBottom: '24px'
                }}>
                  <div>
                    <label style={{
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '16px'
                    }}>Existing Health Insurance?</label>
                    <div style={{display: 'flex', gap: '16px'}}>
                      <label style={{display: 'flex', alignItems: 'center'}}>
                        <input type="radio" value="Yes" name="hasInsurance" 
                          checked={formData.hasInsurance === 'Yes'} onChange={handleChange} 
                          style={{marginRight: '8px'}}/> Yes
                      </label>
                      <label style={{display: 'flex', alignItems: 'center'}}>
                        <input type="radio" value="No" name="hasInsurance" 
                          checked={formData.hasInsurance === 'No'} onChange={handleChange} 
                          style={{marginRight: '8px'}}/> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label style={{
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '16px'
                    }}>Pre-existing Conditions?</label>
                    <div style={{display: 'flex', gap: '16px'}}>
                      <label style={{display: 'flex', alignItems: 'center'}}>
                        <input type="radio" value="Yes" name="conditionsToggle" 
                          checked={formData.conditionsToggle === 'Yes'} onChange={handleChange} 
                          style={{marginRight: '8px'}}/> Yes
                      </label>
                      <label style={{display: 'flex', alignItems: 'center'}}>
                        <input type="radio" value="No" name="conditionsToggle" 
                          checked={formData.conditionsToggle === 'No'} onChange={handleChange} 
                          style={{marginRight: '8px'}}/> No
                      </label>
                    </div>
                  </div>
                </div>

                {hasPreExisting && (
                  <div style={{marginBottom: '24px'}}>
                    <label style={{
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '8px'
                    }}>Please specify conditions</label>
                    <textarea name="conditions" value={formData.conditions} onChange={handleChange} 
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: `2px solid ${errors.conditions ? '#ef4444' : '#d1d5db'}`,
                        borderRadius: '8px',
                        fontSize: '16px',
                        minHeight: '80px'
                      }}></textarea>
                    {errors.conditions && <p style={{color: '#ef4444', fontSize: '14px', marginTop: '4px'}}>{errors.conditions}</p>}
                  </div>
                )}

                <div style={{textAlign: 'center', marginTop: '32px'}}>
                  <button type="submit" className="btn-primary" style={{
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #0891b2 100%)',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: '12px 40px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '18px',
                    cursor: 'pointer',
                    boxShadow: '0 8px 25px rgba(14, 165, 233, 0.3)'
                  }}>
                    View Recommended Plans
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        {isFormSubmitted && (
          <section id="plans" style={{
            padding: '80px 20px',
            backgroundColor: 'white'
          }}>
            <div className="container">
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#1f2937',
                textAlign: 'center',
                marginBottom: '60px'
              }}>Available OPD Insurance Plans</h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '32px',
                marginBottom: '60px'
              }}>
                {plansData.map(plan => (
                  <div key={plan.id} className="plan-card" style={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    border: '1px solid #e5e7eb',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <div style={{
                      padding: '32px',
                      backgroundColor: '#f8fafc',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      borderBottom: '1px solid #e5e7eb'
                    }}>
                      <img src={plan.logo} alt={`${plan.company} logo`} style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }} />
                      <h3 style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#1f2937'
                      }}>{plan.company}</h3>
                    </div>
                    
                    <div style={{padding: '32px', flexGrow: 1}}>
                      <ul style={{
                        listStyle: 'none',
                        marginBottom: '24px'
                      }}>
                        <li style={{
                          marginBottom: '12px',
                          color: '#4b5563'
                        }}><strong>Consultation:</strong> {plan.coverage.consultation}</li>
                        <li style={{
                          marginBottom: '12px',
                          color: '#4b5563'
                        }}><strong>Lab Tests:</strong> {plan.coverage.labTests}</li>
                        <li style={{
                          marginBottom: '12px',
                          color: '#4b5563'
                        }}><strong>Medicines:</strong> {plan.coverage.medicines}</li>
                        <li style={{
                          marginBottom: '12px',
                          color: '#0ea5e9',
                          fontWeight: 'bold'
                        }}><strong>Annual Limit:</strong> {plan.coverage.annualLimit}</li>
                      </ul>
                      
                      <div style={{
                        backgroundColor: '#f0f9ff',
                        padding: '20px',
                        borderRadius: '12px',
                        marginBottom: '20px'
                      }}>
                        <div style={{textAlign: 'center', marginBottom: '8px'}}>
                          <span style={{
                            fontSize: '32px',
                            fontWeight: 'bold',
                            color: '#1f2937'
                          }}>₹{plan.premium.monthly}</span>
                          <span style={{
                            fontSize: '18px',
                            color: '#6b7280',
                            marginLeft: '4px'
                          }}>/mo</span>
                        </div>
                        <div style={{
                          textAlign: 'center',
                          fontSize: '14px',
                          color: '#6b7280'
                        }}>
                          or ₹{plan.premium.yearly}/year
                        </div>
                      </div>
                      
                      <p style={{
                        fontSize: '14px',
                        color: '#6b7280',
                        marginBottom: '24px'
                      }}><strong>Claim Process:</strong> {plan.claimProcess}</p>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px'
                      }}>
                        <label style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '14px',
                          color: '#6b7280',
                          cursor: 'pointer'
                        }}>
                          <input type="checkbox" 
                            checked={selectedPlanIds.includes(plan.id)} 
                            onChange={() => togglePlanSelection(plan.id)} 
                            style={{
                              width: '20px',
                              height: '20px',
                              accentColor: '#0ea5e9'
                            }} />
                          <span>Compare</span>
                        </label>
                        <button className="btn-secondary" style={{
                          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                          color: 'white',
                          fontWeight: '600',
                          padding: '10px 24px',
                          borderRadius: '8px',
                          border: 'none',
                          cursor: 'pointer'
                        }}>
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comparison Table */}
              {selectedPlans.length > 1 && (
                <div style={{marginTop: '80px'}}>
                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    textAlign: 'center',
                    marginBottom: '40px'
                  }}>Plan Comparison</h3>
                  
                  <div style={{
                    overflowX: 'auto',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                  }}>
                    <table style={{
                      width: '100%',
                      textAlign: 'left',
                      color: '#4b5563',
                      borderCollapse: 'collapse'
                    }}>
                      <thead>
                        <tr style={{
                          backgroundColor: '#f3f4f6',
                          color: '#374151',
                          textTransform: 'uppercase',
                          fontSize: '14px'
                        }}>
                          <th style={{padding: '16px 24px'}}>Feature</th>
                          {selectedPlans.map(plan => (
                            <th key={plan.id} style={{
                              padding: '16px 24px',
                              textAlign: 'center'
                            }}>{plan.company}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{borderBottom: '1px solid #e5e7eb'}}>
                          <td style={{
                            padding: '20px 24px',
                            fontWeight: '600'
                          }}>Premium (Yearly)</td>
                          {selectedPlans.map(p => (
                            <td key={p.id} style={{
                              padding: '20px 24px',
                              textAlign: 'center',
                              fontWeight: 'bold',
                              color: '#0ea5e9'
                            }}>₹{p.premium.yearly}</td>
                          ))}
                        </tr>
                        <tr style={{
                          backgroundColor: '#f8fafc',
                          borderBottom: '1px solid #e5e7eb'
                        }}>
                          <td style={{
                            padding: '20px 24px',
                            fontWeight: '600'
                          }}>Annual OPD Limit</td>
                          {selectedPlans.map(p => (
                            <td key={p.id} style={{
                              padding: '20px 24px',
                              textAlign: 'center'
                            }}>{p.coverage.annualLimit}</td>
                          ))}
                        </tr>
                        <tr style={{borderBottom: '1px solid #e5e7eb'}}>
                          <td style={{
                            padding: '20px 24px',
                            fontWeight: '600'
                          }}>Consultation Cover</td>
                          {selectedPlans.map(p => (
                            <td key={p.id} style={{
                              padding: '20px 24px',
                              textAlign: 'center'
                            }}>{p.coverage.consultation}</td>
                          ))}
                        </tr>
                        <tr style={{
                          backgroundColor: '#f8fafc',
                          borderBottom: '1px solid #e5e7eb'
                        }}>
                          <td style={{
                            padding: '20px 24px',
                            fontWeight: '600'
                          }}>Diagnostics Cover</td>
                          {selectedPlans.map(p => (
                            <td key={p.id} style={{
                              padding: '20px 24px',
                              textAlign: 'center'
                            }}>{p.coverage.labTests}</td>
                          ))}
                        </tr>
                        <tr>
                          <td style={{
                            padding: '20px 24px',
                            fontWeight: '600'
                          }}>Medicines Cover</td>
                          {selectedPlans.map(p => (
                            <td key={p.id} style={{
                              padding: '20px 24px',
                              textAlign: 'center'
                            }}>{p.coverage.medicines}</td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Claim Submission Section */}
        <section id="claim" style={{
          backgroundColor: '#f8fafc',
          padding: '80px 20px'
        }}>
          <div className="container" style={{maxWidth: '800px'}}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              textAlign: 'center',
              marginBottom: '8px'
            }}>Submit a New Claim</h2>
            <p style={{
              textAlign: 'center',
              color: '#6b7280',
              marginBottom: '60px'
            }}>Already have a policy? Fill the form below to claim your expenses.</p>
            
            <div style={{
              backgroundColor: 'white',
              padding: '48px',
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
            }}>
              <form>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '24px',
                  marginBottom: '24px'
                }}>
                  <div>
                    <label style={{
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '8px'
                    }}>Policy Number</label>
                    <input type="text" style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '16px'
                    }} placeholder="e.g., POL12345678" />
                  </div>
                  
                  <div>
                    <label style={{
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '8px'
                    }}>Insurance Provider</label>
                    <select style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '16px',
                      backgroundColor: 'white'
                    }}>
                      <option>Arogya Secure</option>
                      <option>MediHealth Plus</option>
                      <option>CareFirst Prime</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label style={{
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '8px'
                    }}>Date of Service</label>
                    <input type="date" style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '16px'
                    }} />
                  </div>
                  
                  <div>
                    <label style={{
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '8px'
                    }}>Hospital/Clinic Name</label>
                    <input type="text" style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '16px'
                    }} placeholder="e.g., Apollo Clinic" />
                  </div>
                  
                  <div style={{gridColumn: '1 / -1'}}>
                    <label style={{
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '8px'
                    }}>Type of Service</label>
                    <select style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '16px',
                      backgroundColor: 'white'
                    }}>
                      <option>Doctor Consultation</option>
                      <option>Diagnostic Test / Lab Work</option>
                      <option>Pharmacy / Medicines</option>
                    </select>
                  </div>
                  
                  <div style={{gridColumn: '1 / -1'}}>
                    <label style={{
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '8px'
                    }}>Upload Bills/Prescriptions</label>
                    <div style={{
                      marginTop: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      padding: '40px 24px',
                      border: '2px dashed #d1d5db',
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}>
                      <div>
                        <svg style={{
                          margin: '0 auto 16px',
                          width: '48px',
                          height: '48px',
                          color: '#9ca3af'
                        }} stroke="currentColor" fill="none" viewBox="0 0 48 48">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div style={{
                          display: 'flex',
                          fontSize: '14px',
                          color: '#4b5563'
                        }}>
                          <label style={{
                            cursor: 'pointer',
                            backgroundColor: 'white',
                            borderRadius: '6px',
                            fontWeight: '500',
                            color: '#0ea5e9'
                          }}>
                            <span>Upload files</span>
                            <input type="file" style={{
                              position: 'absolute',
                              width: '1px',
                              height: '1px',
                              padding: 0,
                              margin: -1,
                              overflow: 'hidden',
                              clip: 'rect(0, 0, 0, 0)',
                              border: 0
                            }} multiple />
                          </label>
                          <p style={{marginLeft: '4px'}}>or drag and drop</p>
                        </div>
                        <p style={{
                          fontSize: '12px',
                          color: '#6b7280',
                          marginTop: '4px'
                        }}>PNG, JPG, PDF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label style={{
                      fontWeight: '600',
                      color: '#374151',
                      display: 'block',
                      marginBottom: '8px'
                    }}>Claim Amount (₹)</label>
                    <input type="number" style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '16px'
                    }} placeholder="e.g., 1500" />
                  </div>
                </div>
                
                <div style={{textAlign: 'center', marginTop: '32px'}}>
                  <button type="submit" className="btn-secondary" style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: '12px 40px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '18px',
                    cursor: 'pointer',
                    boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)'
                  }}>
                    Submit Claim
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" style={{
          backgroundColor: 'white',
          padding: '80px 20px'
        }}>
          <div className="container" style={{maxWidth: '800px'}}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              textAlign: 'center',
              marginBottom: '60px'
            }}>Frequently Asked Questions</h2>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              {faqData.map((faq, index) => (
                <div key={index} style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}>
                  <button onClick={() => toggleFaq(index)} style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    padding: '24px',
                    fontWeight: '600',
                    color: '#1f2937',
                    backgroundColor: '#f9fafb',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                    
                  }} onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'} 
                     onMouseLeave={(e) => e.target.style.backgroundColor = '#f9fafb'}>
                    <span>{faq.question}</span>
                    <span style={{
                      transform: openFaqIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s'
                    }}>
                      <ChevronDownIcon />
                    </span>
                  </button>
                  <div style={{
                    maxHeight: openFaqIndex === index ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-in-out'
                  }}>
                    <div style={{
                      padding: '24px',
                      color: '#6b7280',
                      borderTop: '1px solid #e5e7eb'
                    }}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" style={{
        backgroundColor: '#1f2937',
        color: 'white'
      }}>
        <div className="container" style={{
          padding: '80px 20px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '48px',
            marginBottom: '48px'
          }}>
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px'
              }}>HealthSecure</h3>
              <p style={{
                color: '#d1d5db'
              }}>Your trusted partner in securing healthcare expenses with ease and transparency.</p>
            </div>
            
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px'
              }}>Quick Links</h3>
              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <li><a href="/privacy" style={{
                  color: '#9ca3af',
                  textDecoration: 'none'
                }} onMouseEnter={(e) => e.target.style.color = 'white'} 
                   onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>Privacy Policy</a></li>
                <li><a href="/terms" style={{
                  color: '#9ca3af',
                  textDecoration: 'none'
                }} onMouseEnter={(e) => e.target.style.color = 'white'} 
                   onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>Terms of Use</a></li>
                <li><a href="/disclaimer" style={{
                  color: '#9ca3af',
                  textDecoration: 'none'
                }} onMouseEnter={(e) => e.target.style.color = 'white'} 
                   onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>Disclaimer</a></li>
              </ul>
            </div>
            
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px'
              }}>Contact Us</h3>
              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                color: '#9ca3af'
              }}>
                <li>Email: contact@healthsecure.com</li>
                <li>Phone: +91 99999 88888</li>
                <li>Address: 123 Health St, Wellness City</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px'
              }}>Follow Us</h3>
              <div style={{display: 'flex', gap: '16px'}}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
                  color: '#9ca3af'
                }} onMouseEnter={(e) => e.target.style.color = 'white'} 
                   onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
                  <svg style={{width: '24px', height: '24px'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{
                  color: '#9ca3af'
                }} onMouseEnter={(e) => e.target.style.color = 'white'} 
                   onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
                  <svg style={{width: '24px', height: '24px'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.215 3.793 4.65-.753.164-1.533.164-2.296 0 .636 1.875 2.479 3.241 4.663 3.28-1.718 1.348-3.873 2.15-6.223 2.15-.404 0-.802-.024-1.195-.07 2.203 1.409 4.823 2.229 7.622 2.229 9.141 0 14.307-7.584 14.04-14.646.962-.692 1.794-1.56 2.457-2.54z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
                  color: '#9ca3af'
                }} onMouseEnter={(e) => e.target.style.color = 'white'} 
                   onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
                  <svg style={{width: '24px', height: '24px'}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44c0-.795-.645-1.44-1.441-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div style={{
            borderTop: '1px solid #374151',
            paddingTop: '32px',
            textAlign: 'center',
            color: '#9ca3af',
            fontSize: '14px'
          }}>
            &copy; {new Date().getFullYear()} HealthSecure. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OPDInsurancePortal;