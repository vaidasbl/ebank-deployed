import React from "react";

const BenefitCard = ({ text, image }) => {
  return (
    <div className="mb-4">
      <div className="card-text">{text}</div>
      <div>
        <img className="card-image" src={image} alt="img" />
      </div>
    </div>
  );
};

export default BenefitCard;
