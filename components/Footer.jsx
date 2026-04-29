'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gray-100 bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} {t('footerCopyright')}</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-black transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-black transition-colors">Instagram</Link>
          <Link href="#" className="hover:text-black transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
