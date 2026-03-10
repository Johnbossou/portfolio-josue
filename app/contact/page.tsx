import { Mail, MapPin, Phone, Clock, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/src/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Restons en <span className="gradient-text">contact</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Vous avez un projet ? Une opportunité ? Ou juste envie d'échanger ? 
            Je suis toujours ouvert aux nouvelles discussions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Colonne gauche - Infos de contact */}
          <div className="space-y-8">
            {/* Cartes d'information */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <a href="mailto:josuebossou95@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline break-all">
                  josuebossou95@gmail.com
                </a>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Réponse sous 24h</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Téléphone</h3>
                <a href="tel:+22958013279" className="text-blue-600 dark:text-blue-400 hover:underline">
                  +229 58 01 32 79
                </a>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Lun-Ven, 9h-18h</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Localisation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Cotonou, Bénin
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Disponible pour remote</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Disponibilité</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Immédiate
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Freelance / CDI</p>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Retrouvez-moi sur
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/josuebossou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div className="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors duration-300">
                    <Github className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-gray-900 transition-colors" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/josuebossou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div className="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <Linkedin className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/josuebossou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div className="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-blue-400 transition-colors duration-300">
                    <Twitter className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">Twitter</span>
                </a>
              </div>
            </div>

            {/* Carte / Localisation */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">
                Travaillons ensemble
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Je suis actuellement disponible pour des missions freelance 
                ou des opportunités en CDI. N'hésitez pas à me contacter !
              </p>
              <div className="flex items-center text-white/80 text-sm">
                <MapPin size={16} className="mr-2 flex-shrink-0" />
                Disponible partout (remote)
              </div>
            </div>
          </div>

          {/* Colonne droite - Formulaire */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100 dark:border-gray-700">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Envoyez-moi un message
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Remplissez le formulaire ci-dessous, je vous répondrai dans les plus brefs délais.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}