import React from "react"
import talents from "../../asses/talents.png"
import classes from "./rocket.module.scss"

const Talents = () => {
    return (
        <img src={talents} className ={classes.talents} alt="talents"/>
    )
}

export default Talents