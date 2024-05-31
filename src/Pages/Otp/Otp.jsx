import React, { useContext, useState } from "react";
import "./Otp.css";
import { TiMessages } from "react-icons/ti";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import AuthContext from "../../Context/AuthContext";

const Otp = () => {
  const email = localStorage.getItem("email");
  const [otp, setOtp] = useState("");
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setIsAuthenticated } = useContext(AuthContext);

//   console.log(email);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const goHome = () => {
    nav("/login");
  };

//   const handleOtp = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post(
//         "https://plaintiff-backend.onrender.com/api_v1/verify-otp",
//         {
//           email,
//           otp,
//         }
//       );
//       nav = ("/dashboard");
//       console.log(res);
//       toast.success("Welcome To Plaintiffaid Dashboard");
//       const userData = res.data.data;
//       const userToken = res.data.data.Token;
//       localStorage.setItem("userToken", userToken);
//       localStorage.setItem("users", JSON.stringify({ userData }));
//       const { UserID, Username } = res.data.data;
//       localStorage.setItem("user", JSON.stringify({ UserID, Username }));
//       handleLoginSuccess();
//       setLoading(false);
//     } catch (err) {
//       setLoading(false);
//       if (err.response.data.message) {
//         console.log("error")
//         toast.error(err.response.data.message);
//         setLoading(false);
//       }
//       setLoading(false);
//     }
//   };

  const handleOtp = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://plaintiff-backend.onrender.com/api_v1/verify-otp",
        {
          email,
          otp,
        }
      );
  
      nav("/dashboard");
  
      console.log(res);
      toast.success("Welcome To Plaintiffaid Dashboard");
  
      const userData = res.data.data;
      const userToken = res.data.data.Token;
      
      localStorage.setItem("userToken", userToken);
      localStorage.setItem("users", JSON.stringify({ userData }));
  
      const { UserID, Username } = res.data.data;
      localStorage.setItem("user", JSON.stringify({ UserID, Username }));
  
      handleLoginSuccess();
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        console.log("An error occurred:", err);
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <div className="otpHold">
        <div className="toplogo" onClick={goHome}>
          <img src="logo.png" alt="" />
        </div>

        <div className="otpWrap">
          <div className="otpLines">
            <div className="otpline"></div>
            <div
              className="otpline"
              style={{ backgroundColor: "#003482" }}
            ></div>
            <div className="otpline"></div>
          </div>
          <div className="otpMid">
            <div className="imag">
              <TiMessages style={{ fontSize: "70px", color: "#003482" }} />
            </div>
            <div className="text">
              <p>Verification</p>
            </div>
            <div className="lowerText">
              <p>Enter the OTP code sent to your email</p>
            </div>
          </div>
          <div className="otpBox">
            <div className="otpBoxes">
              <input
                type="text"
                className="otp-input w-64 rounded "
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          </div>
          <div className="cont">
            <button onClick={handleOtp}>Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
