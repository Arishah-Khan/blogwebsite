import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";



export default function Footer() {
    return (
        <footer className="pb-8 pt-4">
            <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-6">
                {/* Left section - Company Description */}
                <div className="md:ml-10 h-[250px]">
                    <div className="overflow-hidden flex justify-around items-center">
                        <Image
                            src="/images/logo3.png"
                            width={180}
                            height={200}
                            alt="logo"
                            className="object-contain w-[190px]  md:w-[180px] h-[70px]"
                        />
                    </div>
                    <p className="text-gray-100  px-2 max-w-[300px] mx-auto text-center">
                        {`At TechTrans, we’re dedicated to delivering innovative technology solutions tailored to meet the unique needs of businesses like yours.`}
                    </p>
                    <div className="flex justify-center  space-x-6 pt-3">
                        <Link
                            href="https://www.facebook.com/profile.php?id=61568085214973"
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 bg-[#252527]  rounded-full hover:bg-[#94d533] transition-all duration-300"
                        >
                            <FaFacebookF className="text-2xl hover:text-black" />
                        </Link>

                        <Link
                            href="https://www.instagram.com/arishahsanaullah78/"
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 bg-[#252527]  rounded-full hover:bg-[#94d533] transition-all duration-300"
                        >
                            <FaInstagram className="text-2xl hover:text-black" />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/arishah-khan-b606092b8/"
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 bg-[#252527]  rounded-full hover:bg-[#94d533] transition-all duration-300"
                        >
                            <FaLinkedinIn className="text-2xl hover:text-black" />
                        </Link>
                        <Link
                            href="https://github.com/Arishah-Khan"
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 bg-[#252527]  rounded-full hover:bg-[#94d533] transition-all duration-300"
                        >
                            <FaGithub className="text-2xl hover:text-black" />
                        </Link>
                    </div>
                </div>

                {/* Middle section - Services */}
                <div className="text-[#f2f2f4] text-center">
                    <h3 className="text-xl font-semibold mb-4 text-[#94d533]">Services We Offer</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-[#94d533]">Cloud Computing Solution</li>
                        <li className="hover:text-[#94d533]">Cybersecurity & Compliance</li>
                        <li className="hover:text-[#94d533]">Software Development</li>
                        <li className="hover:text-[#94d533]">IT Consulting & Support</li>
                    </ul>
                </div>

                {/* Right section - Useful Links */}
                <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4 text-[#94d533]">Useful Links</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-[#94d533]"><Link href="/">Home</Link></li>
                        <li className="hover:text-[#94d533]"><Link href="/about">About Us</Link></li>
                        <li className="hover:text-[#94d533]"><Link href="/blog">Blog</Link></li>
                        <li className="hover:text-[#94d533]"><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4 text-[#94d533]">Contact Us</h3>
                    <div className="space-y-4">
                        {/* Phone number with icon */}
                        <p className="flex items-center justify-center gap-2 hover:text-[#94d533]">
                            <FaPhoneAlt className="text-xl" />
                            0500 222 333
                        </p>

                        {/* Email with icon */}
                        <p className="flex items-center justify-center gap-2 hover:text-[#94d533]">
                            <FaEnvelope className="text-xl" />
                            arishahsanaullah78@gmail.com
                        </p>

                        {/* Website link with icon */}
                        <p className="flex items-center justify-center gap-2 hover:text-[#94d533]">
                            <FaGlobe className="text-xl" />
                            <Link
                                href="https://www.techtrans.org"
                                target="_blank"
                                className="hover:text-[#94d533]"
                            >
                                www.techtrans.org
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <p className="text-white text-center pt-8">
            Copyright @2024 <span className="text-[#94d533]">TechTrans</span> .All Rights Reserved
            </p>
        </footer >
    );
}
