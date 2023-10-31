
import './App.css';
import CloudHosting from './components/CloudHosting/CloudHosting';
import Header from './components/Header/Header';
import Features from './components/Features/Features'
import PackageSelector from './components/PackageSelector/PackageSelector';
import RealStories from './components/RealStories/RealStories';
import Websites from './components/Websites/Website';
import ContactDetails from './components/ContactDetails/ContactDetails';
import Footer from './components/Footer/Footer';
import CreatingAccount from './components/CreatingAccount/CreatingAccount';

function App() {
  return (
    <div className="App">
    <Header/>
    <CreatingAccount/>
     <CloudHosting/>
     <Features/>
    <PackageSelector/>
    <RealStories/>
    <Websites/>
    <ContactDetails/>
    <Footer/>
  
        </div>
  );
}

export default App;
