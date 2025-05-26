import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import '../'; 
import cafelogo from '../Assets/cafelogo.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  
  

  const handleLogin = async () => {
  try {
    const response = await fetch('http://localhost/softdev/login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (result.success) {
      setMessage('Login Successful!');
      localStorage.setItem('activeUser', username);
      navigate('/WebsiteCafe');
    } else {
      setMessage(result.message);
    }
  } catch (error) {
    console.error('Login error:', error);
    setMessage('Server error. Try again later.');
  }
};

  return (
	<div className='login'>	
    <div className="login-container">
      <div className="logo-container">
        <img src={cafelogo} alt="Logo" className="logo" />
      </div>
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-btn">
          Login
        </button>
        {message && <p style={{ color: 'red' }}>{message}</p>}
      </form>
      
      <Link to="/forgotpassword" className="forgot-password">Forgot Password?</Link>

      <div className="signup-container">
        <p>
          Don't have an account? <Link to="/signup" className="signup-btn">Sign Up</Link>
        </p>
      </div>
    </div>
	</div>
  );
}

export default Login;