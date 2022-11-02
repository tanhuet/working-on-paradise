import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer>
            <div className={classes.footer}>
                <div className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/home'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/category'>Category</NavLink>
                        </li>
                        <li>
                            <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/cv'>CV</NavLink>
                        </li>
                        <li>
                        <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/account'>Account</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer

