import NAVBAR from './Main Sections/NAVBAR'
import './WebsiteCafe.css'
import './MediaQuery.css'
import Homepage from './Main Sections/Homepage';
import ProductSelection from './Main Sections/ProductSelection';
import AboutUs from './Main Sections/AboutUs';
import ContactPage from './Main Sections/ContactPage';
import Footer from './Main Sections/Footer';

export default function WebsiteCafe ({onLogout}) {
  return (
<div className='WebsiteCafe'>
  <NAVBAR onLogout={onLogout}/>
  <Homepage/>
  <ProductSelection/>
  <AboutUs/>
  <ContactPage/>
  <Footer/>
</div>
  );
}