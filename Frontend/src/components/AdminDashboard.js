import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("activeUser");
    if (!user) {
      navigate("/"); // Redirect if not logged in
    } else {
      fetchOrders();
    }
  }, [navigate]);

  const fetchOrders = () => {
    fetch("http://localhost/softdev/get_orders.php")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Failed to fetch orders:", err));
  };

  const handleFinish = async (orderId) => {
    const formData = new FormData();
    formData.append("order_id", orderId);

    try {
      const response = await fetch("http://localhost/softdev/finish_order.php", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        alert(result.success);
        fetchOrders();
      } else {
        alert(result.error || "Failed to finish order.");
      }
    } catch (error) {
      alert("Error finishing order.");
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("activeUser");
    navigate("/");
  };

  return (
    <div className="admincontainer">
      {/* Header */}
      <header className="adminheader">
        <div className="adminlogo">
          <h2><strong>GV CAFE</strong></h2>
          <h2>Admin Dashboard</h2>
        </div>
        <button className="menu-burger"></button>
        <nav>
          <ul className="tabs">
            <li><a href="/admin-dashboard/Orders">Orders</a></li>
            <li><a href="/admin-dashboard/Products">Products</a></li>
            <li><a href="/" onClick={handleLogout}>Logout</a></li>
          </ul>
        </nav>
      </header>

      {/* Orders Section */}
      <section className="dashboardsection">
        <h2>Orders</h2>
        <div className="card-container">
          {orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="order-card">
                <p><strong>Order ID:</strong> {order.id}</p>
                <p><strong>Frappe Name:</strong> {order.frappe_name}</p>
                <p><strong>Quantity:</strong> {order.quantity}</p>
                <p><strong>Total Price:</strong> ₱{parseFloat(order.total_price).toFixed(2)}</p>
                <p><strong>Status:</strong> {order.status}</p>

                {order.status === "pending" && (
                  <button
                    className="finish-btn"
                    onClick={() => handleFinish(order.id)}
                  >
                    Finish
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
