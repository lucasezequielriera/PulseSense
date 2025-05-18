import { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaRegCommentDots } from 'react-icons/fa';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        setError('No se pudo enviar. Intenta nuevamente.');
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-900 py-12 px-6">
      <h2 className="text-center text-3xl md:text-5xl font-bold text-brand-gradient mb-8">Contacto</h2>
      <div className="mx-auto max-w-2xl rounded-xl bg-white dark:bg-gray-800 shadow-xl p-8">
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700 dark:text-gray-200" htmlFor="name">Nombre</label>
            <div className="relative">
              <FaUser className="absolute left-3 inset-y-0 my-auto text-gray-400 pointer-events-none h-5 w-5" />
              <input
                id="name"
                type="text"
                required
                className="w-full rounded-md border border-gray-300 pl-12 pr-4 py-3 text-gray-900 dark:text-gray-100 dark:bg-gray-700 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-shadow"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700 dark:text-gray-200" htmlFor="email">Correo</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 inset-y-0 my-auto text-gray-400 pointer-events-none h-5 w-5" />
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-md border border-gray-300 pl-12 pr-4 py-3 text-gray-900 dark:text-gray-100 dark:bg-gray-700 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-shadow"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700 dark:text-gray-200" htmlFor="message">Mensaje</label>
            <div className="relative">
              <FaRegCommentDots className="absolute left-3 top-4 text-gray-400 pointer-events-none h-5 w-5" />
              <textarea
                id="message"
                required
                rows="4"
                className="w-full rounded-md border border-gray-300 pl-12 pr-4 py-3 text-gray-900 dark:text-gray-100 dark:bg-gray-700 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-shadow"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mx-auto rounded-full bg-brand-gradient px-10 py-3 font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-transform disabled:opacity-70"
          >
            {loading ? 'Enviando...' : sent ? '¡Enviado!' : 'Enviar'}
          </button>
          {error && <p className="text-center text-sm text-red-600">{error}</p>}
        </motion.form>
      </div>
    </section>
  );
} 