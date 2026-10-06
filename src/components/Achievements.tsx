import { Trophy, Sparkles, Medal, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { achievementsData } from '../data/portfolioData';
import type { ModalMedia, AchievementItem } from '../types/portfolio';

interface AchievementsProps {
  onOpenMedia: (media: ModalMedia) => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ onOpenMedia }) => {
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#4de0c1', '#ffbd59', '#38bdf8', '#ffffff'],
      });
    } catch {
      // Ignore if confetti is not available
    }
  };

  const handleOpenAchievement = (ach: AchievementItem) => {
    if (ach.certificateUrl) {
      triggerConfetti();
      onOpenMedia({
        isOpen: true,
        type: ach.certificateType || 'image',
        title: ach.title,
        subtitle: `${ach.event} · ${ach.prize || 'Official Recognition'}`,
        url: ach.certificateUrl,
      });
    }
  };

  const coCurricular = achievementsData.filter((a) => a.category === 'co-curricular');
  const extraCurricular = achievementsData.filter((a) => a.category === 'extra-curricular');

  return (
    <section id="achievements">
      <div className="wrap">
        <div className="cell-tag">
          <span className="idx">07</span>
          <span>Honors & Recognitions // Achievements</span>
        </div>

        <h2 className="sec-title">Achievements</h2>
        <p className="lede">
          Top honors in university hackathons, research project competitions, and athletic discipline.
        </p>

        {/* Co-curricular Section */}
        <h3 className="subhead">Co-curricular & Hackathons</h3>
        <div className="ach-grid">
          {coCurricular.map((item) => (
            <article key={item.id} className="ach-card">
              <div className="ach-card-top">
                <div className="ach-icon-circle">
                  <Trophy size={18} color="var(--amber)" />
                </div>
                {item.prize && <span className="prize-badge">{item.prize}</span>}
              </div>

              <h4 className="ach-title">{item.title}</h4>
              <div className="ach-event">{item.event}</div>
              <p className="ach-desc">{item.description}</p>

              <div className="ach-footer">
                {item.certificateUrl ? (
                  <button
                    className="btn-ach-cert"
                    onClick={() => handleOpenAchievement(item)}
                  >
                    <Sparkles size={14} color="var(--amber)" />
                    <span>View Achievement Certificate</span>
                    <ExternalLink size={12} />
                  </button>
                ) : (
                  item.pendingNote && (
                    <span className="pending-note">
                      * {item.pendingNote}
                    </span>
                  )
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Extra-curricular Section */}
        <h3 className="subhead" style={{ marginTop: '36px' }}>Extra-curricular & Sports</h3>
        <div className="ach-grid">
          {extraCurricular.map((item) => (
            <article key={item.id} className="ach-card">
              <div className="ach-card-top">
                <div className="ach-icon-circle yoga">
                  <Medal size={18} color="var(--teal)" />
                </div>
                {item.prize && <span className="prize-badge silver">{item.prize}</span>}
              </div>

              <h4 className="ach-title">{item.title}</h4>
              <div className="ach-event">{item.event}</div>
              <p className="ach-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .subhead {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--teal);
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ach-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .ach-card {
          background: linear-gradient(155deg, #0e172a, #131d36);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: transform 0.22s, border-color 0.22s, box-shadow 0.22s;
        }

        .ach-card:hover {
          border-color: rgba(255, 189, 89, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.35);
        }

        .ach-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          gap: 10px;
        }

        .ach-icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 189, 89, 0.1);
          border: 1px solid rgba(255, 189, 89, 0.3);
        }

        .ach-icon-circle.yoga {
          background: rgba(77, 224, 193, 0.1);
          border-color: rgba(77, 224, 193, 0.3);
        }

        .prize-badge {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          background: rgba(255, 189, 89, 0.15);
          color: var(--amber);
          border: 1px solid var(--amber);
        }

        .prize-badge.silver {
          background: rgba(203, 213, 225, 0.12);
          color: #e2e8f0;
          border-color: #94a3b8;
        }

        .ach-title {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1.15rem;
          color: #fff;
          margin-bottom: 4px;
        }

        .ach-event {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--teal);
          margin-bottom: 12px;
        }

        .ach-desc {
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 18px;
          flex: 1;
        }

        .ach-footer {
          margin-top: auto;
        }

        .btn-ach-cert {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          background: var(--panel-2);
          border: 1px solid var(--border);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text);
          transition: all 0.18s;
        }

        .btn-ach-cert:hover {
          border-color: var(--amber);
          color: var(--amber);
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(255, 189, 89, 0.2);
        }

        .pending-note {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--muted);
          font-style: italic;
        }

        @media (max-width: 720px) {
          .ach-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
