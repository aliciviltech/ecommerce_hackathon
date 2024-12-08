'use client'
import React from 'react'
import './HeroSecondary.css'
import { useParams } from 'next/navigation'

const HeroSecondary = ({page}:{page:string}) => {
    return (
    <div className='HeroSecondary'>
        <h1 className='headingH3 z-10 relative'>{page}</h1>
    </div>
  )
}

export default HeroSecondary