import React from "react";
import { useNavigate } from "react-router";

const Quickmenu = () => {
  const navigate = useNavigate();

  return (
    <div className="recenttransactions">
      <div className="subtitle">Quickmenu</div>
      <hr className="hrhr1" />
      <div>
        <button
          id="sendmoneybtn"
          className="myBtn7"
          onClick={() => navigate("/send")}
        >
          Send money
        </button>
      </div>
      <div>
        <button className="myBtn7" onClick={() => navigate("/contacts")}>
          Contacts
        </button>
      </div>
      <div>
        <button className="myBtn7">View currency rates</button>
      </div>
    </div>
  );
};

export default Quickmenu;
