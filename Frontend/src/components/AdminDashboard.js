import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css'

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('activeUser');
    if (!user) {
      navigate('/');  // Redirect if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('activeUser');
    navigate('/');
  };

  return (
    <div className='admincontainer'>
      {/* navbar */}
      <header className='adminheader'>
        <div className='adminlogo'>
          <h2><strong>GV CAFE</strong></h2>
          <h2>Admin Dashboard</h2>    
          
        </div>
        <div>
				<nav>
					<ul className='tabs'>
						<li>
							<a href='#null'>
								Products
							</a>
						</li>
						<li>
							<a href='#null'>
								Orders
							</a>
						</li>
						<li>
							<a href='#null'>
								Account
							</a>
						</li>
					</ul>
				</nav>
			</div>
      </header>
      
      {/* dashboardsection */}
      <div className='dashboardsection'>
      <p>Welcome, <strong>{localStorage.getItem('activeUser')}</strong></p>
      <button className='logoutBtn' onClick={handleLogout} >Logout</button>
      </div>
    </div>
  );
}

export default AdminDashboard;
