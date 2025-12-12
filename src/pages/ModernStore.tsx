import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import ReactIcons from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'

const ModernStore = () => {
  const navigate = useNavigate()



  const categories = [
    { name: 'Riding Gears', path: '/modern-store/riding-gears' },
    { name: 'Helmets', path: '/modern-store/helmets' },
    { name: 'LED HeadLight', path: '/modern-store/led-headlight' },
    { name: 'Fog Lamps', path: '/modern-store/fog-lamps' },
    { name: 'TailLight', path: '/modern-store/taillight' },
    { name: 'Indicators', path: '/modern-store/indicators' },
    { name: 'Crash Guards', path: '/modern-store/crash-guards' },
    { name: 'Side Mirrors', path: '/modern-store/side-mirrors' },
    { name: 'Exhaust Systems', path: '/modern-store/exhaust' },
    { name: 'Alloy Wheel Stickers', path: '/modern-store/stickers' },
  ]

  return (
    <>
      <Navbar />
      <aside className='w-56 h-full fixed top-20 left-0 bg-gray-100 p-4'>
        <div className='bg-white rounded-md shadow p-4 h-full overflow-auto '>

          {/* Search Box*/}
          <div className='mb-4'>
            <input
              type='text'
              placeholder='Search...'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <FaSearch className='absolute right-10 top-11   text-gray-400 flex-auto'/>
          </div>

          
          <h2 className='font-semibold mb-2'>Categories</h2>

          <ul className='w-full space-y-2 '>
            {categories.map((category) => (
              <li key={category.name} className='border-b-2'>
                <button
                  onClick={() => navigate(category.path)}
                  className='w-full text-left cursor-pointer px-3 py-2 rounded-md hover:bg-gray-200'
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className='ml-56 pt-24 px-6'>
        <div className='container mx-auto mb-2'>
          <h1 className='text-5xl font-bold mb-6 text-center text-orange-500 animate-bounce'>Welcome to the Modern Store !!</h1>
          <p className='text-gray-700 text-center'>
            Explore our wide range of motorcycle accessories and riding gear. Select a category from the sidebar to start shopping!
          </p>
        </div>
      </main>
    </>
  )
}

export default ModernStore