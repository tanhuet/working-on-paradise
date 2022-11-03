import classes from "./CvDetail.module.scss"
import locationImg from "../../asses/img-location.png"
import { Fragment, useState } from "react"

const CvDetail = () => {

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
            {!isEdit && <p>CV's name</p>}
            {isEdit && <input type="text" />}
            <div className={classes.cv}>
                <div className={classes['info1']}>
                    <div className={classes.first}>
                        <div className={classes.img}>
                            <img src={locationImg} alt="..."/>
                        </div>
                        <p>Name</p>
                        <p>Job</p>
                    </div>
                    <div className={classes.second}>
                        <h2>Experience</h2>

                    </div>
                </div>
                <div className={classes['info2']}>

                </div>
            </div>
        </form>
        </Fragment>
    )
}

export default CvDetail