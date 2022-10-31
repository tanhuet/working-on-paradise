import { Link } from "react-router-dom"
import classes from "./Job.module.scss"

const Job = (props) => {
    return (
        <Link>
            <div className={classes.card}>
                <div className={classes.company}>
                    <div className={classes.logo}>
                        <img src={props.logo} alt=".." />
                    </div>
                    <div className={classes.info}>
                        <h3>{props.companyName}</h3>
                        <p>{props.location}</p>
                    </div>
                </div>
                <div className={classes.job}>
                    <ul>
                        <li className={classes.name}>{props.jobName}</li>
                        <li>{props.type}</li>
                        <li>{props.submittedDate}</li>
                    </ul>
                </div>
                <div className={classes.makeup}>

                </div>
            </div>
        </Link>
    )
}

export default Job