import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Highlight = ({ icon, title, info }) => {
  return (
    <div className="highlight">
      <div className="highlight__img">{icon}</div>
      <h3 className="highlight__subtitle">{title}</h3>
      <p className="highlight__para">{info}</p>
    </div>
  );
};

export default Highlight;
