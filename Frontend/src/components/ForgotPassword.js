import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for React Router navigation
import './forgotpassword.css';  // Import CSS for styling
import logo from '../Assets/cafelogo.png';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
    setMessage('A password reset link has been sent to your email.');
  };

  return (
    <div className="forgot-password-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h2>Forgot Password</h2>
      <p>Please enter your email address to receive a link to reset your password.</p>
      <form onSubmit={handleResetPassword}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}

      {/* Corrected Link to go back to Login */}
      <p><Link to="/" className="back-to-login">Back to Login</Link></p>
    </div>
  );
}

export default ForgotPassword;
