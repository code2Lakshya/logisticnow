import { LazyLoadImage } from "react-lazy-load-image-component";
import HeroSectionc from "../../components/HeroSectionc/HeroSectionc";
import HoverEffect from "../../components/HoverEffect/HoverEffect";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useScrollToTop } from "../../utils/Hooks/useScrollToTop"
import 'react-lazy-load-image-component/src/effects/blur.css';
import imgSrc from '../../assets/transport.jpg';


const TransportPage=()=>{
    
    useScrollToTop();

    return(
        <div className="transport-page margin-top">
        <HeroSectionc
            heading='Transport'
            desc='Transportation, the movement of goods and persons from place to place and the various means by which such movement is accomplished.'
        />
        <HoverEffect className='about-details' className2='about-details-inner'>
            <Wrapper className='about-details-wrapper'>
                <div className="about-details-header">
                    <h1>TRANSPORT</h1>
                    <p>
                    Couriers – Parcels – Taxi Trucks – Fleet Management – Heavy Haulage – Line Haul – Container Transport – Freight Forwarding-Transport
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
export default TransportPage;