import { LazyLoadImage } from "react-lazy-load-image-component";
import imgSrc1 from '../../../../assets/img-1.jpg';
import imgSrc2 from '../../../../assets/img-2.jpg';
import imgSrc3 from '../../../../assets/img-3.jpg';
import imgSrc4 from '../../../../assets/img-7.jpg';
import imgSrc5 from '../../../../assets/img-8.jpg';
import imgSrc6 from '../../../../assets/img-9.jpg';
import imgSrc7 from '../../../../assets/img-10.jpg';
import imgSrc8 from '../../../../assets/img-11.jpg';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState } from "react";
import {AiOutlineSearch} from 'react-icons/ai';

const imgSrc = [imgSrc1, imgSrc2, imgSrc3, imgSrc4, imgSrc5, imgSrc6, imgSrc7, imgSrc8];
const GalleryCard = ({ index }) => {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="gallery-card"
            onMouseOver={() => setShowSearch(true)}
            onMouseMove={() => setShowSearch(false)}
        >
            <div className="gallery-image">
                <LazyLoadImage src={imgSrc[index]} alt='gallery' effect="blur" />
            </div>
            {
                showSearch && <div className="search">
                    <span><AiOutlineSearch /></span>
                </div>
            }
        </div>
    );
}
export default GalleryCard;