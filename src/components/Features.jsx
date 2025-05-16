import { motion } from 'framer-motion';
import { HiSparkles, HiChartSquareBar, HiChatAlt2 } from 'react-icons/hi';

const features = [
  {
    icon: <HiChatAlt2 className="text-4xl text-pink-500" />,
    title: 'Chat 24/7',
    desc: 'Respuestas inmediatas, cercanas y coherentes para cualquier colaborador, en cualquier momento.'
  },
  {
    icon: <HiChartSquareBar className="text-4xl text-purple-600" />,
    title: 'Reportes anónimos para RRHH',
    desc: 'Datos agregados de estrés, sueño y foco para tomar decisiones sin comprometer la privacidad individual.'
  },
  {
    icon: <HiSparkles className="text-4xl text-yellow-500" />,
    title: 'Derivación inteligente a psicólogos',
    desc: 'Escalamos a un profesional humano solo cuando el algoritmo detecta que es realmente necesario.'
  }
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl py-24 px-6">
      <h2 className="text-center text-3xl md:text-5xl font-bold text-brand-gradient mb-12">
        ¿Por qué PulseSence?
      </h2>
      <div className="grid gap-12 md:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="rounded-xl bg-white dark:bg-gray-800 p-8 shadow-lg border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="mb-2 text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 