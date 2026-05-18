import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-outfit', 
  display: 'swap'
});

export const metadata = {
  title: 'Creative Minds Lab',
  description: 'A digital design studio crafting modern experiences.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-brand min-h-screen flex flex-col bg-white dark:bg-gray-950 text-black dark:text-white transition-colors`}>
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
