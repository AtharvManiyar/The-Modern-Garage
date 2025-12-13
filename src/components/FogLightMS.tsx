import React from 'react'
import Navbar from '@/components/Navbar'
import ModernStore from '@/pages/ModernStore'
import { Heart } from 'lucide-react'

const FogLightMS = () => {
  const leds = [
    { id: 1, name: 'Triple LED Fog Lamp', price: 1500, image: '/f1.jpg', des: 'Triple LED Fog Lamps provide enhanced road visibility with energy-efficient lighting.', isNew: true },
    { id: 2, name: 'Dart Focus Lamp', price: 999, image: '/f2.jpg', des: 'Dart Focus Fog Lamps offer focused illumination for foggy conditions.', isNew: false },
    { id: 3, name: 'Bolt 500 Watts', price: 3999, image: '/f3.jpg', des: 'Bolt 500 Watts Fog Lamps offer powerful illumination and robust build quality.', isNew: true },
    { id: 4, name: 'BMW IP68 Fog Lamp', price: 6899, image: '/f4.jpg', des: 'BMW IP68 Fog Lamps are designed for superior performance with waterproof construction.', isNew: false },
    { id: 5, name: 'HJG LED', price: 899, image: '/f5.jpg', des: 'HJG LED Fog Lamps offer bright illumination and energy efficiency.', isNew: false },
  ]

  return (
    <>
      <Navbar />
      <ModernStore />

      <main className='ml-64 pt-4 px-6'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-2xl font-bold text-gray-800 mb-6'>Fog Lamps</h1>
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
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Fog Lamp</p>
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

export default FogLightMS