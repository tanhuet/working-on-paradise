import classes from "./ForgotPassword-page.module.scss";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import config from "../../../config";
import { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const ForgotPassWordPage = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    axios.post(`${config.api.url}/reset-password`, { email: email }).then((res) => {
      swal("Success", "Please check your email", "success").then(() => {
        navigate("/login");
      });
    });
  };

  const ChangeInput = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className={classes["container-fluid"]}>
      <div className={classes["form"]}>
        <div className={classes["header-forgot"]}>
          <div className={classes["forgot-pass"]}>Forgot Password?</div>
          <div className={classes["describe"]}>To reset your password, you need your email or mobile number that can be authenticated</div>
        </div>

        <div className={classes["account-forgot-pass"]}>
          <div className={classes["input-box"]}>
            <div className={classes["email"]}>
              <input type="email" style={{ fontFamily: "FontAwesome" }} placeholder=" &#xf0e0; Email" value={email} onChange={ChangeInput} required />
            </div>
          </div>
        </div>

        <div className={classes["submit-button"]}>
          <button className={classes["reset-button"]} onClick={handleSubmit}>
            Reset PassWord
          </button>
          <br />
          <button className={classes["login-button"]}>
            <NavLink to="/signin">Back to Login</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassWordPage;
