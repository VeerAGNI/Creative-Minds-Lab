import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Creative Minds Lab
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
          <Link href="#work" className="hover:text-black transition-colors">Work</Link>
          <Link href="#about" className="hover:text-black transition-colors">About</Link>
          <Link href="#contact" className="hover:text-black transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}