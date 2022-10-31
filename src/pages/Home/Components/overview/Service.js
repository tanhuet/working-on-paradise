
import classes from "./Service.module.scss"
import supporter from "../../../../asses/supporter.png"
import CareerImage from "../../../../asses/img-career.png"
import InteractImage from "../../../../asses/img-interact.png"
import LocationImage from "../../../../asses/img-location.png"

const Service = () => {
    return (
        <div className={classes.service}>
            <div className={classes["service-img"]}>
                <img src={supporter} alt="supporter" />
            </div>
            <div className={classes["service-option"]}>
                <div className={classes.text}>
                    <h2>We Are Always <span>On Hand</span> to</h2>
                    <h2><span>Support</span> You!</h2>
                </div>
                <div className={classes.main}>
                    <ul>
                        <li>
                            <img src={CareerImage} alt=".." className={classes.career} />
                            <p>Enhance your career.</p>
                        </li>
                        <li>
                            <img src={InteractImage} alt=".." className={classes.interact} />
                            <p>Interract with others.</p>
                        </li>
                        <li>
                            <img src={LocationImage} alt=".." className={classes.location} />
                            <p>Get work with a great career.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Service