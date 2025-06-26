// Pages Router: pages/about.js
import Link from 'next/link';
import { FiCheck, FiUsers, FiAward, FiGlobe, FiTruck, FiShield } from 'react-icons/fi';

export default function About() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
            {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-32 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Company</h1>
          <p className="text-xl md:text-2xl text-[#e2e8f0] max-w-3xl mx-auto">
            Your trusted partner in heavy equipment solutions since 2005
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src="https://wallpaperaccess.com/full/3053780.jpg" 
                alt="PT Neodiesel Angkasa Tractor Facility" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#1e293b] mb-6">Company Overview</h2>
              <p className="text-[#475569] mb-6">
                PT Neodiesel Angkasa Tractor was established in 2005 as a specialist provider of heavy equipment parts and machinery solutions. 
                Over the years, we have grown to become one of Indonesia's leading suppliers in the industrial equipment sector.
              </p>
              <p className="text-[#475569] mb-6">
                Our company operates as a multi-supplier in the field of heavy equipment spare parts and heavy duty machinery, 
                providing reliable operational support solutions for various industrial projects.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f1f5f9] p-4 rounded-lg">
                  <h3 className="font-bold text-[#1e293b] mb-2">200+</h3>
                  <p className="text-[#64748b]">Clients Served</p>
                </div>
                <div className="bg-[#f1f5f9] p-4 rounded-lg">
                  <h3 className="font-bold text-[#1e293b] mb-2">50+</h3>
                  <p className="text-[#64748b]">Brand Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 bg-[#f1f5f9]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-4">Our History</h2>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              The journey of our growth and achievements
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline */}
            <div className="border-l-2 border-[#60a5fa] absolute h-full left-1/2 transform -translate-x-1/2"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {/* Item 1 */}
              <div className="relative flex items-center">
                <div className="hidden md:block md:w-1/2"></div>
                <div className="z-10 flex items-center justify-center w-8 h-8 bg-[#60a5fa] rounded-full absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md md:w-5/12 ml-auto border border-[#e2e8f0]">
                  <h3 className="text-xl font-semibold text-[#1e293b] mb-2">2005 - Company Founded</h3>
                  <p className="text-[#475569]">
                    Established as a small supplier of heavy equipment parts in Jakarta, serving local construction companies.
                  </p>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="relative flex items-center">
                <div className="bg-white p-6 rounded-lg shadow-md md:w-5/12 border border-[#e2e8f0]">
                  <h3 className="text-xl font-semibold text-[#1e293b] mb-2">2010 - First Major Contract</h3>
                  <p className="text-[#475569]">
                    Secured our first major contract with a national mining company, marking our entry into the mining sector.
                  </p>
                </div>
                <div className="z-10 flex items-center justify-center w-8 h-8 bg-[#60a5fa] rounded-full absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
              
              {/* Item 3 */}
              <div className="relative flex items-center">
                <div className="hidden md:block md:w-1/2"></div>
                <div className="z-10 flex items-center justify-center w-8 h-8 bg-[#60a5fa] rounded-full absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md md:w-5/12 ml-auto border border-[#e2e8f0]">
                  <h3 className="text-xl font-semibold text-[#1e293b] mb-2">2015 - Warehouse Expansion</h3>
                  <p className="text-[#475569]">
                    Expanded our operations with a new 5,000 sqm warehouse facility to accommodate growing inventory.
                  </p>
                </div>
              </div>
              
              {/* Item 4 */}
              <div className="relative flex items-center">
                <div className="bg-white p-6 rounded-lg shadow-md md:w-5/12 border border-[#e2e8f0]">
                  <h3 className="text-xl font-semibold text-[#1e293b] mb-2">2020 - Digital Transformation</h3>
                  <p className="text-[#475569]">
                    Implemented comprehensive digital systems for inventory management and customer service.
                  </p>
                </div>
                <div className="z-10 flex items-center justify-center w-8 h-8 bg-[#60a5fa] rounded-full absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-4">Our Core Values</h2>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-[#f8fafc] p-6 rounded-lg border border-[#e2e8f0] hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#dbeafe] rounded-full flex items-center justify-center mb-4">
                <FiShield className="text-[#2563eb] text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e293b] mb-3">Integrity</h3>
              <p className="text-[#475569]">
                We conduct our business with honesty and transparency, building trust through ethical practices and clear communication.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-[#f8fafc] p-6 rounded-lg border border-[#e2e8f0] hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#dbeafe] rounded-full flex items-center justify-center mb-4">
                <FiUsers className="text-[#2563eb] text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e293b] mb-3">Customer Focus</h3>
              <p className="text-[#475569]">
                Our clients' success is our success. We listen carefully and respond with solutions tailored to their specific needs.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-[#f8fafc] p-6 rounded-lg border border-[#e2e8f0] hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#dbeafe] rounded-full flex items-center justify-center mb-4">
                <FiAward className="text-[#2563eb] text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e293b] mb-3">Excellence</h3>
              <p className="text-[#475569]">
                We strive for the highest standards in product quality, service delivery, and technical expertise.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-[#f8fafc] p-6 rounded-lg border border-[#e2e8f0] hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#dbeafe] rounded-full flex items-center justify-center mb-4">
                <FiGlobe className="text-[#2563eb] text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e293b] mb-3">Sustainability</h3>
              <p className="text-[#475569]">
                We're committed to environmentally responsible practices and long-term value creation for all stakeholders.
              </p>
            </div>
            
            {/* Value 5 */}
            <div className="bg-[#f8fafc] p-6 rounded-lg border border-[#e2e8f0] hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#dbeafe] rounded-full flex items-center justify-center mb-4">
                <FiTruck className="text-[#2563eb] text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e293b] mb-3">Reliability</h3>
              <p className="text-[#475569]">
                Our clients can depend on us for consistent quality, on-time delivery, and dependable after-sales support.
              </p>
            </div>
            
            {/* Value 6 */}
            <div className="bg-[#f8fafc] p-6 rounded-lg border border-[#e2e8f0] hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#dbeafe] rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-[#2563eb] text-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e293b] mb-3">Innovation</h3>
              <p className="text-[#475569]">
                We continuously improve our processes and solutions to stay ahead in a rapidly evolving industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-[#f1f5f9]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-4">Our Leadership Team</h2>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              Experienced professionals guiding our company's vision
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#e2e8f0]">
              <img src="/team-member-1.jpg" alt="Director" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-lg text-[#1e293b] mb-1">John Smith</h3>
                <p className="text-[#64748b] text-sm mb-3">Director</p>
                <p className="text-[#475569] text-sm">
                  20+ years experience in heavy equipment industry
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#e2e8f0]">
              <img src="/team-member-2.jpg" alt="Operations Manager" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-lg text-[#1e293b] mb-1">Sarah Johnson</h3>
                <p className="text-[#64748b] text-sm mb-3">Operations Manager</p>
                <p className="text-[#475569] text-sm">
                  Logistics and supply chain specialist
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#e2e8f0]">
              <img src="/team-member-3.jpg" alt="Technical Director" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-lg text-[#1e293b] mb-1">Michael Chen</h3>
                <p className="text-[#64748b] text-sm mb-3">Technical Director</p>
                <p className="text-[#475569] text-sm">
                  Mechanical engineer with 15+ years experience
                </p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-[#e2e8f0]">
              <img src="/team-member-4.jpg" alt="Sales Director" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-lg text-[#1e293b] mb-1">David Wilson</h3>
                <p className="text-[#64748b] text-sm mb-3">Sales Director</p>
                <p className="text-[#475569] text-sm">
                  Building client relationships since 2010
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1e40af] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-[#e2e8f0] max-w-2xl mx-auto mb-8">
            Discover how our expertise can support your heavy equipment needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-[#1e40af] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Contact Our Team
            </Link>
            <Link 
              href="/products" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1e293b] transition-colors flex items-center justify-center gap-2"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}