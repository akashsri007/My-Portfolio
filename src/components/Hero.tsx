import { useState, useEffect } from 'react';
import { ArrowDown, Copy, Check, MapPin, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import type { ModalMedia } from '../types/portfolio';

interface HeroProps {
  onCopyEmail: () => void;
  onOpenMedia?: (media: ModalMedia) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCopyEmail, onOpenMedia }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [textIndex, setTextIndex] = useState<number>(0);
  const titles = [
    'Python · Computer Vision · Applied AI',
    'Deep Learning & Real-Time Edge Systems',
    'PyTorch · OpenCV · Fast Neural Pipelines',
    'Building Practical, Reliable AI Systems',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [titles.length]);

  const handleCopy = () => {
    onCopyEmail();
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handlePhotoClick = () => {
    if (onOpenMedia) {
      onOpenMedia({
        isOpen: true,
        type: 'image',
        title: `${personalInfo.name} — Profile Photo`,
        subtitle: 'Machine Learning Developer & AI Engineer',
        url: personalInfo.profilePhoto,
      });
    }
  };

  return (
    <header className="hero-section" id="hero">
      <div className="wrap">
        <div className="hero-grid">
          {/* Left Column: Intro */}
          <div className="hero-intro">
            {/* Status Pill */}
            <div className="status-pill">
              <span className="live-dot"></span>
              <span className="status-text">{personalInfo.status}</span>
            </div>

            {/* Title */}
            <h1 className="hero-name">
              {personalInfo.name}
              <span className="accent-dot">.</span>
            </h1>

            {/* Dynamic Role / Subtitle */}
            <div className="hero-tagline-wrap">
              <span className="hero-prefix">Role:</span>
              <span className="hero-role">{personalInfo.role} — </span>
              <span className="rotating-text">{titles[textIndex]}</span>
              <span className="terminal-cursor"></span>
            </div>

            {/* Micro Highlights Pill Row */}
            <div className="hero-meta-row">
              <span className="meta-pill">
                <MapPin size={13} color="var(--amber)" />
                Chennai, Tamil Nadu
              </span>
              <span className="meta-pill">
                <Briefcase size={13} color="var(--teal)" />
                B.Tech AI & ML (R.M.D Engineering)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowDown size={15} />
              </a>

              <a href="#contact" className="btn btn-ghost">
                <span>Get in Touch</span>
              </a>

              <button
                className={`btn btn-ghost copy-email-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopy}
                title="Click to copy email address"
              >
                {copied ? <Check size={14} color="var(--teal)" /> : <Copy size={14} />}
                <span>{copied ? 'Email Copied!' : personalInfo.email}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Profile Avatar */}
          <div className="hero-avatar-col">
            <div
              className="avatar-frame"
              onClick={handlePhotoClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handlePhotoClick()}
              title="Click to view full photo"
            >
              <div className="avatar-glow"></div>
              <img
                src={personalInfo.profilePhoto}
                alt={`${personalInfo.name} - Profile`}
                className="profile-img"
              />
              <div className="avatar-badge">
                <span className="badge-tag">AI/ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 80px 0 60px;
          position: relative;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 240px;
          align-items: center;
          gap: 40px;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 6px 14px;
          background: rgba(13, 21, 39, 0.85);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--amber);
          margin-bottom: 22px;
          letter-spacing: 0.04em;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--teal);
          box-shadow: 0 0 10px var(--teal);
          animation: blink 1.6s infinite ease-in-out;
        }

        .hero-name {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 6.2vw, 4.4rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.05;
          color: #fff;
          margin-bottom: 16px;
        }

        .accent-dot {
          color: var(--amber);
        }

        .hero-tagline-wrap {
          font-family: var(--font-mono);
          font-size: clamp(0.92rem, 1.8vw, 1.12rem);
          color: var(--muted);
          line-height: 1.5;
          margin-bottom: 20px;
          min-height: 2.2em;
        }

        .hero-prefix {
          color: var(--teal);
          margin-right: 6px;
        }

        .hero-role {
          color: var(--text);
          font-weight: 500;
        }

        .rotating-text {
          color: var(--amber);
          font-weight: 500;
          transition: all 0.3s;
        }

        .terminal-cursor {
          display: inline-block;
          width: 8px;
          height: 1.1em;
          background: var(--teal);
          vertical-align: text-bottom;
          margin-left: 3px;
          animation: blink 1s steps(1) infinite;
        }

        .hero-meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }

        .meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-secondary);
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .copy-email-btn {
          font-family: var(--font-mono);
        }
        .copy-email-btn.copied {
          border-color: var(--teal);
          color: var(--teal);
        }

        /* Avatar styling */
        .hero-avatar-col {
          display: flex;
          justify-content: center;
        }

        .avatar-frame {
          position: relative;
          width: 220px;
          height: 220px;
          cursor: pointer;
          outline: none;
          transition: transform 0.25s ease;
        }

        .avatar-frame:hover,
        .avatar-frame:focus-visible {
          transform: scale(1.03);
        }

        .avatar-glow {
          position: absolute;
          inset: -6px;
          background: linear-gradient(135deg, var(--teal), var(--amber));
          border-radius: 32px;
          filter: blur(12px);
          opacity: 0.35;
          transition: opacity 0.3s;
        }

        .avatar-frame:hover .avatar-glow,
        .avatar-frame:focus-visible .avatar-glow {
          opacity: 0.75;
        }

        .profile-img {
          position: relative;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 28px;
          border: 2px solid rgba(77, 224, 193, 0.6);
          background: var(--panel);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
          z-index: 2;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .avatar-frame:hover .profile-img,
        .avatar-frame:focus-visible .profile-img {
          border-color: var(--teal);
          box-shadow: 0 20px 50px rgba(77, 224, 193, 0.3);
        }

        .avatar-badge {
          position: absolute;
          bottom: -18px;
          right: 4px;
          z-index: 3;
          background: #090e1d;
          border: 1px solid rgba(77, 224, 193, 0.45);
          padding: 5px 12px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.6);
        }

        .badge-tag {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--amber);
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: left;
          }
          .hero-avatar-col {
            order: -1;
            justify-content: flex-start;
          }
          .avatar-frame {
            width: 150px;
            height: 150px;
          }
          .hero-section {
            padding: 45px 0 40px;
          }
        }
      `}</style>
    </header>
  );
};
