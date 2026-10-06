import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { MediaModal } from './components/MediaModal';
import { Toast } from './components/Toast';
import type { ToastMessage } from './components/Toast';
import { BackToTop } from './components/BackToTop';
import type { ModalMedia } from './types/portfolio';
import { personalInfo } from './data/portfolioData';

export function App() {
  const [modalMedia, setModalMedia] = useState<ModalMedia>({
    isOpen: false,
    type: 'pdf',
    title: '',
    url: '',
  });

  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (text: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenMedia = (media: ModalMedia) => {
    setModalMedia(media);
  };

  const handleCloseMedia = () => {
    setModalMedia((prev) => ({ ...prev, isOpen: false }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    showToast('Email address copied to clipboard!', 'success');
  };

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero onCopyEmail={handleCopyEmail} onOpenMedia={handleOpenMedia} />
        <About />
        <Skills onOpenMedia={handleOpenMedia} />
        <Experience onOpenMedia={handleOpenMedia} />
        <Projects onOpenMedia={handleOpenMedia} />
        <Education onOpenMedia={handleOpenMedia} />
        <Certifications onOpenMedia={handleOpenMedia} />
        <Achievements onOpenMedia={handleOpenMedia} />
      </main>

      {/* Contact & Footer */}
      <Contact onShowToast={showToast} />

      {/* Media Overlay Modal for PDFs, Images, and Videos */}
      <MediaModal media={modalMedia} onClose={handleCloseMedia} />

      {/* Toast Feedback */}
      <Toast toasts={toasts} onDismiss={handleDismissToast} />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;
