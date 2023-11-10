import { LazyLoadImage } from "react-lazy-load-image-component";
import HoverEffect from "../../../components/HoverEffect/HoverEffect";
import Wrapper from "../../../components/Wrapper/Wrapper";
import imgSrc from '../../../assets/about-bg.png';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const About = () => {

    return (
        <HoverEffect className='about-details' className2='about-details-inner'>
            <Wrapper className='about-details-wrapper'>
                <div className="about-details-header">
                    <h1>About <span>ADS Logistic</span> </h1>
                    <p>
                        <span>
                            Founded in 2018, we have been disrupting the sector, with our unique operational model and
                            cutting edge technology, to consistently provide unparalleled delivery times to our clients
                            while improving quality of life of our delivery people.
                        </span>
                        <span>
                            Our innovative operating model ensures that our delivery people live a life of fulfilment,
                            dignity and respect. Each of our drivers now spends less time away from their families, helping
                            them lead a meaningful and a balanced life. In our endeavour to make logistics human, we are truly
                            committed to operational safety at Steeleron, which ensures well-being of our drivers in every
                            possible way. As a result, our pilots ensure that we deliver goods in unprecedented delivery
                            time across locations, every single time, enabling us to provide superior service to our clients.
                        </span>
                    </p>
                </div>
                <div className="about-details-image">
                    <LazyLoadImage src={imgSrc} alt='about-bg' effect="blur" />
                </div>
            </Wrapper>
        </HoverEffect>
    );
}