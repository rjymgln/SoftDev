import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import ProtectedRoute from './components/ProtectedRoute';
import WebsiteCafe from './components/WebsiteCafe';
import Frappe from './components/Main Sections/Product Selection/WebsiteFrappe';
import AdminDashboard from './components/AdminDashboard';  // ✅ Admin route
import AdminProducts from './components/AdminDashboard-Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/WebsiteCafe" element={<ProtectedRoute />}>
          <Route path='/WebsiteCafe' element={<WebsiteCafe />} />
        </Route>
        <Route path="/admin-dashboard/Orders" element={<AdminDashboard />} />  {/* ✅ New route */}
        <Route path="/admin-dashboard/Products" element={<AdminProducts />} />  {/* ✅ New route */}
        <Route path="/frappe" element={<Frappe />} />
      </Routes>
    </Router>
  );
}

export default App;
