import "./Header.css";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = ({ show, setShow }) => {
  return (
    <>
      <div className="header">
        <div className="headerswrap">
          <div className="leftHeader">
            <Link className="link" to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="midHeader">
            <ul>
              <Link className="link" to="/about">
                <li>About</li>
              </Link>
              <Link className="link" to="/pricing">
              <li>Pricing</li>
              </Link>
              
              <Link className="link" to="/service">
                <li>Services</li>
              </Link>
              <Link className="link" to="/contact">
                <li>Contact Us</li>
              </Link>

              <Link className="link" to="/login">
                <li>Login</li>
              </Link>
            </ul>
          </div>
          <div className="rightHeader">
            <Link className="link" to="/signup">
            <button className="btn">Try PlaintiffAid </button>
            </Link>
            
          </div>
          <div className="rightHeader1">
          <Link className="link" to="/signup">
            <button className="btn">Try for free</button>
            </Link>
          </div>

          <div className="burger" onClick={() => setShow(!show)}>
            {show === false ? (
              <HiMenu style={{ direction: "right", duration: "0.5" }} />
            ) : (
              <IoCloseSharp 
                style={{
                  color: "#003482ff",
                  fontSize: "30px",
                  direction: "right",
                  duration: "0.5",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
