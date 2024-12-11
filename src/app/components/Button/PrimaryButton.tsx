import React from 'react'

const PrimaryButton = ({text,width,height,radius}:{text:string,width:number, height:number,radius?:number}) => {
  return (
    <div className='PrimaryButton select-none hover:cursor-pointer paragraphP4 border border-gray-500 flex justify-center items-center' style={{width:`${width}px`, height:`${height}px`, borderRadius:`${radius || '0'}px`}}>{text}</div>
  )
}

export default PrimaryButton