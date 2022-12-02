import classes from "./ChangePasswordPage.module.scss";
import "font-awesome/css/font-awesome.min.css";
import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import queryString from 'query-string'
import axios from "axios";
import config from "../../../config";
import { useNavigate } from 'react-router-dom';

const ChangePasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

const onChangePassword = (event) => {
  setPassword(event.target.value);
}
const onChangeConfirmPassword = (event) => {
  setConfirmPassword(event.target.value);
}

const onHandleSubmit = () => {
if (password === confirmPassword) {
  const curUrl = window.location.href;
  const token = curUrl.split("reset-password/")[1];
  axios.post(`${config.api.url}/reset-password/${token}`, {password:password});
  navigate('/signin');
} else { alert('password and confirmPassword is different')}
}


  return (
    <div className={classes["container-fluid"]}>
      <div className={classes["form"]}>
        <div className={classes["header-forgot"]}>
          <div className={classes["forgot-pass"]}>Change Password</div>
        </div>

        <div className={classes["account-forgot-pass"]}>
          <div className={classes["input-box"]}>
            <div className={classes["password"]}
            style={{ position: "relative" }}>
              <i
                style={{marginLeft: '14px'}}
                  className={`fa fa-lock ${classes.icon}`}
                  aria-hidden="true"
                ></i>
              <input
                type="password"
                style={{ fontFamily: "FontAwesome" }}
                placeholder="New Password"
                onChange={onChangePassword}
                value={password}
                required
              />
              
            </div>
            <div className={classes["password"]}
            style={{ position: "relative" }}>
              <i
                style={{marginLeft: '14px'}}
                  className={`fa fa-lock ${classes.icon}`}
                  aria-hidden="true"
                ></i>
              <input
                type="password"
                style={{ fontFamily: "FontAwesome" }}
                placeholder="Confirm Password"
                onChange={onChangeConfirmPassword}
                value={confirmPassword}
                required
              />
            </div>
          </div>
        </div>

        <div className={classes["submit-button"]}>
          <button className={classes["reset-button"]} onClick={onHandleSubmit}>Accept</button>
          <br />
          <button className={classes["login-button"]}>
            <NavLink to="/signin">Back to Login</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChangePasswordPage;
