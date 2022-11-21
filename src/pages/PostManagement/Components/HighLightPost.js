import classes from "./HighlightPost.module.scss"
import {Link} from "react-router-dom"
import editImg from "../../../asses/edit_img.png"
import deleteImg from "../../../asses/delete_img.png"

const HighlightPost = (props) => {
    return (    
        <div className={classes.card}>
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