import React, { useState } from "react"
import { Link, useNavigate, } from "react-router-dom";
import './WebsiteFrappe.css'
import { Swiper, SwiperSlide } from "swiper/react";

function Frappe() {
  const navigate = useNavigate
    const handleLogoutClick = () => {
      localStorage.removeItem('activeUser'); // Clear the active session
      navigate('/login');
    };
    
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState({ name: '', price: '', image: '' });
    const openSimplePopup = (name, price, image) => {
      setPopupData({name, price, image: require(`../../../Assets/${image}`)})
      setIsPopupOpen(true);
    };
    const closePopup = () => {
      setIsPopupOpen(false);
    };

  return(
<div className="WebsiteFrappe"> 
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
            <Link to="/WebsiteCafe" className="box-bar">
              HOME
            </Link>
          </li>
          <li>
            <Link href="WebsiteCafe.html#ProductSelection" className="box-bar">
              PRODUCT
            </Link>
          </li>
          <li>
            <Link href="WebsiteCafe.html#aboutus" className="box-bar">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link href="WebsiteCafe.html#Contact" className="box-bar">
              CONTACT
            </Link>
          </li>
          <li>
            <Link href="/" onClick={handleLogoutClick}>LOGOUT</Link>
          </li>
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
        <Swiper className="swiper-wrapper2" id="FrappeWrapper"
          centeredSlides={true}
          slidesPerView={'4'}
          
        >
          <SwiperSlide className="frappeswiper-slide">
            <img
              src={require('../../../Assets/frappe1.png')}
              onClick={()=> openSimplePopup('Cookies & Cream', '₱49.00', 'frappe1.png')}
            alt=""
            />
            <h3 className="name">Cookies &amp; Cream</h3>
          </SwiperSlide>
          <SwiperSlide className="frappeswiper-slide">
            <img
              src={require('../../../Assets/frappe2.png')}
              onClick={() => openSimplePopup('Salted Caramel', '₱49.00', 'frappe2.png')}
              alt=""
              />
            <h3 className="name">Salted Caramel</h3>
          </SwiperSlide>
          <SwiperSlide className="frappeswiper-slide">
            <img
              src={require('../../../Assets/frappe3.png')}
              onClick={() => openSimplePopup('Matcha', '₱49.00', 'frappe3.png')}            
              alt=""
              />
            <h3 className="name">Matcha</h3>
          </SwiperSlide>
          <SwiperSlide className="frappeswiper-slide">
            <img
              src={require('../../../Assets/frappe4.png')}
              onClick={() => openSimplePopup('Sweet & Cream', '₱49.00', 'frappe4.png')}
              alt=""
              />
            <h3 className="name">Sweet &amp; Cream</h3>
          </SwiperSlide>
          <SwiperSlide className="frappeswiper-slide">
            <img
              src={require('../../../Assets/frappe5.png')}
              onClick={() => openSimplePopup('Dark Mocha', '₱49.00', 'frappe5.png')}
              alt=""
              />
            <h3 className="name">Dark Mocha</h3>
          </SwiperSlide>
          <SwiperSlide className="frappeswiper-slide">
            <img
              src={require('../../../Assets/frappe6.png')}
              onClick={() => openSimplePopup('Chocolate', '₱49.00', 'frappe6.png')}
              alt=""
            />
            <h3 className="name">Chocolate</h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>

  {/* Simple Popup Structure */}
  <div className={`product-popup ${isPopupOpen ? 'open' : ''}`} id="simplePopup">
    <button className="closeBtn" onClick={closePopup}>
      ×
    </button>
    <div className="popup-content">
      <img src={popupData.image} id="simplePopupImage" className="product-img" alt="Drink" />
      <div className="popup-details">
        <h2 id="simplePopupName" className="product-name" >{popupData.name}</h2>
        <p id="simplePopupPrice" className="product-price" >{popupData.price}</p>
        <form method="POST" action="save_rating.php">
          <div className="rating">
            <input type="radio" id="star5" name="rating" defaultValue={5} />
            <label htmlFor="star5">★</label>
            <input type="radio" id="star4" name="rating" defaultValue={4} />
            <label htmlFor="star4">★</label>
            <input type="radio" id="star3" name="rating" defaultValue={3} />
            <label htmlFor="star3">★</label>
            <input type="radio" id="star2" name="rating" defaultValue={2} />
            <label htmlFor="star2">★</label>
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
</div>
);
}

export default Frappe;