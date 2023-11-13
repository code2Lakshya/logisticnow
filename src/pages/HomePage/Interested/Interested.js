import HoverEffect from "../../../components/HoverEffect/HoverEffect";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { AiOutlineRight } from 'react-icons/ai';
import './Interested.css';
import {useNavigate} from 'react-router-dom';

const Interested = () => {

    const navigate=useNavigate();

    return (
        <HoverEffect className='interested' className2='interested-inner'>
            <Wrapper className='interested-wrapper'>
                <h3>
                    Interested in working with ADS Logistic and Solutions?
                </h3>
                <div>
                    <p>
                        We don’t just manage suppliers, we micro-manage them. We have a consultative, personalized approach
                    </p>
                    <button onClick={()=>navigate('/contact')}>Get In Touch<span><AiOutlineRight /></span></button>
                </div>
            </Wrapper>
        </HoverEffect>
    );
}
export default Interested;