// Pages Router: pages/index.js
import Link from 'next/link';
import { FiShoppingCart, FiPhone, FiMail, FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-32 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">YOUR TRUSTED PARTNER FOR HEAVY EQUIPMENT SOLUTIONS</h1>
          <p className="text-xl md:text-2xl mb-8">Providing high-quality spare parts and machinery for construction, mining, and industrial sectors</p>
          <Link 
            href="/products" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg inline-flex items-center gap-2 hover:bg-gray-100 font-semibold text-lg transition duration-300"
          >
            <FiShoppingCart /> View Product Catalog
          </Link>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Company</h2>
              <p className="text-gray-600 mb-6">PT NEODIESEL ANGKASA TRACTOR is a multi-supplier company in the field of heavy equipment spare parts and heavy duty machinery, ready to play a role as a reliable and trusted operational support solution.</p>
              <p className="text-gray-600 mb-6">We serve as a strategic partner in providing high-quality products and the best services for players in the construction, mining, manufacturing, marine, energy, and infrastructure industries.</p>
              <Link href="/about" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
                Learn more about us <span className="ml-1">→</span>
              </Link>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <img src="https://wallpapercave.com/wp/wp2286148.jpg" alt="Heavy Equipment" className="rounded-lg shadow-xl w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Vision, Mission & Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl text-black font-semibold mb-3">Vision</h3>
              <p className="text-gray-600">To become a trusted and reliable company recognized for its reliability, integrity, and innovation in providing solutions to meet goods needs in the infrastructure, construction, mining, and manufacturing industries in Indonesia.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl text-black font-semibold mb-3">Mission</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Offer high-quality products at competitive prices</li>
                <li>Build long-term relationships through professional service</li>
                <li>Support the growth of national industrial sectors</li>
                <li>Innovate in procurement and distribution</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl text-black font-semibold mb-3">Core Values</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li><span className="font-medium">Integrity</span> - Transparent & trustworthy</li>
                <li><span className="font-medium">Synergy</span> - Collaboration between units</li>
                <li><span className="font-medium">Innovation</span> - Always developing</li>
                <li><span className="font-medium">Excellence</span> - High quality standards</li>
                <li><span className="font-medium">Sustainability</span> - Sustainable and responsible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner With Us?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FiCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p>We provide high-quality technical goods for civil, industrial, and construction needs.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Prices</h3>
              <p>We offer a wide selection of products at competitive prices.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p>Your company will be served by a team of experts with extensive experience.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Efficient Delivery</h3>
              <p>We help meet your material needs quickly through land, sea, and air distribution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
          
          <div className="max-w-md mx-auto bg-gray-100 p-8 rounded-lg">
            <div className="flex items-center text-black mb-6">
              <FiPhone className="text-blue-600 mr-4" size={24} />
              <span>+62 851 2977 2891</span>
            </div>
            <div className="flex items-center text-black">
              <FiMail className="text-blue-600 mr-4" size={24} />
              <span>info.neodieselangkasatractor30@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <div className="fixed bottom-6 right-6">
        <a
          href="https://wa.me/6285129772891?text=Halo,%20saya%20tertarik%20dengan%20produk%20PT%20Neodiesel%20Angkasa%20Tractor"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </div>
  );
}