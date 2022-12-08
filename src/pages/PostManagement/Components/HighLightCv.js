import classes from "./HighLightCv.module.scss"
import { Link } from "react-router-dom"

const HighlightCv = (props) => {
    return (    
            <div className={`${classes.card} ${props.class}`}>
                <div className={classes.company}>
                    <Link to={"/account/" + props.id}>
                        <div className={classes['company-info']}>
                            <div className={classes.logo}>
                                <img src={props.avatar} alt=".." />
                            </div>
                            <div className={classes.info}>
                                <h3>{props.userName}</h3>
                                <p>{props.experience}</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={classes.jd}>
                    <ul>
                        <li>Age: {props.age}</li>
                        <li>Desired Salary: ${props.salary}</li>
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

export default HighlightCv