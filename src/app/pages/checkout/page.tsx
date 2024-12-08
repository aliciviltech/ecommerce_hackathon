import './checkout.css'
import Header from '@/app/components/Header/Header'
import HeroSecondary from '@/app/components/HeroSecondary/HeroSecondary'
import React from 'react'

const Checkout = () => {
    const pageNumbers = [1,2,3];
  return (
    <div className='Checkout'>
        <Header/>
        <HeroSecondary page='Checkout'/>
        
        <div className="checkoutContent">
            {/* =============================== billing details with react hook form ========================== */}
            <div className="billingDetails col">
            <h1 className='headingH2'>Billing Details</h1>
            </div>

            {/* =============================== billing details with react hook form ========================== */}
            <div className="cartDetails col">

            </div>
        </div>

    </div>
  )
}

export default Checkout