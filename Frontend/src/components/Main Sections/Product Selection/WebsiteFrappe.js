import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./WebsiteFrappe.css";
import { Swiper, SwiperSlide } from "swiper/react";

function Frappe() {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    localStorage.removeItem("activeUser");
    navigate("/login");
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState({ id: null, name: "", price: "", image: "" });
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace("₱", "").replace(",", ""));
  };

  useEffect(() => {
    if (popupData.price) {
      const unitPrice = parsePrice(popupData.price);
      setTotalPrice((unitPrice * quantity).toFixed(2));
    }
  }, [quantity, popupData.price]);

  const openSimplePopup = (id, name, price, image) => {
    setPopupData({ id, name, price, image: require(`../../../Assets/${image}`) });
    setQuantity(1);
    setSelectedRating(0);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setQuantity(1);
    setTotalPrice(0);
    setSelectedRating(0);
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(Math.max(1, value || 0));
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleBuyClick = async () => {
    const formData = new FormData();
    formData.append("frappe_id", popupData.id);
    formData.append("frappe_name", popupData.name);
    formData.append("quantity", quantity);
    formData.append("total_price", totalPrice);

    try {
      const response = await fetch("http://localhost/softdev/order.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.text();
      alert(`Order response: ${result}`);
      closePopup();
    } catch (error) {
      alert("Failed to place order. Please try again.");
      console.error("Order error:", error);
    }
  };

  return (
    <div className="WebsiteFrappe">
      <header className="top_bar">
        <div className="cafe_logo">
          <img src={require("../../../Assets/cafelogo.png")} alt="GV CAFE" />
          <h1>GV CAFE</h1>
        </div>
        <div className="navbar">
          <nav>
            <ul className="links">
              <li><Link to="/WebsiteCafe" className="box-bar">HOME</Link></li>
              <li><Link to="/WebsiteCafe#ProductSelection" className="box-bar">PRODUCT</Link></li>
              <li><Link to="/WebsiteCafe#aboutus" className="box-bar">ABOUT US</Link></li>
              <li><Link to="/WebsiteCafe#Contact" className="box-bar">CONTACT</Link></li>
              <li><Link to="/" onClick={handleLogoutClick}>LOGOUT</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="Frappe">
        <div className="swiper2 mySwiper" id="FrappeSwiper">
          <div className="frappe_title">
            <h1>Frappe-licious Delights</h1>
            <p>"Cool down and level up."</p>
          </div>
          <div className="SwiperContainer">
            <Swiper className="swiper-wrapper2" id="FrappeWrapper" centeredSlides={true} slidesPerView={"4"}>
              {[{
                id: 1, name: "Cookies & Cream", img: "frappe1.png"
              }, {
                id: 2, name: "Salted Caramel", img: "frappe2.png"
              }, {
                id: 3, name: "Matcha", img: "frappe3.png"
              }, {
                id: 4, name: "Sweet & Cream", img: "frappe4.png"
              }, {
                id: 5, name: "Dark Mocha", img: "frappe5.png"
              }, {
                id: 6, name: "Chocolate", img: "frappe6.png"
              }].map((item) => (
                <SwiperSlide key={item.id} className="frappeswiper-slide">
                  <img
                    src={require(`../../../Assets/${item.img}`)}
                    onClick={() => openSimplePopup(item.id, item.name, "₱49.00", item.img)}
                    alt={item.name}
                  />
                  <h3 className="name">{item.name}</h3>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Popup */}
      <div className={`product-popup ${isPopupOpen ? "open" : ""}`} id="simplePopup">
        <button className="closeBtn" onClick={closePopup}>×</button>
        <div className="popup-content">
          <img src={popupData.image} id="simplePopupImage" className="product-img" alt="Drink" />
          <div className="popup-details">
            <h2 id="simplePopupName" className="product-name">{popupData.name}</h2>
            <p id="simplePopupPrice" className="product-price">{popupData.price}</p>

            <div className="quantity-selector">
              <button onClick={handleDecrement}>-</button>
              <input type="number" min="1" value={quantity} onChange={handleQuantityChange} />
              <button onClick={handleIncrement}>+</button>
            </div>

            <p className="product-total">Total: ₱{totalPrice}</p>

            {/* Rating */}
            <div className="rating">
              {[5, 4, 3, 2, 1].map((star) => (
                <React.Fragment key={star}>
                  <input
                    type="radio"
                    id={`star${star}`}
                    name="rating"
                    value={star}
                    checked={selectedRating === star}
                    onChange={() => setSelectedRating(star)}
                  />
                  <label htmlFor={`star${star}`}>★</label>
                </React.Fragment>
              ))}
            </div>

            <button
              className="ratingbtn"
              onClick={async () => {
                if (selectedRating === 0) {
                  alert("Please select a rating before submitting.");
                  return;
                }

                const formData = new FormData();
                formData.append("frappe_id", popupData.id);
                formData.append("rating_value", selectedRating);

                try {
                  const response = await fetch("http://localhost/softdev/rating.php", {
                    method: "POST",
                    body: formData,
                  });

                  const result = await response.text();
                  alert(`Rating submitted! Server response: ${result}`);
                  setSelectedRating(0);
                } catch (error) {
                  alert("Failed to submit rating. Please try again.");
                  console.error("Error submitting rating:", error);
                }
              }}
            >
              Submit Rating
            </button>

            <button className="buy-btn" onClick={handleBuyClick}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frappe;
