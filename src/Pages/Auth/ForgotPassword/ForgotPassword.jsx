import React from "react"
import "./ForgotPassword.css"
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdSlowMotionVideo } from "react-icons/md";
import logo from "../../../assets/logo.png"
import { Link } from "react-router-dom";





const ForgotPassword = () =>{
    return(
        <div className="forgotPasswordHolder">
            <div className="forgotPasswordWrapper">
                <div className="forgotPasswordHead">
                    <div className="forgotPasswordHeadLeft">
                        <img src={logo} />              
                        </div>
                        <div className="forgotPasswordHeadRight">
                            <Link className="link" to="/">
                            <FaArrowLeftLong  style={{color: "#003482ff"}} />
                            </Link>
                
                        </div>
                </div>

                <div className="forgotPasswordBody">
                    <div className="bodyContainer">
                        <div className="enteryInput">
                        <div className="upperText">
                       <p>Email address</p>
                       </div>
                       <input type="email" />

                       <div className="resetBtn">
                        <button>Reset</button>
                        </div>

                        </div>
                        
                      </div>
                    </div>

                    <div className="questions">
                        <p className="visits">Have questions or need help?</p>
                        <p className="visit">Visit the PlaintiffAid center or give us a call at +2347025254512</p>
                    </div>
                </div>
            </div>
    )


}




export default ForgotPassword