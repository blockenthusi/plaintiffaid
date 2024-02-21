import Header from "../../Components/Header/Header";
import "./Home.css";
import "animate.css";
import {BsCalendar2Date} from "react-icons/bs"
import Variation from "../../assets/Variation.png"
import timez from "../../assets/timez.png"
export default function Home() {
  return (
    <>
      <Header />
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
                <img src={timez}/>
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
    </>
  );
}
