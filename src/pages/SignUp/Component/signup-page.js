import classes from "./signup-page.module.scss";
import "font-awesome/css/font-awesome.min.css";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "../../../store/apiRequest";
import { useDispatch } from "react-redux";
import { useState } from "react";
import config from "../../../config";
import axios from "axios";


const Register = (props) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passWord, setPassWord] = useState("");
  const [confirmPassWord, setConfirmPassWord] = useState("");
  const [remember, setRemember] = useState(true);
  const [dropDownOption, setDropDownOption] = useState("jobseeker")
  const dispatch = useDispatch();
  const navigate = useNavigate();

//   const manyOptions = [
//     {
//       text: "Job Seeker",
//       value: "1",
//     },
//     {
//       text: "Employer",
//       value: "2",
//     },
//   ];

  const handleChangeUsername = (event) => {
    setUserName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassWord(event.target.value);
  };

  const handleChangeConfirmPassWord = (event) => {
    setConfirmPassWord(event.target.value);
  };

  const handleChangeCheckBox = (event) => {
    setRemember(event.target.checked);
  };

  const handleChangeDropDown= (event) => {
    setDropDownOption(event.target.value);
  };

  // useEffect(() => {
  //   console.log(dropDownOption);
  // }, [dropDownOption]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      username: userName,
      email: email,
      phone: phoneNumber,
      password: passWord,
    };
    const DUMMYUSER = {
      username: "nguyen1",
      name: "Tanh",
      email: "nguyenphucnguyen305@gmail.com",
      phone: "12335435",
      avatar: "avatar",
      password: "123",
      address: "address",
      age: 20,
      gender: "male",
      experience: "2 years",
      advanedSkill: "advanced skill",
      salary: 1000,
      workplace: "Ha Noi",
      cv: "cv link",
      careerFeild: "web",
      typeOfJob: "fulltime"
    }
    axios.post(`${config.api.url}/${dropDownOption}`, DUMMYUSER)
      .then((res) => {
        console.log(res.data);
        // setUser(res.data);
    });
    // registerUser(newUser, dispatch, navigate, dropDownOption);
  };
  
  return (
    <div className={classes["container-fluid"]}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes["form"]}>
          <div className={classes["sign-up-register"]}>Sign Up</div>

          <div className={classes["account-register"]}>
            <div className={classes["input-box"]}>
              <div className={classes["userAnswer"]}>
                <input
                  value={userName}
                  onChange={handleChangeUsername}
                  type="text"
                  style={{ fontFamily: "FontAwesome" }}
                  placeholder=" &#xF007; Username"
                  required
                />
              </div>
              <div className={classes["email"]}>
                <input
                  value={email}
                  onChange={handleChangeEmail}
                  type="email"
                  style={{ fontFamily: "FontAwesome" }}
                  placeholder=" &#xf0e0; Email"
                  required
                />
              </div>
              <div className={classes["phone-number"]}>
                <input
                  value={phoneNumber}
                  onChange={handleChangePhoneNumber}
                  type="text"
                  style={{ fontFamily: "FontAwesome" }}
                  placeholder=" &#xf2a0; Phone Number"
                  required
                />
              </div>
              <div className={classes["password"]}>
                <input
                  value={passWord}
                  onChange={handleChangePassword}
                  type="text"
                  style={{ fontFamily: "FontAwesome" }}
                  placeholder=" &#xf023; Password"
                  required
                />
                <input
                  value={confirmPassWord}
                  onChange={handleChangeConfirmPassWord}
                  type="text"
                  style={{ fontFamily: "FontAwesome" }}
                  placeholder=" &#xf023; Confirm Password"
                  required
                />
              </div>

              <div>
              <span>Select User Type: 
              <select className={`ui dropdown`} value={dropDownOption} onChange={handleChangeDropDown}>
                  <option value="jobseeker" >Job Seeker</option>
                  <option value="employer">Employer</option>
                 
                </select>
              </span>
              
              </div>
            </div>
            

            <div className={`form-group row`}>
              {/* <div class="col-sm-2"></div> */}
              <div className={`col-sm-`}>
                <div className={classes["form-check"]}>
                  <input
                    checked={remember}
                    onChange={handleChangeCheckBox}
                    className={classes["form-check-input"]}
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label
                    className={classes["form-check-label"]}
                    for="gridCheck1"
                  >
                    I read and agree to <b>Terms & Conditions</b>
                  </label>
                </div>
              </div>

              {/* <div class="col-sm-2"></div> */}
            </div>
          </div>

          <div className={classes["submit-button"]}>
            <button>
              Create Account
            </button>
            <div className={classes["sign-in-register"]}>
              Already a member? <NavLink to="/signin">Sign In</NavLink>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
