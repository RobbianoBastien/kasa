import React from "react";
import './Tag.scss'

function Tag({ nom }) {
  return (
    <div className="tag">
      <span className="tag__button" >{nom}</span>
    </div>
  );
}

export default Tag;