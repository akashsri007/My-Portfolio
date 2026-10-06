import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import type { ModalMedia, CertificationItem } from '../types/portfolio';

interface CertificationsProps {
  onOpenMedia: (media: ModalMedia) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onOpenMedia }) => {
  const handleOpenCert = (cert: CertificationItem) => {
    onOpenMedia({
      isOpen: true,
      type: 'pdf',
      title: cert.title,
      subtitle: `${cert.issuer} · ${cert.date}`,
      url: cert.certificateUrl,
    });
  };

  return (
    <section id="certifications">
      <div className="wrap">
        <div className="cell-tag">
          <span className="idx">06</span>
          <span>Professional Credentials // Certifications</span>
        </div>

        <h2 className="sec-title">Certifications</h2>
        <p className="lede">
          Industry-validated certifications in Cloud Infrastructure, AI Databases, Generative AI, and Industrial IoT.
        </p>

        <div className="cert-grid">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-top-row">
                <div className="cert-badge-type">
                  <ShieldCheck size={16} color="var(--amber)" />
                  <span className="issuer-tag">{cert.issuer}</span>
                </div>
                {cert.badge && (
                  <span
                    className={`cert-honor-badge ${
                      cert.badgeType === 'silver' ? 'badge-silver' : 'badge-amber'
                    }`}
                  >
                    {cert.badge}
                  </span>
                )}
              </div>

              <h3 className="cert-name">{cert.title}</h3>
              <div className="cert-meta">
                <span>Issued: </span>
                <span className="cert-date">{cert.date}</span>
              </div>

              <div className="cert-actions">
                <button className="btn-view-cert" onClick={() => handleOpenCert(cert)}>
                  <Award size={14} />
                  <span>View Verified Certificate</span>
                  <ExternalLink size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cert-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .cert-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 22px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.2);
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }

        .cert-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--teal), var(--amber));
        }

        .cert-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 45px rgba(77, 224, 193, 0.12);
          border-color: var(--teal);
        }

        .cert-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          gap: 10px;
        }

        .cert-badge-type {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .issuer-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--muted);
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .cert-honor-badge {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 600;
          padding: 3px 9px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border);
          white-space: nowrap;
        }

        .badge-amber {
          background: rgba(255, 189, 89, 0.12);
          border-color: var(--amber);
          color: var(--amber);
        }

        .badge-silver {
          background: rgba(203, 213, 225, 0.12);
          border-color: #cbd5e1;
          color: #e2e8f0;
        }

        .cert-name {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1.05rem;
          color: #fff;
          line-height: 1.4;
          margin-bottom: 8px;
          flex: 1;
        }

        .cert-meta {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--muted);
          margin-bottom: 18px;
        }

        .cert-date {
          color: var(--amber);
          font-weight: 500;
        }

        .cert-actions {
          margin-top: auto;
        }

        .btn-view-cert {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          background: var(--panel-2);
          border: 1px solid var(--border);
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--text-secondary);
          transition: all 0.18s;
          width: 100%;
          justify-content: center;
        }

        .btn-view-cert:hover {
          border-color: var(--teal);
          color: var(--teal);
          background: rgba(77, 224, 193, 0.08);
        }

        @media (max-width: 720px) {
          .cert-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
