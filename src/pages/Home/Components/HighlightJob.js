import { Fragment, useState } from "react"
import { useEffect } from "react"
import config from "../../../config"
import axios from "axios"
import { useSelector } from "react-redux"

import locationImg from "../../../asses/img-location.png"
import JobList from "./HighlightJob/JobList"
import JobPosting from "./HighlightJob/JobPosting"
import OfferList from "./HighlightJob/OfferList"
import Personnel from "./HighlightJob/Personnel"

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
    const userStore = useSelector((state) => state.auth.login?.currentUser);

    const [entireJobs, setEntireJobs] = useState();

    useEffect(() => {
        if (userStore) {
        axios.get(`${config.api.url}/job/getPageSuggestion/5/1`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
            .then((res) => {
                setEntireJobs(res.data);
            })
            .catch(err => {
                console.log(err)
            });
        } else {
            axios.get(`${config.api.url}/job/getPageSuggestion/5/1`)
            .then((res) => {
                setEntireJobs(res.data);
            })
            .catch(err => {
                console.log(err)
            });
        }
    }, [userStore])

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
                bookmark: job.bookmark
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