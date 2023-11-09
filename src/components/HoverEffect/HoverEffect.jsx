import { useEffect, useRef, useState } from "react";
import './HoverEffect.css';


const HoverEffect = ({ children, className, className2 }) => {

    const [effect, setEffect] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
        const checkScroll = () => {
            if (itemRef)
                itemRef.current.getBoundingClientRect().top <= window.innerHeight - 150 && setEffect(true);
        }
        window.addEventListener('scroll',checkScroll);
        return ()=>window.removeEventListener('scroll',checkScroll);
    }, [])

    return (
        <div className={`hover-effect-container ${className ? className : ''}`} ref={itemRef}>
            <div className={`hover-effect-content ${effect ? 'active' : ''} ${className2 ? className2 : ''}`}>
                {children}
            </div>
        </div>
    );
}
export default HoverEffect;