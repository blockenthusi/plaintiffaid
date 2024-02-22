import "./Header.css";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { GiCancel } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = ({ show, setShow }) => {
  return (
    <>
      <div className="header">
        <div className="lowerHeader">
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

              <li>Pricing</li>
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
            <button className="btn">Try PlaintiffAid </button>
          </div>
          <div className="rightHeader1">
            <button className="btn">Try for free</button>
          </div>

          <div className="burger" onClick={() => setShow(!show)}>
            {show === false ? (
              <HiMenu style={{ direction: "right", duration: "0.5" }} />
            ) : (
              <IoIosClose
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
