'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="ml-4 text-[10px] font-bold px-2 py-1 border border-gray-200 rounded hover:bg-black hover:text-white hover:border-black transition-all uppercase tracking-widest leading-none"
      aria-label="Toggle Language"
    >
      {language === 'en' ? 'HI' : 'EN'}
    </button>
  );
}