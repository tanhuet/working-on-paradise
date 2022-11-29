import React from "react";
import MainNavigation from "./MainNavigation";
// import classes from "./Layout.module.scss"
import FixedBar from "./FixedBar";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <div>
            <MainNavigation/>
            <FixedBar />
            <main>
                {props.children}
            </main>
            {props.isFooter && <Footer/>}
        </div>
    )
}

export default Layout