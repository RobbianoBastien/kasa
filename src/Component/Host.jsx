import React from "react";

function Host(props) {
    return (
        <>
          <span>{props.name}</span>
          <img
            src={props.picture}
            alt=""
          />
        </>
      );
  }


export default Host