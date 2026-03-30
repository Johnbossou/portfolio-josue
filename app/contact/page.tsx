'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Github, 
  Linkedin, 
  Twitter,
  Send,
  CheckCircle,
  Calendar,
  MessageCircle,
  Globe,
  Briefcase,
  Users
} from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/src/components/ContactForm';

// Composant pour la carte Google Maps
const MapEmbed = () => {
  return (
    <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.70033079204!2d2.22365985!3d6.3676973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024e4266b5c7b1d%3A0x7b2e7d9c8b3f5a0!2sCotonou%2C%20B%C3%A9nin!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Carte de Cotonou"
        className="filter grayscale hover:grayscale-0 transition-all duration-500"
      />
    </div>
  );
};

// Statistiques de contact
const contactStats = [
  { icon: Clock, value: '< 24h', label: 'Temps de réponse' },
  { icon: CheckCircle, value: '100%', label: 'Satisfaction' },
  // { icon: Users, value: '50+', label: 'Clients satisfaits' },
  { icon: Briefcase, value: 'Remote', label: 'Disponible' },
];

// FAQ rapide
const faqs = [
  {
    question: "Quels sont vos délais de réponse ?",
    answer: "Je réponds généralement sous 24h à tous les messages."
  },
  {
    question: "Travaillez-vous en remote ?",
    answer: "Oui, je suis disponible pour du travail à distance ou en présentiel à Cotonou."
  },
  {
    question: "Quels types de projets acceptez-vous ?",
    answer: "Applications web, sites vitrines, e-commerce, solutions sur mesure avec Laravel/Vue.js/Next.js."
  }
];

export default function ContactPage() {
  const [showFaq, setShowFaq] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container-custom">
        {/* Header avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Restons en <span className="gradient-text">contact</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Vous avez un projet ? Une opportunité ? Ou juste envie d'échanger ? 
            Je suis toujours ouvert aux nouvelles discussions.
          </p>
        </motion.div>

        {/* Statistiques rapides */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {contactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-3">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Colonne gauche - Infos de contact */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Cartes d'information améliorées */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  value: 'josuebossou95@gmail.com',
                  href: 'mailto:josuebossou95@gmail.com',
                  detail: 'Réponse sous 24h',
                  color: 'blue'
                },
                {
                  icon: Phone,
                  title: 'Téléphone',
                  value: '+229 58 01 32 79',
                  href: 'tel:+22958013279',
                  detail: 'Lun-Ven, 9h-18h',
                  color: 'green'
                },
                {
                  icon: MapPin,
                  title: 'Localisation',
                  value: 'Cotonou, Bénin',
                  detail: 'Disponible pour remote',
                  color: 'purple'
                },
                {
                  icon: Clock,
                  title: 'Disponibilité',
                  value: 'Immédiate',
                  detail: 'Freelance / CDI',
                  color: 'orange'
                }
              ].map((item, index) => {
                const Icon = item.icon;
                const colorClasses = {
                  blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
                  green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
                  purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
                  orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                };

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
                  >
                    <div className={`w-12 h-12 ${colorClasses[item.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-blue-600 dark:text-blue-400 hover:underline break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                    )}
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{item.detail}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Carte Google Maps */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <MapPin className="mr-2 text-blue-600" size={20} />
                Ma localisation
              </h3>
              <MapEmbed />
            </motion.div>

            {/* Réseaux sociaux améliorés */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Retrouvez-moi sur
              </h3>
              <div className="flex flex-wrap gap-6">
                {[
                  {
                    icon: Github,
                    href: 'https://github.com/josuebossou',
                    label: 'GitHub',
                    color: 'hover:bg-gray-900',
                    iconColor: 'text-gray-700 dark:text-gray-300 group-hover:text-white'
                  },
                  {
                    icon: Linkedin,
                    href: 'https://linkedin.com/in/josuebossou',
                    label: 'LinkedIn',
                    color: 'hover:bg-blue-600',
                    iconColor: 'text-gray-700 dark:text-gray-300 group-hover:text-white'
                  },
                  {
                    icon: Twitter,
                    href: 'https://twitter.com/josuebossou',
                    label: 'Twitter',
                    color: 'hover:bg-blue-400',
                    iconColor: 'text-gray-700 dark:text-gray-300 group-hover:text-white'
                  },
                  {
                    icon: Globe,
                    href: 'https://portfolio.josuebossou.com',
                    label: 'Portfolio',
                    color: 'hover:bg-purple-600',
                    iconColor: 'text-gray-700 dark:text-gray-300 group-hover:text-white'
                  }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center"
                    >
                      <div className={`w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center ${social.color} transition-colors duration-300`}>
                        <Icon className={`w-7 h-7 ${social.iconColor} transition-colors`} />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* FAQ rapide */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <MessageCircle className="mr-2" size={20} />
                Questions fréquentes
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-blue-400/30 last:border-0 pb-4 last:pb-0">
                    <button
                      onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <span className="text-white font-medium">{faq.question}</span>
                      <span className="text-white/70 text-xl">
                        {selectedFaq === index ? '−' : '+'}
                      </span>
                    </button>
                    {selectedFaq === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-blue-100 mt-2 text-sm"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Colonne droite - Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100 dark:border-gray-700"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                <Send className="mr-2 text-blue-600" size={24} />
                Envoyez-moi un message
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Remplissez le formulaire ci-dessous, je vous répondrai dans les plus brefs délais.
              </p>
            </div>
            
            <ContactForm />

            {/* Informations complémentaires */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <CheckCircle size={14} className="mr-1 text-green-500" />
                  Réponse garantie sous 24h
                </div>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1 text-blue-500" />
                  Disponible maintenant
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section "Pourquoi me contacter" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-bold mb-8">
            Pourquoi <span className="gradient-text">me contacter</span> ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Projets professionnels",
                desc: "Pour discuter de vos besoins en développement web"
              },
              {
                title: "Opportunités de collaboration",
                desc: "Pour explorer des partenariats ou des missions freelance"
              },
              {
                title: "Simplement échanger",
                desc: "Pour partager des idées ou discuter de technologie"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}