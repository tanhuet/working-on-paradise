import classes from "./CvDetail.module.scss";
import locationImg from "../../asses/img-location.png";
import { Fragment } from "react";
import axios from "axios";
import config from "../../config";
import { useSelector } from "react-redux";

const CvDetail = (props) => {
  const CV = props.cv;
  const userStore = useSelector((state) => state.auth.login?.currentUser);

  const editHandler = () => {
    props.onEdit(true);
  };

  const handleSaveToServer = () => {
    axios.post(`${config.api.url}/cv/generate`, { cv: CV }, { headers: { Authorization: `Bearer ${userStore.accessToken}` } }).then(() => {
      alert("Successfully");
    });
  };

  return (
    <Fragment>
      <div className={classes.form}>
        <div className={classes.header}>
          <button onClick={editHandler}>Edit</button>
          <button onClick={handleSaveToServer}>Export</button>
        </div>
        <div className={classes.name}>
          <div>
            <p>{CV.name}</p>
          </div>
        </div>
        <div className={classes.cv}>
          <div className={classes["info1"]}>
            <div className={classes.first}>
              <div className={classes.img}>
                <img src={locationImg} alt="..." />
              </div>
              <p>Name</p>
              <div className={classes["name-user"]}>
                <div>
                  <p>{CV.nameUser}</p>
                </div>
              </div>
            </div>
            <div className={classes.experience}>
              <h2>Experience</h2>
              <div className={classes["exprience-detail"]}>
                {CV.experience.map((item) => (
                  <div className={classes["item"]} key={item.id}>
                    <p>
                      {item.startDate.toISOString().split("T")[0]} - {item.endDate.toISOString().split("T")[0]}
                    </p>
                    <h3>
                      {item.position} - {item.company}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={classes.activities}>
              <h2>Activities</h2>
              <div className={classes["activities-detail"]}>
                {CV.activities.map((item) => (
                  <div className={classes["item"]} key={item.id}>
                    <p>
                      {item.startDate.toISOString().split("T")[0]} - {item.endDate.toISOString().split("T")[0]}
                    </p>
                    <h3>
                      {item.position} - {item.organization}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={classes["info2"]}>
            <div className={classes["own-info"]}>
              <label>Date of birth:</label>
              <p>{CV.birthday.toISOString().split("T")[0]}</p>
              <label>Phone Number:</label>
              <p>{CV.phone}</p>
              <label>Email:</label>
              <p>{CV.email}</p>
              <label>Address:</label>
              <p>{CV.address}</p>
              <label>Sex:</label>
              <p>{CV.sex}</p>
            </div>
            <div className={classes.education}>
              <h2>Education</h2>
              <div className={classes["education-detail"]}>
                {CV.education.map((item) => (
                  <div className={classes["item"]} key={item.id}>
                    <p>
                      {item.startDate.toISOString().split("T")[0]} - {item.endDate.toISOString().split("T")[0]}
                    </p>
                    <h3>
                      {item.position} - {item.school}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={classes.skills}>
              <h2>Skills</h2>
              <div className={classes["skills-detail"]}>
                {CV.skills.map((item) => (
                  <div className={classes["item"]} key={item.id}>
                    <h3>{item.skill}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CvDetail;
