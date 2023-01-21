import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function HomeCarousel() {
  return (
    <div>
         <Carousel>
                <div>
                    <img src="https://m.media-amazon.com/images/I/61UXwldBHHL._SX1500_.jpg" />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/815qo23c2EL._SX3000_.jpg" />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/61QNqVaS5sL._SX3000_.jpg" />
                </div>
        </Carousel>
    </div>
  )
}

export default HomeCarousel