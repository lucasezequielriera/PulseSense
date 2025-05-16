import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-white/70 backdrop-blur dark:bg-gray-900/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <motion.a
          className="text-2xl font-bold text-brand-gradient"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Pulse<span className="text-purple-600">Sence</span>
        </motion.a>
        {/* <motion.ul
          className="hidden gap-8 text-sm font-medium md:flex"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <li><a href="#features" className="hover:text-brand-gradient">Características</a></li>
          <li><a href="#pricing" className="hover:text-brand-gradient">Precios</a></li>
          <li><a href="#onepager" className="hover:text-brand-gradient">One-Pager</a></li>
          <li><a href="#cta" className="hover:text-brand-gradient">Acceso temprano</a></li>
        </motion.ul> */}
        <a href="https://wa.me/34627043397" target="_blank" rel="noopener noreferrer" className="rounded-md bg-brand-gradient px-4 py-2 text-white shadow-md md:inline-block hidden">Solicitar Información</a>
      </nav>
    </header>
  );
} 