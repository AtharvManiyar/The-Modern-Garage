import React from 'react'
import Navbar from '@/components/Navbar'
import ModernStore from '@/pages/ModernStore'
import { Heart } from 'lucide-react'

const CrashGuardMS = () => {
  const bike = [
    { id: 1, name: 'AllExtreme Euro J20', price: 2799, image: '/cd1.jpg', des: 'AllExtreme Euro J20 Crash Guards provide robust protection and stylish design.', isNew: true },
    { id: 2, name: 'Royal Piston Sports Bike', price: 3999, image: '/cd2.jpg', des: 'Royal Piston Sports Bike Crash Guards offer superior impact resistance.', isNew: false },
    { id: 3, name: 'Honda CB Shine SP Chrome', price: 800, image: '/cd3.jpg', des: 'Leg Guard Chrome for Honda CB Shine SP provides effective protection.', isNew: false },
    { id: 4, name: 'Dhe Best Heavy Duty', price: 3499, image: '/cd4.jpg', des: 'Dhe Best Bike Heavy Duty Crash Guards offer exceptional durability.', isNew: true },
    { id: 5, name: 'Dart Crash Guard', price: 1999, image: '/cd5.jpg', des: 'Dart Leg Guards provide reliable protection and easy installation.', isNew: false },
  ]

  const scooty = [
    { id: 1, name: 'KSHEERI ACTIVA 6G', price: 1500, image: '/cds1.jpg', des: 'KSHEERI ACTIVA 6G Crash Guards offer durable protection for scooters.', isNew: false },
    { id: 2, name: 'Vida V1 Pro Steel', price: 2199, image: '/cds2.jpg', des: 'Vida V1 Pro Steel Crash Guards provide robust impact resistance.', isNew: true },
    { id: 3, name: 'Ola S1 Pro Frame Slider', price: 3000, image: '/cds3.jpg', des: 'Front & Rear Crash Guard with Frame Slider for Ola S1 Pro.', isNew: false },
    { id: 4, name: 'TVS Ntorq Guard Kit', price: 1499, image: '/cds4.jpg', des: 'Leg Guard for TVS Ntorq provides effective lower body protection.', isNew: false },
  ]

  return (
    <>
      <Navbar />
      <ModernStore />

      <main className='ml-64 pt-4 px-6'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-2xl font-bold text-gray-800 mb-6'>Crash Guards for Bikes</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12'>
            {bike.map((item) => (
              <div key={item.id} className="bg-white border border-gray-100 overflow-hidden group hover:shadow-md transition-all duration-200">
                <div className="relative bg-gray-50 p-6" style={{ aspectRatio: '1/1' }}>
                  {item.isNew && (
                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-semibold px-2 py-0.5 uppercase tracking-wide">
                      NEW
                    </span>
                  )}
                  <button className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-3.5 h-3.5 text-gray-400 hover:text-red-500 transition-colors" />
                  </button>
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" loading='lazy' />
                </div>
                <div className="p-4">
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Crash Guard - Bike</p>
                  <h3 className="text-sm font-medium text-gray-800 mb-2 truncate">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-900">₹{item.price.toLocaleString('en-IN')}</p>
                    <Heart className="w-4 h-4 text-gray-300 hover:text-red-500 cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h1 className='text-2xl font-bold text-gray-800 mb-6'>Crash Guards for Scooty</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            {scooty.map((item) => (
              <div key={item.id} className="bg-white border border-gray-100 overflow-hidden group hover:shadow-md transition-all duration-200">
                <div className="relative bg-gray-50 p-6" style={{ aspectRatio: '1/1' }}>
                  {item.isNew && (
                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-semibold px-2 py-0.5 uppercase tracking-wide">
                      NEW
                    </span>
                  )}
                  <button className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-3.5 h-3.5 text-gray-400 hover:text-red-500 transition-colors" />
                  </button>
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" loading='lazy' />
                </div>
                <div className="p-4">
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Crash Guard - Scooty</p>
                  <h3 className="text-sm font-medium text-gray-800 mb-2 truncate">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-900">₹{item.price.toLocaleString('en-IN')}</p>
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

export default CrashGuardMS