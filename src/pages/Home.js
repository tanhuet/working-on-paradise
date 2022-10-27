import React from "react"
import Overview from "../components/introduction/Overview"
import HighlightJob from "../components/introduction/HighlightJob"
import HomeBackground from "../components/layout/HomeBackground"

const Home = () => {
    return (
        <React.Fragment>
            <HomeBackground />
            <Overview />
            <HighlightJob />
        </React.Fragment>
    )
}

export default Home