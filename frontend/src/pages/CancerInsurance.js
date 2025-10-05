// import React, { useState } from 'react';

// // --- SVG Icons (Self-contained components) ---
// const CheckCircleIcon = ({ className }) => (
//   <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//   </svg>
// );

// const ShieldCheckIcon = ({ className }) => (
//     <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.016h-.008v-.016z" />
//     </svg>
// );

// const ChevronDownIcon = ({ className }) => (
//     <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//     </svg>
// );


// // --- 1. Header Section ---
// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     return (
//         <header className="bg-white shadow-md sticky top-0 z-50">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                     <div className="flex-shrink-0">
//                         <a href="#" className="text-2xl font-bold text-blue-900">ABSLI</a>
//                     </div>
//                     <nav className="hidden md:flex md:space-x-8">
//                         <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Term Insurance</a>
//                         <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Health Insurance</a>
//                         <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Investment Plans</a>
//                     </nav>
//                     <div className="hidden md:flex items-center space-x-4">
//                          <a href="tel:+911234567890" className="text-sm font-semibold bg-green-100 text-green-800 px-4 py-2 rounded-full">Call Us Now</a>
//                          <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600">Login</a>
//                     </div>
//                     <div className="md:hidden">
//                         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600">
//                             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             {isMenuOpen && (
//                 <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
//                     <a href="#" className="block text-gray-700 hover:text-blue-600">Term Insurance</a>
//                     <a href="#" className="block text-gray-700 hover:text-blue-600">Health Insurance</a>
//                     <a href="#" className="block text-gray-700 hover:text-blue-600">Investment Plans</a>
//                     <a href="#" className="block text-gray-700 hover:text-blue-600">Login</a>
//                     <a href="tel:+911234567890" className="block text-sm font-semibold bg-green-100 text-green-800 px-4 py-2 rounded-full text-center">Call Us</a>
//                 </div>
//             )}
//         </header>
//     );
// };

// // --- 2. Hero Section ---
// const HeroSection = () => {
//     return (
//         <section className="bg-blue-50 py-12 sm:py-16">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//                     <div className="text-center lg:text-left">
//                         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 tracking-tight">ABSLI Cancer Shield Plan</h1>
//                         <p className="mt-4 text-lg text-gray-600">Protect your hard-earned savings from the financial impact of cancer. A lump sum benefit to help you focus on recovery, not bills.</p>
//                         <div className="mt-6 space-y-2">
//                             <p className="flex items-center justify-center lg:justify-start"><CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />Covers all stages of cancer, from early to major.</p>
//                             <p className="flex items-center justify-center lg:justify-start"><CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />Flat 5% discount when you buy online.</p>
//                         </div>
//                     </div>
//                     <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl">
//                         <h3 className="text-xl font-bold text-center text-blue-900">Get an Instant Quote</h3>
//                         <p className="text-center text-sm text-gray-500 mb-4">It only takes a minute.</p>
//                         <form className="space-y-4">
//                             <div>
//                                 <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
//                                 <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" />
//                             </div>
//                             <div>
//                                 <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
//                                 <input type="tel" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Your Phone Number" />
//                             </div>
//                             <div className="flex items-start">
//                                 <input id="consent" name="consent" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1" />
//                                 <label htmlFor="consent" className="ml-2 text-sm text-gray-600">I agree to the terms and consent to be contacted by an ABSLI representative.</label>
//                             </div>
//                             <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-md hover:bg-green-700 transition-colors">Calculate Premium</button>
//                              <p className="text-center text-sm font-semibold text-blue-800 mt-2">Get ₹10 Lakhs Cancer Insurance for just ₹120/month*</p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// // --- 3. Product Information Section ---
// const ProductInfoSection = () => (
//     <section className="py-12 sm:py-16">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center">
//                 <h2 className="text-3xl font-bold text-blue-900">Plan Details</h2>
//                 <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">The ABSLI Cancer Shield Plan is a non-linked, non-participating health insurance plan that provides a fixed lump sum amount on the diagnosis of cancer.</p>
//             </div>
//             <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <div className="bg-gray-50 p-6 rounded-lg">
//                     <h3 className="font-bold text-blue-800">Sum Assured</h3>
//                     <p className="text-gray-600">Minimum: ₹10 Lakhs</p>
//                     <p className="text-gray-600">Maximum: ₹50 Lakhs</p>
//                 </div>
//                 <div className="bg-gray-50 p-6 rounded-lg">
//                     <h3 className="font-bold text-blue-800">Policy Term</h3>
//                     <p className="text-gray-600">Minimum: 5 Years</p>
//                     <p className="text-gray-600">Maximum: 50 Years</p>
//                 </div>
//                 <div className="bg-gray-50 p-6 rounded-lg">
//                     <h3 className="font-bold text-blue-800">Payment Modes</h3>
//                     <p className="text-gray-600">Annual, Semi-Annual, Quarterly, Monthly</p>
//                 </div>
//             </div>
//              <div className="mt-8 text-center bg-green-50 border-l-4 border-green-500 p-4 rounded-md">
//                 <h4 className="font-bold text-green-800">Tax Benefits</h4>
//                 <p className="text-green-700">Avail tax benefits on premiums paid under Section 80D of the Income Tax Act, 1961.</p>
//             </div>
//         </div>
//     </section>
// );


// // --- 4. Key Features Section ---
// const KeyFeaturesSection = () => {
//     const features = [
//         { title: "All Stages Coverage", description: "Financial protection against both early and major stage cancer." },
//         { title: "Lump Sum Payout", description: "Receive your full cover amount upfront to manage expenses." },
//         { title: "Premium Waiver", description: "On an early-stage claim, all future premiums for 5 years are waived." },
//         { title: "Increasing Cover", description: "Option to increase your sum assured by 10% annually." },
//         { title: "No Medicals Required", description: "A simple and hassle-free application process for most individuals." },
//     ];
//     return (
//         <section className="bg-blue-50 py-12 sm:py-16">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center">
//                     <h2 className="text-3xl font-bold text-blue-900">Key Features & Benefits</h2>
//                     <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Designed to provide you with comprehensive support when you need it most.</p>
//                 </div>
//                 <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {features.map((feature, index) => (
//                         <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//                             <ShieldCheckIcon className="w-10 h-10 text-blue-600 mb-4"/>
//                             <h3 className="text-lg font-bold text-blue-900">{feature.title}</h3>
//                             <p className="mt-2 text-gray-600">{feature.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };


// // --- 5. How It Works Section ---
// const HowItWorksSection = () => (
//     <section className="py-12 sm:py-16">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center">
//                 <h2 className="text-3xl font-bold text-blue-900">A Simple 3-Step Process</h2>
//             </div>
//             <div className="mt-10 relative">
//                 <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -translate-y-1/2"></div>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
//                     <div className="p-4">
//                         <div className="flex items-center justify-center bg-blue-600 text-white w-16 h-16 rounded-full mx-auto font-bold text-2xl mb-4">1</div>
//                         <h3 className="font-bold text-blue-900">Fill Basic Details</h3>
//                         <p className="text-gray-600">Complete our simple online application form in minutes.</p>
//                     </div>
//                     <div className="p-4">
//                         <div className="flex items-center justify-center bg-blue-600 text-white w-16 h-16 rounded-full mx-auto font-bold text-2xl mb-4">2</div>
//                         <h3 className="font-bold text-blue-900">Claim Intimation</h3>
//                         <p className="text-gray-600">Inform us with the diagnosis report from a certified medical practitioner.</p>
//                     </div>
//                     <div className="p-4">
//                         <div className="flex items-center justify-center bg-blue-600 text-white w-16 h-16 rounded-full mx-auto font-bold text-2xl mb-4">3</div>
//                         <h3 className="font-bold text-blue-900">Document Submission</h3>
//                         <p className="text-gray-600">Submit the required documents for a quick and easy claim process.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
// );


// // --- 7. Eligibility Criteria Table ---
// const EligibilityCriteriaSection = () => (
//     <section className="bg-blue-50 py-12 sm:py-16">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center">
//                 <h2 className="text-3xl font-bold text-blue-900">Eligibility Criteria</h2>
//             </div>
//             <div className="mt-8 max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//                 <table className="w-full text-left">
//                     <tbody className="divide-y divide-gray-200">
//                         <tr className="bg-gray-50">
//                             <td className="px-6 py-4 font-medium text-gray-900">Entry Age</td>
//                             <td className="px-6 py-4 text-gray-700">18 – 65 Years</td>
//                         </tr>
//                         <tr>
//                             <td className="px-6 py-4 font-medium text-gray-900">Ceasing Age</td>
//                             <td className="px-6 py-4 text-gray-700">85 Years</td>
//                         </tr>
//                         <tr className="bg-gray-50">
//                             <td className="px-6 py-4 font-medium text-gray-900">Policy Term</td>
//                             <td className="px-6 py-4 text-gray-700">5 – 50 Years</td>
//                         </tr>
//                         <tr>
//                             <td className="px-6 py-4 font-medium text-gray-900">Sum Assured</td>
//                             <td className="px-6 py-4 text-gray-700">₹10 Lakhs – ₹50 Lakhs</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     </section>
// );


// // --- 8. Premium Calculator Section ---
// const PremiumCalculatorSection = () => {
//     const [age, setAge] = useState(30);
//     const [gender, setGender] = useState('male');
//     const [coverage, setCoverage] = useState(2500000); // 25 Lakhs
//     const [premium, setPremium] = useState(0);

//     const calculatePremium = () => {
//         // This is a simplified calculation for demonstration purposes.
//         // A real-world calculator would use a complex algorithm or API call.
//         const baseRate = 0.0005;
//         const ageFactor = age / 1000;
//         const genderFactor = gender === 'male' ? 1.1 : 1.0;
//         const monthlyPremium = (coverage * (baseRate + ageFactor)) * genderFactor / 12;
//         setPremium(Math.round(monthlyPremium));
//     };
    
//     React.useEffect(() => {
//         calculatePremium();
//     }, [age, gender, coverage]);

//     return (
//         <section className="py-12 sm:py-16">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center">
//                     <h2 className="text-3xl font-bold text-blue-900">Premium Calculator</h2>
//                     <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Get a real-time estimate of your monthly premium.</p>
//                 </div>
//                 <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 rounded-xl shadow-2xl">
//                     <div className="space-y-6">
//                         <div>
//                             <label className="font-medium">Your Age: <span className="font-bold text-blue-700">{age}</span></label>
//                             <input type="range" min="18" max="65" value={age} onChange={(e) => setAge(e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
//                         </div>
//                         <div>
//                             <label className="font-medium">Gender</label>
//                             <div className="flex space-x-4 mt-2">
//                                <button onClick={() => setGender('male')} className={`flex-1 py-2 rounded-md ${gender === 'male' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Male</button>
//                                <button onClick={() => setGender('female')} className={`flex-1 py-2 rounded-md ${gender === 'female' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Female</button>
//                             </div>
//                         </div>
//                         <div>
//                             <label className="font-medium">Coverage Amount</label>
//                             <select value={coverage} onChange={(e) => setCoverage(e.target.value)} className="w-full mt-2 p-2 border border-gray-300 rounded-md">
//                                 <option value="1000000">₹10 Lakhs</option>
//                                 <option value="2500000">₹25 Lakhs</option>
//                                 <option value="5000000">₹50 Lakhs</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="text-center bg-blue-50 p-8 rounded-lg">
//                         <p className="text-gray-600">Your Monthly Premium</p>
//                         <p className="text-5xl font-extrabold text-blue-900 my-2">₹{premium}</p>
//                         <p className="text-xs text-gray-500">*This is an illustrative quote. The actual premium may vary.</p>
//                         <button className="mt-6 w-full bg-green-600 text-white font-bold py-3 px-4 rounded-md hover:bg-green-700 transition-colors">Buy Now</button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };


// // --- 10. Social Proof Section ---
// const SocialProofSection = () => (
//     <section className="bg-blue-50 py-12 sm:py-16">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center">
//                 <h2 className="text-3xl font-bold text-blue-900">Trusted by Millions</h2>
//             </div>
//             <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//                 <div className="bg-white p-6 rounded-lg shadow-md">
//                     <p className="text-4xl font-bold text-blue-600">98.07%</p>
//                     <p className="text-gray-600 font-medium">Claim Settlement Ratio</p>
//                 </div>
//                  <div className="bg-white p-6 rounded-lg shadow-md">
//                     <p className="text-4xl font-bold text-blue-600">5 Million+</p>
//                     <p className="text-gray-600 font-medium">Happy Customers</p>
//                 </div>
//                  <div className="bg-white p-6 rounded-lg shadow-md">
//                     <p className="text-4xl font-bold text-blue-600">IRDAI Approved</p>
//                     <p className="text-gray-600 font-medium">100% Secure & Regulated</p>
//                 </div>
//             </div>
//             <div className="mt-12">
//                 <div className="max-w-xl mx-auto text-center bg-white p-8 rounded-xl shadow-lg">
//                     <p className="text-gray-700 italic">"Getting the lump sum amount from ABSLI after my diagnosis was a huge relief. It helped my family manage the treatment costs without any financial stress. The process was smooth and supportive."</p>
//                     <p className="mt-4 font-bold text-blue-800">- Rahul S., Policyholder</p>
//                 </div>
//             </div>
//         </div>
//     </section>
// );


// // --- 11. FAQ Section ---
// const FaqItem = ({ question, answer }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     return (
//         <div className="border-b border-gray-200 py-4">
//             <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800">
//                 <span>{question}</span>
//                 <ChevronDownIcon className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
//             </button>
//             {isOpen && <p className="mt-2 text-gray-600 pr-8">{answer}</p>}
//         </div>
//     );
// };

// const FaqSection = () => {
//     const faqs = [
//         { question: "What is covered under the early stage of cancer?", answer: "The plan covers specific listed cancers which are histologically confirmed as malignant and characterized by the uncontrolled growth of cells. Please refer to the policy document for the detailed list." },
//         { question: "Is there a waiting period for this policy?", answer: "Yes, there is a waiting period of 90 days from the date of commencement of the policy. No claims will be admissible during this period." },
//         { question: "Can I get a loan against this policy?", answer: "No, a loan facility is not available under this plan." },
//         { question: "What happens if I stop paying premiums?", answer: "The policy will lapse if premiums are not paid within the grace period. All benefits under the policy will cease. You may have an option to revive the policy as per the terms and conditions." },
//     ];
//     return (
//         <section className="py-12 sm:py-16">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center">
//                     <h2 className="text-3xl font-bold text-blue-900">Frequently Asked Questions</h2>
//                 </div>
//                 <div className="mt-8 max-w-3xl mx-auto">
//                     {faqs.map((faq, index) => <FaqItem key={index} question={faq.question} answer={faq.answer} />)}
//                 </div>
//             </div>
//         </section>
//     );
// };


// // --- 12. Footer Section ---
// const Footer = () => (
//     <footer className="bg-blue-900 text-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                 <div>
//                     <h3 className="font-bold mb-4">About ABSLI</h3>
//                     <a href="#" className="block text-blue-200 hover:text-white text-sm mb-2">About Us</a>
//                     <a href="#" className="block text-blue-200 hover:text-white text-sm mb-2">Contact Us</a>
//                 </div>
//                  <div>
//                     <h3 className="font-bold mb-4">Legal</h3>
//                     <a href="#" className="block text-blue-200 hover:text-white text-sm mb-2">Privacy Policy</a>
//                     <a href="#" className="block text-blue-200 hover:text-white text-sm mb-2">Terms & Conditions</a>
//                     <a href="#" className="block text-blue-200 hover:text-white text-sm mb-2">IRDAI Registration</a>
//                 </div>
//                  <div>
//                     <h3 className="font-bold mb-4">Products</h3>
//                     <a href="#" className="block text-blue-200 hover:text-white text-sm mb-2">Term Insurance</a>
//                     <a href="#" className="block text-blue-200 hover:text-white text-sm mb-2">Health Insurance</a>
//                 </div>
//                  <div>
//                     <h3 className="font-bold mb-4">Follow Us</h3>
//                     {/* Social links here */}
//                 </div>
//             </div>
//             <div className="mt-8 border-t border-blue-800 pt-6 text-center text-sm text-blue-300">
//                 <p>&copy; {new Date().getFullYear()} Aditya Birla Sun Life Insurance Company Limited. All rights reserved.</p>
//                 <p className="mt-2">Disclaimer: This is a sample webpage created for demonstration purposes. Please refer to the official ABSLI website for actual product details.</p>
//             </div>
//         </div>
//     </footer>
// );

// // --- Main App Component ---
// export default function App() {
//   return (
//     <div className="bg-white">
//       <Header />
//       <main>
//         <HeroSection />
//         <ProductInfoSection />
//         <KeyFeaturesSection />
//         <HowItWorksSection />
//         <EligibilityCriteriaSection />
//         <PremiumCalculatorSection />
//         <SocialProofSection />
//         <FaqSection />
//       </main>
//       <Footer />
//     </div>
//   );
// }












import React, { useState, useEffect } from 'react';

// --- SVG Icons (Self-contained components) ---
const CheckCircleIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ShieldCheckIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.016h-.008v-.016z" />
    </svg>
);

const ChevronDownIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);


// --- 1. Header Section ---
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="main-header">
            <div className="container">
                <div className="header-content">
                    <a href="#" className="header-logo">ABSLI</a>
                    <nav className="header-nav">
                        <a href="#">Term Insurance</a>
                        <a href="#">Health Insurance</a>
                        <a href="#">Investment Plans</a>
                    </nav>
                    <div className="header-actions">
                         <a href="tel:+911234567890" className="header-call-btn">Call Us Now</a>
                         {/* <a href="#" className="header-login-btn">Login</a> */}
                    </div>
                    <div className="mobile-menu-button-wrapper">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="mobile-menu">
                    <a href="#">Term Insurance</a>
                    <a href="#">Health Insurance</a>
                    <a href="#">Investment Plans</a>
                    <a href="#">Login</a>
                    <a href="tel:+911234567890" className="header-call-btn mobile">Call Us</a>
                </div>
            )}
        </header>
    );
};

// --- 2. Hero Section ---
const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <h1 className="hero-headline">ABSLI Cancer Shield Plan</h1>
                        <p className="hero-subheadline">Protect your hard-earned savings from the financial impact of cancer. A lump sum benefit to help you focus on recovery, not bills.</p>
                        <div className="hero-benefits">
                            <p><CheckCircleIcon className="check-icon" />Covers all stages of cancer, from early to major.</p>
                            <p><CheckCircleIcon className="check-icon" />Flat 5% discount when you buy online.</p>
                        </div>
                    </div>
                    <div className="hero-form-card">
                        <h3 className="form-title">Get an Instant Quote</h3>
                        <p className="form-subtitle">It only takes a minute.</p>
                        <form className="hero-form">
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder="Your Phone Number" />
                            </div>
                            <div className="form-consent">
                                <input id="consent" name="consent" type="checkbox" />
                                <label htmlFor="consent">I agree to the terms and consent to be contacted by an ABSLI representative.</label>
                            </div>
                            <button type="submit" className="cta-button">Calculate Premium</button>
                             <p className="form-premium-preview">Get ₹10 Lakhs Cancer Insurance for just ₹120/month*</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- 3. Product Information Section ---
const ProductInfoSection = () => (
    <section className="section-padding">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Plan Details</h2>
                <p className="section-subtitle">The ABSLI Cancer Shield Plan is a non-linked, non-participating health insurance plan that provides a fixed lump sum amount on the diagnosis of cancer.</p>
            </div>
            <div className="product-info-grid">
                <div className="info-card">
                    <h3>Sum Assured</h3>
                    <p>Minimum: ₹10 Lakhs</p>
                    <p>Maximum: ₹50 Lakhs</p>
                </div>
                <div className="info-card">
                    <h3>Policy Term</h3>
                    <p>Minimum: 5 Years</p>
                    <p>Maximum: 50 Years</p>
                </div>
                <div className="info-card">
                    <h3>Payment Modes</h3>
                    <p>Annual, Semi-Annual, Quarterly, Monthly</p>
                </div>
            </div>
             <div className="tax-benefit-card">
                <h4>Tax Benefits</h4>
                <p>Avail tax benefits on premiums paid under Section 80D of the Income Tax Act, 1961.</p>
            </div>
        </div>
    </section>
);


// --- 4. Key Features Section ---
const KeyFeaturesSection = () => {
    const features = [
        { title: "All Stages Coverage", description: "Financial protection against both early and major stage cancer." },
        { title: "Lump Sum Payout", description: "Receive your full cover amount upfront to manage expenses." },
        { title: "Premium Waiver", description: "On an early-stage claim, all future premiums for 5 years are waived." },
        { title: "Increasing Cover", description: "Option to increase your sum assured by 10% annually." },
        { title: "No Medicals Required", description: "A simple and hassle-free application process for most individuals." },
        { title: "Worldwide Coverage", description: "Protection for medical expenses incurred anywhere in the world." },
    ];
    return (
        <section className="section-padding section-bg-alt">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Key Features & Benefits</h2>
                    <p className="section-subtitle">Designed to provide you with comprehensive support when you need it most.</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <ShieldCheckIcon className="feature-icon"/>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// --- 5. How It Works Section ---
const HowItWorksSection = () => (
    <section className="section-padding">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">A Simple 3-Step Process</h2>
            </div>
            <div className="how-it-works-container">
                <div className="how-it-works-line"></div>
                <div className="how-it-works-grid">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <h3>Fill Basic Details</h3>
                        <p>Complete our simple online application form in minutes.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">2</div>
                        <h3>Claim Intimation</h3>
                        <p>Inform us with the diagnosis report from a certified medical practitioner.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">3</div>
                        <h3>Document Submission</h3>
                        <p>Submit the required documents for a quick and easy claim process.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


// --- 7. Eligibility Criteria Table ---
const EligibilityCriteriaSection = () => (
    <section className="section-padding section-bg-alt">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Eligibility Criteria</h2>
            </div>
            <div className="eligibility-table-wrapper">
                <table className="eligibility-table">
                    <tbody>
                        <tr>
                            <td>Entry Age</td>
                            <td>18 – 65 Years</td>
                        </tr>
                        <tr>
                            <td>Ceasing Age</td>
                            <td>85 Years</td>
                        </tr>
                        <tr>
                            <td>Policy Term</td>
                            <td>5 – 50 Years</td>
                        </tr>
                        <tr>
                            <td>Sum Assured</td>
                            <td>₹10 Lakhs – ₹50 Lakhs</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
);


// --- 8. Premium Calculator Section ---
const PremiumCalculatorSection = () => {
    const [age, setAge] = useState(30);
    const [gender, setGender] = useState('male');
    const [coverage, setCoverage] = useState(2500000); // 25 Lakhs
    const [premium, setPremium] = useState(0);

    const calculatePremium = () => {
        const baseRate = 0.0005;
        const ageFactor = age / 1000;
        const genderFactor = gender === 'male' ? 1.1 : 1.0;
        const monthlyPremium = (coverage * (baseRate + ageFactor)) * genderFactor / 12;
        setPremium(Math.round(monthlyPremium));
    };
    
    useEffect(() => {
        calculatePremium();
    }, [age, gender, coverage]);

    return (
        <section className="section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Premium Calculator</h2>
                    <p className="section-subtitle">Get a real-time estimate of your monthly premium.</p>
                </div>
                <div className="calculator-card">
                    <div className="calculator-inputs">
                        <div>
                            <label>Your Age: <span className="age-display">{age}</span></label>
                            <input type="range" min="18" max="65" value={age} onChange={(e) => setAge(e.target.value)} className="age-slider" />
                        </div>
                        <div>
                            <label>Gender</label>
                            <div className="gender-selector">
                               <button onClick={() => setGender('male')} className={gender === 'male' ? 'active' : ''}>Male</button>
                               <button onClick={() => setGender('female')} className={gender === 'female' ? 'active' : ''}>Female</button>
                            </div>
                        </div>
                        <div>
                            <label>Coverage Amount</label>
                            <select value={coverage} onChange={(e) => setCoverage(e.target.value)} className="coverage-select">
                                <option value="1000000">₹10 Lakhs</option>
                                <option value="2500000">₹25 Lakhs</option>
                                <option value="5000000">₹50 Lakhs</option>
                            </select>
                        </div>
                    </div>
                    <div className="calculator-result">
                        <p>Your Monthly Premium</p>
                        <p className="premium-amount">₹{premium}</p>
                        <p className="premium-disclaimer">*This is an illustrative quote. The actual premium may vary.</p>
                        <button className="cta-button">Buy Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};


// --- 10. Social Proof Section ---
const SocialProofSection = () => (
    <section className="section-padding section-bg-alt">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Trusted by Millions</h2>
            </div>
            <div className="social-proof-grid">
                <div className="proof-card">
                    <p className="proof-stat">98.07%</p>
                    <p className="proof-label">Claim Settlement Ratio</p>
                </div>
                 <div className="proof-card">
                    <p className="proof-stat">5 Million+</p>
                    <p className="proof-label">Happy Customers</p>
                </div>
                 <div className="proof-card">
                    <p className="proof-stat">IRDAI Approved</p>
                    <p className="proof-label">100% Secure & Regulated</p>
                </div>
            </div>
            <div className="testimonial-card">
                <p>"Getting the lump sum amount from ABSLI after my diagnosis was a huge relief. It helped my family manage the treatment costs without any financial stress. The process was smooth and supportive."</p>
                <p className="testimonial-author">- Rahul S., Policyholder</p>
            </div>
        </div>
    </section>
);


// --- 11. FAQ Section ---
const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="faq-item">
            <button onClick={() => setIsOpen(!isOpen)} className="faq-question">
                <span>{question}</span>
                <ChevronDownIcon className={`faq-icon ${isOpen ? 'open' : ''}`} />
            </button>
            {isOpen && <p className="faq-answer">{answer}</p>}
        </div>
    );
};

const FaqSection = () => {
    const faqs = [
        { question: "What is covered under the early stage of cancer?", answer: "The plan covers specific listed cancers which are histologically confirmed as malignant and characterized by the uncontrolled growth of cells. Please refer to the policy document for the detailed list." },
        { question: "Is there a waiting period for this policy?", answer: "Yes, there is a waiting period of 90 days from the date of commencement of the policy. No claims will be admissible during this period." },
        { question: "Can I get a loan against this policy?", answer: "No, a loan facility is not available under this plan." },
        { question: "What happens if I stop paying premiums?", answer: "The policy will lapse if premiums are not paid within the grace period. All benefits under the policy will cease. You may have an option to revive the policy as per the terms and conditions." },
    ];
    return (
        <section className="section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                </div>
                <div className="faq-container">
                    {faqs.map((faq, index) => <FaqItem key={index} question={faq.question} answer={faq.answer} />)}
                </div>
            </div>
        </section>
    );
};


// --- 12. Footer Section ---
const Footer = () => (
    <footer className="main-footer">
        <div className="container">
            <div className="footer-grid">
                <div>
                    <h3>About ABSLI</h3>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                </div>
                 <div>
                    <h3>Legal</h3>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">IRDAI Registration</a>
                </div>
                 <div>
                    <h3>Products</h3>
                    <a href="#">Term Insurance</a>
                    <a href="#">Health Insurance</a>
                </div>
                 <div>
                    <h3>Follow Us</h3>
                    {/* Social links can be added here */}
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Aditya Birla Sun Life Insurance Company Limited. All rights reserved.</p>
                <p>Disclaimer: This is a sample webpage created for demonstration purposes. Please refer to the official ABSLI website for actual product details.</p>
            </div>
        </div>
    </footer>
);

// --- CSS Styles ---
const GlobalCSS = `
    :root {
      --blue-900: #1e3a8a;
      --blue-800: #1e40af;
      --blue-600: #2563eb;
      --blue-50: #eff6ff;
      --green-800: #065f46;
      --green-600: #16a34a;
      --green-500: #22c55e;
      --green-100: #d1fae5;
      --green-50: #f0fdf4;
      --gray-800: #1f2937;
      --gray-700: #374151;
      --gray-600: #4b5563;
      --gray-500: #6b7280;
      --gray-300: #d1d5db;
      --gray-200: #e5e7eb;
      --gray-100: #f3f4f6;
      --gray-50: #f9fafb;
      --white: #ffffff;
    }
    
    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      line-height: 1.6;
      color: var(--gray-700);
      background-color: var(--white);
    }
    
    .container { width: 90%; max-width: 1200px; margin-left: auto; margin-right: auto; }
    a { text-decoration: none; color: inherit; }
    button { background: none; border: none; cursor: pointer; font-family: inherit; }

    /* --- Sections --- */
    .section-padding { padding: 3rem 0; }
    .section-bg-alt { background-color: var(--blue-50); }
    .section-header { text-align: center; margin-bottom: 2.5rem; }
    .section-title { font-size: 2rem; font-weight: 800; color: var(--blue-900); }
    .section-subtitle { margin-top: 1rem; font-size: 1.125rem; color: var(--gray-600); max-width: 42rem; margin-left: auto; margin-right: auto; }
    
    /* --- Buttons --- */
    .cta-button {
      width: 100%;
      background-color: var(--green-600);
      color: var(--white);
      font-weight: 700;
      padding: 0.75rem 1rem;
      border-radius: 0.375rem;
      transition: background-color 0.2s;
    }
    .cta-button:hover { background-color: #15803d; }
    
    /* --- Header --- */
    .main-header { background-color: var(--white); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 50; }
    .header-content { display: flex; align-items: center; justify-content: space-between; height: 4rem; }
    .header-logo { font-size: 1.5rem; font-weight: 700; color: var(--blue-900); }
    .header-nav { display: none; }
    .header-nav a { font-weight: 500; transition: color 0.2s; }
    .header-nav a:hover { color: var(--blue-600); }
    .header-actions { display: none; }
    .header-call-btn { font-size: 0.875rem; font-weight: 600; background-color: var(--green-100); color: var(--green-800); padding: 0.5rem 1rem; border-radius: 9999px; }
    .header-call-btn.mobile { text-align: center; margin-top: 0.5rem; }
    .header-login-btn { font-size: 0.875rem; font-weight: 500; transition: color 0.2s; }
    .header-login-btn:hover { color: var(--blue-600); }
    .mobile-menu-button-wrapper button { color: var(--gray-700); }
    .mobile-menu-button-wrapper button:hover { color: var(--blue-600); }
    .menu-icon { height: 1.5rem; width: 1.5rem; }
    .mobile-menu { padding: 0.5rem 1rem 1rem 1rem; border-top: 1px solid var(--gray-200); }
    .mobile-menu a { display: block; padding: 0.5rem 0; }

    /* --- Hero Section --- */
    .hero-section { background-color: var(--blue-50); padding: 3rem 0; }
    .hero-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: center; }
    .hero-content { text-align: center; }
    .hero-headline { font-size: 2.25rem; font-weight: 800; color: var(--blue-900); line-height: 1.2; }
    .hero-subheadline { margin-top: 1rem; font-size: 1.125rem; color: var(--gray-600); }
    .hero-benefits { margin-top: 1.5rem; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
    .hero-benefits p { display: flex; align-items: center; }
    .check-icon { width: 1.5rem; height: 1.5rem; color: var(--green-500); margin-right: 0.5rem; }
    .hero-form-card { background-color: var(--white); padding: 2rem; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
    .form-title { font-size: 1.25rem; font-weight: 700; text-align: center; color: var(--blue-900); }
    .form-subtitle { text-align: center; font-size: 0.875rem; color: var(--gray-500); margin-bottom: 1rem; }
    .hero-form { display: flex; flex-direction: column; gap: 1rem; }
    .hero-form label { font-size: 0.875rem; font-weight: 500; color: var(--gray-700); display: block; margin-bottom: 0.25rem; }
    .hero-form input[type="text"], .hero-form input[type="tel"] { width: 100%; padding: 0.75rem; border: 1px solid var(--gray-300); border-radius: 0.375rem; }
    .form-consent { display: flex; align-items: flex-start; }
    .form-consent input { margin-top: 0.25rem; }
    .form-consent label { font-size: 0.875rem; color: var(--gray-600); margin-left: 0.5rem; }
    .form-premium-preview { text-align: center; font-size: 0.875rem; font-weight: 600; color: var(--blue-800); margin-top: 0.5rem; }

    /* --- Product Info --- */
    .product-info-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-top: 2.5rem; }
    .info-card { background-color: var(--gray-50); padding: 1.5rem; border-radius: 0.5rem; }
    .info-card h3 { font-weight: 700; color: var(--blue-800); }
    .info-card p { color: var(--gray-600); }
    .tax-benefit-card { margin-top: 2rem; text-align: center; background-color: var(--green-50); border-left: 4px solid var(--green-500); padding: 1rem; border-radius: 0.375rem; }
    .tax-benefit-card h4 { font-weight: 700; color: #059669; }
    .tax-benefit-card p { color: #047857; }
    
    /* --- Features --- */
    .features-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
    .feature-card { background-color: var(--white); padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
    .feature-icon { width: 2.5rem; height: 2.5rem; color: var(--blue-600); margin-bottom: 1rem; }
    .feature-card h3 { font-size: 1.125rem; font-weight: 700; color: var(--blue-900); }
    .feature-card p { margin-top: 0.5rem; color: var(--gray-600); }

    /* --- How It Works --- */
    .how-it-works-container { margin-top: 2.5rem; position: relative; }
    .how-it-works-line { display: none; }
    .how-it-works-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; text-align: center; position: relative; }
    .step-number { display: flex; align-items: center; justify-content: center; background-color: var(--blue-600); color: var(--white); width: 4rem; height: 4rem; border-radius: 50%; margin: 0 auto 1rem; font-weight: 700; font-size: 1.5rem; }
    .step-card h3 { font-weight: 700; color: var(--blue-900); }
    .step-card p { color: var(--gray-600); }

    /* --- Eligibility --- */
    .eligibility-table-wrapper { margin-top: 2rem; max-width: 42rem; margin-left: auto; margin-right: auto; background-color: var(--white); border-radius: 0.5rem; box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1); overflow: hidden; }
    .eligibility-table { width: 100%; text-align: left; }
    .eligibility-table tr { border-bottom: 1px solid var(--gray-200); }
    .eligibility-table tr:last-child { border-bottom: none; }
    .eligibility-table tr:nth-child(odd) { background-color: var(--gray-50); }
    .eligibility-table td { padding: 1rem 1.5rem; }
    .eligibility-table td:first-child { font-weight: 500; color: var(--gray-800); }

    /* --- Calculator --- */
    .calculator-card { margin-top: 2.5rem; max-width: 56rem; margin-left: auto; margin-right: auto; display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: center; background-color: var(--white); padding: 2rem; border-radius: 0.75rem; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
    .calculator-inputs { display: flex; flex-direction: column; gap: 1.5rem; }
    .calculator-inputs label { font-weight: 500; }
    .age-display { font-weight: 700; color: var(--blue-800); }
    .age-slider { width: 100%; }
    .gender-selector { display: flex; gap: 1rem; margin-top: 0.5rem; }
    .gender-selector button { flex: 1; padding: 0.5rem; border-radius: 0.375rem; background-color: var(--gray-200); }
    .gender-selector button.active { background-color: var(--blue-600); color: var(--white); }
    .coverage-select { width: 100%; margin-top: 0.5rem; padding: 0.5rem; border: 1px solid var(--gray-300); border-radius: 0.375rem; }
    .calculator-result { text-align: center; background-color: var(--blue-50); padding: 2rem; border-radius: 0.5rem; }
    .premium-amount { font-size: 3rem; font-weight: 800; color: var(--blue-900); margin: 0.5rem 0; }
    .premium-disclaimer { font-size: 0.75rem; color: var(--gray-500); }
    .calculator-result .cta-button { margin-top: 1.5rem; }
    
    /* --- Social Proof --- */
    .social-proof-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; text-align: center; }
    .proof-card { background-color: var(--white); padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1); }
    .proof-stat { font-size: 2.25rem; font-weight: 700; color: var(--blue-600); }
    .proof-label { font-weight: 500; color: var(--gray-600); }
    .testimonial-card { margin-top: 3rem; max-width: 42rem; margin-left: auto; margin-right: auto; text-align: center; background-color: var(--white); padding: 2rem; border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
    .testimonial-card p:first-child { font-style: italic; }
    .testimonial-author { margin-top: 1rem; font-weight: 700; color: var(--blue-800); }
    
    /* --- FAQ --- */
    .faq-container { margin-top: 2rem; max-width: 48rem; margin-left: auto; margin-right: auto; }
    .faq-item { border-bottom: 1px solid var(--gray-200); padding: 1rem 0; }
    .faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; text-align: left; font-size: 1.125rem; font-weight: 500; color: var(--gray-800); }
    .faq-icon { width: 1.5rem; height: 1.5rem; transition: transform 0.2s; }
    .faq-icon.open { transform: rotate(180deg); }
    .faq-answer { margin-top: 0.5rem; color: var(--gray-600); padding-right: 2rem; }
    
    /* --- Footer --- */
    .main-footer { background-color: var(--blue-900); color: var(--white); padding: 3rem 0; }
    .footer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
    .footer-grid h3 { font-weight: 700; margin-bottom: 1rem; }
    .footer-grid a { display: block; color: #93c5fd; font-size: 0.875rem; margin-bottom: 0.5rem; transition: color 0.2s; }
    .footer-grid a:hover { color: var(--white); }
    .footer-bottom { margin-top: 2rem; border-top: 1px solid var(--blue-800); padding-top: 1.5rem; text-align: center; font-size: 0.875rem; color: #60a5fa; }
    .footer-bottom p:last-child { margin-top: 0.5rem; }

    /* --- Responsive Tablet --- */
    @media (min-width: 768px) {
      .mobile-menu-button-wrapper, .mobile-menu { display: none; }
      .header-nav { display: flex; gap: 2rem; }
      .header-actions { display: flex; align-items: center; gap: 1rem; }
      .product-info-grid { grid-template-columns: repeat(3, 1fr); }
      .features-grid { grid-template-columns: repeat(2, 1fr); }
      .how-it-works-grid { grid-template-columns: repeat(3, 1fr); }
      .how-it-works-line { display: block; position: absolute; top: 2rem; left: 0; width: 100%; height: 2px; background-color: var(--gray-300); transform: translateY(-50%); }
      .social-proof-grid { grid-template-columns: repeat(3, 1fr); }
      .footer-grid { grid-template-columns: repeat(4, 1fr); }
    }
    
    /* --- Responsive Desktop --- */
    @media (min-width: 1024px) {
        .hero-grid { grid-template-columns: 1fr 1fr; }
        .hero-content { text-align: left; }
        .hero-benefits { align-items: flex-start; }
        .features-grid { grid-template-columns: repeat(3, 1fr); }
        .calculator-card { grid-template-columns: 1fr 1fr; }
    }
`;

// --- Main App Component ---
export default function App() {
  return (
    <div>
      <style>{GlobalCSS}</style>
      <Header />
      <main>
        <HeroSection />
        <ProductInfoSection />
        <KeyFeaturesSection />
        <HowItWorksSection />
        <EligibilityCriteriaSection />
        <PremiumCalculatorSection />
        <SocialProofSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

