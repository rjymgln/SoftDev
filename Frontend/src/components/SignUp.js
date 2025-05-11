import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import '../login.css';
import logo from '../Assets/cafelogo.png';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate()

  const handleSignUp = () => {
    if (!username || !email || !password) {
      setMessage('Please fill in all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    const newUser = { username, email, password };
    const storedUsers = localStorage.getItem('users');
    let users = storedUsers ? JSON.parse(storedUsers) : [];

    // Check if the username or email already exists (optional but recommended)
    if (users.some(user => user.username === username)) {
      setMessage('Username already exists.');
      return;
    }
    if (users.some(user => user.email === email)) {
      setMessage('Email already exists.');
      return;
    }
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    setMessage('Signup Successful! You can now log in.');
    navigate('/'); // Navigate back to Login page
  };

  return (
	<div className='login'>	
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h2>Sign Up</h2>
      <form method="POST" action="./PHP/signup.php">
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

        <button type="button" className="login-btn" onClick={handleSignUp}>
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


