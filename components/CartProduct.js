import Image from 'next/image';
import React from 'react'
import { useDispatch } from "react-redux";
import { AddToCart, RemoveFromCart, IncreaseProductQuantity, DecreaseProductQuantity } from "../state_management/actions/cartActions"

function CartProduct({ id, title, image, price, description, category, rating,qty }) {

    const dispatch = useDispatch()

    const AddProductToCart = () => {
        const product = { id, title, image, price, description, category, rating }
        dispatch(AddToCart({ type: "AddToCart", payload: product }))
    }

    const RemoveProductFromCart = () => {
        const productId = { id }
        dispatch(RemoveFromCart({ type: "RemoveFromCart", payload: productId }))
    }

    const IncreaseQuantity = () => {
        const productId = {id}
        dispatch(IncreaseProductQuantity({type:"IncreaseProductQuantity", payload: productId}))
    }

    const DecreaseQuantity = () => {
        const productId = {id}
        dispatch(DecreaseProductQuantity({type:"DecreaseProductQuantity", payload: productId}))
    }

    return (
        <div className='grid grid-cols-5 my-4 p-2'>
            <div className='flex justify-center row-span-2 sm:col-span-1'>
                <Image width={150} height={150} src={image} alt={title} />
            </div>
            <div className='col-span-3 mx-5'>
                <p className='font-medium my-4'>{title}</p>
                <div className='flex flex-row items-center'>
                    {
                        Array(Math.floor(rating)).fill().map(() => (
                            <svg key={Math.random()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                        ))
                    }
                </div>
                <p className="my2 text-sm my-2">{description}</p>
                {/* <p className='font-medium my-3'> ₹ {price} x {qty} = ₹ {price * qty}</p> */}
                <p className='font-medium my-3'>₹ {(price * qty).toFixed(2)}</p>
                
            </div>
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                {/* <button onClick={AddProductToCart} className='font-semibold mt-auto p-2 text-xs from-yellow-200 to-yellow-400  rounded-sm border border-yellow-300 md:text-sm bg-gradient-to-b hover:bg-yellow-500 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500'>Add to Cart</button> */}
                <div className='flex flex-row items-center justify-center align-center'>
                <button onClick={DecreaseQuantity} className={qty > 1 ? 'font-semibold mt-auto p-2 text-xs from-yellow-200 to-yellow-400  rounded-sm border border-yellow-300 md:text-sm bg-gradient-to-b hover:bg-yellow-500 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500' : 'font-semibold mt-auto p-2 text-xs from-gray-200 to-gray-400  rounded-sm border border-gray-300 md:text-sm bg-gradient-to-b hover:bg-yellow-500 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500'}>-</button>
                <p className=' mx-2 items-center border-2 border-gray-200 px-3 py-1'>{qty}</p>
                <button onClick={IncreaseQuantity} className='font-semibold mt-auto p-2 text-xs from-yellow-200 to-yellow-400  rounded-sm border border-yellow-300 md:text-sm bg-gradient-to-b hover:bg-yellow-500 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500'>+</button>
                </div>
                <button onClick={RemoveProductFromCart} className='font-semibold mt-auto p-2 text-xs from-yellow-200 to-yellow-400  rounded-sm border border-yellow-300 md:text-sm bg-gradient-to-b hover:bg-yellow-500 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500'>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CartProduct