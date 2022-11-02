import { Fragment } from "react"
import classes from "./JobList.module.scss"
import HighlightJob from "../../../../components/highlight-job/HighlightJob"
import { Link } from "react-router-dom"
import more from "../../../../asses/more.png"

const JobList = (props) => {
    const job = props.jobs[0]
    return (
        <Fragment>
            <h1 className={classes.h1}>BROWSE JOB CATEGORIES</h1>
        
            <div className={classes["job-list"]}>
                <HighlightJob
                    class = {classes.wrap}
                    logo = {job.logo}
                    companyName = {job.companyName}
                    location = {job.location}
                    category = {job.category}
                    jobType = {job.jobType}
                    skills = {job.skills}
                    experience = {job.experience}
                    minSalary = {job.minSalary}
                    maxSalary = {job.maxSalary}
                    // submittedDate = {job.submittedDate}
                />
                                <HighlightJob
                    class = {classes.wrap}
                    logo = {job.logo}
                    companyName = {job.companyName}
                    location = {job.location}
                    category = {job.category}
                    jobType = {job.jobType}
                    skills = {job.skills}
                    experience = {job.experience}
                    minSalary = {job.minSalary}
                    maxSalary = {job.maxSalary}
                    // submittedDate = {job.submittedDate}
                />
                                <HighlightJob
                    class = {classes.wrap}
                    logo = {job.logo}
                    companyName = {job.companyName}
                    location = {job.location}
                    category = {job.category}
                    jobType = {job.jobType}
                    skills = {job.skills}
                    experience = {job.experience}
                    minSalary = {job.minSalary}
                    maxSalary = {job.maxSalary}
                    // submittedDate = {job.submittedDate}
                />
                                <HighlightJob
                    class = {classes.wrap}
                    logo = {job.logo}
                    companyName = {job.companyName}
                    location = {job.location}
                    category = {job.category}
                    jobType = {job.jobType}
                    skills = {job.skills}
                    experience = {job.experience}
                    minSalary = {job.minSalary}
                    maxSalary = {job.maxSalary}
                    // submittedDate = {job.submittedDate}
                />
                                <HighlightJob
                    class = {classes.wrap}
                    logo = {job.logo}
                    companyName = {job.companyName}
                    location = {job.location}
                    category = {job.category}
                    jobType = {job.jobType}
                    skills = {job.skills}
                    experience = {job.experience}
                    minSalary = {job.minSalary}
                    maxSalary = {job.maxSalary}
                    // submittedDate = {job.submittedDate}
                />
                <Link>
                    <div className={classes.more}>
                        <div className={classes.text}>
                            <p>100+ More <br/>Categories</p>
                        </div>
                        <div className={classes.img}>
                            <img src={more} className ={classes['more-img']} alt="more"/>
                        </div>
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}

export default JobList