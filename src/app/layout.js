import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import WhatsAppCTA from '@/app/components/whatsappCTA';
import './globals.css';

export const metadata = {
  title: 'NEODIESEL ANGKASA TRACTOR',
  description: 'Your Trusted Partner for Heavy Equipment Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}