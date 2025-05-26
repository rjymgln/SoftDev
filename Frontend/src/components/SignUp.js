import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../login.css';
import logo from '../Assets/cafelogo.png';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setMessage('Please fill in all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await fetch('http://localhost/softdev/signup.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setMessage('Signup Successful! You can now log in.');
        navigate('/'); // Redirect to login page
      } else {
        setMessage(result.message || 'Signup failed.');
      }
    } catch (error) {
      setMessage('Error: Could not connect to server.');
    }
  };

  return (
    <div className='login'>	
      <div className="login-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="login-btn">
            Sign Up
          </button>
          {message && <p style={{ color: 'red' }}>{message}</p>}
        </form>

        <p>
          Already have an account? <Link to="/" className="login-link">Login</Link>
        </p>
      </div>
    </div>
  );
}