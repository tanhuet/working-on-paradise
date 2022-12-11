import { Fragment } from "react"
import classes from "./CvList.module.scss"
import HighlightCv from "../../../../components/HighlightCv/HighlightCv"
import { NavLink } from "react-router-dom"
import more from "../../../../asses/more.png"

const CvList = (props) => {
    return (
        <Fragment>
            <h1 className={classes.h1}>BROWSE POSSIBLE CVs</h1>
        
            <div className={classes["job-list"]}>
                {props.jobs.map(job => (
                <HighlightCv
                    class = {classes.wrap}
                    key = {job.id}
                    id = {job.id}
                    avatar = {job.avatar}
                    userName = {job.userName}
                    age = {job.age}
                    skills = {job.skills}
                    experience = {job.experience}
                    salary = {job.salary}
                    bookmark = {job.bookmark}
                />
                ))}

                <NavLink to={'/employer-cv'}>
                    <div className={classes.more}>
                        <div className={classes.text}>
                            <p>100+ More CVs</p>
                        </div>
                        <div className={classes.img}>
                            <img src={more} className ={classes['more-img']} alt="more"/>
                        </div>
                    </div>
                </NavLink>
            </div>
        </Fragment>
    )
}

export default CvList