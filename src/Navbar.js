import React, { useEffect, useState} from 'react'

import "./Navbar.css"
import nfLogo from "./logos/netflix-logo.png"
import netflixAvatar from "./logos/netflix-avatar.jpg"

function Navbar  ()  {
    const [show, handleShow] = useState(false);
    useEffect (()=> {
        window.addEventListener("scroll", ()=> {
            if(window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])


    return (
        <div className={`nav ${show && "nav__black"}`}>
        <img 
        className="nav__logo"
        // src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        src={nfLogo}
        alt="netflix logo" />
            
        <img 
        className="nav__avtar"
        // src="https://i1.wp.com/matrixstore.pk/wp-content/uploads/2021/04/DmBraqkXcAA1Yco.jpg?fit=318%2C316&ssl=1"
        src = {netflixAvatar}
        alt="netflix logo" />
            
    </div>
)
}

export default Navbar
