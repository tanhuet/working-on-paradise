import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Footer.module.scss"

import fbIcon from "../../asses/facebook-icon.png"
import instaIcon from "../../asses/instagram-icon.png"
import twitterIcon from "../../asses/twitter-icon.png"

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
                <div className={classes['social-network']} >
                    <Link>
                    <div>
                        <img src={fbIcon} alt="facebook icon"/>
                    </div>
                    </Link>
                    <Link>
                    <div>
                        <img src={instaIcon} alt="insta icon"/>
                    </div>
                    </Link>
                    <Link>
                    <div>
                        <img src={twitterIcon} alt="twitter icon"/>
                    </div>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer

