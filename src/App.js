 
import './App.css';
import AboutUs from './Components/About/AboutUs';
import Chef from './Components/Chef/Chef';
import FindUs from './Components/FindUs/FindUs';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Navbar from '../src/Components/Navbar/Navbar';
import Header from '../src/Components/Header/Header';
import SpecialMenu from './Components/SpecialMenu/SpecialMenu';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <AboutUs/>
     <SpecialMenu/>
     <Chef/>
     <Gallery/>
     <FindUs/>
     <Footer/>
     
    </div>
  );
}

export default App;
