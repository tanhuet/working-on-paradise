import classes from "./JobPosting.module.scss"

import JobPOstingImg from "../../../../asses/job-posting.png"
import { Link } from "react-router-dom"

const JobPosting = () => {
    return (
        <div className={classes.main}>
            <div className={classes.post}>
                <h1><span>1500+</span> World Potential <br/>
                Candidate <span>Posted</span> <br/>
                 Their CV.</h1>
                <Link className={classes.btn}>
                    Post a Job
                </Link>
            </div>
            <div className={classes.img}>
                <img src={JobPOstingImg} alt=".."/>
            </div>
        </div>
    )
}

export default JobPosting