import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import './login.css'; 
import cafelogo from '../Assets/cafelogo.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  
  

  const handleLogin = () => {
    const storedUsers = localStorage.getItem('users');

    if (storedUsers){
      try{
        const users = JSON.parse(storedUsers);
        const userExists = users.some(user => user.username === username && user.password === password);
        localStorage.setItem('activeUser', username); // Store the logged-in username

        if (userExists){
          setMessage('Login Succesful!');
          navigate('/WebsiteCafe') 
        } else{
          setMessage('Invalid Username or Password');
        }
      } catch (error) {
        console.error('User data parse error')
      }
    } else{
      setMessage('No user accounts found.');
    }
  };

  return (
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
  );
}

export default Login;
