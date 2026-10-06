import { useState } from 'react';
import { Clock, ShieldCheck } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import type { ModalMedia, SkillItem } from '../types/portfolio';

interface SkillsProps {
  onOpenMedia: (media: ModalMedia) => void;
}

export const Skills: React.FC<SkillsProps> = ({ onOpenMedia }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'languages' | 'frameworks' | 'soft-skills'>('all');

  const filteredSkills = skillsData.filter((skill) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'frameworks') return skill.category === 'frameworks' || skill.category === 'tools';
    return skill.category === activeTab;
  });

  const handleSkillClick = (skill: SkillItem) => {
    if (skill.proofUrl) {
      onOpenMedia({
        isOpen: true,
        type: skill.proofType || 'pdf',
        title: `${skill.name} — Verification Proof`,
        subtitle: 'Skill Proficiency Certificate & Validation',
        url: skill.proofUrl,
      });
    }
  };

  return (
    <section id="skills">
      <div className="wrap">
        <div className="cell-tag">
          <span className="idx">02</span>
          <span>Technical Competencies // Skills Matrix</span>
        </div>

        <div className="section-head-row">
          <div>
            <h2 className="sec-title">Skills & Stack</h2>
            <p className="lede">
              Validated proficiencies in programming languages, computer vision frameworks, and foundational computer science.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="filter-pill-bar">
            {[
              { id: 'all', label: 'All Stack' },
              { id: 'languages', label: 'Languages' },
              { id: 'frameworks', label: 'ML & Frameworks' },
              { id: 'soft-skills', label: 'Competencies' },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`filter-pill ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id as any)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => {
            const hasProof = !!skill.proofUrl;

            return (
              <div
                key={index}
                className={`skill-chip-card ${hasProof ? 'has-proof' : ''} ${skill.isPending ? 'is-pending' : ''}`}
                onClick={() => hasProof && handleSkillClick(skill)}
                role={hasProof ? 'button' : undefined}
                tabIndex={hasProof ? 0 : undefined}
                onKeyDown={(e) => hasProof && e.key === 'Enter' && handleSkillClick(skill)}
              >
                <div className="chip-content">
                  <div className="chip-left">
                    <span className="chip-name">{skill.name}</span>
                    {skill.isPending && (
                      <span className="pending-badge">
                        <Clock size={11} />
                        <span>certificate coming soon</span>
                      </span>
                    )}
                  </div>

                  {hasProof && (
                    <div className="proof-indicator" title="Click to view verified certificate">
                      <ShieldCheck size={14} color="var(--teal)" />
                      <span className="proof-text">Proof ↗</span>
                    </div>
                  )}
                </div>

                {/* Subtle level progress bar if present */}
                {skill.level && (
                  <div className="level-track">
                    <div className="level-bar" style={{ width: `${skill.level}%` }}></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="skills-foot-note">
          <span>* Click on any skill marked with </span>
          <span className="teal-txt">Proof ↗</span>
          <span> to inspect the official verified certificate directly in the viewer.</span>
        </div>
      </div>

      <style>{`
        .section-head-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .filter-pill-bar {
          display: flex;
          gap: 8px;
          background: var(--panel);
          padding: 4px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
        }

        .filter-pill {
          padding: 6px 14px;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--muted);
          transition: all 0.18s;
        }

        .filter-pill:hover {
          color: #fff;
        }

        .filter-pill.active {
          background: var(--teal);
          color: #070b18;
          font-weight: 600;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 14px;
        }

        .skill-chip-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 16px 18px;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-chip-card.has-proof {
          cursor: pointer;
        }

        .skill-chip-card.has-proof:hover {
          border-color: var(--teal);
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(77, 224, 193, 0.12);
        }

        .skill-chip-card.is-pending {
          border-style: dashed;
          opacity: 0.85;
        }

        .chip-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .chip-left {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .chip-name {
          font-family: var(--font-mono);
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--text);
        }

        .pending-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--amber);
        }

        .proof-indicator {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--teal);
          padding: 3px 8px;
          background: rgba(77, 224, 193, 0.08);
          border-radius: 4px;
          border: 1px solid rgba(77, 224, 193, 0.25);
        }

        .level-track {
          margin-top: 12px;
          height: 3px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 2px;
          overflow: hidden;
        }

        .level-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--teal), var(--amber));
          border-radius: 2px;
        }

        .skills-foot-note {
          margin-top: 20px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--muted);
        }

        .teal-txt {
          color: var(--teal);
          font-weight: 600;
        }

        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .filter-pill-bar {
            width: 100%;
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
};
