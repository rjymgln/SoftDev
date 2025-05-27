import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css'
import './Products.css'
import CardComponent from './cardscomponent';

const products = [
  {
    productId: '1',
    productName: 'Rabilyn',
    productImg: require('../Assets/coffee1.png'),
    availability: 'Available',
    price: '40.00'
  },
  {
    productId: '1',
    productName: 'Rabilyn',
    productImg: require('../Assets/coffee1.png'),
    availability: 'Available',
    price: '40.00'
  },
  {
    productId: '1',
    productName: 'Rabilyn',
    productImg: require('../Assets/coffee1.png'),
    availability: 'Available',
    price: '40.00'
  },
  {
    productId: '1',
    productName: 'Rabilyn',
    productImg: require('../Assets/coffee1.png'),
    availability: 'Available',
    price: '40.00'
  },
  {
    productId: '1',
    productName: 'Rabilyn',
    productImg: require('../Assets/coffee1.png'),
    availability: 'Available',
    price: '40.00'
  },
  {
    productId: '1',
    productName: 'Rabilyn',
    productImg: require('../Assets/coffee1.png'),
    availability: 'Available',
    price: '40.00'
  },
  
]


function AdminProducts() {
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
              <a href='/admin-dashboard/Orders'>
                Orders
              </a>
            </li>
            <li>
              <a href='/admin-dashboard/Products'>
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
        <h2>Products:</h2>
          <div className='card-container'>
            {products.map((products) => (
              <CardComponent key={products.Id} data={products} type="Products" />
            ))}
          </div>
        
      </div>
    </div>
  );
}

export default AdminProducts;
