export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'fullstack' | 'frontend' | 'backend' | 'ai';
  client: string;
  year: string;
  role: string;
  features: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 'sgci-benin',
    title: 'SGCI-Bénin',
    description: 'Système de Gestion Commerciale Intelligente avec IA prédictive',
    longDescription: 'Application web/mobile de gestion commerciale intégrant une IA prédictive pour l\'optimisation des ventes, la gestion des stocks et l\'analyse des tendances.',
    image: '/projects/sgci.jpg',
    technologies: ['Laravel', 'Vue.js', 'Python', 'MySQL', 'TensorFlow.js'],
    category: 'ai',
    client: 'Projet personnel',
    year: '2025',
    role: 'Développeur Full-Stack & IA',
    features: [
      'IA prédictive pour les ventes',
      'Gestion des stocks en temps réel',
      'Dashboard analytique',
      'Application mobile responsive'
    ],
    github: 'https://github.com/josuebossou/sgci-benin',
    demo: 'https://sgci-benin.demo'
  },
  {
    id: 'gestion-fonciere',
    title: 'Gestion des Parcelles Foncières',
    description: 'Application de gestion foncière avec carte interactive',
    longDescription: 'Système complet de gestion des parcelles foncières pour la Mairie d\'Abomey-Calavi avec cartographie interactive, export de documents et contrôle d\'accès.',
    image: '/projects/foncier.jpg',
    technologies: ['Laravel', 'JavaScript', 'MySQL', 'Leaflet.js', 'Chart.js'],
    category: 'fullstack',
    client: 'Mairie de Abomey-Calavi',
    year: '2025',
    role: 'Développeur Full-Stack',
    features: [
      'Cartographie interactive (Leaflet.js)',
      'Export PDF/Excel',
      'Système de journalisation',
      'Contrôle des utilisateurs'
    ],
    demo: 'https://foncier-demo.vercel.app'
  },
  {
    id: 'ecommerce-laravel',
    title: 'E-Commerce Laravel',
    description: 'Plateforme e-commerce complète avec panier et paiement',
    longDescription: 'Solution e-commerce complète avec gestion des produits, panier d\'achat, paiement en ligne et tableau de bord administrateur.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Laravel', 'Livewire', 'Tailwind CSS', 'MySQL', 'Stripe'],
    category: 'fullstack',
    client: 'Projet académique',
    year: '2024',
    role: 'Développeur Backend & Frontend',
    features: [
      'Catalogue produits',
      'Panier d\'achat',
      'Paiement Stripe',
      'Dashboard admin'
    ],
    github: 'https://github.com/josuebossou/ecommerce-laravel'
  },
  {
    id: 'taskmanager-next',
    title: 'Task Manager Next.js',
    description: 'Application de gestion de tâches avec Next.js et Prisma',
    longDescription: 'Application moderne de gestion de tâches avec authentification, base de données PostgreSQL et déploiement sur Vercel.',
    image: '/projects/taskmanager.jpg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    category: 'frontend',
    client: 'Projet personnel',
    year: '2025',
    role: 'Développeur Frontend',
    features: [
      'Authentification NextAuth',
      'CRUD complet',
      'Base de données PostgreSQL',
      'UI responsive'
    ],
    github: 'https://github.com/josuebossou/taskmanager-next',
    demo: 'https://taskmanager-next.vercel.app'
  },
  {
    id: 'api-django',
    title: 'API REST Django',
    description: 'API RESTful pour application mobile avec Django REST Framework',
    longDescription: 'Développement d\'une API REST complète avec authentification JWT, documentation Swagger et tests unitaires.',
    image: '/projects/django-api.jpg',
    technologies: ['Django', 'DRF', 'PostgreSQL', 'JWT', 'Swagger'],
    category: 'backend',
    client: 'Freelance',
    year: '2024',
    role: 'Développeur Backend',
    features: [
      'Authentification JWT',
      'Documentation Swagger',
      'Tests automatisés',
      'Déploiement sur Railway'
    ],
    github: 'https://github.com/josuebossou/drf-api'
  }
];