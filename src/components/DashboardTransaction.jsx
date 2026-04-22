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
import search from '../assets/search.svg';
import filter from '../assets/filter.svg';
import transaction from '../assets/icon-transactions.svg';

export default function DashboardTransaction() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            <div className="lg:col-span-2 bg-white rounded-[2rem] p-6 shadow-sm">
                <div className="flex items-center mb-4 justify-between">
                    <h2 className="font-bold text-[15px] text-black">Transactions</h2>
                    <div className="flex gap-4 text-gray-400">
                        <button className="hover:scale-[1.05] transition-transform duration-100">
                            <img src={search} alt="Search" className="w-5 h-5" />
                        </button>
                        <button className="hover:scale-[1.05] transition-transform duration-100">
                            <img src={filter} alt="Filter" className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <div className="mb-6">
                    <p className="text-gray-400 font-semibold text-sm mb-4 ">Mon, Mar 1</p>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 ">
                                <div className="w-12 h-10 rounded-xl bg-[#eef1f6] flex items-center justify-center">
                                    <img src={transaction} alt="right" className="w-5 h-5" />
                                </div>
                                <p className="font-semibold text-[15px] text-[#2d332f]">Payment Sent to Shakir</p>
                            </div>
                            <span className="font-bold text-[#d9534f]">$560.00</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-10 rounded-xl bg-[#eef1f6] flex items-center justify-center">
                                    <img src={transaction} alt="right" className="w-5 h-5" />
                                </div>
                                <p className="font-semibold text-[15px] text-[#2d332f]">Salary from Redwhale</p>
                            </div>
                            <span className="font-bold text-[#2d332f]">$12,200.00</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-10 rounded-xl bg-[#eef1f6] flex items-center justify-center">
                                    <img src={transaction} alt="right" className="w-5 h-5" />
                                </div>
                                <p className="font-semibold text-[15px] text-[#2d332f]">Money Sent to Wise.com</p>
                            </div>
                            <span className="font-bold text-[#d9534f]">$560.00</span>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-sm font-semibold text-gray-400 mb-4">Mon, Mar 1</p>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-10 rounded-xl bg-[#eef1f6] flex items-center justify-center">
                                    <img src={transaction} alt="right" className="w-5 h-5" />
                                </div>
                                <p className="font-semibold text-[15px] text-[#2d332f]">Purchased Macbook Pro</p>
                            </div>
                            <span className="font-bold text-[#d9534f]">$5560.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-1 py-6">
                <div className="flex justify-between items-center mb-4 pl-2">
                    <h2 className="font-bold text-black">Upcoming Transactions</h2>
                    <a href="#" className="text-xs font-semibold text-gray-400 hover:text-gray-600 transition-colors">View All</a>
                </div>
                <div className="mb-6 pl-2">
                        <p className="text-xs font-semibold text-gray-400 mb-4">Today</p>
                        <div className="space-y-5">
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
                    <div className="mb-6 pl-2">
                        <p className="text-xs font-semibold text-gray-400 mb-4">Tomorrow</p>
                        <div className="space-y-6">
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

    );
}
