import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import apiEndpoint from "../../endpoint";
import Swal from "sweetalert2";
import DashboardNavbar from "../03 Dashboard/DashboardNavbar";
import MailView from "./MailView";
import { useNavigate } from "react-router";

const MailNewContainer = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);
  const [mail, setMail] = useState({
    senderid: user._id,
    recipient: "",
    subject: "",
    contents: "",
  });

  const handleChange = (e) => {
    setMail((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleSend = async () => {
    try {
      const result = await axios.put(
        `${apiEndpoint}/api/bank/users/sendmail`,
        mail
      );
      navigate("/mail/sent");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sent",
        showConfirmButton: false,
      });
    } catch (err) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: err.response.data || err,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div>
      <DashboardNavbar />

      <MailView withContainer={false}>
        <div>
          <div className="mt-3">
            <input
              id="recipient"
              className="my-form"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="underlinetext">recipient</div>

          <div className="mt-1">
            <input
              id="subject"
              className="my-form"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="underlinetext">subject</div>
        </div>

        <div className="container mt-4">
          <textarea
            id="contents"
            className="mailbody"
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <button className="myBtn11 mt-1" onClick={handleSend}>
            Send
          </button>
        </div>
      </MailView>
    </div>
  );
};

export default MailNewContainer;
