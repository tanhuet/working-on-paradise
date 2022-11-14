import Wrap from "../../../components//UI/Wrap"
import classes from "./FavouriteJob.module.scss"
import FilterImg from "../../../components/icon/filter"
import { Fragment, useCallback, useEffect, useState } from "react"
import FilterBar from "../../../components/filterbar/FilterBar"
import img from "../../../asses/category-job.png"
import JobCard from "../../../components/job-card/JobCard"

const FavouriteJob = (props) => {

    const company = []

    return (
        <Fragment>
            <div className={classes.favourite}>
                <Wrap className={classes.wrap}>
                    <div className={classes.title}>
                        <h1>
                            Favourite Job
                        </h1>
                        <p>Examine the list of past jobs you have saved. To avoid missing out on a professional opportunity, apply straightaway.</p>
                    </div>
                    <div className={classes['filter-bar']}>
                        <FilterBar filter = {company} />
                    </div>
                    <div className={classes.list}>
                    {props.jobs.map((job) => (
                        <JobCard
                        key={job.id}
                        logo={job.logo}
                        companyName={job.companyName}
                        location={job.location}
                        category={job.category}
                        jobType={job.jobType}
                        skills={job.skills}
                        experience={job.experience}
                        minSalary={job.salary}
                        maxSalary={job.salary}
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