import { AllProductsData } from '@/utils/AllProductsData'
import './landingModal.css'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const LandingModal = () => {
    const [showLandingModal, setShowLandingModal] = useState(true);
    const router = useRouter()
    return (
        <div className='LandingModal '>
            {
                showLandingModal &&
                AllProductsData.map((product) => {
                    return (
                        product.section === 'new_arrival' &&
                        <div key={product.id} className="productContainer z-50 fixed inset-0 flex justify-center items-center">
                            <div className="product w-[90%] h-[70%] bg-black text-white lg:w-[50%] lg:h-[80%] relative overflow-hidden">
                                <div className='productCard cursor-pointer w-full h-full flex flex-col justify-center items-center' onClick={() => { router.push(`/pages/product_detail/${product.id}`) }}>
                                    <div className="newArrivalTitle text-red-500 bg-yellow-300 px-40 py-1 rotate-[325deg] absolute top-10 left-[-130px] text-lg">New Arrival</div>
                                    <div className="image w-[60%]">
                                        <Image src={product.imageURL} alt='productimg' width={500} height={500} />
                                    </div>
                                    <div className="text">
                                        <p className='paragraphP3'>{product.title}</p>
                                        <p className='paragraphP1'>Price: Rs. {product.price.toLocaleString()}.00</p>
                                    </div>
                                </div>
                                <div className="close absolute top-2 right-2 rounded-full px-1 bg-red-500 text-white" onClick={() => { setShowLandingModal(false) }}><i className='fa-solid fa-close'></i></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LandingModal