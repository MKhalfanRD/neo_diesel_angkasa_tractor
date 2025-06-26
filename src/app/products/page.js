// Pages Router: pages/products.js
import Link from 'next/link';
import { FiShoppingCart, FiSearch, FiClock, FiTruck, FiCheckCircle } from 'react-icons/fi';

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Search */}
      <div className="bg-blue-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">FIND HEAVY EQUIPMENT PARTS</h1>
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search by part number or equipment model..."
              className="w-full py-4 px-6 rounded-lg shadow-md focus:outline-none"
            />
            <FiSearch className="absolute right-4 top-4 text-gray-400 text-xl" />
          </div>
          <p className="text-blue-200 mt-4">Example: CAT 320, Komatsu PC200, Volvo EC220</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="md:w-1/4 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-black">FILTER PARTS</h2>
            
            <div className="mb-6">
              <h3 className="text-gray-500 font-semibold mb-2">Equipment Type</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 text-black" />
                  Excavators
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Bulldozers
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Loaders
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Part Category</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Engine Components
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Hydraulic Systems
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Undercarriage
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Brand</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Caterpillar
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Komatsu
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Volvo
                </label>
              </div>
            </div>
          </div>

          {/* Products List */}
          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">EXCAVATOR PARTS</h2>
              <div className="flex items-center">
                <span className="mr-2">Sort by:</span>
                <select className="border rounded px-3 py-1">
                  <option>Best Match</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Product Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Product 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <img src="/cat-track-roller.jpg" alt="CAT Track Roller" className="h-full object-contain" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg mb-2">CAT Track Roller Assembly</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">In Stock</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">For CAT 320D, 320E Excavators</p>
                  <div className="flex items-center text-yellow-500 mb-3">
                    ★★★★☆ <span className="text-gray-500 text-sm ml-1">(24)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">$399</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
                      <FiShoppingCart className="mr-2" /> Add
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <img src="/komatsu-seal-kit.jpg" alt="Komatsu Seal Kit" className="h-full object-contain" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg mb-2">Komatsu Hydraulic Seal Kit</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">In Stock</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">For PC200-8, PC210-10 Models</p>
                  <div className="flex items-center text-yellow-500 mb-3">
                    ★★★★★ <span className="text-gray-500 text-sm ml-1">(42)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">$295</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
                      <FiShoppingCart className="mr-2" /> Add
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <img src="/volvo-filter.jpg" alt="Volvo Filter" className="h-full object-contain" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg mb-2">Volvo Engine Air Filter</h3>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Low Stock</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">For EC220, EC240 Excavators</p>
                  <div className="flex items-center text-yellow-500 mb-3">
                    ★★★★☆ <span className="text-gray-500 text-sm ml-1">(18)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">$189</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
                      <FiShoppingCart className="mr-2" /> Add
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Packs */}
            <div className="mt-12">
              <h2 className="text-xl font-bold mb-6 text-gray-800">VALUE PACKS</h2>
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-2">Undercarriage Maintenance Kit</h3>
                    <p className="text-gray-600 text-sm mb-3">Includes track rollers, idlers, and seals for CAT 320 series</p>
                    <div className="flex items-center text-green-600 mb-3">
                      <FiCheckCircle className="mr-2" /> Saves 15% vs buying separately
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">$799</span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
                        <FiShoppingCart className="mr-2" /> Add Kit
                      </button>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-2">Hydraulic System Overhaul Kit</h3>
                    <p className="text-gray-600 text-sm mb-3">Complete seal and gasket set for Komatsu PC200</p>
                    <div className="flex items-center text-green-600 mb-3">
                      <FiCheckCircle className="mr-2" /> Saves 20% vs buying separately
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">$950</span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
                        <FiShoppingCart className="mr-2" /> Add Kit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">HOW IT WORKS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FiSearch className="text-2xl" />
              </div>
              <h3 className="font-bold text-lg mb-2">Find Parts</h3>
              <p className="text-gray-600">Search by equipment model or part number</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FiShoppingCart className="text-2xl" />
              </div>
              <h3 className="font-bold text-lg mb-2">Add to Cart</h3>
              <p className="text-gray-600">Select quantity and any special instructions</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FiTruck className="text-2xl" />
              </div>
              <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get parts delivered to your job site</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}