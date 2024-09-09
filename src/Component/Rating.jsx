import React from 'react';
import emptyStar from '../assets/image/StarInactive.png';
import fullStar from '../assets/image/StarActive.png';
import "./Rating.scss"

function Rating(props) {
      const score = props.score;
    const notes = [1, 2, 3, 4, 5];
    return (
      <div className='star__container'>
        {notes.map((note) =>
          score >= note ? (
            <img
              key={note.toString()}
              className='star'
              src={fullStar}
              alt="star"
            />
          ) : (
            <img
              key={note.toString()}
              className='star'
              src={emptyStar}
              alt="star"
            />
          )
        )}
      </div>
    );
}

export default Rating;