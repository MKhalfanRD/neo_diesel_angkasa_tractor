import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center ">
                <Image 
                  src="/images/logo.png" 
                  alt="NEODIESEL ANGKASA TRACTOR Logo"
                  width={180} 
                  height={180}
                  className="h-16 w-auto"
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-600 transition duration-300">Home</Link>
            <Link href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-600 transition duration-300">About</Link>
            <Link href="/products" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-600 transition duration-300">Products</Link>
            <Link href="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-600 transition duration-300">Contact</Link>
            <Link href="/admin" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-600 transition duration-300">Admin</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-gray-500" 
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}