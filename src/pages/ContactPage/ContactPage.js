import HeroSectionc from "../../components/HeroSectionc/HeroSectionc";
import HoverEffect from "../../components/HoverEffect/HoverEffect";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useScrollToTop } from "../../utils/Hooks/useScrollToTop";
import Location from "../HomePage/Location/Location";
import { FaLocationDot } from 'react-icons/fa6';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { useState } from "react";
import './ContactPage.css';
import toast from "react-hot-toast";


const ContactPage = () => {

    const [userInput, setUserInput] = useState({ name: '', email: '', message: '' });
    useScrollToTop();

    const changeHandler = (e) => {
        setUserInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        setUserInput({ name: '', email: '', message: '' });
        toast.success('Form Submitted');
    }

    return (
        <div className="contact-page margin-top">
            <HeroSectionc heading='Contact'
                desc='Any problem Contact Us'
            />
            <Location />
            <HoverEffect className='contact-details' className2='contact-details-inner'>
                <Wrapper className='contact-details-wrapper'>
                    <div className="address">
                        <h3>Our Address</h3>
                        <p>
                            <span><FaLocationDot /></span>
                            New Town, Chakpachuria, West Bengal 700156
                        </p>
                        <p>
                            <span><AiFillPhone /></span>
                            +91 8282829955
                        </p>
                        <p>
                            <span><AiOutlineMail /></span>
                            info@adslogistic.in 
                        </p>
                        <p>
                            <span><AiOutlineMail /></span>
                             sales@adslogistic.in
                        </p>
                    </div>
                    <div className="contact-form">
                        <h3>Say Hello! Its Free</h3>
                        <form onSubmit={submitHandler}>
                            <div>
                                <input
                                    type='text'
                                    placeholder="Your Name"
                                    value={userInput.name}
                                    onChange={changeHandler}
                                    name='name'
                                    autoComplete="on"
                                    required
                                />
                                <input
                                    type='email'
                                    placeholder="Your Email"
                                    value={userInput.email}
                                    onChange={changeHandler}
                                    name='email'
                                    autoComplete="on"
                                    required
                                />
                            </div>
                            <textarea
                                rows='10'
                                cols='10'
                                name='message'
                                value={userInput.message}
                                onChange={changeHandler}
                                placeholder="Your Message"
                                required
                            />
                            <button type='submit'>Submit Now</button>
                        </form>
                    </div>
                </Wrapper>
            </HoverEffect>
        </div>
    );
}
export default ContactPage;