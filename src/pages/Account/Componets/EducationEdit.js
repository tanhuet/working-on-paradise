import { Fragment } from "react";
import { useState, useEffect } from "react";
import classes from "./EducationEdit.module.scss";
import axios from "axios";
import config from "../../../config";
import { useSelector } from "react-redux";
import Backdrop from "../../../components/Backdrop/Backdrop";
import swal from "sweetalert";

const EducationEdit = (props) => {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const userStore = useSelector((state) => state.auth.login?.currentUser);

  useEffect(() => {
    if (!props.newEdu) {
      setSchool(props.education.school);
      setDegree(props.education.degree);
      setMajor(props.education.major);
      setStartDate(props.education.startDate);
      setEndDate(props.education.endDate);
      setDescription(props.education.description);
    }
  }, [props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const education = {
      school: school,
      degree: degree,
      major: major,
      startDate: startDate,
      endDate: endDate,
      description: description,
    };
    if (props.newEdu) {
      axios
        .post(`${config.api.url}/education/create`, education, {
          headers: { Authorization: `Bearer ${userStore.accessToken}` },
        })
        .then((res) => {
          props.onCloseEditingEducation(true);
          swal("Success!", "Education added successfully!", "success");
        });
    } else {
      axios
        .put(`${config.api.url}/education/${props.education.id}`, education, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
        .then((res) => {
          props.onCloseEditingEducation(true);
          swal("Success!", "Education updated successfully!", "success");
        });
    }
  };
  return (
    <Fragment>
      <Backdrop onClose={props.onCloseEditingEducation} />
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.fontTitle}>
          <input className={classes.title} onChange={(e) => setSchool(e.target.value)} value={school}></input>
        </div>

        <div className={classes.b}>
          <div className={classes.item}>
            <div className={classes.font}>
              <label className={classes.a}>Major:</label>
              <input style={{ width: "60%" }} onChange={(e) => setMajor(e.target.value)} value={major}></input>
            </div>
          </div>

          <div className={classes.item}>
            <div className={classes.font}>
              <label className={classes.a}>Degree:</label>
              <input style={{ width: "60%" }} onChange={(e) => setDegree(e.target.value)} value={degree}></input>
            </div>
          </div>

          <div className={classes.item}>
            <div className={classes.font}>
              <label className={classes.a}>Start Date:</label>
              <input type="date" min="1000-01-01" max="9999-12-31" style={{ width: "60%" }} onChange={(e) => setStartDate(e.target.value)} value={startDate}></input>
            </div>
          </div>
          <div className={classes.item}>
            <div className={classes.font}>
              <label className={classes.a}>End Date:</label>
              <input type="date" min="1000-01-01" max="9999-12-31" style={{ width: "60%" }} onChange={(e) => setEndDate(e.target.value)} value={endDate}></input>
            </div>
          </div>
          <div className={classes.item}>
            <div className={classes.font}>
              <label className={classes.a}>Description:</label>
            </div>
          </div>
          <textarea className={`${classes.font1} ${classes.style}`} onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        </div>
        <div className={classes.listButton}>
          <button className={classes.styleButtonCancle} onClick={props.onCloseEditingEducation}>Cancel</button>
          <button className={classes.styleButtonSave} type="submit">Save</button>
        </div>
      </form>
    </Fragment>
  );
};

export default EducationEdit;
