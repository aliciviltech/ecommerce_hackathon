'use client'
import Link from 'next/link'
import './Header.css'
import React, { useState } from 'react'
import Image from 'next/image'

const Header = () => {
    const [hideMenu, setHideMenu] = useState(true);
    const [hideCart, setHideCart] = useState(true);
    const handleMenu = () => {
        setHideMenu(true);
    }
    return (
        <div className='Header w-screen h-[60px] px-10 flex items-center relative z-20 lg:justify-end lg:px-20'>
            <div className="menuButton lg:hidden z-20" onClick={() => { setHideMenu(!hideMenu) }}>
                {
                    hideMenu ?
                        <>
                            <i className="fa-solid fa-bars"></i> Menu
                        </>
                        :
                        <>
                            <i className="fa-solid fa-close"></i> Close
                        </>
                }

            </div>
            <div className={`nav ${hideMenu && "hidden"} flex lg:flex lg:gap-52`}>
                <div className="nav1 flex gap-20 lg:flex">
                    <Link className='linkTag' href={'/'} onClick={handleMenu}>Home</Link>
                    <Link className='linkTag' href={'/pages/shop'} onClick={handleMenu}>Shop</Link>
                    <Link className='linkTag' href={''} onClick={handleMenu}>About</Link>
                    <Link className='linkTag' href={'/pages/contact'} onClick={handleMenu}>Contact</Link>
                </div>
                <div className="nav2 flex gap-10 lg:flex">
                    <Link href={'/pages/account'} className='linkTag flex gap-3' onClick={handleMenu}><i className="fa-solid fa-user"></i> <span className='block lg:hidden'>User Account</span> </Link>
                    <Link href={''} className='linkTag flex gap-3' onClick={handleMenu}><i className="fa-solid fa-magnifying-glass"></i><span className='block lg:hidden'>Search</span></Link>
                    <Link href={''} className='linkTag flex gap-3' onClick={handleMenu}><i className="fa-solid fa-heart"></i><span className='block lg:hidden'>Wish List</span></Link>
                    <Link href={''} className='linkTag flex gap-3' onClick={() => { setHideCart(!hideCart); setHideMenu(true) }}><i className="fa-solid fa-cart-shopping"></i><span className='block lg:hidden'>Cart</span></Link>
                </div>
            </div>

            {/* =============================== cart drop down Flag =========================== */}
            {
                !hideCart &&
                <div className="cartFlagContainer">
                    <div className="cartFlag">
                        <div className="closeFlag hover:cursor-pointer absolute top-4 right-4" onClick={() => setHideCart(true)}>close <i className="fa-solid fa-close"></i></div>
                        <h1 className='border-b border-gray-400 pb-4'>Shoping Cart</h1>
                        <div className="items flex gap-2">
                            <div className="image w-[100px] h-[70px]"> <Image className=' w-[100%] h-[100%]  object-contain' src="/images/asgaard_sofa.png" alt="itemImage" width={100} height={100} /></div>
                            <div className="text">
                                <h1>Asgaard Sofa</h1>
                                <p>1 x Rs.250,000</p>
                            </div>
                        </div>
                        <div className="cartFlagFooter flex justify-center flex-wrap gap-5 mt-auto border-t border-gray-400 pt-4">
                            <Link href={'/pages/cart'}> <button className='w-[130px] h-[30px] border border-black rounded-3xl flex justify-center items-center'>View Cart</button></Link>
                            <Link href={'/pages/checkout'}><button className='w-[130px] h-[30px] border border-black rounded-3xl flex justify-center items-center'>Checkout</button></Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Header