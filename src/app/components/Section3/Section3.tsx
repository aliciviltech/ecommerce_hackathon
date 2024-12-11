import React from 'react'
import './Section3.css'
import PrimaryButton from '../Button/PrimaryButton'
import Image from 'next/image'
import { AllProductsData } from '@/utils/AllProductsData'
import Link from 'next/link'

const Section3 = () => {
  const newArrivalProduct = AllProductsData.find((product)=>product.section==='new_arrival')
  return (
    <div className='Section3'>
        <div className="leftCol">
          {
            newArrivalProduct &&
           <Image src={newArrivalProduct.imageURL} alt="asgardSofa" width={800} height={600}/>
          }
        </div>
        <div className="rightCol">
                <p className='paragraphP3'>New Arrivals</p>
                <h1 className='headingH3'>{newArrivalProduct?.title}</h1>
                <Link href={`/pages/product_detail/${newArrivalProduct?.id}`}>
                  <PrimaryButton text='Order Now' width={255} height={64} />
                </Link>
        </div>
    </div>
  )
}

export default Section3