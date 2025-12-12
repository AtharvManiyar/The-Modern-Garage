import React from 'react'
import Navbar from '@/components/Navbar'
import ModernStore from '@/pages/ModernStore'
// import Cards from './cards'

const TailLightMS = () => {
  const leds = [
    { id: 1, name: 'Pulsar 220F Tail Light', price: '₹1,500', image: '/tl1.jpg', des:'Pulsar 220F Tail Lights provide bright illumination, energy efficiency, and durable construction, enhancing visibility and safety for motorcycle riders.' },
    { id: 2, name: 'Honda Horne Tail Lightt', price: '₹1,199', image: '/tl2.jpg', des:'Honda Hornet Tail Lights offer stylish design, reliable performance, and enhanced visibility, ensuring safety for riders on the road.' },
    { id: 3, name: 'Yamaha R15 v3 Tail Light', price: '₹1,999', image: '/tl3.jpg', des:'Yamaha R15 v3 Tail Lights deliver sleek aesthetics, bright illumination, and robust build quality, enhancing both the look and safety of the motorcycle.' },
    { id: 4, name: 'Stripe Tail Light', price: '₹899', image: '/tl4.jpg', des:'Stripe Tail Lights provide modern design, efficient lighting, and durable construction, ensuring improved visibility and safety for motorcycle riders.' },
    { id: 5, name: 'Rockerz Tail Light with Indicators', price: '₹1,299', image: '/tl5.jpg', des:'Rockerz Tail Lights with Indicators offer integrated functionality, bright illumination, and stylish design, enhancing both safety and aesthetics for motorcycle riders.' },
    { id: 6, name: 'Stripe Tail Light with Indicators', price: '₹999', image: '/tl6.jpg', des:'Stripe Tail Lights with Indicators provide combined lighting solutions, modern design, and reliable performance, ensuring enhanced visibility and safety for motorcycle riders.' },
    { id: 7, name: 'RE Classic Tail Light', price: '₹1,899', image: '/tl7.jpg', des:'Royal Enfield Classic Tail Lights offer vintage aesthetics, bright illumination, and durable construction, enhancing both the look and safety of classic motorcycles.' },
  ]


  return (
    <>
      <Navbar />
      <ModernStore />
      
      <main className='ml-56 pt-4 px-6'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-bold mb-6'>Tail Lights </h1>

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


export default TailLightMS