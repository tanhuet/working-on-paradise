import { Fragment, useEffect, useState } from "react"
// import Card from "../../components/UI/Card"
import CategoryTop from "./Components/CategoryTop"
import JobList from "./Components/JobList"
import { useSelector } from "react-redux"
import config from "../../config"
import axios from "axios"
// import locationImg from "../../asses/img-location.png"

const Category = () => {

    //get API
    const userStore = useSelector((state) => state.auth.login?.currentUser);
    const [entireJobs, setEntireJobs] = useState();
    const [recomendedJobs, setRecomendJobs] = useState(null);

    useEffect(() => {
        axios.get(`${config.api.url}/job/all`)
            .then((res) => {
                setEntireJobs(res.data);
            })
            .catch(err => {
                console.log(err)
            });
        if (userStore) {
            if (userStore.role === 'JobSeeker')
            axios.get(`${config.api.url}/job/recommend/3`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
                .then((res) => {
                    setRecomendJobs(res.data);
                })
                .catch(err => {
                    console.log(err)
                });
        }
    }, [userStore])

    // convert api to object
    let jobs = [];
    let topJobs = [];
    if (entireJobs) {
        jobs = entireJobs.map((job) => {
            let tags = job.tags.replace(" ", '').split(",")
            tags = tags.slice(0, 7)
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
                skills: tags,
            }
        })
        
        if (jobs) {
            topJobs = jobs.slice(0, 3)
            topJobs = topJobs.map((job) => {
                // let tags = job.tags.replace(" ", '').split(",")
                let tags = job.skills.slice(0, 2)
                return {
                    id: job.id,
                    logo: job.logo,
                    companyName: job.companyName,
                    location: job.location,
                    category: job.category,
                    jobType: job.jobType,
                    experience: job.experience,
                    minSalary: job.minSalary,
                    maxSalary: job.maxSalary,
                    skills: tags,
                }
            })
        }
    }
    let rJ = []
    if (recomendedJobs !== null) {
        console.log(recomendedJobs)
        rJ = recomendedJobs.map((job) => {
            return {
                id: job.id,
                companyName: job.authorName,
                logo: job.authorAvatar,
                jobs: [{
                    id: "1",
                    category: job.title,
                    jobType: job.typeOfWorking,
                    location: job.authorAddress,
                }, {
                    id: "2",
                    category: job.title,
                    jobType: job.typeOfWorking,
                    location: job.authorAddress,
            }]
            }
        })
        // setRecomendJobs(rJ)
    }

    return (
        <Fragment>
            <CategoryTop jobs = {topJobs} entireJobs = {jobs} />
            <JobList jobs ={jobs} recomendedJobs={rJ} />
        </Fragment>
    )
}

export default Category