import { GraduationCap, Calendar, FileText, ExternalLink } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import type { ModalMedia } from '../types/portfolio';

interface EducationProps {
  onOpenMedia: (media: ModalMedia) => void;
}

export const Education: React.FC<EducationProps> = ({ onOpenMedia }) => {
  return (
    <section id="education">
      <div className="wrap">
        <div className="cell-tag">
          <span className="idx">05</span>
          <span>Academic Background // Formal Education</span>
        </div>

        <h2 className="sec-title">Education</h2>
        <p className="lede">
          Formal training in Artificial Intelligence & Machine Learning, strong foundational mathematics, and exceptional academic track record.
        </p>

        <div className="edu-list">
          {educationData.map((item) => (
            <div key={item.id} className="edu-card">
              <div className="edu-main">
                <div className="edu-icon-wrap">
                  <GraduationCap size={20} color="var(--amber)" />
                </div>
                <div className="edu-info">
                  <h3 className="edu-degree">{item.degree}</h3>
                  <p className="edu-school">{item.institution} — {item.location}</p>
                </div>
              </div>

              <div className="edu-meta-col">
                <div className="edu-date">
                  <Calendar size={13} />
                  <span>{item.date}</span>
                </div>
                <div className="edu-grade-pill">{item.grade}</div>

                {item.documentUrl && (
                  <button
                    className="btn-doc-view"
                    onClick={() =>
                      onOpenMedia({
                        isOpen: true,
                        type: item.documentType || 'pdf',
                        title: `${item.degree} — Academic Record`,
                        subtitle: `${item.institution} (${item.date})`,
                        url: item.documentUrl!,
                      })
                    }
                  >
                    <FileText size={14} color="var(--teal)" />
                    <span>{item.documentLabel || 'View Record'}</span>
                    <ExternalLink size={12} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .edu-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .edu-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 22px 26px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          transition: all 0.22s;
        }

        .edu-card:hover {
          border-color: rgba(77, 224, 193, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
        }

        .edu-main {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .edu-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--panel-2);
          border: 1px solid var(--border);
          flex-shrink: 0;
        }

        .edu-degree {
          font-family: var(--font-display);
          font-size: 1.12rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 4px;
        }

        .edu-school {
          color: var(--muted);
          font-size: 0.9rem;
        }

        .edu-meta-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
          flex-shrink: 0;
        }

        .edu-date {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--amber);
          font-weight: 600;
        }

        .edu-grade-pill {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--teal);
          background: rgba(77, 224, 193, 0.08);
          padding: 3px 8px;
          border-radius: 4px;
          border: 1px solid rgba(77, 224, 193, 0.2);
        }

        .btn-doc-view {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 10px;
          border-radius: 5px;
          background: var(--panel-2);
          border: 1px solid var(--border);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
          margin-top: 4px;
          transition: all 0.18s;
        }

        .btn-doc-view:hover {
          border-color: var(--teal);
          color: var(--teal);
        }

        @media (max-width: 680px) {
          .edu-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .edu-meta-col {
            align-items: flex-start;
            margin-top: 8px;
            padding-top: 12px;
            border-top: 1px solid rgba(32, 46, 77, 0.6);
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
