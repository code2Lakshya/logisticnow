import { LazyLoadImage } from "react-lazy-load-image-component";
import HoverEffect from "../../../components/HoverEffect/HoverEffect";
import Wrapper from "../../../components/Wrapper/Wrapper";
import 'react-lazy-load-image-component/src/effects/blur.css';
import imgSrc from '../../../assets/ourServices.jpg';
import { MdPestControl } from 'react-icons/md';
import './OurServices.css';

const OurServices = () => {

    return (
        <HoverEffect className='ourservices' className2='ourservices-inner'>
            <Wrapper className='ourservices-wrapper'>
                <div className="ourservices-header">
                    <p>OUR SERVICES</p>
                    <h3>What Makes Us Special</h3>
                </div>
                <div className="ourservices-footer">
                    <div className="ourservices-image">
                        <LazyLoadImage src={imgSrc} alt='man-with-hat' effect="blur" />
                    </div>
                    <div className="ourservices-cards">
                        <div className="ourservices-card">
                            <div className="ourservices-icon">
                                <span></span>
                                <span><MdPestControl /></span>
                            </div>
                            <div className="ourservices-content">
                                <h3>3PL SERVICES</h3>
                                <p>
                                    Contracted Distribution – General Warehousing – Temperature Controlled Storage –
                                    Pick and Pack Services – Bulk Product Storage – Minerals and Energy Supply Base
                                    Services
                                </p>
                            </div>
                        </div>
                        <div className="ourservices-card">
                            <div className="ourservices-icon">
                                <span></span>
                                <span><MdPestControl /></span>
                            </div>
                            <div className="ourservices-content">
                                <h3>Transport</h3>
                                <p>
                                    Couriers – Parcels – Taxi Trucks – Fleet Management – Heavy Haulage – Line Haul – Container Transport –
                                    Freight Forwarding-Transport
                                </p>
                            </div>
                        </div>
                        <div className="ourservices-card">
                            <div className="ourservices-icon">
                                <span></span>
                                <span><MdPestControl /></span>
                            </div>
                            <div className="ourservices-content">
                                <h3>4PL SERVICES</h3>
                                <p>
                                    Complete from receiving the materials to Distribution points. That includes storage, inventory
                                    management, Billings and transportation to the clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </HoverEffect>
    );
}
export default OurServices;