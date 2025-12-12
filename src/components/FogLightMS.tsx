import React from 'react'
import Navbar from '@/components/Navbar'
import ModernStore from '@/pages/ModernStore'
// import Cards from './cards'

const FogLightMS = () => {
  const leds = [
    { id: 1, name: 'Triple LED set Fog Lamp', price: '₹1,500', image: '/f1.jpg', des:'Triple LED Fog Lamps provide enhanced road visibility with energy-efficient lighting, durable construction, and improved safety for motorcycle riders in low-light conditions.' },
    { id: 2, name: 'Dart Focus Lamp', price: '₹999', image: '/f2.jpg', des:'Dart Focus Fog Lamps offer focused illumination, robust build quality, and energy efficiency, enhancing visibility and safety for motorcycle riders in foggy or low-light conditions.' },
    { id: 3, name: 'Bolt 500 watts', price: '₹3,999', image: '/f3.jpg', des:'Bolt 500 Watts Fog Lamps offer powerful illumination, robust build quality, and energy efficiency, enhancing visibility and safety for motorcycle riders in foggy or low-light conditions.' },
    { id: 4, name: 'BMW IP68 Fog Lamp', price: '₹6,899', image: '/f4.jpg', des:'BMW IP68 Fog Lamps are designed for superior performance in adverse weather conditions, featuring waterproof construction, high-intensity illumination, and enhanced durability for motorcycle riders.' },
    { id: 5, name: 'HJG LED', price: '₹899', image: '/f5.jpg', des:'HJG LED Fog Lamps offer bright illumination, energy efficiency, and robust construction, ensuring enhanced visibility and safety for motorcycle riders in foggy or low-light conditions.' },
  ]


  return (
    <>
      <Navbar />
      <ModernStore />
      
      <main className='ml-56 pt-4 px-6'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-bold mb-6'>Fog Lamps</h1>

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


export default FogLightMS