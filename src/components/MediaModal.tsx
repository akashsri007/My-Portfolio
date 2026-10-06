import { useEffect } from 'react';
import { X, ExternalLink, Download, FileText, Film, Image as ImageIcon } from 'lucide-react';
import type { ModalMedia } from '../types/portfolio';

interface MediaModalProps {
  media: ModalMedia;
  onClose: () => void;
}

export const MediaModal: React.FC<MediaModalProps> = ({ media, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (media.isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [media.isOpen, onClose]);

  if (!media.isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-type-icon">
              {media.type === 'pdf' && <FileText size={18} color="var(--amber)" />}
              {media.type === 'image' && <ImageIcon size={18} color="var(--teal)" />}
              {media.type === 'video' && <Film size={18} color="var(--cyan)" />}
            </span>
            <div>
              <h3 className="modal-title">{media.title}</h3>
              {media.subtitle && <p className="modal-subtitle">{media.subtitle}</p>}
            </div>
          </div>

          <div className="modal-actions">
            <a
              href={media.url}
              download
              className="modal-btn"
              title="Download file"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={16} />
              <span>Download</span>
            </a>
            <a
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn"
              title="Open in new tab"
            >
              <ExternalLink size={16} />
              <span>New Tab</span>
            </a>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {media.type === 'pdf' && (
            <div className="modal-pdf-wrap">
              <object
                data={media.url}
                type="application/pdf"
                className="modal-pdf-viewer"
              >
                <div className="modal-fallback">
                  <p>Your browser does not support inline PDF viewing.</p>
                  <a
                    href={media.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ marginTop: '14px' }}
                  >
                    Open PDF in New Tab ↗
                  </a>
                </div>
              </object>
            </div>
          )}

          {media.type === 'image' && (
            <div className="modal-image-wrap">
              <img src={media.url} alt={media.title} className="modal-image" />
            </div>
          )}

          {media.type === 'video' && (
            <div className="modal-video-wrap">
              <video
                src={media.url}
                controls
                autoPlay
                className="modal-video"
                controlsList="nodownload"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(5, 8, 18, 0.88);
          backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: modalFadeIn 0.2s ease-out;
        }

        .modal-container {
          background: #0d1527;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(77, 224, 193, 0.15);
          overflow: hidden;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 22px;
          border-bottom: 1px solid var(--border);
          background: #111a31;
          gap: 16px;
        }

        .modal-title-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .modal-type-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          flex-shrink: 0;
        }

        .modal-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 600;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .modal-subtitle {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--muted);
        }

        .modal-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .modal-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 12px;
          border-radius: 6px;
          border: 1px solid var(--border);
          background: var(--panel-2);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.74rem;
          transition: all 0.18s;
        }

        .modal-btn:hover {
          border-color: var(--teal);
          color: var(--teal);
        }

        .modal-close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 6px;
          color: var(--muted);
          transition: all 0.18s;
        }

        .modal-close-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
        }

        .modal-body {
          flex: 1;
          overflow: auto;
          background: #080c18;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 480px;
        }

        .modal-pdf-wrap {
          width: 100%;
          height: 72vh;
        }

        .modal-pdf-viewer {
          width: 100%;
          height: 100%;
          border: none;
        }

        .modal-fallback {
          padding: 40px;
          text-align: center;
          color: var(--muted);
          font-family: var(--font-mono);
          font-size: 0.9rem;
        }

        .modal-image-wrap {
          padding: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-height: 75vh;
        }

        .modal-image {
          max-width: 100%;
          max-height: 70vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .modal-video-wrap {
          width: 100%;
          padding: 20px;
          display: flex;
          justify-content: center;
        }

        .modal-video {
          width: 100%;
          max-height: 70vh;
          border-radius: 8px;
          background: #000;
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 640px) {
          .modal-container {
            max-height: 95vh;
          }
          .modal-actions .modal-btn span {
            display: none;
          }
          .modal-actions .modal-btn {
            padding: 8px;
          }
          .modal-title {
            max-width: 180px;
          }
          .modal-body {
            min-height: 380px;
          }
        }
      `}</style>
    </div>
  );
};
