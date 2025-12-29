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
import { MdKey } from 'react-icons/md';
import Loader from './Loader';

export default function ContactModal() {
    return (
        <div className="flex items-center justify-center p-4 bg-transparent">
            <CoderProfileCard />
        </div>
    );
}

const CoderProfileCard = () => {
    const { setOpen } = useModal();
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [step, setStep] = useState(1);
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);

    // Step 1: Request the Code
    const requestVerification = async () => {
        setLoading(true);
        const res = await fetch('/api/verify-email', {
            method: 'POST',
            body: JSON.stringify({ email }),
        });
        if (res.ok) {
            setStep(2);
        }
        setLoading(false);
    };

    // Step 2: Submit the Feedback
    const submitToken = async () => {
        setLoading(true);
        const res = await fetch('/api/send-connect', {
            method: 'POST',
            body: JSON.stringify({ token, message }),
        });

        if (res.ok) {
            setStep(3);
        }
        setLoading(false);
        setTimeout(() => {
            setStep(1);
            setName('');
            setEmail('');
            setMessage('');
            setToken('');
        }, 3000);
    };

    return (
        <div className="max-w-2xl w-full mx-auto bg-linear-to-r from-[#000000a0] to-[#0a0d37] border-[#1b2c68a0] relative rounded-2xl border shadow-lg" style={{ contain: 'layout style paint', transform: 'translateZ(0)' }}>
            <div className="flex flex-row">
                <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#004D98] to-[#A50044]"></div>
                <div className="h-0.5 w-full bg-linear-to-r from-violet-600 to-transparent"></div>
            </div>

            <div className="px-4 lg:px-8 py-5 flex justify-between items-center bg-linear-to-r from-[#000000a0] to-[#0a0d37] rounded-2xl">
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
                    <div className="w-full max-w-md space-y-4 px-2  ">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">Send a Message</h2>
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Step {step} of 3</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{Math.round((step / 3) * 100)}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                                <div
                                    className="signin-progress bg-linear-to-l from-transparent via-[#004D98] to-[#A50044] h-2 rounded-full transition-all duration-300 ease-out"
                                    style={{ width: `${(step / 3) * 100}%`, transform: 'translateZ(0)', willChange: 'width' }}
                                />
                            </div>
                        </div>

                        {loading && (<Loader />
                        )}

                        {/* Form to get data */}
                        {!loading && step == 1 && (<form className="space-y-6">
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
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-colors duration-150" />
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
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-colors duration-150"
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
                                        // ref={messageRef}
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Enter your message here..."
                                        className="overflow-y-scroll resize-none block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-colors duration-150 overflow-hidden"
                                        style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(100, 100, 100, 0.5) transparent', minHeight: '120px', maxHeight: '200px' }}
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="cursor-target w-full bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 dark:hover:from-indigo-600 dark:hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors duration-150 shadow-lg"
                                onClick={(event) => {
                                    event.preventDefault();
                                    requestVerification();
                                }}
                            >
                                Get Verification Code
                            </button>
                        </form>)}

                        {/* Form to get token */}
                        {!loading && step == 2 && (<form className="space-y-6">
                            <div className="relative z-10">
                                <div className="flex justify-center mb-4 mt-8 sm:mt-4">
                                    <div className="w-40 h-40 flex items-center justify-center">
                                        {/* New Logo Image with Glow */}
                                        <img
                                            src="/globals/lock.png"
                                            alt="Lock Logo"
                                            className="w-32 h-32 object-cover rounded-lg drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                            loading="lazy"
                                            decoding="async"
                                            style={{ transform: 'translateZ(0)' }}
                                        />
                                    </div>
                                </div>

                                <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-200">Send Message With Code Verification</h1>
                                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">
                                    We&apos;ve sent a code to {email}. Please enter it below to verify your identity and send your message.
                                </p>

                                {/* Token Input */}
                                <div className="relative mb-2">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                                        <MdKey />
                                    </div>
                                    <textarea
                                        id="code"
                                        value={token}
                                        onChange={(e) => setToken(e.target.value)}
                                        placeholder="Enter your token here..."
                                        className="overflow-y-scroll resize-none block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200 overflow-hidden h-14"
                                        style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(100, 100, 100, 0.5) transparent' }}
                                    />
                                </div>

                                <p className="text-gray-500 dark:text-gray-500 text-sm">
                                    Didn&apos;t receive a code?{' '}
                                    <button type='button' className="text-blue-500 font-semibold focus:outline-none underline">
                                        Resend code
                                    </button>
                                </p>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="cursor-target w-full bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 dark:hover:from-indigo-600 dark:hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transform transition-all duration-200 hover:scale-[1.01] shadow-lg mb-2"
                                onClick={(event) => {
                                    event.preventDefault();
                                    submitToken();
                                }}
                            >
                                Verify and Send Message
                            </button>
                        </form>)}

                        {/* Successfull Screen */}
                        {!loading && step == 3 && (
                            <h2 className="text-center text-xl font-semibold text-green-600 dark:text-green-500">
                                Message Sent Successfully!
                            </h2>
                        )}
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
