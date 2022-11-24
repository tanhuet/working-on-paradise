import { Fragment } from "react"
import { useState, useEffect } from "react";
import classes from "./EducationEdit.module.scss"
import axios from "axios";
import config from "../../../config";
import { useSelector } from "react-redux";
import Backdrop from "../../../components/back-drop/Backdrop"

const EducationEdit = (props) => {

    const [school, setSchool] = useState();
    const [degree, setDegree] = useState();
    const [major, setMajor] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [description, setDescription] = useState();

    const userStore = useSelector((state) => state.auth.login?.currentUser);

    useEffect(() => {
        axios.get(`${config.api.url}/education/id`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
            .then((res) => {
                console.log(res.data);
                setSchool(res.data.school)
                setDegree(res.data.degree)
                setMajor(res.data.major)
                setStartDate(res.data.startDate)
                setEndDate(res.data.endDate)
                setDescription(res.data.description)
            });
    }, [userStore]);

    const handleSubmit = (event) => {

        axios.put(`${config.api.url}/education/id`,
            {
                school: school,
                degree: degree,
                major: major,
                startDate: startDate,
                endDate: endDate,
                description: description,
            }, { headers: { Authorization: `Bearer ${userStore.accessToken}` } }
        )

    };
    return (
        <Fragment>
            <Backdrop onClose={props.onCloseEditingEducation} />
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.fontTitle}>
                    <input className={classes.title} onChange={(e) => setSchool(e.target.value)} value={school}></input>
                </div>
                <li className={classes.font}>Major: <input style={{ width: "50%" }} onChange={(e) => setMajor(e.target.value)} value={major}></input></li>
                <li className={classes.font}>Degree: <input style={{ width: "50%" }} onChange={(e) => setDegree(e.target.value)} value={degree}></input></li>
                <li className={classes.font}>Start Date: <input style={{ width: "50%" }} onChange={(e) => setStartDate(e.target.value)} value={startDate}></input></li>
                <li className={classes.font}>End Date: <input style={{ width: "50%" }} onChange={(e) => setEndDate(e.target.value)} value={endDate}></input></li>
                <li className={classes.font}>Description: </li>
                <textarea className={`${classes.font} ${classes.style}`} onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                <div>
                    <div className={classes.styleButton}>
                        <button type="submit">Save</button>
                    </div>
                </div>

            </form>
        </Fragment>
    )
}

export default EducationEdit