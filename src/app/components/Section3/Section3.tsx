import React from 'react'
import './Section3.css'
import PrimaryButton from '../Button/PrimaryButton'
import Image from 'next/image'

const Section3 = () => {
  return (
    <div className='Section3'>
        <div className="leftCol">
          <Image src="/images/asgaard_sofa.png" alt="asgardSofa" width={800} height={600}/>
        </div>
        <div className="rightCol">
                <p className='paragraphP3'>New Arrivals</p>
                <h1 className='headingH3'>Asgaard Sofa</h1>
                <PrimaryButton text='Order Now' width={255} height={64} />
        </div>
    </div>
  )
}

export default Section3