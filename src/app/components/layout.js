import Navbar from './navbar';
import Footer from './footer';
import WhatsAppCTA from './whatsappCTA';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppCTA />
    </div>
  );
}