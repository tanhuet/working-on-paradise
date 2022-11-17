import Wrap from "../../../components//UI/Wrap"
import classes from "./FavouriteJob.module.scss"
import { Fragment, useEffect, useState } from "react"
import FilterBar from "../../../components/filterbar/FilterBar"
import JobCard from "../../../components/job-card/JobCard"
import { useLocation } from "react-router-dom"

const FavouriteJob = (props) => {

    const [filteredJobs, setFilteredJobs] = useState(props.jobs)

    //Filter Function
    const filterJob = (jobList, condition) => {
        if (!condition) return jobList
        let jobs = jobList.filter((job) => {
            return job.category.includes(condition)
        })
        jobs = jobs.concat(jobList.filter((job) => {
            return job.companyName.includes(condition)
        }))  
        jobs = jobs.concat(jobList.filter((job) => {
            return job.jobType.includes(condition)
        }))
        jobs = jobs.concat(jobList.filter((job) => {
            return job.skills[0].includes(condition)
        }))
        return jobs
    }

      // dependency
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const filter = queryParams.get('filter')

    useEffect(() => {
        let filteredJobs = filterJob(props.jobs, filter)
        setFilteredJobs(filteredJobs)
    }, [filter, props.jobs])

    return (
        <Fragment>
            <div className={classes.favourite}>
                <Wrap className={classes.wrap}>
                    <div className={classes.title}>
                        <h1>
                            Favourite Job
                        </h1>
                        <p>Examine the list of past jobs you have saved. To avoid missing out on a professional <br/> opportunity, apply straightaway.</p>
                    </div>
                    <div className={classes['filter-bar']}>
                        <FilterBar filter = {[]} />
                    </div>
                    <div className={classes.list}>
                    {filteredJobs.map((job) => (
                        <JobCard
                        key={job.id}
                        id = {job.id}
                        logo={job.logo}
                        companyName={job.companyName}
                        location={job.location}
                        category={job.category}
                        jobType={job.jobType}
                        skills={job.skills}
                        experience={job.experience}
                        salary={job.salary}
                        />
                    ))}
                    </div>
                </Wrap>
            </div>
            <div className={classes.recommened}>

            </div>
        </Fragment>
    )
}

export default FavouriteJob