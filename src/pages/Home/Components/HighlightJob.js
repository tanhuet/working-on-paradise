import { Fragment } from "react"
import locationImg from "../../../asses/img-location.png"
import JobList from "./highligh-job/JobList"
import JobPosting from "./highligh-job/JobPosting"
import OfferList from "./highligh-job/OfferList"
import Personnel from "./highligh-job/Personnel"

const DUMYJOB = [
    {
        id: 1,
        logo: locationImg,
        companyName: 'Google Inc',
        location: 'California',
        category: 'UI/UX Desgin',
        jobType: 'Part Time',
        experience: 'Senior',
        minSalary: '700',
        maxSalary: '1500',
        skills: ['cloud', 'react'],
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