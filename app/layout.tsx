import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/src/components/Header';  // ✅ ou
import Footer from '@/src/components/Footer';  // ✅ 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Josué BOSSOU | Développeur Full-Stack',
  description: 'Portfolio de Josué BOSSOU - Développeur Full-Stack spécialisé en Next.js, Laravel, Vue.js et architecture logicielle.',
  keywords: 'développeur full-stack, génie logiciel, Next.js, Laravel, Vue.js, portfolio',
  authors: [{ name: 'Josué BOSSOU' }],
  openGraph: {
    title: 'Josué BOSSOU | Développeur Full-Stack',
    description: 'Portfolio professionnel - Découvrez mes projets et compétences',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}