import HeroSection from './HeroSection/HeroSection';
import HomeAbout from './HomeAbout/HomeAbout';
import './HomePage.css';
import OurServices from './OurServices/OurServices';
import Services from './Services/Services';
import imgSrc from '../../assets/bg.jpeg';

const HomePage = () => {

    return (
        <div className="home-page margin-top">
            <HeroSection />
            <Services />
            <HomeAbout />
            <OurServices />
            <img src={imgSrc} alt='scenery' />
        </div>
    );
}
export default HomePage;