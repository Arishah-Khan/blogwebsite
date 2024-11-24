"use client"
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Button from "./button/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";

export default function Header() {
    const pathname = usePathname(); // Get the current pathname

    return (
        <header className="bg-[#000002] px-2 md:px-4 py-1 md:py-2 mb-2 border-b-[1px] border-[#65646499] shadow-[0_1px_5px_rgba(255,255,255,0.3)]">
            <div className="flex sm:px-4 justify-between items-center">
                {/* Logo (left-aligned) */}
                <div className="overflow-hidden">
                    <Image
                        src="/images/logo1.png"
                        width={180}
                        height={200}
                        alt="logo"
                        className="object-contain w-[120px] md:w-[180px] h-[70px]"
                    />
                </div>

                {/* Navigation Links (centered) */}
                <ul className="hidden md:flex gap-10 text-[#f2f2f4] font-semibold flex-grow justify-center">
                    {["Home", "About", "Contact", "Blog"].map((item) => {
                        // Generate the path for each link
                        const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;

                        return (
                            <li key={item}>
                                <Link
                                    href={path}
                                    className={`text-lg transition-colors ${pathname === path
                                            ? " text-[#94d533] font-semibold"
                                            : "text-[#f2f2f4]"
                                        }`}
                                >
                                    {item}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Button (right-aligned) */}
                <div className="hidden md:flex space-x-4">
                    <Button text="Get A Quote" bgColour="#94d533" textColour="black" />
                </div>

                {/* Mobile section */}
                <div className="relative md:hidden">
                    <Sheet>
                        <SheetTrigger className="text-[#94d533]">
                            <FaBars size={24} />
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-[#00000d] p-6 shadow-lg">
                            <SheetHeader>
                                <SheetTitle className="text-lg font-semibold text-[#94d533]">
                                    <div className="flex justify-center items-center pt-8 pb-2">
                                        <Image src="/images/logo1.png" alt="logo" width={180} height={200} />
                                    </div>
                                </SheetTitle>
                            </SheetHeader>
                            <ul className="flex flex-col justify-center items-center space-y-4 py-4">
                                {["Home", "About", "Contact", "Blog"].map((item) => {
                                    // Generate the path for each link
                                    const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;

                                    return (
                                        <li key={item}>
                                            <Link
                                                href={path}
                                                className={`text-lg transition-colors ${pathname === path
                                                        ? "text-[#94d533] underline"
                                                        : "text-[#f2f2f4] hover:text-[#94d533]"
                                                    }`}
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="flex justify-center items-center">
                                <Button text="Get A Quote" bgColour="#94d533" textColour="black" />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
