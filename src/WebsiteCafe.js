import './WebsiteCafe.css';
import './MediaQuery.css'
import coffeecover from './Assets/coffeecover.jpg'
import frappeCover from './Assets/frappeCover.jpg'
import milkteacover from './Assets/milkteacover.jpg'
import sodacover from './Assets/sodacover.jpg'


export default function App() {
  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="Cafe.css" />
  <link rel="stylesheet" href="MediaQuery.css" />
  <title>Cafe</title>
  {/* NAVBAR */}
  <header className="top_bar">
    <div className="cafe_logo">
      <img src={require('./Assets/cafelogo.png')} alt="GV CAFE" />
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
            <a href="#HomePage" className="box-bar">
              HOME
            </a>
          </li>
          <li>
            <a href="#ProductSelection" className="box-bar">
              PRODUCT
            </a>
          </li>
          <li>
            <a href="#aboutus" className="box-bar">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="#Contact" className="box-bar">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  {/* HOMEPAGE */}
  <section className="homepage" id="HomePage">
    <div className="welcoming_user">
      <h1>Welcome to GV Cafe</h1>
      <p>
        Discover the origins of our coze café, where the passion for coffee and
        community blend seamlessly.
      </p>
      <a href="#ProductSelection">
        <div className="view_product">
          <button type="button">Explore Our Drinks</button>
        </div>
      </a>
    </div>
    <div className="swiper mySwiper">
      <div className="bestproduct_title">
        <h1>Check Our Best Selling Coffee</h1>
      </div>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src={require('./Assets/frappe1.png')} alt="" />
        </div>
        <div className="swiper-slide">
          <img src={require('./Assets/coffee1.png')} alt="" />
        </div>
        <div className="swiper-slide">
          <img src={require('./Assets/frappe2.png')} alt="" />
        </div>
      </div>
      <div className="autoplay-progress"></div>
    </div>
  </section>
  {/* PRODUCTS SELECTION */}
  <section className="product_selection1" id="ProductSelection">
    <div className="main_product">
      <div className="products product_selection">
        <div className="product_name">Frappe</div>
        <a href="WebsiteFrappe.html" id="openProduct">
          <img src={require('./Assets/frappeCover.jpg')} alt="cookie" />
        </a>
      </div>
      <div className="products product_selection">
        <div className="product_name">Coffee</div>
        <a href="#" id="openProduct">
          <img src={require('./Assets/coffeecover.jpg')} alt="pandan" />
        </a>
      </div>
      <div className="products product_selection">
        <div className="product_name">Milk Tea</div>
        <a href="#" id="openProduct">
          <img src={require('./Assets/milkteacover.jpg')} alt="yellow" />
        </a>
      </div>
      <div className="products product_selection">
        <div className="product_name">Fruit Tea</div>
        <a href="#" id="openProduct">
          <img src={require('./Assets/sodacover.jpg')} alt="yellow" />
        </a>
      </div>
    </div>
    <button className="open-button" onclick="openMenu()">
      View our menu
    </button>
    <div className="form-popup" id="openForm">
      <form action="#" className="form-container">
        <div className="menu">
          <h1 className="menu-board">Menu</h1>
          <div className="menu-row">
            <div className="menu-section">
              <h2 className="menu-name">coffee</h2>
              <ul>
                <li>Carame Macchiato</li>
                <li>Americano</li>
                <li>Spanish Latte</li>
                <li>Vanilla Latte</li>
                <li>Latte</li>
                <li>French Vanilla</li>
                <li>Caffe Mocha</li>
              </ul>
            </div>
            <div className="menu-section">
              <h2 className="menu-name">frappe</h2>
              <ul>
                <li>Chocolate</li>
                <li>Dark Mocha</li>
                <li>Matcha</li>
                <li>Salted Caramel</li>
                <li>Strawberry &amp; Cream</li>
                <li>Cookies &amp; Cream</li>
              </ul>
            </div>
          </div>
          <div className="menu-row">
            <div className="menu-section">
              <h2 className="menu-name">Milktea</h2>
              <ul>
                <li>Okinawa</li>
                <li>Winter Melon</li>
                <li>Hokaido</li>
                <li>Dark Choco</li>
                <li>Salted Caramel</li>
                <li>Cookies &amp; Cream</li>
              </ul>
            </div>
            <div />
            <div className="menu-section">
              <h2 className="menu-name">Fruit Soda</h2>
              <ul>
                <li>Green Apple</li>
                <li>Lychee</li>
                <li>Strawberry</li>
                <li>Blue Lemonade</li>
              </ul>
            </div>
          </div>
          <button type="button" className="btn cancel" onclick="closeForm()">
            x
          </button>
        </div>
      </form>
    </div>
  </section>
  {/* About us Page */}
  <section className="about_us_two" id="aboutus">
    <div className="story_of_cafe">
      <h1>Our Story</h1>
      <p>
        Welcome to GV Café, your new favorite spot for good vibes and great
        coffee! Established in February 2024, our café was created with a simple
        mission: to be a cozy haven for students and the community.
        <br />
        <br />
        The name GV stands for Good Vibes, and that’s exactly what we aim to
        bring to everyone who steps through our doors. Located conveniently near
        schools, we’re here to offer a relaxing space where you can unwind,
        study, or catch up with friends over a cup of coffee, refreshing drinks,
        and delicious snacks. <br />
        <br />
        At GV Café, it’s not just about the food and drinks it’s about creating
        an atmosphere where positivity thrives. Whether you’re here for a quick
        break between classes or a place to recharge, we’ve got you covered.
        <br />
        <br />
        Come visit us and experience the Good Vibes!
      </p>
    </div>
    <div className="cafeinside">
      <div className="cafehome">
        <h1>Where Every Sip Feels Like Home</h1>
        <p>
          At Cafe Haven, we blend our passion for coffee with a unique
          atmosphere
          <br />
          that invites relaxation and connection.
        </p>
      </div>
      <div className="cafehomeimg">
        <img src={require('./Assets/cafebackground2.jpg')} alt="" />
      </div>
    </div>
  </section>
  {/* Contact Page */}
  <section className="contact" id="Contact">
    <form action="WebsiteCafe.php" className="container" method="post">
      <div className="contact-page">
        <div className="left" />
        <div className="right">
          <h2 className="contact-name">Contact Us</h2>
          <input
            type="text"
            className="field"
            placeholder="Enter Name"
            id="Name"
            name="Name"
            required=""
          />
          <input
            type="email"
            className="field"
            placeholder="Enter Email"
            id="Email"
            name="Email"
            required=""
          />
          <textarea
            type="text"
            className="field"
            placeholder="Message"
            id="Message"
            name="Message"
            required=""
            defaultValue={""}
          />
          <button className="contact-btn">Send</button>
        </div>
      </div>
    </form>
  </section>
  {/* Footer */}
  <footer className="more_information">
    <div className="information-links">
      <div className="documents_cafe">
        <a href="#">Copyright</a>
        <a href="#">Privacy Policy</a>
        <a href="#">FAQ</a>
      </div>
      <div className="creditscafe">
        <p>© GV Cafe 2024, Where Every Coffee Feels Like Home</p>
      </div>
    </div>
    <div className="cafe_logo_footer">
      <img src={require('./Assets/cafelogo.png')} alt="GV CAFE" />
    </div>
    <div className="socmedia-links">
      <div className="socialmedia_text">
        <h1>Visit Us</h1>
        <a href="https://www.google.com/maps/place/GV+CAFE/@14.6190669,120.9666608,861m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3397b500696278fb:0x8265e4970f5fcedc!2sGV+CAFE!8m2!3d14.6188506!4d120.9688969!16s%2Fg%2F11vsf_9403!3m5!1s0x3397b500696278fb:0x8265e4970f5fcedc!8m2!3d14.6188506!4d120.9688969!16s%2Fg%2F11vsf_9403?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
          <lord-icon
            className="googleicon"
            src="https://cdn.lordicon.com/rbsqvtgo.json"
            trigger="morph"
            state="morph-circle"
            colors="primary:#ffffff,secondary:#3080e8"
            style={{ width: 20, height: 20 }}
          ></lord-icon>
        </a>
        <p>1901 franco st tondo manila, Manila, Philippines</p>
      </div>
      <div className="social-media-icons">
        <a href="https://www.facebook.com/profile.php?id=61555611452098">
          <lord-icon
            src="https://cdn.lordicon.com/bfoumeno.json"
            trigger="morph"
            state="morph-circle"
            colors="primary:#ffffff,secondary:#3080e8"
            style={{ width: 30, height: 30 }}
          ></lord-icon>
        </a>
        <a href="https://www.tiktok.com/@gvcafe?fbclid=IwZXh0bgNhZW0CMTAAAR39Sgtpo06l86D_zxzkJpL_P0LFH6D0z5h_5AbWWFQhGPgAlQhuWUt5xwo_aem_5OmquRJTT0_YnvJbMhUysw">
          <lord-icon
            src="https://cdn.lordicon.com/zmvgugmh.json"
            trigger="morph"
            state="morph-circle"
            colors="primary:#ffffff,secondary:#000000"
            style={{ width: 30, height: 30 }}
          ></lord-icon>
        </a>
        <a href="#">
          <lord-icon
            src="https://cdn.lordicon.com/ewswvzmw.json"
            trigger="morph"
            state="morph-circle"
            colors="primary:#ffffff,secondary:#e8308c"
            style={{ width: 30, height: 30 }}
          ></lord-icon>
        </a>
      </div>
    </div>
  </footer>
</>

  );
}
