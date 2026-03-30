'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, Code, Database, Layout, Briefcase, Github, Award, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { cvData } from '@/data/cv';
import ProjectCard from '@/src/components/ProjectCard';

export default function Home() {
  // Récupérer les 3 projets les plus récents (basés sur l'année)
  const recentProjects = [...projects]
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
    .slice(0, 3);

  // Statistiques basées sur les données réelles
  const stats = [
    { icon: Briefcase, value: cvData.experiences.length, label: "Années d'expérience", suffix: '+' },
    { icon: Code, value: projects.length, label: 'Projets réalisés', suffix: '+' },
    { icon: Award, value: cvData.certifications?.length || 3, label: 'Certifications', suffix: '' },
    { icon: Mail, value: '24h', label: 'Temps de réponse', suffix: '' }
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col">
      {/* Hero Section avec animation */}
      <section className="flex-1 flex items-center relative overflow-hidden">
        {/* Background gradient animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20 -z-10" />
        
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge animé */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-6"
            >
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Disponible pour des opportunités
              </span>
            </motion.div>

            {/* Titre avec animation */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Josué{' '}
              <span className="gradient-text">BOSSOU</span>
            </motion.h1>
            
            {/* Sous-titre animé */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto"
            >
              Développeur Full-Stack & Étudiant en Génie Logiciel
            </motion.p>

            {/* Bio basée sur le CV */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            >
              {cvData.personal.bio}
            </motion.p>

            {/* CTA Buttons animés */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link 
                href="/projets"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Voir mes réalisations
              </Link>
              <Link 
                href="/cv"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-all duration-300 hover:scale-105"
              >
                Télécharger mon CV
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
            >
              <div className="animate-bounce">
                <ArrowDown className="text-gray-400" size={24} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Quelques <span className="gradient-text">chiffres</span>
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Skills Preview (amélioré) */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Mes <span className="gradient-text">compétences</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Layout, 
                title: 'Frontend', 
                desc: 'Vue.js, React, Next.js',
                technologies: ['Vue.js', 'React', 'Next.js', 'TypeScript', 'Tailwind']
              },
              { 
                icon: Code, 
                title: 'Backend', 
                desc: 'Laravel, Django, Node.js',
                technologies: ['Laravel', 'Django', 'Node.js', 'Python', 'PHP']
              },
              { 
                icon: Database, 
                title: 'Base de données', 
                desc: 'MySQL, PostgreSQL, SQLite',
                technologies: ['MySQL', 'PostgreSQL', 'SQLite', 'Prisma', 'MongoDB']
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{skill.desc}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                    +2
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Derniers Projets */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Derniers <span className="gradient-text">projets</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Découvrez mes réalisations les plus récentes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/projets"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Voir tous les projets
              <ArrowDown className="ml-2 rotate-180" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section Contact Rapide */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Discutons de votre projet
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-100 mb-8"
            >
              Vous avez une idée ? Un projet ? Je suis là pour vous aider.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Me contacter
                <Mail className="ml-2" size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}