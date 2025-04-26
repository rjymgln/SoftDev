import React from "react"
import { useNavigate } from "react-router-dom";
import './WebsiteFrappe.css'

function Frappe() {
  const navigate = useNavigate
    const handleLogoutClick = () => {
      localStorage.removeItem('activeUser'); // Clear the active session
      navigate('/login');
    };
    
  return(
<> 
    <header className="top_bar">
    <div className="cafe_logo">
      <img src={require('../../../Assets/cafelogo.png')} alt="GV CAFE" />
      <h1>GV CAFE</h1>
    </div>
    <button className="menu-toggle" aria-label="Open Menu">
      <lord-icon
        src="https://cdn.lordicon.com/eouimtlu.json"
        trigger="hover"
        colors="primary:#000000"
        style={{ width: 30, height: 30 }}
      ></lord-icon>
    </button>
    <div className="navbar">
      <nav>
        <ul className="links">
          <li>
            <a href="WebsiteCafe.html#HomePage" className="box-bar">
              HOME
            </a>
          </li>
          <li>
            <a href="WebsiteCafe.html#ProductSelection" className="box-bar">
              PRODUCT
            </a>
          </li>
          <li>
            <a href="WebsiteCafe.html#aboutus" className="box-bar">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="WebsiteCafe.html#Contact" className="box-bar">
              CONTACT
            </a>
          </li>
          <li>
            <a href="/" onClick={handleLogoutClick}>LOGOUT</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div className="Frappe">
    <div className="swiper mySwiper">
      <div className="frappe_title">
        <h1>Frappe-licious Delights</h1>
        <p>"Cool down and level up."</p>
      </div>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            src={require('../../../Assets/frappe1.png')}
            onclick="openSimplePopup('Cookies & Cream', '₱49.00', 'frappe1.png')"
          />
          <h3 className="name">Cookies &amp; Cream</h3>
        </div>
        <div className="swiper-slide">
          <img
            src={require('../../../Assets/frappe2.png')}
            onclick="openSimplePopup('Salted Caramel', '₱49.00', 'frappe2.png')"
          />
          <h3 className="name">Salted Caramel</h3>
        </div>
        <div className="swiper-slide">
          <img
            src={require('../../../Assets/frappe3.png')}
            onclick="openSimplePopup('Matcha', '₱49.00', 'frappe3.png')"
          />
          <h3 className="name">Matcha</h3>
        </div>
        <div className="swiper-slide">
          <img
            src={require('../../../Assets/frappe4.png')}
            onclick="openSimplePopup('Sweet & Cream', '₱49.00', 'frappe4.png')"
          />
          <h3 className="name">Sweet &amp; Cream</h3>
        </div>
        <div className="swiper-slide">
          <img
            src={require('../../../Assets/frappe5.png')}
            onclick="openSimplePopup('Dark Mocha', '₱49.00', 'frappe5.png')"
          />
          <h3 className="name">Dark Mocha</h3>
        </div>
        <div className="swiper-slide">
          <img
            src={require('../../../Assets/frappe6.png')}
            onclick="openSimplePopup('Chocolate', '₱49.00', 'frappe6.png')"
          />
          <h3 className="name">Chocolate</h3>
        </div>
      </div>
    </div>
  </div>

  {/* Simple Popup Structure */}
  <div className="product-popup" id="simplePopup" style={{ display: "none" }}>
    <button className="closeBtn" onclick="exitPopup()">
      ×
    </button>
    <div className="popup-content">
      <img id="simplePopupImage" className="product-img" alt="Drink Image" />
      <div className="popup-details">
        <h2 id="simplePopupName" className="product-name" />
        <p id="simplePopupPrice" className="product-price" />
        <form method="POST" action="save_rating.php">
          <div className="rating">
            <input type="radio" id="star1" name="rating" defaultValue={5} />
            <label htmlFor="star1">★</label>
            <input type="radio" id="star2" name="rating" defaultValue={4} />
            <label htmlFor="star2">★</label>
            <input type="radio" id="star3" name="rating" defaultValue={3} />
            <label htmlFor="star3">★</label>
            <input type="radio" id="star4" name="rating" defaultValue={2} />
            <label htmlFor="star4">★</label>
            <input type="radio" id="star1" name="rating" defaultValue={1} />
            <label htmlFor="star1">★</label>
          </div>
          <input type="hidden" name="drink" id="simplePopupDrinkInput" />
          <button type="submit" className="ratingbtn">
            Submit Rating
          </button>
        </form>
      </div>
    </div>
  </div>
</>
);
}

export default Frappe;