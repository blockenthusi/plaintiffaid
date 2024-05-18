// import React from 'react'
import "./Pricing.css";
import Header from "../../Components/Header/Header";
// import PricingCard from "../../Components/pricingcard/PricingCard";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import Dropdown from "../../Components/Dropdown/Dropdown";
import { FaCheck } from "react-icons/fa" 
import { Link } from 'react-router-dom'




const Pricing = () => {
  const [show, setShow] = useState(false);


  return (
    <>
      <Header show={show} setShow={setShow} />
      {show === true ? <Dropdown /> : null}
      <section className="first-section">
        <p>
          Flexible plans with live support, free training, and <br /> worry-free
          data migration
        </p>
      </section>

      <section className="pricing-card">
       <div className="price-card-container">
        <div className="left-text">
          <p className="first-text">Our system is completely <br/>robust for our users.</p>
          <p className="second-text">Purchase a plan and have <br/>unlimited access to our solution  </p>
          <p className="third-text">Click on Try for to get started</p>
        </div>
        <div className="right-card">
        <div className='card'>
        <div className="plan">
        <p className='free'>Essentials</p>
        <p className='best'>Best for a team getting started.</p>
        </div>

        <div className="amount">
        <p className='price'>₦60,000</p>
        <p className='peruser'>per user, per month</p>
        </div>

        <div className="features">

            <div className="features-icon">
            <FaCheck fill='#FFA500' />
            <p>Register new client data</p>
            </div>
            <div className="features-icon">
            <FaCheck fill='#FFA500' />
            <p>Calendar integration</p>
            </div>
            <div className="features-icon">
            <FaCheck fill='#FFA500' />
            <p>Schedule management</p>
            </div>
          <div className="features-icon">
            <FaCheck fill="#FFA500" />
            <p>Automated notifications</p>
          </div>

        </div>
        <Link className='link' to="/signup">
        <button>Try for free</button>
        </Link>

    </div>

        </div>
        
       </div>


      </section>
      
      <div className="nameless"></div>
      <Footer/>
    </>
  );
};

export default Pricing;
