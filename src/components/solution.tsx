import Image from "next/image";
import Button from "./button/button";

export default function Solution() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
            <div className="px-3 sm:px-8 py-10 md:px-6 md:py-8 lg:px-12 lg:py-16 flex flex-col justify-center items-center md:items-start">
                <h5 className="text-sm sm:text-lg lg:text-xl font-semibold text-[#94d533] text-center md:text-left flex gap-1 justify-center items-center">
                    <Image src="/images/logo2.png" alt="logo" width="40" height="40" />  Best It Solution


                </h5>
                <h2 className="text-2xl text-start sm:text-3xl md:text-2xl lg:text-4xl font-bold text-[#f2f2f4] mt-4 sm:text-center md:text-left">
                    Empowering Your Business with Advanced Technology & IT Expertise
                </h2>
                <p className="text-[#f2f2f4] mt-4 md:mt-6 text-xs md:text-sm lg:text-base  text-justify md:text-left py-2">
                    {`TechTrans delivers innovative IT solutions to help businesses thrive in the digital era. By leveraging advanced technologies, we drive growth, streamline operations, and create new opportunities. As a trusted partner, we provide tailored strategies to meet unique challenges, ensuring success in a rapidly evolving world.`}
                </p>
                <div>
                    <h6 className="text-[#f2f2f4] font-semibold text-sm md:text-base lg:text-lg mb-4 text-start flex items-center gap-2">
                       <span className="p-2 bg-[#94d533] flex justify-center items-center rounded-[50%]"> <Image src="/images/work-iocn1.png" alt="check" width={20} height={20} /></span>
                        Innovative IT Infrastructure
                    </h6>
                    <p className="text-[#f2f2f4] text-xs md:text-sm lg:text-base mb-4 text-start">
                        Establish a future-ready IT framework that empowers your business operations and ensures seamless connectivity across all channels.
                    </p>

                    <h6 className="text-[#f2f2f4] font-semibold text-sm md:text-base lg:text-lg mb-4 text-start flex items-center gap-2">
                       <span className="p-2 bg-[#94d533] flex justify-center items-center">
                        <Image src="/images/work-iocn2.png" alt="check" width={20} height={20} /></span>
                        Comprehensive IT Management
                    </h6>
                    <p className="text-[#f2f2f4] text-xs md:text-sm lg:text-base mb-4 text-start">
                        Concentrate on scaling your business while we handle your technology needs with customized IT management solutions.
                    </p>

                    <h6 className="text-[#f2f2f4] font-semibold text-sm md:text-base lg:text-lg mb-4 text-start flex items-center gap-2">
                       <span className="p-2 bg-[#94d533] flex justify-center items-center"><Image src="/images/work-iocn3.png" alt="check" width={20} height={20} /></span>
                        Secure Data Solutions
                    </h6>
                    <p className="text-[#f2f2f4] text-xs md:text-sm lg:text-base text-start">
                        Safeguard your valuable data and ensure operational continuity with robust data protection and recovery strategies.
                    </p>
                </div>
                <div className="flex flex-col flex-wrap items-center justify-center lg:flex-row gap-4 mt-4 md:mt-6">
                    <Button text="Discover More" bgColour="#94d533" textColour="black" />
                </div>
            </div>
            <div className="flex justify-center items-center gap-6">
                <div className="grid grid-rows-1 justify-center items-center gap-6">
                    <div><Image src="/images/solution1.png" alt="technology" width="250" height="250" /></div>
                    <div><Image src="/images/solution2.png" alt="technology" width="250" height="250" /></div>
                </div>
                <div>
                <div><Image src="/images/solution3.png" alt="technology" width="250" height="250" /></div>
                </div>
            </div>
        </main>
    )
}