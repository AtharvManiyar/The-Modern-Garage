import React from 'react'
import Navbar from '@/components/Navbar'
import ModernStore from '@/pages/ModernStore'
// import Cards from './cards'

const IndicatorMS = () => {
  const leds = [
    { id: 1, name: 'Rockers Bullet Indicators', price: '₹500', image: '/i1.jpg',des:'Rockerz Bullet Indicators provide classic styling, bright illumination, and durable construction, enhancing visibility and safety for motorcycle riders.' },
    { id: 2, name: 'Mini Indicators', price: '₹799', image: '/i2.jpg', des:'Mini Indicators offer compact design, efficient lighting, and robust build quality, ensuring enhanced visibility and safety for motorcycle riders.' },
    { id: 3, name: 'RE Indicators Classic', price: '₹1100', image: '/i3.jpg',des:'Royal Enfield Classic Indicators deliver vintage aesthetics, bright illumination, and durable construction, enhancing both the look and safety of classic motorcycles.' },
    { id: 4, name: 'Old Schooled Pulsar Indicators', price: '₹499', image: '/i4.jpg', des:'Old Schooled Pulsar Indicators provide retro styling, reliable performance, and enhanced visibility, ensuring safety for riders on the road.' },
    { id: 5, name: 'Faring Indicators', price: '₹999', image: '/i5.jpg', des:'Faring Indicators offer integrated functionality, bright illumination, and stylish design, enhancing both safety and aesthetics for motorcycle riders.' },
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


export default IndicatorMS