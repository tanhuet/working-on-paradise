import { Link } from "react-router-dom"
import Card from "../UI/Card"
import classes from "./JobCard.module.scss"
import FollowIcon from "../icon/follow"

const JobCard = (props) => {
    return (
        <Card>
            <div className={classes.job}> 
                <Link>
                    <div className={classes.info}>
                        <div className={classes.logo}>
                            <img src={props.logo} alt=".." />
                        </div>
                        <div className={classes.detail}>
                            <div>{props.category}</div>
                            <div className={classes.introduction}>
                                {props.companyName} - {props.location} - {props.experience} {props.category} - {props.jobType} - ${props.salary}
                            </div>
                        </div>
                    </div>
                </Link>
                <div className={classes.btn}>
                    <button>
                        <FollowIcon />
                    </button>
                </div>
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
        </Card>
    )
}

export default JobCard