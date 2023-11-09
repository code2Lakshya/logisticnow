import Wrapper from "../Wrapper/Wrapper";
import logo from '../../assets/logo2.png';
import { services } from "../../utils/variables";
import { Link } from "react-router-dom";
import { FiTwitter } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {

    return (
        <footer>

            {/** Footer top */}
            <div className="footer-list">
                <Wrapper className='footer-list-wrapper'>
                    <div className="footer-desc">
                        <img src={logo} alt='logo' />
                        <p>
                            Founded in 2018, we have been disrupting the sector, with our unique operational
                            model and cutting edge technology, to consistently provide unparalleled delivery
                            times to our clients while improving quality of life of our delivery people.
                        </p>
                    </div>
                    <div className="footer-services footer-heading">
                        <h3>Our Services</h3>
                        <ul>
                            {
                                services.map((item, index) => <li key={index}>
                                    <Link to={item.toLowerCase().replaceAll(' ', '-')}>{item}</Link>
                                </li>)
                            }
                        </ul>
                    </div>
                    <div className="get-in-touch footer-heading">
                        <h3>Get In Touch</h3>
                        <div>
                            <p>Webel IT Park, Module 101, 1st Floor,New Town, Chakpachuria, West Bengal 700156</p>
                            <p>8282829955</p>
                            <p>info@adslogistic.in</p>
                            <p>sales@adslogistic.in</p>
                            <div className="date">
                                <h3>Mon – Fri</h3>
                                <p>10:00 Am – 6:00 PM EST</p>
                            </div>
                        </div>
                    </div>
                    <div className="tweets footer-heading">
                        <h3>Recent Tweets</h3>
                        <p>
                            Our clients leverage 50-70% reduced Turn Around Time and higher reliability to
                            reinvent their business models
                        </p>
                        <a href='/'>
                            <span><FiTwitter /></span>
                            Follow @ Twitter
                        </a>
                    </div>
                </Wrapper>
            </div>

            {/** Footer bottom */}
            <div className="footer-bottom">
                <Wrapper className='footer-bottom-wrapper'>
                    <p>
                        © Copyright 2020. All Rights Reserved. Developed by LearnKnow Digital
                    </p>
                </Wrapper>
            </div>
        </footer>
    );
}
export default Footer;