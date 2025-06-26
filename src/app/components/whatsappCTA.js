import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppCTA() {
  return (
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
  );
}