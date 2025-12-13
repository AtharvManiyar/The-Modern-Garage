import React from 'react'
import Navbar from '@/components/Navbar'
import ModernStore from '@/pages/ModernStore'
import { Heart } from 'lucide-react'

const SideMirrorMS = () => {
  const leds = [
    { id: 1, name: 'Speedwav Mirrors', price: 700, image: '/bm1.jpg', des: 'Speedwav Mirrors provide classic styling with enhanced visibility.', isNew: false },
    { id: 2, name: 'Universal Aluminum Rear View', price: 799, image: '/bm2.jpg', des: 'Universal Aluminum Rear View Mirrors offer compact design.', isNew: true },
    { id: 3, name: 'AUTONEST Handlebar Mirror', price: 1100, image: '/bm3.jpg', des: 'AUTONEST Bike Handlebar Rear View Mirror - Adjustable Rotatable.', isNew: false },
    { id: 4, name: 'RE Classical Mirror', price: 699, image: '/bm4.jpg', des: 'RE Classical Mirror provides retro styling and reliable performance.', isNew: false },
    { id: 5, name: 'Bar End Mirror Set', price: 999, image: '/bm5.jpg', des: 'Bar End Mirror Set offers integrated functionality and stylish design.', isNew: true },
    { id: 6, name: 'Rockerz Mirrors with LED', price: 999, image: '/bm6.jpg', des: 'Rockerz Mirrors with LED Indicator for modern design.', isNew: false },
  ]

  return (
    <>
      <Navbar />
      <ModernStore />

      <main className='ml-64 pt-4 px-6'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-2xl font-bold text-gray-800 mb-6'>Side Mirrors</h1>
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
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Side Mirror</p>
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

export default SideMirrorMS