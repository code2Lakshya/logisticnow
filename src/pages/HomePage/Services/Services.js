import { LazyLoadImage } from "react-lazy-load-image-component";
import HoverEffect from "../../../components/HoverEffect/HoverEffect";
import Wrapper from "../../../components/Wrapper/Wrapper";
import 'react-lazy-load-image-component/src/effects/blur.css';
import servicesSrc from '../../../assets/3pl-services.jpg';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsArrowRight } from 'react-icons/bs';
import { MdEmojiTransportation,MdPestControl } from 'react-icons/md';
import { ImTree } from 'react-icons/im';
import { Link } from "react-router-dom";
import './Services.css';

const Services = () => {

    return (
        <HoverEffect className='services'>
            <Wrapper className='services-wrapper'>
                <div className="services-left">
                    <div className="services-image">
                        <LazyLoadImage src={servicesSrc} alt='services' effect="blur" />
                    </div>
                    <p>
                        We are a technology-enabled logistics company that aims to deliver reliability through our network
                        and provide transparency to our clients. Founded in 2018, we have been disrupting the sector, with
                        our unique operational model and cutting edge technology, to consistently provide unparalleled delivery
                        times to our clients while improving quality of life of our delivery people.
                    </p>
                </div>
                <div className="service-cards">
                    <div className="service-card">
                        <span>
                            <TbTruckDelivery />
                        </span>
                        <p>
                            3PL SERVICES
                        </p>
                        <span>
                            3PL SERVICES
                        </span>
                        <Link to='/3pl-services'><BsArrowRight /></Link>
                    </div>
                    <div className="service-card">
                        <span>
                            <MdEmojiTransportation />
                        </span>
                        <p>
                            TRANSPORT
                        </p>
                        <span>
                            TRANSPORT
                        </span>
                        <Link to='/transport'><BsArrowRight /></Link>
                    </div>
                    <div className="service-card">
                        <span>
                            <ImTree />
                        </span>
                        <p>
                            4PL SERVICES
                        </p>
                        <span>
                            4PL SERVICES
                        </span>
                        <Link to='/4pl-services'><BsArrowRight /></Link>
                    </div>
                    <div className="service-card">
                        <span>
                            <MdPestControl />
                        </span>
                        <p>
                            PEST CONTROL
                        </p>
                        <span>
                            PEST CONTROL
                        </span>
                        <Link to='/pest-control'><BsArrowRight /></Link>
                    </div>
                </div>
            </Wrapper>
        </HoverEffect>
    );
}
export default Services;