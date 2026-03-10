'use client';

import { useState } from 'react';
import { 
  Download, 
  Mail, 
  MapPin, 
  Phone, 
  Award, 
  Heart, 
  FileText, 
  Printer, 
  Briefcase, 
  GraduationCap 
} from 'lucide-react';
import { cvData } from '@/data/cv';
import SkillBadge from '@/src/components/SkillBadge';
import Timeline from '@/src/components/Timeline';

export default function CVPage() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [activeTab, setActiveTab] = useState<'experiences' | 'competences' | 'formations'>('experiences');

  // Préparer les données pour la timeline
  const timelineItems = [
    ...cvData.experiences.map(exp => ({
      ...exp,
      subtitle: exp.company,
      type: 'work' as const
    })),
    ...cvData.education.map(edu => ({
      ...edu,
      title: edu.degree,
      subtitle: edu.institution,
      type: 'education' as const,
      technologies: undefined
    }))
  ].sort((a, b) => {
    // Trier par date (du plus récent au plus ancien)
    const dateA = a.startDate.includes('-') ? a.startDate : `${a.startDate}-01`;
    const dateB = b.startDate.includes('-') ? b.startDate : `${b.startDate}-01`;
    return dateB.localeCompare(dateA);
  });

  const handleDownloadPDF = () => {
    // Pour l'instant, on ouvre la version imprimable
    window.print();
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mon <span className="gradient-text">parcours</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Découvrez mon expérience, mes compétences et ma formation.
          </p>
        </div>

        {/* Carte principale - Infos personnelles */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {cvData.personal.name}
              </h2>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-4">
                {cvData.personal.title}
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Mail size={16} className="mr-2" />
                  <a href={`mailto:${cvData.personal.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                    {cvData.personal.email}
                  </a>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Phone size={16} className="mr-2" />
                  <a href={`tel:${cvData.personal.phone}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                    {cvData.personal.phone}
                  </a>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin size={16} className="mr-2" />
                  {cvData.personal.location}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button
                onClick={handleDownloadPDF}
                className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download size={18} className="mr-2" />
                Télécharger CV
              </button>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {cvData.personal.bio}
            </p>
          </div>
        </div>

        {/* Navigation par onglets */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          {[
            { id: 'experiences', label: 'Expériences', icon: FileText },
            { id: 'competences', label: 'Compétences', icon: Award },
            { id: 'formations', label: 'Formations', icon: GraduationCap }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Icon size={18} className="mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Contenu dynamique */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
          {/* Expériences */}
          {activeTab === 'experiences' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Briefcase className="mr-3 text-blue-600 dark:text-blue-400" size={24} />
                Expériences professionnelles
              </h3>
              <Timeline items={timelineItems.filter(item => item.type === 'work')} />
            </div>
          )}

          {/* Compétences */}
          {activeTab === 'competences' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Award className="mr-3 text-blue-600 dark:text-blue-400" size={24} />
                Compétences techniques
              </h3>
              
              <div className="space-y-8">
                {cvData.skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <SkillBadge
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          years={skill.years}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Langues */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Langues
                </h4>
                <div className="flex flex-wrap gap-4">
                  {cvData.languages.map((lang) => (
                    <div key={lang.name} className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      <span className="text-2xl mr-2">{lang.emoji}</span>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{lang.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{lang.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              {cvData.certifications && (
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Certifications
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cvData.certifications.map((cert) => (
                      <div key={cert.name} className="flex items-start p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <Award size={20} className="mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{cert.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer} • {cert.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Formations */}
          {activeTab === 'formations' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <GraduationCap className="mr-3 text-blue-600 dark:text-blue-400" size={24} />
                Formation académique
              </h3>
              <Timeline items={timelineItems.filter(item => item.type === 'education')} />

              {/* Centres d'intérêt */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Heart size={18} className="mr-2 text-red-500" />
                  Centres d'intérêt
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cvData.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bouton de contact */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Mail size={20} className="mr-2" />
            Me contacter
          </a>
        </div>
      </div>
    </div>
  );
}