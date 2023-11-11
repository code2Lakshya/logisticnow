import { LazyLoadImage } from "react-lazy-load-image-component";
import imgSrc from '../../assets/quote.jpeg';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState } from "react";
import { options1, options2 } from "../../utils/variables";
import toast from "react-hot-toast";
import './Quote.css';
import { RxCross2 } from 'react-icons/rx';
import { useContext } from "react";
import { AppContext } from "../../utils/Context/AppContext";

const Quote = () => {

    const [userInput, setUserInput] = useState({
        freight: '',
        incoterms: '',
        departure: '',
        delivery: '',
        weight: '',
        dimensions: '',
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const { setShowQuote } = useContext(AppContext);

    const changeHandler = (e) => {
        setUserInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const submitHandler = (e) => {
        e.preventDefault();
        // Network call to server to send data 
        setUserInput({
            freight: '',
            incoterms: 'Incoterms',
            departure: '',
            delivery: '',
            weight: '',
            dimensions: '',
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        toast.success('Form Submitted');
    }
    return (
        <div className="quote-container">
            <div className="quote-outer">
                <div className="quote-inner">
                    <div className="quote-image">
                        <LazyLoadImage src={imgSrc} alt='girl_with_phone' effect="blur" />
                    </div>
                    <div className="quote-form">
                        <span onClick={() => setShowQuote(false)}><RxCross2 /> </span>
                        <h3>Request A Quote</h3>
                        <form onSubmit={submitHandler} id='quote'>
                            <div id='select' className="group">
                                <div>
                                    <select className={userInput.freight.length===0?'active':''} name='freight' value={userInput.freight} onChange={changeHandler} required >
                                        {
                                            options1.map((item, index) => <option key={index} value={item}>{item}</option>)
                                        }
                                    </select>
                                </div>
                                <div>
                                    <select name='incoterms' className={userInput.incoterms.length===0?'active':''} value={userInput.incoterms} onChange={changeHandler} required>
                                        {
                                            options2.map((item, index) => <option key={index} value={item}>{item}</option>)
                                        }
                                    </select>
                                </div>
                            </div>
                            <div id='city' className="group">
                                <input type='text'
                                    name='departure'
                                    placeholder="City of Departure"
                                    value={userInput.departure}
                                    onChange={changeHandler}
                                    required
                                    autoComplete="on"
                                />
                                <input type='text'
                                    name='destination'
                                    placeholder="Delivery City"
                                    value={userInput.destination}
                                    onChange={changeHandler}
                                    required
                                    autoComplete="on"
                                />
                            </div>
                            <div id='size' className="group">
                                <input type='number'
                                    name='weight'
                                    placeholder="Total gross weight (KG)"
                                    value={userInput.weight}
                                    onChange={changeHandler}
                                    required
                                />
                                <input type='text'
                                    name='dimensions'
                                    placeholder="Dimensions"
                                    value={userInput.dimensions}
                                    onChange={changeHandler}
                                    required
                                />
                            </div>
                            <div className="quote-form-lower">
                                <div id='heading'>
                                    <span></span>
                                    <p>YOUR PERSONAL DETAILS</p>
                                    <span></span>
                                </div>
                                <div className="quote-form-details">
                                    <div className="quote-user">
                                        <input type='text'
                                            name='name'
                                            placeholder="Name"
                                            value={userInput.name}
                                            onChange={changeHandler}
                                            required
                                            autoComplete="on"
                                        />
                                        <input type='email'
                                            name='email'
                                            placeholder="Email"
                                            value={userInput.email}
                                            onChange={changeHandler}
                                            required
                                            autoComplete="on"
                                        />
                                        <input type='number'
                                            name='phone'
                                            placeholder="Phone Number"
                                            value={userInput.phone}
                                            onChange={changeHandler}
                                            required
                                            autoComplete="on"
                                        />
                                    </div>
                                    <textarea rows='10'
                                        cols='10'
                                        name='message'
                                        placeholder="Message"
                                        value={userInput.message}
                                        onChange={changeHandler}
                                    ></textarea>
                                </div>
                                <button type='submit'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Quote;