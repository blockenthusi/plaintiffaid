import React  from "react"
import "./Login.css"
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa"
import { FaRegEye } from "react-icons/fa6"
import { Link } from "react-router-dom";




const Login =  () =>{

return(

    <div className="loginHolder">
        <div className="loginHolderWrap">
            <div className="toplogo">
                
                <img src="logo.png"  alt=""/>
            
               
            </div>
            <div className="lowerHold">
            <div className="loginLeftz">
                <img src="Image.jpg" alt="" />
            </div>
            <div className="loginRightz">
                <div className="welcome">
                    <p>Welcome back</p>
                </div>
                <div className="bigText">
                    <p>Login to your account</p>
                    </div>

                    <div className="form">
                        <div className="formWrap">
                            <div className="take">
                                 <MdOutlineMarkEmailRead style={{color:"#003482ff", fontSize:"14px"}}/>
                                <input type="email" placeholder="email" className="fills"/>
                            </div>

                            <div className="takes">
                                    <RiLockPasswordFill style={{color:"#003482ff", fontSize:"14px"}}/>
                                <input type="password" placeholder="password" className="fills"/>
                                <FaEyeSlash style={{color:"#003482ff", fontSize:"14px", marginLeft: "20%" }}/>
                                </div>

                                <div className="forgot">
                                    <p>Forgot password?</p>
                                </div>

                                <div className="login">
                                    <button>Login</button>
                                </div>

                                <div className="signup">
                                    <p>Don't have an account? Signup</p>
                                </div>
                            
                                {/* <FaRegEye /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
          

    

)


}




export default Login 