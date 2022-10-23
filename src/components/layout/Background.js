import { Fragment } from "react"
import classes from "./Background.module.scss"

const Background = () => {
    return (
        <Fragment>
            <div className={`${classes.background} ${classes["background-first"]}`} />
            <div className={`${classes.background} ${classes["background-second"]}`} />
            <div className={`${classes.background} ${classes["background-third"]}`} />
            <div className={`${classes.background} ${classes["background-fourth"]}`} />
        </Fragment>
    )
}

export default Background