'use client'
import PrimaryButton from '@/app/components/Button/PrimaryButton';
import './Cart.css'
import Header from '@/app/components/Header/Header'
import HeroSecondary from '@/app/components/HeroSecondary/HeroSecondary'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import Footer from '@/app/components/Footer/Footer';
import { CartContextValue } from '@/app/context/CartContext';
import Link from 'next/link';
import { CartItemType } from '@/utils/AllProductsData';

const Cart = () => {
    const cartContextValue = useContext(CartContextValue);
    console.log(cartContextValue)
    const {cartItems, deleteCartItemF}=  cartContextValue;
    const [Subtotal, setSubtotal] = useState(0)
    const deliveryCharges = 5199;

    // getting total amount
    useEffect(()=>{
        const totalAmountF = ()=>{
            let sum=0;
            cartItems.forEach((item:CartItemType) => {
                sum += item.quantity*item.price
            });
            console.log(sum)
            setSubtotal(sum)
        }
        totalAmountF()
    },[cartItems])
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
                    <th>Action</th>
                </tr>
                {
                    cartItems.map((item:CartItemType)=>{
                        return(
                        <tr key={item.cartId}>
                            <td className='flex gap-5 items-center text-left'> <Image className='itemImage w-[100px]' src={item.imageURL} alt="image" width={200} height={200} /> {item.title} </td>
                            <td>Rs. {item.price.toLocaleString()}.00</td>
                            <td> <div className="quantity">{item.quantity}</div> </td>
                            <td> <div>Rs. {(item.price*item.quantity).toLocaleString() }.00</div> </td>
                            <td><i className='fa-solid fa-trash-can cursor-pointer hover:text-red-500' onClick={()=>{deleteCartItemF(item.cartId)}}></i></td>
                        </tr>
                        )

                    })
                }
                </tbody>
            </table>
            </div>
            <div className="cartTotals">
                <h1 className='paragraphP3'>Cart Totals</h1>
                <div className="amount ">
                <div className='flex items-center justify-between gap-10'><span className='headingH4'>Subtotal</span>  <span>Rs. {Subtotal}.</span></div>
                <div className='flex items-center justify-between gap-10'><span className='headingH4'>Delivery Charges</span>  <span>Rs. {deliveryCharges}</span></div>
                    <div className='flex items-center justify-between gap-10'><span className='headingH4'>Total</span>  <span className='text-[var(--secondaryColor)]'>Rs. {(Subtotal+deliveryCharges).toLocaleString()}.00</span></div>
                </div>
                <Link href={'/pages/checkout'}><PrimaryButton text='Checkout' width={222} height={59} /></Link>
            </div>
        </div>

        <Footer/>
        
    </div>
  )
}

export default Cart