'use client'

import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
import Navbar from "./Navbar"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

const TransitionElement = ({ children }) => {

    const pathName = usePathname()
    useEffect(() => {
        setTimeout(() => {
            const element = document.getElementById('pathText')
            element.style.zIndex = 0;

        }, 1500);

    }, [])

    return (
        <AnimatePresence mode="wait">

            <div key={pathName} className="w-screen h-screen overflow-scroll bg-gradient-to-b from-blue-200 to-red-50">

                <motion.div
                    className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
                    animate={{ height: '0vh' }}
                    exit={{ height: '140vh' }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />

                <motion.div
                    className="fixed m-auto top-0 right-0 left-0 bottom-0 text-white text-8xl cursor-default h-fit w-fit z-40"
                    id="pathText"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {pathName.substring(1) ? pathName.substring(1) : "Home"}
                </motion.div>

                <motion.div
                    className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
                    initial={{ height: '140vh' }}
                    animate={{ height: '0vh', transition: { delay: 0.5 } }}
                />

                <div className="h-24">
                    <Navbar />
                </div>

                <div className="h-[calc(100vh-6rem)]">
                    {children}
                </div>
            </div>
        </AnimatePresence>
    )
}

export default TransitionElement
