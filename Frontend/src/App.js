import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';  // Correct import path
import ForgotPassword from './components/ForgotPassword';  // Correct import path
import WebsiteCafe from './components/Main Sections/WebsiteCafe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path='/WebsiteCafe' element= {<WebsiteCafe/>} />
      </Routes>
    </Router>
  );
}

export default App;
