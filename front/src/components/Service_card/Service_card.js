import React from "react";
import "./Service_card.css";

export default function Service_card({ card }) {
  return (
    <div className="Service_card">
      <h3 className="Service_card_title">{card.title}</h3>
      <h3 className="Service_card_text">{card.text}</h3>
    </div>
  );
}
