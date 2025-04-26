// ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function checkAuthentication() {
  return !!localStorage.getItem('activeUser'); // Check if an active user is set
}

function ProtectedRoute() {
  const isAuthenticated = checkAuthentication();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;