import { Link } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import { AiFillHome } from 'react-icons/ai';
import './HeroSectionc.css';

const HeroSectionc = ({ heading ,desc}) => {

    return (
        <div className="hero-common">
            <Wrapper className='hero-common-wrapper'>
                <div className="hero-common-icons">
                    <span><Link to='/'><AiFillHome /></Link></span>
                    <span>/</span>
                    <span>{heading}</span>
                </div>
                <h1>{heading}</h1>
                <p>
                    {desc}
                </p>
            </Wrapper>
        </div>
    );
}
export default HeroSectionc;