import { GoLocation } from 'react-icons/go';
import { CiViewList } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';
import { AiOutlineMail, AiOutlinePhone, AiOutlineMenu } from 'react-icons/ai';
import Wrapper from '../Wrapper/Wrapper';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import HoverList from '../HoverList/HoverList';
import { useEffect, useState } from 'react';
import './Navbar.css';
import logoSrc from '../../assets/images.png';
import { useContext } from 'react';
import { AppContext } from '../../utils/Context/AppContext';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [showBanner,setShowBanner]=useState(true);
    const {setShowQuote}=useContext(AppContext);

    useEffect(()=>{
        const scrollCheck=()=>{
            window.scrollY > 200 ? setShowBanner(false): setShowBanner(true)
        }
        window.addEventListener('scroll',scrollCheck)
        return ()=>window.removeEventListener('scroll',scrollCheck)
    },[])

    return (
        <header className={showMenu ? 'not-active': 'active'}>

            {/** Banner  */}
            <div className={`banner ${showBanner ? 'active':''}`}>
                <Wrapper className='banner-wrapper'>
                    <p>
                        <span><GoLocation /></span>
                         New Town, Chakpachuria, West Bengal 700156 
                    </p>
                    <div id='banner-right'>
                        <p>
                            <span><AiOutlinePhone /></span>
                            +91  8282829955
                        </p>
                        <p>
                            <span><AiOutlineMail /></span>
                            info@adslogistic.in || sales@adslogistic.in
                        </p>
                    </div>
                </Wrapper>
            </div>

            {/**  Navbar  */}
            <nav>
                <Wrapper className='navbar-wrapper'>
                    <div className='logo'>
                       <Link to='/'> <LazyLoadImage src={logoSrc} alt='logo' effect='blur' /></Link>
                    </div>
                    <div className='navbar-right'>
                        <ul className={`navbar-list ${showMenu ? 'active' : ''}`}>
                            <li onClick={()=>setShowMenu(false)}><Link to='/'>Home</Link></li>
                            <li onClick={()=>setShowMenu(false)}><Link to='/about'>About</Link></li>
                            <li id='hover'>
                                <HoverList
                                    heading='Services'
                                    list={['Security', '3PL Services', 'Pest Control', 'Transport', '4PL Services']}
                                    onClick={()=>setShowMenu(false)}
                                />
                            </li>
                            <li onClick={()=>setShowMenu(false)}><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                        <button onClick={()=>setShowQuote(true)}>
                            <span><CiViewList /></span>
                            Request Quote
                        </button>
                        <button onClick={() => setShowMenu(!showMenu)} className='menubtn'>
                            {
                                !showMenu ? <AiOutlineMenu /> : <RxCross1 />
                            }
                        </button>
                    </div>
                </Wrapper>
            </nav>
            
        </header>
    );
}
export default Navbar;