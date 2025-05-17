// import React, { useState } from 'react';
// import axios from 'axios';
// import './auth.css';

// function Register() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/auth/register', formData);
//       alert('Registered successfully!');
//       window.location.href = '/';
//     } catch (err) {
//       alert('Registration failed');
//     }
//   };

//   return (
//     <form className="auth-form" onSubmit={handleRegister}>
//       <h2>Register</h2>
//       <input type="text" placeholder="Name" onChange={e => setFormData({ ...formData, name: e.target.value })} required />
//       <input type="email" placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} required />
//       <input type="password" placeholder="Password" onChange={e => setFormData({ ...formData, password: e.target.value })} required />
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default Register;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration logic here
    localStorage.setItem('token', 'dummy-token');
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <h2>Register for Healthcare Portal</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input 
            type="text" 
            value={userData.name}
            onChange={(e) => setUserData({...userData, name: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={userData.password}
            onChange={(e) => setUserData({...userData, password: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input 
            type="tel" 
            value={userData.phone}
            onChange={(e) => setUserData({...userData, phone: e.target.value})}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="/">Login here</a></p>
    </div>
  );
}

export default Register;