import './WebsiteCafe.css';
import './MediaQuery.css'
import ProductsSelection from './Index Sections/ProductsSelection';
import NAVBAR from './Index Sections/NAVBAR'
import HOMEPAGE from './Index Sections/HOMEPAGE'
import AboutUs from './Index Sections/AboutUs'
import ContactPage from './Index Sections/ContactPage'
import Footer from './Index Sections/Footer'

export default function App() {
  return (
<>



  <NAVBAR/>
  <HOMEPAGE/>
  <ProductsSelection/>
  <AboutUs/>
  <ContactPage/>
  <Footer/>
</>

  );
}
