import { useState } from "react";
import { Link } from 'react-router-dom';
import iconCubeRed from '../assets/icon-cube-red.svg';
import iconWater from '../assets/icon-water.svg';
import iconSalary from '../assets/icon-salary.svg';
import iconElectric from '../assets/icon-electric.svg';
import iconTransfer from '../assets/icon-transfer.svg';
import shapeCardCurves from '../assets/shape-card-curves.svg';
import bgWalletCard from '../assets/bg-wallet-card.svg';
import bgSavingCard from '../assets/bg-saving-card.svg';
import bgBalanceCard from '../assets/bg-balance-card.svg';
import iconArrowRight from '../assets/icon-arrow-right.svg';
import shapeMastercard from '../assets/shape-mastercard.svg';

export default function Dashboard() {
    return (
        <div className="flex-1 bg-white w-full p-6 sm:p-10 -ml-1 mt-[-6rem]">
            <div className="absolute top-0 right-0 
            left-64 h-72 
            bg-gradient-to-r  from-[#4a3b8d] to-[#9362c4] 
            z-0 rounded-bl-3xl">
                <img src={shapeCardCurves} alt="" className="absolute inset-0 object-cover w-full h-full opacity-50" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 pt-16">
                <div className="relative overflow-hidden rounded-2xl h-48 p-6 shadow-xl text-[#2d332f] flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
                    <img src={bgWalletCard} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
                    <div className="relative z-10 flex justify-between items-start">
                        <img src={shapeMastercard} alt="Card Icon" className="w-10 h-6" />
                    </div>
                    <div className="relative z-10 mt-auto">
                        <p className="text-[10px] font-bold tracking-wide opacity-80 mb-1">CARD NUMBER</p>
                        <p className="text-xl sm:text-2xl font-semibold tracking-widest mb-4">3829 4820 4629 5025</p>
                        <div className="flex justify-between items-end">
                            <div >
                                <p className="text-[9px] font-bold tracking-widest opacity-80 mb-0.5">CARD HOLDER NAME</p>
                                <p className="text-sm font-semibold">Shourya Parashar</p>
                            </div>
                            <div>
                                <p className="text-[9px] font-bold tracking-widest opacity-80 mb-0.5">VALID THRU</p>
                                <p className="text-sm font-semibold">09/32</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                <div className="relative overflow-hidden rounded-2xl h-48 p-6 shadow-xl text-[#012f36] flex flex-col transition-transform duration-300 hover:scale-[1.02]">
                    <img src={bgBalanceCard} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />

                    <div className="relative z-10 flex justify-between items-start mb-auto">
                        <h3 className="font-bold text-[15px]">Your Working Balance</h3>
                        <a href="" className="text-xs font-semibold underline underline-offset-4 decoration-2 decoration-[#02d6d4]/40 hover:decoration-[#012f36] transition-colors">Saving Account</a>
                    </div>

                    <div className="relative z-10 flex items-baseline gap-2 mt-auto">
                        <span className="text-2xl font-extrabold tracking-tight">INR</span>
                        <span className="text-4xl font-black tracking-tighter">9,250,000</span>
                        <div className="flex items-center gap-1 cursor-pointer font-bold text-xs ml-2 mt-2">
                            <span>INR</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 ">
            </div>
        </div>
    );
}
