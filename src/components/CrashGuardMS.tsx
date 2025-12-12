import React from 'react'
import Navbar from '@/components/Navbar'
import ModernStore from '@/pages/ModernStore'
// import Cards from './cards'

const CrashGuardMS = () => {
  const bike = [
    { id: 1, name: 'AllExtreme Euro J20 Crash Guard', price: '₹2,799', image: '/cd1.jpg', des:'AllExtreme Euro J20 Crash Guards provide robust protection, durable construction, and stylish design, ensuring enhanced safety for motorcycle riders in case of falls or accidents.' },
    { id: 2, name: 'Royal Piston Sports Bike Crash Guard', price: '₹3,999', image: '/cd2.jpg', des:'Royal Piston Sports Bike Crash Guards offer superior impact resistance, high-quality materials, and sleek aesthetics, enhancing both the safety and appearance of sports motorcycles.' },
    { id: 3, name: 'Leg Guard Chrome Compatible with Honda CB Shine SP ', price: '₹800', image: '/cd3.jpg', des:'The Leg Guard Chrome for Honda CB Shine SP provides effective lower body protection, corrosion-resistant chrome finish, and easy installation, ensuring rider safety and style.' },
    { id: 4, name: 'Dhe Best Bike Heavy Duty Crash Guard', price: '₹3,499', image: '/cd4.jpg', des:'Dhe Best Bike Heavy Duty Leg Crash Guards offer exceptional durability, robust impact protection, and a sturdy design, ensuring maximum safety for motorcycle riders during falls or accidents.' },
    { id: 5, name: 'Dart Crash Guard', price: '₹1,999', image: '/cd5.jpg', des:'Dart Leg Guards provide reliable lower body protection, durable construction, and easy installation, enhancing rider safety and comfort during motorcycle rides.' },
   ]

   const scooty = [
    { id: 1, name: 'KSHEERI ACTIVA 6G Crash Guard ', price: '₹1,500', image: '/cds1.jpg', des:'KSHEERI ACTIVA 6G Crash Guards offer durable protection, easy installation, and a sleek design, ensuring enhanced safety for scooter riders in case of falls or accidents.' },
    { id: 2, name: 'Vida V1 Pro Steel Crash Guard', price: '₹2,199', image: '/cds2.jpg', des:'Vida V1 Pro Steel Crash Guards provide robust impact resistance, high-quality steel construction, and stylish aesthetics, enhancing both the safety and appearance of scooters.' },
    { id: 3, name: 'Front & Rear Crash Guard with Frame Slider for Ola S1 Pro, S1 Air, S1 X ', price: '₹3,000', image: '/cds3.jpg', des:'The Front & Rear Crash Guard with Frame Slider for Ola S1 Pro, S1 Air, and S1 X offers comprehensive protection, durable materials, and easy installation, ensuring rider safety and scooter longevity.' },
    { id: 4, name: 'Leg Guard Tvs Ntorq Guard Kit', price: '₹1,499', image: '/cds4.jpg', des:'The Leg Guard for TVS Ntorq provides effective lower body protection, corrosion-resistant finish, and easy installation, ensuring rider safety and style.' },
   ]


  return (
    <>
      <Navbar />
      <ModernStore />
      {/* Bikes */}
      <main className='ml-56 pt-4 px-6'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-bold mb-6'>Crash Guards for Bikes</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {bike.map((bikes) => (
              <div key={bikes.id} className='bg-white rounded-md shadow p-4 flex flex-col h-full min-h-[420px]'>
                <img 
                    src={bikes.image} 
                    alt={bikes.name} 
                    className="w-full h-40 object-contain rounded mb-3 bg-gray-100 p-2"
                    loading='lazy'
                />
                <h3 className='font-medium text-lg text-center'>{bikes.name}</h3>
                <p className='text-gray-600 mb-3 text-center'>{bikes.des}</p>
                <p className='text-gray-600 mb-3 text-center'>{bikes.price}</p>
                <button className='w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded mt-auto'>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
    </main>

        {/* Scooty */}
    <main className='ml-56 pt-24 px-6'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-bold mb-6'>Crash Guards for Scooty</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {scooty.map((scootys) => (
              <div key={scootys.id} className='bg-white rounded-md shadow p-4 flex flex-col h-full min-h-[420px]'>
                <img 
                    src={scootys.image} 
                    alt={scootys.name} 
                    className="w-full h-40 object-contain rounded mb-3 bg-gray-100 p-2"
                    loading='lazy'
                />
                <h3 className='font-medium text-lg text-center'>{scootys.name}</h3>
                <p className='text-gray-600 mb-3 text-center'>{scootys.des}</p>
                <p className='text-gray-600 mb-3 text-center'>{scootys.price}</p>
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


export default CrashGuardMS