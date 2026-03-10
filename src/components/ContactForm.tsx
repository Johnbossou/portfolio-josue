'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, AlertCircle, User, Mail, MessageSquare } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { EMAILJS_CONFIG } from '@/config/emailjs';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Validation en temps réel
  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Le nom doit contenir au moins 2 caractères' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Email invalide' : '';
      case 'message':
        return value.length < 10 ? 'Le message doit contenir au moins 10 caractères' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validation en temps réel
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Veuillez corriger les erreurs du formulaire');
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialiser EmailJS avec ta clé publique
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Josué',
          reply_to: formData.email,
        }
      );

      toast.success('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.', {
        duration: 5000,
        icon: '🎉'
      });

      // Réinitialiser le formulaire
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      toast.error('Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement par email.', {
        duration: 5000,
        icon: '❌'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'var(--background)',
            color: 'var(--foreground)',
            border: '1px solid var(--border)',
          },
          success: {
            className: 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200',
            iconTheme: {
              primary: '#10b981',
              secondary: 'white',
            },
          },
          error: {
            className: 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200',
            iconTheme: {
              primary: '#ef4444',
              secondary: 'white',
            },
          },
        }}
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nom */}
        <div className="group">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Nom complet
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className={`h-5 w-5 ${errors.name ? 'text-red-500' : 'text-gray-400 group-focus-within:text-blue-500'}`} />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`block w-full pl-10 pr-3 py-3 border-2 rounded-xl transition-all duration-300 
                ${errors.name 
                  ? 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20 focus:ring-red-500' 
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800/30'
                } 
                text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                outline-none hover:border-gray-300 dark:hover:border-gray-600`}
              placeholder="John Doe"
            />
          </div>
          {errors.name && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="group">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Adresse email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className={`h-5 w-5 ${errors.email ? 'text-red-500' : 'text-gray-400 group-focus-within:text-blue-500'}`} />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`block w-full pl-10 pr-3 py-3 border-2 rounded-xl transition-all duration-300 
                ${errors.email 
                  ? 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20 focus:ring-red-500' 
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800/30'
                } 
                text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                outline-none hover:border-gray-300 dark:hover:border-gray-600`}
              placeholder="vous@exemple.com"
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="group">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <div className="relative">
            <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
              <MessageSquare className={`h-5 w-5 ${errors.message ? 'text-red-500' : 'text-gray-400 group-focus-within:text-blue-500'}`} />
            </div>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className={`block w-full pl-10 pr-3 py-3 border-2 rounded-xl transition-all duration-300 
                ${errors.message 
                  ? 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20 focus:ring-red-500' 
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800/30'
                } 
                text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                outline-none hover:border-gray-300 dark:hover:border-gray-600 resize-none`}
              placeholder="Bonjour Josué, je souhaiterais discuter avec vous de..."
            />
          </div>
          {errors.message && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
              <AlertCircle size={14} className="mr-1" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Bouton d'envoi */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 px-6 py-4 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span className={`flex items-center justify-center ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
            <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
            Envoyer le message
          </span>
          {isSubmitting && (
            <span className="absolute inset-0 flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
          )}
        </button>

        {/* Note de secours */}
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
          Ou envoyez-moi directement un email à{' '}
          <a href="mailto:josuebossou95@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
            josuebossou95@gmail.com
          </a>
        </p>
      </form>
    </>
  );
}