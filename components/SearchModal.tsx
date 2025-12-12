'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useModal } from "./AnimatedModal";
import { FaSearch, FaSlack, FaUser } from 'react-icons/fa';
import { SiBinance, SiGmail, SiLeetcode } from 'react-icons/si';
import { BsDribbble, BsFileCodeFill, BsGithub } from 'react-icons/bs';
import { FiFigma } from 'react-icons/fi';
import { MdKeyboardCommandKey, MdTravelExplore } from 'react-icons/md';
import { LiaLinkedin } from 'react-icons/lia';
import { IoHardwareChip, IoLogoLinkedin } from 'react-icons/io5';
import { GiMailbox } from 'react-icons/gi';
import { RiHome6Fill } from 'react-icons/ri';
import { GithubLink, GmailLink, LeetCodeLink, LinkedInLink } from '@/constants/constants';
import { FaMicrochip } from 'react-icons/fa6';

export default function SearchModal() {
    return (
        <div className="flex items-center justify-center p-4 bg-transparent">
            <CoderProfileCard />
        </div>
    );
}

const recentSearches: SearchItemType[] = [
    { id: 1, name: 'Home', icon: <RiHome6Fill />, link: "/"},
    { id: 2, name: 'About Me', icon: <FaUser />, link: "/about"},
    { id: 3, name: 'My Projects', icon: <BsFileCodeFill />, link: "/projects"},
    { id: 4, name: 'Other Projects', icon: <FaMicrochip />, link: "/otherprojects"},
    { id: 5, name: 'Journey to the Website', icon: <MdTravelExplore />, link: "/journey"},
    { id: 6, name: 'LeetCode', icon: <SiLeetcode />, link: LeetCodeLink},
    { id: 7, name: 'Gmail', icon: <GiMailbox />, link: GmailLink},
    { id: 8, name: 'Github', icon: <BsGithub />, link: GithubLink},
    { id: 9, name: 'LinkedIn', icon: <IoLogoLinkedin />, link: LinkedInLink},
];

// --- TYPES ---
interface SearchItemType {
    id: number;
    name: string;
    icon: React.ReactNode;
    link: string;
}

interface SearchItemProps {
    item: SearchItemType;
}

// --- Search Item Component ---
const SearchItem: React.FC<SearchItemProps> = ({ item }) => (
    <li className="cursor-target flex items-center justify-between p-3 transition-all duration-300 ease-in-out bg-black/5 dark:bg-gray-500/10 hover:bg-black/10 dark:hover:bg-gray-500/20 rounded-xl hover:scale-[1.02] cursor-pointer">
        <a href={item.link} className="w-full flex items-center gap-4">
            {item.icon}
            <span className="text-gray-700 dark:text-gray-200">{item.name}</span>
        </a>
    </li>
);

const CoderProfileCard = () => {
    const { setOpen } = useModal();
    const [searchTerm, setSearchTerm] = useState('');
    const [items, setItems] = useState<SearchItemType[]>(recentSearches);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
                event.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-2xl w-full mx-auto bg-linear-to-r from-[#000000a0] to-[#0a0d37] border-[#1b2c68a0] relative rounded-2xl border shadow-lg">
            <div className="flex flex-row">
                <div className="h-0.5 w-full bg-linear-to-r from-transparent via-yellow-500 to-violet-600"></div>
                <div className="h-0.5 w-full bg-linear-to-r from-violet-600 to-transparent"></div>
            </div>

            <div className="px-4 lg:px-8 py-5 flex justify-between items-center bg-linear-to-r from-[#000000a0] to-[#0a0d37] rounded-2xl">
                <div className="flex flex-row space-x-2">
                    <button type="button" className="h-3 w-3 rounded-full bg-red-500" onClick={() => setOpen(false)}></button>
                    <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-zinc-600 dark:text-gray-400 font-mono">
                    Search.ts
                </div>
            </div>

            <div className="w-full">
                <div className="relative flex items-center justify-center w-full px-4 py-8">

                    {/* Search Modal */}
                    <div className="w-full max-w-2xl mx-auto p-4 space-y-6">

                        {/* Search Input with Enhanced Gradient Border and Glow */}
                        <div className="cursor-target relative p-px rounded-2xl bg-linear-to-r from-orange-500 via-purple-600 to-yellow-600 shadow-lg shadow-purple-500/20 dark:shadow-purple-600/30 transition-shadow duration-300 hover:shadow-purple-500/40 dark:hover:shadow-purple-600/50 focus-within:shadow-purple-500/40 dark:focus-within:shadow-purple-600/50">
                            <div className="flex items-center w-full px-4 py-2 bg-white/80 dark:bg-gray-900/90 rounded-[15px]">
                                <FaSearch className="w-5 h-5 text-gray-500 dark:text-gray-400 shrink-0" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Search the app.."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-3 py-1 text-lg text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent focus:outline-none flex-1 min-w-0"
                                />
                                <div className="flex items-center gap-2 shrink-0">
                                    <div className="flex items-center justify-center p-1.5 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-inner">
                                        <MdKeyboardCommandKey />
                                    </div>
                                    <div className="flex items-center justify-center w-6 h-6 p-1 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-inner">
                                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">K</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Searches Section */}
                        {items.length > 0 && (
                            <div className="px-2 space-y-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase">Navigation</h2>
                                </div>

                                <ul className="space-y-2 max-h-[300px] overflow-y-auto overflow-x-hidden"  style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(100, 100, 100, 0.5) transparent' }}>
                                    {filteredItems.map(item => (
                                        <SearchItem key={item.id} item={item} />
                                    ))}
                                    {filteredItems.length === 0 && (
                                        <p className="text-center text-gray-400 dark:text-gray-500 py-4">No results found for &quot;{searchTerm}&quot;</p>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>



            <div className="px-4 lg:px-8 pb-4 mt-4 border-t border-zinc-300 dark:border-gray-800 pt-3 text-lg text-zinc-600 dark:text-gray-500 flex justify-between items-center">
                <div className='flex justify-around w-full'>
                    <a href={LinkedInLink}><IoLogoLinkedin/></a>
                    <a href={LeetCodeLink}><SiLeetcode/></a>
                    <a href={GithubLink}><BsGithub/></a>
                    <a href={GmailLink}><SiGmail/></a>
                </div>
            </div>
        </div>
    );
};
