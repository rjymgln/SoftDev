import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css'
import CardComponent from './cardscomponent';

const orders = [
  {
    Id: 'OR123',
    accountId: '22-420-69',
    name: 'Toni Fowler',
    products: 
      {name: 'Macchiato', amount:'4', price: '20'}
    ,
    total: 50,
  },
  {
    Id: 'OR123',
    accountId: '22-420-69',
    name: 'Toni Fowler',
    products: 
      {name: 'Macchiato', amount:'4', price: '20'}
    ,
    total: 50,
  },
  {
    Id: 'OR123',
    accountId: '22-420-69',
    name: 'Toni Fowler',
    products: 
      {name: 'Macchiato', amount:'4', price: '20'}
    ,
    total: 50,
  },
  {
    Id: 'OR123',
    accountId: '22-420-69',
    name: 'Toni Fowler',
    products: 
      {name: 'Macchiato', amount:'4', price: '20'}
    ,
    total: 50,
  },
  {
    Id: 'OR123',
    accountId: '22-420-69',
    name: 'Toni Fowler',
    products: 
      {name: 'Macchiato', amount:'4', price: '20'}
    ,
    total: 50,
  },
  {
    Id: 'OR123',
    accountId: '22-420-69',
    name: 'Toni Fowler',
    products: 
      {name: 'Macchiato', amount:'4', price: '20'}
    ,
    total: 50,
  },
  {
    Id: 'OR123',
    accountId: '22-420-69',
    name: 'Toni Fowler',
    products: 
      {name: 'Macchiato', amount:'4', price: '20'}
    ,
    total: 50,
  },
]


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
        <button className='menu-burger'></button>
        <div>
				<nav>
					<ul className='tabs'>
						<li>
							<a href='/admin-dashboard'>
								Orders
							</a>
						</li>
						<li>
							<a href='#null'>
								Products
							</a>
						</li>
						<li>
							<a href='#null'>
								Account
							</a>
						</li>
						<li>
							<a href='/' onClick={handleLogout}>
								Logout
							</a>
						</li>
					</ul>
				</nav>
			</div>
      </header>
      
      {/* dashboardsection */}
      <div className='dashboardsection'>
        <h2>Orders:</h2>
        <div className='cardsection'>
          <div className='card-container'>
            {orders.map((orders) => (
              <CardComponent key={orders.Id} orders={orders} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
