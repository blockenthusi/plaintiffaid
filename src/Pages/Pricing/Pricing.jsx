// import React from 'react'
import './Pricing.css'
import { FaCheck } from "react-icons/fa"
import Header from '../../Components/Header/Header'
import PricingCard from '../../Components/pricingcard/PricingCard'



const Pricing = () => {



  return (
 <main className="body">
   <Header/>
    <section className='first-section'>
    <p>Flexible plans with live support, free training, and <br/> worry-free data migration</p>
    </section>

    <section className='pricing-card'>
        <p className='get-started'>Get started in minutes. Try it free for 7 days. Cancel anytime.</p>
       
        <div className="pricing-cards">
            <PricingCard 
            plan='Free'
            amount='0'
            feature='Register new client data'
            feature2='Review client data feeds'
            feature3='Schedule management'
            hideLastIcon={true}
            />
            <PricingCard
            plan='Essentials'
            amount='30,000'
            feature='Review client data feeds'
            feature2='Calendar integration'
            feature3='Schedule management'
            feature4='Automated notifications'
            icon={FaCheck}
            />
            <PricingCard
            plan='Advance'
            amount='60,000'
            feature='Schedule management'
            feature2='Calendar integration'
            feature3='Schedule management'
            feature4='Automated notifications'
            />
        </div>
        
    </section>

  
 </main>



  )
}

export default Pricing