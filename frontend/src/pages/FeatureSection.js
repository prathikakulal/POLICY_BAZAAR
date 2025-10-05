import React from 'react';
import './FeatureSection.css';

// SVG Icons
const MoneyBagIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="#667eea"/>
    <path d="M15.87 8.79C15.28 8.93 14.65 9 14 9C12.47 9 11.04 8.58 9.79 7.85C9.5 7.67 9.22 7.47 8.95 7.26C8.68 7.05 8.42 6.82 8.18 6.58L7.21 5.59C6.81 5.19 6.17 5.19 5.77 5.59L3.46 7.9C3.07 8.29 3.07 8.92 3.46 9.31L5.17 11.02C5.57 11.42 6.21 11.42 6.61 11.02L7.58 10.05C7.82 10.29 8.08 10.52 8.35 10.73C8.62 10.94 8.9 11.14 9.19 11.32C7.94 12.05 6.51 12.47 4.98 12.47C4.33 12.47 3.7 12.4 3.11 12.26C2.5 12.11 2 11.57 2 10.94V8.91C2 8.29 2.46 7.77 3.07 7.65C3.22 7.62 3.38 7.6 3.54 7.58C3.7 7.56 3.86 7.55 4.02 7.55C5.55 7.55 7.04 7.97 8.29 8.7C8.58 8.88 8.86 9.08 9.13 9.29C9.4 9.5 9.66 9.73 9.9 9.97L10.87 10.96C11.27 11.36 11.91 11.36 12.31 10.96L14.62 8.65C15.01 8.26 15.01 7.63 14.62 7.24L12.91 5.53C12.51 5.13 11.87 5.13 11.47 5.53L10.5 6.5C10.26 6.26 10 6.03 9.73 5.82C9.46 5.61 9.18 5.41 8.89 5.23C10.14 4.5 11.57 4.08 13.1 4.08C13.75 4.08 14.38 4.15 14.97 4.29C15.58 4.44 16.08 4.98 16.08 5.61V7.64C16.08 8.26 15.62 8.78 15.01 8.9L15.87 8.79Z" fill="#667eea"/>
    <path d="M19 13C16.24 13 14 15.24 14 18C14 20.76 16.24 23 19 23C21.76 23 24 20.76 24 18C24 15.24 21.76 13 19 13ZM19 21C17.34 21 16 19.66 16 18C16 16.34 17.34 15 19 15C20.66 15 22 16.34 22 18C22 19.66 20.66 21 19 21Z" fill="#667eea"/>
  </svg>
);

const AwardIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5H17V3H7V5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H7V21H17V19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z" fill="#764ba2"/>
    <path d="M12 9C10.34 9 9 7.66 9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6C15 7.66 13.66 9 12 9ZM12 5C11.45 5 11 5.45 11 6C11 6.55 11.45 7 12 7C13.1 7 14 6.1 14 5H12Z" fill="#764ba2"/>
  </svg>
);

const StopwatchIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 1H9V3H15V1Z" fill="#667eea"/>
    <path d="M11 14H13V8H11V14Z" fill="#667eea"/>
    <path d="M17.03 7.39L18.45 5.97C18.04 5.46 17.57 4.99 17.06 4.58L15.64 6C14.12 4.74 12.14 4 10 4C5.03 4 1 8.03 1 13C1 17.97 5.02 22 10 22C14.98 22 19 17.97 19 13C19 10.86 18.26 8.88 17.03 7.39ZM10 20C6.14 20 3 16.86 3 13C3 9.14 6.14 6 10 6C13.86 6 17 9.14 17 13C17 16.86 13.86 20 10 20Z" fill="#667eea"/>
  </svg>
);

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      title: "Affordable options",
      icon: <MoneyBagIcon />,
      description: "We help you find health insurance plans with affordable premiums, uncover discounts and monthly payment options provided by our Insurance partners."
    },
    {
      id: 2,
      title: "Platinum insurance partner",
      icon: <AwardIcon />,
      description: "Policybazaar is one of the largest partners for most health insurance companies. Our dedicated claims team works with the insurance companies to help you answer insurer queries and track your claim settlement."
    },
    {
      id: 3,
      title: "30 minute claim support*",
      icon: <StopwatchIcon />,
      description: "A dedicated specialist will reach your hospital or home in 30 minutes to help you start the claim process by organizing your documents and answering your queries."
    }
  ];

  return (
    <section className="feature-section">
      <div className="feature-container">
        {/* Main Heading */}
        <div className="heading-section">
          <h1 className="main-heading">
            Why Policybazaar is the preferred choice for <span className="highlight">55 Lakh+ people like you</span>
          </h1>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`feature-card ${index === 2 ? 'full-width' : ''}`}
            >
              <div className="card-content">
                <div className="icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;