


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';
import Footer from '../page/Footer';
import InsuranceInfo  from './InsuranceInfo';
import Testimonial from './Testimonial';
import Login from '../Auth/Login';
import BookAppointment from '../Appointments/BookAppointment';


const ApolloHomepage = () => {

   const navigate = useNavigate();
  // Hero carousel state
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const heroSlides = [
    {
      title: "Get Health Insurance With Full Coverage",
      subtitle: "Find Plans With Complete Health Security",
      cta: "Explore Plans",
      bgGradient: "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)"
    },
    {
      title: "Beat Diabetes with Apollo",
      subtitle: "Start your journey to better health today",
      cta: "Start Now",
      bgGradient: "linear-gradient(135deg, #0f9b0f, #1a2a6c)"
    },
    {
      title: "24/7 Doctor Consultations",
      subtitle: "Talk to specialists anytime, anywhere",
      cta: "Book Now",
      bgGradient: "linear-gradient(135deg, #b21f1f, #1a2a6c)"
    }
  ];

  // Testimonials carousel state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      quote: "Apollo 24/7 saved me during an emergency. The doctor was available instantly!",
      author: "Rahul Sharma, Delhi"
    },
    {
      quote: "Medicine delivery in 2 hours is a lifesaver. Highly recommended!",
      author: "Priya Patel, Mumbai"
    },
    {
      quote: "The diabetes reversal program changed my life. Lost 12kg in 3 months!",
      author: "Anil Gupta, Bangalore"
    }
  ];

  // Auto-rotate hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Auto-rotate testimonials carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };
  const handleLoginClick = () => {
    navigate('/login'); // ✅ Navigate to the Login page
  };
  const handleDoctorClick = () => {
  navigate('/book'); // ✅ Navigate to BookAppointment page
};

  const handlemedicineclick = () => {
    navigate('/buy-medicine');
  };

  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="apollo-homepage">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Apollo 24|7</div>
        <nav className="nav-links">
          <a href="#" onClick={handlemedicineclick}>Buy Medicines</a>
          <a href="#"  onClick={handleDoctorClick}>Find Doctors</a>
          <a href="#">Lab Tests</a>
          <a href="#">Circle Membership</a>
          <a href="#">Health Records</a>
          <a href="#">Diabetes Reversal</a>
          <a href="#">Buy Insurance</a>
        </nav>
        <button className="login-btn">
          <span className="login-icon" onClick={handleLoginClick}>👤</span> Login
        </button>
      </header>
      


      {/* Hero Banner Carousel */}
      <section 
        className="hero-banner" 
        style={{ background: heroSlides[currentHeroSlide].bgGradient }}
      >
        <div className="hero-content">
          <h1>{heroSlides[currentHeroSlide].title}</h1>
          <p>{heroSlides[currentHeroSlide].subtitle}</p>
          <button className="explore-btn">{heroSlides[currentHeroSlide].cta}</button>
        </div>
        <div className="hero-image">
          <div className="family-illustration">👨‍👩‍👧‍👦</div>
        </div>
        <button className="carousel-btn left" onClick={prevHeroSlide}>‹</button>
        <button className="carousel-btn right" onClick={nextHeroSlide}>›</button>
        <div className="carousel-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentHeroSlide ? 'active' : ''}`}
              onClick={() => setCurrentHeroSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="service-cards">
        <div className="card card-medicine" onClick={handlemedicineclick}>
          <div className="card-icon" >💊</div>
          <h3>Buy Medicines & Essentials</h3>
          <p>2HRS DELIVERY</p>
        </div>
        <div className="card card-doctor" onClick={handleDoctorClick}>
          <div className="card-icon" >👨‍⚕️</div>
          <h3>Doctor Appointment</h3>
          <p>BOOK NOW</p>
        </div>
        <div className="card card-lab">
          <div className="card-icon">🧪</div>
          <h3>Lab Tests</h3>
          <p>AT HOME</p>
        </div>
        <div className="card card-insurance">
          <div className="card-icon">🛡️</div>
          <h3>Health Insurance</h3>
          <p>EXPLORE PLANS</p>
        </div>
      </section>

      {/* Testimonials Carousel */}
      

      {/* Ask Apollo Section */}
      <section className="ask-apollo">
        <div className="ask-content">
          <h2>Ask anything about your health.</h2>
          <p>Get trusted answers directly from Apollo.</p>
          <button className="ask-btn">Ask Apollo[beta]</button>
        </div>
      </section>
      <InsuranceInfo/>
      <Testimonial/>
      <Footer /> 
    </div>
  );
};

export default ApolloHomepage;