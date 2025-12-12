import React from 'react'

function Cards({props}) {
  return (
    <main className='ml-56 pt-24 px-6'>
        
      <div className='container mx-auto'>
        <h1 className='text-3xl font-bold mb-6'>{title}</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {items.map((item) => (
            <div key={item.id} className='bg-white rounded-md shadow p-4'>
              
              <image src={item.image} alt={item.name} className='w-full h-40 object-cover rounded mb-3' />
              <h3 className='font-medium text-lg'>{item.name}</h3>
              <p className='text-gray-600 mb-3'>{item.price}</p>
              <button className='w-full px-3 py-2 bg-gray-900 text-white rounded'>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Cards