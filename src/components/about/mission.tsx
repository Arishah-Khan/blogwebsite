import Image from "next/image";
import Button from "../button/button";

export default function Mission() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 pb-2 md:pb-8 lg:pb-4">
            <div className="px-3 sm:px-8 py-10 md:px-6 md:py-8 lg:px-12 lg:py-16 flex flex-col justify-center items-center md:items-start order-2 md:order-1">
                <h5 className="text-lg lg:text-2xl font-semibold text-[#94d533] text-center md:text-left flex gap-1 justify-center items-center">
                    <Image src="/images/logo2.png" alt="logo" width="40" height="40" />  Our Mission
                </h5>
                <h2 className="text-2xl text-start sm:text-3xl md:text-2xl lg:text-4xl font-bold text-[#f2f2f4] mt-4 sm:text-center md:text-left">
                    Empowering Businesses Through Innovation
                </h2>
                <p className="text-[#cbcbce] mt-4 md:mt-6 text-xs md:text-sm lg:text-base  text-justify md:text-left py-2">
                    {`At TechTrans, our mission is to empower businesses by providing innovative, technology-driven solutions that foster growth, streamline operations, and ensure long-term sustainability. We are dedicated to transforming organizations by helping them embrace the power of advanced technology, enabling them to stay competitive in a rapidly changing digital landscape.`}
                </p>
                <p className="text-[#cbcbce] mt-4 md:mt-1 text-xs md:text-sm lg:text-base  text-justify md:text-left py-2">
                    {`We aim to be the trusted partner businesses rely on for their digital transformation journey. By focusing on innovation, excellence, and collaboration, we deliver tailored solutions that drive success and unlock new opportunities for growth. Our commitment is to build future-ready strategies that propel our clients towards achieving their goals and thriving in the digital age.`}
                </p>

                <div className="pt-6">
                    <Button text="Discover More" bgColour="#94d533" textColour="black" />
                </div>
            </div>
            <div className="flex justify-center items-center order-1 md:order-2 pt-6"><Image src="/images/mission.png" alt="technology" width="500" height="500" 
            className="w-[280px] h-[260px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[440px]"/></div>
        </main >
    )
}