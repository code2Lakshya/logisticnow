import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import heroImgSrc1 from '../../../assets/hero1.jpeg';
import heroImgSrc2 from '../../../assets/hero2.jpeg';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import './HeroSection.css';
import { useEffect, useState } from "react";

const HeroSection = () => {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScroll(0);
        })
        let loop = setInterval(() => {
            setScroll(prev => prev ===3 ? 0:prev+1)
        }, 7000)
        return () => clearInterval(loop)
    }, [])

    const clickHandler = (type) => {
        if (type === 'left') {
            if (scroll !== 0)
                setScroll(scroll - 1)
            else {
                setScroll(3);
            }
        }
        if (type === 'right') {
            if (scroll !== 3)
                setScroll(scroll + 1);
            else {
                setScroll(0);
            }
        }
    }

    return (
        <div className="hero-section">
            <div className="hero-cards">
                <div className={`hero-card ${scroll===0 ? 'active': 'not-active'}`} style={{ transform: `translateX(-${scroll * 100}%)` }}>
                    <LazyLoadImage src={heroImgSrc1} alt='hero' effect='blur' />
                </div>
                <div className={`hero-card ${scroll===1 ? 'active': 'not-active'}`} style={{ transform: `translateX(-${scroll * 100}%)` }}>
                    <LazyLoadImage src={heroImgSrc2} alt='hero2' effect='blur' />
                    <p>Future Thinking <span>Transport & Logistic</span></p>
                </div>
                <div className={`hero-card ${scroll===2 ? 'active': 'not-active'}`} style={{ transform: `translateX(-${scroll * 100}%)` }}>
                    <LazyLoadImage src={heroImgSrc1} alt='hero' effect='blur' />
                </div>
                <div className={`hero-card ${scroll===3 ? 'active': 'not-active'}`} style={{ transform: `translateX(-${scroll * 100}%)` }}>
                    <LazyLoadImage src={heroImgSrc2} alt='hero2' effect='blur' />
                    <p>Future Thinking <span>Transport & Logistic</span></p>
                </div>

            </div>
            <span id='left' className="btn" onClick={() => clickHandler('left')}><AiOutlineLeft /></span>
            <span id='right' className="btn" onClick={() => clickHandler('right')}><AiOutlineRight /></span>
        </div>
    );
}
export default HeroSection;