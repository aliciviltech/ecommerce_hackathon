import React from 'react'
import './Section2.css'
import Card from '../Card/Card'
import { AllProductsData } from '@/utils/AllProductsData'
import Link from 'next/link'

const Section2 = () => {
    return (
        <div className='Section2'>
            <div className="sectionHeading px-4">
                <h1 className='headingH2'>Top Picks For You</h1>
                <p className='paragraphP2'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            </div>
            <div className="productsList flex flex-wrap gap-4 justify-center mt-10">
                {
                    AllProductsData.map((product)=>{
                        return(
                            product.section === 'top_picks' && 
                            <Link key={product.id} href={`/pages/product_detail/${product.id}`}><Card product={product} /></Link> 
                        )
                    })
                }
            </div>
            <div className="sectionFooter">
                <p className='anchorA1 mt-10'>View More</p>
            </div>
        </div>
    )
}

export default Section2