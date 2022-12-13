import React, { useState } from "react";
import classes from "./Highlight.module.scss";
import locationImg from "../../../../../asses/nhansu.png";
import { Google } from "../../../../../components/Icons/Google";
import ReactImageFallback from "react-image-fallback";

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

  const handleChangeTitle = (event) => {
    // setTittle(event.target.value);
    props.skills.handleTitleImg(event.target.value, props.skills.icon);
  };
  return (
    <React.Fragment>
      <div className={classes.underHeader}>
        <ReactImageFallback className={classes.img1} src={props.skills.imageUrl} alt=".." fallbackImage={locationImg} />

        <div className={classes.company1}>
          <div className={classes.factory}>
            <div className={classes.icon}>
              <Google src={props.skills.icon} />

              {/* {status && (
                <div>
                  <input
                    type="file"
                    id="file"
                    ref={inputFile}
                    style={{ display: "none" }}
                    onChange={changeHandler}
                  />

                  <button onClick={onButtonClick}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </button>
                </div>
              )} */}
            </div>
            <div className={classes.info1}>
              <h3>{!status && props.skills.jobType}</h3>
              <h3>
                {status && (
                  <input
                    type="text"
                    onChange={handleChangeTitle}
                    // placeholder={props.skills.jobType}
                    Value={props.skills.jobType}
                  ></input>
                )}
              </h3>
              <p>
                {props.skills.company} - {props.skills.address} - {Math.abs(props.skills.daysPost)} days ago
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
