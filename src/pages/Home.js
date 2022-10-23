import React from "react"
import Overview from "../components/introduction/Overview"
import Background from "../components/layout/Background"
import HighlightJob from "../components/introduction/HighlightJob"

const Home = () => {
    return (
        <React.Fragment>
            <Background />
            <Overview />
            <HighlightJob />
        </React.Fragment>
    )
}

export default Home