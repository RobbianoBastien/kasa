import React from "react";
import './Host.scss'

function Host(props) {
    return (
        <>
        <div className="nom__containeur">
          <span className="nom">{props.firstname}</span>
          <span className="nom">{props.lastname}</span>
        </div>
          <img className="photo"
            src={props.picture}
            alt=""
          />
        </>
      );
  }


export default Host