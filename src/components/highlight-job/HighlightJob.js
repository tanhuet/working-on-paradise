import classes from "./HighlightJob.module.scss"
import { Link } from "react-router-dom"

const HighlightJob = (props) => {
    return (    
            <div className={`${classes.card} ${props.class}`}>
                <Link>
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
                </Link>
                <div className={classes.button}>
                    <Link className={classes.btn}>
                        Apply now
                    </Link>
                </div>
            </div>
    )
}

export default HighlightJob