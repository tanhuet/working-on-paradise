import Wrap from "../UI/Wrap"
import classes from "./FavouriteJob.module.scss"
import FilterImg from "../icon/filter"
import { useEffect, useState } from "react"
import JobCard from "./JobCard"
import { useLocation, useNavigate } from 'react-router-dom';

const FavouriteJob = (props) => {

    //Filter Function

    const filterJob = (jobList, condition) => {
        if (!condition) return jobList
        return jobList.filter((job) => {
            return job.companyName.includes(condition)
        })
    }
    
    const filterTypeJob = (jobList, condition) => {
        if (!condition) return jobList
        return jobList.filter(job => {
            return job.type.includes(condition)
        })
    }
    
    //State
    const [category, setCategory] = useState('')
    const[jobs, setJobs] = useState(props.jobs)


    //dependencies
    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const filter = queryParams.get('filter')
    const getFilterTypeJob =  queryParams.get('filter-job')
    console.log(getFilterTypeJob)

    //handler function
    const displayHandler = () => {
        // console.log("alo")
    }

    const categoryChangeHandler = (e) => {
        setCategory(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let filteredJob = filterJob(props.jobs, filter)
        filteredJob = filterTypeJob(filterJob, getFilterTypeJob)
        setJobs(filteredJob)
        navigate(`/favourite?filter=${category}`)
    }


    //useEffect to reload pages
    useEffect(() => {
        let filteredJob = filterJob(props.jobs, filter)
        filteredJob = filterTypeJob(filteredJob, getFilterTypeJob)
        setJobs(filteredJob)
    }, [props.jobs, filter, getFilterTypeJob])

    const jobItem = (
        <ul className={classes['job-items']}>
            {jobs.map(item => (
                <JobCard
                    key = {item.id}
                    logo= {item.logo}
                    companyName= {item.companyName}
                    type= {item.type}
                />
            ))}
        </ul>
    )

    return (
        <Wrap className={classes.wrap}>
            <div className={classes.title}>
                <h1>Favourite Job</h1>
                <p>Examine the list of past jobs you have saved. To avoid missing out on a professional opportunity, apply straightaway.</p>
            </div>
            <div className={classes.filter}>
                <div className={classes['filter-button']}>
                    <button onClick={displayHandler}>
                        <FilterImg />
                    </button>
                    
                    <div className={classes['filter-bar']}>
                        <form onSubmit = {submitHandler}>
                            <div className={classes['filter-bar-left']}>
                                <div>
                                    <label htmlFor="category">Category</label>
                                    <input type="text" onChange={categoryChangeHandler} />
                                </div>
                            </div>
                            <button>Apply</button>
                        </form>
                    </div>
                    
                </div>
                <div className={classes['filter-search']}>
                    <input type="text" />
                </div>
            </div>
            <div className={classes["job-list"]}>
                {jobItem}
            </div>
        </Wrap>
    )
}

export default FavouriteJob