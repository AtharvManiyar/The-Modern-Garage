import React from 'react'
import BuyBikeCards from './BuyBikeCards'
import Navbar from './Navbar'

function BuyBike() {
  return (
    <>
      <Navbar />
        <h1
  className="
    text-4xl font-bold mb-10 text-center relative inline-block mx-auto
    after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
    after:bottom-0 after:w-0 after:h-1 after:bg-blue-600 
    after:transition-all after:duration-300 hover:after:w-3/4
  "
>
  Buy Bikes
</h1>


      <BuyBikeCards />
    </>
  )
}

export default BuyBike
