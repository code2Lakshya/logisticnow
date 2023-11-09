import HoverEffect from "../../../components/HoverEffect/HoverEffect";
import Wrapper from "../../../components/Wrapper/Wrapper";
import client1 from '../../../assets/LT.jpg';
import client2 from '../../../assets/RINL.jpg';
import client3 from '../../../assets/sail.jpg';
import client4 from '../../../assets/tata-steel.jpg';
import client5 from '../../../assets/ultratech.jpg';
import client6 from '../../../assets/as-logistics.jpg';
import './OurClients.css';


const OurClients=()=>{

    return(
        <HoverEffect className='ourClients' className2='ourClients-inner'>
            <Wrapper className='ourClients-wrapper'>
                <div className="ourClients-header">
                    <p>SOME OF OUR</p>
                    <h3>Clients</h3>
                </div>
                <div className="ourClients-content">
                    <div className="ourClients-cards">
                        <img src={client1} alt='clients' />
                        <img src={client2} alt='clients' />
                        <img src={client3} alt='clients' />
                        <img src={client4} alt='clients' />
                        <img src={client5} alt='clients' />
                        <img src={client6} alt='clients' />
                    </div>
                    <div className="ourClients-cards">
                        <img src={client1} alt='clients' />
                        <img src={client2} alt='clients' />
                        <img src={client3} alt='clients' />
                        <img src={client4} alt='clients' />
                        <img src={client5} alt='clients' />
                        <img src={client6} alt='clients' />
                    </div>
                </div>
            </Wrapper>
        </HoverEffect>
    );
}
export default OurClients;