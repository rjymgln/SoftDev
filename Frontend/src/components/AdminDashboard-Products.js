import React, { useEffect, useState} from 'react';
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

  const [productsState, setProductsState] = useState(products);
  const [isEditOpen, setEditOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setEditOpen(true);
  };

  const handleEditorClose = () => {
    setEditOpen(false);
    setSelectedProduct(null);
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleProductSave = () => {
    setProductsState((prev) =>
      prev.map((p) =>
        p.productId === selectedProduct.productId ? { ...selectedProduct } : p
      )
    );
    setEditOpen(false);
    setSelectedProduct(null);
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
            {productsState.map((product) => (
              <CardComponent
                key={product.productId}
                data={product}
                type="Products"
                onEdit={handleEditClick}
              />
            ))}
          </div>
          <div className={`Edit ${isEditOpen ? 'open': ''}` }>
            <div className='editorContainer'>
              <button className='closeButton' onClick={handleEditorClose}>X</button>
                <div className="editor">
                  {selectedProduct && (
                    <form onSubmit={e => { e.preventDefault(); handleProductSave(); }}>
                      <label>
                        Name:
                        <input name="productName" value={selectedProduct.productName} onChange={handleProductChange} />
                      </label>
                      <label>
                        Price:
                        <input name="price" value={selectedProduct.price} onChange={handleProductChange} />
                      </label>
                      <label>
                        Availability:
                        <input name="availability" value={selectedProduct.availability} onChange={handleProductChange} />
                      </label>
                      <button type="submit">Save</button>
                    </form>
                  )}
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default AdminProducts;
