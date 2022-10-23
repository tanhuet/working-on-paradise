import classes from "./OfferList.module.scss"
import Offer from "./Offer"
import { Fragment } from "react"

const OfferList = (props) => {
    const job = props.jobs[0]
    return (
        <Fragment>
            <h1 className={classes.title}>Grab These Exciting Offer And <span>APPLY NOW</span></h1>
            <div className={classes.list}>
                <Offer    
                    logo = {job.logo}
                    companyName = {job.companyName}
                    location = {job.location}
                    jobName = {job.jobName}
                    type = {job.type}
                    submittedDate = {job.submittedDate}
                />
                <Offer    
                    logo = {job.logo}
                    companyName = {job.companyName}
                    location = {job.location}
                    jobName = {job.jobName}
                    type = {job.type}
                    submittedDate = {job.submittedDate}
                />
                <Offer    
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