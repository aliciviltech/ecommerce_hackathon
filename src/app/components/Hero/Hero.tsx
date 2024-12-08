import React from 'react'
import './Hero.css'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='Hero'>
        <div className="leftCol">
            <div className="content">
            <h1 className='headingH1'>Rocket single seater</h1>
            <p className='anchorA1'> <Link href={''}> Shop Now</Link></p>
            </div>
        </div>
        <div className="rightCol">
            <img src="/images/hero_rocket_single.png" alt="" />
        </div>
    </div>
  )
}

export default Hero