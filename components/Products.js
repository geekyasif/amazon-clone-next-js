import React from 'react'
import Product from './Product'

function Products({ products }) {

  return (
    <div className='grid grid-flow-row-dense lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4'>
      {
        products.slice(0, 4).map(({ id, title, image, price, description, category, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            image={image}
            price={price}
            category={category}
            rating={rating.rate}
            description={description}

          />
        ))
      }
      <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" className='md:col-span-full w-full' alt="banner" />
      <div className='md:col-span-2'>
        {
          products.slice(4, 5).map(({ id, title, image, price, description, category, rating }) => (
            <Product
              key={id}
              id={id}
              title={title}
              image={image}
              price={price}
              category={category}
              rating={rating.rate}
              description={description}

            />
          ))
        }
      </div>
      {
        products.slice(5, products.length).map(({ id, title, image, price, description, category, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            image={image}
            price={price}
            category={category}
            rating={rating.rate}
            description={description}

          />
        ))
      }
    </div>
  )
}

export default Products