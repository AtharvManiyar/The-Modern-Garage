import React from 'react'
import Navbar from '@/components/Navbar'
import ModernStore from '@/pages/ModernStore'
// import Cards from './cards'

const SideMirrorMS = () => {
  const leds = [
    { id: 1, name: 'Speedwav Mirros', price: '₹700', image: '/bm1.jpg', des:'Rockerz Bullet Indicators provide classic styling, bright illumination, and durable construction, enhancing visibility and safety for motorcycle riders.' },
    { id: 2, name: 'Universal Aluminum, Rear View Mirrors Motorcycle Handlebar Side View', price: '₹799', image: '/bm2.jpg', des:'Universal Aluminum, Rear View Mirrors Motorcycle Handlebar Side View offer compact design, efficient lighting, and robust build quality, ensuring enhanced visibility and safety for motorcycle riders.' },
    { id: 3, name: 'AUTONEST Bike Handlebar Rear View Mirror', price: '₹1100', image: '/bm3.jpg', des:'AUTONEST Bike Handlebar Rear View Mirror Adjustable Rotatable Fancy Handle Bar Side Mirror ' },
    { id: 4, name: 'RE Classical Mirror', price: '₹699', image: '/bm4.jpg', des:'RE Classical Mirror provide retro styling, reliable performance, and enhanced visibility, ensuring safety for riders on the road.' },
    { id: 5, name: 'Bar End Mirror Se', price: '₹999', image: '/bm5.jpg', des:'Bar End Mirror Set offer integrated functionality, bright illumination, and stylish design, enhancing both safety and aesthetics for motorcycle riders.' },
    { id: 6, name: 'Rockerz Mirrors with LED Indicator Motorbike ', price: '₹999', image: '/bm6.jpg', des:'Rockerz Mirrors with LED Indicator Motorbike provide combined lighting solutions, modern design, and reliable performance, ensuring enhanced visibility and safety for motorcycle riders.' },
   
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


export default SideMirrorMS