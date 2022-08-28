import React from 'react';
import "./Full_service.css";
import Full_srv_img from "../../images/FULL_SERVICE.png"
import Service_card from '../../components/Service_card/Service_card';

export default function Full_service() {

  const service_cards = [
    { title: "24/7 support", text: "Round-the-clock assistance, every day, 365 days a year. Provision of a replacement refrigerated vehicle in the event of a breakdown.", id: 1 },
    { title: "Maintenance", text: "We carry out legally required tests and preventive maintenance on the vehicles and their equipments.", id: 2 },
    { title: "Spare parts", text: "Provision of tyres, fluids and lubricants.", id: 3 },
    { title: "Repairs", text: "Repairs to the bodywork and paintwork, as well as all mechanical repairs.", id: 4 },
    { title: "Administrative support", text: "We take care of all administrative procedures: license renewal, test certificates, legal paperwork.", id: 5 },
    { title: "Repairs", text: "Repairs to the bodywork and paintwork, as well as all mechanical repairs.", id: 6 },
  ];

  const listCard = service_cards.map((card, index) =>(
    <Service_card key={index} card={card} />
  ));

  return (
    <div className='Full_service' id='Full_service'>
      {/* <img
      src={Full_srv_img}
      alt= "img"
      /> */}
      <div className='Text_zone'>
        <h2 className='Title_Full_Service'>Full service!</h2>
        <div className='Grid_service grid grid-cols-2 gap-x-10 gap-y-6'>
          {listCard}
        </div>
        <button className="Download_btn">Download our brochure</button>
      </div>

    </div>
  )
}
