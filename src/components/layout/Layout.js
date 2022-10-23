import React from "react";
import MainNavigation from "./MainNavigation";
// import classes from "./Layout.module.scss"
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <div>
            <MainNavigation/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout