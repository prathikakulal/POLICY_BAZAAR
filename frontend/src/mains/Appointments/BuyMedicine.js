// import React from 'react';

// // --- Helper Data (for demonstration purposes) ---
// const categories = [
//   { name: 'Medicines', icon: '💊' },
//   { name: 'Personal Care', icon: '🧴' },
//   { name: 'Wellness', icon: '🧘' },
//   { name: 'Medical Devices', icon: '🩺' },
//   { name: 'Daily Essentials', icon: '🛒' },
// ];

// const topSellers = [
//   { id: 1, name: 'Paracetamol 500mg', price: '₹30.50', image: 'https://placehold.co/300x300/e0f2fe/333?text=Paracetamol' },
//   { id: 2, name: 'Dettol Antiseptic', price: '₹120.00', image: 'https://placehold.co/300x300/e0f2fe/333?text=Dettol' },
//   { id: 3, name: 'Accu-Chek BP Monitor', price: '₹1500.00', image: 'https://placehold.co/300x300/e0f2fe/333?text=BP+Monitor' },
//   { id: 4, name: 'N95 Face Mask Pack', price: '₹250.00', image: 'https://placehold.co/300x300/e0f2fe/333?text=N95+Mask' },
//   { id: 5, name: 'Revital H Capsules', price: '₹310.00', image: 'https://placehold.co/300x300/e0f2fe/333?text=Revital+H' },
//   { id: 6, name: 'Cetirizine Tablets', price: '₹55.00', image: 'https://placehold.co/300x300/e0f2fe/333?text=Cetirizine' },
// ];

// const whyChooseUsData = [
//     { title: 'Licensed Pharmacies', description: 'All medicines are sourced from trusted and licensed partners.' },
//     { title: 'Genuine Medicines', description: '100% genuine medicines and healthcare products.' },
//     { title: '24/7 Customer Support', description: 'Our support team is available around the clock to help you.' },
//     { title: 'Secure Payments', description: 'Your data is private and all payments are processed securely.' },
// ];

// // --- SVG Icons ---
// const SearchIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//     </svg>
// );

// const UploadIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
//     </svg>
// );


// // --- Reusable Components ---
// const Section = ({ title, children, className = '' }) => (
//     <section className={`py-12 md:py-16 ${className}`}>
//         <div className="container mx-auto px-4">
//             {title && <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{title}</h2>}
//             {children}
//         </div>
//     </section>
// );

// // --- Core Components ---

// const HeroSection = () => (
//     <div className="bg-sky-50">
//         <div className="container mx-auto px-4 py-16 md:py-24">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//                 <div className="md:w-1/2 text-center md:text-left">
//                     <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
//                         Buy Medicines & Essentials in <span className="text-sky-500">2 Hours</span>
//                     </h1>
//                     <p className="mt-4 text-lg text-gray-600">
//                         Fast, reliable delivery at your doorstep. Your trusted pharmacy partner for all your health needs.
//                     </p>
//                     <button className="mt-8 bg-sky-500 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-600 transition-all duration-300 shadow-lg">
//                         Shop Now
//                     </button>
//                 </div>
//                 <div className="md:w-1/2 mt-8 md:mt-0">
//                     <img src="https://placehold.co/600x400/e0f2fe/3b82f6?text=Fast+Delivery" alt="Medicine Delivery" className="rounded-lg shadow-2xl" />
//                 </div>
//             </div>
//         </div>
//     </div>
// );

// const SearchBar = () => (
//     <div className="bg-white rounded-full shadow-lg p-2 max-w-2xl mx-auto -mt-8 relative z-10">
//         <div className="flex items-center">
//             <input
//                 type="text"
//                 placeholder="Search for medicines, brands, and more..."
//                 className="w-full bg-transparent p-3 text-gray-700 focus:outline-none"
//             />
//             <button className="bg-sky-500 text-white rounded-full p-3 hover:bg-sky-600 transition-all">
//                 <SearchIcon />
//             </button>
//         </div>
//     </div>
// );

// const CategoriesSection = () => (
//     <Section title="Shop by Category" className="bg-gray-50">
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//             {categories.map((category) => (
//                 <div key={category.name} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
//                     <span className="text-4xl mb-3">{category.icon}</span>
//                     <h3 className="font-semibold text-gray-700">{category.name}</h3>
//                 </div>
//             ))}
//         </div>
//     </Section>
// );

// const PromotionsSection = () => (
//     <Section>
//         <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-gradient-to-r from-teal-400 to-blue-500 text-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-start">
//                 <h3 className="text-2xl font-bold">Flat 20% Off</h3>
//                 <p className="mt-2">On your first order. Use code: <span className="font-bold bg-white text-teal-500 px-2 py-1 rounded">FIRST20</span></p>
//             </div>
//             <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-start">
//                 <h3 className="text-2xl font-bold">Free Delivery</h3>
//                 <p className="mt-2">On all orders above ₹499. No coupon required!</p>
//             </div>
//         </div>
//     </Section>
// );

// const TopSellersSection = () => (
//     <Section title="Top-Selling Products" className="bg-gray-50">
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
//             {topSellers.map((product) => (
//                 <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
//                     <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
//                     <div className="p-4">
//                         <h4 className="font-semibold text-gray-800 truncate">{product.name}</h4>
//                         <p className="text-lg font-bold text-sky-500 mt-1">{product.price}</p>
//                         <button className="mt-3 w-full bg-sky-100 text-sky-600 font-bold py-2 rounded-lg hover:bg-sky-500 hover:text-white transition-all duration-300">
//                             Add to Cart
//                         </button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </Section>
// );

// const DeliveryAssurance = () => (
//     <Section>
//         <div className="bg-sky-100 border-l-4 border-sky-500 text-sky-800 p-8 rounded-lg text-center">
//             <h2 className="text-3xl font-bold">2-Hour Guaranteed Delivery</h2>
//             <p className="mt-4 text-lg">Real-time order tracking • Partnered with nearby pharmacies • Trusted delivery network</p>
//         </div>
//     </Section>
// );

// const WhyChooseUs = () => (
//     <Section title="Why Choose Us?" className="bg-gray-50">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {whyChooseUsData.map((item) => (
//                  <div key={item.title} className="bg-white p-6 rounded-lg shadow-md text-center">
//                      <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>
//                      <p className="mt-2 text-gray-600">{item.description}</p>
//                  </div>
//             ))}
//         </div>
//     </Section>
// );

// const PrescriptionUpload = () => (
//     <Section>
//         <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold text-gray-800">Have a Prescription?</h2>
//             <p className="mt-3 text-gray-600">Upload your prescription to order medicines that require a doctor's note. It's fast, easy, and secure.</p>
//             <button className="mt-6 bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg inline-flex items-center">
//                 <UploadIcon />
//                 Upload Prescription
//             </button>
//         </div>
//     </Section>
// );

// const Footer = () => (
//     <footer className="bg-gray-800 text-white">
//         <div className="container mx-auto px-4 py-12">
//             <div className="grid md:grid-cols-4 gap-8">
//                 <div>
//                     <h4 className="font-bold text-lg mb-4">Quick Links</h4>
//                     <ul>
//                         <li className="mb-2"><a href="#" className="hover:text-sky-400">About Us</a></li>
//                         <li className="mb-2"><a href="#" className="hover:text-sky-400">Contact</a></li>
//                         <li className="mb-2"><a href="#" className="hover:text-sky-400">Terms & Conditions</a></li>
//                         <li className="mb-2"><a href="#" className="hover:text-sky-400">Privacy Policy</a></li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h4 className="font-bold text-lg mb-4">Customer Support</h4>
//                     <p>support@yourpharmacy.com</p>
//                     <p>+91 12345 67890</p>
//                 </div>
//                  <div>
//                     <h4 className="font-bold text-lg mb-4">Download Our App</h4>
//                     <div className="flex space-x-2">
//                          <img src="https://placehold.co/120x40?text=Google+Play" alt="Google Play" className="cursor-pointer"/>
//                          <img src="https://placehold.co/120x40?text=App+Store" alt="App Store" className="cursor-pointer"/>
//                     </div>
//                 </div>
//                 <div>
//                     <h4 className="font-bold text-lg mb-4">Secure Payments</h4>
//                     <p className="text-gray-400">100% Secure and trusted payment gateways.</p>
//                 </div>
//             </div>
//             <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
//                 <p>&copy; 2024 Your Pharmacy. All Rights Reserved.</p>
//             </div>
//         </div>
//     </footer>
// );


// export default function App() {
//   return (
//     <div className="font-sans bg-white">
//       <HeroSection />
//       <SearchBar />
//       <CategoriesSection />
//       <PromotionsSection />
//       <TopSellersSection />
//       <DeliveryAssurance />
//       <PrescriptionUpload />
//       <WhyChooseUs />
//       <Footer />
//     </div>
//   );
// }



import React, { useState } from "react";

// Dummy product data
const products = [
  { id: 1, name: "Paracetamol 500mg", price: "₹50", category: "Medicines" },
  { id: 2, name: "Hand Sanitizer 100ml", price: "₹99", category: "Essentials" },
  { id: 3, name: "Vitamin C Tablets", price: "₹150", category: "Wellness" },
  { id: 4, name: "BP Monitor Digital", price: "₹1299", category: "Devices" },
  { id: 5, name: "Face Masks (Pack of 10)", price: "₹199", category: "Essentials" },
  { id: 6, name: "Ibuprofen 400mg", price: "₹85", category: "Medicines" },
];

export default function MedicineDeliveryPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="medicine-delivery-page">
      <style jsx>{`
        .medicine-delivery-page {
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          min-height: 100vh;
        }
        
        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #0d9488 0%, #059669 100%);
          color: white;
          padding: 4rem 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }
        
        .shop-now-btn {
          background: white;
          color: #0d9488;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        .shop-now-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.25);
        }
        
        /* Search Section */
        .search-section {
          padding: 2rem 1.5rem;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }
        
        .search-input {
          width: 100%;
          max-width: 600px;
          padding: 1rem 1.5rem;
          border: 2px solid #e2e8f0;
          border-radius: 50px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #0d9488;
          box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);
        }
        
        /* Categories Section */
        .categories-section {
          padding: 4rem 1.5rem;
        }
        
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .category-card {
          background: white;
          padding: 2rem 1rem;
          border-radius: 16px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          border: 1px solid #f1f5f9;
        }
        
        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        /* Offers Section */
        .offers-section {
          padding: 3rem 1.5rem;
          background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
          text-align: center;
        }
        
        .offers-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #065f46;
          margin-bottom: 1.5rem;
        }
        
        .offer-text {
          font-size: 1.1rem;
          color: #047857;
          margin: 0.5rem 0;
        }
        
        /* Products Section */
        .products-section {
          padding: 4rem 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .product-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          border: 1px solid #f1f5f9;
        }
        
        .product-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        .product-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }
        
        .product-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0d9488;
          margin-bottom: 1rem;
        }
        
        .add-to-cart-btn {
          background: linear-gradient(135deg, #0d9488 0%, #059669 100%);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }
        
        .add-to-cart-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(13, 148, 136, 0.3);
        }
        
        /* Why Choose Us Section */
        .features-section {
          padding: 4rem 1.5rem;
          background: linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%);
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .feature-card {
          background: white;
          padding: 2rem 1.5rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        /* Prescription Section */
        .prescription-section {
          padding: 4rem 1.5rem;
          background: white;
          text-align: center;
        }
        
        .prescription-upload {
          margin: 1.5rem auto;
          padding: 1rem;
          border: 2px dashed #cbd5e1;
          border-radius: 12px;
          background: #f8fafc;
          cursor: pointer;
          transition: all 0.3s ease;
          max-width: 400px;
        }
        
        .prescription-upload:hover {
          border-color: #0d9488;
          background: #f0fdfa;
        }
        
        /* Cart Section */
        .cart-section {
          padding: 3rem 1.5rem;
          background: white;
          max-width: 800px;
          margin: 0 auto;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          margin-bottom: 2rem;
        }
        
        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .checkout-btn {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          margin-top: 1.5rem;
        }
        
        .checkout-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(5, 150, 105, 0.3);
        }
        
        /* Footer */
        .footer {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: #cbd5e1;
          padding: 3rem 1.5rem;
          text-align: center;
        }
        
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 1rem;
        }
        
        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-link:hover {
          color: white;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .section-title {
            font-size: 1.5rem;
          }
          
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>

      {/* ================= Hero Section ================= */}
      <section className="hero-section">
        <h1 className="hero-title">Buy Medicines & Essentials in 2 Hours</h1>
        <p className="hero-subtitle">Fast, reliable delivery at your doorstep. Trusted pharmacy partner.</p>
        <button className="shop-now-btn">Shop Now</button>
      </section>

      {/* ================= Search Bar ================= */}
      <section className="search-section">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            type="text"
            placeholder="🔍 Search for medicines, brands, or essentials..."
            className="search-input"
          />
        </div>
      </section>

      {/* ================= Categories ================= */}
      <section className="categories-section">
        <h2 className="section-title">Shop by Categories</h2>
        <div className="categories-grid">
          {["💊 Medicines", "🌟 Wellness", "🧴 Personal Care", "🩺 Medical Devices", "🏠 Daily Essentials", "❤️ Health Conditions"].map((cat) => (
            <div key={cat} className="category-card">
              <p style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0d9488' }}>{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Offers ================= */}
      <section className="offers-section">
        <h2 className="offers-title">🎁 Special Offers</h2>
        <p className="offer-text">💊 Flat 20% off on First Order</p>
        <p className="offer-text">🚚 Free Delivery Above ₹499</p>
        <p className="offer-text">⭐ Extra 10% off on Wellness Products</p>
      </section>

      {/* ================= Products ================= */}
      <section className="products-section">
        <h2 className="section-title">Top-Selling Products</h2>
        <div className="products-grid">
          {products.map((item) => (
            <div key={item.id} className="product-card">
              <h3 className="product-name">{item.name}</h3>
              <p className="product-price">{item.price}</p>
              <button
                onClick={() => addToCart(item)}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Express Delivery Info ================= */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          {[
            "🚚 2Hrs Fast Delivery",
            "✅ 100% Genuine Medicines",
            "🏥 Trusted Pharmacies",
            "🔒 Secure Payments",
            "💊 Licensed Partners",
            "📞 24/7 Support",
            "🛡️ Data Privacy",
            "💳 Easy Returns"
          ].map((point) => (
            <div key={point} className="feature-card">
              <p style={{ fontWeight: '600', color: '#0d9488' }}>{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Prescription Upload ================= */}
      <section className="prescription-section">
        <h2 className="section-title">Need a Prescription?</h2>
        <div className="prescription-upload">
          <p style={{ color: '#64748b', marginBottom: '0.5rem' }}>📁 Click to upload prescription</p>
          <input type="file" style={{ display: 'none' }} id="prescription-upload" />
          <label htmlFor="prescription-upload" style={{ color: '#0d9488', cursor: 'pointer', fontWeight: '600' }}>
            Choose File
          </label>
        </div>
        <p style={{ color: '#64748b', maxWidth: '500px', margin: '0 auto' }}>
          Upload your doctor's prescription for restricted medicines. We verify all prescriptions for your safety.
        </p>
      </section>

      {/* ================= Cart ================= */}
      <section className="cart-section">
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '1.5rem' }}>
          🛒 Your Cart ({cart.length} items)
        </h2>
        {cart.length === 0 ? (
          <p style={{ color: '#64748b', textAlign: 'center', padding: '2rem' }}>Your cart is empty. Add some products!</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <span style={{ fontWeight: '500' }}>{item.name}</span>
                <span style={{ fontWeight: '600', color: '#0d9488' }}>{item.price}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', paddingTop: '1rem', borderTop: '2px solid #e2e8f0' }}>
              <span style={{ fontWeight: '700' }}>Total:</span>
              <span style={{ fontWeight: '700', color: '#059669', fontSize: '1.2rem' }}>
                ₹{cart.reduce((total, item) => total + parseInt(item.price.replace('₹', '')), 0)}
              </span>
            </div>
          </div>
        )}
        <button className="checkout-btn" disabled={cart.length === 0}>
          {cart.length === 0 ? 'Cart Empty' : 'Proceed to Checkout'}
        </button>
      </section>

      {/* ================= Footer ================= */}
      <footer className="footer">
        <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'white', marginBottom: '1rem' }}>
          © 2025 HealthKart Pharmacy
        </p>
        <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
          Your trusted partner for genuine medicines and fast delivery
        </p>
        <div className="footer-links">
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <a href="#terms" className="footer-link">Terms & Conditions</a>
          <a href="#contact" className="footer-link">Contact Us</a>
          <a href="#about" className="footer-link">About Us</a>
        </div>
      </footer>
    </div>
  );
}