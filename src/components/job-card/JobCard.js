import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import config from "../../config"
import axios from "axios"

import Card from "../UI/Card"
import classes from "./JobCard.module.scss"
import FollowIcon from "../icon/follow"

const JobCard = (props) => {

    const userStore = useSelector((state) => state.auth.login?.currentUser);

    const followHanlder = async () => {
        if (userStore) {
            try {
                const resFlag = await axios.get(`${config.api.url}/job/${props.id}/marked`, { headers: { Authorization: `Bearer ${userStore.accessToken}`}} )
                console.log(resFlag.data)
                let data
                if (!resFlag.data) {
                    data = await axios.post(`${config.api.url}/job/${props.id}/mark`, {} ,
                    { headers: { Authorization: `Bearer ${userStore.accessToken}` }})
                } else {
                    data = await axios.delete(`${config.api.url}/job/${props.id}/unmark` ,
                    { headers: { Authorization: `Bearer ${userStore.accessToken}` }})
                }
                console.log(data.data)
            } catch (error) {
                console.error(error);
            }
        }
    }


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
                    <button onClick={followHanlder}>
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