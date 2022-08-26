import React from "react";
import "./Banner.css";
import Path_Banner from "../../images/Path_Banner.png";

export default function Banner() {
  return (
    <div className="Banner">
      {/* <img
        src={Path_Banner}
        /> */}
      <div className="Text">
        <h2 className="Banner_title">Refrigerated vehicle rental</h2>
        <p className="Banner_texte">
          When you need to transport chilled or frozen products, Petit Forestier
          offers a full range of vehicles for hire on a short, medium or
          long-term basis.
        </p>
        <button className="Download_btn">Download our brochure</button>
      </div>
    </div>
  );
}
