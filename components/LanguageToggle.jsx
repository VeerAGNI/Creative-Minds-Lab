'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="text-[10px] font-bold px-2.5 py-1.5 border border-black/10 rounded-md hover:bg-black hover:text-white hover:border-black transition-all uppercase tracking-widest leading-none flex items-center justify-center min-w-[36px] bg-white"
      aria-label="Toggle Language"
    >
      {language === 'en' ? 'HI' : 'EN'}
    </button>
  );
}