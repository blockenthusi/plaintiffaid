import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
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
import Kora_logo from "../../assets/Kora_Logo.png";
import freq from "../../assets/freq.png";
import law1 from "../../assets/law1.jpg";
import law from "../../assets/law.jpg";
import law3 from "../../assets/law3.avif";
import { Link } from "react-router-dom";
import { TiPlus } from "react-icons/ti";
import { LuMinus } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import Questions from "../../data/Questions";
import questions from "../../data/Questions";
import { Button } from "@nextui-org/button";

export default function Home() {
  const [show, setShow] = useState(false);
  const [activeQuestion, setAtiveQuestion] = useState(null);
  const [plus, setPlus] = useState(true);

  console.log(Questions);

  const list = [
    {
      image: law1,
      alt: "img1",
      topic: "Adjournment of legal bill",
    },
    {
      image: law,
      alt: "img2",
      topic: "Top paid lawyers",
    },
    {
      image: law3,
      alt: "img3",
      topic: "Check out the protected libray",
    },
    {
      image: law3,
      alt: "img3",
      topic: "Check out the protected libray",
    },
  ];

  
  return (
    <>
      <Header show={show} setShow={setShow} />
      {show === true ? <Dropdown /> : null}
      <div className="VideoContainer">
        <div className="wrapper">
          <div className="textHolder">
            <div className="textFrame">
              <h1 className="animate-charcter">
                Everything your law firm needs. All in one place.
              </h1>
              <p>The #1 Legal Practice Management Software</p>
              <div className="demo">
                <Link className="link" to="/request">
                  <button className="btn">Request a Demo</button>
                </Link>
              </div>
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

            <div className="boxx">
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
              <div className="righttHold">
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
                  <Link className="link" to="/signup">
                    <button className="bbutz">Try for free</button>
                  </Link>
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
      <div className="latestHolders">
        <div className="lates">
          <h1>Lastest Blogs</h1>
        </div>

        <div className="blogss ">
          {list?.map((props) => (
            <div className="group h-96  w-72 [perspective:1000px] ">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full  rounded-xl object-cover shadow-xl shadow-black/40 "
                    src={props.image}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold">Hi Ella </h1>
                    <p className="text-3xl font-bold">Designer</p>
                    <p className="text-base  ">{props.topic}</p>
                    <Button className=" mt-2 rounded bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-200">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="desccHolder">
        <div className="desccWrapper">
          <div className="bodyHoldd">
            <div className="bodyHoldWrapp">
              <div className="leftHoldd">
                <img src={freq} alt />
              </div>
              <div className="rightHoldd">
                <div className="w-[100%] m-auto max-w-[1400px] bg-white p-6 lg:p-8 rounded-lg   shadow-md ">
                  <h2 className="text-2xl mb-6 font-semibold">
                    {" "}
                    Frequently Asked Questions{" "}
                  </h2>
                  {questions.map((i) => (
                    <div key={i?.id} className="mb-4 last:mb-0">
                      <Button
                        className="w-full hover:none  lg:text-xl text-left focus:outline-none  lg:p-4 bg-gray-100 rounded shadow-md flex justify-between items-center  text-sm
                      "
                        onClick={() =>
                          setAtiveQuestion(
                            activeQuestion === i.id ? null : i.id
                          )
                        }
                      >
                        {i.question}{" "}
                        {activeQuestion === i.id ? <LuMinus /> : <TiPlus />}
                      </Button>
                      <AnimatePresence>
                        {activeQuestion === i.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 text-gray-600 ml-4"
                          >
                            <p className=" text-xs lg:text-xl ">{i.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
