import React from 'react'
import Navbar from '@/components/Navbar'
import ModernStore from '@/pages/ModernStore'
import { Heart } from 'lucide-react'

const ExhaustSystemMS = () => {
  const leds = [
    { id: 1, name: 'SC Project', price: 25000, image: '/ex1.png', des: 'SC Project Exhaust Systems provide high-performance exhaust solutions.', isNew: true },
    { id: 2, name: 'Akrapovic Silence', price: 79999, image: '/ex2.jpg', des: 'Akrapovic Silence Exhaust Systems offer cutting-edge technology.', isNew: true },
    { id: 3, name: 'Akrapovic Dark', price: 80000, image: '/ex3.jpg', des: 'Akrapovic Dark Exhaust Systems provide sleek design.', isNew: false },
    { id: 4, name: 'M4 Performance', price: 6999, image: '/ex4.jpg', des: 'M4 Performance Exhaust Systems deliver enhanced engine performance.', isNew: false },
    { id: 5, name: 'Universal Bike Exhaust', price: 5999, image: '/ex5.jpg', des: 'Universal Bike Exhaust Systems offer versatile fitment.', isNew: false },
    { id: 6, name: 'Scorpion Serket Parallel', price: 99999, image: '/ex6.jpg', des: 'Scorpion Serket Parallel Slip-On Exhaust Systems.', isNew: true },
    { id: 7, name: 'Scorpion Philippines', price: 110000, image: '/ex7.jpg', des: 'Scorpion Exhaust Philippines offer cutting-edge technology.', isNew: false },
    { id: 8, name: 'FVRITO 28mm Exhaust', price: 11000, image: '/ex8.jpg', des: 'FVRITO 1.1 inch 28mm Exhaust Systems.', isNew: false },
  ]

  return (
    <>
      <Navbar />
      <ModernStore />

      <main className='ml-64 pt-4 px-6'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-2xl font-bold text-gray-800 mb-6'>Exhaust Systems</h1>
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
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Exhaust System</p>
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

export default ExhaustSystemMS