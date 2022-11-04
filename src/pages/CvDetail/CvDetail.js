import classes from "./CvDetail.module.scss"
import locationImg from "../../asses/img-location.png"
import { Fragment} from "react"
// import { Link } from "react-router-dom"

const CvDetail = (props) => {

    const CV = props.cv

    const editHandler = () => {
        props.onEdit(true)
    }

    return (
        <Fragment>
        <div className={classes.form}>
            <div className={classes.header}>
                <button onClick={editHandler}>Edit</button>
            </div>
            <div className={classes.name}>
                <div>
                    <p>{CV.name}</p>
                </div>
            </div>
            <div className={classes.cv}>
                <div className={classes['info1']}>
                    <div className={classes.first}>
                        <div className={classes.img}>
                            <img src={locationImg} alt="..."/>
                        </div>
                        <p>Name</p>
                        <div className={classes['name-user']}>
                            <div>
                                <p>{CV.nameUser}</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.experience}>      
                        <h2>
                            Experience
                        </h2>
                        <div className={classes['exprience-detail']}>
                            {CV.experience.map(item => (
                                <div className={classes['item']} key={item.id}>
                                    <p>{item.startDate} - {item.endDate}</p>
                                    <h3>{item.position} - {item.company}</h3>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={classes['info2']}>
                    <div className={classes['own-info']}>
                        <label>Date of birth:</label>
                        <p>xx/xx/xxxx</p>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default CvDetail