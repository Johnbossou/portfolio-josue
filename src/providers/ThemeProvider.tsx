'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // État initial avec une valeur par défaut (sera mise à jour après le montage)
  const [theme, setTheme] = useState<Theme>('light');
  const [isMounted, setIsMounted] = useState(false);

  // Effet pour lire le localStorage UNE SEULE FOIS après le montage
  useEffect(() => {
    // Marquer le composant comme monté pour éviter les erreurs d'hydratation
    setIsMounted(true);
    
    // Lire le thème depuis localStorage ou utiliser la préférence système
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    // Mettre à jour l'état UNE SEULE FOIS avec la valeur initiale
    setTheme(initialTheme);
    
    // Appliquer la classe au HTML
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []); // Dépendances vides : cet effet ne s'exécute qu'au montage

  // Fonction pour basculer le thème (appelée par un bouton utilisateur)
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Mettre à jour l'état
    setTheme(newTheme);
    
    // Sauvegarder dans localStorage
    localStorage.setItem('theme', newTheme);
    
    // Appliquer la classe au HTML
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Important : éviter tout rendu côté serveur ou un rendu initial incorrect
  if (!isMounted) {
    // Retourner un fragment vide ou les enfants sans contexte
    // pour éviter les erreurs d'hydratation
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}