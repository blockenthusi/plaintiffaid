import Header from "../../Components/Header/Header";
import "./Home.css";
import "animate.css";
import { BsCalendar2Date } from "react-icons/bs";
import Variation from "../../assets/Variation.png";
import timez from "../../assets/timez.png";
import { useState } from "react";
import Dropdown from "../../Components/Dropdown/Dropdown";
import { GiPentarrowsTornado } from "react-icons/gi";
import Curve from "../../assets/Curve.png";
import court from "../../assets/court.png";
import Kora_logo from "../../assets/Kora_Logo.png"

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Header show={show} setShow={setShow} />
      {show === true ? <Dropdown /> : null}
      <div className="VideoContainer">
        <div className="wrapper">
          <div className="textHolder">
            <div className="textFrame">
              <h1>Everything your law firm needs. All in one place.</h1>
              <p>The #1 Legal Practice Management Software</p>
            </div>

            <div className="demo">
              <button className="btn">Request a Demo</button>
            </div>

            <div id="wrappers">
              <div id="wrapper-inner">
                <div id="scroll-down">
                  <span class="arrow-down"></span>
                  <span id="scroll-title"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="videoHolder">
            <img src={Variation} className="vid" />

            <div className="box">
              <div className="top">
                <h6>Add a new Client</h6>
              </div>
              <div className="down">
                <p>Status </p>
                <span className="tool">Added</span>
              </div>
            </div>
            <div className="box1">
              <div className="top1">
                <BsCalendar2Date style={{ fontSize: "18px", color: "red" }} />
                <p>Book An Appointment</p>
              </div>
              <div className="down1">
                <p>Stay Reminded </p>
              </div>
            </div>
            <div className="box2">
              <div className="top2">
                <img src={timez} />
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  00: 15: 40
                </p>
              </div>
              <div className="down2">
                <p>Case 091-Cynthia </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="descHolder">
        <div className="descWrapper">
          <h1>
            Comprehensive client data management Software that meets the needs
            of your firm-and your clients
          </h1>
          <p>
            Simplify every aspect of your law firm, from billing to
            communication and document management.
          </p>
          <div className="bodyHold">
            <div className="bodyHoldWrap">
              <div className="leftHold">
                <img src={court} alt />
              </div>
              <div className="rightHold">
                <div className="desc">
                  <GiPentarrowsTornado />
                  <p>Dedicated security team and 247 technical support</p>
                </div>
                <div className="desc">
                  <GiPentarrowsTornado />
                  <p>
                    Continuous vulnerability monitoring and free on-demand
                    training
                  </p>
                </div>
                <div className="desc">
                  <GiPentarrowsTornado />
                  <p>
                    Comprehensive self-serve support site and data migration
                    support
                  </p>
                </div>
                <div className="desc">
                  <GiPentarrowsTornado />
                  <p>HIPAA,SOC2,PCI compliance and more</p>
                </div>
                <div className="descs">
                  <button className="butz">Try for free</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partnerHold">
        <h1>Our Partners</h1>
        <div className="partnerWrapper">
          <div className="leftTop">
            <div className="logoImage">
              <img src={Kora_logo} alt="" />
            </div>
          </div>

          <div className="rightTop">
            <div className="logoImage">
              <img src={Curve} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
