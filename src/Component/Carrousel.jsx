import React, { useState } from "react";
import arrowRight from "../assets/image/ArrowRigth.png"
import arrowLeft from "../assets/image/ArrowLeft.png"
import './Carrousel.scss'

function Carrousel({ slides }) {
  const [index,setIndex] = useState(0);
  let length = slides.length;
  
  function clickArrowLeft()  {
      if (index === 0) {
        setIndex (length - 1)
      }
      else {
        setIndex(index - 1)
      }
      
    }

    function clickArrowRigth()  {
      if (index === length - 1) {
        setIndex (0)
      }
      else {
        setIndex(index + 1)
      }
      
    }




  
		if(length > 1){
		return(
			<div className="carrousel">
			<img className="carrousel__img" src={slides[index]}/>
			<img className="carrousel__arrowRigth" src={arrowRight} onClick={clickArrowRigth}/>
			<img className="carrousel__arrowLeft" src={arrowLeft} onClick={clickArrowLeft}/>
			<p className="carrousel__slideNumber" >{index + 1}/{length}</p>
			</div>
		)
	}
	 
}

export default Carrousel;