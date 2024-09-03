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



  return (
    <>
    <img src={slides[index]}/>
    <img src={arrowRight} onClick={clickArrowRigth}/>
    <img src={arrowLeft} onClick={clickArrowLeft}/>
    <p>{index + 1}/{length}</p>
    </>
    
  )
    
}

let index=0


function displaydots() {
	for (let i = 0; i < slides.length; i++){
		const dot = document.createElement ("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		if ( i == index) {
			dot.classList.add("dot_selected")
		}
	}
}



/* function clickarrowleft() {
	arrowleft.addEventListener("click", () => {
		newdots = document.querySelectorAll(".dot");
		newdots[index].classList.remove("dot_selected");
		console.log(index)
		index --;
		if (index < 0) {
			index = slides.length - 1;
		}
		newdots[index].classList.add("dot_selected");
		img.src = slides[index].image;
		text.innerHTML = slides[index].tagLine;
	})
}



function clickarrowright() {
	arrowright.addEventListener("click", () => {
		const newdots = document.querySelectorAll(".dot");
		newdots[index].classList.remove("dot_selected");
		index++;
		if (index > slides.length - 1) {
			index = 0;
		}
		newdots[index].classList.add("dot_selected");
		img.src = slides[index].image;
		text.innerHTML = slides[index].tagLine;
	})
} */



export default Carrousel;