import { LazyLoadImage } from "react-lazy-load-image-component";
import HeroSectionc from "../../components/HeroSectionc/HeroSectionc";
import HoverEffect from "../../components/HoverEffect/HoverEffect";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useScrollToTop } from "../../utils/Hooks/useScrollToTop";
import 'react-lazy-load-image-component/src/effects/blur.css';
import imgSrc from '../../assets/truck.jpeg';


const SecurityPage = () => {

useScrollToTop();

    return (
        <div className="security-page margin-top">
            <HeroSectionc
                heading='Security'
                desc='Our partners in security are the industry leaders in geo-fencing technology. Experience total peace of mind when shipping with ADS Logistic.'
            />
             <HoverEffect className='about-details' className2='about-details-inner'>
            <Wrapper className='about-details-wrapper'>
                <div className="about-details-header">
                    <h1>Security</h1>
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
export default SecurityPage;