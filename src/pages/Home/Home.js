import React from "react"
import Overview from "./Components/Overview"
import HighlightJob from "./Components/HighlightJob"
import HomeBackground from "../../components/layout/HomeBackground"

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