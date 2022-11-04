import classes from "./HighlightJob.module.scss"
import {Link} from "react-router-dom"

const HighlightPost = (props) => {
    return (    
        <div className={`${classes.card} ${props.class}`}>
            <div className={classes.company}>
                <Link>
                    <div className={classes['company-info']}>
                        <div className={classes.logo}>
                            <img src={props.logo} alt=".." />
                        </div>
                        <div className={classes.info}>
                            <h3>{props.jobName}</h3>
                            <p>{props.company} - {props.location} - {props.typeOfJob
                            } - {props.typeOfWorkplace} - {props.salary} - {props.candidates}
                            </p>
                        </div>
                    </div>
                </Link>

                <div></div>
                <div></div>
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

export default HighlightPost