import React from "react";
import classes from "./Highlight.module.scss";
import locationImg from "../../../../../asses/bg-google.png";
import { Google, Save } from "../../../../../components/icon/google";
import { useSelector } from "react-redux";
import axios from "axios";

const Highlight = (props) => {
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  function handleSubmit(event) {
    let text = "Do you confirm submitting your cv?";
    if (window.confirm(text) === true) {
      axios
        .post(`https://tanhuet.site/job/${props.skills.id}/apply`, "", {
          headers: { Authorization: `Bearer ${userStore.accessToken}` },
        })
        .then(function (response) {
          props.skills.handleFuntion(true);
          window.alert(response.data);
        })
        .catch(function (error) {
          console.log(error);
          window.alert("Something Wrong");
        });
    }
  }
  return (
    <React.Fragment>
      <div className={classes.underHeader}>
        <img className={classes.img1} src={locationImg} alt=".." />
        <div className={classes.factory}>
          <div className={classes.icon}>
            <Google src={props.skills.icon} />
          </div>
          <div className={classes.company1}>
            <div className={classes.info1}>
              <h3>{props.skills.jobType}</h3>
              <p>
                {props.skills.address} - {props.skills.daysPost} days ago
              </p>
              <div className={classes.skill}>
                <ul className={classes["skill-items"]}>
                  {props.skills?.skill?.map((item) => (
                    <div key={item} className={classes.item}>
                      {item}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <button
            className={classes.button1}
            onClick={handleSubmit}
            disabled={props.skills.status}
          >
            {props.skills.button}
          </button>
          <div className={classes.icon1}>
            <button className={classes.button2} onClick={handleSubmit}></button>
            <Save />
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
                  <p>
                    Salary: <span> {props.skills.salary} $</span>
                  </p>
                </li>
                <li>
                  <p>
                    Type of Job: <span> {props.skills.typeOfWorking}</span>
                  </p>
                </li>

                <li>
                  <p>
                    Gender: <span> {props.skills.gender}</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className={classes.boxRight}>
              <ul>
                <li>
                  <p>
                    Quantity: <span> {props.skills.quantity}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Position: <span> {props.skills.positions}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Experience: <span> {props.skills.exp}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Highlight;
