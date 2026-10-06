import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

interface ContactProps {
  onShowToast: (text: string, type?: 'success' | 'info' | 'error') => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    onShowToast(`${label} copied to clipboard!`, 'success');
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill in your name, email, and message.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast(`Thank you ${formData.name}! Your message has been sent.`, 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <footer id="contact">
      <div className="wrap">
        <div className="cell-tag">
          <span className="idx">08</span>
          <span>Communication // Direct Channel</span>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct info */}
          <div className="contact-left">
            <h2 className="sec-title" style={{ marginBottom: '8px' }}>Let's Build Together</h2>
            <div className="contact-subhead">
              Available for Machine Learning Developer roles, research collaborations, and applied AI engineering.
            </div>

            <div className="contact-channels">
              {/* Email */}
              <div className="channel-card">
                <div className="channel-icon">
                  <Mail size={18} color="var(--amber)" />
                </div>
                <div className="channel-details">
                  <span className="channel-label">E-MAIL ADDRESS</span>
                  <a href={`mailto:${personalInfo.email}`} className="channel-value">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  className="btn-copy-channel"
                  onClick={() => copyToClipboard(personalInfo.email, 'email', 'Email address')}
                  title="Copy email"
                >
                  {copiedKey === 'email' ? <Check size={14} color="var(--teal)" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone */}
              <div className="channel-card">
                <div className="channel-icon">
                  <Phone size={18} color="var(--teal)" />
                </div>
                <div className="channel-details">
                  <span className="channel-label">PHONE NUMBER</span>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="channel-value">
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  className="btn-copy-channel"
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone', 'Phone number')}
                  title="Copy phone"
                >
                  {copiedKey === 'phone' ? <Check size={14} color="var(--teal)" /> : <Copy size={14} />}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="channel-card">
                <div className="channel-icon">
                  <LinkedinIcon />
                </div>
                <div className="channel-details">
                  <span className="channel-label">LINKEDIN PROFILE</span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value"
                  >
                    linkedin.com/in/akash-sridhar
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="channel-card">
                <div className="channel-icon">
                  <GithubIcon />
                </div>
                <div className="channel-details">
                  <span className="channel-label">GITHUB REPOSITORIES</span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value"
                  >
                    github.com/akashsri007
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="channel-card">
                <div className="channel-icon">
                  <MapPin size={18} color="var(--amber)" />
                </div>
                <div className="channel-details">
                  <span className="channel-label">LOCATION</span>
                  <span className="channel-value static">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-right">
            <div className="contact-form-panel">
              <div className="form-head">
                <MessageSquare size={16} color="var(--teal)" />
                <span>Send Quick Message</span>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Maya Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>Your Email *</label>
                    <input
                      type="email"
                      placeholder="e.g. maya@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label>Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your team, problem space, or role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  <Send size={15} />
                  <span>{isSubmitting ? 'Sending...' : 'Transmit Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="foot-bottom">
          <div className="foot-credit">
            © {new Date().getFullYear()} Akash S · Machine Learning Developer
          </div>
          <div className="foot-tech">
            <span>Production Stack: </span>
            <span className="foot-highlight">React 19 · TypeScript · Vite · Vanilla CSS</span>
          </div>
        </div>
      </div>

      <style>{`
        footer#contact {
          padding: 85px 0 45px;
          border-top: 1px solid var(--border);
          background: #060a16;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .contact-subhead {
          font-family: var(--font-body);
          font-size: 1.02rem;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .contact-channels {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .channel-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          transition: all 0.2s;
        }

        .channel-card:hover {
          border-color: rgba(77, 224, 193, 0.35);
          transform: translateY(-2px);
        }

        .channel-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: var(--panel-2);
          border: 1px solid var(--border);
          flex-shrink: 0;
        }

        .channel-details {
          flex: 1;
          min-width: 0;
        }

        .channel-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--muted);
          letter-spacing: 0.05em;
        }

        .channel-value {
          font-family: var(--font-mono);
          font-size: 0.86rem;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
          transition: color 0.18s;
        }

        .channel-value:hover:not(.static) {
          color: var(--teal);
        }

        .btn-copy-channel {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: var(--panel-2);
          border: 1px solid var(--border);
          color: var(--muted);
          transition: all 0.18s;
        }

        .btn-copy-channel:hover {
          color: var(--teal);
          border-color: var(--teal);
        }

        /* Form panel */
        .contact-form-panel {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 26px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
        }

        .form-head {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--teal);
          font-weight: 600;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(32, 46, 77, 0.6);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-field label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--muted);
        }

        .form-field input,
        .form-field textarea {
          background: var(--panel-2);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          color: #fff;
          font-family: var(--font-body);
          font-size: 0.86rem;
          outline: none;
          transition: border-color 0.18s;
        }

        .form-field input:focus,
        .form-field textarea:focus {
          border-color: var(--teal);
          box-shadow: 0 0 10px rgba(77, 224, 193, 0.15);
        }

        .submit-btn {
          margin-top: 6px;
          padding: 12px;
          width: 100%;
        }

        .foot-bottom {
          padding-top: 30px;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--muted);
          flex-wrap: wrap;
          gap: 12px;
        }

        .foot-highlight {
          color: var(--teal);
        }

        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};
