"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";

// ============================================================================
// Types & Context
// ============================================================================

interface ModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

// ============================================================================
// Modal Provider & Hook
// ============================================================================

const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export const Modal: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <ModalProvider>{children}</ModalProvider>;
};

// ============================================================================
// Modal Components
// ============================================================================

interface ModalTriggerProps {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  style?: React.CSSProperties;
  keyboardShortcut?: boolean;
}

/**
 * ModalTrigger Component
 * 
 * Button that opens the modal. Supports keyboard shortcuts (Cmd/Ctrl + K).
 */
export const ModalTrigger: React.FC<ModalTriggerProps> = ({
  children,
  className,
  ariaLabel,
  style,
  keyboardShortcut,
}) => {
  const { setOpen } = useModal();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Open modal with Cmd/Ctrl + K
      if (
        keyboardShortcut &&
        (event.metaKey || event.ctrlKey) &&
        event.key === "k"
      ) {
        event.preventDefault();
        setOpen(true);
      }

      // Close modal with Escape
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyboardShortcut, setOpen]);

  return (
    <button
      onClick={() => setOpen(true)}
      type="button"
      className={className}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

interface ModalBodyProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  customClassName?: string;
}

/**
 * ModalBody Component
 * 
 * Container for modal content with animations and outside click detection.
 */
export const ModalBody: React.FC<ModalBodyProps> = ({
  children,
  className,
  style,
  customClassName,
}) => {
  const { open, setOpen } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  // Close modal on outside click
  useOutsideClick(modalRef, () => setOpen(false));

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
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
                            scale: 0.95,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.95,
                            y: 20,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                        }}
                        style={{ transform: 'translateZ(0)', willChange: 'auto' }}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

interface ModalContentProps {
  children: ReactNode;
  className?: string;
}

export const ModalContent: React.FC<ModalContentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`flex flex-col flex-1 p-8 md:p-10 ${className}`}>
      {children}
    </div>
  );
};

interface ModalFooterProps {
  children: ReactNode;
  className?: string;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`flex justify-end p-4 bg-gray-100 dark:bg-neutral-900 ${className}`}
    >
      {children}
    </div>
  );
};

// ============================================================================
// Internal Components
// ============================================================================

interface OverlayProps {
  className?: string;
}

const Overlay: React.FC<OverlayProps> = ({ className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 h-full w-full bg-black/70 ${className}`}
    />
  );
};

const CloseIcon: React.FC = () => {
  const { setOpen } = useModal();
  return (
    <button
      onClick={() => setOpen(false)}
      className="absolute top-4 right-4 group"
      aria-label="Close modal"
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

// ============================================================================
// Hooks
// ============================================================================

/**
 * useOutsideClick Hook
 * 
 * Detects clicks outside of a referenced element and calls a callback.
 * Useful for closing modals, dropdowns, etc.
 */
export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: (event: MouseEvent | TouchEvent) => void
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
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
