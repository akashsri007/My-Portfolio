import { useState } from 'react';
import { GitFork, ExternalLink, Play, Search, Trophy } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { ModalMedia, Project } from '../types/portfolio';

interface ProjectsProps {
  onOpenMedia: (media: ModalMedia) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenMedia }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'AI & ML', 'Computer Vision', 'Hardware & IoT'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleWatchVideo = (project: Project) => {
    if (project.videoUrl) {
      onOpenMedia({
        isOpen: true,
        type: 'video',
        title: project.title,
        subtitle: 'Embedded Hardware Prototype Demonstration',
        url: project.videoUrl,
      });
    }
  };

  return (
    <section id="projects">
      <div className="wrap">
        <div className="cell-tag">
          <span className="idx">04</span>
          <span>Engineering Portfolio // Featured Works</span>
        </div>

        <div className="projects-header-row">
          <div>
            <h2 className="sec-title">Featured Projects</h2>
            <p className="lede">
              Real-world systems spanning computer vision inspection, biometric health risk stratification, and hardware prototyping.
            </p>
          </div>

          {/* Search Bar */}
          <div className="project-search-box">
            <Search size={15} color="var(--muted)" />
            <input
              type="text"
              placeholder="Search by tag (e.g. OpenCV, FastAPI, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-tab ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="proj-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`proj-card ${project.featured ? 'is-featured' : ''}`}
            >
              {/* Award Banner if featured */}
              {project.award && (
                <div className="award-banner">
                  <Trophy size={13} color="var(--amber)" />
                  <span>{project.award}</span>
                </div>
              )}

              {/* Number and Category */}
              <div className="proj-head">
                <span className="proj-num">{project.number}</span>
                <span className="proj-cat-tag">{project.category}</span>
              </div>

              {/* Title & Description */}
              <h3 className="proj-name">{project.title}</h3>
              <p className="proj-desc">{project.description}</p>

              {/* Tags */}
              <div className="tag-row">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    title="View Source on GitHub"
                  >
                    <GitFork size={14} />
                    <span>GitHub</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    title="Live Demo"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                )}

                {project.videoUrl && (
                  <button
                    className="project-link video-link"
                    onClick={() => handleWatchVideo(project)}
                    title="Watch hardware demo video"
                  >
                    <Play size={14} fill="currentColor" />
                    <span>▶ Play Demo Video</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects match your current search criteria.</p>
            <button
              className="btn btn-ghost"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              style={{ marginTop: '12px' }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <style>{`
        .projects-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 18px;
        }

        .project-search-box {
          display: flex;
          align-items: center;
          gap: 9px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 8px 14px;
          width: 320px;
          max-width: 100%;
        }

        .search-input {
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          width: 100%;
        }

        .search-input::placeholder {
          color: var(--muted);
        }

        .category-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .cat-tab {
          padding: 7px 16px;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.76rem;
          background: var(--panel);
          border: 1px solid var(--border);
          color: var(--muted);
          transition: all 0.18s;
        }

        .cat-tab:hover {
          color: #fff;
          border-color: rgba(77, 224, 193, 0.4);
        }

        .cat-tab.active {
          background: rgba(77, 224, 193, 0.12);
          border-color: var(--teal);
          color: var(--teal);
          font-weight: 600;
        }

        .proj-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .proj-card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 26px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.2);
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }

        .proj-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--teal), var(--amber));
        }

        .proj-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(77, 224, 193, 0.12);
          border-color: var(--teal);
        }

        .proj-card.is-featured {
          border-color: rgba(255, 189, 89, 0.4);
          background: linear-gradient(160deg, #111a33, #0d1527);
        }

        .award-banner {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 4px;
          background: rgba(255, 189, 89, 0.1);
          border: 1px solid rgba(255, 189, 89, 0.3);
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--amber);
          margin-bottom: 12px;
          width: fit-content;
        }

        .proj-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .proj-num {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--muted);
          text-transform: uppercase;
        }

        .proj-cat-tag {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          padding: 2px 8px;
          border-radius: 4px;
          background: var(--panel-2);
          color: var(--teal);
          border: 1px solid rgba(77, 224, 193, 0.2);
        }

        .proj-name {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }

        .proj-desc {
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }

        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 22px;
        }

        .tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 4px 10px;
          border-radius: 5px;
          background: var(--panel-2);
          color: var(--teal);
          border: 1px solid var(--border);
        }

        .project-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: auto;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.78rem;
          background: var(--panel-2);
          border: 1px solid var(--border);
          color: var(--text);
          transition: all 0.18s;
        }

        .project-link:hover {
          border-color: var(--teal);
          color: var(--teal);
          transform: translateY(-2px);
        }

        .video-link {
          border-color: rgba(77, 224, 193, 0.35);
          background: rgba(77, 224, 193, 0.08);
          color: var(--teal);
          cursor: pointer;
        }

        .video-link:hover {
          background: var(--teal);
          color: #070b18;
          box-shadow: 0 0 14px rgba(77, 224, 193, 0.4);
        }

        .no-projects {
          text-align: center;
          padding: 50px 20px;
          background: var(--panel);
          border-radius: var(--radius-md);
          border: 1px dashed var(--border);
          font-family: var(--font-mono);
          color: var(--muted);
        }

        @media (max-width: 768px) {
          .proj-grid {
            grid-template-columns: 1fr;
          }
          .project-search-box {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
