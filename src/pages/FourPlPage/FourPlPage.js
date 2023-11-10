import { LazyLoadImage } from "react-lazy-load-image-component";
import HeroSectionc from "../../components/HeroSectionc/HeroSectionc";
import HoverEffect from "../../components/HoverEffect/HoverEffect";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useScrollToTop } from "../../utils/Hooks/useScrollToTop";
import 'react-lazy-load-image-component/src/effects/blur.css';
import imgSrc from '../../assets/4pl-services.jpg';




const FourPlPage=()=>{

useScrollToTop();

return(
    <div className="fourpl-page margin-top">
            <HeroSectionc
            heading='4pl Services'
            desc='Complete from receiving the materials to Distribution points. That includes storage, inventory management, Billings and transportation to the clients.'
        />
        <HoverEffect className='about-details' className2='about-details-inner'>
            <Wrapper className='about-details-wrapper'>
                <div className="about-details-header">
                    <h1>4PL SERVICES</h1>
                    <p>
                    Lead logistics providers (LLPs), also referred to as fourth-party logistics (4PL) 
                    providers, have a broad role within the supply chain. ... A 4PL typically directs 
                    every moving part within the customer's supply chain and serves as a single point 
                    of contact for all parties involved, says Moses.
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
export default FourPlPage;