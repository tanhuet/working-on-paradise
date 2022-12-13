import classes from "./addPostEmployer.module.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import config from "../../../config";
import ButtonCamera from "../../../asses/ButtonCamera.png";
import { useEffect, useState } from "react";
import React from "react";
import { Dropdown } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const AddPostEmployer = (props) => {
  const [jobTitle, setJobTitle] = useState("Job Title");
  const [dropDownOption, setDropDownOption] = useState("no-require");
  const [salary, setSalary] = useState("");
  const [typeOfJob, setTypeOfJob] = useState("fulltime");
  const [quantity, setQuantity] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [requirement, setRequirement] = useState("");
  const [benefit, setBenefit] = useState("");
  const [tags, setTags] = useState("");

  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [startTime, setStartTime] = useState();
  const handleChangeStartTime = (event) => {
    setStartTime(event.target.value);
  };
  const [endTime, setEndTime] = useState("2022/12/11");
  const handleChangeEndTime = (event) => {
    setEndTime(event.target.value);
  };

  const options = [
    { key: 1, text: "One", value: "1" },
    { key: 2, text: "Two", value: "2" },
    { key: 3, text: "Three", value: "3" },
  ];

  const renderLabel = (label) => {
    // setTags([...tags, label.text]);
    return {
      color: "blue",
      content: `${label.text}`,
      icon: "check",
    };
  };

  const handleChangeJobTitle = (event) => {
    setJobTitle(event.target.value);
  };
  const handleChangeDropDown = (event) => {
    setDropDownOption(event.target.value);
  };
  const handleChangeSalary = (event) => {
    setSalary(event.target.value);
  };
  const handleChangeTypeOfJob = (event) => {
    setTypeOfJob(event.target.value);
  };
  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };
  const handleChangePosition = (event) => {
    setPosition(event.target.value);
  };
  const handleChangeExperience = (event) => {
    setExperience(event.target.value);
  };
  const handleChangeJobDescription = (event) => {
    setJobDescription(event.target.value);
  };
  const handleChangeRequirement = (event) => {
    setRequirement(event.target.value);
  };
  const handleChangeBenefit = (event) => {
    setBenefit(event.target.value);
  };

  const handleChangeTags = (event, { data }) => {
    setTags(`${tags},${event.target.textContent}`);
  };
  let navigate =  useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    //erase first regex, because it is alway ,
    setTags(tags.substring(1));
    axios
      .post(
        `${config.api.url}/job/create`,
        {
          title: jobTitle,
          description: jobDescription,
          requirements: requirement,
          tags: tags,
          startTime: startTime,
          endTime: endTime,
          salary: salary,
          typeOfWorking: typeOfJob,
          gender: dropDownOption,
          positions: position,
          slots: quantity,
          exp: experience,
          benefits: benefit,
          imageUrl: "img",
        },
        { headers: { Authorization: `Bearer ${userStore.accessToken}` } }
      )
      .then((res) => {
        alert(res.data);
        navigate('/post/management');
      })
      .catch((res) => {
        alert(res.response.data);
      });
  };

  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`${config.api.url}/employer`, {
        headers: { Authorization: `Bearer ${userStore.accessToken}` },
      })
      .then((res) => {
        setUser(res.data);
      });
  }, [userStore]);

  
  return (
    <div className={`container`}>
      <form className={"row g-3 needs-validation"} onSubmit={handleSubmit}>
        <div className={classes["header-div"]}>
          <div className={classes["add-image"]}>
            <img src={user?.wallpaper !== 'wallpaper' ? user?.wallpaper : 'https://thuthuatnhanh.com/wp-content/uploads/2021/03/hinh-anh-tuyen-dung-noi-bat.jpg'} />
          </div>
          <div className={classes["body-add-post"]}>
            <div className={`row`}>
              <div className={`col-sm-2`}>
                <div className={`dot ${classes["avatar-add-post"]}`}>
                  <img
                    src={user?.avatar}
                    style={{ borderRadius: "50%", width: "150px", height: '150px' }}
                  />
                </div>
                {/* <div className={classes["button-camera"]}>
                  <img src={ButtonCamera} />
                </div> */}
              </div>
              <div
                className={`col-sm-5 order-1`}
                style={{ padding: "20px 20px" }}
              >
                <input
                  onChange={handleChangeJobTitle}
                  value={jobTitle}
                  style={{ fontSize: "30px", fontWeight: "500", border: '2px solid rgba(213, 246, 246, 0.5)', borderRadius: '10px', paddingLeft: '5px' }}
                ></input>
                <br />
                <span style={{ marginTop: "10px", paddingLeft: '5px' }}>
                  <h3>{user?.address}</h3>
                </span>
              </div>
            </div>

            <div className={classes.box}>
              <div className={classes.boxName}>
                <p>Basic Information</p>
              </div>
              <div className={classes.boxInfo}>
                <div className={classes.boxLeft}>
                  <ul>
                    <li>
                      <p1>Salary:</p1>
                      <br/>
                      <span>
                        {" "}
                        <input
                          type="number"
                          // className={`form-control`}
                          onChange={handleChangeSalary}
                          value={salary}
                          required
                        ></input>
                      </span>
                    </li>
                    <li>
                      <p1>Type of Job:</p1>
                      <br />
                      <select
                        className={`ui dropdown`}
                        value={dropDownOption}
                        onChange={handleChangeTypeOfJob}
                        style={{ height: "auto", borderRadius: '10px' }}
                      >
                        <option value="fulltime">Full-time</option>
                        <option value="parttime">Part-time</option>
                      </select>
                    </li>
                    <li>
                      <p1>Position:</p1>
                      <span>
                        {" "}
                        <input
                          onChange={handleChangePosition}
                          value={position}
                          required
                        ></input>
                      </span>
                    </li>
                    <li>
                      <span className={classes.text}>
                        <pl>Start Time:</pl>{" "}<br/>
                        <input
                          type="date"
                          min="2000-01-01" max="2222-12-31"
                          value={startTime}
                          onChange={handleChangeStartTime}
                          required
                        ></input>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className={classes.boxRight}>
                  <ul>
                    <li>
                      <p1>Quantity:</p1>
                      <span>
                        {" "}
                        <input
                          type="number"
                          onChange={handleChangeQuantity}
                          value={quantity}
                          required
                        ></input>
                      </span>
                    </li>
                    <li >
                      <p1>Gender:</p1>
                      <br />
                      <select
                      
                        className={`ui dropdown`}
                        value={dropDownOption}
                        onChange={handleChangeDropDown}
                        style={{ height: "auto", borderRadius: '10px' }}
                      >
                        <option value="no-require">No</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </li>
                    
                    <li>
                      <p1>Experience:</p1>
                      <span>
                        {" "}
                        <input
                          onChange={handleChangeExperience}
                          value={experience}
                          required
                        ></input>
                      </span>
                    </li>
                    <li>
                      <span className={classes.text}>
                        End Time:{" "}<br/>
                        <input
                          type="date"
                          min="2000-01-01" max="2222-12-31"
                          value={endTime}
                          onChange={handleChangeEndTime}
                          required
                        ></input>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div style={{margin: '0 5% 10px 5%'}}>
              <Dropdown
          multiple
          selection
          fluid
          options={options}
          renderLabel={renderLabel}
          onChange={handleChangeTags}
          placeholder="Choose an option Tags"
        />
              </div>
            </div>

            <div className={classes["item-list"]}>
              <div className={classes["items-1"]}>
                <div id="list-item-1" className={classes.title}>
                  <div className={classes.makeup} style={{ width: "200px" }}>
                    <div className={classes.style1}>Job Description</div>
                  </div>
                </div>
                <div className={`d-flex`}>
                  <div className={classes.data} style={{ height: "500px" }}>
                    <textarea
                      className={`${classes.font} ${classes.textexper}`}
                      onChange={handleChangeJobDescription}
                      value={jobDescription}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className={classes["items-2"]}>
                <div id="list-item-1" className={classes.title}>
                  <div className={classes.makeup} style={{ width: "154px" }}>
                    <div className={classes.style1}>Requirement</div>
                  </div>
                </div>
                <div className={`d-flex`}>
                  <div className={classes.data} style={{ height: "400px" }}>
                    <textarea
                      className={`${classes.font} ${classes.textexper}`}
                      onChange={handleChangeRequirement}
                      value={requirement}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className={classes["items-3"]}>
                <div id="list-item-1" className={classes.title}>
                  <div className={classes.makeup} style={{ width: "154px" }}>
                    <div className={classes.style1}>Benefit</div>
                  </div>
                </div>
                <div className={`d-flex`}>
                  <div className={classes.data} style={{ height: "400px" }}>
                    <textarea
                      className={`${classes.font} ${classes.textexper}`}
                      onChange={handleChangeBenefit}
                      value={benefit}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className={`order-2 ${classes["button-save"]}`}>
                <button type="submit">Save</button>
              </div>
          </div>
          
        </div>
        
      </form>
    </div>
  );
};
export default AddPostEmployer;
