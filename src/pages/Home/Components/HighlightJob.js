import { Fragment, useState } from "react"
import { useEffect } from "react"
import config from "../../../config"
import axios from "axios"

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

    const [entireJobs, setEntireJobs] = useState();

    useEffect(() => {
        axios.get(`${config.api.url}/job/getPageSuggestion/5/1`)
            .then((res) => {
                setEntireJobs(res.data);
            })
            .catch(err => {
                console.log(err)
            });
    }, [])

    let jobs = [];
    if (entireJobs) {
        jobs = entireJobs.map((job) => {
            let tags = job.tags.replace(" ", '').split(",")
            tags = tags.slice(0, 2)
            return {
                id: job.id,
                logo: job.authorAvatar,
                companyName: job.authorName,
                location: job.authorAddress,
                category: job.title,
                jobType: job.typeOfWorking,
                experience: job.exp,
                salary: job.salary,
                skills: tags,
            }
        })
    }

    return (
        <Fragment>
            <JobList jobs={jobs}/>
            <JobPosting />
            <OfferList jobs={DUMYJOB}/>
            <Personnel />
        </Fragment>
    )
}

export default HighlightJob