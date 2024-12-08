import React from 'react'
import './Footer.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='Footer'>
        {/* =========================== row-1 ================================= */}
        <div className="row1">
            <div className="col1 col">
                <p className='paragraphP2'>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <div className="col2 col">
                <div className="innerCol">
                    <p className='paragraphP2'>Links</p>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/pages/shop'}>Shop</Link>
                    <Link href={''}>About</Link>
                    <Link href={'/pages/contact'}>Contact</Link>
                </div>
                <div className="innerCol">
                <p className='paragraphP2'>Help</p>
                    <Link href={''}>Payment Options</Link>
                    <Link href={''}>Returns</Link>
                    <Link href={''}>Privacy Policy</Link>
                </div>
            </div>
            <div className="col3 col">
                <p className='paragraphP2'>New Letter</p>
                <div className="input">
                <input type="text" placeholder='Enter your email address' />
                <button>Subscribe</button>
                </div>
            </div>
        </div>

        {/* =========================== row-2 ================================= */}
        <div className="row2">
            <p>2022 Meubel House. All rights reverved</p>
        </div>
    </div>
  )
}

export default Footer