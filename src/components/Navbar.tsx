import { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'certifications', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`main-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-brand">
          <div className="brand-badge">
            <Terminal size={15} color="var(--teal)" />
            <span className="brand-text">AKASH.S</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link-btn ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right CTA */}
        <div className="nav-actions">
          <button
            className="btn btn-primary nav-cta-btn"
            onClick={() => handleNavClick('contact')}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={15} />
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`mobile-nav-btn ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <span className="mobile-dot"></span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        .main-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          transition: all 0.25s ease;
          background: rgba(7, 11, 24, 0.75);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(32, 46, 77, 0.6);
        }

        .main-nav.nav-scrolled {
          background: rgba(7, 11, 24, 0.94);
          border-bottom-color: rgba(77, 224, 193, 0.25);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          width: 100%;
          max-width: 1040px;
          margin: 0 auto;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .brand-badge {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 6px 12px;
          background: var(--panel-2);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
        }

        .brand-text {
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--amber);
          letter-spacing: 0.02em;
        }

        .brand-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--muted);
          letter-spacing: 0.08em;
        }

        .nav-links {
          display: flex;
          gap: 20px;
          list-style: none;
          align-items: center;
        }

        .nav-link-btn {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--muted);
          transition: all 0.18s;
          padding: 6px 0;
          position: relative;
        }

        .nav-link-btn:hover {
          color: var(--teal);
        }

        .nav-link-btn.active {
          color: #fff;
          font-weight: 600;
        }

        .nav-link-btn.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--teal);
          border-radius: 2px;
          box-shadow: 0 0 8px var(--teal);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .nav-cta-btn {
          padding: 8px 16px;
          font-size: 0.78rem;
        }

        .mobile-toggle {
          display: none;
          color: var(--text);
          padding: 6px;
          border-radius: 6px;
        }

        .mobile-drawer {
          display: none;
          background: #0d1527;
          border-bottom: 1px solid var(--border);
          padding: 18px 24px;
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mobile-nav-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          text-align: left;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--muted);
          padding: 8px 0;
        }

        .mobile-nav-btn.active {
          color: var(--teal);
          font-weight: 600;
        }

        .mobile-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--border);
        }

        .mobile-nav-btn.active .mobile-dot {
          background: var(--teal);
          box-shadow: 0 0 6px var(--teal);
        }

        @media (max-width: 860px) {
          .nav-links {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .mobile-drawer {
            display: block;
          }
        }

        @media (max-width: 640px) {
          .nav-container {
            padding: 12px 18px;
          }
        }
      `}</style>
    </nav>
  );
};
