import React from 'react'
import Navbar from '@/components/Navbar'
import ModernStore from '@/pages/ModernStore'
// import Cards from './cards'

const LEDcards = () => {
  const leds = [
    { id: 1, name: 'AllExtreme 350 Watts', price: '₹1,500', image: '/l1.jpg', des:'AllExtreme 350Watt LED Headlights provide powerful illumination, energy efficiency, and durability, enhancing visibility and safety for night riding.' },
    { id: 2, name: 'NOVSIGHT 430 Watts', price: '₹1,999', image: '/l2.jpg', des:'NOVSIGHT 430Watt LED Headlights deliver superior brightness, long lifespan, and low power consumption, ensuring optimal road visibility and enhanced riding safety.' },
    { id: 3, name: 'RE After Market', price: '₹3,999', image: '/l3.jpg', des:'Royal Enfield Original LED Headlights offer authentic design, exceptional brightness, and reliable performance, perfectly complementing Royal Enfield motorcycles while enhancing night-time visibility.' },
    { id: 4, name: 'Royal Enfield Original', price: '₹1,899', image: '/l4.jpeg', des:'RE After Market LED Headlights provide an affordable upgrade with improved brightness, energy efficiency, and durability, enhancing visibility and safety for Royal Enfield riders.' },
    { id: 5, name: 'AllExtreme HeadLight', price: '₹2,499', image: '/l5.jpg', des:'AllExtreme LED Headlights offer high-performance illumination, energy efficiency, and robust construction, ensuring enhanced visibility and safety for motorcycle riders.' },
  ]


  return (
    <>
      <Navbar />
      <ModernStore />
      
      <main className='ml-56 pt-4 px-6'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-bold mb-6'>LED HeadLights</h1>

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


export default LEDcards