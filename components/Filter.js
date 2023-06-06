import React from 'react'
import PriceFilter from './PriceFilter'
import RatingFilter from './RatingFilter'
import CategoryFilter from './CategoryFilter'

function Filter({products}) {
  return (
    <div className=' bg-white p-2 m-3 rounded h-full'>
      <p className='font-semibold text-xl ml-3 my-4'>Filter</p>
      <hr/>
        <PriceFilter products={products}/>
        <RatingFilter products={products}/>
        <CategoryFilter products={products}/>
    </div>
  )
}

export default Filter