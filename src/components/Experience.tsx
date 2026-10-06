import { Calendar, Award, ExternalLink } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import type { ModalMedia } from '../types/portfolio';

interface ExperienceProps {
  onOpenMedia: (media: ModalMedia) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenMedia }) => {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="cell-tag">
          <span className="idx">03</span>
          <span>Professional Background // Industry Experience</span>
        </div>

        <h2 className="sec-title">Experience & Simulations</h2>
        <p className="lede">
          Hands-on simulation and industrial internship experience applying predictive modeling, data analytics, and operational systems.
        </p>

        <div className="timeline-container">
          {experienceData.map((item, index) => (
            <div key={item.id} className="timeline-item">
              {/* Left Timeline Line & Pin */}
              <div className="timeline-pin-wrap">
                <div className="timeline-pin"></div>
                {index !== experienceData.length - 1 && <div className="timeline-line"></div>}
              </div>

              {/* Content Card */}
              <div className="timeline-card">
                <div className="timeline-meta-head">
                  <span className="date-badge">
                    <Calendar size={13} />
                    <span>{item.date}</span>
                  </span>
                </div>

                <h3 className="role-title">{item.role}</h3>
                <div className="org-title">
                  <span>{item.organization}</span>
                  {item.location && <span className="org-loc"> · {item.location}</span>}
                </div>

                <ul className="bullet-list">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="bullet-item">
                      <span className="bullet-bullet">›</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {item.certificateUrl && (
                  <div className="timeline-actions">
                    <button
                      className="btn-cert"
                      onClick={() =>
                        onOpenMedia({
                          isOpen: true,
                          type: 'pdf',
                          title: item.certificateName || `${item.role} Certificate`,
                          subtitle: `${item.organization} · ${item.date}`,
                          url: item.certificateUrl!,
                        })
                      }
                    >
                      <Award size={15} color="var(--amber)" />
                      <span>View Verified Certificate</span>
                      <ExternalLink size={13} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline-container {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 28px;
          margin-top: 10px;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 24px 1fr;
          gap: 24px;
          position: relative;
        }

        .timeline-pin-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .timeline-pin {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #070b18;
          border: 3px solid var(--teal);
          box-shadow: 0 0 10px var(--teal);
          z-index: 2;
          margin-top: 6px;
        }

        .timeline-line {
          position: absolute;
          top: 20px;
          bottom: -28px;
          width: 2px;
          background: linear-gradient(180deg, var(--border), rgba(32, 46, 77, 0.2));
        }

        .timeline-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px 28px;
          position: relative;
          transition: all 0.22s ease;
        }

        .timeline-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--teal), transparent);
          opacity: 0;
          transition: opacity 0.25s;
        }

        .timeline-card:hover {
          border-color: rgba(77, 224, 193, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
        }

        .timeline-card:hover::before {
          opacity: 1;
        }

        .timeline-meta-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }

        .date-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--amber);
        }

        .role-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 4px;
        }

        .org-title {
          font-family: var(--font-mono);
          font-size: 0.86rem;
          color: var(--teal);
          margin-bottom: 14px;
        }

        .org-loc {
          color: var(--muted);
          font-weight: 400;
        }

        .bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 18px;
        }

        .bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .bullet-bullet {
          color: var(--teal);
          font-family: var(--font-mono);
          font-size: 1.1rem;
          line-height: 1.3;
        }

        .timeline-actions {
          display: flex;
          gap: 10px;
        }

        .btn-cert {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          background: var(--panel-2);
          border: 1px solid var(--border);
          color: var(--text);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 500;
          transition: all 0.18s;
        }

        .btn-cert:hover {
          border-color: var(--amber);
          color: var(--amber);
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(255, 189, 89, 0.15);
        }

        @media (max-width: 640px) {
          .timeline-item {
            grid-template-columns: 16px 1fr;
            gap: 14px;
          }
          .timeline-card {
            padding: 18px 20px;
          }
        }
      `}</style>
    </section>
  );
};
