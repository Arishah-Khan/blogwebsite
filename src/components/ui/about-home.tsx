import Image from "next/image";
import Button from "../button/button";

export default function AboutSec() {
    return (
        <main className=" grid grid-cols-1 md:grid-cols-2">
                <div className="w-full h-[70vh] sm:h-screen flex justify-center items-center text-center">
                    <div className="relative w-full h-[60vh] sm:h-screen flex justify-center items-center  lg:pt-8">
                        <div className="flex gap-0 sm:gap-8 lg:gap-12">
                        <Image
                            src="/images/about1.png"
                            width={100}
                            height={450}
                            alt="hero1"
                            className="relative top-1/2 left-0 sm:left-10 pr-1 sm:pr-4 md:pr-1 lg:pr-4 transform  z-20 w-[70px] sm:w-[100px] md:w-[80px] lg:w-[110px] h-[300px] sm:h-[400px] md:h-[350px] lg:h-[450px]"
                        />
                        <Image
                            src="/images/about.png"
                            width={400}
                            height={450}
                            alt="hero3"
                            className="z-10 w-[240px] sm:w-[350px] lg:w-[420px] h-[300px] sm:h-[380px] lg:h-[450px] flex pl-4 md:h-[350px]"
                        />
                        </div>

                        {/* Bottom Text */}
                        <div className="bg-[#94d533] text-[#000032] absolute bottom-[-20px] sm:bottom-12 md:bottom-4 left-[40%] md:left-1/3 lg:left-1/4 transform -translate-x-1/2 z-30 px-2 py-1 md:px-3 md:py-3 lg:py-3 lg:px-5 flex flex-col justify-center items-center rounded-md md:gap-1 lg:gap-2 shadow-md">
                            <div>
                                <Image src="/images/logo.png" alt="logo" width="50" height="50" className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" />
                            </div>
                            <h3 className="font-bold text-base sm:text-xl">24/7 Support</h3>
                            <p className="text-center text-sm sm:text-base">TechTrans Technology <br /> & IT Solution</p>
                        </div>
                    </div>

            </div>
            {/* Left Side */}
            <div className="px-3 sm:px-8 py-10 md:px-6 md:py-8 lg:px-12 lg:py-16 flex flex-col justify-center items-center md:items-start">
                <h5 className="text-sm sm:text-lg lg:text-xl font-semibold text-[#94d533] text-center md:text-left flex gap-1 justify-center items-center">
                    <Image src="/images/logo2.png" alt="logo" width="40" height="40" /> About Our Company

                </h5>
                <h2 className="text-2xl text-start sm:text-3xl md:text-2xl lg:text-4xl font-bold text-[#f2f2f4] mt-4 sm:text-center md:text-left">
                    Transforming Businesses with Cutting-Edge Technology
                </h2>
                <p className="text-[#f2f2f4] mt-4 md:mt-6 text-xs md:text-sm lg:text-base  text-justify md:text-left py-2">
                    {`TechTrans is a pioneering force in revolutionizing the way businesses operate, harnessing the power of advanced technology to drive success in the digital era. We believe that innovation, collaboration, and a relentless pursuit of excellence are key to empowering organizations. Our tailored solutions help businesses stay ahead of the competition by embracing the latest technological advancements, adapting seamlessly to change, and unlocking new opportunities for growth. At TechTrans, we are committed to shaping the future of business through technology, ensuring our clients thrive in the next generation of industry.`}
                </p>
                <div>
                <h6 className="text-[#f2f2f4] font-semibold text-sm md:text-base lg:text-lg mb-2 text-start"><span className="bg-[#94d533] text-black mr-2 px-1 rounded-[50%]">✔</span> Dramatically re-engineer value added IT system.</h6>
                <h6 className="text-[#f2f2f4] font-semibold text-sm md:text-base lg:text-lg mb-2 text-start"><span className="bg-[#94d533] text-black mr-2 px-1 rounded-[50%]">✔</span> Highlight any unique selling points or differentiators.</h6>
                <h6 className="text-[#f2f2f4] font-semibold text-sm md:text-base lg:text-lg text-start"><span className="bg-[#94d533] text-black mr-2 px-1 rounded-[50%]">✔</span> Incorporate visuals such as team photos shots.
                </h6>
                </div>

                <div className="flex flex-col flex-wrap items-center justify-center lg:flex-row gap-4 mt-4 md:mt-6">
                    <Button text="Discover More" bgColour="#94d533" textColour="black" />
                </div>
            </div>

            {/* Right Side */}

        </main>
    );
}
