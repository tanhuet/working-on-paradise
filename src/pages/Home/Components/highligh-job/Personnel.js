import classes from "./Personnel.module.scss"
import PersonnelImg from "../../../../asses/personel-img.png"
import { Link } from "react-router-dom"

const Personnel = () => {
    return (
        <div className={classes.personnel}>
            <div className={classes.img}>
                <img src={PersonnelImg} alt=".." />
            </div>
            <div className={classes.content}>
                <div className={classes.text}>
                    <h1>
                        Over <span>10,000+</span><br/>
                        Talented People<br/>
                        <span>Registered</span> In<br/>
                        Our Website.<br/>
                    </h1>
                </div>
                <div className={classes.button}>
                    <Link className={classes.btn}>
                        Explore Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Personnel