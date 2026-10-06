import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      className="back-to-top-btn"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ArrowUp size={18} />
      <style>{`
        .back-to-top-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          background: #0e172a;
          border: 1px solid var(--border);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 90;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.4);
          transition: all 0.2s;
        }
        .back-to-top-btn:hover {
          border-color: var(--teal);
          transform: translateY(-3px);
          box-shadow: 0 0 16px rgba(77, 224, 193, 0.3);
          color: #fff;
          background: #14223d;
        }
      `}</style>
    </button>
  );
};
