import { useEffect, useRef, useState } from "react";
import './HoverEffect.css';


const HoverEffect = ({ children, className ,className2}) => {

    const [effect, setEffect] = useState(false);
    const itemRef=useRef(null);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(itemRef)
           itemRef.current.getBoundingClientRect().top <=window.innerHeight - 200 &&  setEffect(true);
        })
    },[])

    return (
        <div className={`hover-effect-container ${className? className:''}`} ref={itemRef}>
            <div className={`hover-effect-content ${effect? 'active':''} ${className2 ? className2: ''}`}>
                {children}
            </div>
        </div>
    );
}
export default HoverEffect;