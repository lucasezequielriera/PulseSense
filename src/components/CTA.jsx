import { motion } from 'framer-motion';
import { useState } from 'react';
import useLead from '../hooks/useLead';

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', employees: '' });
  const { saveLead, loading, error, success } = useLead();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email) return;
    saveLead(form);
  };

  return (
    <section id="cta" className="bg-purple-600 py-20 px-4 text-center text-white">
      <motion.h2
        className="text-3xl md:text-5xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Sé el primero en probar PulseSence
      </motion.h2>
      <motion.p
        className="mx-auto mt-4 max-w-2xl text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Únete a la lista de espera exclusiva y recibe acceso anticipado, novedades y beneficios especiales.
      </motion.p>

      <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-lg flex-col gap-4 md:flex-row md:items-center md:gap-0">
        <input
          type="text"
          required
          placeholder="Nombre y apellido"
          className="w-full rounded-md px-4 py-3 text-gray-900 focus:outline-none"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          required
          min="1"
          placeholder="Nº de empleados"
          className="w-full rounded-md px-4 py-3 text-gray-900 focus:outline-none"
          value={form.employees}
          onChange={(e) => setForm({ ...form, employees: e.target.value })}
        />
        <input
          type="email"
          required
          placeholder="Correo corporativo"
          className="w-full rounded-md px-4 py-3 text-gray-900 focus:outline-none"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-r-md bg-brand-gradient px-6 py-3 font-semibold text-white md:rounded-l-none"
        >
          {loading ? 'Enviando...' : success ? '¡Enviado!' : 'Probar gratis 14 días'}
        </button>
      </form>
      {error && <p className="mt-4 text-sm text-red-200">{error}</p>}
      {success && <p className="mt-4 text-sm text-green-200">¡Gracias por unirte! 🎉</p>}
    </section>
  );
} 