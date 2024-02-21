import "./Dropdown.css"
// import { FiToggleRight } from "react-icons/fi";
import { GiPentarrowsTornado } from "react-icons/gi";
// import { motion } from "framer-motion"
import { useState } from "react";
import Header from "../Header/Header";


export default function Dropdown(){
    

    return(
     
     <div className="dropdown">
    
        <div className="option">
            <p>Services</p>
            <GiPentarrowsTornado style={{fontSize: "25px", color: "#003482ff"}}/>
        </div>
        <div className="option">
            <p>Pricing</p>
            <GiPentarrowsTornado style={{fontSize: "25px",color: "#003482ff"}}/>
        </div>
        <div className="option">
            <p>About</p>
            <GiPentarrowsTornado style={{fontSize: "25px", color: "#003482ff"}}/>
        </div>
        <div className="option">
            <p>Contact Us</p>
            <GiPentarrowsTornado style={{fontSize: "25px", color: "#003482ff"}}/>
        </div>
        <div className="option">
            <p>Login</p>
            <GiPentarrowsTornado style={{fontSize: "25px", color: "#003482ff"}}/>
        </div>

        <div className="exit">
            <button>Exit</button>
        </div>
       </div>
     
    )
}

