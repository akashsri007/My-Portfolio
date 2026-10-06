import type { Project, ExperienceItem, CertificationItem, EducationItem, AchievementItem, SkillItem } from '../types/portfolio';

export const personalInfo = {
  name: 'Akash S',
  role: 'Aspiring Machine Learning Developer',
  tagline: 'Python · Computer Vision · Applied AI',
  status: 'OPEN TO OPPORTUNITIES · CHENNAI, INDIA',
  email: 'akashsridhardpi@gmail.com',
  phone: '+91 87783 30766',
  location: 'Chennai, India 600052',
  linkedin: 'https://www.linkedin.com/in/akash-sridhar-8b5789333',
  github: 'https://github.com/akashsri007',
  profilePhoto: '/images/profile.png',
  summary:
    'Organized and dependable, with a habit of taking on extra responsibility to hit team goals. Currently training as an AI & Machine Learning engineer — comfortable moving between model code, data pipelines, and the occasional soldering iron.',
  stats: [
    { label: 'Academic CGPA', value: '7.87', detail: 'Up to 4th Sem · B.Tech AI & ML' },
    { label: 'Oracle Certifications', value: '4x', detail: 'Cloud, SQL, GenAI & Data Science' },
    { label: 'Hackathon Win', value: '1st Place', detail: 'Hack Odyssey 4.0 · ₹30,000 Award' },
    { label: 'Core Focus', value: 'CV & ML', detail: 'Computer Vision & Deep Learning' },
  ],
};

export const skillsData: SkillItem[] = [
  {
    name: 'Python',
    category: 'languages',
    isPending: true,
    pendingNote: 'certificate coming soon',
    level: 90,
  },
  {
    name: 'C++ (DSA, OOP)',
    category: 'languages',
    proofUrl: '/certificates/cpp-proof.pdf',
    proofType: 'pdf',
    level: 85,
  },
  {
    name: 'Java',
    category: 'languages',
    proofUrl: '/certificates/java-proof.pdf',
    proofType: 'pdf',
    level: 80,
  },
  {
    name: 'SQL',
    category: 'languages',
    proofUrl: '/certificates/sql-proof.png',
    proofType: 'image',
    level: 85,
  },
  {
    name: 'JavaScript',
    category: 'languages',
    proofUrl: '/certificates/cisco-javascript-essentials-1.pdf',
    proofType: 'pdf',
    level: 85,
  },
  {
    name: 'OpenCV & MediaPipe',
    category: 'frameworks',
    level: 88,
  },
  {
    name: 'PyTorch / scikit-learn',
    category: 'frameworks',
    level: 84,
  },
  {
    name: 'FastAPI & REST APIs',
    category: 'frameworks',
    level: 82,
  },
  {
    name: 'React & TypeScript',
    category: 'frameworks',
    level: 78,
  },
  {
    name: 'Embedded / IIoT Systems',
    category: 'tools',
    level: 80,
  },
  {
    name: 'Problem-solving',
    category: 'soft-skills',
  },
  {
    name: 'Fast learner & Agile',
    category: 'soft-skills',
  },
  {
    name: 'Data Storytelling',
    category: 'soft-skills',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'tata-genai-2026',
    date: 'FEB 2026',
    role: 'GenAI Powered Data Analytics Job Simulation',
    organization: 'TATA · Forage',
    location: 'Remote Simulation',
    bullets: [
      'Completed practical tasks in exploratory data analysis and risk profiling across enterprise datasets.',
      'Worked on predicting delinquency with AI and implementing an AI-driven automated collections strategy.',
      'Created business reporting and data storytelling presentations for strategic executive decision making.',
    ],
    certificateUrl: '/certificates/tata-genai-job-simulation.pdf',
    certificateName: 'Tata GenAI Certificate',
  },
  {
    id: 'sriram-industries-2026',
    date: '01 JUN 2026 — 22 JUN 2026',
    role: 'Enterprise Resource Planning',
    organization: 'Sriram Industries',
    location: 'Maraimalai Nagar, Tamil Nadu',
    bullets: [
      'Successfully completed intensive hands-on internship in industrial operations and ERP workflows.',
      'Gained valuable real-world exposure to production line systems, data tracking, and industrial safety compliance.',
      'Awarded official internship completion certificate issued by Sriram Industries leadership.',
    ],
    certificateUrl: '/certificates/sriram-industries-internship.pdf',
    certificateName: 'Sriram Industries Internship Certificate',
  },
];

export const projectsData: Project[] = [
  {
    id: 'buildguard-ai',
    number: '01 / building safety',
    category: 'AI & ML',
    title: 'BuildGuard-AI',
    description:
      'A comprehensive building safety and compliance intelligence system that analyzes architectural blueprints and site photos to identify potential fire safety, accessibility, and structural code violations. Employs a hybrid pipeline of computer vision checks and domain rules to compare building plans against physical conditions, generating diagnostic pass/fail audits and mitigation reports.',
    tags: ['React', 'TypeScript', 'FastAPI', 'MySQL', 'Computer Vision', 'Rule Engine'],
    githubUrl: 'https://github.com/akashsri007',
    liveUrl: '#',
    featured: true,
    award: '🏆 Hack Odyssey 4.0 First Prize Winner (₹30,000)',
  },
  {
    id: 'posture-correction',
    number: '02 / vision',
    category: 'Computer Vision',
    title: 'Posture Correction App',
    description:
      'Real-time AI posture assessment and biomechanical feedback system built with OpenCV and Google MediaPipe. Tracks 33 3D skeletal landmarks in real-time, monitors spinal curvature, forward head tilt, and ergonomic posture drift, delivering immediate low-latency audio-visual alerts to combat sedentary strain.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning', 'Real-time Tracking'],
    githubUrl: 'https://github.com/akashsri007',
    liveUrl: '#',
  },
  {
    id: 'healthguard-ai',
    number: '03 / healthcare',
    category: 'AI & ML',
    title: 'HealthGuard AI',
    description:
      'Early health-risk assessment platform predicting diabetes and cardiovascular risk probabilities from non-invasive biometric indicators (BMI, blood pressure, glucose, and lipid profiles). Powered by a calibrated scikit-learn logistic regression pipeline with automated feature importance ranking. Accompanied by a deterministic symptom triage engine classifying patient-reported symptoms into risk urgency tiers.',
    tags: ['Python', 'FastAPI', 'scikit-learn', 'Logistic Regression', 'React', 'Healthcare AI'],
    githubUrl: 'https://github.com/akashsri007/HealthGuard-AI.git',
    liveUrl: 'https://health-guard-aii.vercel.app/',
  },
  {
    id: 'flame-charging',
    number: '04 / hardware',
    category: 'Hardware & IoT',
    title: 'Flame-Based Mobile Charging System',
    description:
      'An embedded hardware prototype converting direct thermal energy from open flames into regulated electrical power via Seebeck-effect thermoelectric generators (TEG). Features custom thermal dissipation heat sinks and a DC-DC step-up voltage boost circuit to reliably charge USB mobile devices from heat gradients.',
    tags: ['Thermoelectric Generator', 'Seebeck Effect', 'Embedded Systems', 'Power Circuits', 'Hardware'],
    videoUrl: '/videos/flame-mobile-charging-demo.mp4',
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'btech-aiml',
    degree: 'B.Tech, Artificial Intelligence & Machine Learning',
    institution: 'R.M.D Engineering College',
    location: 'Tiruvallur, India',
    date: 'Expected 03/2028',
    grade: 'CGPA 7.87 · Up to 4th Semester',
    documentUrl: '/documents/college-record.pdf',
    documentLabel: 'College Record PDF',
    documentType: 'pdf',
  },
  {
    id: 'hsc-class-12',
    degree: 'Higher Secondary Education — Class 12',
    institution: 'Marutham Matric Higher Secondary School',
    location: 'Sennampatti, India',
    date: '03/2024',
    grade: '544 / 600 · 90.67%',
    documentUrl: '/documents/class-12-marksheet.jpg',
    documentLabel: 'Class 12 Marksheet',
    documentType: 'image',
  },
  {
    id: 'sslc-class-10',
    degree: 'Secondary Education — Class 10',
    institution: 'Marutham Matric Higher Secondary School',
    location: 'Sennampatti, India',
    date: '05/2022',
    grade: '444 / 500 · 88.80%',
    documentUrl: '/documents/class-10-marksheet.jpg',
    documentLabel: 'Class 10 Marksheet',
    documentType: 'image',
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'oracle-sql',
    title: 'Oracle AI Database SQL Associate Certified Professional',
    issuer: 'Oracle',
    date: '12 Aug 2026',
    certificateUrl: '/certificates/oracle-sql-associate.pdf',
  },
  {
    id: 'oracle-ds',
    title: 'OCI 2025 Certified Data Science Professional',
    issuer: 'Oracle',
    date: '31 Oct 2025',
    certificateUrl: '/certificates/oracle-data-science.pdf',
  },
  {
    id: 'oracle-apex',
    title: 'Oracle APEX Cloud Developer Certified Professional',
    issuer: 'Oracle',
    date: '10 Sep 2025',
    certificateUrl: '/certificates/oracle-apex.pdf',
  },
  {
    id: 'oracle-genai',
    title: 'Oracle Gen AI Cloud Developer Certified Professional',
    issuer: 'Oracle',
    date: '10 Sep 2025',
    certificateUrl: '/certificates/oracle-genai.pdf',
  },
  {
    id: 'cisco-js-1',
    title: 'JavaScript Essentials 1 (JSE 1)',
    issuer: 'Cisco Networking Academy · OpenEDG',
    date: '18 Feb 2026',
    badge: 'Verified Credential',
    badgeType: 'default',
    certificateUrl: '/certificates/cisco-javascript-essentials-1.pdf',
  },
  {
    id: 'cisco-js-2',
    title: 'JavaScript Essentials 2 (JSE 2)',
    issuer: 'Cisco Networking Academy · OpenEDG',
    date: '18 Feb 2026',
    badge: 'Verified Credential',
    badgeType: 'default',
    certificateUrl: '/certificates/cisco-javascript-essentials-2.pdf',
  },
  {
    id: 'nptel-iiot',
    title: 'Industrial Internet of Things (IIOT)',
    issuer: 'NPTEL · SWAYAM',
    date: 'Jan–Apr 2026 · 84%',
    badge: 'Elite + Silver',
    badgeType: 'silver',
    certificateUrl: '/certificates/iiot.pdf',
  },
  {
    id: 'nptel-softskills',
    title: 'Soft Skill Development',
    issuer: 'NPTEL · SWAYAM',
    date: 'Jan–Mar 2025 · 60%',
    badge: 'Elite',
    badgeType: 'amber',
    certificateUrl: '/certificates/soft-skills.pdf',
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'hack-odyssey',
    title: 'Hack Odyssey 4.0 — 1st Place Winner',
    event: 'Kalasalingam University',
    description:
      'Secured 1st place among 100+ competing engineering teams nationwide for developing BuildGuard AI, an intelligent building safety compliance and inspection system. Awarded a cash prize of ₹30,000 for technical ingenuity, live execution, and societal impact.',
    category: 'co-curricular',
    prize: '₹30,000 Cash Prize · First Rank',
    certificateUrl: '/certificates/hack-odyssey-4.jpeg',
    certificateType: 'image',
  },
  {
    id: 'science-day',
    title: 'Science Day Project Finalist',
    event: 'National Science Day Celebration · Project Expo 2025',
    description:
      'Selected among the Top 15 teams out of 250+ project submissions in the National Science Day Project Expo (Smart Innovation for a Sustainable Future) jointly organized by Department of Science & Humanities, Institution’s Innovation Council, and ISTE — the only qualifying team from the department.',
    category: 'co-curricular',
    prize: 'Top 15 Finalist · Certificate of Appreciation',
    certificateUrl: '/certificates/science-day-project-finalist.jpg',
    certificateType: 'image',
  },
  {
    id: 'cm-trophy',
    title: 'CM Trophy — 2nd Position',
    event: 'Traditional Yogasana State Championship',
    description:
      'Secured 2nd position in the prestigious Chief Minister Trophy under the Traditional Yogasana Category, competing against elite athletes and practitioners across the region.',
    category: 'extra-curricular',
    prize: 'Silver Medalist · 2nd Position',
  },
];
