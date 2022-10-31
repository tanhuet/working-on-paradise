import classes from "./OfferList.module.scss"
import HighlightJob from "../../../../components/highlight-job/HighlightJob"
import { Fragment } from "react"

const OfferList = (props) => {
    const job = props.jobs[0]
    return (
        <Fragment>
            <h1 className={classes.title}>Grab These Exciting Offer And <span>APPLY NOW</span></h1>
            <div className={classes.list}>
                <HighlightJob
                    // class = {classes.red}
                    logo = {job.logo}
                    companyName = {job.companyName}
                    location = {job.location}
                    jobName = {job.jobName}
                    type = {job.type}
                    submittedDate = {job.submittedDate}
                />
                <HighlightJob    
                    logo = {job.logo}
                    companyName = {job.companyName}
                    location = {job.location}
                    jobName = {job.jobName}
                    type = {job.type}
                    submittedDate = {job.submittedDate}
                />
                <HighlightJob    
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

export default OfferList