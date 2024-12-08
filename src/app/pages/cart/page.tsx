import PrimaryButton from '@/app/components/Button/PrimaryButton';
import './Cart.css'
import Header from '@/app/components/Header/Header'
import HeroSecondary from '@/app/components/HeroSecondary/HeroSecondary'
import React from 'react'
import Image from 'next/image';
import Footer from '@/app/components/Footer/Footer';

const Cart = () => {
  return (
    <div className='Cart'>
        <Header/>
        <HeroSecondary page='Cart'/>

        <div className="cartContent">
            <div className="table">
            <table >
                <tbody>
                <tr className='bg-[var(--primaryColor)] h-[40px]'>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Sub-Total</th>
                </tr>
                <tr>
                    <td className='flex gap-5 items-center'> <Image className='itemImage w-[100px]' src="/images/asgaard_sofa.png" alt="image" width={200} height={200} /> Asgaard Sofa </td>
                    <td>Rs. 250,000.00</td>
                    <td> <div className="quantity">1</div> </td>
                    <td> <div>Rs. 250,000.00</div> </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className="cartTotals">
                <h1 className='paragraphP3'>Cart Totals</h1>
                <div className="amount ">
                    <div className='flex items-center gap-10'><span className='headingH4'>Subtotal</span>  <span>Rs. 250,000.00</span></div>
                    <div className='flex items-center gap-10'><span className='headingH4'>Total</span>  <span className='text-[var(--secondaryColor)]'>Rs. 250,000.00</span></div>
                </div>
                <PrimaryButton text='Checkout' width={222} height={59} />
            </div>
        </div>

        <Footer/>
        
    </div>
  )
}

export default Cart