import React from 'react';
import emptyStar from '../assets/image/StarInactive.png';
import fullStar from '../assets/image/StarActive.png';


function Rating(props) {
      const score = props.score;
    const notes = [1, 2, 3, 4, 5];
    return (
      <div className="rate__contenair">
        {notes.map((note) =>
          score >= note ? (
            <img
              key={note.toString()}
              className="etoile"
              src={fullStar}
              alt="star"
            />
          ) : (
            <img
              key={note.toString()}
              className="etoile"
              src={emptyStar}
              alt="star"
            />
          )
        )}
      </div>
    );
}

export default Rating;