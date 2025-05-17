// import React from 'react';
// import './InsuranceInfo.css';

// const InsuranceInfo = () => {
//   return (
//     <section className="ins-info-section">
//       <div className="ins-info-container">
//         <h2 className="ins-info-title">Insurance</h2>
//         <p className="ins-info-description">
//           Get access to all your Health insurance services - View Policy, Initiate and Track Claims, 
//           Go Cashless with network hospitals and intimate Hospitalization
//         </p>
        
//         <div className="ins-info-features">
//           <div className="ins-info-feature">
//             <div className="ins-info-icon">📋</div>
//             <div className="ins-info-content">
//               <h3 className="ins-info-feature-title">E-Card</h3>
//               <p className="ins-info-feature-desc">Get e-cards for you and your family members</p>
//             </div>
//           </div>
          
//           <div className="ins-info-feature">
//             <div className="ins-info-icon">📊</div>
//             <div className="ins-info-content">
//               <h3 className="ins-info-feature-title">Claims</h3>
//               <p className="ins-info-feature-desc">Track your claims in real-time</p>
//             </div>
//           </div>
          
//           <div className="ins-info-feature">
//             <div className="ins-info-icon">🏥</div>
//             <div className="ins-info-content">
//               <h3 className="ins-info-feature-title">Network Hospitals</h3>
//               <p className="ins-info-feature-desc">Search for the nearest Network hospital to go cashless</p>
//             </div>
//           </div>
          
//           <div className="ins-info-feature">
//             <div className="ins-info-icon">➕</div>
//             <div className="ins-info-content">
//               <h3 className="ins-info-feature-title">Empanel Hospitals</h3>
//               <p className="ins-info-feature-desc">Become a part of Network Hospitals</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InsuranceInfo;


import React from 'react';
import './InsuranceInfo.css';

const InsuranceInfo = () => {
  return (
    <section className="ins-info-section">
      <div className="ins-info-container">
        <div className="ins-info-header">
          <div className="ins-info-header-content">
            <h2 className="ins-info-title">Insurance</h2>
            <p className="ins-info-description">
              Get access to all your Health insurance services - View Policy, Initiate and Track Claims, 
              Go Cashless with network hospitals and intimate Hospitalization
            </p>
          </div>
        </div>
        
        <div className="ins-info-features">
          <div className="ins-info-feature">
            <div className="ins-info-icon">📋</div>
            <div className="ins-info-content">
              <h3 className="ins-info-feature-title">E-Card</h3>
              <p className="ins-info-feature-desc">Get e-cards for you and your family members</p>
            </div>
          </div>
          
          <div className="ins-info-feature">
            <div className="ins-info-icon">📊</div>
            <div className="ins-info-content">
              <h3 className="ins-info-feature-title">Claims</h3>
              <p className="ins-info-feature-desc">Track your claims in real-time</p>
            </div>
          </div>
          
          <div className="ins-info-feature">
            <div className="ins-info-icon">🏥</div>
            <div className="ins-info-content">
              <h3 className="ins-info-feature-title">Network Hospitals</h3>
              <p className="ins-info-feature-desc">Search for the nearest Network hospital to go cashless</p>
            </div>
          </div>
          
          <div className="ins-info-feature">
            <div className="ins-info-icon">➕</div>
            <div className="ins-info-content">
              <h3 className="ins-info-feature-title">Empanel Hospitals</h3>
              <p className="ins-info-feature-desc">Become a part of Network Hospitals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceInfo;