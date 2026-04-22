import { useState } from 'react';
import { Link } from 'react-router-dom';
import chevronDownIcon from '../assets/chevron-down.svg';
import menuIcon from '../assets/menu.svg';
import closeIcon from '../assets/x.svg';
import { Search } from 'lucide-react';
import blackmenu from '../assets/black-menu.svg';
import blackcross from '../assets/black-cross.svg';

const NAV_LINKS = ['Wallet', "Invoices"]

export default function DashboardNavbar() {
    const [activeNav, setActiveNav] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className='relative flex-1 px-8 py-4 z-50'>
            <div className='flex items-center justify-between'>
                <div className='flex-1 max-w-md'>
                    <div className='relative '>
                        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2' />
                        <input type="text"
                            placeholder='Search...'
                            className='
                            rounded-lg
                            bg-purple-100/50
                            pl-10 pr-4 py-2 w-full
                            text-gray-800
                            placeholder-gray-500
                            focus:outline-none focus:ring-2 focus:ring-purple-500' />
                    </div>
                </div>
                <div className='hidden md:flex items-center gap-4'>

                    {NAV_LINKS.map((link) => (
                        <button
                            key={link}
                            id={`nav-${link.toLowerCase()}`}
                            onClick={() => setActiveNav(link)}
                            className={`text-sm font-medium transition-colors duration-200 hover:text-white ${activeNav === link ? 'text-white scale-[1.1] font-semibold' : 'text-zinc-200'
                                }`}
                        >
                            {link}
                        </button>
                    ))}
                </div>
                <button
                    className="md:hidden ml-4 p-2 text-gray-600 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <img src={isMenuOpen ? blackcross : blackmenu} alt="menu" className="w-6 h-6" />
                </button>
            </div>
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 md:hidden flex flex-col p-4 gap-2 rounded-b-xl">
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link}
                            onClick={() => {
                                setActiveNav(link);
                                setIsMenuOpen(false);
                            }}
                            className={`text-left text-sm font-medium p-3 rounded-lg transition-colors duration-200 ${
                                activeNav === link ? 'bg-purple-50 text-purple-700' : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            {link}
                        </button>
                    ))}
                </div>
            )}

        </nav>
    )
};