import { IoIosArrowRoundForward } from "react-icons/io";

interface ButtonProps {
    text: string;
    bgColour: string;
    textColour: string;
}

export default function Button({ text, bgColour, textColour }: ButtonProps) {
    return (
        <button
            style={{ backgroundColor: bgColour, color: textColour }}
            className="flex items-center justify-center gap-2 px-3 py-2 md:px-6 md:py-3 rounded-md md:rounded-[50px] font-bold md:font-extrabold text-base md:text-lg transition-all duration-300 hover:scale-105"
        >
            {text} <IoIosArrowRoundForward className="text-xl md:text-2xl" />
        </button>
    );
}
