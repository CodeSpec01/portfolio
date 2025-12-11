'use client';

import { useState, useEffect, useRef } from 'react';
import { useModal } from "./AnimatedModal";
import { SiGmail, SiLeetcode } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { FiAtSign } from 'react-icons/fi';
import { IoLogoLinkedin } from 'react-icons/io5';
import { GithubLink, GmailLink, LeetCodeLink, LinkedInLink } from '@/constants/constants';
import { TiSortAlphabeticallyOutline } from 'react-icons/ti';
import { LuMessageSquareText } from 'react-icons/lu';

export default function ContactModal() {
    return (
        <div className="flex items-center justify-center p-4 bg-transparent">
            <CoderProfileCard />
        </div>
    );
}


const CoderProfileCard = () => {
    const { setOpen } = useModal();
    const inputRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');

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

    return (
        <div className="max-w-2xl w-full mx-auto bg-linear-to-r from-[#000000a0] to-[#0a0d37] border-zinc-300 dark:border-[#1b2c68a0] relative rounded-lg border shadow-lg">
            <div className="flex flex-row">
                <div className="h-0.5 w-full bg-linear-to-r from-transparent via-pink-500 to-violet-600"></div>
                <div className="h-0.5 w-full bg-linear-to-r from-violet-600 to-transparent"></div>
            </div>

            <div className="px-4 lg:px-8 py-5 flex justify-between items-center bg-linear-to-r from-[#000000a0] to-[#0a0d37] rounded-lg">
                <div className="flex flex-row space-x-2">
                    <button type="button" className="h-3 w-3 rounded-full bg-red-500" onClick={() => setOpen(false)}></button>
                    <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-zinc-600 dark:text-gray-400">
                    Connect.ts
                </div>
            </div>

            <div className="w-full max-h-[60vh] overflow-y-scroll" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(100, 100, 100, 0.5) transparent' }}>

                <div className="w-full flex items-center justify-center  overflow-x-hidden">
                    <div className="w-full max-w-md space-y-4">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">Send a Message</h2>
                        </div>

                        {/* Form */}
                        <form className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                                        <TiSortAlphabeticallyOutline />
                                    </div>
                                    <input
                                        id="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="John Doe"
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200" />
                                </div>
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                                        <FiAtSign />
                                    </div>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
                                    />
                                </div>
                            </div>

                            {/* Message Input */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none text-gray-400 dark:text-gray-500">
                                        <LuMessageSquareText />
                                    </div>
                                    <textarea
                                        ref={messageRef}
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Enter your message here..."
                                        className="overflow-y-scroll resize-none block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200 overflow-hidden"
                                        style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(100, 100, 100, 0.5) transparent', minHeight: '120px', maxHeight: '200px' }}
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="cursor-target w-full bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 dark:hover:from-indigo-600 dark:hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transform transition-all duration-200 hover:scale-[1.01] shadow-lg"
                                onClick={(event) => {
                                    event.preventDefault();
                                }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>

            <div className="px-4 lg:px-8 pb-4 mt-4 border-t border-zinc-300 dark:border-gray-800 pt-3 text-lg text-zinc-600 dark:text-gray-500 flex justify-between items-center">
                <div className='flex justify-around w-full'>
                    <a href={LinkedInLink}><IoLogoLinkedin /></a>
                    <a href={LeetCodeLink}><SiLeetcode /></a>
                    <a href={GithubLink}><BsGithub /></a>
                    <a href={GmailLink}><SiGmail /></a>
                </div>
            </div>
        </div>
    );
};
