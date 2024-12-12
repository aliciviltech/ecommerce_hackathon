import React from 'react'
import './Card.css'
import Image from 'next/image'
interface ProductType{
    id:number,
    title:string,
    section:string,
    price:number,
    imageURL:string,
}
const Card = ({product}:{product:ProductType}) => {
  return (
    <div className='Card w-[287px] flex flex-col'>
        <div className="image h-[200px]"> <Image className='w-[100%] w-[100%] h-[100%] object-contain ' src={product.imageURL} alt="cardImage" width={400} height={400} /></div>
        <div className="text">
            <div className="title paragraphP1 px-4">{product.title}</div>
            <div className="price paragraphP1 text-[var(--secondaryColor)] px-4">Rs: {product.price.toLocaleString()}.00</div>
        </div>
    </div>

  )
}

export default Card