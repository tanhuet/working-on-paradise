import Wrap from "../../../components//UI/Wrap"
import classes from "./FavouriteJob.module.scss"
import { Fragment, useEffect, useState } from "react"
import axios from "axios"
import config from "../../../config"

import FilterBar from "../../../components/filterbar/FilterBar"
import JobCard from "../../../components/job-card/JobCard"

const FavouriteJob = (props) => {

    const [a, setA] = useState('') 
    const [suggestion, setSuggestion] = useState([])

    useEffect(() => {
        let timer = setTimeout(async () => {
            if (a.length > 0) {
                const res = await axios.get(`${config.api.url}/job/suggest-keyword/5/${a.replace('/', '%2F')}`)
                setSuggestion(res.data)
            } else {
                setSuggestion([])
            }
        }, 500);
        return () => {
            clearTimeout(timer);
        };
        
    }, [a])

    const changeSuggestionHandler = (suggestion) => {
        setA(suggestion)
    }

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
                    <FilterBar filter = {suggestion} display = "none" onChange={changeSuggestionHandler} page={"favourite"}/>
                    </div>
                    <div className={classes.list}>
                    {props.jobs.map((job) => (
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
                        bookmark={job.bookmark}
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