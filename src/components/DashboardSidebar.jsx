import {useState} from "react";
import { Link } from 'react-router-dom';
import chevronDownIcon from '../assets/chevron-down.svg';
import menuIcon from '../assets/menu.svg';
import closeIcon from '../assets/x.svg';
import { icons, Search } from 'lucide-react';

import iconDashboard from '../assets/icon-dashboard.svg';
import iconTransactions from '../assets/icon-transactions.svg';
import iconContacts from '../assets/icon-contacts.svg';
import iconFeatures from '../assets/icon-features.svg';
import iconLibrary from '../assets/icon-library.svg';
import iconBaseWallet from '../assets/icon-base-wallet.svg';
import iconInvoices from '../assets/icon-invoices.svg';
import iconSchedules from '../assets/icon-schedules.svg';
import arrow from '../assets/icon-arrow-right.svg';

const NAV_LINKS = [{
    id:'1',
    name:'Dashboard',
    icons:<img src={iconDashboard} alt="Dashboard" className="w-5 h-5" />,
},
{
    id:'2',
    name:'Transactions',
    icons:<img src={iconTransactions} alt="Transactions" className="w-5 h-5" />,
},
{
    id:'3',
    name:'Contacts',
    icons:<img src={iconContacts} alt="Contacts" className="w-5 h-5" />,
},
{
    id:'4',
    name:'Features',
    icons:<img src={iconFeatures} alt="Features" className="w-5 h-5" />,
},
{
    id:'5',
    name:'Library',
    icons:<img src={iconLibrary} alt="Library" className="w-5 h-5" />,
},
]
const SNS_LINKS = [{
    id:'1',
    name:'Base Wallet',
    icons:<img src={iconBaseWallet} alt="Base Wallet" className="w-5 h-5" />,
},
{
    id:'2',
    name:'My Contacts',
    icons:<img src={iconContacts} alt="My Contacts" className="w-5 h-5" />,
},
{
    id:'3',
    name:'Invoices',
    icons:<img src={iconInvoices} alt="Invoices" className="w-5 h-5" />,
},
{
    id:'4',
    name:'Schedules',
    icons:<img src={iconSchedules} alt="Schedules" className="w-5 h-5" />,
},
]

export default function DashboardSideBar() {
    const [activeNav, setActiveNav] = useState('Dashboard');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='w-64 rounded-xl bg-[#f8f9fc] h-screen px-6 py-8 border-r border-gray-100'>
            <div className='flex items-center justify-between mb-6'>
                <p className='text-[#4b4b60] font-semibold text-sm'>Main Navigation</p>
            </div>
            <nav className='flex flex-col gap-2'>
                {NAV_LINKS.map((link) => (
                    <button
                        key={link.id}
                        id={`nav-${link.name.toLowerCase()}`}
                        onClick={() => setActiveNav(link.name)}
                        className={`group flex items-center gap-4 w-full rounded-xl px-4 h-12 text-[15px] font-semibold transition-all duration-200 ${
                            activeNav === link.name 
                                ? 'text-[#4a3b8d] bg-white shadow-sm' 
                                : 'text-[#8b8b9b] hover:text-[#4a3b8d] hover:bg-white/50'
                        }`}
                    >
                        {link.icons}
                        <span className={`transition-transform duration-200 ${activeNav === link.name ? 'translate-x-1' : ''}`}>{link.name}</span>
                        <img src={arrow} alt="" className={`w-3.5 h-3.5 mt-0.5 ml-auto opacity-50 group-hover:opacity-100 transition-opacity ${activeNav === link.name ? 'opacity-100' : ''}`} />
                    </button>
                ))}
            </nav>
            <div className='flex items-center justify-between mt-10 mb-6'>
                <p className='text-[#4b4b60] font-semibold text-sm'>Settings & Schedules</p>
            </div>
            <nav className='flex flex-col gap-4'>
                {SNS_LINKS.map((link) => (
                    <button
                        key={link.id}
                        id={`nav-${link.name.toLowerCase()}`}
                        onClick={() => setActiveNav(link.name)}
                        className={`group flex items-center gap-4 w-full rounded-xl px-4 h-12 text-[15px] font-semibold transition-all duration-200 ${
                            activeNav === link.name 
                                ? 'text-[#4a3b8d] bg-white shadow-sm' 
                                : 'text-[#8b8b9b] hover:text-[#4a3b8d] hover:bg-white/50'
                        }`}
                    >
                        {link.icons}
                        <span className={`transition-transform duration-200 ${activeNav === link.name ? 'translate-x-1' : ''}`}>{link.name}</span>
                        <img src={arrow} alt="" className={`w-3.5 h-3.5 mt-0.5 ml-auto opacity-50 group-hover:opacity-100 transition-opacity ${activeNav === link.name ? 'opacity-100' : ''}`} />
                    </button>
                ))}
            </nav>
        </div>
    )
}