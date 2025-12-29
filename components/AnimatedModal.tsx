"use client";
import { AnimatePresence, motion } from "motion/react";
import React, {
    ReactNode,
    useEffect,
    useRef,
} from "react";
import { useModal } from "@/contexts/ModalContext";

export const ModalTrigger = ({
    children,
    className,
    ariaLabel,
    style,
    keyboardShortcut,
}: {
    children: ReactNode;
    className?: string;
    ariaLabel?: string;
    style?: React.CSSProperties;
    keyboardShortcut?: boolean;
}) => {
    const { setIsModalOpen } = useModal();

    // Adding ctrl/cmd + K shortcut to open the modal
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (keyboardShortcut && (event.metaKey || event.ctrlKey) && event.key === 'k') {

                event.preventDefault();
                setIsModalOpen(true);
            }

            if (event.key == 'Escape') {

                event.preventDefault();
                setIsModalOpen(false);
            }
        };

        // Attach the listener
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup the listener when component unmounts
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [keyboardShortcut, setIsModalOpen]);

    return (
        <button
            onClick={() => setIsModalOpen(true)}
            type="button"
            className={className}
            style={style}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};

export const ModalBody = ({
    children,
    className,
    style,
    customClassName,
}: {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    customClassName?: string;
}) => {
    const { isModalOpen, setIsModalOpen } = useModal();

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        // Cleanup function to restore overflow when component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    const modalRef = useRef<HTMLDivElement>(null);
    useOutsideClick(modalRef, () => setIsModalOpen(false));

    return (
        <AnimatePresence>
            {isModalOpen && (
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        backdropFilter: "blur(10px)",
                    }}
                    exit={{
                        opacity: 0,
                        backdropFilter: "blur(0px)",
                    }}
                    className={`z-99 ${customClassName} fixed perspective-midrange transform-3d inset-0 h-full w-full flex items-center justify-center`}
                    style={style}
                >
                    <Overlay />

                    <motion.div
                        ref={modalRef}
                        className={`min-h-[50%] max-h-[90%] md:max-w-[40%] md:rounded-2xl relative z-99 flex flex-col flex-1 overflow-hidden ${className}`}
                        initial={{
                            opacity: 0,
                            scale: 0.5,
                            rotateX: 40,
                            y: 40,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            rotateX: 0,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.8,
                            rotateX: 10,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 15,
                        }}
                    >
                        <CloseIcon />
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
// ... (rest of the file remains the same, just CloseIcon needs setIsModalOpen)

export const ModalContent = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div className={`flex flex-col flex-1 p-8 md:p-10 ${className}`}>
            {children}
        </div>
    );
};

export const ModalFooter = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={`flex justify-end p-4 bg-gray-100 dark:bg-neutral-900 ${className}`}
        >
            {children}
        </div>
    );
};

const Overlay = ({ className }: { className?: string }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                backdropFilter: "blur(10px)",
            }}
            exit={{
                opacity: 0,
                backdropFilter: "blur(0px)",
            }}
            className={`fixed inset-0 h-full w-full bg-black/50 ${className}`}
        ></motion.div>
    );
};

const CloseIcon = () => {
    const { setIsModalOpen } = useModal();
    return (
        <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 group z-50"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black dark:text-white h-4 w-4 group-hover:scale-125 group-hover:rotate-3 transition duration-200"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
            </svg>
        </button>
    );
};

// Hook to detect clicks outside of a component.
export const useOutsideClick = (
    ref: React.RefObject<HTMLDivElement>,
    callback: Function
) => {
    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            callback(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback]);
};
