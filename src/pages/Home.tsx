import { useState } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
