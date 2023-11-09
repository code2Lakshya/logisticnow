import HoverEffect from "../../../components/HoverEffect/HoverEffect";
import Wrapper from "../../../components/Wrapper/Wrapper";
import imgSrc1 from '../../../assets/img-1.jpg';
import imgSrc2 from '../../../assets/img-2.jpg';
import imgSrc3 from '../../../assets/img-3.jpg';
import imgSrc4 from '../../../assets/img-7.jpg';
import imgSrc5 from '../../../assets/img-8.jpg';
import imgSrc6 from '../../../assets/img-9.jpg';
import imgSrc7 from '../../../assets/img-10.jpg';
import imgSrc8 from '../../../assets/img-11.jpg';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur';

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
                        <div>
                            <LazyLoadImage src={imgSrc1} alt='gallery' effect="blur" />
                        </div>
                        
                    </div>
                </div>
            </Wrapper>
        </HoverEffect>
    );
}
export default OurGallery;