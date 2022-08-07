import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import apiEndpoint from "../../endpoint";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    username: "",
    password: "",
    passwordRepeat: "",
  });
  const empty = Object.values(info).some((v) => v === "" || v === undefined);
  const handleChange = (e) => {
    setInfo((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiEndpoint}/api/bank/users/new`, info);
      navigate("/");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully registered",
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
    <div className="mt-4">
      <div className="title">Register</div>

      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <input
            name="username"
            className="my-form"
            type="text"
            id="txtLoginUsername"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>

        <div className="mt-4">
          <input
            name="password"
            className="my-form"
            type="text"
            id="txtLoginPassword"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <div className="mt-4">
          <input
            name="passwordRepeat"
            className="my-form"
            type="text"
            id="txtLoginPasswordRepeat"
            placeholder="Repeat password"
            onChange={handleChange}
          />
        </div>

        <div className="mtop-125">
          <div className="row">
            <div className="col-6">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="myBtn4"
              >
                Back
              </button>
            </div>
            <div className="col-6">
              <button disabled={empty} type="submit" className="myBtn4">
                Proceed
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
