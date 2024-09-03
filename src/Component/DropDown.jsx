import './DropDown.scss'
import ArrowUp from "../assets/image/ArrowUp.png"
import React, { useState } from "react";

function DropDown (props) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return ( 
    <div className='dropdown__contenair'>
    <div className="dropdown" onClick={handleClick}>
        <h3 className='dropdown__title'>{props.title}</h3>
        <img className='dropdown__img' src={ArrowUp} alt="" />
    </div>
    <div className={`Content ${isOpen ? 'open' : 'close'}`}>
        <p className='dropdown__content'>{props.content}</p>
    </div>
    </div>
     );
}

export default DropDown ;