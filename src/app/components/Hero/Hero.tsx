import React from 'react'
import './Hero.css'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='Hero'>
        <div className="leftCol">
            <div className="content">
            <h1 className='headingH1'>Rocket single seater</h1>
            <p className='anchorA1'> <Link href={'/pages/shop'}> Shop Now</Link></p>
            </div>
        </div>
        <div className="rightCol">
            <Image className='heroImage' src="/images/hero_rocket_single.png" alt="heroImage" width={600} height={600}  />
        </div>
    </div>
  )
}

export default Hero