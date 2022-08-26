import React from "react";
import "./Vehicule_card.css";

export default function Vehicule_card({ card }) {
  return (
    <div className="Card">
      <div className="Img_container">
        <img src={card.img} alt="truck" />
      </div>
      <dv className="Title_container">
        <h3 className="Title_vehicule">{card.title}</h3>
        <h3 className="Title_vehicule">{card.title2}</h3>
      </dv>
    </div>
  );
}
