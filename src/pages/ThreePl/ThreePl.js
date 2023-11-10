import { LazyLoadImage } from "react-lazy-load-image-component";
import HeroSectionc from "../../components/HeroSectionc/HeroSectionc";
import HoverEffect from "../../components/HoverEffect/HoverEffect";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useScrollToTop } from "../../utils/Hooks/useScrollToTop";
import imgSrc from '../../assets/3pl-services.jpg';
import 'react-lazy-load-image-component/src/effects/blur.css';

 const ThreePl = () => {

    useScrollToTop();

    return (
        <div className="3pl-services margin-top">
            <HeroSectionc
                heading='3pl Services'
                desc="Third-party logistics in logistics and supply chain management is an organization's use of third-party businesses to outsource elements of its distribution, warehousing, and fulfillment service"
            />
               <HoverEffect className='about-details' className2='about-details-inner'>
            <Wrapper className='about-details-wrapper'>
                <div className="about-details-header">
                    <h1>3PL Services</h1>
                    <p>
                    Security is the cornerstone of our daily operations at ADS Logistic. We employ a
                     multitude of standard operating procedures to ensure we provide our partners with 
                     the highest level of security offered in the transportation industry. See for yourself 
                     why Security Transport lives up to its name every day.
                    </p>
                </div>
                <div className="about-details-image">
                    <LazyLoadImage src={imgSrc} alt='about-bg' effect="blur" />
                </div>
            </Wrapper>
        </HoverEffect>
        </div>
    );
}

export default ThreePl;