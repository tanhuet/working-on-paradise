import classes from "./HighlightJob.module.scss"
import { Link } from "react-router-dom"
import FollowIcon from "../icon/follow"

const HighlightJob = (props) => {

    // scale function
    const scaleCategory = (str) => {
        let newStr;
        if (str.length > 16) {
            newStr = str.slice(0, 13) + "..."
            return newStr
        } 
        return str
    }

    const scaleCompanyNameAndLocation = (str) => {
        // let newStr;
        // if (str.length > 17) {
        //     newStr = str.slice(0, 15) + "..."
        //     return newStr
        // } 
        return str
    }

    const scaleExperienceAndJobType = (str) => {
        let newStr;
        if (str.length > 34) {
            newStr = str.slice(0, 31) + "..."
            return newStr
        } 
        return str
    }

    const category = scaleCategory(props.category)
    const companyNameAndLocation = scaleCompanyNameAndLocation(`${props.companyName}-${props.location}`)
    const experienceAndJobType = scaleExperienceAndJobType(`${props.experience},${props.jobType}`)


    return (    
            <div className={`${classes.card} ${props.class}`}>
                <div className={classes.company}>
                    <Link>
                        <div className={classes['company-info']}>
                            <div className={classes.logo}>
                                <img src={props.logo} alt=".." />
                            </div>
                            <div className={classes.info}>
                                <h3>{category}</h3>
                                <p>{companyNameAndLocation}</p>
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
                        <li>{experienceAndJobType}</li>
                        <li>${props.salary}</li>
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