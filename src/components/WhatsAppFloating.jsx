import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/34627043397"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 md:hidden flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
} 