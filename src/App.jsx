import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Customers from './components/Customers';
import Pricing from './components/Pricing';
import OnePager from './components/OnePager';
import WhatsAppFloating from './components/WhatsAppFloating';
import ContactForm from './components/ContactForm';

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Customers />
        <Pricing />
        {/* <CTA /> */}
        <ContactForm />
        <OnePager />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
} 