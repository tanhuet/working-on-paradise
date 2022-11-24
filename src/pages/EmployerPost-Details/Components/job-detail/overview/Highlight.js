import React, { useState } from "react";
import classes from "./Highlight.module.scss";
import locationImg from "../../../../../asses/bg-google.png";
import { Google, Save } from "../../../../../components/icon/google";
const Highlight = (props) => {
  const [status, setStatus] = useState(false);
  function handleSubmit(event) {
    if (status === false) {
      props.skills.handleFuntion(true, "Back");
      setStatus(true);
    } else {
      props.skills.handleFuntion(false, "Edit");
      setStatus(false);
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
          <button className={classes.button1} onClick={handleSubmit}>
            {props.skills.button}
          </button>
          <div className={classes.icon1}>
            <button className={classes.button2} onClick={handleSubmit}></button>
            <Save />
          </div>
        </div>
        {!status && (
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
        )}
      </div>
    </React.Fragment>
  );
};

export default Highlight;
