import { MdConnectWithoutContact } from "react-icons/md";

const ContactUsButton = ({ className }: { className?: string }) => {
    return (
        <div
            className={`group text-slate-950 transition-all flex items-center justify-center whitespace-nowrap rounded-lg hover:rotate-3 will-change-transform duration-300 shadow-lg hover:shadow-xl h-14 text-lg pl-20 pr-6 bg-[rgba(132,0,255,0.5)] shadow-yellow-400/30 hover:shadow-yellow-400/30 ${className}`}
        >
            <div
                className="absolute left-0 top-0 mt-1 ml-1 bg-[#ffe380] text-slate-950 p-[0.35rem] bottom-1 group-hover:w-[calc(100%-0.5rem)] transition-all rounded-md duration-300 h-12 w-12 flex items-center justify-center"
            >
                <MdConnectWithoutContact size={'45px'} />
            </div>

            <div className="text-[2vw] text-[#FFE380]">Connect with me</div>

            <div
                className="bg-[#ffe380] absolute flex rounded-full animate-ping opacity-75 h-5 w-5 -top-2 -right-2"
            ></div>
            <div
                className="bg-[#fed333] absolute flex rounded-full scale-[90%] h-5 w-5 -top-2 -right-2"
            ></div>
        </div>

    )
}

export default ContactUsButton