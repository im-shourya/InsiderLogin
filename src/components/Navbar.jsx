import { useState } from 'react';
import { Link } from 'react-router-dom';
import chevronDownIcon from '../assets/chevron-down.svg';
import menuIcon from '../assets/menu.svg';
import closeIcon from '../assets/x.svg';

const NAV_LINKS = ['Catalogue', 'Business', 'Shopping'];

export default function Navbar() {
  const [activeNav, setActiveNav] = useState('Business');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 sm:py-5 relative z-20">
      <div className="flex items-center gap-2.5">
        <span className="text-white font-semibold text-lg tracking-tight">Picksell</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            id={`nav-${link.toLowerCase()}`}
            onClick={() => setActiveNav(link)}
            className="relative text-sm transition-colors duration-200 cursor-pointer"
            style={{ color: activeNav === link ? '#ffffff' : 'rgba(230,230,250,0.55)' }}
          >
            {link}
            {activeNav === link && (
              <span
                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                style={{ backgroundColor: '#E5C84A' }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Link
          to="/signin"
          id="nav-signin"
          className="hidden md:block text-sm px-5 py-2 rounded-lg border transition-all duration-200 hover:bg-white/10"
          style={{ color: '#e6e6fa', borderColor: 'rgba(230,230,250,0.30)' }}
        >
          Sign in
        </Link>
        <Link
          to="/signup"
          id="nav-get-started"
          className="text-sm px-5 py-2 rounded-lg border transition-all duration-200 hover:opacity-90"
          style={{
            color: '#e6e6fa',
            borderColor: 'rgba(230,230,250,0.30)',
            backgroundColor: 'rgba(255,255,255,0.08)',
          }}
        >
          Get Started
        </Link>
        <div
          className="hidden md:flex items-center gap-1 text-sm ml-1 cursor-pointer select-none"
          style={{ color: 'rgba(230,230,250,0.55)' }}
        >
          <span>English</span>
          <img src={chevronDownIcon} alt="" className="w-3.5 h-3.5 mt-0.5" />
        </div>

        {/* Hamburger Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors hover:bg-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={isMenuOpen ? closeIcon : menuIcon} alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1f1d35] border-t border-[#3a3252] shadow-2xl md:hidden px-4 py-6 flex flex-col gap-6" style={{ zIndex: 100 }}>
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setActiveNav(link);
                  setIsMenuOpen(false);
                }}
                className="text-left py-2 px-3 rounded-lg text-sm font-semibold transition-colors"
                style={{
                  color: activeNav === link ? '#ffffff' : 'rgba(230,230,250,0.7)',
                  backgroundColor: activeNav === link ? 'rgba(255,255,255,0.1)' : 'transparent',
                }}
              >
                {link}
              </button>
            ))}
          </div>
          
          <div className="h-px w-full bg-[#3a3252]" />
          
          <div className="flex flex-col gap-4">
            <Link
              to="/signin"
              onClick={() => setIsMenuOpen(false)}
              className="text-center text-sm px-5 py-3 rounded-lg border transition-all duration-200"
              style={{ color: '#e6e6fa', borderColor: 'rgba(230,230,250,0.30)' }}
            >
              Sign in
            </Link>
            
            <div className="flex items-center justify-between px-3 py-2 text-sm" style={{ color: 'rgba(230,230,250,0.7)' }}>
              <span>Language</span>
              <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                <span>English</span>
                <img src={chevronDownIcon} alt="" className="w-3.5 h-3.5 mt-0.5" />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
