import HoverEffect from "../../../components/HoverEffect/HoverEffect";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { GoLocation } from 'react-icons/go';
import { FiUmbrella } from 'react-icons/fi';
import { BsGlobe2,BsTruck } from 'react-icons/bs';
import './HomeIcons.css';

const HomeIcons = () => {

    return (
        <HoverEffect className='homeIcons' className2='homeIcons-inner'>
            <Wrapper className='homeIcons-cards'>
                <div className="homeIcons-card">
                    <span><GoLocation /></span>
                    <p>1</p>
                    <h3>Our Locations</h3>
                </div>
                <div className="homeIcons-card">
                    <span><BsGlobe2 /></span>
                    <p>6</p>
                    <h3>Clients Worldwide</h3>
                </div>
                <div className="homeIcons-card">
                    <span><BsTruck /></span>
                    <p>16</p>
                    <h3>Owned Vehicles</h3>
                </div>
                <div className="homeIcons-card">
                    <span><FiUmbrella /></span>
                    <p>12000</p>
                    <h3>Tonnes Transported</h3>
                </div>
            </Wrapper>
        </HoverEffect>
    );
}
export default HomeIcons;