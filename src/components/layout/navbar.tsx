import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-200',
        'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md',
        scrolled ? 'shadow-sm' : ''
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white whitespace-nowrap"
          >
            Aditya Joshi
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400',
                  'px-2 py-1 rounded-md',
                  pathname === link.href 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-700 dark:text-gray-300'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="text-gray-700 hover:text-gray-900">
              <span className="sr-only">Open menu</span>
              {/* <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg> */}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
