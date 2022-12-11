import React from "react"
import Feature from "./Overview/Feature"
import Highlight from "./Overview/Highlight"
import Service from "./Overview/Service"

const Overview = () => {
    return (
        <React.Fragment>
            <Highlight />
            <Feature />
            <Service />
        </React.Fragment>
    )
}

export default Overview