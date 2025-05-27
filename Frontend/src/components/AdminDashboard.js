import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('activeUser');
    if (!user) {
      navigate('/login');  // Redirect if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('activeUser');
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Admin Dashboard</h1>
      <p>Welcome, <strong>{localStorage.getItem('activeUser')}</strong> (Admin)</p>
      <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
    </div>
  );
}

const styles = {
  container: {
    margin: '50px auto',
    textAlign: 'center',
    maxWidth: '500px',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  },
  heading: {
    marginBottom: '20px',
    color: '#333'
  },
  logoutBtn: {
    padding: '10px 20px',
    backgroundColor: '#d9534f',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default AdminDashboard;
