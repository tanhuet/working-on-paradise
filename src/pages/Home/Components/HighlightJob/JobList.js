import { Fragment } from "react"
import classes from "./JobList.module.scss"
import HighlightJob from "../../../../components/HighlightJob/HighlightJob"
import { NavLink } from "react-router-dom"
import more from "../../../../asses/more.png"

const JobList = (props) => {
    return (
        <Fragment>
            <h1 className={classes.h1}>BROWSE JOB CATEGORIES</h1>
        
            <div className={classes["job-list"]}>
                {props.jobs.map(job => (
                <HighlightJob
                    class = {classes.wrap}
                    key = {job.id}
                    id = {job.id}
                    logo = {job.logo}
                    companyName = {job.companyName}
                    location = {job.location}
                    category = {job.category}
                    jobType = {job.jobType}
                    skills = {job.skills}
                    experience = {job.experience}
                    salary = {job.salary}
                    bookmark = {job.bookmark}
                />
                ))}

                <NavLink to={'/category'}>
                    <div className={classes.more}>
                        <div className={classes.text}>
                            <p>100+ More <br/>Categories</p>
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

export default JobList