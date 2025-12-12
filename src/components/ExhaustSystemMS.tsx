import React from 'react'
import Navbar from '@/components/Navbar'
import ModernStore from '@/pages/ModernStore'
// import Cards from './cards'

const ExhaustSystemMS = () => {
  const leds = [
    { id: 1, name: 'SC Projector', price: '₹25,000', image: '/ex1.png', des:'SC Project Exhaust Systems provide high-performance exhaust solutions, enhancing engine efficiency, sound quality, and overall motorcycle performance for enthusiasts seeking superior riding experiences.' },
    { id: 2, name: 'Akrapovic Silence', price: '₹79,999', image: '/ex2.jpg', des:'Akrapovic Silence Exhaust Systems offer cutting-edge technology, lightweight construction, and superior sound quality, delivering enhanced performance and an exhilarating riding experience for motorcycle enthusiasts.' },
    { id: 3, name: 'Akrapovic Dark Exhaust', price: '₹80,000', image: '/ex3.jpg', des:'Akrapovic Dark Exhaust Systems provide high-performance exhaust solutions with a sleek design, enhancing engine efficiency, sound quality, and overall motorcycle performance for riders seeking both style and substance.' },
    { id: 4, name: 'M4 Performance Exhaust', price: '₹6,999', image: '/ex4.jpg', des:'M4 Performance Exhaust Systems deliver enhanced engine performance, aggressive sound, and durable construction, providing motorcycle enthusiasts with a superior riding experience and improved aesthetics.' },
    { id: 5, name: 'Universal Bike Exaust', price: '₹5,999', image: '/ex5.jpg', des:'Universal Bike Exhaust Systems offer versatile fitment, improved engine performance, and enhanced sound quality, making them an ideal upgrade for a wide range of motorcycle models.' },
    { id: 6, name: 'Scorpion Serket Parallel Slip-On Exhaust', price: '₹99,999', image: '/ex6.jpg', des:'Scorpion Serket Parallel Slip-On Exhaust Systems provide high-performance exhaust solutions with a unique design, enhancing engine efficiency, sound quality, and overall motorcycle performance for riders seeking both style and substance.' },
    { id: 7, name: 'Scorpion Exhaust Philippines', price: '₹1,10,000', image: '/ex7.jpg', des:'Scorpion Exhaust Philippines offer cutting-edge technology, lightweight construction, and superior sound quality, delivering enhanced performance and an exhilarating riding experience for motorcycle enthusiasts.' },
    { id: 8, name: 'FVRITO 1.1 inch 28mm Exhaus', price: '₹11,000', image: '/ex8.jpg', des:'FVRITO 1.1 inch 28mm Exhaust Systems provide high-performance exhaust solutions, enhancing engine efficiency, sound quality, and overall motorcycle performance for enthusiasts seeking superior riding experiences.' },
]


  return (
    <>
      <Navbar />
      <ModernStore />
      
      <main className='ml-56 pt-4 px-6'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-bold mb-6'>Exchaust System</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {leds.map((led) => (
              <div key={led.id} className='bg-white rounded-md shadow p-4 flex flex-col h-full min-h-[420px]'>
                <img 
                    src={led.image} 
                    alt={led.name} 
                    className="w-full h-40 object-contain rounded mb-3 bg-gray-100 p-2"
                    loading='lazy'
                />
                <h3 className='font-medium text-lg text-center'>{led.name}</h3>
                <p className='text-gray-600 mb-3 text-center'>{led.des}</p>
                <p className='text-gray-600 mb-3 text-center'>{led.price}</p>
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


export default ExhaustSystemMS