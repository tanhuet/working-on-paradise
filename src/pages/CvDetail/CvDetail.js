import classes from "./CvDetail.module.scss"
import locationImg from "../../asses/img-location.png"
import { Fragment, useState } from "react"

const CvDetail = (props) => {

    const CV = props.cv

    const [isEdit, setIsEdit] = useState(false)

    const editModeHandler = () => {
        setIsEdit(true)
    }

    const saveHandler = (e) => {
        e.preventDefault()
        
    }

    return (
        <Fragment>
        <button onClick={editModeHandler}>Edit</button>
        <form className={classes.form} onSubmit={saveHandler}>
            <div className={classes.header}>
                {/* <button>Save</button> */}
                <button>Save</button>
            </div>
            <div className={classes.name}>
                <div>
                    {!isEdit && <p>{CV.name}</p>}
                    {isEdit && <input type="text" />}
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
                                {!isEdit && <p>{CV.nameUser}</p>}
                                {isEdit && <input type="text" />}
                            </div>
                        </div>
                    </div>
                    <div className={classes.experience}>      
                        <h2>
                            Experience
                        </h2>
                        <div className={classes['exprience-detail']}>
                            {CV.experience.map(item => (
                                <div>
                                    {!isEdit && <p>{item.startDate} - {item.endDate}</p>}
                                    {isEdit && <input type="text" />}
                                    {!isEdit && <h3>{item.position} - {item.company}</h3>}
                                    {isEdit && <input type="text" />}
                                    {!isEdit && <p>{item.description}</p>}
                                    {isEdit && <input type="text" />}
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
        </form>
        </Fragment>
    )
}

export default CvDetail