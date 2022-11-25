import classes from "./HighlightPost.module.scss"
import { Link } from "react-router-dom"
import axios from "axios";
import config from "../../../config";
import { useSelector } from "react-redux";

import editImg from "../../../asses/edit_img.png"
import deleteImg from "../../../asses/delete_img.png"

const HighlightPost = (props) => {
    const userStore = useSelector((state) => state.auth.login?.currentUser);

    const deletePost = (event) => {
        axios.delete(
            `${config.api.url}/job/${props.id}`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } }
        )
    };

    return (
        <>
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
                                } - {props.experience} - {props.salary} - {props.candidates}
                                </p>
                            </div>
                        </div>
                    </Link>
                    <div>
                        <Link>
                            <img className={classes.edit} src={editImg} alt="" />
                        </Link>
                        <button className={classes.delete} onClick={deletePost}>
                            <img src={deleteImg} alt="" />
                        </button>
                    </div>
                </div>
                <div className={classes.skill}>
                    <ul className={classes['skill-items']}>
                        {props.skills.map(item => (
                            <div key={item} className={classes.item}>
                                {item}
                            </div>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default HighlightPost