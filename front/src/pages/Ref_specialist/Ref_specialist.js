import React from "react";
import "./Ref_specialist.css";
import Front_car from "../../images/Front_car.png";

export default function Ref_specialist() {
  return (
    <div className="Ref_specialist">
      <h3 className="Green_title">Transport society</h3>
      <h1 className="Ref_Title">The refrigerator specialist</h1>
      <div className="Expertise_Grid grid grid-cols-6 grid-rows-3 ">
        <div className="cell Cell_left col-span-2">
          <h3 className="Cell_title Cell_title">
            The only 100% refrigerated <br></br>rental company
          </h3>
          <p className="p_cell-left">
            Transport society is the only rental company whose business focuses
            exclusively on cold storage.
          </p>
        </div>
        <div className="Front_car row-span-2 col-span-2">
          <img src={Front_car} />
        </div>
        <div className="cell Cell_right col-span-2">
          <h3 className="Cell_title Cell_title">
            +500 fridge specialist
          </h3>
          <p className="p_cell-right">Trained to offer you the best in class service.</p>
        </div>
        <div className="cell Cell_left col-span-2">
          <h3 className="Cell_title Cell_title">
            More than 100 years of expertise in the transportation sector
          </h3>
          <p className="p_cell-left">
            Transport society hires out more than 5,500 new refrigerated
            vehicles every year.
          </p>
        </div>
        <div className="cell Cell_right col-end-7 col-span-2">
          <h3 className="Cell_title Cell_title">Cemafroid accredited</h3>
          <p className="p_cell-right">(ATP certifications) <br></br>Largest test centers network.</p>
        </div>
        <div className="cell Cell_center col-span-4 col-start-2">
          <h3 className="Cell_title Cell_center">
            Refrigerated body manufacturer
          </h3>
          <p className="p_cell-center">
            2 manufacturing facilities for the design and manufacture of our
            refrigerated bodies. Transport society is also an R&D department and
            a test laboratory to provide tailor-made solutions to the specific
            needs of our customers and to design the refrigerated véhicles of
            tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
}
