   'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 transform active:scale-95 hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: '#2e5b88',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#25496c';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#2e5b88';
          }}
        >
          <ChevronUp
            className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1"
            style={{ color: '#f2a007' }}
          />
        </button>
      )}
    </>
  );
}
 