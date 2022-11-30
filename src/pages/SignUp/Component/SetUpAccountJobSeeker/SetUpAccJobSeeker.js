import classes from "./SetUpAccJobSeeker.module.scss";
import settingImage from "../../../../asses/setting.png";
import { useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";
import config from "../../../../config";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const SetUpAccJobSeeker = (props) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [experience, setExperience] = useState("");
  const [advancedSkill, setAdvancedSkill] = useState("");
  const [desiredSalary, setDesiredSalary] = useState("");
  const [workPlace, setWorkPlace] = useState("Remote");
  const [typeOfJob, setTypeOfJob] = useState("");
  const [desiredCareerField, setDesiredCareerField] = useState("");
  const [address, setAddress] = useState("");
  const [cv, setCv] = useState("");
  const [selectedCV, setSelectCV] = useState("");
  const [avatar, setAvatar] = useState("");
  const [selectedAvatar, setSelectAvatar] = useState("");

  // const [changeColorGender, setChangeColorGender] = useState('');

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleClickGender = (event) => {
    setGender(event.target.value);
  };
  console.log(gender);
  const handleChangeExperience = (event) => {
    setExperience(event.target.value);
  };
  const handleChangeAdvancedSkill = (event) => {
    setAdvancedSkill(event.target.value);
  };
  const handleChangeDesiredSalary = (event) => {
    setDesiredSalary(event.target.value);
  };
  const handleChangeWorkPlace = (event) => {
    setWorkPlace(event.target.value);
  };
  const handleChangeTypeOfJob = (event) => {
    setTypeOfJob(event.target.value);
  };
  const handleChangeDesiredCareerField = (event) => {
    setDesiredCareerField(event.target.value);
  };
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleChangeCV = (event) => {
    // setCv(event.target.value);

    setSelectCV(event.target.files[0]);
  };
  const handleChangeAvatar = (event) => {
    // setCv(event.target.value);

    setSelectAvatar(event.target.files[0]);
  };
  let navigate = useNavigate();

  const handleSubmitButton = async (event) => {
    event.preventDefault();
    const formDataCV = new FormData();
    const formDataAvatar = new FormData();

    formDataCV.append(`file`, selectedCV);
    formDataAvatar.append(`file`, selectedAvatar);

    const cvLink = await axios.post(`${config.api.url}/helper/upload`, formDataCV);
    const avatarLink = await axios.post(`${config.api.url}/helper/upload`, formDataAvatar);

    const DUMMYJOBSEEKER = {
      username: props.account.username,
      name: props.account.name,
      email: props.account.email,
      phone: props.account.phone,
      avatar: avatarLink.data,
      password: props.account.password,
      address: address,
      age: age,
      gender: gender,
      experience: experience,
      advanedSkill: advancedSkill,
      salary: desiredSalary,
      workplace: workPlace,
      cv: cvLink.data,
      careerFeild: desiredCareerField,
      typeOfJob: typeOfJob,
    };

    axios
      .post(`${config.api.url}/jobseeker`, DUMMYJOBSEEKER)
      .then((res) => {
        swal("Success!", "Your account has been created!", "success").then(() => {
          navigate("/login");
        });
      })
      .catch((err) =>
        swal("Error!", err.response.data, "error").then(() => {
          navigate("/signup");
        })
      );
  };

  return (
    <div className={`container-fluid ${classes["set-up-acc"]}`} style={{ fontWeight: "bold" }}>
      <div className={`row`}>
        <div className={`col-lg-4 col-md-12 col-sm-12 ${classes["img-setting"]}`}>
          <img src={settingImage}></img>
        </div>
        {/* colum content */}
        <div className={`col-lg-7 col-md-12 col-sm-12`}>
          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={classes["title"]}>Set Up Account</div>
          </div>

          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Age:</div>
            <div className={`col-sm-9`}>
              <input type="number" value={age} onChange={handleChangeAge} required></input>
              <button
                value="male"
                onClick={handleClickGender}
                style={{
                  marginLeft: "5%",
                  backgroundColor: gender === "female" ? "#BFBFBF" : "",
                }}
              >
                Male
              </button>
              <button
                value="female"
                onClick={handleClickGender}
                style={{
                  marginLeft: "5%",
                  backgroundColor: gender === "male" ? "#BFBFBF" : "",
                }}
              >
                Female
              </button>
            </div>
          </div>

          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Experience:</div>
            <div className={`col-sm-9`}>
              <textarea rows={"4"} columns={"40"} style={{ width: "100%" }} value={experience} onChange={handleChangeExperience}></textarea>
            </div>
          </div>

          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Advanced Skill:</div>
            <div className={`col-sm-9`}>
              <textarea rows={"4"} columns={"40"} style={{ width: "100%" }} value={advancedSkill} onChange={handleChangeAdvancedSkill}></textarea>
            </div>
          </div>

          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Desired Salary:</div>
            <div className={`col-sm-9`}>
              <input type="number" value={desiredSalary} onChange={handleChangeDesiredSalary} style={{height: '100%'}} required></input>
            </div>
          </div>

          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Workplace:</div>
            <div className={`col-sm-9`}>
              <select className={`ui dropdown`} value={workPlace} onChange={handleChangeWorkPlace}>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
              </select>
            </div>
          </div>

          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Type Of Job:</div>
            <div className={`col-sm-9`}>
              <input type="text" style={{ width: "100%" }} value={typeOfJob} onChange={handleChangeTypeOfJob} required></input>
            </div>
          </div>

          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Desired Career Field:</div>
            <div className={`col-sm-9`}>
              <input type="text" style={{ width: "100%" }} value={desiredCareerField} onChange={handleChangeDesiredCareerField} required></input>
            </div>
          </div>

          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Address:</div>
            <div className={`col-sm-9`}>
              <input type="text" style={{ width: "100%" }} value={address} onChange={handleChangeAddress} required></input>
            </div>
          </div>

          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>CV:</div>
            <div className={`col-sm-9`}>
              <input type="file" value={cv} onChange={handleChangeCV} />
            </div>
          </div>

          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Avatar:</div>
            <div className={`col-sm-9`}>
              <input type="file" value={avatar} onChange={handleChangeAvatar} />
            </div>
          </div>

          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={`col-sm-3`}></div>
            <div className={`col-sm-9 ${classes["button-save"]}`}>
              <button type="submit" onClick={handleSubmitButton}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SetUpAccJobSeeker;
