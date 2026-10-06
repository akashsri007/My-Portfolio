export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  featured?: boolean;
  award?: string;
}

export interface ExperienceItem {
  id: string;
  date: string;
  role: string;
  organization: string;
  location?: string;
  bullets: string[];
  certificateUrl?: string;
  certificateName?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge?: string;
  badgeType?: 'silver' | 'amber' | 'gold' | 'default';
  certificateUrl: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  date: string;
  grade: string;
  documentUrl?: string;
  documentLabel?: string;
  documentType?: 'pdf' | 'image';
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  description: string;
  category: 'co-curricular' | 'extra-curricular';
  prize?: string;
  certificateUrl?: string;
  certificateType?: 'pdf' | 'image';
  pendingNote?: string;
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'frameworks' | 'tools' | 'soft-skills';
  proofUrl?: string;
  proofType?: 'pdf' | 'image';
  isPending?: boolean;
  pendingNote?: string;
  level?: number;
}

export interface ModalMedia {
  isOpen: boolean;
  type: 'pdf' | 'image' | 'video';
  title: string;
  subtitle?: string;
  url: string;
}
