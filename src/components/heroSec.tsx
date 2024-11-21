import Image from "next/image";
import Button from "./button/button";

export default function HeroSection() {
    return (
        <main className=" bg-cover bg-center grid grid-cols-1 md:grid-cols-2">
            {/* Left Side */}
            <div className="px-3 sm:px-8 py-10 md:px-6 md:py-8 lg:px-12 lg:py-16 flex flex-col justify-center items-center md:items-start order-2 md:order-1">
                <h5 className="text-sm sm:text-lg lg:text-xl font-semibold text-[#94d533] text-center md:text-left">
                    TechTrans: Innovating IT Solutions for Growth
                </h5>
                <h1 className="text-2xl text-start sm:text-3xl lg:text-5xl font-bold text-[#f2f2f4] mt-4 sm:text-center md:text-left">
                Transforming Businesses with <span className="text-[#94d533]">Advanced Technology</span> for the Next Generation

                </h1>
                <p className="text-[#f2f2f4] mt-4 md:mt-6 text-xs sm:text-sm lg:text-base leading-relaxed text-justify md:text-left py-2">
                    {`Welcome to TechTrans — where we specialize in delivering innovative IT solutions tailored to help businesses thrive in the digital age. With our advanced technology and future-ready approach, we empower companies to streamline operations, enhance efficiency, and drive sustainable growth. At TechTrans, we’re committed to transforming businesses with next-generation technology, enabling them to stay competitive and achieve long-term success.`}
                </p>
                <div className="flex flex-col flex-wrap items-center justify-center lg:flex-row gap-4 mt-4 md:mt-6">
                    <Button text="Get Started Now" bgColour="#94d533" textColour="black" />
                    <Button text="Watch Demo Video" bgColour="#1e182d" textColour="#f2f2f4" />
                </div>
            </div>

            {/* Right Side */}
            <div className="relative flex items-center justify-center mt-0 order-1 md:order-2">
                {/* Hero images stacked on top of each other */}
                <div className="relative w-full h-[70vh] sm:h-screen">
                    {/* Hero 3: Bottom-most and Center */}
                    <Image
                        src="/images/hero3.png"
                        width={450}
                        height={450}
                        alt="hero3"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[290px] sm:w-[400px] lg:w-[450px] h-[300px] sm:h-[400px] lg:h-[450px]"
                    />

                    {/* Hero 1: Above Hero 3 */}
                    <Image
                        src="/images/hero1.png"
                        width={450}
                        height={450}
                        alt="hero1"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[300px] sm:w-[400px] lg:w-[450px] h-[350px] sm:h-[450px]  lg::h-[500px]"
                    />

                    {/* Hero 2: Top-most */}
                    <Image
                        src="/images/hero2.png"
                        width={300}
                        height={300}
                        alt="hero2"
                        className="absolute bottom-[10px] sm:bottom-[40px]  left-1/2 transform -translate-x-1/2 z-30 w-[200px] sm:w-[320px] h-[100px] sm:h-[130px] lg:h-[150px]"
                    />
                </div>
            </div>
        </main>
    );
}
