// import React, { useState } from 'react';
// import axios from 'axios';
// import './auth.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
//       localStorage.setItem('token', res.data.token);
//       window.location.href = '/dashboard';
//     } catch (err) {
//       alert('Login failed');
//     }
//   };

//   return (
//     <form className="auth-form" onSubmit={handleLogin}>
//       <h2>Login</h2>
//       <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
//       <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication logic here
    localStorage.setItem('token', 'dummy-token');
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <h2>Login to Healthcare Portal</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={credentials.email}
            onChange={(e) => setCredentials({...credentials, email: e.target.value})}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
  );
}

export default Login;