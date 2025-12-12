"use client";
import React from 'react';
import { novaRound } from '@/app/layout'; // Assuming this is where you keep it
import { GoArrowUpRight } from 'react-icons/go';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiArrowLongUp } from 'react-icons/hi2';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    { title: "Sitemap", items: ["Home", "About", "Projects", "Blog"] },
    { title: "Legal", items: ["Privacy Policy", "Terms of Service", "Cookies"] },
  ];

  return (
    <footer className={`relative w-full bg-[#0a0a0a] pt-20 overflow-hidden ${novaRound.className}`}>
      
      {/* 1. Background Texture & Border */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        
        {/* 2. Top Section: CTA & Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand / CTA Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl text-white mb-6 leading-tight">
                Let's build something <br />
                <span className="text-white/40">extraordinary together.</span>
              </h2>
              <button className="group flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-white/90 transition-all">
                Get in touch
                <GoArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {links.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="text-sm font-bold text-white/30 uppercase tracking-widest">{section.title}</h3>
                <ul className="flex flex-col gap-3">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                        <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 h-[1px] bg-white" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Socials Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-white/30 uppercase tracking-widest">Connect</h3>
              <div className="flex gap-4">
                {[FaGithub, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5 hover:bg-white hover:text-black hover:border-transparent transition-all duration-300">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Section: Big Text & Copyright */}
        <div className="relative border-t border-white/5 pt-8 pb-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} YourBrand Inc.
          </div>

          {/* Scroll to Top */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
          >
            Back to top
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors">
              <HiArrowLongUp className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

        {/* 4. Massive Watermark Text (Decorative) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[40%] pointer-events-none opacity-[0.02] whitespace-nowrap select-none">
          <span className="text-[15vw] md:text-[20vw] font-bold uppercase leading-none tracking-tighter">
            CREATIVE
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;