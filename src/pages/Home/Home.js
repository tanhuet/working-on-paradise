import React from "react"
import Overview from "./Components/Overview"
import HighlightJob from "./Components/HighlightJob"
import HomeBackground from "../../components/Layout/HomeBackground"
import classes from "./Home.module.scss"

const Home = () => {
    return (
        <div className={classes.warp}>
            <HomeBackground />
            <Overview />
            <HighlightJob />
        </div>
    )
}

export default Home