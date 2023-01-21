import React from 'react'
import Link from 'next/link'

function BottomHeader() {
    return (
        <div>
            <div className='bg-amazon_blue-light text-white items-center flex space-x-5 py-2 px-2 text-md flex-wrap'>

                <div className="flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                    <p className='ml-2'>All</p>
                </div>

                <div className=""><Link href="#">Best Seller</Link></div>
                <div className=""><Link href="#">Mobiles</Link></div>
                <div className=""><Link href="#">Today's Deals</Link></div>
                <div className=""><Link href="#">Customer Service</Link></div>
                <div className=""><Link href="#">Electronics</Link></div>
                <div className=""><Link href="#">Prime</Link></div>
                <div className=""><Link href="#">Home & Kitchen</Link></div>
                <div className=""><Link href="#">Fashion</Link></div>

            </div>
        </div>
    )
}

export default BottomHeader