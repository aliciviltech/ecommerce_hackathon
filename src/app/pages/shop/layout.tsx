import CartContext from '@/app/context/CartContext'
import React, { ReactNode } from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    {/* <CartContext> */}
        <section>{children}</section>
    {/* </CartContext> */}
    </>
  )
}

export default Layout