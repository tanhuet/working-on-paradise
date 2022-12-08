import classes from "./signup-page.module.scss";
import "font-awesome/css/font-awesome.min.css";
import { Dropdown } from "semantic-ui-react";
import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "../../../store/apiRequest";
import { useDispatch } from "react-redux";
import { useState } from "react";
import config from "../../../config";
import axios from "axios";
import SetUpAccJobSeeker from "./SetUpAccountJobSeeker/SetUpAccJobSeeker";
import SetUpAccEmployer from "./SetUpAccountJobSeeker/SetUpAccountEmployer";

// import ReactDOM from "react-dom";
// import Popup from "reactjs-popup";

const Register = (props) => {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passWord, setPassWord] = useState("");
  const [confirmPassWord, setConfirmPassWord] = useState("");
  const [remember, setRemember] = useState(true);
  const [dropDownOption, setDropDownOption] = useState("Job Seeker");

  const [isNextPage, setIsNextPage] = useState(false);
  const [isJobSeeker, setIsJobSeeker] = useState(false);

  const [notice, setNotice] = useState("");
  // const [tags, setTags] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const manyOptions = [
    {
      text: "Job Seeker",
      value: "jobseeker",
    },
    {
      text: "Employer",
      value: "employer",
    },
  ];

  const renderLabel = (label) => {
    // setTags([...tags, label.text]);
    return {
      content: `${label.text}`,
    };
  };

  const handleChangeUsername = (event) => {
    setUserName(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
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

  // const handleChangeDropDown= (event) => {
  //   setDropDownOption(event.target.value);
  // };

  const handleChangeDropDown = (event, { data }) => {
    setDropDownOption(`${event.target.textContent}`);
  };

  // useEffect(() => {
  //   console.log(dropDownOption);
  // }, [dropDownOption]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validate = await checkUser();
    if (!validate) {
      return;
    }
    if (
      userName !== "" &&
      email !== "" &&
      email !== "" &&
      phoneNumber !== "" &&
      passWord !== "" &&
      confirmPassWord !== "" &&
      passWord === confirmPassWord
    ) {
      setIsNextPage(true);
      if (dropDownOption === "Job Seeker") {
        setIsJobSeeker(true);
      } else {
        setIsJobSeeker(false);
      }
    }
    if (
      passWord !== "" &&
      confirmPassWord !== "" &&
      passWord !== confirmPassWord
    ) {
      alert("Password and ConfirmPassword is different. Please try again");
    }

  };
  const user = {
    username: userName,
    name: name,
    email: email,
    phone: phoneNumber,
    password: passWord,
  };

  const checkUser = async () => {
    
     const templeUser = {
      username: userName,
      email: email,
      phone: phoneNumber,
    };
    try{
    let res = (await axios.post(`${config.api.url}/user/check-exist`,templeUser)).response
    setNotice('');
    return true;
  } catch (error) {
    setNotice(error.response.data);
    return false;
  }
  }

  return !isNextPage ? (
    <div className={classes["container-fluid"]}>
      <form className={classes.form}>
        <div className={classes["form"]}>
          <div className={classes["sign-up-register"]}>Sign Up</div>

          <div className={classes["account-register"]}>
          {notice !== "" ? <p style={{color: 'red'}}>{notice}&nbsp;&nbsp;<i class="fa fa-exclamation-triangle" aria-hidden="true"></i></p> : ''}
          
          
            <div className={classes["input-box"]}>
              <div
                className={classes["userAnswer"]}
                style={{ position: "relative" }}
              >
                <i
                style={{marginLeft: '14px'}}
                  className={`fa fa-user-circle-o ${classes.icon}`}
                  aria-hidden="true"
                ></i>
                <input
                  value={userName}
                  onChange={handleChangeUsername}
                  type="text"
                  // style={{ fontFamily: "FontAwesome" }}
                  placeholder="Username"
                  required
                />
              </div>
              <div
                className={classes["userAnswer"]}
                style={{ position: "relative" }}
              >
                <i
                style={{marginLeft: '14px'}}
                  className={`fa fa-user-circle-o ${classes.icon}`}
                  aria-hidden="true"
                ></i>
                <input
                  value={name}
                  onChange={handleChangeName}
                  type="text"
                  // style={{ fontFamily: "FontAwesome" }}
                  placeholder="Name"
                  required
                />
              </div>
              <div
                className={classes["email"]}
                style={{ position: "relative" }}
              >
                <i
                style={{marginLeft: '14px'}}
                  className={`fa fa-envelope ${classes.icon}`}
                  aria-hidden="true"
                ></i>
                <input
                  value={email}
                  onChange={handleChangeEmail}
                  type="email"
                  // style={{ fontFamily: "FontAwesome" }}
                  placeholder="Email"
                  required
                />
              </div>
              <div
                className={classes["phone-number"]}
                style={{ position: "relative" }}
              >
                <i
                style={{marginLeft: '14px'}}
                  className={`fa fa-volume-control-phone ${classes.icon}`}
                  aria-hidden="true"
                ></i>
                <input
                  value={phoneNumber}
                  onChange={handleChangePhoneNumber}
                  type="text"
                  // style={{ fontFamily: "FontAwesome" }}
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div
                className={classes["password"]}
                style={{ position: "relative" }}
              >
                <i
                style={{marginLeft: '14px'}}
                  className={`fa fa-lock ${classes.icon}`}
                  aria-hidden="true"
                ></i>
                <input
                  value={passWord}
                  onChange={handleChangePassword}
                  type="password"
                  // style={{ fontFamily: "FontAwesome" }}
                  placeholder="Password"
                  required
                />
              </div>
              <div
                className={classes["password"]}
                style={{ position: "relative" }}
              >
                <i
                style={{marginLeft: '14px'}}
                  className={`fa fa-lock ${classes.icon}`}
                  aria-hidden="true"
                ></i>
                <input
                  value={confirmPassWord}
                  onChange={handleChangeConfirmPassWord}
                  type="password"
                  // style={{ fontFamily: "FontAwesome" }}
                  placeholder="Confirm Password"
                  required
                />
              </div>

              <div>
                {/* <span>Select User Type: 
              <select className={`ui dropdown`} value={dropDownOption} onChange={handleChangeDropDown}>
                  <option value="jobseeker" >Job Seeker</option>
                  <option value="employer">Employer</option>
                </select>
              </span> */}
                <Dropdown
                  selection
                  fluid
                  options={manyOptions}
                  renderLabel={renderLabel}
                  onChange={handleChangeDropDown}
                  style={{fontWeight: 'bold', margin: '15px 0'}}
                  placeholder="Select User Type: "
                />
              </div>
            </div>

            <div className={`form-group row`}>
              {/* <div class="col-sm-2"></div> */}
              <div className={`col-sm-`}>
                <div className={classes["form-check"]} style={{marginTop: '10px'}}>
                  <input
                    checked={remember}
                    onChange={handleChangeCheckBox}
                    className={classes["form-check-input"]}
                    type="checkbox"
                    id="gridCheck1"
                    style={{marginRight: '10px', marginLeft: '10px'}}
                  />
                  <label
                    className={classes["form-check-label"]}
                    htmlFor="gridCheck1"
                  >
                    I read and agree to <b>Terms & Conditions</b>
                  </label>
                </div>
              </div>

              {/* <div class="col-sm-2"></div> */}
            </div>
          </div>

          <div className={classes["submit-button"]}>
            <button type="submit" onClick={handleSubmit}>
              Create Account
            </button>
            <div className={classes["sign-in-register"]}>
              Already a member? <NavLink to="/signin"><b>Sign In</b></NavLink>
            </div>
          </div>
        </div>
      </form>
    </div>
  ) : isJobSeeker ? (
    <SetUpAccJobSeeker account={user} />
  ) : (
    <SetUpAccEmployer account={user} />
  );
};

export default Register;
