import React from 'react'
import Navbar from '@/components/Navbar'
import ModernStore from '@/pages/ModernStore'
import { Heart } from 'lucide-react'

const TailLightMS = () => {
  const leds = [
    { id: 1, name: 'Pulsar 220F Tail Light', price: 1500, image: '/tl1.jpg', des: 'Pulsar 220F Tail Lights provide bright illumination and durable construction.', isNew: true },
    { id: 2, name: 'Honda Hornet Tail Light', price: 1199, image: '/tl2.jpg', des: 'Honda Hornet Tail Lights offer stylish design and reliable performance.', isNew: false },
    { id: 3, name: 'Yamaha R15 v3 Tail Light', price: 1999, image: '/tl3.jpg', des: 'Yamaha R15 v3 Tail Lights deliver sleek aesthetics and bright illumination.', isNew: true },
    { id: 4, name: 'Stripe Tail Light', price: 899, image: '/tl4.jpg', des: 'Stripe Tail Lights provide modern design and efficient lighting.', isNew: false },
    { id: 5, name: 'Rockerz Tail Light with Indicators', price: 1299, image: '/tl5.jpg', des: 'Rockerz Tail Lights with Indicators offer integrated functionality.', isNew: false },
    { id: 6, name: 'Stripe Tail Light with Indicators', price: 999, image: '/tl6.jpg', des: 'Stripe Tail Lights with Indicators provide combined lighting solutions.', isNew: false },
    { id: 7, name: 'RE Classic Tail Light', price: 1899, image: '/tl7.jpg', des: 'Royal Enfield Classic Tail Lights offer vintage aesthetics.', isNew: false },
  ]

  return (
    <>
      <Navbar />
      <ModernStore />

      <main className='ml-64 pt-4 px-6'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-2xl font-bold text-gray-800 mb-6'>Tail Lights</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            {leds.map((led) => (
              <div key={led.id} className="bg-white border border-gray-100 overflow-hidden group hover:shadow-md transition-all duration-200">
                <div className="relative bg-gray-50 p-6" style={{ aspectRatio: '1/1' }}>
                  {led.isNew && (
                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-semibold px-2 py-0.5 uppercase tracking-wide">
                      NEW
                    </span>
                  )}
                  <button className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-3.5 h-3.5 text-gray-400 hover:text-red-500 transition-colors" />
                  </button>
                  <img src={led.image} alt={led.name} className="w-full h-full object-contain" loading='lazy' />
                </div>
                <div className="p-4">
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Tail Light</p>
                  <h3 className="text-sm font-medium text-gray-800 mb-2 truncate">{led.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-900">₹{led.price.toLocaleString('en-IN')}</p>
                    <Heart className="w-4 h-4 text-gray-300 hover:text-red-500 cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default TailLightMS