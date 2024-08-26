import './DropDown.scss'
import React, { useState } from "react";

function DropDown () {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return ( 
    <>
    <div className="dropdown" onClick={handleClick}>
        titre
    </div>
    <div className={`Content ${isOpen ? 'open' : 'close'}`}>
        contenue
    </div>
    </>
     );
}

export default DropDown ;