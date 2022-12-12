import classes from "./HighlightJob.module.scss";
import { useSelector } from "react-redux";
import config from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import FollowIcon from "../Icons/Follow";

const HighlightJob = (props) => {
  // scale function
  const scaleCategory = (str) => {
    let newStr;
    if (str.length > 16) {
      newStr = str.slice(0, 13) + "...";
      return newStr;
    }
    return str;
  };

  const scaleCompanyNameAndLocation = (str) => {
    let newStr = str;
    if (newStr.length < 24) {
      newStr = str + "\n ...";
    }
    return newStr;
  };

  const scaleExperienceAndJobType = (str) => {
    let newStr;
    if (str.length > 32) {
      newStr = str.slice(0, 29) + "...";
      return newStr;
    }
    return str;
  };

  const category = scaleCategory(props.category);
  // const companyNameAndLocation = scaleCompanyNameAndLocation(`${props.companyName}-${props.location}`);
  const experienceAndJobType = scaleExperienceAndJobType(`${props.experience},${props.jobType}`);

  const navigate = useNavigate();

  const userStore = useSelector((state) => state.auth.login?.currentUser);

  const followHanlder = async () => {
    if (userStore) {
      try {
        const resFlag = await axios.get(`${config.api.url}/job/${props.id}/marked`, {
          headers: { Authorization: `Bearer ${userStore.accessToken}` },
        });
        if (!resFlag.data) {
          await axios.post(`${config.api.url}/job/${props.id}/mark`, {}, { headers: { Authorization: `Bearer ${userStore.accessToken}` } });
          navigate("/favourite");
        } else {
          await axios.delete(`${config.api.url}/job/${props.id}/unmark`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } });
          window.location.reload(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className={`${classes.card} ${props.class}`}>
      <div className={classes.company}>
        <Link to={"/details/" + props.id}>
          <div className={classes["company-info"]}>
            <div className={classes.logo}>
              <img src={props.logo} alt=".." />
            </div>
            <div className={classes.info}>
              <h3>{category}</h3>
              {/* <p>{companyNameAndLocation}</p> */}
              <p>{props.companyName}</p>
              <p className={classes.location}>{props.location}</p>
            </div>
          </div>
        </Link>
        <div className={classes.btn}>
          <button onClick={followHanlder}>
            {!props.bookmark && <FollowIcon />}
            {props.bookmark && (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#7BEADF" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className={classes.jd}>
        <ul>
          <li>{experienceAndJobType}</li>
          <li>${props.salary}</li>
        </ul>
      </div>
      <div className={classes.skill}>
        <ul className={classes["skill-items"]}>
          {props.skills.map((item) => (
            <div key={item} className={classes.item}>
              {item}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HighlightJob;
