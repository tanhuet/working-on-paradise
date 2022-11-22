import { Fragment } from "react"
import classes from "./EducationEdit.module.scss"
import Backdrop from "../../../components/back-drop/Backdrop"

const EducationEdit = (props) => {
    return (
        <Fragment>
            <Backdrop onClose={props.onCloseEditingEducation}/>
            <div className={classes.form}>
                <p>Ví dụ nó sẽ hiện ra</p>
                {/* Code here ... */}
                {/* Lấy props từ Account để xử lí */}
            </div>
        </Fragment>
    )
}

export default EducationEdit