"use client";

import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { MdKeyboardCommandKey } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Modal, ModalBody, ModalTrigger } from "./AnimatedModal";
import SearchModal from "./SearchModal";
import { novaRound } from "@/app/layout";

// ============================================================================
// Types
// ============================================================================

export type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  items: CardNavItem[];
  className?: string;
}

/**
 * Navbar Component
 * 
 * Floating navigation bar with search functionality and dropdown menu.
 * Features keyboard shortcuts (Cmd/Ctrl + K) for search.
 */
const Navbar: React.FC<CardNavProps> = ({ items, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal>
      <div
        className={`fixed scale-[80%] top-4 right-4 z-50 md:top-6 md:right-8 ${novaRound.className}`}
      >
        <div className={`relative flex flex-col items-end ${className}`}>
          {/* Navigation Pill - Search + Hamburger */}
          <div className="relative z-20 flex items-center gap-3 p-2 pl-3 bg-[#0a0a0a]/95 border border-white/10 shadow-lg rounded-full transition-all duration-300">
            {/* Search Trigger Button */}
            <ModalTrigger
              className="cursor-target group px-3 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer font-bold text-sm"
              ariaLabel="Search"
              keyboardShortcut={true}
            >
              <span className="hidden md:flex items-center gap-2">
                <MdKeyboardCommandKey size={14} /> K
              </span>
              <FaSearch className="block md:hidden" size={14} />
            </ModalTrigger>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="flex flex-col gap-[5px] items-end w-5">
                <span
                  className={`h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isOpen ? "w-5 rotate-45 translate-y-[7px]" : "w-5"
                  }`}
                />
                <span
                  className={`h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isOpen ? "opacity-0" : "w-3"
                  }`}
                />
                <span
                  className={`h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-5"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-full mt-3 right-0 w-64 bg-[#0a0a0a]/98 border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top-right ${
              isOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }`}
          >
            {/* Background Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="relative z-10 p-4 flex flex-col gap-6">
              {(items || []).map((item, idx) => (
                <div key={`${item.label}-${idx}`} className="flex flex-col gap-3">
                  {/* Section Title */}
                  <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest pl-2">
                    {item.label}
                  </h3>

                  {/* Navigation Links */}
                  <div className="flex flex-col gap-1">
                    {item.links?.map((link, i) => (
                      <a
                        key={`${link.label}-${i}`}
                        href={link.href}
                        className="cursor-target group flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:text-white hover:bg-white/5 transition-all duration-200"
                      >
                        {link.label}
                        <GoArrowUpRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-xs" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <ModalBody>
        <SearchModal />
      </ModalBody>
    </Modal>
  );
};

export default Navbar;