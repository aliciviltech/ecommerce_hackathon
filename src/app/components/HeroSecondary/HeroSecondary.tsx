'use client'
import React from 'react'
import './HeroSecondary.css'
import Image from 'next/image'

const HeroSecondary = ({page}:{page:string}) => {
    return (
    <div className='HeroSecondary'>
        <Image className='z-10' src='/images/hero_logo.png' alt='logo' width={100} height={100}/>
        <h1 className='headingH3 z-10 relative'>{page}</h1>
    </div>
  )
}

export default HeroSecondary