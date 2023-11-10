import HeroSection from './HeroSection/HeroSection';
import HomeAbout from './HomeAbout/HomeAbout';
import './HomePage.css';
import OurServices from './OurServices/OurServices';
import Services from './Services/Services';
import imgSrc from '../../assets/bg.jpeg';
import HomeIcons from './HomeIcons/HomeIcons';
import Interested from './Interested/Interested';
import OurClients from './OurClients/OurClients';
import Location from './Location/Location';
import { useScrollToTop } from '../../utils/Hooks/useScrollToTop';

const HomePage = () => {

useScrollToTop();

    return (
        <div className="home-page margin-top">
            <HeroSection />
            <Services />
            <HomeAbout />
            <OurServices />
            <HomeIcons />
            <Interested />
            <OurClients />
            <Location />
            <img src={imgSrc} alt='scenery' />
        </div>
    );
}
export default HomePage;