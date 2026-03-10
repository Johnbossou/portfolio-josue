export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: {
    name: string;
    level?: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
    years?: number;
  }[];
}

export const cvData = {
  personal: {
    name: 'Josué BOSSOU',
    title: 'Développeur Full-Stack',
    email: 'josuebossou95@gmail.com',
    phone: '+229 58 01 32 79',
    location: 'Cotonou, Bénin',
    bio: 'Diplômé en Génie Logiciel avec une passion pour le développement d\'applications web performantes. Fort d\'expériences concrètes en entreprise (Mairie d\'Abomey-Calavi, Ministère de la Justice), j\'allie rigueur technique et sens de l\'innovation pour concevoir des solutions logicielles robustes et intuitives.'
  },
  experiences: [
    {
      id: 'mairie',
      title: 'Développeur Full-Stack',
      company: 'Mairie de Abomey-Calavi',
      location: 'Cotonou, Bénin',
      startDate: '2025-07',
      endDate: '2025-10',
      description: [
        'Développement du Système de Gestion des Parcelles Foncières 2.0 avec Laravel et JavaScript',
        'Intégration de cartographie interactive (Leaflet.js) pour visualisation des parcelles',
        'Mise en place d\'un système d\'export PDF/Excel des documents fonciers',
        'Implémentation d\'un système de journalisation des actions utilisateurs',
        'Optimisation des requêtes SQL et amélioration des performances'
      ],
      technologies: ['Laravel', 'JavaScript', 'MySQL', 'Leaflet.js', 'Chart.js', 'Bootstrap']
    },
    {
      id: 'cncj',
      title: 'Développeur Full-Stack',
      company: 'Ministère de la Justice (CNCJ)',
      location: 'Cotonou, Bénin',
      startDate: '2024-05',
      endDate: '2024-08',
      description: [
        'Intégration de pages dynamiques avec Vue.js et Bootstrap',
        'Collaboration avec l\'équipe back-end Laravel pour la découverte d\'API',
        'Développement et intégration de modules frontend',
      ],
      technologies: ['Vue.js', 'Laravel', 'Bootstrap', 'MySQL', 'REST API']
    },
    {
      id: 'sgci',
      title: 'Développeur Full-Stack & IA',
      company: 'SGCI-Bénin (Projet personnel)',
      location: 'Cotonou, Bénin',
      startDate: '2025-01',
      endDate: '2025-04',
      description: [
        'Développement d\'un système de gestion commerciale intégrant une IA prédictive',
        'Création d\'algorithmes de prédiction des ventes et gestion des stocks',
        'Développement d\'une interface web et mobile responsive',
        'Mise en place de tableaux de bord analytiques en temps réel'
      ],
      technologies: ['Laravel', 'Vue.js', 'Python', 'MySQL', 'TensorFlow.js', 'Chart.js']
    }
  ],
  education: [
    {
      id: 'ifri',
      degree: 'Licence en Génie Logiciel',
      institution: 'Institut de Formation et de Recherche en Informatique (IFRI)',
      location: 'Cotonou, Bénin',
      startDate: '2022',
      endDate: '2025',
      description: [
        'Formation axée sur la programmation, la conception d\'applications web et la gestion de projets logiciels',
        'Développement de plusieurs projets pratiques en Laravel, Vue.js, Python et C++',
        'Mémoire : "Développement d\'un système de gestion foncière avec cartographie interactive"',
        'Moyenne : 16.5/20'
      ]
    }
  ],
  skills: [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML/CSS', level: 'Avancé', years: 3 },
        { name: 'JavaScript/TypeScript', level: 'Avancé', years: 3 },
        { name: 'Vue.js', level: 'Avancé', years: 2 },
        { name: 'React/Next.js', level: 'Intermédiaire', years: 1.5 },
        { name: 'Tailwind CSS', level: 'Avancé', years: 2 },
        { name: 'Bootstrap', level: 'Avancé', years: 3 }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'PHP/Laravel', level: 'Avancé', years: 3 },
        { name: 'Python/Django', level: 'Intermédiaire', years: 2 },
        { name: 'Node.js', level: 'Intermédiaire', years: 1 },
        { name: 'Java', level: 'Intermédiaire', years: 2 },
        { name: 'C/C++', level: 'Intermédiaire', years: 2 }
      ]
    },
    {
      category: 'Base de données',
      items: [
        { name: 'MySQL', level: 'Avancé', years: 3 },
        { name: 'PostgreSQL', level: 'Intermédiaire', years: 2 },
        { name: 'SQLite', level: 'Avancé', years: 3 },
        { name: 'Oracle', level: 'Débutant', years: 1 }
      ]
    },
    {
      category: 'Outils & Méthodologies',
      items: [
        { name: 'Git/GitHub', level: 'Avancé', years: 3 },
        { name: 'Docker', level: 'Débutant', years: 1 },
        { name: 'Agile/Scrum', level: 'Intermédiaire', years: 2 },
        { name: 'Figma', level: 'Intermédiaire', years: 1.5 },
        { name: 'Jira', level: 'Intermédiaire', years: 2 }
      ]
    }
  ],
  languages: [
    { name: 'Français', level: 'Natif', emoji: '🇫🇷' },
    { name: 'Anglais', level: 'Professionnel', emoji: '🇬🇧' }
  ],
  interests: [
    'Développement open source',
    'Intelligence artificielle',
    'UI/UX Design',
    'Sport (Football, Basketball)',
    'Lecture technique'
  ],
  certifications: [
    {
      name: 'Laravel Certification',
      issuer: 'Laravel',
      year: '2024'
    },
    {
      name: 'Vue.js Developer',
      issuer: 'Vue School',
      year: '2024'
    },
    {
      name: 'Python for Data Science',
      issuer: 'IBM',
      year: '2023'
    }
  ]
};