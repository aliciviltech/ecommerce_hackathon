import Card from '@/app/components/Card/Card'
import Footer from '@/app/components/Footer/Footer'
import Header from '@/app/components/Header/Header'
import HeroSecondary from '@/app/components/HeroSecondary/HeroSecondary'
import { AllProductsData } from '@/utils/AllProductsData'
import Link from 'next/link'
import React from 'react'

const Shop = () => {
    const pageNumbers = [1,2,3];
  return (
    <div className='Shop'>
        <Header/>
        <HeroSecondary page='Shop'/>
        <div className="filterSection"><h1 className='paragraphP3 text-center mt-10'>All Products</h1></div>
        <div className="allProductsSection flex flex-wrap gap-6 gap-y-20 justify-center py-20 ">
            {
                AllProductsData.map((product)=>{
                    return(
                        <Link href={`/pages/product_detail/${product.id}`} key={product.id}><Card product={product} /></Link>
                    )
                })
            }
        </div>
        <div className="paginationSection flex justify-center gap-4">
            {
                pageNumbers.map((no, index)=>{
                    return (
                        index===0 ?  <div key={index} className="pageNumber w-fit py-2 px-4 rounded-md bg-[#fdd962]">{no}</div>
                        :
                        <div key={index} className="pageNumber w-fit py-2 px-4 rounded-md bg-[var(--primaryColor)]">{no}</div>
                    )    
                })
            }
            <div className="pageNumber w-fit py-2 px-4 rounded-md bg-[var(--primaryColor)]">next</div>

        </div>
        <Footer/>
    </div>
  )
}

export default Shop