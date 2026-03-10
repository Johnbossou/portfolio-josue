import Link from 'next/link';
import { ArrowDown, Code, Database, Layout } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 mb-6">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Disponible pour des opportunités
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Josué{' '}
              <span className="gradient-text">BOSSOU</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Développeur Full-Stack & Étudiant en Génie Logiciel
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Je conçois et développe des applications web performantes avec une architecture solide et une expérience utilisateur soignée.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
              <div className="animate-bounce">
                <ArrowDown className="text-gray-400" size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Skills Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Layout, title: 'Frontend', desc: 'Vue.js, React, Next.js' },
              { icon: Code, title: 'Backend', desc: 'Laravel, Django, Node.js' },
              { icon: Database, title: 'Base de données', desc: 'MySQL, PostgreSQL, SQLite' }
            ].map((skill, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md mb-4">
                  <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}