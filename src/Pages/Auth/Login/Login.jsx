import React, { useState } from "react";
import "./Login.css";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Image from "../../../assets/Image.jpg";
import {ClipLoader} from "react-spinners"
import { FaArrowLeftLong } from "react-icons/fa6";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ isError: false, type: "", message: "" });

  const handleShowpassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email && !email.includes("@")) {
      setError({ isError: true, type: "email", message: "Enter email" });
      setLoading(false);
    } else if (!email.includes("@")) {
      setError({
        isError: true,
        type: "email",
        message: "Email must contain @ ",
      });
      setLoading(false);
    } else if (!password && password.length < 8) {
      setError({ isError: true, type: "password", message: "Enter password" });
    //   setLoading(false);
    } else if (password.length < 8) {
      setError({
        isError: true,
        type: "password",
        message: "password must be more than 8 char",
      });
    //   setLoading(false);
    } else {
      setError({ isError: false, type: "", message: "" });
      alert("Login Successful");
      setLoading(false);
    }
  };

  return (
    <div className="loginHolder">
      <div className="loginHolderWrap">
        <div className="toplogo">
          <img src="logo.png" alt="" />
          <Link className="link" to="/">
          <FaArrowLeftLong  style={{color: "#003482ff"}}/>
          </Link>
        </div>
        <div className="lowerHold">
          <div className="loginLeftz">
            <img src={Image} alt="" />
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
                <div className="takes">
                <div className='inf'>
                {
                        error.isError && error.type === 'email'  ? <p style={{color: "red", fontSize: "10px", paddingLeft: "35px"}}>{error.message}</p>:null
                    }
                </div>
                  <div className="topa">
                  <MdOutlineMarkEmailRead
                    style={{ color: "#003482ff", fontSize: "14px" }}
                  />
                  <input type="email" 
                  value={email}
                    placeholder="email"   
                    className="fills"
                    onChange={(e) =>setEmail(e.target.value)}/>
                  </div>
                </div>

                <div className="takes">
                <div className='inf'>
                
                {
                        error.isError && error.type === 'password'? <p style={{color: "red", fontSize:"10px",  paddingLeft: "35px"}}>{error.message}</p>:null
                    }
                </div>
                  <div className="topTakes">
                    <RiLockPasswordFill
                      style={{ color: "#003482ff", fontSize: "14px" }}
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      placeholder="password"
                      onChange={(e) =>setPassword(e.target.value)}
                      className="fills"
                    />

                    {showPassword ? (
                      <FaRegEye
                        onClick={handleShowpassword}
                        style={{ color: "#003482ff", fontSize: "12px" }}
                      />
                    ) : (
                      <FaEyeSlash
                        onClick={handleShowpassword}
                        style={{ color: "#003482ff", fontSize: "12px" }}
                      />
                    )}
                  </div>

                  <div className="forgotPassword">
                    <Link className="link"  to="/forgotpassword">
                    <p>Forgot password?</p>
                    </Link>
                  </div>
                </div>

                <div className="loginButton">
                  <button onClick={handleLogin}>
                    {loading ? (
                      <ClipLoader color="white" size="8px" />
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>

                <div className="signup">
                    <p>Don't have an account?  <Link className="link" style={{color:"#003482ff"}}to="/signup">Signup</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
