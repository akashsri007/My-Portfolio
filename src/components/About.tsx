import { CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about">
      <div className="wrap">
        <div className="cell-tag">
          <span className="idx">01</span>
          <span>Overview // Executive Summary</span>
        </div>

        <h2 className="sec-title">About Me</h2>
        <p className="lede">
          Passionate Machine Learning developer combining mathematical rigor with practical full-stack deployment.
        </p>

        {/* About Terminal Card */}
        <div className="about-terminal">
          <div className="terminal-bar">
            <div className="terminal-dots">
              <span className="tdot red"></span>
              <span className="tdot yellow"></span>
              <span className="tdot green"></span>
            </div>
            <div className="terminal-path">~/akash/profile/summary.md</div>
            <span className="terminal-status">READONLY</span>
          </div>

          <div className="terminal-content">
            <p className="summary-quote">
              <span className="quote-mark">“</span>
              {personalInfo.summary}
              <span className="quote-mark">”</span>
            </p>

            <div className="principles-row">
              <div className="principle-item">
                <CheckCircle size={15} color="var(--teal)" />
                <span>End-to-End ML Pipeline Architecture</span>
              </div>
              <div className="principle-item">
                <CheckCircle size={15} color="var(--teal)" />
                <span>Real-Time Computer Vision & Edge AI</span>
              </div>
              <div className="principle-item">
                <CheckCircle size={15} color="var(--teal)" />
                <span>Hardware & Embedded IoT Prototyping</span>
              </div>
              <div className="principle-item">
                <CheckCircle size={15} color="var(--teal)" />
                <span>Database Design & Cloud Infrastructure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {personalInfo.stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-detail">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-terminal {
          background: #0d1527;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
          margin-bottom: 28px;
        }

        .terminal-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          background: #111a31;
          border-bottom: 1px solid var(--border);
          font-family: var(--font-mono);
          font-size: 0.72rem;
        }

        .terminal-dots {
          display: flex;
          gap: 6px;
        }

        .tdot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }
        .tdot.red { background: #ef4444; }
        .tdot.yellow { background: #f59e0b; }
        .tdot.green { background: #10b981; }

        .terminal-path {
          color: var(--muted);
        }

        .terminal-status {
          color: var(--amber);
          font-size: 0.65rem;
          letter-spacing: 0.05em;
        }

        .terminal-content {
          padding: 26px 30px;
        }

        .summary-quote {
          font-family: var(--font-body);
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 22px;
          position: relative;
        }

        .quote-mark {
          color: var(--teal);
          font-size: 1.25rem;
          font-family: var(--font-mono);
          margin: 0 2px;
        }

        .principles-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          padding-top: 18px;
          border-top: 1px solid rgba(32, 46, 77, 0.6);
        }

        .principle-item {
          display: flex;
          align-items: center;
          gap: 9px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--muted);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .stat-card {
          padding: 20px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          transition: all 0.2s;
        }

        .stat-card:hover {
          border-color: var(--teal);
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
        }

        .stat-value {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--amber);
          line-height: 1.1;
          margin-bottom: 6px;
        }

        .stat-label {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.92rem;
          color: #fff;
          margin-bottom: 4px;
        }

        .stat-detail {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--muted);
        }

        @media (max-width: 768px) {
          .principles-row {
            grid-template-columns: 1fr;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};
