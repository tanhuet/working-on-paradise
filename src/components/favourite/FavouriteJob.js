import Wrap from "../UI/Wrap"
import classes from "./FavouriteJob.module.scss"

const FavouriteJob = () => {
    return (
        <Wrap className={classes.wrap}>
            <div className={classes.title}>
                <h1>Favourite Job</h1>
                <p>Examine the list of past jobs you have saved. To avoid missing out on a professional opportunity, apply straightaway.</p>
            </div>
            <div className={classes.filter}>

            </div>
            <div className={classes["job-list"]}>
                {/* <Job /> */}
            </div>
        </Wrap>
    )
}

export default FavouriteJob