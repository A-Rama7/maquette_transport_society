import React from "react";
import "./About.css";
import Driver from "../../images/Driver.png";
import Number_card from "../../components/Numbers_card/Number_card";

const Numbers_list = [
  { text: "refregirated vehicles", number: "+62,000", id: 1 },
  { text: "customers", number: "+15,000", id: 2 },
  { text: "employees", number: "+4,500", id: 3 },
  { text: "sites worldwide", number: "+300", id: 4 },
  { text: "turnover in 2021", number: "€849 M", id: 5 },
  { text: "refregirated specialist", number: "500+", id: 6 },
];

const listCards = Numbers_list.map((card, index) => (
  <Number_card key={index} card={card} />
));

export default function About() {
  return (
    <div className="About">
      <div className="Text_About_Wrapper">
        <h2 className="Big_Texte_About">
          Working together <br></br>to ensure health & safety<br></br> and Food
          safety by simplifying the cold chain every day.
        </h2>
        <h3 className="Subtitle_description">
          Transport society,<br></br> world leader in refrigeration for hire
        </h3>
        <p className="Description_Society">
          Transport society is a family business, founded in France in 1907.
          Through our knowledge and expertise, we have grown to become the
          market leader in the cold storage sector. We have an extensive fleet
          of hire vehicles at our disposal, across a large network of branches,
          covering 22 countries in Europe, Middle-East, Africa and in the USA.
          Through this coverage, Transport society serves over 15,000 customers,
          with a continued focus on providing high quality and excellent
          service.
        </p>
        <div className="Society_numbers">
          <h3 className="Subtitle_numbers">Transport society in numbers</h3>
          <div className="Number_list grid grid-cols-3 gap-y-4 ">{listCards}</div>
        </div>
      </div>
      <div className="Img_About_Wrapper">
        <img src={Driver} />
      </div>
    </div>
  );
}
