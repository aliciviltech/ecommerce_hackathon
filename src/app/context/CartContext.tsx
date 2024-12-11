'use client'
import {v4 as uuidv4} from 'uuid'
import { AllProductsData } from '@/utils/AllProductsData';
import React, { createContext, ReactNode, useEffect, useState } from 'react'

export const CartContextValue = createContext<any>(undefined);

const CartContext = ({ children }: { children: ReactNode }) => {
    const uniqueID = uuidv4();
    // getting cart data from local storage
    const storedCartItemsJson = localStorage.getItem('cartItems');
    const storedCartItems = storedCartItemsJson ? JSON.parse(storedCartItemsJson): [];
    const [cartItems, setCartItems] = useState<any>(storedCartItems || []);

    // updating cart items to local storage
    const updateLocalStorage = () => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }
    useEffect(() => {   
        updateLocalStorage()
    }, [cartItems])

    
    // adding items to cart
    const addCartItemF = (id:number,quantity:number) => {
        AllProductsData.forEach((product)=>{
            if(product.id === Number(id)){
                setCartItems([...cartItems, {...product, cartId: uniqueID, quantity:quantity }])
            }
        })
        updateLocalStorage()
    }
    
    // deleting items from cart
    const deleteCartItemF = (id: string) => {
        const updatedCartItems = cartItems.filter((item: any) => {
            return (
                item.cartId !== id
            )
        })
        setCartItems(updatedCartItems);
        updateLocalStorage()
    }

    return (
        <CartContextValue.Provider value={{ cartItems, setCartItems, addCartItemF, deleteCartItemF }}>
            {children}
        </CartContextValue.Provider>
    )
}

export default CartContext