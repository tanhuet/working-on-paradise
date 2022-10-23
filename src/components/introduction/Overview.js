import React from "react"
import Feature from "./overview/Feature"
import Highlight from "./overview/Highlight"
import Service from "./overview/Service"

const Overview = () => {
    return (
        <React.Fragment>
            <Highlight/>
            <Feature />
            <Service />
        </React.Fragment>
    )
}

export default Overview