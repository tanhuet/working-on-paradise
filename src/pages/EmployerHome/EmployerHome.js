import React from "react"
import Overview from "./Components/Overview"
import HighlightCv from "./Components/HighlightCv"
import HomeBackground from "../../components/Layout/HomeBackground"
import classes from "./EmployerHome.module.scss"


const EmployerHome = () => {
    return (
        <div className={classes.warp}>
        <HomeBackground />
        <Overview />
        <HighlightCv />
    </div>
    )
}

export default EmployerHome