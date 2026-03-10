'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/src/components/ProjectCard';
import { Code, Database, Brain, Smartphone, Filter, X } from 'lucide-react';

const categories = [
  { id: 'all', label: 'Tous les projets', icon: Code },
  { id: 'fullstack', label: 'Full-Stack', icon: Code },
  { id: 'frontend', label: 'Frontend', icon: Smartphone },
  { id: 'backend', label: 'Backend', icon: Database },
  { id: 'ai', label: 'IA & Machine Learning', icon: Brain },
];

const technologies = [
  'Laravel',
  'Vue.js',
  'Next.js',
  'React',
  'Django',
  'Python',
  'MySQL',
  'PostgreSQL',
  'TypeScript',
  'Tailwind'
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const techMatch = !selectedTech || project.technologies.includes(selectedTech);
    return categoryMatch && techMatch;
  });

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedTech(null);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mes <span className="gradient-text">projets</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Découvrez mes réalisations, des applications web complètes aux solutions innovantes intégrant l'IA.
          </p>
        </div>

        {/* Filtres - Desktop */}
        <div className="hidden md:block mb-12">
          {/* Catégories */}
          <div className="flex justify-center space-x-4 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon size={18} className="mr-2" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedTech === tech
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Filtres - Mobile */}
        <div className="md:hidden mb-8">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-800 rounded-xl"
          >
            <span className="flex items-center font-medium">
              <Filter size={18} className="mr-2" />
              Filtrer les projets
            </span>
            {isFilterOpen ? <X size={20} /> : <Filter size={20} />}
          </button>

          {isFilterOpen && (
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Catégories</h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const isActive = selectedCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <Icon size={18} className="mr-3" />
                        {category.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.slice(0, 8).map((tech) => (
                    <button
                      key={tech}
                      onClick={() => {
                        setSelectedTech(selectedTech === tech ? null : tech);
                        setIsFilterOpen(false);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-sm ${
                        selectedTech === tech
                          ? 'bg-blue-600 text-white'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Filtres actifs */}
        {(selectedCategory !== 'all' || selectedTech) && (
          <div className="flex items-center justify-between mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Filtres actifs :</span>
              <div className="flex flex-wrap gap-2">
                {selectedCategory !== 'all' && (
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg">
                    {categories.find(c => c.id === selectedCategory)?.label}
                  </span>
                )}
                {selectedTech && (
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg">
                    {selectedTech}
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={clearFilters}
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white flex items-center"
            >
              <X size={16} className="mr-1" />
              Effacer tout
            </button>
          </div>
        )}

        {/* Grille des projets */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Aucun projet trouvé
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Essayez de modifier vos filtres.
            </p>
            <button
              onClick={clearFilters}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Statistiques */}
        <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {projects.length}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projets réalisés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {projects.filter(p => p.category === 'fullstack').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Applications full-stack</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {projects.filter(p => p.github).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projets open source</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {new Set(projects.flatMap(p => p.technologies)).size}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies maîtrisées</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}