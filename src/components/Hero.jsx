import { motion } from 'framer-motion';
import ChatSimulation from './ChatSimulation';

export default function Hero() {
  function scrollToContact() {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-24 text-center bg-brand-gradient overflow-hidden">
      {/* Decorative blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-pink-400 opacity-30 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-600 opacity-30 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.h1
        className="z-10 max-w-4xl text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        El apoyo que tus empleados necesitan&nbsp;
        <span className="bg-white text-brand-gradient px-2 py-1 rounded-md">24/7</span>
      </motion.h1>
      <motion.p
        className="z-10 mt-4 max-w-xl text-lg md:text-2xl text-white/90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Asistente IA que reduce estrés y potencia la productividad.
      </motion.p>
      {/* Chat simulation */}
      <ChatSimulation />

      <button
        type="button"
        onClick={scrollToContact}
        className="z-10 mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-transform hover:scale-105"
      >
        Quiero contactarme!
      </button>
    </section>
  );
} 