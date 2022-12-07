import React, { useEffect, useState } from "react";
import MainNavigation from "./MainNavigation";
// import classes from "./Layout.module.scss"
import FixedBar from "./FixedBar";
import Footer from "./Footer";
import axios from "axios";
import config from "../../config";

const Layout = (props) => {
    const [a, setA] = useState('') 
    const [suggestion, setSuggestion] = useState([])

    useEffect(() => {
        let timer = setTimeout(async () => {
            if (a.length > 0) {
                const res = await axios.get(`${config.api.url}/job/suggest-keyword/5/${a.replace('/', '%2F')}`)
                setSuggestion(res.data)
            } else {
                setSuggestion([])
            }
        }, 500);
        return () => {
            clearTimeout(timer);
        };
        
    }, [a])

    const changeSuggestionHandler = (suggestion) => {
        setA(suggestion)
    }

    return (
        <div>
            <MainNavigation onChange={changeSuggestionHandler} filter={suggestion} />
            <FixedBar />
            <main>
                {props.children}
            </main>
            {props.isFooter && <Footer/>}
        </div>
    )
}

export default Layout