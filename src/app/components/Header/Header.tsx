'use client'
import Link from 'next/link'
import './Header.css'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { CartContextValue } from '@/app/context/CartContext'
import { CartItemType } from '@/utils/AllProductsData'

const Header = () => {
    const currentPath = usePathname();
    const cartContextValue = useContext(CartContextValue);
    console.log(cartContextValue)
    const { cartItems } = cartContextValue;
    console.log(cartItems)
    console.log(cartItems.length)
    const [hideMenu, setHideMenu] = useState(true);
    const [hideCart, setHideCart] = useState(true);
    const handleMenu = (path: string) => {
        setHideMenu(true);
        if (path !== currentPath && path !== '') {
            setShowLoader(true)
        }
    }
    const [showLoader, setShowLoader] = useState(false);

    // =================== router events ========================

    return (
        <div className='Header w-[100%] px-10 h-[60px] flex items-center relative lg:justify-end lg:px-20'>
            <div className="menuButton lg:hidden z-10" onClick={() => { setHideMenu(!hideMenu) }}>
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
            <div className={`nav ${hideMenu ? "left-[-100vw]":"left-0"} top-0 flex lg:flex lg:gap-52`}>
                <div className="nav1 flex lg:gap-20 lg:flex">
                    <Link className='linkTag' href={'/'} onClick={() => handleMenu('/')}>Home</Link>
                    <Link className='linkTag' href={'/pages/shop'} onClick={() => handleMenu('/pages/shop')}>Shop</Link>
                    <Link className='linkTag' href={''} onClick={() => handleMenu('')}>About</Link>
                    <Link className='linkTag' href={'/pages/contact'} onClick={() => handleMenu('/pages/contact')}>Contact</Link>
                </div>
                <div className="nav2 flex lg:gap-10 lg:flex">
                    <Link href={'/pages/account'} className='linkTag flex gap-3' onClick={() => handleMenu('/pages/account')}><i className="fa-solid fa-user"></i> <span className='block lg:hidden'>User Account</span> </Link>
                    <Link href={''} className='linkTag flex gap-3' onClick={() => handleMenu('')}><i className="fa-solid fa-magnifying-glass"></i><span className='block lg:hidden'>Search</span></Link>
                    <Link href={''} className='linkTag flex gap-3' onClick={() => handleMenu('')}><i className="fa-solid fa-heart"></i><span className='block lg:hidden'>Wish List</span></Link>
                    <Link href={''} className='linkTag cartLinkTag flex gap-3' onClick={() => { setHideCart(!hideCart); setHideMenu(true) }}>
                        <div className="icon relative">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span className='itemsNumber'> {cartItems.length}</span>
                        </div>
                    </Link>
                </div>
            </div>


            {/* =============================== cart drop down Flag =========================== */}
            {
                <div className={`cartFlagContainer z-20`}>
                    <div className={`cartFlag ${hideCart ? "top-[-100vh]":"top-0"}` }>
                        <div className="closeFlag hover:cursor-pointer absolute top-4 right-4" onClick={() => setHideCart(true)}>close <i className="fa-solid fa-close"></i></div>
                        <h1 className='border-b border-gray-400 pb-4'>Shoping Cart</h1>
                        <div className="cartItems">
                        {
                            cartItems.length>0 ?
                            cartItems.map((item:CartItemType) => {
                                return (
                                    <div key={item.id} className="items flex gap-2">
                                        <div className="image w-[100px] h-[70px]"> <Image className=' w-[100%] h-[100%]  object-contain' src={item.imageURL} alt="itemImage" width={100} height={100} /></div>
                                        <div className="text">
                                            <h1>{item.title}</h1>
                                            <p>{item.quantity} x Rs.{item.price}</p>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <p className='paragraphP1 text-center'>No items added</p>
                        }
                        </div>

                        {
                            cartItems.length>0 ?
                        <div className="cartFlagFooter flex justify-center flex-wrap gap-5 mt-auto border-t border-gray-400 pt-4">
                           
                            <Link href={'/pages/cart'}> <button className='w-[130px] h-[30px] border border-black rounded-3xl flex justify-center items-center' style={{pointerEvents: `${cartItems.length===0? 'none': 'none'}`}}>View Cart</button></Link>
                            <Link href={'/pages/checkout'}><button className='w-[130px] h-[30px] border border-black rounded-3xl flex justify-center items-center'>Checkout</button></Link>
                        </div>
                        :
                        ''
                        }
                    </div>
                </div>
            }

            {showLoader &&
                <div className="loaderContainer"><div className="loader"></div></div>
            }
        </div>
    )
}

export default Header