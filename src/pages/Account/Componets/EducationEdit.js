import { Fragment } from "react";
import { useState, useEffect } from "react";
import classes from "./EducationEdit.module.scss";
import axios from "axios";
import config from "../../../config";
import { useSelector } from "react-redux";
import Backdrop from "../../../components/back-drop/Backdrop";
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
  }, []);

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
        <li className={classes.font}>
          Major: <input style={{ width: "50%" }} onChange={(e) => setMajor(e.target.value)} value={major}></input>
        </li>
        <li className={classes.font}>
          Degree: <input style={{ width: "50%" }} onChange={(e) => setDegree(e.target.value)} value={degree}></input>
        </li>
        <li className={classes.font}>
          Start Date: <input style={{ width: "50%" }} onChange={(e) => setStartDate(e.target.value)} value={startDate}></input>
        </li>
        <li className={classes.font}>
          End Date: <input style={{ width: "50%" }} onChange={(e) => setEndDate(e.target.value)} value={endDate}></input>
        </li>
        <li className={classes.font}>Description: </li>
        <textarea className={`${classes.font} ${classes.style}`} onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        <div>
          <div className={classes.styleButton}>
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default EducationEdit;
