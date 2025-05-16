import { motion } from 'framer-motion';

const companies = [
  'StartupXYZ',
  'AgenciaBeta',
  'GlobalCorp',
];

export default function Customers() {
  return (
    <section className="bg-white dark:bg-gray-800 py-16 px-6">
      <h2 className="text-center text-sm font-medium tracking-widest text-gray-500 dark:text-gray-400 uppercase">
        Empresas que confían en el sistema de AI-Companion
      </h2>
      <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-6 md:gap-10">
        {companies.map((name) => (
          <motion.span
            key={name}
            className="text-lg md:text-xl font-semibold text-gray-400 dark:text-gray-600 hover:text-brand-gradient transition-colors"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {name}
          </motion.span>
        ))}
      </div>
    </section>
  );
} 