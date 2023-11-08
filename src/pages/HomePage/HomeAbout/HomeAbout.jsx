import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { homeAbout } from "../../../utils/variables";
import ProgressBar from "../../../components/progressBar/ProgressBar";
import Wrapper from "../../../components/Wrapper/Wrapper";
import HoverEffect from "../../../components/HoverEffect/HoverEffect";
import './HomeAbout.css';
import imgSrc from '../../../assets/homeAbout.jpg';

const HomeAbout = () => {

    return (
        <HoverEffect className="homeAbout-container" className2='homeAbout'>
            <div className="homeAbout-inner">
                <Wrapper className='homeAbout-wrapper'>
                    <div className="homeAbout-image">
                        <LazyLoadImage src={imgSrc} alt='truck' effect='blur' />
                    </div>
                    <div className="homeAbout-content">
                        <div className="homeAbout-header">
                            <p>About Us</p>
                            <h3>Welcome To ADS Logistic</h3>
                        </div>
                        <p>
                            Our innovative operating model ensures that our delivery people live a life of fulfilment, dignity
                            and respect. Each of our drivers now spends less time away from their families, helping them lead a
                            meaningful and a balanced life. In our endeavour to make logistics human, we are truly committed to
                            operational safety at Steeleron, which ensures well-being of our drivers in every possible way.
                            As a result, our pilots ensure that we deliver goods in unprecedented delivery time across locations,
                            every single time, enabling us to provide superior service to our clients.
                        </p>
                        <div className="progress-bars">
                            {
                                homeAbout.map((item, index) => <ProgressBar key={index} {...item} className='homeAbout-progress-bar' />)
                            }
                        </div>
                    </div>
                </Wrapper>
            </div>
            <img src='https://steeleron.com/wp-content/themes/logzee/assets/images/bg-wave.svg' alt='background' />
        </HoverEffect>
    );
}
export default HomeAbout;