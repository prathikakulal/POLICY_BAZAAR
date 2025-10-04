import React, { useState, useEffect } from 'react';

// Payment Page Component
const PaymentPage = ({ planDetails, onBack, onPaymentComplete }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('netbanking');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  });
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 39); // 14 minutes 39 seconds

  // Timer countdown
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCardInputChange = (field, value) => {
    setCardDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePayment = () => {
    // Validate card details
    if (!cardDetails.cardNumber || !cardDetails.cardName || !cardDetails.expiryMonth || 
        !cardDetails.expiryYear || !cardDetails.cvv) {
      alert('Please fill all card details');
      return;
    }

    // Process payment
    alert('Payment processing...');
    if (onPaymentComplete) {
      onPaymentComplete();
    }
  };

  // Calculate premium amounts based on plan details
  const calculatePremiums = () => {
    if (!planDetails) {
      return {
        firstYearPremium: 22694,
        totalPremium: 2624,
        maxRecurringAmount: 26703,
        secondYearPremium: 26699,
        savings: 4005,
        savingsPercentage: 15
      };
    }

    // Use the actual premium values from plan details
    return {
      firstYearPremium: planDetails.firstYearPremium || 22694,
      totalPremium: planDetails.totalPremium || 2624,
      maxRecurringAmount: planDetails.maxRecurringAmount || 26703,
      secondYearPremium: planDetails.secondYearPremium || 26699,
      savings: planDetails.savings || 4005,
      savingsPercentage: planDetails.savingsPercentage || 15
    };
  };

  const premiums = calculatePremiums();

  return (
    <div className="payment-page-container">
      <style>{`
        .payment-page-container {
          max-width: 800px;
          margin: 20px auto;
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          font-family: 'Roboto', sans-serif;
        }
        
        .payment-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
          margin-bottom: 20px;
        }
        
        .payment-logo {
          font-size: 24px;
          font-weight: bold;
          color: #2c3e50;
        }
        
        .payment-status {
          display: flex;
          gap: 20px;
        }
        
        .payment-mode, .payment-complete {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #666;
        }
        
        .payment-mode .icon, .payment-complete .icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
        }
        
        .payment-mode .icon {
          background-color: #4CAF50;
        }
        
        .payment-complete .icon {
          background-color: #ddd;
        }
        
        .payment-methods {
          margin-bottom: 30px;
        }
        
        .payment-methods h2 {
          font-size: 18px;
          margin-bottom: 10px;
          color: #2c3e50;
        }
        
        .payment-options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .payment-option {
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 15px;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .payment-option.active {
          border-color: #4CAF50;
          background-color: #f9f9f9;
        }
        
        .payment-option h3 {
          font-size: 16px;
          margin-bottom: 5px;
          color: #2c3e50;
        }
        
        .payment-option p {
          font-size: 12px;
          color: #666;
        }
        
        .card-details {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 4px;
          margin-bottom: 20px;
        }
        
        .form-group {
          margin-bottom: 15px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-size: 14px;
          color: #555;
        }
        
        .form-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        
        .pay-now-btn {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 12px 20px;
          font-size: 16px;
          border-radius: 4px;
          cursor: pointer;
          width: 100%;
          margin-bottom: 20px;
          transition: background-color 0.3s;
        }
        
        .pay-now-btn:hover {
          background-color: #45a049;
        }
        
        .session-expiry {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          margin-bottom: 20px;
        }
        
        .timer {
          font-weight: bold;
          color: #e74c3c;
        }
        
        .order-details {
          margin-bottom: 30px;
        }
        
        .order-number {
          font-size: 16px;
          margin-bottom: 15px;
          color: #2c3e50;
        }
        
        .premium-details {
          background-color: #f9f9f9;
          padding: 15px;
          border-radius: 4px;
          margin-bottom: 15px;
        }
        
        .premium-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
        }
        
        .premium-row:last-child {
          border-bottom: none;
        }
        
        .pay-frequency {
          margin-bottom: 20px;
        }
        
        .pay-frequency h3 {
          font-size: 16px;
          margin-bottom: 10px;
          color: #2c3e50;
        }
        
        .frequency-tag {
          display: inline-block;
          background-color: #e1f5fe;
          color: #0288d1;
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 14px;
        }
        
        .plan-details {
          margin-bottom: 20px;
        }
        
        .plan-details h3 {
          font-size: 16px;
          margin-bottom: 10px;
          color: #2c3e50;
        }
        
        .savings {
          color: #4CAF50;
          font-weight: bold;
          margin-top: 10px;
        }
        
        .proposer-details {
          margin-bottom: 20px;
        }
        
        .proposer-details h3 {
          font-size: 16px;
          margin-bottom: 10px;
          color: #2c3e50;
        }
        
        .proposer-placeholder {
          height: 100px;
          background-color: #f9f9f9;
          border: 1px dashed #ddd;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #999;
        }
        
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          padding-top: 20px;
          border-top: 1px solid #eee;
          font-size: 14px;
          color: #666;
        }
        
        .footer-links a {
          color: #3498db;
          text-decoration: none;
        }
        
        .footer-links a:hover {
          text-decoration: underline;
        }
        
        .back-button {
          padding: 8px 16px;
          background: #6c757d;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          margin-bottom: 15px;
        }
      `}</style>

      <button className="back-button" onClick={onBack}>← Back to Plan Details</button>

      <div className="payment-header">
        <div className="payment-logo">policy bazaar</div>
        <div className="payment-status">
          <div className="payment-mode">
            <div className="icon">✓</div>
            Payment Mode
          </div>
          <div className="payment-complete">
            <div className="icon">2</div>
            Payment Complete
          </div>
        </div>
      </div>
      
      <div className="payment-methods">
        <h2>NetBanking</h2>
        <p>Enter your Debit Card details</p>
        
        <div className="payment-options">
          <div 
            className={`payment-option ${selectedPaymentMethod === 'netbanking' ? 'active' : ''}`}
            onClick={() => setSelectedPaymentMethod('netbanking')}
          >
            <h3>UP!</h3>
            <p>Debit Card Number</p>
          </div>
          <div 
            className={`payment-option ${selectedPaymentMethod === 'creditcard' ? 'active' : ''}`}
            onClick={() => setSelectedPaymentMethod('creditcard')}
          >
            <h3>Credit Card</h3>
            <p>Enter Your Name</p>
          </div>
          <div 
            className={`payment-option ${selectedPaymentMethod === 'debitcard' ? 'active' : ''}`}
            onClick={() => setSelectedPaymentMethod('debitcard')}
          >
            <h3>Debit Card</h3>
            <p>As mentioned on your Debit Card</p>
          </div>
          <div 
            className={`payment-option ${selectedPaymentMethod === 'expiry' ? 'active' : ''}`}
            onClick={() => setSelectedPaymentMethod('expiry')}
          >
            <h3>Expiry Month & Year</h3>
            <p>CVV</p>
          </div>
        </div>
        
        <div className="card-details">
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input 
              type="text" 
              id="card-number" 
              placeholder="1234 5678 9012 3456"
              value={cardDetails.cardNumber}
              onChange={(e) => handleCardInputChange('cardNumber', e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="card-name">Name on Card</label>
            <input 
              type="text" 
              id="card-name" 
              placeholder="John Doe"
              value={cardDetails.cardName}
              onChange={(e) => handleCardInputChange('cardName', e.target.value)}
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiry-month">Expiry Month</label>
              <input 
                type="text" 
                id="expiry-month" 
                placeholder="MM"
                value={cardDetails.expiryMonth}
                onChange={(e) => handleCardInputChange('expiryMonth', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiry-year">Expiry Year</label>
              <input 
                type="text" 
                id="expiry-year" 
                placeholder="YY"
                value={cardDetails.expiryYear}
                onChange={(e) => handleCardInputChange('expiryYear', e.target.value)}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input 
              type="text" 
              id="cvv" 
              placeholder="123"
              value={cardDetails.cvv}
              onChange={(e) => handleCardInputChange('cvv', e.target.value)}
            />
          </div>
        </div>
        
        <button className="pay-now-btn" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
      
      <div className="session-expiry">
        <div>Session expires in</div>
        <div className="timer">{formatTime(timeLeft)}</div>
      </div>
      
      <div className="order-details">
        <div className="order-number">Order Number: PB139753090</div>
        
        <div className="premium-details">
          <div className="premium-row">
            <div>"Precautions" Premium</div>
            <div>₹{premiums.firstYearPremium.toLocaleString('en-IN')}</div>
          </div>
          <div className="premium-row">
            <div>Total Premium</div>
            <div>₹{premiums.totalPremium.toLocaleString('en-IN')}</div>
          </div>
          <div className="premium-row">
            <div>Max Recurring Amount</div>
            <div>₹{premiums.maxRecurringAmount.toLocaleString('en-IN')}</div>
          </div>
        </div>
      </div>
      
      <div className="pay-frequency">
        <h3>Pay frequency</h3>
        <div className="frequency-tag">YEARLY</div>
      </div>
      
      <div className="plan-details">
        <h3>Plan Details</h3>
        <p>Your premium is ₹{premiums.firstYearPremium.toLocaleString('en-IN')} for the first year. From 2nd year onwards your premium will be ₹{premiums.secondYearPremium.toLocaleString('en-IN')}.</p>
        <p className="savings">You save ₹{premiums.savings.toLocaleString('en-IN')} ({premiums.savingsPercentage}%)</p>
      </div>
      
      <div className="proposer-details">
        <h3>Proposer Details</h3>
        <div className="proposer-placeholder">[ ]</div>
      </div>
      
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">FAO</a>
      </div>
    </div>
  );
};

export default PaymentPage;