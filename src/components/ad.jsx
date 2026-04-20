import {useState} from "react";
import { Link } from 'react-router-dom';
import iconCubeRed from '../assets/icon-cube-red.svg';
import iconWater from '../assets/icon-water.svg';
import iconSalary from '../assets/icon-salary.svg';
import iconElectric from '../assets/icon-electric.svg';
import iconTransfer from '../assets/icon-transfer.svg';
import shapeMastercard from '../assets/shape-mastercard.svg';
import shapeCardCurves from '../assets/shape-card-curves.svg';
import bgWalletCard from '../assets/bg-wallet-card.svg';
import bgSavingCard from '../assets/bg-saving-card.svg';
import bgBalanceCard from '../assets/bg-balance-card.svg';
import iconArrowRight from '../assets/icon-arrow-right.svg';

export default function Dashboard() {
    return(
        <div className="flex-1 w-full bg-white p-6 sm:p-10 -ml-1 mt-[-6rem]">
            {/* We add a purple gradient background to sit behind the top section similar to the original design */}
            <div className="absolute top-0 right-0 left-64 h-72 bg-gradient-to-r from-[#4a3b8d] to-[#9362c4] z-0 rounded-bl-3xl">
                <img src={shapeCardCurves} alt="" className="absolute inset-0 object-cover w-full h-full opacity-50 pointer-events-none" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 pt-16">
                
                {/* 1. Wallet Card */}
                <div className="relative overflow-hidden rounded-2xl h-48 p-6 shadow-xl text-[#2d332f] flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
                    <img src={bgWalletCard} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
                    
                    <div className="relative z-10 flex justify-between items-start">
                        <img src={shapeMastercard} alt="Card Icon" className="w-10 h-6" />
                    </div>
                    
                    <div className="relative z-10 mt-auto">
                        <p className="text-[10px] font-bold tracking-widest opacity-80 mb-1">CARD NUMBER</p>
                        <p className="text-xl sm:text-2xl font-semibold tracking-widest mb-4">3829 4820 4629 5025</p>
                        
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-[9px] font-bold tracking-widest opacity-80 mb-0.5">CARD HOLDER NAME</p>
                                <p className="text-sm font-semibold">Anita Rose</p>
                            </div>
                            <div>
                                <p className="text-[9px] font-bold tracking-widest opacity-80 mb-0.5">VALID THRU</p>
                                <p className="text-sm font-semibold">09/17</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Saving Status Card */}
                <div className="relative overflow-hidden rounded-2xl h-48 p-6 shadow-xl text-white flex flex-col transition-transform duration-300 hover:scale-[1.02]">
                    <img src={bgSavingCard} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
                    
                    <div className="relative z-10 flex justify-between items-center mb-auto">
                        <h3 className="font-semibold text-[15px]">Your Saving Status</h3>
                        <div className="w-5 h-5 rounded-full bg-white text-[#fd6641] flex items-center justify-center font-bold text-xs cursor-pointer">?</div>
                    </div>

                    <div className="relative z-10 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                            <img src={iconCubeRed} alt="Cube" className="w-7 h-7 drop-shadow-md" />
                        </div>
                        <div>
                            <p className="text-[22px] font-extrabold tracking-tight mb-0.5">4.28%</p>
                            <p className="text-[13px] font-medium opacity-90">Your spending increased</p>
                        </div>
                    </div>
                </div>

                {/* 3. Working Balance Card */}
                <div className="relative overflow-hidden rounded-2xl h-48 p-6 shadow-xl text-[#012f36] flex flex-col transition-transform duration-300 hover:scale-[1.02]">
                    <img src={bgBalanceCard} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
                    
                    <div className="relative z-10 flex justify-between items-start mb-auto">
                        <h3 className="font-bold text-[15px]">Your Working Balance</h3>
                        <a href="#" className="text-xs font-semibold underline underline-offset-4 decoration-2 decoration-[#02d6d4]/40 hover:decoration-[#012f36] transition-colors">Saving Account</a>
                    </div>

                    <div className="relative z-10 flex items-baseline gap-2 mt-auto">
                        <span className="text-2xl font-extrabold tracking-tight">PKR</span>
                        <span className="text-4xl font-black tracking-tighter">9,250,000</span>
                        <div className="flex items-center gap-1 cursor-pointer font-bold text-xs ml-2 mt-2">
                            <span>PKR</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

            </div>
            {/* Middle / Bottom Section: Transactions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
                {/* Latest Transactions */}
                <div className="lg:col-span-2 bg-[#fafbfd] rounded-[2rem] p-8 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-[#2d332f]">Latest Transactions</h2>
                        <div className="flex gap-4 text-gray-400">
                            <button className="hover:text-gray-600 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <circle cx="11" cy="11" r="8" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
                                </svg>
                            </button>
                            <button className="hover:text-gray-600 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                                    <circle cx="14" cy="18" r="2" fill="currentColor" />
                                    <circle cx="8" cy="12" r="2" fill="currentColor" />
                                    <circle cx="18" cy="6" r="2" fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Date Group 1 */}
                    <div className="mb-6">
                        <p className="text-sm font-semibold text-gray-400 mb-4">Mon, Mar 1</p>
                        <div className="space-y-4">
                            {/* Item 1 */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-10 rounded-xl bg-[#eef1f6] flex items-center justify-center text-[#4a5568]">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h9.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L13.586 11H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                                    </div>
                                    <p className="font-semibold text-[15px] text-[#2d332f]">Payment Sent to Shakir</p>
                                </div>
                                <span className="font-bold text-[#d9534f]">$560.00</span>
                            </div>
                            
                            {/* Item 2 */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-10 rounded-xl bg-[#eef1f6] flex items-center justify-center text-[#4a5568]">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M17 10a1 1 0 01-1 1H6.414l2.293 2.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L6.414 9H16a1 1 0 011 1z" clipRule="evenodd" /></svg>
                                    </div>
                                    <p className="font-semibold text-[15px] text-[#2d332f]">Salary from Redwhale</p>
                                </div>
                                <span className="font-bold text-[#012f36]">$12,200.00</span>
                            </div>

                            {/* Item 3 */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-10 rounded-xl bg-[#eef1f6] flex items-center justify-center text-[#4a5568]">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                                    </div>
                                    <p className="font-semibold text-[15px] text-[#2d332f]">Money Sent to Wise.com</p>
                                </div>
                                <span className="font-bold text-[#d9534f]">$3,000.00</span>
                            </div>
                        </div>
                    </div>

                    {/* Date Group 2 */}
                    <div>
                        <p className="text-sm font-semibold text-gray-400 mb-4">Mon, Mar 1</p>
                        <div className="space-y-4">
                            {/* Item 4 */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-10 rounded-xl bg-[#eef1f6] flex items-center justify-center text-[#4a5568]">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h9.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L13.586 11H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                                    </div>
                                    <p className="font-semibold text-[15px] text-[#2d332f]">Purchased Macbook Pro</p>
                                </div>
                                <span className="font-bold text-[#d9534f]">$5560.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Upcoming Transactions */}
                <div className="lg:col-span-1 py-1">
                    <div className="flex justify-between items-center mb-6 pl-2">
                        <h2 className="text-lg font-bold text-[#2d332f]">Upcoming Transactions</h2>
                        <a href="#" className="text-xs font-semibold text-gray-400 hover:text-gray-600 transition-colors">View All</a>
                    </div>

                    {/* Today Group */}
                    <div className="mb-6 pl-2">
                        <p className="text-xs font-semibold text-gray-400 mb-4">Today</p>
                        <div className="space-y-5">
                            {/* Bill Item */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-[#2e3192] flex items-center justify-center">
                                        <img src={iconWater} alt="Water" className="w-5 h-5 drop-shadow-sm" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[14px] text-[#2d332f]">Water Bill</p>
                                        <p className="text-xs text-gray-400 font-medium">Unsuccessfully</p>
                                    </div>
                                </div>
                                <span className="font-bold text-[#d9534f] text-sm">- $280</span>
                            </div>
                        </div>
                    </div>

                    {/* Tomorrow Group */}
                    <div className="mb-6 pl-2">
                        <p className="text-xs font-semibold text-gray-400 mb-4">Tomorrow</p>
                        <div className="space-y-6">
                            {/* Salary */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-[#ff4d6d] flex items-center justify-center">
                                        <img src={iconSalary} alt="Salary" className="w-5 h-5 drop-shadow-sm" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[14px] text-[#2d332f]">Income: Salary Oct</p>
                                        <p className="text-xs text-gray-400 font-medium">Successfully</p>
                                    </div>
                                </div>
                                <span className="font-bold text-[#012f36] text-sm">+$1200</span>
                            </div>

                            {/* Electric />} */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-[#0096ff] flex items-center justify-center">
                                        <img src={iconElectric} alt="Electric" className="w-5 h-5 drop-shadow-sm" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[14px] text-[#2d332f]">Electric Bill</p>
                                        <p className="text-xs text-gray-400 font-medium">Successfully</p>
                                    </div>
                                </div>
                                <span className="font-bold text-[#d9534f] text-sm">- $480</span>
                            </div>

                            {/* Transfer 1 */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-[#ffb703] flex items-center justify-center">
                                        <img src={iconTransfer} alt="Transfer" className="w-5 h-5 drop-shadow-sm" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[14px] text-[#2d332f]">Income : Jane transfers</p>
                                        <p className="text-xs text-gray-400 font-medium">Successfully</p>
                                    </div>
                                </div>
                                <span className="font-bold text-[#012f36] text-sm">+ $500</span>
                            </div>

                            {/* Transfer 2 */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-[#ffb703] flex items-center justify-center">
                                        <img src={iconTransfer} alt="Transfer" className="w-5 h-5 drop-shadow-sm" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[14px] text-[#2d332f]">Income : Jane transfers</p>
                                        <p className="text-xs text-gray-400 font-medium">Successfully</p>
                                    </div>
                                </div>
                                <span className="font-bold text-[#012f36] text-sm">+ $500</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}