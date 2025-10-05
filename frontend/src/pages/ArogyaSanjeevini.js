





// import React, { useState } from 'react';

// // --- Component for embedding all CSS styles ---
// const EmbeddedStyles = () => (
//     <style>{`
//         @keyframes spin {
//             from { transform: rotate(0deg); }
//             to { transform: rotate(360deg); }
//         }
        
//         @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(20px); }
//             to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes slideIn {
//             from { opacity: 0; transform: translateX(-20px); }
//             to { opacity: 1; transform: translateX(0); }
//         }

//         /* Reset and Base Styles */
//         * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//         }
        
//         /* General Styles */
//         .app-container {
//             background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0f9ff 100%);
//             color: #1f2937;
//             font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
//             min-height: 100vh;
//             line-height: 1.6;
//         }
        
//         .container {
//             width: 100%;
//             max-width: 1200px;
//             margin: 0 auto;
//             padding: 1rem;
//         }
        
//         @media (min-width: 768px) {
//             .container {
//                 padding: 2rem;
//             }
//         }

//         /* Header */
//         .header {
//             text-align: center;
//             margin-bottom: 3rem;
//             padding-top: 2rem;
//             animation: fadeIn 0.8s ease-out;
//         }
        
//         .main-title {
//             font-size: 2.5rem;
//             font-weight: 800;
//             background: linear-gradient(135deg, #0d9488 0%, #059669 100%);
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             background-clip: text;
//             margin-bottom: 0.5rem;
//             letter-spacing: -0.025em;
//         }
        
//         .subtitle {
//             color: #4b5563;
//             font-size: 1.25rem;
//             font-weight: 400;
//             max-width: 600px;
//             margin: 0 auto;
//         }
        
//         @media (min-width: 640px) {
//             .main-title {
//                 font-size: 3rem;
//             }
//         }

//         /* Main Content & Form */
//         // .main-content {
//         //     background: rgba(255, 255, 255, 0.95);
//         //     backdrop-filter: blur(10px);
//         //     padding: 2rem;
//         //     border-radius: 1.5rem;
//         //     box-shadow: 
//         //         0 20px 25px -5px rgba(0, 0, 0, 0.1),
//         //         0 10px 10px -5px rgba(0, 0, 0, 0.04),
//         //         0 0 0 1px rgba(255, 255, 255, 0.5);
//         //     margin-bottom: 2rem;
//         //     animation: slideIn 0.6s ease-out;
//         // }
        

//         .main-content {
//     background: rgba(255, 255, 255, 0.95);
//     backdrop-filter: blur(10px);
//     padding: 2rem;
//     border-radius: 1.5rem;
//     box-shadow: 
//         0 20px 25px -5px rgba(0, 0, 0, 0.1),
//         0 10px 10px -5px rgba(0, 0, 0, 0.04),
//         0 0 0 1px rgba(255, 255, 255, 0.5);
//     margin: 0 auto 2rem auto; /* Changed this line */
//     animation: slideIn 0.6s ease-out;
//     max-width: 800px; /* Add this */
//     width: 100%; /* Add this */
// }
//         @media (min-width: 768px) {
//             .main-content {
//                 padding: 3rem;
//             }
//         }

//         .form-title {
//             font-size: 1.75rem;
//             font-weight: 700;
//             color: #111827;
//             margin-bottom: 0.5rem;
//         }
        
//         .form-subtitle {
//             color: #6b7280;
//             margin-bottom: 2.5rem;
//             font-size: 1.1rem;
//         }

//         /* Form Grid Layout */
//         .form-grid {
//             display: flex;
//             flex-direction: column;
//             gap: 2.5rem;
//             width: 100%;
//         }

//         /* Form Sections */
//         .form-section {
//             background: #f8fafc;
//             padding: 1.5rem;
//             border-radius: 1rem;
//             border: 1px solid #e2e8f0;
//             transition: all 0.3s ease;
//         }
        
//         .form-section:hover {
//             border-color: #0d9488;
//             transform: translateY(-2px);
//             box-shadow: 0 10px 15px -3px rgba(13, 148, 136, 0.1);
//         }
        
//         .form-section-title {
//             font-size: 1.25rem;
//             font-weight: 600;
//             color: #0d9488;
//             margin-bottom: 1.5rem;
//             display: flex;
//             align-items: center;
//             gap: 0.5rem;
//         }
        
//         .form-section-title::before {
//             content: "•";
//             color: #0d9488;
//             font-size: 1.5rem;
//         }

//         .form-section-grid {
//             display: grid;
//             grid-template-columns: 1fr;
//             gap: 1.5rem;
//         }
        
//         @media (min-width: 768px) {
//             .form-section-grid {
//                 grid-template-columns: repeat(2, 1fr);
//             }
//         }

//         /* Input Groups */
//         .input-group {
//             display: flex;
//             flex-direction: column;
//         }
        
//         .full-width-field {
//             grid-column: 1 / -1;
//         }

//         .form-label {
//             display: block;
//             font-size: 0.875rem;
//             font-weight: 600;
//             color: #374151;
//             margin-bottom: 0.5rem;
//         }
        
//         .required::after {
//             content: "*";
//             color: #ef4444;
//             margin-left: 0.25rem;
//         }

//         .form-input,
//         .form-select,
//         .form-textarea {
//             width: 100%;
//             padding: 0.875rem 1rem;
//             border: 2px solid #e5e7eb;
//             border-radius: 0.75rem;
//             font-size: 1rem;
//             transition: all 0.3s ease;
//             background: white;
//         }
        
//         .form-input:focus,
//         .form-select:focus,
//         .form-textarea:focus {
//             outline: none;
//             border-color: #0d9488;
//             box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);
//             transform: translateY(-1px);
//         }
        
//         .form-input:hover,
//         .form-select:hover,
//         .form-textarea:hover {
//             border-color: #9ca3af;
//         }
        
//         .form-textarea {
//             resize: vertical;
//             min-height: 100px;
//             line-height: 1.5;
//         }

//         /* Button */
//         .button-container {
//             display: flex;
//             justify-content: center;
//             margin-top: 2rem;
//         }

//         .submit-button {
//             background: linear-gradient(135deg, #0d9488 0%, #059669 100%);
//             color: white;
//             font-weight: 600;
//             font-size: 1.125rem;
//             padding: 1rem 3rem;
//             border: none;
//             border-radius: 0.75rem;
//             cursor: pointer;
//             transition: all 0.3s ease;
//             box-shadow: 0 4px 6px -1px rgba(13, 148, 136, 0.3);
//             position: relative;
//             overflow: hidden;
//         }
        
//         .submit-button::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: -100%;
//             width: 100%;
//             height: 100%;
//             background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
//             transition: left 0.5s;
//         }
        
//         .submit-button:hover::before {
//             left: 100%;
//         }
        
//         .submit-button:hover {
//             transform: translateY(-2px);
//             box-shadow: 
//                 0 10px 25px -3px rgba(13, 148, 136, 0.4),
//                 0 4px 6px -2px rgba(13, 148, 136, 0.1);
//         }
        
//         .submit-button:active {
//             transform: translateY(0);
//         }
        
//         .submit-button:disabled {
//             background: #9ca3af;
//             cursor: not-allowed;
//             transform: none;
//             box-shadow: none;
//         }
        
//         .submit-button:disabled::before {
//             display: none;
//         }

//         /* Loading & Error States */
//         .state-container {
//             margin-top: 2rem;
//             text-align: center;
//             animation: fadeIn 0.5s ease;
//         }
        
//         .loading-spinner-container {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             margin-bottom: 1rem;
//         }
        
//         .loading-spinner {
//             animation: spin 1s linear infinite;
//             border-radius: 50%;
//             height: 3rem;
//             width: 3rem;
//             border: 3px solid #e5e7eb;
//             border-top: 3px solid #0d9488;
//         }
        
//         .loading-text {
//             color: #4b5563;
//             font-size: 1.125rem;
//             font-weight: 500;
//         }
        
//         .error-box {
//             background: #fef2f2;
//             border: 2px solid #fecaca;
//             color: #dc2626;
//             padding: 1.25rem;
//             border-radius: 0.75rem;
//             text-align: left;
//             font-weight: 500;
//         }

//         /* Recommendations Display */
//         .recommendations-container {
//             margin-top: 3rem;
//             animation: fadeIn 0.8s ease;
//         }
        
//         .recommendations-title {
//             font-size: 1.75rem;
//             font-weight: 700;
//             color: #111827;
//             margin-bottom: 2rem;
//             text-align: center;
//         }
        
//         .plan-card {
//             background: white;
//             border: 1px solid #e5e7eb;
//             border-radius: 1rem;
//             padding: 2rem;
//             margin-bottom: 1.5rem;
//             transition: all 0.3s ease;
//             box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
//             position: relative;
//             overflow: hidden;
//         }
        
//         .plan-card::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 4px;
//             height: 100%;
//             background: linear-gradient(135deg, #0d9488, #059669);
//         }
        
//         .plan-card:hover {
//             transform: translateY(-4px);
//             box-shadow: 
//                 0 20px 25px -5px rgba(0, 0, 0, 0.1),
//                 0 10px 10px -5px rgba(0, 0, 0, 0.04);
//         }
        
//         .plan-title {
//             font-size: 1.375rem;
//             font-weight: 700;
//             color: #0d9488;
//             margin-bottom: 1rem;
//         }
        
//         .plan-content {
//             color: #374151;
//             display: flex;
//             flex-direction: column;
//             gap: 0.75rem;
//             line-height: 1.6;
//         }
        
//         .plan-content .bullet-item {
//             margin-left: 1rem;
//             position: relative;
//         }
        
//         .plan-content .bullet-item::before {
//             content: "•";
//             color: #0d9488;
//             font-weight: bold;
//             position: absolute;
//             left: -1rem;
//         }
        
//         .recommendation-label {
//             color: #059669;
//             font-weight: 700;
//             background: #d1fae5;
//             padding: 0.125rem 0.5rem;
//             border-radius: 0.375rem;
//             margin-right: 0.25rem;
//         }

//         /* Footer */
//         .footer {
//             text-align: center;
//             margin-top: 3rem;
//             padding: 2rem 0;
//             color: #6b7280;
//             border-top: 1px solid #e5e7eb;
//             font-size: 0.875rem;
//         }

//         /* Utility Classes */
//         .text-center {
//             text-align: center;
//         }
        
//         .mt-4 {
//             margin-top: 1rem;
//         }
        
//         .mb-2 {
//             margin-bottom: 0.5rem;
//         }

//         /* Focus styles for accessibility */
//         *:focus {
//             outline: 2px solid #0d9488;
//             outline-offset: 2px;
//         }

//         /* Selection styles */
//         ::selection {
//             background-color: #a7f3d0;
//             color: #065f46;
//         }
        
//         /* Scrollbar styling */
//         ::-webkit-scrollbar {
//             width: 6px;
//         }
        
//         ::-webkit-scrollbar-track {
//             background: #f1f1f1;
//             border-radius: 3px;
//         }
        
//         ::-webkit-scrollbar-thumb {
//             background: #0d9488;
//             border-radius: 3px;
//         }
        
//         ::-webkit-scrollbar-thumb:hover {
//             background: #059669;
//         }
//     `}</style>
// );

// // --- Sub-component for rendering recommendations ---
// const RecommendationsDisplay = ({ markdownText }) => {
//     if (!markdownText) return null;
//     const plans = markdownText.split('---').map(p => p.trim()).filter(p => p);

//     return (
//         <div className="recommendations-container">
//             <h2 className="recommendations-title">Your Personalized Recommendations</h2>
//             {plans.map((plan, index) => {
//                 const titleMatch = plan.match(/###\s*(.*)/);
//                 const title = titleMatch ? titleMatch[1] : `Recommendation ${index + 1}`;
//                 const content = plan.replace(/###\s*(.*)/g, '').trim();

//                 return (
//                     <div key={index} className="plan-card">
//                         <h3 className="plan-title">{title}</h3>
//                         <div className="plan-content">
//                            {content.split('\n').map((line, i) => {
//                                 const formattedLine = line.replace(/\*\*(.*?):\*\*/g, '<strong class="recommendation-label">$1:</strong>');
//                                 if (line.startsWith('- ')) {
//                                     return <p key={i} className="bullet-item" dangerouslySetInnerHTML={{ __html: formattedLine }} />;
//                                 }
//                                 return <p key={i} dangerouslySetInnerHTML={{ __html: formattedLine }} />
//                            })}
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// // --- Sub-component for form sections ---
// const FormSection = ({ title, children }) => (
//     <div className="form-section">
//         <h3 className="form-section-title">{title}</h3>
//         <div className="form-section-grid">
//             {children}
//         </div>
//     </div>
// );

// // Main App Component
// export default function App() {
//     // State management using React Hooks for the expanded form
//     const [formData, setFormData] = useState({
//         age: '',
//         gender: 'Male',
//         occupation: '',
//         monthlyIncome: '',
//         premiumBudget: '',
//         maritalStatus: 'Single',
//         dependents: '',
//         earningMembers: '',
//         healthConditions: '',
//         pastHospitalizations: 'No',
//         smoker: 'No',
//         alcohol: 'No',
//         exerciseFrequency: 'Sometimes',
//         coverageType: 'Individual',
//         paymentFrequency: 'Monthly',
//     });
//     const [recommendations, setRecommendations] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState('');

//     // --- Helper function to call the Gemini API ---
//     const callGeminiAPI = async (prompt) => {
//         // NOTE: An empty API key is used here. Canvas will automatically provide it.
//         const apiKey = "AIzaSyBjxM3HbMR0712xhaBWQfp_sXzmqlYlOWI";
//         const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

//         // Updated system prompt for more detailed analysis
//         const systemPrompt = `
//             You are a highly intelligent AI insurance advisor for the Indian market, acting on behalf of "Aarogya Samiti". You have access to a comprehensive database of 23 top-tier health insurance plans from various providers.

//             Your task is to:
//             1.  **Analyze the detailed user profile** provided in the prompt.
//             2.  **Filter Plans:** Mentally filter your database of 23 plans to find ones that are eligible for the user based on their age, income, health conditions, and family structure.
//             3.  **Rank the Top 3-4:** From the eligible plans, select and rank the top 3 to 4 best-suited options. The ranking should be based on a holistic view of the user's needs, budget, and lifestyle.
//             4.  **Generate Recommendations:** For each of the top plans, provide a structured recommendation.

//             **Output Format for EACH plan:**
//             - **Plan Name/Type:** A realistic, descriptive name (e.g., "Comprehensive Family Floater Gold", "Young Professional Secure Pro").
//             - **Recommended Coverage:** A suitable sum insured amount in Indian Rupees (e.g., ₹15 Lakhs).
//             - **Estimated Premium:** A realistic price based on their preferred payment frequency (e.g., "₹1,800 - ₹2,200 per month" or "₹20,000 - ₹25,000 per year").
//             - **Key Features:** A bulleted list of 2-3 standout features relevant to the user (e.g., "- Maternity benefits included", "- Covers pre-existing conditions after 2 years", "- No-claim bonus of 50%").
//             - **Reasoning for Ranking:** A concise paragraph explaining WHY this specific plan is a top recommendation for THIS user, directly referencing their profile data (e.g., "This plan is ranked #1 because your family size and stated budget align perfectly with its floater benefits, and it has excellent coverage for diabetes, which you mentioned as a pre-existing condition.").

//             **Crucial Instructions:**
//             - Format the entire response in Markdown.
//             - Use '###' for each plan's title (e.g., '### Rank 1: Comprehensive Family Floater Gold').
//             - Use '**' for the labels (e.g., '**Recommended Coverage:**').
//             - Separate each complete plan recommendation with a horizontal rule '---'.
//             - Do not include any introductory or concluding text. Your response should start directly with the first plan recommendation.
//         `;

//         const payload = {
//             contents: [{ parts: [{ text: prompt }] }],
//             systemInstruction: { parts: [{ text: systemPrompt }] },
//         };
        
//         // Exponential backoff for retries
//         for (let i = 0; i < 3; i++) {
//             try {
//                 const response = await fetch(apiUrl, {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify(payload)
//                 });

//                 if (response.ok) {
//                     const result = await response.json();
//                     const candidate = result.candidates?.[0];
//                     if (candidate && candidate.content?.parts?.[0]?.text) {
//                         return candidate.content.parts[0].text;
//                     } else {
//                         throw new Error("Invalid response structure from API.");
//                     }
//                 }
//                 if (i === 2) throw new Error(`API request failed with status ${response.status}`);
//             } catch (err) {
//                 if (i === 2) throw err;
//                 await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
//             }
//         }
//         throw new Error("API call failed after multiple retries.");
//     };

//     // --- Event Handlers ---
//     const handleInputChange = (e) => {
//         const { id, value } = e.target;
//         setFormData(prev => ({ ...prev, [id]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         setIsLoading(true);
//         setError('');
//         setRecommendations('');

//         const { age, monthlyIncome, premiumBudget, dependents, earningMembers } = formData;

//         // More comprehensive validation
//         if (!age || !monthlyIncome || !premiumBudget || !dependents || !earningMembers) {
//             setError("Please fill out all required fields (Age, Income, Budget, Dependents, Earning Members).");
//             setIsLoading(false);
//             return;
//         }

//         // Construct the detailed prompt
//         const userPrompt = `
//             Please analyze the following user profile and recommend the top 3-4 health insurance plans from a typical selection available in India.

//             **Personal Information:**
//             - Age: ${formData.age}
//             - Gender: ${formData.gender}
//             - Occupation: ${formData.occupation || 'Not specified'}

//             **Financial Information:**
//             - Monthly Income: ₹${formData.monthlyIncome}
//             - Desired Monthly Premium Budget: ₹${formData.premiumBudget}

//             **Family Information:**
//             - Marital Status: ${formData.maritalStatus}
//             - Number of Dependents: ${formData.dependents}
//             - Number of Earning Members (Breadwinners): ${formData.earningMembers}

//             **Health & Lifestyle:**
//             - Pre-existing Health Conditions: ${formData.healthConditions || 'None reported.'}
//             - History of Hospitalizations: ${formData.pastHospitalizations}
//             - Smoker: ${formData.smoker}
//             - Alcohol Consumption: ${formData.alcohol}
//             - Exercise Frequency: ${formData.exerciseFrequency}

//             **Insurance Preferences:**
//             - Desired Coverage Type: ${formData.coverageType}
//             - Preferred Premium Payment Frequency: ${formData.paymentFrequency}
//         `;
        
//         try {
//             const result = await callGeminiAPI(userPrompt);
//             setRecommendations(result);
//         } catch (err) {
//             console.error("API Call Failed:", err);
//             setError("Sorry, we couldn't fetch recommendations at this time. Please try again later.");
//         } finally {
//             setIsLoading(false);
//         }
//     };
    
//     // --- Main render method ---
//     return (
//         <div className="app-container">
//             <EmbeddedStyles />
//             <div className="container">
//                 <header className="header">
//                     <h1 className="main-title">Aarogya Samiti</h1>
//                     <p className="subtitle">Your Personal Health Insurance Plan Advisor</p>
//                 </header>

//                 <main className="main-content">
//                     {/* <h2 className="form-title">Tell us about yourself</h2> */}
//                     {/* <p className="form-subtitle">Provide your details for a comprehensive plan recommendation.</p> */}
                    
//                     <form onSubmit={handleSubmit} className="form-grid">
                        
//                         <FormSection title="Personal Information">
//                             <div className="input-group">
//                                 <label htmlFor="age" className="form-label required">Age</label>
//                                 <input 
//                                     type="number" 
//                                     id="age" 
//                                     value={formData.age} 
//                                     onChange={handleInputChange} 
//                                     placeholder="e.g., 35" 
//                                     className="form-input"
//                                     min="18"
//                                     max="100"
//                                 />
//                             </div>
//                             <div className="input-group">
//                                 <label htmlFor="gender" className="form-label">Gender</label>
//                                 <select id="gender" value={formData.gender} onChange={handleInputChange} className="form-select">
//                                     <option>Male</option>
//                                     <option>Female</option>
//                                     <option>Other</option>
//                                 </select>
//                             </div>
//                             <div className="input-group full-width-field">
//                                 <label htmlFor="occupation" className="form-label">Occupation</label>
//                                 <input 
//                                     type="text" 
//                                     id="occupation" 
//                                     value={formData.occupation} 
//                                     onChange={handleInputChange} 
//                                     placeholder="e.g., Software Engineer" 
//                                     className="form-input"
//                                 />
//                             </div>
//                         </FormSection>

//                         <FormSection title="Financial Information">
//                             <div className="input-group">
//                                 <label htmlFor="monthlyIncome" className="form-label required">Monthly Income (₹)</label>
//                                 <input 
//                                     type="number" 
//                                     id="monthlyIncome" 
//                                     value={formData.monthlyIncome} 
//                                     onChange={handleInputChange} 
//                                     placeholder="e.g., 75000" 
//                                     className="form-input"
//                                     min="0"
//                                 />
//                             </div>
//                             <div className="input-group">
//                                 <label htmlFor="premiumBudget" className="form-label required">Premium Budget (Monthly, ₹)</label>
//                                 <input 
//                                     type="number" 
//                                     id="premiumBudget" 
//                                     value={formData.premiumBudget} 
//                                     onChange={handleInputChange} 
//                                     placeholder="e.g., 2000" 
//                                     className="form-input"
//                                     min="0"
//                                 />
//                             </div>
//                         </FormSection>

//                         <FormSection title="Family Information">
//                             <div className="input-group">
//                                 <label htmlFor="maritalStatus" className="form-label">Marital Status</label>
//                                 <select id="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange} className="form-select">
//                                     <option>Single</option>
//                                     <option>Married</option>
//                                 </select>
//                             </div>
//                             <div className="input-group">
//                                 <label htmlFor="dependents" className="form-label required">Number of Dependents</label>
//                                 <input 
//                                     type="number" 
//                                     id="dependents" 
//                                     value={formData.dependents} 
//                                     onChange={handleInputChange} 
//                                     placeholder="e.g., 2" 
//                                     className="form-input"
//                                     min="0"
//                                     max="20"
//                                 />
//                             </div>
//                             <div className="input-group">
//                                 <label htmlFor="earningMembers" className="form-label required">Number of Breadwinners</label>
//                                 <input 
//                                     type="number" 
//                                     id="earningMembers" 
//                                     value={formData.earningMembers} 
//                                     onChange={handleInputChange} 
//                                     placeholder="e.g., 1" 
//                                     className="form-input"
//                                     min="0"
//                                     max="10"
//                                 />
//                             </div>
//                         </FormSection>
                        
//                         <FormSection title="Health & Lifestyle">
//                             <div className="input-group full-width-field">
//                                 <label htmlFor="healthConditions" className="form-label">Existing Health Conditions</label>
//                                 <textarea 
//                                     id="healthConditions" 
//                                     value={formData.healthConditions} 
//                                     onChange={handleInputChange} 
//                                     rows="3" 
//                                     placeholder="e.g., Diabetes, High BP, Asthma" 
//                                     className="form-textarea"
//                                 ></textarea>
//                             </div>
//                             <div className="input-group">
//                                 <label htmlFor="pastHospitalizations" className="form-label">Past Hospitalizations?</label>
//                                 <select id="pastHospitalizations" value={formData.pastHospitalizations} onChange={handleInputChange} className="form-select">
//                                     <option>No</option>
//                                     <option>Yes</option>
//                                 </select>
//                             </div>
//                             <div className="input-group">
//                                 <label htmlFor="smoker" className="form-label">Smoker?</label>
//                                 <select id="smoker" value={formData.smoker} onChange={handleInputChange} className="form-select">
//                                     <option>No</option>
//                                     <option>Yes</option>
//                                 </select>
//                             </div>
//                             <div className="input-group">
//                                 <label htmlFor="alcohol" className="form-label">Alcohol Consumption?</label>
//                                 <select id="alcohol" value={formData.alcohol} onChange={handleInputChange} className="form-select">
//                                     <option>No</option>
//                                     <option>Occasionally</option>
//                                     <option>Regularly</option>
//                                 </select>
//                             </div>
//                             <div className="input-group">
//                                 <label htmlFor="exerciseFrequency" className="form-label">Exercise Frequency</label>
//                                 <select id="exerciseFrequency" value={formData.exerciseFrequency} onChange={handleInputChange} className="form-select">
//                                     <option>Never</option>
//                                     <option>Sometimes</option>
//                                     <option>Regularly</option>
//                                 </select>
//                             </div>
//                         </FormSection>
                        
//                         <FormSection title="Insurance Preferences">
//                             <div className="input-group">
//                                 <label htmlFor="coverageType" className="form-label">Type of Coverage</label>
//                                 <select id="coverageType" value={formData.coverageType} onChange={handleInputChange} className="form-select">
//                                     <option>Individual</option>
//                                     <option>Family</option>
//                                     <option>Senior Citizen</option>
//                                 </select>
//                             </div>
//                             <div className="input-group">
//                                 <label htmlFor="paymentFrequency" className="form-label">Premium Payment</label>
//                                 <select id="paymentFrequency" value={formData.paymentFrequency} onChange={handleInputChange} className="form-select">
//                                     <option>Monthly</option>
//                                     <option>Yearly</option>
//                                 </select>
//                             </div>
//                         </FormSection>
                        
//                         <div className="button-container">
//                             <button type="submit" disabled={isLoading} className="submit-button">
//                                 {isLoading ? 'Analyzing Your Profile...' : 'Get Personalized Recommendations'}
//                             </button>
//                         </div>
//                     </form>

//                     {isLoading && (
//                         <div className="state-container">
//                             <div className="loading-spinner-container">
//                                 <div className="loading-spinner"></div>
//                             </div>
//                             <p className="loading-text">Analyzing your profile and finding the best plans for you...</p>
//                         </div>
//                     )}
                    
//                     {error && (
//                         <div className="state-container">
//                             <div className="error-box">{error}</div>
//                         </div>
//                     )}
                    
//                     {!isLoading && !error && recommendations && (
//                         <RecommendationsDisplay markdownText={recommendations} />
//                     )}
//                 </main>

//                 <footer className="footer">
//                     <p>&copy; 2024 Aarogya Samiti. All recommendations are AI-generated suggestions for informational purposes.</p>
//                 </footer>
//             </div>
//         </div>
//     );
// }




















import React, { useState } from 'react';

// --- Component for embedding all CSS styles ---
const EmbeddedStyles = () => (
    <style>{`
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
        }

        /* Reset and Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        /* General Styles */
        .app-container {
            background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0f9ff 100%);
            color: #1f2937;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            min-height: 100vh;
            line-height: 1.6;
        }
        
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem;
        }
        
        @media (min-width: 768px) {
            .container {
                padding: 2rem;
            }
        }

        /* Header */
        .header {
            text-align: center;
            margin-bottom: 3rem;
            padding-top: 2rem;
            animation: fadeIn 0.8s ease-out;
        }
        
        .main-title {
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, #0d9488 0%, #059669 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
            letter-spacing: -0.025em;
        }
        
        .subtitle {
            color: #4b5563;
            font-size: 1.25rem;
            font-weight: 400;
            max-width: 600px;
            margin: 0 auto;
        }
        
        @media (min-width: 640px) {
            .main-title {
                font-size: 3rem;
            }
        }

        /* Main Content & Form */
        .main-content {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 2rem;
            border-radius: 1.5rem;
            box-shadow: 
                0 20px 25px -5px rgba(0, 0, 0, 0.1),
                0 10px 10px -5px rgba(0, 0, 0, 0.04),
                0 0 0 1px rgba(255, 255, 255, 0.5);
            margin: 0 auto 2rem auto;
            animation: slideIn 0.6s ease-out;
            max-width: 900px;
            width: 100%;
        }
        
        @media (min-width: 768px) {
            .main-content {
                padding: 3rem;
            }
        }

        .form-title {
            font-size: 1.75rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 0.5rem;
        }
        
        .form-subtitle {
            color: #6b7280;
            margin-bottom: 2.5rem;
            font-size: 1.1rem;
        }

        /* Form Grid Layout */
        .form-grid {
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
            width: 100%;
        }

        /* Form Sections */
        .form-section {
            background: #f8fafc;
            padding: 1.5rem;
            border-radius: 1rem;
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
        }
        
        .form-section:hover {
            border-color: #0d9488;
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(13, 148, 136, 0.1);
        }
        
        .form-section-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #0d9488;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .form-section-title::before {
            content: "•";
            color: #0d9488;
            font-size: 1.5rem;
        }

        .form-section-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        
        @media (min-width: 768px) {
            .form-section-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        /* Input Groups */
        .input-group {
            display: flex;
            flex-direction: column;
        }
        
        .full-width-field {
            grid-column: 1 / -1;
        }

        .form-label {
            display: block;
            font-size: 0.875rem;
            font-weight: 600;
            color: #374151;
            margin-bottom: 0.5rem;
        }
        
        .required::after {
            content: "*";
            color: #ef4444;
            margin-left: 0.25rem;
        }

        .form-input,
        .form-select,
        .form-textarea {
            width: 100%;
            padding: 0.875rem 1rem;
            border: 2px solid #e5e7eb;
            border-radius: 0.75rem;
            font-size: 1rem;
            transition: all 0.3s ease;
            background: white;
        }
        
        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
            outline: none;
            border-color: #0d9488;
            box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);
            transform: translateY(-1px);
        }
        
        .form-input:hover,
        .form-select:hover,
        .form-textarea:hover {
            border-color: #9ca3af;
        }
        
        .form-textarea {
            resize: vertical;
            min-height: 100px;
            line-height: 1.5;
        }

        /* Button */
        .button-container {
            display: flex;
            justify-content: center;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }

        .submit-button {
            background: linear-gradient(135deg, #0d9488 0%, #059669 100%);
            color: white;
            font-weight: 600;
            font-size: 1.125rem;
            padding: 1rem 3rem;
            border: none;
            border-radius: 0.75rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px -1px rgba(13, 148, 136, 0.3);
            position: relative;
            overflow: hidden;
        }
        
        .submit-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }
        
        .submit-button:hover::before {
            left: 100%;
        }
        
        .submit-button:hover {
            transform: translateY(-2px);
            box-shadow: 
                0 10px 25px -3px rgba(13, 148, 136, 0.4),
                0 4px 6px -2px rgba(13, 148, 136, 0.1);
        }
        
        .submit-button:active {
            transform: translateY(0);
        }
        
        .submit-button:disabled {
            background: #9ca3af;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }
        
        .submit-button:disabled::before {
            display: none;
        }

        /* Loading & Error States - POSITIONED BELOW BUTTON */
        .state-container {
            margin: 0 auto;
            text-align: center;
            animation: fadeIn 0.5s ease;
            width: 100%;
            max-width: 900px;
        }
        
        .loading-spinner-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 1rem;
        }
        
        .loading-spinner {
            animation: spin 1s linear infinite;
            border-radius: 50%;
            height: 3rem;
            width: 3rem;
            border: 3px solid #e5e7eb;
            border-top: 3px solid #0d9488;
        }
        
        .loading-text {
            color: #4b5563;
            font-size: 1.125rem;
            font-weight: 500;
        }
        
        .error-box {
            background: #fef2f2;
            border: 2px solid #fecaca;
            color: #dc2626;
            padding: 1.25rem;
            border-radius: 0.75rem;
            text-align: left;
            font-weight: 500;
            margin: 0 auto;
            max-width: 900px;
        }

        /* Recommendations Display - POSITIONED BELOW EVERYTHING */
        .recommendations-container {
            margin: 3rem auto 0 auto;
            animation: fadeIn 0.8s ease;
            width: 100%;
            max-width: 900px;
        }
        
        .recommendations-title {
            font-size: 1.75rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 2rem;
            text-align: center;
        }
        
        .plan-card {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 1rem;
            padding: 2rem;
            margin-bottom: 1.5rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
        }
        
        .plan-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: linear-gradient(135deg, #0d9488, #059669);
        }
        
        .plan-card:hover {
            transform: translateY(-4px);
            box-shadow: 
                0 20px 25px -5px rgba(0, 0, 0, 0.1),
                0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .plan-title {
            font-size: 1.375rem;
            font-weight: 700;
            color: #0d9488;
            margin-bottom: 1rem;
        }
        
        .plan-content {
            color: #374151;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            line-height: 1.6;
        }
        
        .plan-content .bullet-item {
            margin-left: 1rem;
            position: relative;
        }
        
        .plan-content .bullet-item::before {
            content: "•";
            color: #0d9488;
            font-weight: bold;
            position: absolute;
            left: -1rem;
        }
        
        .recommendation-label {
            color: #059669;
            font-weight: 700;
            background: #d1fae5;
            padding: 0.125rem 0.5rem;
            border-radius: 0.375rem;
            margin-right: 0.25rem;
        }

        /* Footer */
        .footer {
            text-align: center;
            margin-top: 3rem;
            padding: 2rem 0;
            color: #6b7280;
            border-top: 1px solid #e5e7eb;
            font-size: 0.875rem;
        }

        /* Main Layout Container */
        .main-layout {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        /* Utility Classes */
        .text-center {
            text-align: center;
        }
        
        .mt-4 {
            margin-top: 1rem;
        }
        
        .mb-2 {
            margin-bottom: 0.5rem;
        }

        /* Focus styles for accessibility */
        *:focus {
            outline: 2px solid #0d9488;
            outline-offset: 2px;
        }

        /* Selection styles */
        ::selection {
            background-color: #a7f3d0;
            color: #065f46;
        }
        
        /* Scrollbar styling */
        ::-webkit-scrollbar {
            width: 6px;
        }
        
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #0d9488;
            border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: #059669;
        }
    `}</style>
);

// --- Sub-component for rendering recommendations ---
const RecommendationsDisplay = ({ markdownText }) => {
    if (!markdownText) return null;
    const plans = markdownText.split('---').map(p => p.trim()).filter(p => p);

    return (
        <div className="recommendations-container">
            <h2 className="recommendations-title">Your Personalized Recommendations</h2>
            {plans.map((plan, index) => {
                const titleMatch = plan.match(/###\s*(.*)/);
                const title = titleMatch ? titleMatch[1] : `Recommendation ${index + 1}`;
                const content = plan.replace(/###\s*(.*)/g, '').trim();

                return (
                    <div key={index} className="plan-card">
                        <h3 className="plan-title">{title}</h3>
                        <div className="plan-content">
                           {content.split('\n').map((line, i) => {
                                const formattedLine = line.replace(/\*\*(.*?):\*\*/g, '<strong class="recommendation-label">$1:</strong>');
                                if (line.startsWith('- ')) {
                                    return <p key={i} className="bullet-item" dangerouslySetInnerHTML={{ __html: formattedLine }} />;
                                }
                                return <p key={i} dangerouslySetInnerHTML={{ __html: formattedLine }} />
                           })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

// --- Sub-component for form sections ---
const FormSection = ({ title, children }) => (
    <div className="form-section">
        <h3 className="form-section-title">{title}</h3>
        <div className="form-section-grid">
            {children}
        </div>
    </div>
);

// Main App Component
export default function App() {
    // State management using React Hooks for the expanded form
    const [formData, setFormData] = useState({
        age: '',
        gender: 'Male',
        occupation: '',
        monthlyIncome: '',
        premiumBudget: '',
        maritalStatus: 'Single',
        dependents: '',
        earningMembers: '',
        healthConditions: '',
        pastHospitalizations: 'No',
        smoker: 'No',
        alcohol: 'No',
        exerciseFrequency: 'Sometimes',
        coverageType: 'Individual',
        paymentFrequency: 'Monthly',
    });
    const [recommendations, setRecommendations] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // --- Helper function to call the Gemini API ---
    const callGeminiAPI = async (prompt) => {
        const apiKey = "AIzaSyBjxM3HbMR0712xhaBWQfp_sXzmqlYlOWI";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        const systemPrompt = `
            You are a highly intelligent AI insurance advisor for the Indian market, acting on behalf of "Aarogya Samiti". You have access to a comprehensive database of 23 top-tier health insurance plans from various providers.

            Your task is to:
            1.  **Analyze the detailed user profile** provided in the prompt.
            2.  **Filter Plans:** Mentally filter your database of 23 plans to find ones that are eligible for the user based on their age, income, health conditions, and family structure.
            3.  **Rank the Top 3-4:** From the eligible plans, select and rank the top 3 to 4 best-suited options. The ranking should be based on a holistic view of the user's needs, budget, and lifestyle.
            4.  **Generate Recommendations:** For each of the top plans, provide a structured recommendation.

            **Output Format for EACH plan:**
            - **Plan Name/Type:** A realistic, descriptive name (e.g., "Comprehensive Family Floater Gold", "Young Professional Secure Pro").
            - **Recommended Coverage:** A suitable sum insured amount in Indian Rupees (e.g., ₹15 Lakhs).
            - **Estimated Premium:** A realistic price based on their preferred payment frequency (e.g., "₹1,800 - ₹2,200 per month" or "₹20,000 - ₹25,000 per year").
            - **Key Features:** A bulleted list of 2-3 standout features relevant to the user (e.g., "- Maternity benefits included", "- Covers pre-existing conditions after 2 years", "- No-claim bonus of 50%").
            - **Reasoning for Ranking:** A concise paragraph explaining WHY this specific plan is a top recommendation for THIS user, directly referencing their profile data (e.g., "This plan is ranked #1 because your family size and stated budget align perfectly with its floater benefits, and it has excellent coverage for diabetes, which you mentioned as a pre-existing condition.").

            **Crucial Instructions:**
            - Format the entire response in Markdown.
            - Use '###' for each plan's title (e.g., '### Rank 1: Comprehensive Family Floater Gold').
            - Use '**' for the labels (e.g., '**Recommended Coverage:**').
            - Separate each complete plan recommendation with a horizontal rule '---'.
            - Do not include any introductory or concluding text. Your response should start directly with the first plan recommendation.
        `;

        const payload = {
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] },
        };
        
        // Exponential backoff for retries
        for (let i = 0; i < 3; i++) {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    const result = await response.json();
                    const candidate = result.candidates?.[0];
                    if (candidate && candidate.content?.parts?.[0]?.text) {
                        return candidate.content.parts[0].text;
                    } else {
                        throw new Error("Invalid response structure from API.");
                    }
                }
                if (i === 2) throw new Error(`API request failed with status ${response.status}`);
            } catch (err) {
                if (i === 2) throw err;
                await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
            }
        }
        throw new Error("API call failed after multiple retries.");
    };

    // --- Event Handlers ---
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setIsLoading(true);
        setError('');
        setRecommendations('');

        const { age, monthlyIncome, premiumBudget, dependents, earningMembers } = formData;

        // More comprehensive validation
        if (!age || !monthlyIncome || !premiumBudget || !dependents || !earningMembers) {
            setError("Please fill out all required fields (Age, Income, Budget, Dependents, Earning Members).");
            setIsLoading(false);
            return;
        }

        // Construct the detailed prompt
        const userPrompt = `
            Please analyze the following user profile and recommend the top 3-4 health insurance plans from a typical selection available in India.

            **Personal Information:**
            - Age: ${formData.age}
            - Gender: ${formData.gender}
            - Occupation: ${formData.occupation || 'Not specified'}

            **Financial Information:**
            - Monthly Income: ₹${formData.monthlyIncome}
            - Desired Monthly Premium Budget: ₹${formData.premiumBudget}

            **Family Information:**
            - Marital Status: ${formData.maritalStatus}
            - Number of Dependents: ${formData.dependents}
            - Number of Earning Members (Breadwinners): ${formData.earningMembers}

            **Health & Lifestyle:**
            - Pre-existing Health Conditions: ${formData.healthConditions || 'None reported.'}
            - History of Hospitalizations: ${formData.pastHospitalizations}
            - Smoker: ${formData.smoker}
            - Alcohol Consumption: ${formData.alcohol}
            - Exercise Frequency: ${formData.exerciseFrequency}

            **Insurance Preferences:**
            - Desired Coverage Type: ${formData.coverageType}
            - Preferred Premium Payment Frequency: ${formData.paymentFrequency}
        `;
        
        try {
            const result = await callGeminiAPI(userPrompt);
            setRecommendations(result);
        } catch (err) {
            console.error("API Call Failed:", err);
            setError("Sorry, we couldn't fetch recommendations at this time. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };
    
    // --- Main render method ---
    return (
        <div className="app-container">
            <EmbeddedStyles />
            <div className="container">
                <header className="header">
                    <h1 className="main-title">Aarogya Samiti</h1>
                    <p className="subtitle">Your Personal Health Insurance Plan Advisor</p>
                </header>

                <div className="main-layout">
                    {/* Form Container */}
                    <main className="main-content">
                        <form onSubmit={handleSubmit} className="form-grid">
                            
                            <FormSection title="Personal Information">
                                <div className="input-group">
                                    <label htmlFor="age" className="form-label required">Age</label>
                                    <input 
                                        type="number" 
                                        id="age" 
                                        value={formData.age} 
                                        onChange={handleInputChange} 
                                        placeholder="e.g., 35" 
                                        className="form-input"
                                        min="18"
                                        max="100"
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="gender" className="form-label">Gender</label>
                                    <select id="gender" value={formData.gender} onChange={handleInputChange} className="form-select">
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="input-group full-width-field">
                                    <label htmlFor="occupation" className="form-label">Occupation</label>
                                    <input 
                                        type="text" 
                                        id="occupation" 
                                        value={formData.occupation} 
                                        onChange={handleInputChange} 
                                        placeholder="e.g., Software Engineer" 
                                        className="form-input"
                                    />
                                </div>
                            </FormSection>

                            <FormSection title="Financial Information">
                                <div className="input-group">
                                    <label htmlFor="monthlyIncome" className="form-label required">Monthly Income (₹)</label>
                                    <input 
                                        type="number" 
                                        id="monthlyIncome" 
                                        value={formData.monthlyIncome} 
                                        onChange={handleInputChange} 
                                        placeholder="e.g., 75000" 
                                        className="form-input"
                                        min="0"
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="premiumBudget" className="form-label required">Premium Budget (Monthly, ₹)</label>
                                    <input 
                                        type="number" 
                                        id="premiumBudget" 
                                        value={formData.premiumBudget} 
                                        onChange={handleInputChange} 
                                        placeholder="e.g., 2000" 
                                        className="form-input"
                                        min="0"
                                    />
                                </div>
                            </FormSection>

                            <FormSection title="Family Information">
                                <div className="input-group">
                                    <label htmlFor="maritalStatus" className="form-label">Marital Status</label>
                                    <select id="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange} className="form-select">
                                        <option>Single</option>
                                        <option>Married</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="dependents" className="form-label required">Number of Dependents</label>
                                    <input 
                                        type="number" 
                                        id="dependents" 
                                        value={formData.dependents} 
                                        onChange={handleInputChange} 
                                        placeholder="e.g., 2" 
                                        className="form-input"
                                        min="0"
                                        max="20"
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="earningMembers" className="form-label required">Number of Breadwinners</label>
                                    <input 
                                        type="number" 
                                        id="earningMembers" 
                                        value={formData.earningMembers} 
                                        onChange={handleInputChange} 
                                        placeholder="e.g., 1" 
                                        className="form-input"
                                        min="0"
                                        max="10"
                                    />
                                </div>
                            </FormSection>
                            
                            <FormSection title="Health & Lifestyle">
                                <div className="input-group full-width-field">
                                    <label htmlFor="healthConditions" className="form-label">Existing Health Conditions</label>
                                    <textarea 
                                        id="healthConditions" 
                                        value={formData.healthConditions} 
                                        onChange={handleInputChange} 
                                        rows="3" 
                                        placeholder="e.g., Diabetes, High BP, Asthma" 
                                        className="form-textarea"
                                    ></textarea>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="pastHospitalizations" className="form-label">Past Hospitalizations?</label>
                                    <select id="pastHospitalizations" value={formData.pastHospitalizations} onChange={handleInputChange} className="form-select">
                                        <option>No</option>
                                        <option>Yes</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="smoker" className="form-label">Smoker?</label>
                                    <select id="smoker" value={formData.smoker} onChange={handleInputChange} className="form-select">
                                        <option>No</option>
                                        <option>Yes</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="alcohol" className="form-label">Alcohol Consumption?</label>
                                    <select id="alcohol" value={formData.alcohol} onChange={handleInputChange} className="form-select">
                                        <option>No</option>
                                        <option>Occasionally</option>
                                        <option>Regularly</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="exerciseFrequency" className="form-label">Exercise Frequency</label>
                                    <select id="exerciseFrequency" value={formData.exerciseFrequency} onChange={handleInputChange} className="form-select">
                                        <option>Never</option>
                                        <option>Sometimes</option>
                                        <option>Regularly</option>
                                    </select>
                                </div>
                            </FormSection>
                            
                            <FormSection title="Insurance Preferences">
                                <div className="input-group">
                                    <label htmlFor="coverageType" className="form-label">Type of Coverage</label>
                                    <select id="coverageType" value={formData.coverageType} onChange={handleInputChange} className="form-select">
                                        <option>Individual</option>
                                        <option>Family</option>
                                        <option>Senior Citizen</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="paymentFrequency" className="form-label">Premium Payment</label>
                                    <select id="paymentFrequency" value={formData.paymentFrequency} onChange={handleInputChange} className="form-select">
                                        <option>Monthly</option>
                                        <option>Yearly</option>
                                    </select>
                                </div>
                            </FormSection>
                            
                            <div className="button-container">
                                <button type="submit" disabled={isLoading} className="submit-button">
                                    {isLoading ? 'Analyzing Your Profile...' : 'Get Personalized Recommendations'}
                                </button>
                            </div>
                        </form>
                    </main>

                    {/* Loading State - POSITIONED BELOW THE FORM */}
                    {isLoading && (
                        <div className="state-container">
                            <div className="loading-spinner-container">
                                <div className="loading-spinner"></div>
                            </div>
                            <p className="loading-text">Analyzing your profile and finding the best plans for you...</p>
                        </div>
                    )}
                    
                    {/* Error State - POSITIONED BELOW THE FORM */}
                    {error && (
                        <div className="state-container">
                            <div className="error-box">{error}</div>
                        </div>
                    )}
                    
                    {/* Recommendations - POSITIONED BELOW EVERYTHING */}
                    {!isLoading && !error && recommendations && (
                        <RecommendationsDisplay markdownText={recommendations} />
                    )}
                </div>

                <footer className="footer">
                    <p>&copy; 2024 Aarogya Samiti. All recommendations are AI-generated suggestions for informational purposes.</p>
                </footer>
            </div>
        </div>
    );
}