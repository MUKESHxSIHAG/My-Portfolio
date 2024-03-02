import './App.css'
import './Root.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioNav from './Components/PortfolioNav';
import HeroSection from './Components/HeroSection';
import TechStack from './Components/TechStack';
import Map from './Components/Map';
import Footer from './Components/Footer';

function App() {

  return (
    <>
   <PortfolioNav/>
   <HeroSection/>
   <TechStack/>
   <Map/>
   <Footer/>
     
    </>
  )
}

export default App
