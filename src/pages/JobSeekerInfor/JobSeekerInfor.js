import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import config from "../../config";
import classes from "./JobSeekerInfor.module.scss";
import { Fragment } from "react";
import Data from "../Account/Componets/Data";
import CvBox from "../Account/Componets/CvBox";
import error from "../../asses/errorImg.png";

const JobSeekerInfor = () => {
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [name, setName] = useState();
  const [avatar, setAvatar] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
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

  const jobseekerId = useParams().jobseekerId;

  useEffect(() => {
    axios.get(`${config.api.url}/jobseeker/${jobseekerId}`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } }).then((res) => {
      setName(res.data.name);
      setAvatar(res.data.avatar);
      setPhone(res.data.phone);
      setEmail(res.data.email);
      setAge(res.data.age);
      setAddress(res.data.address);
      setGender(res.data.gender);
      setExperience(res.data.experience);
      setAdvanedSkill(res.data.advanedSkill);
      setCareerFeild(res.data.careerFeild);
      setTypeOfJob(res.data.typeOfJob);
      setSalary(res.data.salary);
      setWorkplace(res.data.workplace);

      const resListCv = res.data.cv.split(",");
      const newListCv = [];
      resListCv.forEach((item) => {
        if (item && item !== "" && item.length > 3 && item !== "cv link") {
          newListCv.push(item);
        }
      });

      setListCv(newListCv);
    });

    axios
      .get(`${config.api.url}/education/jobseeker/${jobseekerId}`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
      .then((res) => {
        setEducation(res.data);
      });
  }, [userStore, jobseekerId]);

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

  const errorImg = (e) => {
    e.target.onerror = null;
    e.target.src = error;
  };

  return (
    <Fragment>
      <div className={classes.container1}>
        <img className={classes.circle} src={avatar} onError={errorImg} alt="avatar" />
        <div className={classes.text}>{name}</div>
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
          <div className={classes.makeupItem1}>
            <div className={classes.style2}>Basic Information</div>
          </div>
        </div>
      </div>
      <div className={classes.data}>
        <div className={classes.left}>
          <div className={`${classes.font} ${classes.itemLeft}`}>
            <label>Phone Number: </label> <br />
            {phone}
          </div>
          <div className={`${classes.font} ${classes.itemLeft}`}>
            <label>Permanent address: </label> <br />
            {address}
          </div>
        </div>
        <div className={classes.right}>
          <div className={`${classes.font} ${classes.itemRight1}`}>
            <label>Email: </label> <br />
            {email}
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
      </div>

      <div id="list-item-2" className={classes.title}>
        <div className={classes.makeupItem2}>
          <div className={classes.style2}>Experience</div>
        </div>
      </div>
      <div className={classes.dataItem234}>
        <div className={classes.font}>
          <div className={classes.styleborder}>{experience}</div>
        </div>
      </div>

      <div id="list-item-3" className={classes.title}>
        <div className={classes.makeupItem3}>
          <div className={classes.style2}>Education</div>
        </div>
      </div>
      {educations.length === 0 ? (
        <div className={classes.dataItem234}>
          <div className={classes.font}>
            <div className={classes.styleborder}></div>
          </div>
        </div>
      ) : (
        <div className={classes.dataEdu}>
          <Data>
            {educations.map((data) => (
              <div key={data.id}>
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
        <div className={classes.makeupItem45}>
          <div className={classes.style2}>Advanced Skill</div>
        </div>
      </div>
      <div className={classes.dataItem234}>
        <div className={classes.font}>
          <div className={classes.styleborder}>{advanedSkill}</div>
        </div>
      </div>

      <div id="list-item-5" className={classes.title}>
        <div className={classes.makeupItem45}>
          <div className={classes.style2}>Career Field</div>
        </div>
      </div>
      <div className={classes.dataItem5}>
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
      </div>

      <div id="list-item-6" className={classes.title}>
        <div className={classes.makeupItem6}>
          <div className={classes.style2}>CV</div>
        </div>
      </div>
      <Data className={classes.dataCv}>
        {listCv.map((cv, index) => (
          <CvBox CvName={"CV-" + index} CvLink={cv} />
        ))}
      </Data>
    </Fragment>
  );
};

export default JobSeekerInfor;
