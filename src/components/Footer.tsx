import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="gradient-text">Josué</span>
              <span className="text-gray-800 dark:text-gray-200"> BOSSOU</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Développeur Full-Stack passionné par l'architecture logicielle et les interfaces modernes.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Projets', 'CV', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                <MapPin size={16} className="mr-2 flex-shrink-0" />
                Cotonou, Bénin
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                58 01 32 79
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                josuebossou95@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Josué BOSSOU. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/josuebossou" target="_blank" rel="noopener noreferrer" 
               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/josuebossou" target="_blank" rel="noopener noreferrer"
               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition">
              <Linkedin size={20} />
            </a>
            <a href="mailto:josuebossou95@gmail.com"
               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}