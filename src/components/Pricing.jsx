import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Growth',
    price: 3,
    desc: 'Para empresas en expansión que necesitan alertas y derivación.',
    features: ['Check-ins diarios', 'Chat 24/7', 'Reportes anónimos'],
  },
//   {
//     name: 'Growth',
//     price: 5,
//     desc: 'Para empresas en expansión que necesitan alertas y derivación.',
//     features: ['Todo en Starter', 'Integraciones Slack/Teams', 'Alertas de riesgo', 'Derivación a humano'],
//     cta: 'Probar gratis',
//     link: '#cta',
//   },
  {
    name: 'Enterprise',
    price: 5,
    desc: 'Soporte premium y configuración a medida.',
    features: ['Todo en Starter', 'Integraciones Slack/Teams', 'Alertas de riesgo', 'Derivación a humano'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 dark:bg-gray-900 py-24 px-6">
      <h2 className="text-center text-3xl md:text-5xl font-bold text-brand-gradient mb-12">
        Precios simples y transparentes
      </h2>
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="mb-4 text-2xl font-semibold text-center">{plan.name}</h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6">{plan.desc}</p>
            <div className="text-center mb-6">
              {typeof plan.price === 'number' ? (
                <span className="text-4xl font-bold">{`$${plan.price} USD`}</span>
              ) : (
                <span className="text-4xl font-bold">{plan.price}</span>
              )}
              {typeof plan.price === 'number' && <span className="text-sm text-gray-500"> / empleado / mes</span>}
            </div>
            <ul className="flex-1 mb-0 space-y-2 text-sm">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-purple-600" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 