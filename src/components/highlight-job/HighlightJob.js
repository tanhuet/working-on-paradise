import classes from "./HighlightJob.module.scss"
import { useSelector } from "react-redux"
import config from "../../config"
import axios from "axios"
import { useNavigate } from "react-router-dom"
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
        if (str.length > 32) {
            newStr = str.slice(0, 29) + "..."
            return newStr
        } 
        return str
    }

    const category = scaleCategory(props.category)
    const companyNameAndLocation = scaleCompanyNameAndLocation(`${props.companyName}-${props.location}`)
    const experienceAndJobType = scaleExperienceAndJobType(`${props.experience},${props.jobType}`)

    const navigate = useNavigate()

    const userStore = useSelector((state) => state.auth.login?.currentUser);

    const followHanlder = async () => {
        if (userStore) {
            try {
                const resFlag = await axios.get(`${config.api.url}/job/${props.id}/marked`, { headers: { Authorization: `Bearer ${userStore.accessToken}`}} )
                if (!resFlag.data) {
                    await axios.post(`${config.api.url}/job/${props.id}/mark`, {} ,
                    { headers: { Authorization: `Bearer ${userStore.accessToken}` }})
                    navigate('/favourite')
                } else {
                    await axios.delete(`${config.api.url}/job/${props.id}/unmark` ,
                    { headers: { Authorization: `Bearer ${userStore.accessToken}` }})
                    window.location.reload(false)
                }
            } catch (error) {
                console.error(error);
            }
        }
    }


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
                        <button onClick={followHanlder}>
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