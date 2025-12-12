import React from 'react'
import Navbar from '@/components/Navbar'
import ModernStore from '@/pages/ModernStore'
// import Cards from './cards'

const AlloyStickerMS = () => {
  const leds = [
    { id: 1, name: 'Grayfixx Alloy Wheel Radium Sticke', price: '₹700', image: '/st1.jpg', des:'Grayfixx Alloy Wheel Radium Stickers provide classic styling, bright illumination, and durable construction, enhancing visibility and safety for motorcycle riders.' },
    { id: 2, name: 'Grayfixx Alloy wheel Sticker Neon', price: '₹799', image: '/st2.jpg', des:'Grayfixx Alloy wheel Sticker Neon offer compact design, efficient lighting, and robust build quality, ensuring enhanced visibility and safety for motorcycle riders.' },
    { id: 3, name: 'Grayfixx White Alloy Wheel Sticker', price: '₹799', image: '/st3.jpg', des:'Grayfixx White Alloy Wheel Stickers provide high-performance exhaust solutions, enhancing engine efficiency, sound quality, and overall motorcycle performance for enthusiasts seeking superior riding experiences.' },  
]


  return (
    <>
      <Navbar />
      <ModernStore />
      
      <main className='ml-56 pt-4 px-6'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-bold mb-6'>Side Mirrors</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {leds.map((led) => (
              <div key={led.id} className='bg-white rounded-md shadow p-4 flex flex-col h-full min-h-[420px]'>
                <img 
                    src={led.image} 
                    alt={led.name} 
                    className="w-full h-40 object-contain rounded mb-3 bg-gray-100 p-2"
                    loading='lazy'
                />
                <h3 className='font-medium text-lg text-center'>{led.name}</h3>
                <p className='text-gray-600 mb-3 text-center'>{led.des}</p>
                <p className='text-gray-600 mb-3 text-center'>{led.price}</p>
                <button className='w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded mt-auto'>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
    </main>

    </>
  )
}


export default AlloyStickerMS