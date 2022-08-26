import React from "react";
import "./Number_card.css"

export default function Number_card({ card }) {
  return (
    <div className="Number_card">
      <h3 className="Number_card_text">{card.number}</h3>
      <h3 className="Number_card_desc">{card.text}</h3>
    </div>
  );
}
