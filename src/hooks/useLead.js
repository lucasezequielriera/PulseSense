import { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import emailjs from 'emailjs-com';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function useLead() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const saveLead = async ({ name, email, employees }) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await addDoc(collection(db, 'leads'), {
        name,
        email,
        employees,
        createdAt: Timestamp.now(),
      });
      // Send notification email to internal team
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          { name, email, employees },
          EMAILJS_PUBLIC_KEY
        );
      }
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { saveLead, loading, error, success };
} 