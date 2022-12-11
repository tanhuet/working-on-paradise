import { Fragment, useState } from "react"
import img from "../../../asses/category-job.png"
import { useEffect } from "react"
import axios from "axios"
import config from "../../../config"

import classes from "./CategoryTop.module.scss"
import FilterBar from "../../../components/FilterBar/FilterBar"
import HighlightJob from "../../../components/HighlightJob/HighlightJob"

const CategoryTop = (props) => {

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
            <div className={classes.img}>
                <img src={img} className ={classes['img-category']} alt="category"/>
            </div>
            <div className={classes['filter-bar']}>
                <FilterBar filter = {suggestion} onFilter = {props.onFilter} onChange={changeSuggestionHandler} page={"category"}/>
            </div>
            <div className={classes['highligh-job']}>
                <p className={classes.title}>Exploring Amazing Jobs</p>
                <div className={classes.list}>
                    {props.jobs.map(job => (
                        <HighlightJob 
                            key = {job.id}
                            id = {job.id}
                            logo = {job.logo}
                            companyName = {job.companyName}
                            location = {job.location}
                            category = {job.category}
                            jobType = {job.jobType}
                            skills = {job.skills}
                            experience = {job.experience}
                            salary = {job.salary}
                            bookmark={job.bookmark}
                        />
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default CategoryTop