import Wrap from "../UI/Wrap"
import classes from "./FavouriteJob.module.scss"
import FilterImg from "../icon/filter"
import { useCallback, useEffect, useState } from "react"
import JobCard from "./JobCard"
import { useLocation, useNavigate } from 'react-router-dom';
import CategorySuggestion from "./CategorySuggestion"

const FavouriteJob = (props) => {

    //categoryList
    const categoryList = props.jobs.map(item => {
        const id = item.id
        const category = item.category
        return {id, category}
    })

    const filterCategory = (categoryList, condition) => {
        console.log(condition)
        if (!condition) return categoryList
        return categoryList.filter((category) => {
            return category.category.includes(condition)
        })
    }

    //Filter Function
    const filterJob = (jobList, condition) => {
        if (!condition) return jobList
        return jobList.filter((job) => {
            return job.category.includes(condition)
        })
    } 

    const filterTypeJob = (jobList, condition) => {
        if (!condition) return jobList
        return jobList.filter(job => {
            return job.type.includes(condition)
        })
    }
    
    //State
    const[jobs, setJobs] = useState(props.jobs) //filter Jobs
    const [category, setCategory] = useState('')    //filterCategory
    const [jobType, setJobType] = useState('')  //filter job type
    const [categorySuggestion, setCategorySuggestion] = useState(categoryList)  //filter catogory suggestion


    const [isActiveFilterBar, setIsActiveFilterBar] = useState(false)   // turn on and turn off filter table

    //dependencies
    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const filter = queryParams.get('filter')
    const getFilterTypeJob =  queryParams.get('filter-job')

    //handler function
    const displayHandler = () => {
        setIsActiveFilterBar(prev => {
            return !prev
        })
    }

    const categoryChangeHandler = async(e) => {
        setCategory(e.target.value)
    }
    useEffect(() => {
        let filteredCategorySuggestion = filterCategory(props.jobs.map(item => {
            const id = item.id
            const category = item.category
            return {id, category}
        }), category)
        setCategorySuggestion(filteredCategorySuggestion)
      }, [category, props.jobs]);

    const jobTypeChangeHandler = (e) => {
        setJobType(e.target.value)
    }

    //Filter function
    const filterFunc = useCallback((jobs) => {
        let filteredJob = filterJob(jobs, filter)
        filteredJob = filterTypeJob(filteredJob, getFilterTypeJob)
        return filteredJob
    }, [filter, getFilterTypeJob])

    //Submit form
    const submitHandler = (e) => {
        e.preventDefault();
        const filteredJob = filterFunc(props.jobs)
        setJobs(filteredJob)
        navigate(`/favourite?filter=${category}&filter-job=${jobType}`)
    }


    //useEffect to reload pages
    useEffect(() => {
        const filteredJob = filterFunc(props.jobs)
        setJobs(filteredJob)
    }, [setJobs, filterFunc, props.jobs])

    const jobItem = (
        <ul className={classes['job-items']}>
            {jobs.map(item => (
                <JobCard
                    key = {item.id}
                    logo= {item.logo}
                    category= {item.category}
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
                </div>
                <div className={classes['filter-search']}>
                    <input type="text" />
                </div>
            </div>
            {isActiveFilterBar && <div className={classes['filter-bar']}>
                <form onSubmit = {submitHandler}>
                    <div className={classes['filter-bar-left']}>
                        <div className={classes.category}>
                            <label htmlFor="category">Category</label>
                            <input type="text" onChange={categoryChangeHandler} value={category} />
                            <div className={classes.suggestion}>
                                <ul>
                                {categorySuggestion.map(item => (
                                    <CategorySuggestion
                                        key = {item.id}
                                        category= {item.category}
                                    />
                                ))}        
                                </ul>
                            </div>
                        </div>
                        <div className={classes['job-type']}>
                            <label htmlFor="type">Job Type</label>
                            <input type="text" onChange={jobTypeChangeHandler} value={jobType}/>
                        </div>
                    </div>
                    <button>Apply</button>
                </form>
            </div>}
            <div className={classes["job-list"]}>
                {jobItem}
            </div>
        </Wrap>
    )
}

export default FavouriteJob