import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import Carousel from './../../components/Carousel/Carousel';
import Donors from './component/Donors/Donors';
import { getLoadingRequest, getLoadingSucess } from './../../redux/actions/loading.action';

export default function Home() {
    var Theme = 'light'|'dark';
    const stylesheets = {
        light: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.9.4/antd.min.css",
        dark: "https://cdnjs.cloudflare.com/ajax/libs/antd/4.9.4/antd.dark.min.css"
    };

    const createStylesheetLink = () => {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.id = "antd-stylesheet"
        document.head.appendChild(link)
        return link
    }

    
    const getStylesheetLink = () =>
    document.head.querySelector("#antd-stylesheet") || createStylesheetLink()

    const systemTheme = () =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"

    
    const getTheme = () => (localStorage.getItem("theme")) || systemTheme()

    const setTheme = (Theme) => {
    localStorage.setItem("theme", Theme)
    getStylesheetLink().href = stylesheets[Theme]
    }

    const toggleTheme = () => setTheme(getTheme() === "dark" ? "light" : "dark")

    const dispatch = useDispatch();
    let navData = window.performance.getEntriesByType("navigation");
   

    if (navData.length > 0 && navData[0].loadEventEnd > 0) {
        dispatch(getLoadingSucess());
        
    } else {
        dispatch(getLoadingRequest());
    }
    
    
    window.addEventListener("load", function () {
        return dispatch(getLoadingSucess());
    })

    return (
        <div>
            <Carousel />
            <Donors />
            {/* <button className="btn btn-primary" onClick={toggleTheme}>dark mode</button> */}
        </div>
    )
}
