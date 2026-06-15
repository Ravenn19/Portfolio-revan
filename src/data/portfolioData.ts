export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  image: string;
}

export interface SkillCategory {
  icon: string;
  category: string;
  items: string[];
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
  isExternal?: boolean;
}

export interface SocialLink {
  name: string;
  icon: string;
  href: string;
}

export const heroData = {
  name: 'Nanda Revan Saputro',
  title: 'AI & Full Stack Developer',
  tagline: 'Building intelligent systems and modern web platforms that merge innovation and practicality.',
};

export const aboutData = {
  name: 'Nanda Revan Saputro',
  title: 'AI & Full Stack Developer',
  paragraphs: [
    "I'm a 20 years old Informatics Engineering student at Institut Teknologi PLN with a GPA of 3.96. Passionate about Artificial Intelligence and software development, I combine creativity and logic to craft impactful digital solutions that merge innovation and practicality.",
    "Driven by curiosity and vision, I build intelligent systems, web platforms, and AI-powered solutions that bridge technology and creativity. My goal is to create systems that don't just work — they inspire.",
  ],
  quote: '\u201CInnovation isn\u2019t luck \u2014 it\u2019s the result of focus, persistence, and curiosity.\u201D',
  photo: '/images/revan.jpg',
};

export const experienceData: Experience[] = [
  {
    role: 'Full Stack Developer',
    company: 'Institut Teknologi PLN',
    duration: 'Dec 2025 – Present',
    description:
      'Worked as a Full Stack Developer at BUIB IT PLN, handling both frontend and backend development to support digital business initiatives. Built the STP ITPLN website using Laravel, improving digital presence, user engagement, and overall system performance.',
    image: '/images/itpln1.jpg',
  },
  {
    role: 'Data Visualization Intern',
    company: 'Icon Plus PLN Cawang',
    duration: 'February 2026',
    description:
      'Created data visualizations to support network monitoring and operational insights at Icon Plus PLN Cawang. Processed and analyzed operational data to help teams understand patterns, improve reporting, and support data-driven decision making.',
    image: '/images/iconplus.png',
  },
  {
    role: 'Internship',
    company: 'PT. Rajawali Konsulindo',
    duration: 'Apr 2022 – Jun 2022',
    description:
      'Gained hands-on experience in web development and database management. Assisted in building the Ourtoga GAFRS FRAC website, collaborating with a development team and applying technical knowledge in real-world project execution.',
    image: '/images/pt_rajawali.jpg',
  },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Website Technopark ITPLN',
    description:
      'A Laravel-based website designed to manage Technopark IT PLN\u2019s operations, events, and collaborations. This platform improves internal coordination, enhances service visibility, and provides a centralized system for innovation management.',
    image: '/images/porto1.jpg',
    tech: ['Laravel', 'JavaScript', 'PHP', 'SQL'],
    link: 'https://technopark.itpln.ac.id/',
  },
  {
    id: 2,
    title: 'Website Usaha Kerjasama ITPLN',
    description:
      'A business collaboration website for IT PLN, focusing on the creation of a secure digital signature feature and automated backend integration for contract validation and user authentication.',
    image: '/images/porto2.jpg',
    tech: ['PHP', 'JavaScript', 'SQL'],
    link: 'https://usahakerjasama.id/',
  },
  {
    id: 3,
    title: 'First Experience With Golang',
    description:
      'A full-stack system combining the Go Gin framework and React for building efficient, scalable web architectures, with a focus on structured APIs and reactive front-end rendering.',
    image: '/images/porto3.jpg',
    tech: ['Go (Gin)', 'React', 'JavaScript'],
    link: 'https://github.com/Ravenn19/Portofolio-Golang',
  },
  {
    id: 4,
    title: 'Clean vs Mess Classifier',
    description:
      'A deep learning project that classifies room conditions as clean or messy using adaptive convolutional networks and TensorFlow pipelines optimized for visual inference.',
    image: '/images/porto4.png',
    tech: ['Python', 'TensorFlow', 'Machine Learning'],
    link: 'https://github.com/Ravenn19/Clean-vs-Messy-Room',
  },
  {
    id: 5,
    title: 'Face Detection & Recognition',
    description:
      'Real-time facial recognition system using OpenCV and deep neural networks for automatic identity verification and access control solutions.',
    image: '/images/porto5.jpg',
    tech: ['Python', 'OpenCV', 'TensorFlow'],
    link: 'https://github.com/Ravenn19/Face_Recognition_DeepFace',
  },
  {
    id: 6,
    title: 'House Price Prediction',
    description:
      'A regression-based machine learning model predicting house prices based on area, location, and condition, built using Scikit-learn and Pandas.',
    image: '/images/porto6.png',
    tech: ['Python', 'Scikit-learn', 'Pandas'],
    link: 'https://github.com/Ravenn19/Analyzed-customer-sales',
  },
  {
    id: 7,
    title: 'Islamic App',
    description:
      'A mobile app providing Quran, Hadith, prayer times, and Qibla direction with Website Interface integration, ensuring speed, reliability, and clean user experience.',
    image: '/images/porto7.png',
    tech: ['Flutter', 'Firebase', 'REST API'],
    link: 'https://github.com/Ravenn19/Islamic-Application',
  },
];

export const skillsData: SkillCategory[] = [
  {
    icon: '🎨',
    category: 'Frontend',
    items: ['HTML & CSS', 'JavaScript', 'React JS', 'Responsive Web Design'],
  },
  {
    icon: '⚙️',
    category: 'Backend',
    items: ['PHP', 'Laravel', 'Golang', 'SQL & Database Management'],
  },
  {
    icon: '🤖',
    category: 'Artificial Intelligence',
    items: [
      'Python',
      'TensorFlow',
      'Face Recognition & Detection',
      'Chatbot Development',
      'Data Analysis (Pandas, Matplotlib)',
    ],
  },
  {
    icon: '💬',
    category: 'Soft Skills',
    items: ['Public Speaking', 'Leadership', 'Problem Solving', 'Collaboration'],
  },
  {
    icon: '🌐',
    category: 'Languages',
    items: ['Indonesian', 'English'],
  },
  {
    icon: '🔥',
    category: 'Hobbies',
    items: ['Gym', 'Coding'],
  },
];

export const contactInfo: ContactInfo[] = [
  {
    icon: 'MapPin',
    label: 'Location',
    value: 'Jakarta, Indonesia',
  },
  {
    icon: 'Mail',
    label: 'Email',
    value: 'nandarevan96@gmail.com',
    href: 'mailto:nandarevan96@gmail.com',
  },
  {
    icon: 'Phone',
    label: 'Phone',
    value: '+62 899-7384-624',
    href: 'https://wa.me/+628997384624',
    isExternal: true,
  },
  {
    icon: 'Linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/nanda-revan-saputro-3b89ab284',
    href: 'https://www.linkedin.com/in/nanda-revan-saputro-3b89ab284/',
    isExternal: true,
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    icon: 'Linkedin',
    href: 'https://www.linkedin.com/in/nanda-revan-saputro-3b89ab284/',
  },
  {
    name: 'GitHub',
    icon: 'Github',
    href: 'https://github.com/Ravenn19',
  },
  {
    name: 'Instagram',
    icon: 'Instagram',
    href: 'https://www.instagram.com/ravenn_17',
  },
  {
    name: 'TikTok',
    icon: 'Music2',
    href: 'https://www.tiktok.com/@ravenn_17?_t=ZS-8zFVOI1jLNw&_r=1',
  },
  {
    name: 'Email',
    icon: 'Mail',
    href: 'mailto:nandarevan96@gmail.com',
  },
  {
    name: 'Phone',
    icon: 'Phone',
    href: 'https://wa.me/+628997384624',
  },
];

export const footerServices = [
  { label: 'Web Development', href: '#projects' },
  { label: 'App Development', href: '#projects' },
  { label: 'Data Science', href: '#projects' },
  { label: 'Data Analyst', href: '#projects' },
  { label: 'AI Solutions', href: '#skills' },
  { label: 'Full Stack Development', href: '#projects' },
];

export const footerQuickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const footerTechnologies = [
  { label: 'Frontend Development', href: '#skills' },
  { label: 'Backend Development', href: '#skills' },
  { label: 'Artificial Intelligence', href: '#skills' },
  { label: 'Database Management', href: '#skills' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skill', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const carouselData = projectsData.map((p) => ({
  id: p.id,
  title: p.title,
  description:
    p.id === 1
      ? 'A Laravel-based website for managing Technopark IT PLN activities and services.'
      : p.id === 2
        ? 'A website for IT PLN\u2019s business collaboration platform, where I focused on developing the digital signature feature and related functionalities.'
        : p.id === 3
          ? 'A Golang project using the Gin framework for the backend and React for the frontend.'
          : p.id === 4
            ? 'Machine learning model for real-time classification of clean and messy data.'
            : p.id === 5
              ? 'AI system for real-time face detection and recognition using computer vision.'
              : p.id === 6
                ? 'A machine learning model that predicts house prices based on features like location, size, and condition.'
                : 'A mobile application featuring Quran, Hadith, prayer times, and Qibla direction with a clean and user-friendly interface.',
  image: p.image,
  tech:
    p.id === 2
      ? ['PHP', 'JavaScript', 'SQL']
      : p.id === 3
        ? ['Gin', 'Go', 'JavaScript', 'React']
        : p.id === 4
          ? ['Machine Learning', 'Python', 'Data Preprocessing']
          : p.tech,
}));
