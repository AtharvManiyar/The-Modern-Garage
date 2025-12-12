import React from 'react'
import Navbar from '@/components/Navbar'
import ModernStore from '@/pages/ModernStore'

const RidingGearsCards = () => {
  const Jacket = [
    { id: 1, name: 'TVS ', price: '₹89,500', image: '/j1.jpg', des: 'High-quality riding jacket with armor protection and ventilation.' },
    { id: 2, name: 'REVIT', price: '₹14,999', image: '/j2.jpg', des: 'Durable riding jacket with CE-certified armor and waterproof features.' },
    { id: 3, name: 'RYNOX', price: '₹9999', image: '/j3.jpg', des: 'Lightweight riding jacket with mesh panels for breathability and comfort.' },
    { id: 4, name: 'DUHAN Racing', price: '₹17,899', image: '/j4.jpeg', des: 'Stylish riding jacket with reinforced stitching and multiple pockets.' },
    { id: 5, name: 'AllExtrema Turbo', price: '₹12,499', image: '/j5.jpg', des: 'Affordable riding jacket with removable liners and adjustable fit.' },
  ]

    const pants = [   
    { id: 1, name: 'Rider Double Protection', price: '₹12,499', image: '/p1.jpg', des: 'Durable riding pants with reinforced knee armor and abrasion-resistant fabric.' },
    { id: 2, name: 'RYNOX', price: '₹9,499', image: '/p2.jpg', des: 'Comfortable riding pants with stretch panels and ventilation for all-day wear.' },
    { id: 3, name: 'AROXt', price: '₹8,499', image: '/.png', des: 'Stylish riding pants with CE-certified armor and multiple pockets for convenience.' },
  ]

const gloves = [   
    { id: 1, name: 'Rider Glovers', price: '₹2,499', image: '/g1.jpg', des: 'Durable riding gloves with reinforced knuckles and touchscreen compatibility.' },
    { id: 2, name: 'RYNOX Ultra', price: '₹5,499', image: '/g2.jpg', des: 'Comfortable riding gloves with breathable fabric and adjustable wrist closure.' },
    { id: 3, name: 'Arox Dark', price: '₹1,499', image: '/g3.jpg', des: 'Stylish riding gloves with padded palms and reflective elements for visibility.' },
    { id: 4, name: 'Autofy FANTOM Bike Riding Gloves', price: '₹3,499', image: '/g4.jpg', des: 'High-performance riding gloves with carbon fiber knuckles and reinforced fingertips.' },
  ]

const shoes= [   
    { id: 1, name: 'BBG Dual Safty', price: '₹10,999', image: '/s1.jpg', des: 'Durable riding shoes with reinforced toe and ankle protection for safety.' },
    { id: 2, name: 'Arox Street', price: '₹5,499', image: '/s2.jpg', des: 'Comfortable riding shoes with breathable mesh and non-slip sole for all-day wear.' },
    { id: 3, name: 'RYNOX', price: '₹2,499', image: '/s3.jpg', des: 'Stylish riding shoes with waterproof features and adjustable straps for a secure fit.' },
    { id: 4, name: 'Arox pro', price: '₹12,499', image: '/s4.jpg', des: 'High-performance riding shoes with impact-resistant sole and reflective elements for visibility.' },
  ]

  return (
    <>
      <Navbar />
      <ModernStore />
      
      <main className='ml-56 pt-4 px-6 '>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-bold mb-6'>Riding Jackets</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {Jacket.map((Jackets) => (
              <div key={Jackets.id} className='bg-white rounded-md shadow p-4 flex flex-col h-full min-h-[420px]'>
                
                <img 
                    src={Jackets.image} 
                    alt={Jackets.name} 
                    className="w-full h-40 object-contain rounded mb-3 bg-gray-100 p-2"
                    loading='lazy'
                />
                <h3 className='font-medium text-lg text-center'>{Jackets.name}</h3>
                <p className="text-gray-600 mb-3 text-center min-h-[60px]">{Jackets.des}</p>
                <p className='text-gray-600 mb-3 text-center'>{Jackets.price}</p>
                <button className='w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded mt-auto'>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
    </main>

{/* Riding Pants */}
    <main className='ml-56 pt-24 px-6'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-bold mb-6'>Riding Pants</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {pants.map((pant) => (
             <div key={pant.id} className='bg-white rounded-md shadow p-4 flex flex-col h-full min-h-[420px]'>
                <img 
                    src={pant.image} 
                    alt={pant.name} 
                   className="w-full h-40 object-contain rounded mb-3 bg-gray-100 p-2"
                />

                <h3 className='font-medium text-lg text-center'>{pant.name}</h3>
                <p className="text-gray-600 mb-3 text-center min-h-[60px]">{pant.des}</p>
                <p className='text-gray-600 mb-3 text-center'>{pant.price}</p>
                <button className='w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded mt-auto'>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Gloves  */}
      <main className='ml-56 pt-24 px-6'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-bold mb-6'>Riding Gloves</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {gloves.map((glove) => (
              <div key={glove.id} className='bg-white rounded-md shadow p-4 flex flex-col h-full min-h-[420px]'>
                <img 
                    src={glove.image} 
                    alt={glove.name} 
                    className="w-full h-40 object-contain rounded mb-3 bg-gray-100 p-2"
                />
                <h3 className='font-medium text-lg text-center'>{glove.name}</h3>
                <p className="text-gray-600 mb-3 text-center min-h-[60px]">{glove.des}</p>
                <p className='text-gray-600 mb-3 text-center'>{glove.price}</p>
                <button className='w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded mt-auto'>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Shoes  */}
      <main className='ml-56 pt-24 px-6'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-bold mb-6'>Riding Shoes</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {shoes.map((shoe) => (
              <div key={shoe.id} className='bg-white rounded-md shadow p-4 flex flex-col h-full min-h-[420px]'>
                <img 
                    src={shoe.image} 
                    alt={shoe.name} 
                    className="w-full h-40 object-contain rounded mb-3 bg-gray-100 p-2"
                />
                <h3 className='font-medium text-lg text-center'>{shoe.name}</h3>
                <p className="text-gray-600 mb-3 text-center min-h-[60px]">{shoe.des}</p>
                <p className='text-gray-600 mb-3 text-center'>{shoe.price}</p>
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

export default RidingGearsCards