import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';
import './Products.css';
import CardComponent from './cardscomponent';

function AdminProducts() {
  const navigate = useNavigate();

  const [productsState, setProductsState] = useState([]);
  const [isEditOpen, setEditOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('activeUser');
    if (!user) {
      navigate('/');  // Redirect if not logged in
    }
  }, [navigate]);

  // Fetch frappes from database on component mount
  useEffect(() => {
    fetch('http://localhost/softdev/get_frappe_products.php')  // Make sure this PHP endpoint returns JSON list of frappes
      .then(res => res.json())
      .then(data => {
        // Assuming data is an array of frappes with fields: id, name, price, availability
        const formattedData = data.map(item => ({
          productId: item.id,
          productName: item.name,
          price: item.price,
          availability: item.availability,
          productImg: require(`../Assets/frappe${item.id}.png`), // Adjust if naming differs
        }));
        setProductsState(formattedData);
      })
      .catch(err => {
        console.error('Failed to fetch frappe products:', err);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('activeUser');
    navigate('/');
  };

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

  const handleProductSave = async () => {
    try {
      const response = await fetch('http://localhost/softdev/update_frappe.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: selectedProduct.productId,
          price: selectedProduct.price,
        }),
      });
      const result = await response.json();

      if (result.success) {
        setProductsState((prev) =>
          prev.map((p) =>
            p.productId === selectedProduct.productId ? { ...selectedProduct } : p
          )
        );
        setEditOpen(false);
        setSelectedProduct(null);
      } else {
        alert("Update failed: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      alert("Fetch error: " + error.message);
    }
  };

  return (
    <div className='admincontainer'>
      <header className='adminheader'>
        <div className='adminlogo'>
          <h2><strong>GV CAFE</strong></h2>
          <h2>Admin Dashboard</h2>
        </div>
        <button className='menu-burger'></button>
        <nav>
          <ul className='tabs'>
            <li><a href='/admin-dashboard/Orders'>Orders</a></li>
            <li><a href='/admin-dashboard/Products'>Products</a></li>
            <li><a href='/' onClick={handleLogout}>Logout</a></li>
          </ul>
        </nav>
      </header>

      <div className='dashboardsection'>
        <h2>Products:</h2>
        <div className='card-container'>
          {productsState.length === 0 ? (
            <p>Loading products...</p>
          ) : (
            productsState.map((product) => (
              <CardComponent
                key={product.productId}
                data={product}
                type="Products"
                onEdit={handleEditClick}
              />
            ))
          )}
        </div>

        <div className={`Edit ${isEditOpen ? 'open' : ''}`}>
          <div className='editorContainer'>
            <button className='closeButton' onClick={handleEditorClose}>X</button>
            <div className="editor">
              {selectedProduct && (
                <form onSubmit={e => { e.preventDefault(); handleProductSave(); }}>
                  <label>
                    Name:
                    <input
                      name="productName"
                      value={selectedProduct.productName}
                      onChange={handleProductChange}
                    />
                  </label>
                  <label>
                    Price:
                    <input
                      name="price"
                      value={selectedProduct.price}
                      onChange={handleProductChange}
                    />
                  </label>
                  <label>
                    Availability:
                    <input
                      name="availability"
                      value={selectedProduct.availability}
                      onChange={handleProductChange}
                    />
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
