import React from 'react'
import Navbar from '@/components/Navbar'
import ModernStore from '@/pages/ModernStore'
// import Cards from './cards'

const HelmetsCards = () => {
  const fullhelmets = [
    { id: 1, name: 'AGV', price: '₹89,500', image: '/fh1.jpg', des:'AGV helmets deliver superior aerodynamics, advanced impact protection ,and lightweight comfort designed for high-performance riding.' },
    { id: 2, name: 'MT THUNDER 5', price: '₹14,999', image: '/fh2.jpg', des:'MT Thunder 5 helmets offer cutting-edge design, enhanced ventilation, and superior safety features for an optimal riding experience.' },
    { id: 3, name: 'STUDDS TROOPER D3', price: '₹9999', image: '/fh3.jpg', des:'Studds Trooper D3 helmets provide robust protection, ergonomic fit, and stylish design, ensuring safety and comfort for everyday riders.' },
    { id: 4, name: 'Steel Bird Off-Road', price: '₹17,899', image: '/fh4.jpg', des:'Steel Bird Off-Road helmets are engineered for rugged terrains, featuring durable construction, superior ventilation, and enhanced impact resistance for adventurous riders.' },
    { id: 5, name: 'Axor xBhp Bionic Helmet', price: '₹6,499', image: '/fh5.jpg', des:'Axor xBhp Bionic Helmets combine innovative design with advanced safety features, providing riders with exceptional protection and comfort on the road.' },
  ]

//   Half Face Helmet Data
    const halfhelmets = [   
    { id: 1, name: 'EVO Racing Edition', price: '₹1,499', image: '/hh1.jpg', des:'EVO Racing Edition helmets offer a sleek design, lightweight construction, and essential safety features, making them ideal for urban riders seeking both style and protection.' },
    { id: 2, name: 'SMK Limited Edition', price: '₹1,899', image: '/hh2.png', des:'SMK Limited Edition helmets provide a perfect blend of comfort and safety, featuring a durable build, modern aesthetics, and reliable protection for everyday commuting.' },
    { id: 3, name: 'Royal Enfield', price: '₹1,999', image: '/hh3.jpg', des:'Royal Enfield half-face helmets are designed for classic style and dependable safety, offering a comfortable fit and essential protective features for riders who value tradition and reliability.' },
  ]

//   Convertable Helmet Data
const conhelmets = [   
    { id: 1, name: 'Vega 2 in 1', price: '₹2,199', image: '/ch1.jpg', des:'Vega 2 in 1 helmets provide versatile protection with a convertible design, allowing riders to switch between full-face and open-face configurations for maximum comfort and safety.' },
    { id: 2, name: 'STUDDS Ninja N3', price: '₹1,899', image: '/ch2.jpg', des:'STUDDS Ninja N3 helmets feature a modular design, combining the benefits of full-face and open-face helmets, along with advanced safety features and superior comfort for diverse riding needs.' },
    { id: 3, name: 'Royal Enfield L2D', price: '₹1,999', image: '/ch3.jpg', des:'Royal Enfield L2D helmets offer a unique convertible design, providing riders with the flexibility to adapt to different riding conditions while ensuring optimal safety and comfort.' },
    { id: 4, name: 'STUDDS X-Trooper', price: '₹2,499', image: '/ch4.jpg', des:'STUDDS X-Trooper helmets deliver exceptional versatility with a flip-up mechanism, allowing riders to enjoy both full-face protection and open-face freedom, all while maintaining high safety standards.' },
  ]

  return (
    <>
      <Navbar />
      <ModernStore />
      
      <main className='ml-56 pt-4 px-6'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-bold mb-6'>Full Face Helmets</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {fullhelmets.map((fullhelmet) => (
              <div key={fullhelmet.id} className='bg-white rounded-md shadow p-4 flex flex-col h-full min-h-[420px]'>
                <img 
                    src={fullhelmet.image} 
                    alt={fullhelmet.name} 
                    className="w-full h-40 object-contain rounded mb-3 bg-gray-100 p-2"
                    loading='lazy'
                />
                <h3 className='font-medium text-lg text-center'>{fullhelmet.name}</h3>
                <p className='text-gray-600 mb-3 text-center'>{fullhelmet.des}</p>
                <p className='text-gray-600 mb-3 text-center'>{fullhelmet.price}</p>
                <button className='w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded mt-auto'>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
    </main>

{/* Half Face Cards */}
    <main className='ml-56 pt-24 px-6'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-bold mb-6'>Half Face Helmets</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {halfhelmets.map((halfhelmet) => (
               <div key={halfhelmet.id} className='bg-white rounded-md shadow p-4 flex flex-col h-full min-h-[420px]'>
                <img 
                    src={halfhelmet.image} 
                    alt={halfhelmet.name} 
                    className="w-full h-40 object-contain rounded mb-3 bg-gray-100 p-2"
                />

                <h3 className='font-medium text-lg text-center'>{halfhelmet.name}</h3>
                <p className='text-gray-600 mb-3 text-center'>{halfhelmet.des}</p>
                <p className='text-gray-600 mb-3 text-center'>{halfhelmet.price}</p>
                <button className='w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded mt-auto'>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Convertable  */}
      <main className='ml-56 pt-24 px-6'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-bold mb-6'>Convertible Helmets</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {conhelmets.map((conhelmet) => (
               <div key={conhelmet.id} className='bg-white rounded-md shadow p-4 flex flex-col h-full min-h-[420px]'>
                <img 
                    src={conhelmet.image} 
                    alt={conhelmet.name} 
                    className="w-full h-40 object-contain rounded mb-3 bg-gray-100 p-2"
                />
                <h3 className='font-medium text-lg text-center'>{conhelmet.name}</h3>
                <p className='text-gray-600 mb-3 text-center'>{conhelmet.des}</p>
                <p className='text-gray-600 mb-3 text-center'>{conhelmet.price}</p>
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

export default HelmetsCards