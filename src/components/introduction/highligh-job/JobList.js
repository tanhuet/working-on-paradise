import { Fragment } from "react"
import Job from "./Job"
import classes from "./JobList.module.scss"

const JobList = (props) => {
    const job = props.jobs[0]
    return (
        <Fragment>
            <h1 className={classes.h1}>BROWSE JOB CATEGORIES</h1>
        
            <div className={classes["job-list"]}>
                <Job 
                    logo = {job.logo}
                    companyName = {job.companyName}
                    location = {job.location}
                    jobName = {job.jobName}
                    type = {job.type}
                    submittedDate = {job.submittedDate}
                />
                               <Job 
                    logo = {job.logo}
                    companyName = {job.companyName}
                    location = {job.location}
                    jobName = {job.jobName}
                    type = {job.type}
                    submittedDate = {job.submittedDate}
                />
                               <Job 
                    logo = {job.logo}
                    companyName = {job.companyName}
                    location = {job.location}
                    jobName = {job.jobName}
                    type = {job.type}
                    submittedDate = {job.submittedDate}
                />
                               <Job 
                    logo = {job.logo}
                    companyName = {job.companyName}
                    location = {job.location}
                    jobName = {job.jobName}
                    type = {job.type}
                    submittedDate = {job.submittedDate}
                />
                               <Job 
                    logo = {job.logo}
                    companyName = {job.companyName}
                    location = {job.location}
                    jobName = {job.jobName}
                    type = {job.type}
                    submittedDate = {job.submittedDate}
                />
                               <Job 
                    logo = {job.logo}
                    companyName = {job.companyName}
                    location = {job.location}
                    jobName = {job.jobName}
                    type = {job.type}
                    submittedDate = {job.submittedDate}
                />
            </div>
        </Fragment>
    )
}

export default JobList