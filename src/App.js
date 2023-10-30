
import './App.css';
import BannerSecond from './components/CloudHosting/CloudHosting';
import Header from './components/Header/Header';
import BannerThird from './components/Features/Features'
import { Badge } from 'react-bootstrap';
import BannerFourth from './components/PackageSelector/PackageSelector';
import BannerFifth from './components/RealStories/RealStories';
import Bottom1 from './components/Websites/Website';
import Bottom2 from './components/ContactDetails/ContactDetails';
import Footer from './components/Footer/Footer';

import CreatingAccount from './components/CreatingAccount/CreatingAccount';
function App() {
  return (
    <div className="App">
    <Header/>
    <CreatingAccount/>
    <BannerSecond/>
     <BannerThird/>
    <BannerFourth/>
    <BannerFifth/>
    <Bottom1/>
    <Bottom2/>
    <Footer/>
  
        </div>
  );
}

export default App;
