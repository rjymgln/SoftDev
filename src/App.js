import './App.css';
import logo from './Assets/cafelogo.png'
import frappe1 from './Assets/frappe1.png'
import coffee1 from './Assets/coffee1.png'
import frappe2 from './Assets/frappe2.png'
import frappeCover from './Assets/frappeCover.jpg'
import { useEffect } from 'react';

const MenuButton = () => {
  useEffect(() => {
    // Load Lordicon script dynamically
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
}

export default function App() {
  return (
<>
      {/* NAVIGATION */}
    <header className='top_bar'>
      <div className='cafe_logo'>
          <img src={logo}/>
          <h1>GV CAFE</h1>
      </div>
      
      <button className='menu-toggle' aria-label='Open Menu'>
        <lord-icon
          src="https://cdn.lordicon.com/eouimtlu.json"
          trigger="hover"
          colors="primary:#000000"
          style={{ width: "30px", height: "30px" }}
        />
      </button>

      <div className='navbar'>
        <nav>
          <ul className='links'>
          <li><a href="#HomePage" class="box-bar">HOME</a></li>
          <li><a href="#ProductSelection" class="box-bar">PRODUCT</a></li>
          <li><a href="#aboutus" class="box-bar">ABOUT US</a></li>
          <li><a href="#Contact" class="box-bar">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>

    {/* homepage */}
    <section class="homepage" id="HomePage">
            <div class="welcoming_user">
                <h1>Welcome to GV Cafe</h1>
                <p>Discover the origins of our coze café, where the passion for coffee and community
                blend seamlessly.</p>

                    <a href="#ProductSelection">
                        <div class="view_product">
                            <button type="button">Explore Our Drinks</button>
                        </div>
                    </a>    
            </div>
        <div class="swiper mySwiper">
            <div class="bestproduct_title">
                <h1>Check Our Best Selling Coffee</h1>
            </div>
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src={frappe1} alt=""/></div>
              <div class="swiper-slide"><img src={coffee1} alt=""/></div>
              <div class="swiper-slide"><img src={frappe2} alt=""/></div>
            </div>
            <div class="autoplay-progress">
            </div>
          </div>
    </section>

    {/* PRODUCTS SELECTION */}
    <section className='product_selection1' id='ProductSelection'>
      <div className='main_product'>
        <div className='products products_selection'>
          <div className='product_name'>Frappe</div>
          <a href='WebsiteFrappe.js' id='openProduct'/>
          <img src={frappeCover}/>
          <a/>
        </div>
      </div>
    </section>
</>
  );
}
