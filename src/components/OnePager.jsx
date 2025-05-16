import { motion } from 'framer-motion';
import generateOnePager from '../utils/generateOnePager';

export default function OnePager() {
  return (
    <section id="onepager" className="mx-auto max-w-4xl py-24 px-6 text-center">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-brand-gradient mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Descarga nuestro One-Pager
      </motion.h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Toda la información resumida de PulseSence en un PDF listo para compartir con tu equipo directivo.
      </p>
      <button
        onClick={generateOnePager}
        className="mt-8 inline-block rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl"
      >
        Descargar (PDF)
      </button>
      <p className="mt-6 text-sm text-gray-400">English version coming soon.</p>
    </section>
  );
} 