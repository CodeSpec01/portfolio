
const ContactUsButton = ({ className }: { className?: string }) => {
    return (
        <button
            className={`group text-slate-950 transition-all flex items-center justify-center whitespace-nowrap rounded-lg hover:rotate-3 will-change-transform duration-300 shadow-lg hover:shadow-xl h-14 text-lg pl-20 pr-6 bg-[rgba(132,0,255,0.5)] shadow-yellow-400/30 hover:shadow-yellow-400/30 ${className}`}
            onClick={() => {
                console.log("Contact Me button clicked");
            }}
        >
            <div
                className="absolute left-0 top-0 mt-1 ml-1 bg-[#ffe380] text-slate-950 p-[0.35rem] bottom-1 group-hover:w-[calc(100%-0.5rem)] transition-all rounded-md duration-300 h-12 w-12"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-full w-full"
                >
                    <path d="M10 8h.01"></path>
                    <path d="M12 12h.01"></path>
                    <path d="M14 8h.01"></path>
                    <path d="M16 12h.01"></path>
                    <path d="M18 8h.01"></path>
                    <path d="M6 8h.01"></path>
                    <path d="M7 16h10"></path>
                    <path d="M8 12h.01"></path>
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                </svg>
            </div>

            <div className="text-[2vw] text-[#FFE380]">Contact Me</div>

            <div
                className="bg-[#ffe380] absolute flex rounded-full animate-ping opacity-75 h-5 w-5 -top-2 -right-2"
            ></div>
            <div
                className="bg-[#fed333] absolute flex rounded-full scale-[90%] h-5 w-5 -top-2 -right-2"
            ></div>
        </button>

    )
}

export default ContactUsButton