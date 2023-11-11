import { useState } from "react";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from "react-router-dom";
import './HoverList.css';

const HoverList = ({ heading, list ,onClick}) => {

    const [hoverList, setHoverList] = useState(false);

    return (
        <div className="hover-container" onMouseOver={()=> setHoverList(true)} onMouseLeave={()=>setHoverList(false)}>
            <h3>
                {heading}
                <span><MdKeyboardArrowDown /></span>
            </h3>
            {hoverList &&
                <ul className="hover-list">
                    {
                        list && list.map((item, index) => <li key={index} onClick={onClick}>
                            <Link to={item.replaceAll(' ', '-')}>{item}</Link>
                        </li>)
                    }
                </ul>
            }
        </div>
    );
}
export default HoverList;