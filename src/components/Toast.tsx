import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  text: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast-item toast-${toast.type}`}>
          <div className="toast-icon">
            {toast.type === 'success' && <CheckCircle2 size={18} color="var(--teal)" />}
            {toast.type === 'error' && <AlertCircle size={18} color="var(--rose)" />}
            {toast.type === 'info' && <Info size={18} color="var(--amber)" />}
          </div>
          <div className="toast-text">{toast.text}</div>
          <button
            className="toast-close"
            onClick={() => onDismiss(toast.id)}
            aria-label="Dismiss toast"
          >
            <X size={15} />
          </button>
        </div>
      ))}
      <style>{`
        .toast-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 380px;
          pointer-events: none;
        }
        .toast-item {
          pointer-events: auto;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: #0f182c;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          color: var(--text);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
          font-family: var(--font-mono);
          font-size: 0.82rem;
          backdrop-filter: blur(12px);
          animation: slideUp 0.25s ease-out;
        }
        .toast-success {
          border-color: rgba(77, 224, 193, 0.4);
        }
        .toast-error {
          border-color: rgba(244, 63, 94, 0.4);
        }
        .toast-info {
          border-color: rgba(255, 189, 89, 0.4);
        }
        .toast-icon {
          display: flex;
          align-items: center;
        }
        .toast-text {
          flex: 1;
        }
        .toast-close {
          opacity: 0.6;
          transition: opacity 0.15s;
          display: flex;
          align-items: center;
        }
        .toast-close:hover {
          opacity: 1;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};
