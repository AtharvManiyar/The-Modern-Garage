import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import { Heart } from 'lucide-react'

const ModernStore = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [priceRange, setPriceRange] = useState([0, 150000])
  const [sortBy, setSortBy] = useState('latest')
  const [showInStock, setShowInStock] = useState(true)

  const categories = [
    { id: 'all', name: 'All Products', icon: '📦' },
    { id: 'helmets', name: 'Helmets', icon: '⛑️' },
    { id: 'led-headlight', name: 'LED HeadLight', icon: '💡' },
    { id: 'fog-lamps', name: 'Fog Lamps', icon: '🌫️' },
    { id: 'tail-lights', name: 'TailLight', icon: '🔴' },
    { id: 'crash-guards', name: 'Crash Guards', icon: '🛡️' },
    { id: 'side-mirrors', name: 'Side Mirrors', icon: '🪞' },
    { id: 'exhaust', name: 'Exhaust Systems', icon: '💨' },
    { id: 'stickers', name: 'Alloy Stickers', icon: '🛞' },
  ]

  // All products from all categories with full descriptions
  const allProducts = [
    // LED Headlights
    { id: 1, name: 'AllExtreme 350 Watts', category: 'led-headlight', categoryLabel: 'LED Headlight', price: 1500, image: '/l1.jpg', isNew: true, inStock: true, des: 'AllExtreme 350Watt LED Headlights provide powerful illumination, energy efficiency, and durability, enhancing visibility and safety for night riding.' },
    { id: 2, name: 'NOVSIGHT 430 Watts', category: 'led-headlight', categoryLabel: 'LED Headlight', price: 1999, image: '/l2.jpg', isNew: true, inStock: true, des: 'NOVSIGHT 430Watt LED Headlights deliver superior brightness, long lifespan, and low power consumption, ensuring optimal road visibility and enhanced riding safety.' },
    { id: 3, name: 'RE After Market', category: 'led-headlight', categoryLabel: 'LED Headlight', price: 3999, image: '/l3.jpg', isNew: false, inStock: true, des: 'Royal Enfield Original LED Headlights offer authentic design, exceptional brightness, and reliable performance, perfectly complementing Royal Enfield motorcycles.' },
    { id: 4, name: 'Royal Enfield Original', category: 'led-headlight', categoryLabel: 'LED Headlight', price: 1899, image: '/l4.jpeg', isNew: false, inStock: true, des: 'RE After Market LED Headlights provide an affordable upgrade with improved brightness, energy efficiency, and durability for Royal Enfield riders.' },
    { id: 5, name: 'AllExtreme HeadLight', category: 'led-headlight', categoryLabel: 'LED Headlight', price: 2499, image: '/l5.jpg', isNew: false, inStock: true, des: 'AllExtreme LED Headlights offer high-performance illumination, energy efficiency, and robust construction, ensuring enhanced visibility and safety.' },

    // Helmets - Full Face
    { id: 6, name: 'AGV', category: 'helmets', categoryLabel: 'Full Face Helmet', price: 89500, image: '/fh1.jpg', isNew: true, inStock: true, des: 'AGV helmets deliver superior aerodynamics, advanced impact protection, and lightweight comfort designed for high-performance riding.' },
    { id: 7, name: 'MT THUNDER 5', category: 'helmets', categoryLabel: 'Full Face Helmet', price: 14999, image: '/fh2.jpg', isNew: true, inStock: true, des: 'MT Thunder 5 helmets offer cutting-edge design, enhanced ventilation, and superior safety features for an optimal riding experience.' },
    { id: 8, name: 'STUDDS TROOPER D3', category: 'helmets', categoryLabel: 'Full Face Helmet', price: 9999, image: '/fh3.jpg', isNew: false, inStock: true, des: 'Studds Trooper D3 helmets provide robust protection, ergonomic fit, and stylish design, ensuring safety and comfort for everyday riders.' },
    { id: 9, name: 'Steel Bird Off-Road', category: 'helmets', categoryLabel: 'Full Face Helmet', price: 17899, image: '/fh4.jpg', isNew: false, inStock: true, des: 'Steel Bird Off-Road helmets are engineered for rugged terrains, featuring durable construction and enhanced impact resistance.' },
    { id: 10, name: 'Axor xBhp Bionic Helmet', category: 'helmets', categoryLabel: 'Full Face Helmet', price: 6499, image: '/fh5.jpg', isNew: false, inStock: true, des: 'Axor xBhp Bionic Helmets combine innovative design with advanced safety features, providing exceptional protection and comfort.' },
    { id: 11, name: 'EVO Racing Edition', category: 'helmets', categoryLabel: 'Half Face Helmet', price: 1499, image: '/hh1.jpg', isNew: false, inStock: true, des: 'EVO Racing Edition helmets offer a sleek design, lightweight construction, and essential safety features for urban riders.' },
    { id: 12, name: 'SMK Limited Edition', category: 'helmets', categoryLabel: 'Half Face Helmet', price: 1899, image: '/hh2.png', isNew: true, inStock: true, des: 'SMK Limited Edition helmets provide a perfect blend of comfort and safety for everyday commuting.' },
    { id: 13, name: 'Royal Enfield Half Face', category: 'helmets', categoryLabel: 'Half Face Helmet', price: 1999, image: '/hh3.jpg', isNew: false, inStock: true, des: 'Royal Enfield half-face helmets are designed for classic style and dependable safety.' },
    { id: 14, name: 'Vega 2 in 1', category: 'helmets', categoryLabel: 'Convertible Helmet', price: 2199, image: '/ch1.jpg', isNew: false, inStock: true, des: 'Vega 2 in 1 helmets provide versatile protection with a convertible design for different riding conditions.' },
    { id: 15, name: 'STUDDS Ninja N3', category: 'helmets', categoryLabel: 'Convertible Helmet', price: 1899, image: '/ch2.jpg', isNew: true, inStock: true, des: 'STUDDS Ninja N3 helmets feature a modular design with advanced safety features.' },
    { id: 16, name: 'STUDDS X-Trooper', category: 'helmets', categoryLabel: 'Convertible Helmet', price: 2499, image: '/ch4.jpg', isNew: false, inStock: true, des: 'STUDDS X-Trooper helmets deliver exceptional versatility with a flip-up mechanism and high safety standards.' },

    // Fog Lamps
    { id: 17, name: 'Triple LED Fog Lamp', category: 'fog-lamps', categoryLabel: 'Fog Lamp', price: 1500, image: '/f1.jpg', isNew: true, inStock: true, des: 'Triple LED Fog Lamps provide enhanced road visibility with energy-efficient lighting for low-light conditions.' },
    { id: 18, name: 'Dart Focus Lamp', category: 'fog-lamps', categoryLabel: 'Fog Lamp', price: 999, image: '/f2.jpg', isNew: false, inStock: true, des: 'Dart Focus Fog Lamps offer focused illumination for foggy conditions with reliable performance.' },
    { id: 19, name: 'Bolt 500 Watts', category: 'fog-lamps', categoryLabel: 'Fog Lamp', price: 3999, image: '/f3.jpg', isNew: true, inStock: true, des: 'Bolt 500 Watts Fog Lamps offer powerful illumination with robust build quality for all weather conditions.' },
    { id: 20, name: 'BMW IP68 Fog Lamp', category: 'fog-lamps', categoryLabel: 'Fog Lamp', price: 6899, image: '/f4.jpg', isNew: false, inStock: true, des: 'BMW IP68 Fog Lamps are designed for superior performance with waterproof construction and high-intensity illumination.' },
    { id: 21, name: 'HJG LED', category: 'fog-lamps', categoryLabel: 'Fog Lamp', price: 899, image: '/f5.jpg', isNew: false, inStock: true, des: 'HJG LED Fog Lamps offer bright illumination and energy efficiency at an affordable price.' },

    // Tail Lights
    { id: 22, name: 'Pulsar 220F Tail Light', category: 'tail-lights', categoryLabel: 'Tail Light', price: 1500, image: '/tl1.jpg', isNew: true, inStock: true, des: 'Pulsar 220F Tail Lights provide bright illumination with durable construction for enhanced visibility.' },
    { id: 23, name: 'Honda Hornet Tail Light', category: 'tail-lights', categoryLabel: 'Tail Light', price: 1199, image: '/tl2.jpg', isNew: false, inStock: true, des: 'Honda Hornet Tail Lights offer stylish design and reliable performance for everyday riding.' },
    { id: 24, name: 'Yamaha R15 v3 Tail Light', category: 'tail-lights', categoryLabel: 'Tail Light', price: 1999, image: '/tl3.jpg', isNew: true, inStock: true, des: 'Yamaha R15 v3 Tail Lights deliver sleek aesthetics and bright illumination for sporty bikes.' },
    { id: 25, name: 'Stripe Tail Light', category: 'tail-lights', categoryLabel: 'Tail Light', price: 899, image: '/tl4.jpg', isNew: false, inStock: true, des: 'Stripe Tail Lights provide modern design with efficient lighting solutions.' },
    { id: 26, name: 'Rockerz Tail Light with Indicators', category: 'tail-lights', categoryLabel: 'Tail Light', price: 1299, image: '/tl5.jpg', isNew: false, inStock: true, des: 'Rockerz Tail Lights with Indicators offer integrated functionality with stylish design.' },
    { id: 27, name: 'RE Classic Tail Light', category: 'tail-lights', categoryLabel: 'Tail Light', price: 1899, image: '/tl7.jpg', isNew: false, inStock: true, des: 'Royal Enfield Classic Tail Lights offer vintage aesthetics for classic motorcycles.' },

    // Crash Guards
    { id: 28, name: 'AllExtreme Euro J20', category: 'crash-guards', categoryLabel: 'Crash Guard', price: 2799, image: '/cd1.jpg', isNew: true, inStock: true, des: 'AllExtreme Euro J20 Crash Guards provide robust protection, durable construction, and stylish design for motorcycle safety.' },
    { id: 29, name: 'Royal Piston Sports Bike', category: 'crash-guards', categoryLabel: 'Crash Guard', price: 3999, image: '/cd2.jpg', isNew: false, inStock: true, des: 'Royal Piston Sports Bike Crash Guards offer superior impact resistance with high-quality materials.' },
    { id: 30, name: 'Honda CB Shine SP Chrome', category: 'crash-guards', categoryLabel: 'Crash Guard', price: 800, image: '/cd3.jpg', isNew: false, inStock: true, des: 'Leg Guard Chrome for Honda CB Shine SP provides effective lower body protection with corrosion-resistant finish.' },
    { id: 31, name: 'Dhe Best Heavy Duty', category: 'crash-guards', categoryLabel: 'Crash Guard', price: 3499, image: '/cd4.jpg', isNew: true, inStock: true, des: 'Dhe Best Bike Heavy Duty Crash Guards offer exceptional durability and robust impact protection.' },
    { id: 32, name: 'Dart Crash Guard', category: 'crash-guards', categoryLabel: 'Crash Guard', price: 1999, image: '/cd5.jpg', isNew: false, inStock: true, des: 'Dart Leg Guards provide reliable lower body protection with easy installation.' },
    { id: 33, name: 'KSHEERI ACTIVA 6G', category: 'crash-guards', categoryLabel: 'Crash Guard - Scooty', price: 1500, image: '/cds1.jpg', isNew: false, inStock: true, des: 'KSHEERI ACTIVA 6G Crash Guards offer durable protection with easy installation for scooters.' },
    { id: 34, name: 'Vida V1 Pro Steel', category: 'crash-guards', categoryLabel: 'Crash Guard - Scooty', price: 2199, image: '/cds2.jpg', isNew: true, inStock: true, des: 'Vida V1 Pro Steel Crash Guards provide robust impact resistance with high-quality steel construction.' },

    // Side Mirrors
    { id: 35, name: 'Speedwav Mirrors', category: 'side-mirrors', categoryLabel: 'Side Mirror', price: 700, image: '/bm1.jpg', isNew: false, inStock: true, des: 'Speedwav Mirrors provide classic styling with enhanced visibility and durable construction.' },
    { id: 36, name: 'Universal Aluminum Rear View', category: 'side-mirrors', categoryLabel: 'Side Mirror', price: 799, image: '/bm2.jpg', isNew: true, inStock: true, des: 'Universal Aluminum Rear View Mirrors offer compact design with robust build quality.' },
    { id: 37, name: 'AUTONEST Handlebar Mirror', category: 'side-mirrors', categoryLabel: 'Side Mirror', price: 1100, image: '/bm3.jpg', isNew: false, inStock: true, des: 'AUTONEST Bike Handlebar Rear View Mirror - Adjustable Rotatable Fancy Handle Bar Side Mirror.' },
    { id: 38, name: 'RE Classical Mirror', category: 'side-mirrors', categoryLabel: 'Side Mirror', price: 699, image: '/bm4.jpg', isNew: false, inStock: true, des: 'RE Classical Mirror provides retro styling with reliable performance and enhanced visibility.' },
    { id: 39, name: 'Bar End Mirror Set', category: 'side-mirrors', categoryLabel: 'Side Mirror', price: 999, image: '/bm5.jpg', isNew: true, inStock: true, des: 'Bar End Mirror Set offers integrated functionality with stylish design for modern motorcycles.' },
    { id: 40, name: 'Rockerz Mirrors with LED', category: 'side-mirrors', categoryLabel: 'Side Mirror', price: 999, image: '/bm6.jpg', isNew: false, inStock: true, des: 'Rockerz Mirrors with LED Indicator provide combined lighting solutions with modern design.' },

    // Exhaust Systems
    { id: 41, name: 'SC Project', category: 'exhaust', categoryLabel: 'Exhaust System', price: 25000, image: '/ex1.png', isNew: true, inStock: true, des: 'SC Project Exhaust Systems provide high-performance exhaust solutions, enhancing engine efficiency and sound quality.' },
    { id: 42, name: 'Akrapovic Silence', category: 'exhaust', categoryLabel: 'Exhaust System', price: 79999, image: '/ex2.jpg', isNew: true, inStock: false, des: 'Akrapovic Silence Exhaust Systems offer cutting-edge technology with lightweight construction and superior sound quality.' },
    { id: 43, name: 'Akrapovic Dark', category: 'exhaust', categoryLabel: 'Exhaust System', price: 80000, image: '/ex3.jpg', isNew: false, inStock: true, des: 'Akrapovic Dark Exhaust Systems provide sleek design with enhanced engine efficiency and performance.' },
    { id: 44, name: 'M4 Performance', category: 'exhaust', categoryLabel: 'Exhaust System', price: 6999, image: '/ex4.jpg', isNew: false, inStock: true, des: 'M4 Performance Exhaust Systems deliver enhanced engine performance with aggressive sound.' },
    { id: 45, name: 'Universal Bike Exhaust', category: 'exhaust', categoryLabel: 'Exhaust System', price: 5999, image: '/ex5.jpg', isNew: false, inStock: true, des: 'Universal Bike Exhaust Systems offer versatile fitment and improved performance for various models.' },
    { id: 46, name: 'Scorpion Serket Parallel', category: 'exhaust', categoryLabel: 'Exhaust System', price: 99999, image: '/ex6.jpg', isNew: true, inStock: true, des: 'Scorpion Serket Parallel Slip-On Exhaust Systems provide unique design with high-performance exhaust.' },
    { id: 47, name: 'Scorpion Philippines', category: 'exhaust', categoryLabel: 'Exhaust System', price: 110000, image: '/ex7.jpg', isNew: false, inStock: true, des: 'Scorpion Exhaust Philippines offer cutting-edge technology for motorcycle enthusiasts.' },
    { id: 48, name: 'FVRITO 28mm Exhaust', category: 'exhaust', categoryLabel: 'Exhaust System', price: 11000, image: '/ex8.jpg', isNew: false, inStock: true, des: 'FVRITO 1.1 inch 28mm Exhaust Systems provide high-performance solutions for superior riding.' },

    // Alloy Stickers
    { id: 49, name: 'Grayfixx Radium Sticker', category: 'stickers', categoryLabel: 'Alloy Sticker', price: 700, image: '/st1.jpg', isNew: true, inStock: true, des: 'Grayfixx Alloy Wheel Radium Stickers provide classic styling with bright illumination and durability.' },
    { id: 50, name: 'Grayfixx Neon Sticker', category: 'stickers', categoryLabel: 'Alloy Sticker', price: 799, image: '/st2.jpg', isNew: false, inStock: true, des: 'Grayfixx Alloy Wheel Sticker Neon offers compact design with efficient lighting.' },
    { id: 51, name: 'Grayfixx White Sticker', category: 'stickers', categoryLabel: 'Alloy Sticker', price: 799, image: '/st3.jpg', isNew: false, inStock: true, des: 'Grayfixx White Alloy Wheel Stickers provide high-quality stickers for alloy wheels.' },
  ]

  // Filter products
  const filteredProducts = allProducts.filter(p => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false
    if (showInStock && !p.inStock) return false
    if (p.price < priceRange[0] || p.price > priceRange[1]) return false
    return true
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'latest') return b.id - a.id
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    return 0
  })

  const currentCategory = categories.find(c => c.id === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex pt-20">
        {/* Filter Sidebar */}
        <aside className="w-64 min-h-[calc(100vh-80px)] bg-white border-r border-gray-100 p-6 fixed left-0 top-20 overflow-y-auto">
          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left text-sm rounded transition-colors ${selectedCategory === cat.id
                      ? 'bg-orange-50 text-orange-600 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                  {selectedCategory === cat.id && (
                    <span className="ml-auto text-xs bg-orange-500 text-white px-1.5 py-0.5 rounded">
                      {filteredProducts.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100 my-6" />

          {/* Price Range */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Price Range</h3>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="150000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-50 border border-gray-200 rounded px-3 py-2">
                  <span className="text-xs text-gray-500">₹</span>
                  <span className="text-sm text-gray-700 ml-1">{priceRange[0].toLocaleString('en-IN')}</span>
                </div>
                <span className="text-gray-400">-</span>
                <div className="flex-1 bg-gray-50 border border-gray-200 rounded px-3 py-2">
                  <span className="text-xs text-gray-500">₹</span>
                  <span className="text-sm text-gray-700 ml-1">{priceRange[1].toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6 bg-white rounded-lg p-4 border border-gray-100">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {currentCategory?.icon} {currentCategory?.name}
              </h2>
              <span className="text-sm text-gray-400">
                ({sortedProducts.length} products)
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm font-medium text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
                >
                  <option value="latest">Latest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              <div className="w-px h-5 bg-gray-200" />

              {/* In Stock Toggle */}
              <label className="flex items-center gap-2 cursor-pointer" onClick={() => setShowInStock(!showInStock)}>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${showInStock ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                  {showInStock && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                </div>
                <span className="text-sm text-gray-700">In stock</span>
              </label>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-100 overflow-hidden group hover:shadow-md transition-all duration-200"
              >
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
                  />
                </div>
                <div className="p-4">
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">{product.categoryLabel}</p>
                  <h3 className="text-sm font-medium text-gray-800 mb-2 truncate">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-900">₹{product.price.toLocaleString('en-IN')}</p>
                    <Heart className="w-4 h-4 text-gray-300 hover:text-red-500 cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No products found</p>
              <p className="text-gray-300 text-sm mt-1">Try adjusting your filters</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default ModernStore