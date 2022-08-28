import React from "react";
import "./Vehicules.css";
import Vehicule_card from "../../components/Vehicule_card/Vehicule_card";
import Fiat_Dobla_Fourgon from "../../images/Fiat_Dobla_Fourgon.png";
import Isuzu_FTR_850 from "../../images/Isuzu_FTR_850.png";
import Isuzu_NQR_500 from "../../images/Isuzu_NQR_500.png";
import Toyota_Dyna from "../../images/Toyota_Dyna.png";
import UD_Truck_Croner from "../../images/UD_Truck_Croner.png";

export default function Vehicules() {
  const cards = [
    { title: "UD Truck Croner", title2: "PKE250 H30", img: UD_Truck_Croner, id: 1 },
    { title: "Isuzu FTR 850", img: Isuzu_FTR_850, id: 2 },
    { title: "Isuzu NQR 500", img: Isuzu_NQR_500, id: 3 },
    { title: "Toyota Dyna", img: Toyota_Dyna, id: 4 },
    { title: "Fiat Dobla Fourgon", img: Fiat_Dobla_Fourgon, id: 5 },
  ];

  const listCards = cards.map((card, index) => (
    <div className="Card_wrapper">
      <Vehicule_card key={index} card={card} />
    </div>
  ));

  return (
    <div className="Vehicules" id="Vehicules">
      <h2 className="Vehicule_title">Our current range of vehicules</h2>
      <div className="Vehicule_list ">{listCards}</div>
    </div>
  );
}
