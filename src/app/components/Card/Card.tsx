import React from 'react'
import './Card.css'
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
        <div className="image h-[200px]"><img className='w-[100%] w-[100%] h-[100%] object-contain ' src={product.imageURL} alt="" /></div>
        <div className="text">
            <div className="title paragraphP1 px-4">{product.title}</div>
            <div className="price paragraphP3 px-4">Rs: {product.price}.00</div>
        </div>
    </div>

  )
}

export default Card