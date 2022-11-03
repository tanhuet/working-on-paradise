import classes from "./CvDetail.module.scss"

const CvDetail = () => {

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(2)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.header}>
                {/* <button>Save</button> */}
                <button>Edit</button>
            </div>
        </form>
    )
}

export default CvDetail