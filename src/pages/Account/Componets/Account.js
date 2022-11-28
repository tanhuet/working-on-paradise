import { useState, useEffect } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Account.module.scss";
import axios from "axios";
import { useSelector } from "react-redux";
import config from "../../../config";
import React from "react";
import EducationEdit from "./EducationEdit";
import Data from "./Data";
import CvBox from "./CvBox";

const Account = (props) => {
  const USER = props.user;

  const [editInfor, setEditInfor] = useState(false);
  const [editEx, setEditEx] = useState(false);
  const [newEdu, setNewEdu] = useState(false);
  const [canEditEducation, setCanEditEducation] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState();
  const [editAd, setEditAd] = useState(false);
  const [editCa, setEditCa] = useState(false);

  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const [gender, setGender] = useState();
  const [experience, setExperience] = useState();
  const [advanedSkill, setAdvanedSkill] = useState();
  const [careerFeild, setCareerFeild] = useState();
  const [typeOfJob, setTypeOfJob] = useState();
  const [salary, setSalary] = useState();
  const [workplace, setWorkplace] = useState();
  const [education, setEducation] = useState();
  const [listCv, setListCv] = useState([]);

  const userStore = useSelector((state) => state.auth.login?.currentUser);

  useEffect(() => {
    axios.get(`${config.api.url}/jobseeker`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } }).then((res) => {
      console.log(res.data.cv)
      setAge(res.data.age);
      setAddress(res.data.address);
      setGender(res.data.gender);
      setExperience(res.data.experience);
      setAdvanedSkill(res.data.advanedSkill);
      setCareerFeild(res.data.careerFeild);
      setTypeOfJob(res.data.typeOfJob);
      setSalary(res.data.salary);
      setWorkplace(res.data.workplace);
      setListCv(res.data.cv.split(","))
    });

    axios.get(`${config.api.url}/education/all-mine`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } }).then((res) => {
      setEducation(res.data);
    });
  }, [userStore]);

  const handleSubmit = (event) => {
    axios.put(
      `${config.api.url}/jobseeker`,
      {
        age: age,
        gender: gender,
        experience: experience,
        advanedSkill: advanedSkill,
        salary: salary,
        workplace: workplace,
        cv: "cv link",
        careerFeild: careerFeild,
        typeOfJob: typeOfJob,
      },
      { headers: { Authorization: `Bearer ${userStore.accessToken}` } }
    );
  };

  const handleEditEducation = (education) => {
    if (canEditEducation) {
      console.log(education.id);
      setSelectedEducation(education);
    }
  };

  const handleSetCanEditEdu = () => {
    if (canEditEducation) {
      setCanEditEducation(false)
    } else {
      setCanEditEducation(true)
    }
  }

  // Hiệp: khi bấm ra ngoài sẽ close education edit
  const closeEducationEditHandler = (reload) => {
    setCanEditEducation(false);
    setNewEdu(false);
    setSelectedEducation(null);
    if (reload) {
      axios.get(`${config.api.url}/education/all-mine`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } }).then((res) => {
        setEducation(res.data);
      });
    }
  };

  let educations = [];
  if (education) {
    educations = education.map((data) => {
      return {
        id: data.id,
        school: data.school,
        degree: data.degree,
        major: data.major,
        startDate: data.startDate,
        endDate: data.endDate,
        description: data.description,
      };
    });
  }

  return (
    USER && (
      <Fragment>
        {newEdu && <EducationEdit onCloseEditingEducation={closeEducationEditHandler} education={null} newEdu={true} />}
        {canEditEducation && selectedEducation && <EducationEdit onCloseEditingEducation={closeEducationEditHandler} education={selectedEducation} />}
        <div className={classes.container1}>
          <div className={classes.circle}>
            <div className={classes.letter}>{USER.name.charAt(0).toUpperCase()}</div>
          </div>
          <div className={classes.text}>{USER.name}</div>
        </div>
        <div id="list-example" className={classes["group-item"]}>
          <a className={`list-group-item list-group-item-action ${classes.style1}`} href="#list-item-1">
            Basic Information
          </a>
          <a className={`list-group-item list-group-item-action ${classes.style1}`} href="#list-item-2">
            Experience
          </a>
          <a className={`list-group-item list-group-item-action ${classes.style1}`} href="#list-item-3">
            Education
          </a>
          <a className={`list-group-item list-group-item-action ${classes.style1}`} href="#list-item-4">
            Advanced Skill
          </a>
          <a className={`list-group-item list-group-item-action ${classes.style1}`} href="#list-item-5">
            Career Field
          </a>
          <a className={`list-group-item list-group-item-action ${classes.style1}`} href="#list-item-6">
            CV
          </a>
        </div>
        <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
          <div id="list-item-1" className={classes.title}>
            <div className={classes.makeup}>
              <div className={classes.style2}>Basic Information</div>
            </div>
            <div>
              {editInfor === false ? (
                <button className={classes.edit} onClick={() => setEditInfor(true)}>
                  <div className={classes.style3}>Edit</div>
                </button>
              ) : (
                <button
                  className={classes.edit}
                  onClick={() => {
                    handleSubmit();
                    setEditInfor(false);
                  }}
                >
                  <div className={classes.style3}>Save</div>
                </button>
              )}
            </div>
          </div>

          <div>
            {editInfor === false ? (
              <form className={classes.data}>
                <div className={classes.left}>
                  <div className={`${classes.font} ${classes.itemLeft}`}>
                    <label>Phone Number: </label> <br />
                    {USER.phone}
                  </div>
                  <div className={`${classes.font} ${classes.itemLeft}`}>
                    <label>Permanent address: </label> <br />
                    {address}
                  </div>
                </div>
                <div className={classes.right}>
                  <div className={`${classes.font} ${classes.itemRight1}`}>
                    <label>Email: </label> <br />
                    {USER.email}
                  </div>
                  <div className={`${classes.font} ${classes.itemRight2}`}>
                    <label>Age: </label> <br />
                    {age}
                  </div>
                  <div className={`${classes.font} ${classes.itemRight2}`}>
                    <label>Gender: </label> <br />
                    {gender}
                  </div>
                </div>
              </form>
            ) : (
              <form className={classes.data} onSubmit={handleSubmit}>
                <div className={classes.left}>
                  <div className={`${classes.font} ${classes.itemLeft}`}>
                    <label>Phone Number:</label> <br />
                    <div className={classes.font}>{USER.phone}</div>
                  </div>
                  <div className={`${classes.font} ${classes.itemLeft}`}>
                    <label>Permanent address:</label> <br />
                    <textarea
                      className={`${classes.font} ${classes.editmake}`}
                      rows={"4"}
                      colums={"40"}
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                    ></textarea>
                  </div>
                </div>
                <div className={classes.right}>
                  <div className={`${classes.font} ${classes.itemRight1}`}>
                    <label>Email:</label> <br />
                    <div className={classes.font}>{USER.email}</div>
                  </div>
                  <div className={`${classes.font} ${classes.itemRight2}`}>
                    <label>Age:</label> <br />
                    <input className={classes.font} style={{ width: "95%" }} onChange={(e) => setAge(e.target.value)} value={age}></input>
                  </div>
                  <div className={`${classes.font} ${classes.itemRight2}`}>
                    <label>Gender:</label> <br />
                    <input className={classes.font} style={{ width: "95%" }} onChange={(e) => setGender(e.target.value)} value={gender}></input>
                  </div>
                </div>
              </form>
            )}
          </div>

          <div id="list-item-2" className={classes.title}>
            <div className={classes.makeup} style={{ width: "154px" }}>
              <div className={classes.style2}>Experience</div>
            </div>
            <div>
              {editEx === false ? (
                <button className={classes.edit} onClick={() => setEditEx(true)}>
                  <div className={classes.style3}>Edit</div>
                </button>
              ) : (
                <button
                  className={classes.edit}
                  onClick={() => {
                    handleSubmit();
                    setEditEx(false);
                  }}
                >
                  <div className={classes.style3}>Save</div>
                </button>
              )}
            </div>
          </div>
          <div>
            {editEx === false ? (
              <form className={classes.data} style={{ height: "190px" }}>
                <div className={classes.font}>
                  <div className={classes.styleborder}>{experience}</div>
                </div>
              </form>
            ) : (
              <form className={classes.data} style={{ height: "190px" }} onSubmit={handleSubmit}>
                <textarea
                  className={`${classes.font} ${classes.textexper}`}
                  onChange={(e) => setExperience(e.target.value)}
                  value={experience}
                ></textarea>
              </form>
            )}
          </div>

          <div id="list-item-3" className={classes.title}>
            <div className={classes.makeup} style={{ width: "140px" }}>
              <div className={classes.style2}>Education</div>
            </div>
            <div>
              <button
                className={classes.edit}
                onClick={handleSetCanEditEdu}
              >
                <div className={classes.style3}>Edit</div>
              </button>
              <button
                className={classes.edit}
                onClick={() => {
                  setNewEdu(true);
                }}
              >
                <div className={classes.style3}>New</div>
              </button>
            </div>
          </div>

          {educations.length === 0 ? (
            <div className={classes.data}>
              <div className={classes.font}>
                <div className={classes.styleborder}></div>
              </div>
            </div>
          ) : (
            <div className={classes.dataEdu}>
              <Data>
                {educations.map((data, index) => (
                  <div key={index} className={canEditEducation ? classes.canEditEducation : ""} onClick={() => handleEditEducation(data)}>
                    <div className={classes.fontTitle}>{data.school}</div>
                    <div className={classes.font}>{data.major}</div>
                    <div className={classes.font}>{data.degree}</div>
                    <div className={classes.font}>
                      {data.startDate} {data.endDate}
                    </div>
                    <div className={classes.font}>{data.description}</div>
                  </div>
                ))}
              </Data>
            </div>
          )}

          <div id="list-item-4" className={classes.title}>
            <div className={classes.makeup} style={{ width: "182px" }}>
              <div className={classes.style2}>Advanced Skill</div>
            </div>
            <div>
              {editAd === false ? (
                <button className={classes.edit} onClick={() => setEditAd(true)}>
                  <div className={classes.style3}>Edit</div>
                </button>
              ) : (
                <button
                  className={classes.edit}
                  onClick={() => {
                    handleSubmit();
                    setEditAd(false);
                  }}
                >
                  <div className={classes.style3}>Save</div>
                </button>
              )}
            </div>
          </div>
          <div>
            {editAd === false ? (
              <form className={classes.data} style={{ height: "190px" }}>
                <div className={classes.font}>
                  <div className={classes.styleborder}>{advanedSkill}</div>
                </div>
              </form>
            ) : (
              <form className={classes.data} style={{ height: "190px" }} onSubmit={handleSubmit}>
                <textarea
                  className={`${classes.font} ${classes.textexper}`}
                  onChange={(e) => setAdvanedSkill(e.target.value)}
                  value={advanedSkill}
                ></textarea>
              </form>
            )}
          </div>

          <div id="list-item-5" className={classes.title}>
            <div className={classes.makeup} style={{ width: "182px" }}>
              <div className={classes.style2}>Career Field</div>
            </div>
            <div>
              {editCa === false ? (
                <button className={classes.edit} onClick={() => setEditCa(true)}>
                  <div className={classes.style3}>Edit</div>
                </button>
              ) : (
                <button
                  className={classes.edit}
                  onClick={() => {
                    handleSubmit();
                    setEditCa(false);
                  }}
                >
                  <div className={classes.style3}>Save</div>
                </button>
              )}
            </div>
          </div>
          <div>
            {editCa === false ? (
              <form className={classes.data} style={{ height: "300px" }}>
                <div className={`${classes.font} ${classes.itemCareer}`}>
                  <label className={classes.a}>Desired Career Field:</label>
                  {careerFeild}
                </div>
                <div className={`${classes.font} ${classes.itemCareer}`}>
                  <label className={classes.a}>Type of Job:</label>
                  {typeOfJob}
                </div>
                <div className={`${classes.font} ${classes.itemCareer}`}>
                  <label className={classes.a}>Desired salary:</label>
                  {salary}
                </div>
                <div className={`${classes.font} ${classes.itemCareer}`}>
                  <label className={classes.a}>Desired workplace:</label>
                  {workplace}
                </div>
              </form>
            ) : (
              <form className={classes.data} style={{ height: "300px" }} onSubmit={handleSubmit}>
                <div className={`${classes.font} ${classes.itemCareer}`}>
                  <label className={classes.a}>Desired Career Field:</label>
                  <input
                    className={classes.font}
                    style={{ width: "65%" }}
                    onChange={(e) => setCareerFeild(e.target.value)}
                    value={careerFeild}
                  ></input>
                </div>
                <div className={`${classes.font} ${classes.itemCareer}`}>
                  <label className={classes.a}>Type of Job:</label>
                  <input
                    className={classes.font}
                    style={{ width: "65%" }}
                    onChange={(e) => setTypeOfJob(e.target.value)}
                    value={typeOfJob}
                  ></input>
                </div>
                <div className={`${classes.font} ${classes.itemCareer}`}>
                  <label className={classes.a}>Desired salary:</label>
                  <input className={classes.font} style={{ width: "65%" }} onChange={(e) => setSalary(e.target.value)} value={salary}></input>
                </div>
                <div className={`${classes.font} ${classes.itemCareer}`}>
                  <label className={classes.a}>Desired workplace:</label>
                  <input
                    className={classes.font}
                    style={{ width: "65%" }}
                    onChange={(e) => setWorkplace(e.target.value)}
                    value={workplace}
                  ></input>
                </div>
              </form>
            )}
          </div>

          <div id="list-item-6" className={classes.title}>
            <div className={classes.makeup} style={{ width: "91px" }}>
              <div className={classes.style2}>CV</div>
            </div>
            <Link to="/CV">
              <button className={classes.edit}>
                <div className={classes.style3}>Edit</div>
              </button>
            </Link>
          </div>
          <Data className={classes.dataCv}>
            {listCv.map((cv, index) => (
              <CvBox CvName={"CV-" + index} CvLink={cv} />
            ))}
          </Data>
        </div>
      </Fragment>
    )
  );
};

export default Account;
