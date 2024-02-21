import "./Header.css"
import React,{useState} from "react"
import { HiMenu } from 'react-icons/hi';
import {GiCancel} from 'react-icons/gi';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"




 
    
  

const Header =({})=>{
    
    const [show, setShow] = useState(false)
   

    return(
        <>
        
         <div className="header">
        <div className="lowerHeader">
            <div className="leftHeader">
            {/* <Link className="link" to="">
          
            </Link> */}
              <img src={logo} alt="logo"/>
            </div>
            <div className="midHeader">
                <ul>
                    {/* <Link className="link" to="">
                    <li>Services</li>
                    </Link>
                    <li>Pricing</li>
                    <Link className="link" to="">
                    <li>About</li>
                    </Link>
                    <Link className="link" to="">
                    <li>Contact Us</li>
                    </Link>
                    <Link  className="link" to="">
                    <li>Login</li>
                    </Link>
                     */}
                </ul>
            </div>
            <div className="rightHeader">
                <button className="btn">Try PlaintiffAid </button>
            </div>
            <div className="rightHeader1">
                <button className="btn">Try for free</button>
            </div>

            <div className="burger" onClick={()=> setShow(!show)}>
        {
            show === false? <HiMenu  style={{direction: "right", duration: "0.5"}}/>: <GiCancel style={{color: "#003482ff", fontSize: "30px", direction: "right", duration: "0.5"}}/>
        }
        </div>
          </div>
        </div>
         
        </>
    )
}




export default Header