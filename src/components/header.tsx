import Image from "next/image";
import Link from "next/link";
import Button from "./button/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { FaBars } from "react-icons/fa";


export default function Header() {
    return (
        <header className="bg-[#000128] shadow-md px-2 md:px-8 py-1 md:py-2">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className=" overflow-hidden"> {/* Fixed height */}
                    <Image
                        src="/images/logo1.png"
                        width={180}
                        height={200}
                        alt="logo"
                        className="object-contain w-[120px] h-[70px] md:w-[180px] md:h-[80px]"
                    />
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex gap-10 text-[#f2f2f4] font-semibold">
                    {["Home", "About Us", "Contact", "Blog"].map((item) => (
                        <li key={item}>
                            <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-[#f2f2f4] hover:text-blue-600 transition-colors">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/*  mobile section */}
                <div className="relative md:hidden">
                    <Sheet>
                        <SheetTrigger>  <button className="text-[#071fa8]">
                            <FaBars size={24} />
                        </button></SheetTrigger>
                        <SheetContent side="right" className="bg-white p-6 shadow-lg">
                            <SheetHeader>

                                <SheetTitle className="text-lg font-semibold text-[#01004c]"> <div className="flex justify-center items-center pt-8 pb-2">
                                    <Image src="/images/logo1.png" alt="logo"  width={180}
                        height={200} />
                                </div></SheetTitle>
                             
                            </SheetHeader>
                            <ul className="flex flex-col justify-center items-center space-y-4 py-4">
                                {[
                                    "Home", "About Us", "Contact", "Blog"
                                ].map((item) => (
                                    <li key={item}>
                                        <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-[#f2f2f4] hover:text-blue-600 transition-colors text-lg">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-center items-center">
                    <Button
                        text="Get A Quote"
                        bgColour="#94d533"
                        textColour="white" />
                </div>

                        </SheetContent>
                    </Sheet>

                </div>
                <div className="hidden md:flex space-x-4">
                    <Button
                        text="Get A Quote"
                        bgColour="#94d533"
                        textColour="black" />
                </div>
            </div>
        </header>
    );
}
