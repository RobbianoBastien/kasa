import React, { useState } from "react";

function Carrousel({ slides }) {
  const [current, setCurrent] = useState(0); 
  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); 
  };
  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section >
      {length > 1 && (
        <p onClick={prevImage}>
          <i></i>
        </p>
      )}
      {length > 1 && (
        <p onClick={nextImage}>
          <i></i>
        </p>
      )}
      {slides.map((image, index) => {
        return (
          <div
            key={index}
          >
            {index === current && (
              <img src={image} alt=""/>
            )}
            {index === current && length > 1 && (
              <span>
                {current + 1}/{length}
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carrousel;