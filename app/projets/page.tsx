'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '@/data/projects';
import ProjectCard from '@/src/components/ProjectCard';
import { 
  Code, 
  Database, 
  Brain, 
  Smartphone, 
  Filter, 
  X, 
  Search,
  Calendar,
  ArrowUpDown,
  Grid3x3,
  LayoutList
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'Tous les projets', icon: Code, color: 'blue' },
  { id: 'fullstack', label: 'Full-Stack', icon: Code, color: 'green' },
  { id: 'frontend', label: 'Frontend', icon: Smartphone, color: 'purple' },
  { id: 'backend', label: 'Backend', icon: Database, color: 'orange' },
  { id: 'ai', label: 'IA & Machine Learning', icon: Brain, color: 'pink' },
];

// Extraire toutes les technologies uniques des projets
const allTechnologies = Array.from(
  new Set(projects.flatMap(p => p.technologies))
).sort();

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'oldest'>('recent');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filtrer et trier les projets
  const filteredProjects = useMemo(() => {
    let filtered = projects.filter((project) => {
      const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
      const techMatch = !selectedTech || project.technologies.includes(selectedTech);
      const searchMatch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return categoryMatch && techMatch && searchMatch;
    });

    // Trier par date
    filtered.sort((a, b) => {
      const yearA = parseInt(a.year);
      const yearB = parseInt(b.year);
      return sortBy === 'recent' ? yearB - yearA : yearA - yearB;
    });

    return filtered;
  }, [selectedCategory, selectedTech, searchQuery, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedTech(null);
    setSearchQuery('');
  };

  const activeFiltersCount = [
    selectedCategory !== 'all' && 1,
    selectedTech && 1,
    searchQuery && 1
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container-custom">
        {/* Header avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mes <span className="gradient-text">projets</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Découvrez mes réalisations, des applications web complètes aux solutions innovantes intégrant l'IA.
          </p>
        </motion.div>

        {/* Barre de recherche et contrôles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Barre de recherche */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Rechercher un projet ou une technologie..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Contrôles */}
            <div className="flex gap-2 w-full md:w-auto">
              {/* Tri */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'recent' | 'oldest')}
                className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="recent">Plus récents</option>
                <option value="oldest">Plus anciens</option>
              </select>

              {/* Vue grille/liste */}
              <div className="flex bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Grid3x3 size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <LayoutList size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filtres - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden md:block mb-8"
        >
          {/* Catégories */}
          <div className="flex justify-center space-x-3 mb-6">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? `bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105`
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon size={16} className="mr-2" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap justify-center gap-2">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedTech === tech
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Filtres - Mobile */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <span className="flex items-center font-medium">
              <Filter size={18} className="mr-2" />
              Filtrer les projets
              {activeFiltersCount > 0 && (
                <span className="ml-2 px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </span>
            {isFilterOpen ? <X size={20} /> : <Filter size={20} />}
          </button>

          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 overflow-hidden"
              >
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
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
                                : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
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
                      {allTechnologies.slice(0, 10).map((tech) => (
                        <button
                          key={tech}
                          onClick={() => {
                            setSelectedTech(selectedTech === tech ? null : tech);
                            setIsFilterOpen(false);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-sm ${
                            selectedTech === tech
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Filtres actifs */}
        <AnimatePresence>
          {(selectedCategory !== 'all' || selectedTech || searchQuery) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center justify-between mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl"
            >
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Filtres actifs :</span>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory !== 'all' && (
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg flex items-center">
                      {categories.find(c => c.id === selectedCategory)?.label}
                      <button onClick={() => setSelectedCategory('all')} className="ml-2">
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {selectedTech && (
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg flex items-center">
                      {selectedTech}
                      <button onClick={() => setSelectedTech(null)} className="ml-2">
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg flex items-center">
                      "{searchQuery}"
                      <button onClick={() => setSearchQuery('')} className="ml-2">
                        <X size={12} />
                      </button>
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={clearFilters}
                className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white flex items-center"
              >
                <X size={16} className="mr-1" />
                Tout effacer
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Compteur de résultats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 text-sm text-gray-600 dark:text-gray-400"
        >
          {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
        </motion.div>

        {/* Grille des projets avec animation */}
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Aucun projet trouvé
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Aucun projet ne correspond à vos critères.
            </p>
            <button
              onClick={clearFilters}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </motion.div>
        )}

        {/* Statistiques améliorées */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-2xl font-bold text-center mb-12">
            Quelques <span className="gradient-text">chiffres</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {projects.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projets réalisés</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {projects.filter(p => p.category === 'fullstack').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Applications full-stack</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {projects.filter(p => p.github).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projets open source</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {allTechnologies.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies maîtrisées</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}