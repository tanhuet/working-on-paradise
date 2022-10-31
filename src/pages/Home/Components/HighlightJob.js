import { Fragment } from "react"
import locationImg from "../../../asses/img-location.png"
import JobList from "./highligh-job/JobList"
import JobPosting from "./highligh-job/JobPosting"
import OfferList from "./highligh-job/OfferList"
import Personnel from "./highligh-job/Personnel"

const DUMYJOB = [
    {
        logo: locationImg,
        companyName: 'Google Inc',
        location: 'California',
        jobName: 'UI/UX Desgin',
        type: 'Part Time',
        submittedDate: '12/12/2012',
    },
]

const HighlightJob = () => {
    return (
        <Fragment>
            <JobList jobs={DUMYJOB}/>
            <JobPosting />
            <OfferList jobs={DUMYJOB}/>
            <Personnel />
        </Fragment>
    )
}

export default HighlightJob