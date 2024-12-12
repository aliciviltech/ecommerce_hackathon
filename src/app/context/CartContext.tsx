'use client'
import {v4 as uuidv4} from 'uuid'
import { AllProductsData, CartItemType } from '@/utils/AllProductsData';
import React, { createContext, ReactNode, useEffect, useState } from 'react'

interface CartContextType {
    cartItems:CartItemType[] | [];
    setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
    addCartItemF: (id:number, quantity:number)=>void;
    deleteCartItemF:(id:string)=>void;
}
export const CartContextValue = createContext<CartContextType>({
    cartItems: [],
    setCartItems: ()=>{},
    addCartItemF: ()=>{},
    deleteCartItemF:()=>{}
});




const CartContext = ({ children }: { children: ReactNode }) => {
    const uniqueID = uuidv4();
    // getting cart data from local storage
    
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);

    useEffect(()=>{
        const storedCartItemsJson = localStorage.getItem('cartItems');
        const storedCartItems = storedCartItemsJson ? JSON.parse(storedCartItemsJson): [];
        setCartItems(storedCartItems);
    },[])

    // updating cart items to local storage
    const updateLocalStorage = (items:CartItemType[]) => {
        localStorage.setItem('cartItems', JSON.stringify(items))
    }
    
    // adding items to cart
    const addCartItemF = (id:number,quantity:number) => {
        AllProductsData.forEach((product)=>{
            if(product.id === Number(id)){
                setCartItems([...cartItems, {...product, cartId: uniqueID, quantity:quantity }])
                updateLocalStorage([...cartItems, {...product, cartId: uniqueID, quantity:quantity }])
            }
        })
    }
    
    // deleting items from cart
    const deleteCartItemF = (id: string) => {
        const updatedCartItems = cartItems.filter((item: CartItemType) => {
            return (
                item.cartId !== id
            )
        })
        setCartItems(updatedCartItems);
        updateLocalStorage(updatedCartItems)
    }

    return (
        <CartContextValue.Provider value={{ cartItems, setCartItems, addCartItemF, deleteCartItemF }}>
            {children}
        </CartContextValue.Provider>
    )
}

export default CartContext