import './WebsiteCafe.css';
import frappe1 from './Assets/frappe1.png'
import coffee1 from './Assets/coffee1.png'
import frappe2 from './Assets/frappe2.png'
import coffeecover from './Assets/coffeecover.jpg'
import frappeCover from './Assets/frappeCover.jpg'
import milkteacover from './Assets/milkteacover.jpg'
import sodacover from './Assets/sodacover.jpg'


export default function App() {
  return (
<>
      {/* NAVIGATION */}
    <header className='top_bar'>
      <div className='cafe_logo'>
          <img src={require('./Assets/cafelogo.png')}/>
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
          <a href='WebsiteFrappe.js' id='openProduct'> 
            <img src={frappeCover}/>
          </a>
        </div>
        <div className='products products_selection'>
          <div className='product_name'>Coffee</div>
          <a href='null' id='openProduct'> 
            <img src={coffeecover}/>
          </a>
        </div>
        <div className='products products_selection'>
          <div className='product_name'>Milk Tea</div>
          <a href='null' id='openProduct'> 
            <img src={milkteacover}/>
          </a>
        </div>
        <div className='products products_selection'>
          <div className='product_name'>Fruit Tea</div>
          <a href='null' id='openProduct'> 
            <img src={sodacover}/>
          </a>
        </div>
        
      </div>
      <button className='open-button' onClick='openMenu'>View our menu</button>

      <div className='form-popup' id='openForm'>
        <form action={null} className='form-container'>
          <div className='menu'>
            <h1 className='menu-board'>Menu</h1>

              <div className='menu-row'>
                <div className='menu-section'>
                  <h2 className='menu-name'>Coffee</h2>
                  <ul>
                    <li>Caramel Macchiato</li>
                    <li>Americano</li>
                    <li>Spanish Latte</li>
                    <li>Vanilla Latte</li>
                    <li>Latte</li>
                    <li>French Vanilla</li>
                    <li>Caffe Mocha</li>
                  </ul>
                </div>

                <div className='menu-section'>
                  <h2 className='menu-name'>Frappe</h2>
                  <ul>
                    <li>Chocolate</li>
                    <li>Dark Mocha</li>
                    <li>Matcha</li>
                    <li>Salted Caramel</li>
                    <li>Strawberry & Cream</li>
                    <li>Cookies & Cream</li>
                  </ul>
                </div>
                <div className='menu-section'>
                  <h2 className='menu-name'>Milktea</h2>
                  <ul>
                    <li>Okinawa</li>
                    <li>Winter Melon</li>
                    <li>Hokaido</li>
                    <li>Dark Choco</li>
                    <li>Salted Caramel</li>
                    <li>Cookies & Cream</li>
                  </ul>
                </div>
                <div className='menu-section'>
                  <h2 className='menu-name'>Fruit Soda</h2>
                  <ul>
                    <li>Green Apple</li>
                    <li>Lychee</li>
                    <li>Strawberry</li>
                    <li>Blue Lemonade</li>
                  </ul>
                </div>
              </div>
          </div>
          <button type='button' className='btn cancel' onClick='closeForm'>x</button>
        </form>
      </div>
    </section>

    <section className='about_us_two' id='aboutus'>
      <div className='story_of_cafe'>
        <h1>Our Story</h1>
        <p>Welcome to GV Café, your new favorite spot for good vibes and great coffee! Established in February 2024, our café was created with a simple mission: to be a cozy haven for students and the community.
          The name GV stands for Good Vibes, and that’s exactly what we aim to bring to everyone who steps through our doors. Located conveniently near schools, we’re here to offer a relaxing space where you can unwind, study, or catch up with friends over a cup of coffee, refreshing drinks, and delicious snacks.
          At GV Café, it’s not just about the food and drinks it’s about creating an atmosphere where positivity thrives. Whether you’re here for a quick break between classes or a place to recharge, we’ve got you covered.
          Come visit us and experience the Good Vibes!
        </p>
      </div>
      <div className='cafeinside'>
        <div className='cafehome'>
          <h1>Where Evey Sip Feels Like Home</h1>
          <p>At Cafe Haven, we blend our passion for coffee with a unique atmosphere
          that invites relaxation and connection.</p>
        </div>
        <div class="cafehomeimg">
            <img src={require('./Assets/cafebackground2.jpg')} alt=""/>
        </div>
      </div>
    </section>

    {/* CONTACT PAGE */}
    <section className='contact' id='Contact'>
      <form action='WebsiteCafe.php' className='container' method='post'>
        <div className='contact-page'>
          <div className='left'>

          </div>
          <div className='right'>
            <h2 className='contact-name'>Contact Us</h2>
            <input type='text' class='field' placeholder='Enter Name' id='Name' name='Name' required />
            <input type='email' class='field' placeholder='Enter Email' id='Email' name='Email' required />
            <textarea type="text" class="field" placeholder="Message" id="Message" name="Message" required></textarea>
            <button className='contact-btn'>Send</button>
          </div>
        </div>
      </form>
    </section>

    {/* FOOTER */}
    <footer className='more_information'>
      <div className='information-links'>
        <div className='documents_cafe'>
          <a href="null">Copyright</a>
          <a href="null">Privacy Policy</a>
          <a href="null">FAQ</a>
        </div>
        <div className='creditscafe'>
          <p>© GV Cafe 2024, Where Every Coffee Feels Like Home</p>
        </div>
      </div>
      <div className='cafe_logo_footer'>
        <img src={require('./Assets/cafelogo.png')} alt=''/>
      </div>

      <div className='socmedia-links'>
        <div className='socialmedia_text'>
          <h1>Visit Us</h1>
          <a href='https://www.google.com/maps/place/GV+CAFE/@14.6190669,120.9666608,861m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3397b500696278fb:0x8265e4970f5fcedc!2sGV+CAFE!8m2!3d14.6188506!4d120.9688969!16s%2Fg%2F11vsf_9403!3m5!1s0x3397b500696278fb:0x8265e4970f5fcedc!8m2!3d14.6188506!4d120.9688969!16s%2Fg%2F11vsf_9403?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'>
            <lord-icon className='googleicon'
              src='https://cdn.lordicon.com/rbsqvtgo.json'
              trigger='morph'
              state='morph-circle'
              colors='primary: #ffffff, secondary: #3080e8'
              style={{width: "20px", height: "20px"}}
            >
            </lord-icon>
          </a>
        </div>
      </div>
    </footer>

</>
  );
}
