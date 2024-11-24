import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

import Form from "./form";

export default function Information() {
    return (
        <section className="py-10 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
                {/* Left Side: Contact Information */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#f2f2f4] mb-4">Contact Information</h2>
                    <p className="text-[#94d533] text-sm sm:text-base mb-6 px-2">
                        Get in touch with us for personalized IT solutions, expert guidance, and unparalleled support for your business needs.
                    </p>
                    <div className="space-y-4">
                        {/* Contact Number */}
                        <div className="max-w-[450px] bg-[#1e182d] p-4 rounded-md flex items-center justify-start">
                            <FaPhoneAlt className="text-[#94d533] text-4xl sm:text-5xl mr-3 p-2 rounded-[50px] bg-[#252527]" />
                            <div>
                                <h3 className="font-bold  text-base sm:text-lg text-[#f2f2f4]">Contact Us</h3>
                                <p className=" text-[#f2f2f4] py-2 text-sm sm:text-base">0500 222 333</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="bg-[#1e182d] p-4 rounded-md flex items-center justify-start max-w-[450px]">
                            <AiOutlineMail className="text-[#94d533] text-4xl sm:text-5xl mr-3 p-2 bg-[#252527]  rounded-[50px]" />
                            <div>
                                <h3 className="font-bold text-base sm:text-lg text-[#f2f2f4]">Email</h3>
                                <p className="text-[#f2f2f4] py-2 text-sm sm:text-base">arishahsanaullah78@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <Form />
            </div>
        </section>
    );
}
