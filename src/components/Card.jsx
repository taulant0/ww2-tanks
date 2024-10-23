import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img
          className="circle-img"
          src={props.image}
          alt="tank_img"
        />
      </div>
      <div className="bottom">
        <p className="info">Country: {props.country}</p>
        <p className="info">Year: {props.year}</p>
        <p className="info">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
