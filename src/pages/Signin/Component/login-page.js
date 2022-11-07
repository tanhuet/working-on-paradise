import classes from "./login-page.module.scss";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../../../store/apiRequest";
import { useDispatch } from "react-redux";
import { useState } from "react";

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChangeUsername(event) {
    setUsername(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleChangeCheckBox(event) {
    setRemember(event.target.checked);
  }

  function handleSubmit(event) {
    //  alert(username + "," + password);
    event.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
    loginUser(newUser, dispatch, navigate);
  }

  return (
    <div className={classes["container-fluid"]}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes["sign-in"]}>Sign In</div>

        <div className={classes["account"]}>
          <div className={classes["input-box"]}>
            <div className={classes["userAnswer"]}>
              <input
                value={username}
                onChange={handleChangeUsername}
                type="text"
                style={{ fontFamily: "FontAwesome" }}
                placeholder=" &#xF007; Username"
                required
              />
            </div>

            <div className={classes["password"]}>
              <input
                value={password}
                onChange={handleChangePassword}
                type="text"
                style={{ fontFamily: "FontAwesome" }}
                placeholder=" &#xf023; Password"
                required
              />
            </div>
          </div>

          <div className={`row form-group`}>
            {/* <div class="col-sm-2"></div> */}
            <div className={`col-sm-5`}>
              <div className={classes["form-check"]}>
                <input checked={remember} onChange={handleChangeCheckBox} className={classes["form-check-input"]} type="checkbox" id="gridCheck1" />
                <label className={classes["form-check-label"]} for="gridCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className={`col-sm-7 ${classes["forgot-password"]}`}>
              <NavLink to="/forgot">Forgot your Password?</NavLink>
            </div>
            {/* <div class="col-sm-2"></div> */}
          </div>
        </div>

        <div className={classes["submit-button"]}>
          <button type="submit">Sign In</button>
          <div className={classes["sign-up"]}>
            Don't have an account? <NavLink to="/signup">Sign Up Now</NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
