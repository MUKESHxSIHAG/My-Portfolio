import './App.css'
import './Root.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioNav from './Components/PortfolioNav';
import TechStack from './Components/TechStack';
import Footer from './Components/Footer';
import { Route, Routes,  } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Tech from './Components/Tech';
import Contact from './Components/Contact'; 
import About from './Components/About';

function App() {

  return (
    <>
    <div>

    <PortfolioNav/>
      <Routes>
      <Route path="/" Component={Home} />
        <Route path="/tech" Component={TechStack} />
        <Route path="/projects" Component={Projects} />
        <Route path="/tech" Component={Tech} />
        <Route path="/contact" Component={Contact} />
        <Route path="/about" Component={About} />
         

      </Routes>
    </div>
   <Footer/>
     
    </>
  )
}

export default App
