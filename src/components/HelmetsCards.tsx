import React from 'react'
import Navbar from '@/components/Navbar'
import ModernStore from '@/pages/ModernStore'
import { Heart } from 'lucide-react'

const HelmetsCards = () => {
  const fullhelmets = [
    { id: 1, name: 'AGV', price: 89500, image: '/fh1.jpg', des: 'AGV helmets deliver superior aerodynamics, advanced impact protection ,and lightweight comfort designed for high-performance riding.', isNew: true },
    { id: 2, name: 'MT THUNDER 5', price: 14999, image: '/fh2.jpg', des: 'MT Thunder 5 helmets offer cutting-edge design, enhanced ventilation, and superior safety features for an optimal riding experience.', isNew: true },
    { id: 3, name: 'STUDDS TROOPER D3', price: 9999, image: '/fh3.jpg', des: 'Studds Trooper D3 helmets provide robust protection, ergonomic fit, and stylish design, ensuring safety and comfort for everyday riders.', isNew: false },
    { id: 4, name: 'Steel Bird Off-Road', price: 17899, image: '/fh4.jpg', des: 'Steel Bird Off-Road helmets are engineered for rugged terrains, featuring durable construction, superior ventilation, and enhanced impact resistance for adventurous riders.', isNew: false },
    { id: 5, name: 'Axor xBhp Bionic Helmet', price: 6499, image: '/fh5.jpg', des: 'Axor xBhp Bionic Helmets combine innovative design with advanced safety features, providing riders with exceptional protection and comfort on the road.', isNew: false },
  ]

  const halfhelmets = [
    { id: 1, name: 'EVO Racing Edition', price: 1499, image: '/hh1.jpg', des: 'EVO Racing Edition helmets offer a sleek design, lightweight construction, and essential safety features.', isNew: false },
    { id: 2, name: 'SMK Limited Edition', price: 1899, image: '/hh2.png', des: 'SMK Limited Edition helmets provide a perfect blend of comfort and safety for everyday commuting.', isNew: true },
    { id: 3, name: 'Royal Enfield', price: 1999, image: '/hh3.jpg', des: 'Royal Enfield half-face helmets are designed for classic style and dependable safety.', isNew: false },
  ]

  const conhelmets = [
    { id: 1, name: 'Vega 2 in 1', price: 2199, image: '/ch1.jpg', des: 'Vega 2 in 1 helmets provide versatile protection with a convertible design.', isNew: false },
    { id: 2, name: 'STUDDS Ninja N3', price: 1899, image: '/ch2.jpg', des: 'STUDDS Ninja N3 helmets feature a modular design with advanced safety features.', isNew: true },
    { id: 3, name: 'Royal Enfield L2D', price: 1999, image: '/ch3.jpg', des: 'Royal Enfield L2D helmets offer a unique convertible design.', isNew: false },
    { id: 4, name: 'STUDDS X-Trooper', price: 2499, image: '/ch4.jpg', des: 'STUDDS X-Trooper helmets deliver exceptional versatility with a flip-up mechanism.', isNew: false },
  ]

  const ProductCard = ({ product, category }: { product: any, category: string }) => (
    <div className="bg-white border border-gray-100 overflow-hidden group hover:shadow-md transition-all duration-200">
      <div className="relative bg-gray-50 p-6" style={{ aspectRatio: '1/1' }}>
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-semibold px-2 py-0.5 uppercase tracking-wide">
            NEW
          </span>
        )}
        <button className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="w-3.5 h-3.5 text-gray-400 hover:text-red-500 transition-colors" />
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">{category}</p>
        <h3 className="text-sm font-medium text-gray-800 mb-2 truncate">{product.name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-900">₹{product.price.toLocaleString('en-IN')}</p>
          <Heart className="w-4 h-4 text-gray-300 hover:text-red-500 cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Navbar />
      <ModernStore />

      <main className='ml-64 pt-4 px-6'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-2xl font-bold text-gray-800 mb-6'>Full Face Helmets</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12'>
            {fullhelmets.map((helmet) => (
              <ProductCard key={helmet.id} product={helmet} category="Full Face" />
            ))}
          </div>

          <h1 className='text-2xl font-bold text-gray-800 mb-6'>Half Face Helmets</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12'>
            {halfhelmets.map((helmet) => (
              <ProductCard key={helmet.id} product={helmet} category="Half Face" />
            ))}
          </div>

          <h1 className='text-2xl font-bold text-gray-800 mb-6'>Convertible Helmets</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12'>
            {conhelmets.map((helmet) => (
              <ProductCard key={helmet.id} product={helmet} category="Convertible" />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default HelmetsCards