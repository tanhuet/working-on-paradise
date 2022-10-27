import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.scss"

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <div className={classes.left}>
                    <div className={classes.img}></div>
                    <ul>
                        <li>
                            <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/home'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/category'>Category</NavLink>
                        </li>
                        <li>
                            <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/favourite'>Favourite</NavLink>
                        </li>
                        <li>
                            <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/cv'>CV</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={classes.center}>
                    <form>
                        <input type='text' placeholder="Search"/>
                        {/* <button></button> */}
                    </form>
                </div>
                <div className={classes.right}>
                    <ul>
                        <li className={classes.signin}>
                            <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/signin'>Sign in</NavLink>
                        </li>
                        <li className={classes.signup}>
                            <NavLink className={(navData) => (navData.isActive ? classes.active : '')} to='/signup'>Sign up</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default MainNavigation