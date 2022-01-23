import './App.css';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar className='navbar'/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;


//?Installs
//! react-router-dom
//! react-grid-system
//! reactstrap
//! react-icons
//! pure-react-carousel