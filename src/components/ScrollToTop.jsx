import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-[9990] flex items-center justify-center w-12 h-12 bg-white/90 hover:bg-sky-50 border border-sky-200 text-sky-700 rounded-2xl shadow-lg shadow-sky-500/10 backdrop-blur-md transition-all duration-300 hover:scale-110 interactive"
      aria-label="Scroll back to top"
      title="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 stroke-[2.5]" />
    </button>
  );
}
