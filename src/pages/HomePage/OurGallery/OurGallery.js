import HoverEffect from "../../../components/HoverEffect/HoverEffect";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import './OurGallery.css';

const OurGallery = () => {

    return (
        <HoverEffect className='ourGallery' className2='ourGallery-inner'>
            <Wrapper className='ourGallery-wrapper'>
                <div className="ourGallery-header">
                    <p>OUR GALLERY</p>
                    <h3>Photo Showcase</h3>
                </div>
                <div className="ourGallery-images">
                    <div className="ourGallery-card" id='one'>
                        
                        
                    </div>
                </div>
            </Wrapper>
        </HoverEffect>
    );
}
export default OurGallery;