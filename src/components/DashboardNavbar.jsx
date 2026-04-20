import { useState } from 'react';
import { Link } from 'react-router-dom';
import chevronDownIcon from '../assets/chevron-down.svg';
import menuIcon from '../assets/menu.svg';
import closeIcon from '../assets/x.svg';
import { Search } from 'lucide-react';

const NAV_LINKS = ['Wallet', "Invoices"]

export default function DashboardNavbar() {
    const [activeNav, setActiveNav] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className='flex-1 px-8 py-4 z-100'>
            <div className='flex items-center justify-between'>
                <div className='flex-1 max-w-md'>
                    <div className='relative'>
                        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2' />
                        <input type="text"
                            placeholder='Search...'
                            className='
                    rounded-lg
                    bg-purple-100/50
                    pl-10 pr-4 py-2 
                    text-white
                    placeholder-purple-200
                    ' />
                    </div>
                </div>
                <div className='hidden md:flex gap-4'>

                    {NAV_LINKS.map((link) => (
                        <button
                            key={link}
                            id={`nav-${link.toLowerCase()}`}
                            onClick={() => setActiveNav(link)}
                            className={`text-sm font-medium transition-colors duration-200 ${
                                activeNav === link ? 'text-white' : 'text-[#e6e6fa]/55'
                            }`}
                        >
                            {link}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    )
};