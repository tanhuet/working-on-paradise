import { Link } from "react-router-dom"
import classes from "./Job.module.scss"

const Job = (props) => {
    return (
        <Link>
            <div className={classes.card}>
            <div className={classes.makeup1}>
                <div className={classes.recomment}>
                        <h3>Recommened Job</h3>
                    </div>
            </div>
            <div className = {classes.detail}>
            <div className={classes.company}>
                    <div className={classes.logo}>
                        <img src={props.logo} alt=".." />
                    </div>
                    <div className={classes.info}>
                        <h3>{props.companyName}</h3>
                    </div>
                </div>
                <hr></hr>
                <div className={classes.company1}>
                    <div className={classes.info1}>
                        <h3>{props.recruitment}</h3>
                        <p>{props.location}</p>
                    </div>
                </div>
                <hr></hr>
                <div className={classes.company1}>
                    <div className={classes.info1}>
                        <h3>{props.recruitment1}</h3>
                        <p>{props.location1}</p>
                    </div>
                </div>
            </div>     
            </div>
        </Link>
    )
}

export default Job