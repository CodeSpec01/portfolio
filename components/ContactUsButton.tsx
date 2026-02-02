import { BsArrowRight } from "react-icons/bs";
import { MdConnectWithoutContact } from "react-icons/md";

const ContactUsButton = ({ className }: { className?: string }) => {
    return (
        <button 
            className={`
                group relative flex items-center justify-center gap-3 
                px-8 py-4 
                bg-[#FACC15] hover:bg-[#EAB308] 
                text-black 
                rounded-full 
                transition-all duration-300 ease-out 
                hover:scale-105 active:scale-95 
                shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]
                ${className}
            `}
        >
            {/* Primary Icon */}
            <MdConnectWithoutContact size={22} className="opacity-80 group-hover:opacity-100 transition-opacity" />
            
            {/* Text */}
            <span className="font-sans font-semibold text-sm tracking-widest uppercase">
                Connect with me
            </span>

            {/* Subtle Directional Hint on Hover */}
            <div className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300 ease-out">
                 <BsArrowRight size={18} />
            </div>
        </button>
    )
}

export default ContactUsButton