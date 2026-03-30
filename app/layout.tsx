import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import { ThemeProvider } from '@/src/providers/ThemeProvider';
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Optimisation du chargement des polices
  variable: '--font-inter',
});

// Configuration du viewport pour le responsive
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

// Métadonnées enrichies pour le SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.josuebossou.com'),
  title: {
    default: 'Josué BOSSOU | Développeur Full-Stack',
    template: '%s | Josué BOSSOU',
  },
  description: 'Portfolio de Josué BOSSOU - Développeur Full-Stack spécialisé en Next.js, Laravel, Vue.js et architecture logicielle. Découvrez mes projets et compétences.',
  keywords: [
    'développeur full-stack',
    'génie logiciel',
    'Next.js',
    'Laravel',
    'Vue.js',
    'React',
    'TypeScript',
    'portfolio',
    'développeur web',
    'Cotonou',
    'Bénin'
  ],
  authors: [{ 
    name: 'Josué BOSSOU',
    url: 'https://github.com/josuebossou'
  }],
  creator: 'Josué BOSSOU',
  publisher: 'Josué BOSSOU',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Open Graph pour les réseaux sociaux
  openGraph: {
    title: 'Josué BOSSOU | Développeur Full-Stack',
    description: 'Portfolio professionnel - Découvrez mes projets et compétences en développement web.',
    url: 'https://portfolio.josuebossou.com',
    siteName: 'Josué BOSSOU - Portfolio',
    images: [
      {
        url: '/og-image.jpg', // À créer
        width: 1200,
        height: 630,
        alt: 'Josué BOSSOU - Développeur Full-Stack',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Josué BOSSOU | Développeur Full-Stack',
    description: 'Portfolio professionnel - Découvrez mes projets et compétences.',
    images: ['/twitter-image.jpg'], // À créer
    creator: '@josuebossou',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icônes
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // Manifest pour PWA
  manifest: '/manifest.json',

  // Verification pour les moteurs de recherche
  verification: {
    google: 'google-site-verification-code', // À remplacer
    yandex: 'yandex-verification-code', // Optionnel
    yahoo: 'yahoo-verification-code', // Optionnel
  },

  // Autres métadonnées
  category: 'technology',
  classification: 'Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Préconnexion aux domaines externes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Balises supplémentaires pour le SEO */}
        <meta name="geo.region" content="BJ" />
        <meta name="geo.placename" content="Cotonou" />
        <meta name="geo.position" content="6.365;2.418" />
        <meta name="ICBM" content="6.365, 2.418" />
        
        {/* Balises pour l'accessibilité */}
        <meta name="color-scheme" content="light dark" />
      </head>
      <body 
        className={`${inter.className} ${inter.variable} antialiased min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        {/* ThemeProvider pour gérer le dark mode sans erreur d'hydratation */}
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-20" id="main-content">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>

        {/* Container pour les notifications toast */}
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
              iconTheme: {
                primary: '#10b981',
                secondary: 'white',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: 'white',
              },
            },
          }}
        />

        {/* Google Analytics (optionnel) */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}