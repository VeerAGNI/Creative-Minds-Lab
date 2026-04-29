'use client';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            {t('logo')}
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-500 items-center">
            <Link href="#work" className="hover:text-black transition-colors">{t('work')}</Link>
            <Link href="#about" className="hover:text-black transition-colors">{t('about')}</Link>
            <Link href="#contact" className="hover:text-black transition-colors">{t('contact')}</Link>
          </nav>
        </div>
        
        {/* Moved LanguageToggle outside the hidden nav to ensure visibility on mobile/desktop */}
        <div className="flex items-center">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}