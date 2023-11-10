import { LazyLoadImage } from "react-lazy-load-image-component";
import HeroSectionc from "../../components/HeroSectionc/HeroSectionc";
import HoverEffect from "../../components/HoverEffect/HoverEffect";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useScrollToTop } from "../../utils/Hooks/useScrollToTop";
import 'react-lazy-load-image-component/src/effects/blur.css';
import imgSrc from '../../assets/pest-control.jpg';




const PestControlPage = () => {
    useScrollToTop();

    return (
        <div className="pest-control margin-top">
            <HeroSectionc
                heading='Pest Control'
                desc='Pest control is the regulation or management of a species defined as a pest, a member of the animal kingdom that impacts adversely on human activities. ... This can be achieved by monitoring the crop, only applying insecticides when necessary, and by growing varieties and crops which are resistant to pests.'
            />
            <HoverEffect className='about-details' className2='about-details-inner'>
                <Wrapper className='about-details-wrapper'>
                    <div className="about-details-header">
                        <h1>PEST CONTROL</h1>
                        <p>
                        Pest control workers remove unwanted creatures, such as roaches, rats, ants,
                         bedbugs, and termites from homes, buildings, and surrounding areas. They typically
                          inspect buildings for signs of pests, determine the treatment needed, and estimate
                           the cost of their services for customers.
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
export default PestControlPage;