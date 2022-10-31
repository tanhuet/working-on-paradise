import classes from "./HighlightJob.module.scss"
import { Link } from "react-router-dom"
import FollowIcon from "../icon/follow"

const HighlightJob = (props) => {
    return (    
            <div className={`${classes.card} ${props.class}`}>
                <div className={classes.company}>
                    <Link>
                        <div className={classes['company-info']}>
                            <div className={classes.logo}>
                                <img src={props.logo} alt=".." />
                            </div>
                            <div className={classes.info}>
                                <h3>{props.category}</h3>
                                <p>{props.companyName} - {props.location}</p>
                            </div>
                        </div>
                    </Link>
                    <div className={classes.btn}>
                        <button>
                            <FollowIcon />
                        </button>
                    </div>
                </div>
                <div className={classes.jd}>
                    <ul>
                        <li>{props.experience}, {props.jobType}</li>
                        <li>${props.minSalary} - ${props.maxSalary}</li>
                    </ul>
                </div>
                <div className={classes.skill}>
                    <ul className={classes['skill-items']}>
                        {props.skills.map(item => (
                            <div key={item} className = {classes.item}>
                                {item}
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
    )
}

export default HighlightJob