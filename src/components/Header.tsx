'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'cd ~/' },
    { href: '/projects', label: 'cd projects/' },
    { href: '/resume', label: 'cat resume.txt' },
  ];

  return (
    <header className="bg-black border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group font-mono">
              <div className="text-green-400 text-lg">
                <span className="text-gray-400">$</span> whoami
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-white">yu-yuan-chang</div>
                <div className="text-sm text-gray-400">~/software-engineer</div>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 font-mono">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded transition-all duration-200 ${
                  pathname === item.href
                    ? 'text-green-400 bg-gray-800 border border-green-500'
                    : 'text-gray-300 hover:text-green-400 hover:bg-gray-800'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Contact CTA */}
            <div className="ml-4 pl-4 border-l border-gray-600">
              <a
                href="mailto:lawani321@g.ucla.edu"
                className="bg-green-600 text-black px-4 py-2 rounded font-medium hover:bg-green-500 transition-colors"
              >
                mail contact
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300 hover:text-green-400 hover:bg-gray-800 rounded transition-colors font-mono"
            >
              <span className="text-sm">{isMenuOpen ? '[x]' : '[≡]'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700 bg-black">
            <div className="px-4 py-6 space-y-3 font-mono">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded transition-all duration-200 ${
                    pathname === item.href
                      ? 'text-green-400 bg-gray-800 border border-green-500'
                      : 'text-gray-300 hover:text-green-400 hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Contact Button */}
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="mailto:lawani321@g.ucla.edu"
                  className="block text-center w-full bg-green-600 text-black px-6 py-3 rounded font-medium hover:bg-green-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  mail contact
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;