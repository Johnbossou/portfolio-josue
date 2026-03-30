'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Download, 
  Mail, 
  MapPin, 
  Phone, 
  Award, 
  Heart, 
  FileText, 
  Briefcase, 
  GraduationCap,
  Github,
  Linkedin,
  Globe,
  Calendar,
  ChevronDown,
  ChevronUp,
  Share2,
  Printer
} from 'lucide-react';
import { cvData } from '@/data/cv';
import SkillBadge from '@/src/components/SkillBadge';
import Timeline from '@/src/components/Timeline';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function CVPage() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [activeTab, setActiveTab] = useState<'experiences' | 'competences' | 'formations'>('experiences');
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const cvRef = useRef<HTMLDivElement>(null);

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
    const dateA = a.startDate.includes('-') ? a.startDate : `${a.startDate}-01`;
    const dateB = b.startDate.includes('-') ? b.startDate : `${b.startDate}-01`;
    return dateB.localeCompare(dateA);
  });

  // Fonction de génération PDF améliorée
  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // En-tête
    doc.setFontSize(24);
    doc.setTextColor(37, 99, 235); // Bleu
    doc.text(cvData.personal.name, 20, 20);
    
    doc.setFontSize(14);
    doc.setTextColor(100, 100, 100);
    doc.text(cvData.personal.title, 20, 30);
    
    // Coordonnées
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(`Email: ${cvData.personal.email}`, 20, 40);
    doc.text(`Tél: ${cvData.personal.phone}`, 20, 45);
    doc.text(`Localisation: ${cvData.personal.location}`, 20, 50);
    
    // Bio
    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    const bioLines = doc.splitTextToSize(cvData.personal.bio, pageWidth - 40);
    doc.text(bioLines, 20, 60);
    
    let yPos = 60 + (bioLines.length * 5);
    
    // Expériences professionnelles
    doc.setFontSize(16);
    doc.setTextColor(37, 99, 235);
    doc.text('Expériences professionnelles', 20, yPos + 10);
    
    const expData = cvData.experiences.map(exp => [
      exp.title,
      exp.company,
      `${exp.startDate} - ${exp.endDate}`,
      exp.description[0]
    ]);
    
    autoTable(doc, {
      startY: yPos + 15,
      head: [['Poste', 'Entreprise', 'Période', 'Description']],
      body: expData,
      theme: 'striped',
      headStyles: { fillColor: [37, 99, 235] },
    });
    
    // Compétences
    yPos = (doc as any).lastAutoTable.finalY + 10;
    doc.setFontSize(16);
    doc.setTextColor(37, 99, 235);
    doc.text('Compétences techniques', 20, yPos);
    
    const skillsData: string[][] = [];
    cvData.skills.forEach(skillGroup => {
      skillGroup.items.forEach(skill => {
        skillsData.push([skillGroup.category, skill.name, skill.level || 'Intermédiaire', `${skill.years || 1} an(s)`]);
      });
    });
    
    autoTable(doc, {
      startY: yPos + 5,
      head: [['Catégorie', 'Compétence', 'Niveau', 'Expérience']],
      body: skillsData,
      theme: 'striped',
      headStyles: { fillColor: [37, 99, 235] },
    });
    
    // Sauvegarde
    doc.save('CV-Josue-BOSSOU.pdf');
  };

  // Niveau de compétence en pourcentage
  const getSkillLevel = (level?: string): number => {
    switch (level) {
      case 'Expert': return 95;
      case 'Avancé': return 80;
      case 'Intermédiaire': return 60;
      case 'Débutant': return 40;
      default: return 50;
    }
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

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
            Mon <span className="gradient-text">parcours</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Découvrez mon expérience, mes compétences et ma formation.
          </p>
        </motion.div>

        {/* Carte principale - Infos personnelles avec photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Photo de profil */}
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                  JB
                </div>
                {/* Quand tu auras une photo, décommente ceci :
                <Image
                  src="/profile.jpg"
                  alt={cvData.personal.name}
                  fill
                  className="object-cover"
                />
                */}
              </div>
            </div>

            {/* Infos */}
            <div className="flex-1">
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
                    onClick={generatePDF}
                    className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Download size={18} className="mr-2" />
                    Télécharger CV
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Printer size={18} className="mr-2" />
                    Imprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bio */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {cvData.personal.bio}
            </p>
          </motion.div>

          {/* Réseaux sociaux */}
          <div className="mt-6 flex space-x-4">
            <a
              href="https://github.com/josuebossou"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Github size={18} className="mr-2" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/josuebossou"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Linkedin size={18} className="mr-2" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Navigation par onglets avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8 bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
        >
          {[
            { id: 'experiences', label: 'Expériences', icon: FileText, count: cvData.experiences.length },
            { id: 'competences', label: 'Compétences', icon: Award, count: cvData.skills.reduce((acc, s) => acc + s.items.length, 0) },
            { id: 'formations', label: 'Formations', icon: GraduationCap, count: cvData.education.length }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Icon size={18} className="mr-2" />
                {tab.label}
                <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                  isActive
                    ? 'bg-white text-blue-600'
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Contenu dynamique avec animations */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
        >
          {/* Expériences */}
          {activeTab === 'experiences' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Briefcase className="mr-3 text-blue-600 dark:text-blue-400" size={24} />
                Expériences professionnelles
                <span className="ml-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                  {cvData.experiences.length} poste{cvData.experiences.length > 1 ? 's' : ''}
                </span>
              </h3>
              <Timeline items={timelineItems.filter(item => item.type === 'work')} />
            </div>
          )}

          {/* Compétences améliorées */}
          {activeTab === 'competences' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Award className="mr-3 text-blue-600 dark:text-blue-400" size={24} />
                Compétences techniques
              </h3>
              
              <div className="space-y-8">
                {cvData.skills.map((skillGroup, groupIndex) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: groupIndex * 0.1 }}
                  >
                    <div 
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleSection(skillGroup.category)}
                    >
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        {skillGroup.category}
                        <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                          ({skillGroup.items.length})
                        </span>
                      </h4>
                      {expandedSections.includes(skillGroup.category) ? (
                        <ChevronUp size={20} className="text-gray-500" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-500" />
                      )}
                    </div>
                    
                    <AnimatePresence>
                      {(expandedSections.includes(skillGroup.category) || expandedSections.length === 0) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4"
                        >
                          {skillGroup.items.map((skill) => (
                            <div key={skill.name} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="font-medium text-gray-900 dark:text-white">
                                  {skill.name}
                                </span>
                                <div className="flex items-center space-x-4">
                                  <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {skill.level || 'Intermédiaire'}
                                  </span>
                                  {skill.years && (
                                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                                      {skill.years} an{skill.years > 1 ? 's' : ''}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${getSkillLevel(skill.level)}%` }}
                                  transition={{ duration: 1, delay: 0.2 }}
                                  className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                                />
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Langues avec progression */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Langues
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cvData.languages.map((lang) => (
                    <div key={lang.name} className="space-y-2">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{lang.emoji}</span>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{lang.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{lang.level}</p>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: lang.level === 'Natif' ? '100%' : '80%' }}
                          transition={{ duration: 1 }}
                          className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full"
                        />
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
                    {cvData.certifications.map((cert, index) => (
                      <motion.div
                        key={cert.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700/50 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                      >
                        <Award size={24} className="mr-3 text-yellow-500 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{cert.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer} • {cert.year}</p>
                        </div>
                      </motion.div>
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
                  {cvData.interests.map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Bouton de contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Mail size={20} className="mr-2" />
            Me contacter
          </a>
        </motion.div>
      </div>
    </div>
  );
}