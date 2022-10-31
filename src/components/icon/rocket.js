import React from "react"
import rocket from "../../asses/rocket-1206.png"
import classes from "./rocket.module.scss"

const Rocket = () => {
    return (
        <img src={rocket} className ={classes.rocket} alt="rocket"/>
    )
}

export default Rocket