import './App.css'
import './Root.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioNav from './Components/PortfolioNav';
import TechStack from './Components/TechStack';
import Footer from './Components/Footer';
import { Route, Routes,  } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';

function App() {

  return (
    <>
    <div>

    <PortfolioNav/>
      <Routes>
      <Route path="/" Component={Home} />
        <Route path="/tech" Component={TechStack} />
        <Route path="/project" Component={Projects} />
          
          
         

      </Routes>
    </div>
   <Footer/>
     
    </>
  )
}

export default App
