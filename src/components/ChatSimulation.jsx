import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle, FaRobot } from 'react-icons/fa';

const conversation = [
  { sender: 'user', text: 'Hola PulseSence, estoy saturado con el sprint y no rindo.' },
  { sender: 'ai', text: 'Entiendo. ¿Qué tarea te presiona más ahora mismo?' },
  { sender: 'user', text: 'La presentación para el cliente del viernes.' },
  { sender: 'ai', text: 'Probemos técnica Pomodoro: 25 min foco + 5 min descanso. ¿Te sumas?' },
  { sender: 'user', text: 'De una, ¡vamos!' },
];

export default function ChatSimulation() {
  const [messages, setMessages] = useState([]);
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (index >= conversation.length) return;

    const current = conversation[index];

    if (current.sender === 'ai') {
      setTyping(true);
      const delay = 1200;
      const timer = setTimeout(() => {
        setTyping(false);
        setMessages((prev) => [...prev, current]);
        setIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const delay = 400;
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, current]);
        setIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [index]);

  // Auto-scroll to bottom when messages or typing indicator updates
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  return (
    <div ref={containerRef} className="w-full max-w-xl rounded-xl border border-white/50 bg-white/20 backdrop-blur-md p-6 shadow-lg space-y-3 h-80 max-h-80 overflow-y-auto mt-7">
      <AnimatePresence>
        {messages.map((m, i) => {
          const isUser = m.sender === 'user';
          return (
            <div key={i} className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
              {!isUser && <FaRobot className="text-purple-200 text-2xl" />}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`max-w-xs rounded-lg px-4 py-3 text-sm md:text-base shadow-md backdrop-blur
                  ${isUser ? 'bg-white/90 text-gray-800' : 'bg-purple-100 text-purple-800'}`}
              >
                {m.text}
              </motion.div>
              {isUser && <FaUserCircle className="text-gray-200 text-2xl" />}
            </div>
          );
        })}
        {typing && (
          <motion.div
            key="typing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 mr-auto"
          >
            <FaRobot className="text-purple-200 text-2xl" />
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-purple-300 animate-bounce" />
              <span className="h-2 w-2 rounded-full bg-purple-400 animate-bounce [animation-delay:.15s]" />
              <span className="h-2 w-2 rounded-full bg-purple-500 animate-bounce [animation-delay:.3s]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 