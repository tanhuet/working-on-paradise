// import { Fragment } from "react"
import { NavLink } from "react-router-dom";
import classes from "./Feature.module.scss"

const Feature = () => {
    return (
        <div className={classes.feature}>
            <div className={classes.param}>
                <p>How it works?</p>
                <h1>FOLLOW EASY 4 STEPS</h1>
            </div>
            <div className={classes.step}>
                <div className ={classes.card}>
                    <div className={`${classes.header} ${classes.create}`}></div>
                    <div className={classes.info}>
                        <NavLink to='/signup'>Create <br />account</NavLink>
                        <p>First, create your</p>
                        <p>account</p>
                    </div>
                    <div className={`${classes.footer} ${classes.create}`}></div>
                </div>
                <div className ={classes.card}>
                    <div className={`${classes.header} ${classes.search}`}></div>
                    <div className={classes.info}>
                        <NavLink to='/addpost'>Post Job</NavLink>
                        <p>Secound, post</p>
                        <p>your job</p>
                    </div>
                    <div className={`${classes.footer} ${classes.search}`}></div>
                </div>
                <div className ={classes.card}>
                    <div className={`${classes.header} ${classes.upload}`}></div>
                    <div className={classes.info}>
                        <NavLink to='/category'>CV/Resume</NavLink>
                        <p>Third, look for</p>
                        <p>potential CVs</p>
                    </div>
                    <div className={`${classes.footer} ${classes.upload}`}></div>
                </div>
                <div className ={classes.card}>
                    <div className={`${classes.header} ${classes.apply}`}></div>
                    <div className={classes.info}>
                        <NavLink to='/category'>Connect</NavLink>
                        <p>Finally, connect</p>
                        <p>to your</p>
                        <p>candidates</p>
                    </div>
                    <div className={`${classes.footer} ${classes.apply}`}></div>
                </div>
            </div>
        </div>
    )
}

export default Feature