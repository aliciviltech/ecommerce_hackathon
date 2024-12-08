'use client'
import Header from '@/app/components/Header/Header'
import './ProductDetailPage.css'
import { AllProductsData } from '@/utils/AllProductsData'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import PrimaryButton from '@/app/components/Button/PrimaryButton'
import Link from 'next/link'
import Card from '@/app/components/Card/Card'
import Image from 'next/image'

const ProductDetailPage = () => {
    const [quantity, setQuantity] = useState(1)
    const randomNumber= Math.random()*16;
    const param = useParams()
    const { id } = param;
    const selectedProduct = AllProductsData.find((product) => product.id === Number(id))
    return (
        <div className='ProductDetailPage'>
            <Header />
            <div className="directory"></div>
            
            {/* ============================ product details =================================== */}
            <div className="productDetails">
                {
                    selectedProduct &&
                    <div className="image"> <Image className='itemImage' src={selectedProduct.imageURL} alt="itemImage" width={400} height={400} /></div>
                }
                <div className="text flex flex-col gap-5">
                    <h1 className='headingH2'>{selectedProduct?.title}</h1>
                    <p className='paragraphP3'>Rs. {selectedProduct?.price}.00</p>
                    <p className="description">
                        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                    </p>
                    <div className="sizeContainer">
                        <p>Size</p>
                        <div className="sizes flex gap-4">
                            <div className="pageNumber w-[40px] h-[40px] flex justify-center items-center rounded-md bg-[#fdd962]">L</div>
                            <div className="pageNumber w-[40px] h-[40px] flex justify-center items-center rounded-md bg-[var(--primaryColor)]">XL</div>
                            <div className="pageNumber w-[40px] h-[40px] flex justify-center items-center rounded-md bg-[var(--primaryColor)]">XS</div>
                        </div>
                    </div>
                    <div className="colorContainer">
                        <p>Color</p>
                        <div className="sizes flex gap-4">
                            <div className="color w-[40px] h-[40px]  flex justify-center items-center rounded-md bg-[#d0cfcc]"></div>
                            <div className="color w-[40px] h-[40px]  flex justify-center items-center rounded-md bg-[#50472b]"></div>
                            <div className="color w-[40px] h-[40px]  flex justify-center items-center rounded-md bg-[#0f5085]"></div>
                        </div>
                    </div>
                    <div className="quantity flex flex-wrap gap-5">
                        <div className="quantity flex gap-5 border border-black rounded-xl h-[64px] w-[90px] flex items-center justify-center w-fit">
                            <button onClick={() => { quantity > 0 && setQuantity(quantity - 1) }}>-</button>
                            {quantity}
                            <button onClick={() => {setQuantity(quantity + 1)}}>+</button>
                        </div>
                        <PrimaryButton  text='Add to cart' width={215} height={64} radius={15} />
                    </div>
                </div>
            </div>

            {/* =========================================== Related Products ================================================ */}
            <div className="relatedProducts">
                <h1 className='headingH2 mt-10 ml-4 sm:m-10 sm:ml-16'>Related Products</h1>
                <div className="productsList flex flex-wrap gap-5 justify-center">
                {
                    AllProductsData.slice(randomNumber,randomNumber+4).map((product)=>{
                        return(
                            <Link key={product.id} href={`/pages/product_detail/${product.id}`}>
                                <Card product={product} />
                            </Link>
                        )
                    })
                }
                </div>
            </div>
            {id}
        </div>
    )
}

export default ProductDetailPage