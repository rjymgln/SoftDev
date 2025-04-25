import NAVBAR from './NAVBAR'
import './WebsiteCafe.css'
import './MediaQuery.css'
import Homepage from './Homepage';
import ProductSelection from './ProductSelection';
import AboutUs from './AboutUs';
import ContactPage from './ContactPage';
import Footer from './Footer';

function WebsiteCafe ({onLogout}) {
  return (
<>
  <NAVBAR onLogout={onLogout}/>
  <Homepage/>
  <ProductSelection/>
  <AboutUs/>
  <ContactPage/>
  
  <Footer/>
  
</>
  );
}

export default WebsiteCafe;
