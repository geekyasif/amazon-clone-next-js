import React from 'react'
import Image from 'next/image'
import { useSelector } from "react-redux"
import Link from 'next/link'


function TopHeader() {

    const products = useSelector(state => state.cart.products)

    return (
        <div className='sticky top-0 z-30'>
            <div className='flex items-center bg-amazon_blue-default py-2 flex-grow p-1'>
                <Link href="/">
                    <div className='flex flex-grow mt-2 items-center sm:flex-grow-0 mr-2'>
                        <Image
                            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                            width={110}
                            height={40}
                            objectfit="contain"
                            className='cursor-pointer'
                            alt="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        />
                    </div>
                </Link>
                {/* search input  */}
                <div className='hidden items-center bg-yellow-400 sm:flex h-10 rounded-md flex-grow cursor-pointer hover:bg-yellow-500'>
                    <input className='p-2 w-6 flex-grow h-full flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 p-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>

                {/* right header menu  */}
                <div className='text-white flex items-center text-sm space-x-6 mx-6'>
                    <div className='link'>
                        <p>Hello Mohmmad Asif</p>
                        <p className='font-extrabold md:text-sm'>Account & List</p>
                    </div>
                    <div className='link'>
                        <p>Returns</p>
                        <p className='font-extrabold md:text-sm'>& Orders</p>
                    </div>
                    <Link href="/Cart">
                        <div className='relative link'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <p className='absolute top-0 right-0 w-5 bg-yellow-400 text-center rounded-full text-black font-bold'>{products.length}</p>



                            <p className='hidden  md:inline font-extrabold md:text-sm mt-2'>Cart</p>
                        </div>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default TopHeader