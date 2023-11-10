import { useState } from 'react';
import { useEffect } from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai';
import './ScrollToTop.css';

const ScrollToTop=()=>{

    const [scrollShow,setScrollShow]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY >= window.innerHeight ? setScrollShow(true): setScrollShow(false);
        })
    },[])

    if(scrollShow)
    return(
        <div className="scrollToTop" onClick={()=>window.scrollTo(0,0)}>
            <span><AiOutlineArrowUp /></span>
        </div>
    );
    else
    return <p></p>;
}
export default ScrollToTop;