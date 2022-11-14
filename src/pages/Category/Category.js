import { Fragment, useEffect, useState } from "react"
// import Card from "../../components/UI/Card"
import CategoryTop from "./Components/CategoryTop"
import JobList from "./Components/JobList"
import { useSelector } from "react-redux"
import config from "../../config"
import axios from "axios"
import locationImg from "../../asses/img-location.png"

const DUMYRECOMENDED = [
    {
        id: '1',
        companyName: 'Google Inc',
        logo: locationImg,
        jobs: [{
            id: '1',
            category: 'UI/UX Desgin',
            jobType: 'Part Time',
            location: 'California',
        }, {
            id: '2',
            category: 'UI/UX Desgin',
            jobType: 'Part Time',
            location: 'California',
        }]
    }
]

const Category = () => {

    //get API
    const userStore = useSelector((state) => state.auth.login?.currentUser);
    const [entireJobs, setEntireJobs] = useState();
    useEffect(() => {
        if (userStore.role === "JobSeeker") {
            axios.get(`${config.api.url}/job/all`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
                .then((res) => {
                    setEntireJobs(res.data);
                })
                .catch(err => {
                    console.log(err)
                });
        }
    }, [userStore])

    // convert api to object
    let jobs = [];
    let topJobs = []
    if (entireJobs) {
        jobs = entireJobs.map((job) => {
            return {
                id: job.id,
                logo: job.authorAvatar,
                companyName: job.authorName,
                location: job.authorAddress,
                category: job.title,
                jobType: job.typeOfWorking,
                experience: job.exp,
                minSalary: job.salary,
                maxSalary: job.salary,
                skills: ['cloud', 'react'],
            }
        })
        topJobs = [
            jobs[0], jobs[1], jobs[2]
        ]
    }

    return (
        <Fragment>
            <CategoryTop jobs = {topJobs} entireJobs = {jobs} />
            <JobList jobs ={jobs} recomendedJobs={DUMYRECOMENDED} />
        </Fragment>
    )
}

export default Category