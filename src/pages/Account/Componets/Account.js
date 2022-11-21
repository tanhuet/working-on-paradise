import { useState, useEffect } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Account.module.scss"
import axios from "axios";
import { useSelector } from "react-redux";
import config from "../../../config";
import React from "react";

const Account = (props) => {
  const USER = props.user;

  const [editInfor, setEditInfor] = useState(false);
  const [editEx, setEditEx] = useState(false);
  const [editEdu, setEditEdu] = useState(false);
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

  const userStore = useSelector((state) => state.auth.login?.currentUser);

  useEffect(() => {
    axios.get(`${config.api.url}/jobseeker`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
      .then((res) => {
        //console.log(res.data);
        setAge(res.data.age)
        setAddress(res.data.address)
        setGender(res.data.gender)
        setExperience(res.data.experience)
        setAdvanedSkill(res.data.advanedSkill)
        setCareerFeild(res.data.careerFeild)
        setTypeOfJob(res.data.typeOfJob)
        setSalary(res.data.salary)
        setWorkplace(res.data.workplace)
      });
  }, [userStore]);

  const handleSubmit = (event) => {
    setEditInfor(false)

    console.log(1)
    axios
      .put(
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
      ).then((res) => {
        console.log(res.data);
      })
  };

  return (
    USER && (
      <Fragment>
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
                <button className={classes.edit} onClick={handleSubmit}>
                  <div className={classes.style3}>Save</div>
                </button>
              )}
            </div>
          </div>

          <div>
            {editInfor === false ? (
              <form className={classes.data}>
                <div className={classes.left}>
                  <div className={`${classes.font} ${classes.phone}`}>
                    <label>Phone Number: </label> <br />
                    {USER.phone}
                  </div>
                  <div className={`${classes.font} ${classes.address}`}>
                    <label>Permanent address: </label> <br />
                    {address}
                  </div>
                </div>
                <div className={classes.right}>
                  <div className={`${classes.font} ${classes.email}`}>
                    <label>Email (Verified/Unverified): </label> <br />
                    {USER.email}
                  </div>
                  <div className={`${classes.font} ${classes.age}`}>
                    <label>Age: </label> <br />
                    {age}
                  </div>
                  <div className={`${classes.font} ${classes.gender}`}>
                    <label>Gender: </label> <br />
                    {gender}
                  </div>
                </div>
              </form>
            ) : (
              <form className={classes.data} onSubmit={handleSubmit}>
                <div className={classes.left}>
                  <div className={`${classes.font} ${classes.phone}`}>
                    <label>Phone Number:</label> <br />
                    <div className={`${classes.font} ${classes.editmake}`}>{USER.phone}</div>
                  </div>
                  <div className={`${classes.font} ${classes.address}`}>
                    <label>Permanent address:</label> <br />
                    <textarea className={`${classes.font} ${classes.editmake}`} rows={"4"} colums={"40"} onChange={(e) => setAddress(e.target.value)} value={address}></textarea>
                  </div>
                </div>
                <div className={classes.right}>
                  <div className={`${classes.font} ${classes.email}`}>
                    <label>Email (Verified/Unverified):</label> <br />
                    <div className={classes.font}>{USER.email}</div>
                  </div>
                  <div className={`${classes.font} ${classes.age}`}>
                    <label>Age:</label> <br />
                    <input type={"text"} className={classes.font} onChange={(e) => setAge(e.target.value)} value={age}></input>
                  </div>
                  <div className={`${classes.font} ${classes.gender}`}>
                    <label>Gender:</label> <br />
                    <input type={"text"} className={classes.font} onChange={(e) => setGender(e.target.value)} value={gender}></input>
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
                <button className={`${classes.edit} ${classes.margin1}`} onClick={() => setEditEx(true)}>
                  <div className={classes.style3}>Edit</div>
                </button>
              ) : (
                <button className={`${classes.edit} ${classes.margin1}`} onClick={() => {handleSubmit(); setEditEx(false)} }>
                  <div className={classes.style3}>Save</div>
                </button>
              )}
            </div>
          </div>
          <div>
            {editEx === false ? (
              <form className={classes.data} style={{ height: "181px" }}>
                <div className={classes.font}>
                  <div className={classes.styleborder}>{experience}</div>
                </div>
              </form>
            ) : (
              <form className={classes.data} style={{ height: "181px" }} onSubmit={handleSubmit}>
                <textarea className={`${classes.font} ${classes.textexper}`} onChange={(e) => setExperience(e.target.value)} value={experience}></textarea>
              </form>
            )}
          </div>

          <div id="list-item-3" className={classes.title}>
            <div className={classes.makeup} style={{ width: "140px" }}>
              <div className={classes.style2}>Education</div>
            </div>
            <div>
              {editEdu === false ? (
                <button className={`${classes.edit} ${classes.margin2}`} onClick={() => setEditEdu(true)}>
                  <div className={classes.style3}>Edit</div>
                </button>
              ) : (
                <button className={`${classes.edit} ${classes.margin2}`} onClick={() => setEditEdu(false)}>
                  <div className={classes.style3}>Save</div>
                </button>
              )}
            </div>
          </div>
          <div>
            {editEdu === false ? (
              <form className={classes.data} style={{ height: "170px" }}>
                <div className={classes.font}>
                  <div className={classes.styleborder}></div>
                </div>
              </form>
            ) : (
              <form className={classes.data} style={{ height: "170px" }}>
                <textarea className={`${classes.font} ${classes.textedu}`}></textarea>
              </form>
            )}
          </div>

          <div id="list-item-4" className={classes.title}>
            <div className={classes.makeup} style={{ width: "182px" }}>
              <div className={classes.style2}>Advanced Skill</div>
            </div>
            <div>
              {editAd === false ? (
                <button className={`${classes.edit} ${classes.margin3}`} onClick={() => setEditAd(true)}>
                  <div className={classes.style3}>Edit</div>
                </button>
              ) : (
                <button className={`${classes.edit} ${classes.margin3}`} onClick={() => {handleSubmit(); setEditAd(false)}}>
                  <div className={classes.style3}>Save</div>
                </button>
              )}
            </div>
          </div>
          <div>
            {editAd === false ? (
              <form className={classes.data} style={{ height: "181px" }}>
                <div className={classes.font}>
                  <div className={classes.styleborder}>{advanedSkill}</div>
                </div>
              </form>
            ) : (
              <form className={classes.data} style={{ height: "181px" }} onSubmit={handleSubmit}>
                <textarea className={`${classes.font} ${classes.textexper}`} onChange={(e) => setAdvanedSkill(e.target.value)} value={advanedSkill}></textarea>
              </form>
            )}
          </div>

          <div id="list-item-5" className={classes.title}>
            <div className={classes.makeup} style={{ width: "182px" }}>
              <div className={classes.style2}>Career Field</div>
            </div>
            <div>
              {editCa === false ? (
                <button className={`${classes.edit} ${classes.margin3}`} onClick={() => setEditCa(true)}>
                  <div className={classes.style3}>Edit</div>
                </button>
              ) : (
                <button className={`${classes.edit} ${classes.margin3}`} onClick={() => {handleSubmit(); setEditCa(false)}}>
                  <div className={classes.style3}>Save</div>
                </button>
              )}
            </div>
          </div>
          <div>
            {editCa === false ? (
              <form className={classes.data} style={{ height: "324px" }}>
                <div className={classes.containerCarField}>
                  <div className={`${classes.font} ${classes.item1}`}>
                    <label className={classes.a}>Desired Career Field:</label>
                    {careerFeild}
                  </div>
                  <div className={`${classes.font} ${classes.item2}`}>
                    <label className={classes.b}>Type of Job:</label>
                    {typeOfJob}
                  </div>
                  <div className={`${classes.font} ${classes.item3}`}>
                    <label className={classes.c}>Desired salary:</label>
                    {salary}
                  </div>
                  <div className={`${classes.font} ${classes.item4}`}>
                    <label className={classes.d}>Desired workplace:</label>
                    {workplace}
                  </div>
                </div>
              </form>
            ) : (
              <form className={classes.data} style={{ height: "324px" }} onSubmit={handleSubmit}>
                <div className={classes.containerCarField}>
                  <div className={`${classes.font} ${classes.item1}`}>
                    <label className={classes.a}>Desired Career Field:</label>
                    <textarea className={classes.font} style={{ width: "450px" }} onChange={(e) => setCareerFeild(e.target.value)} value={careerFeild}></textarea>
                  </div>
                  <div className={`${classes.font} ${classes.item2}`}>
                    <label className={classes.b}>Type of Job:</label>
                    <input className={classes.font} style={{ width: "450px" }} onChange={(e) => setTypeOfJob(e.target.value)} value={typeOfJob}></input>
                  </div>
                  <div className={`${classes.font} ${classes.item3}`}>
                    <label className={classes.c}>Desired salary:</label>
                    <input className={classes.font} style={{ width: "450px" }} onChange={(e) => setSalary(e.target.value)} value={salary}></input>
                  </div>
                  <div className={`${classes.font} ${classes.item4}`}>
                    <label className={classes.d}>Desired workplace:</label>
                    <input className={classes.font} style={{ width: "450px" }} onChange={(e) => setWorkplace(e.target.value)} value={workplace}></input>
                  </div>
                </div>
              </form>
            )}
          </div>

          <div id="list-item-6" className={classes.title}>
            <div className={classes.makeup} style={{ width: "91px" }}>
              <div className={classes.style2}>CV</div>
            </div>
            <Link to="/cv/:cvld">
              <button className={`${classes.edit} ${classes.margin4}`}>
                <div className={classes.style3}>Edit</div>
              </button>
            </Link>
          </div>
          <div className={classes.data} style={{ height: "293px" }}>
            <div className={classes.containercv}>
              <button className={`${classes.share} ${classes.style4}`}>Share</button>
              <button className={`${classes.download} ${classes.style4}`}>Download</button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  );
};

export default Account;
