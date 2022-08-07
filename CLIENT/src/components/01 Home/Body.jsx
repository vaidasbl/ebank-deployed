import React from "react";
import BenefitCard from "./BenefitCard";

const Body = () => {
  return (
    <div className="container">
      <div className="home-body">
        <div className="row">
          <div className="col-sm-3">
            {<BenefitCard text={"such innovation"} image={"/doge.jpeg"} />}
          </div>
          <div className="col-sm-3">
            {
              <BenefitCard
                text={"largest corporations work with us"}
                image={"/doge.jpeg"}
              />
            }
          </div>
          <div className="col-sm-3">
            {<BenefitCard text={"customer support wow"} image={"/doge.jpeg"} />}
          </div>
          <div className="col-sm-3">
            {<BenefitCard text={"much easy to use"} image={"/doge.jpeg"} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
