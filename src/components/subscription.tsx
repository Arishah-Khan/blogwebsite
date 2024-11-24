"use client"
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './button/button';

const Subscription = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (!email) {
            toast.error('Email field cannot be empty.');
            return;
        }
        if (!validateEmail(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        setEmail('');
        toast.success('Thank you for subscribing to TechTrans! Stay tuned for updates.');
    };

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <section className="pt-2 sm:pt-6 pb-8 text-center text-white">
            <h2 className="text-2xl text-center sm:text-3xl md:text-2xl lg:text-4xl font-bold text-[#f2f2f4] mt-4 max-w-[800px] mx-auto">
                Stay Connected with TechTrans
            </h2>
            <p className="text-[#f2f2f4] mt-4 md:mt-6 text-xs md:text-sm lg:text-base  text-center pt-1 pb-6 px-2">
                Subscribe to our newsletter and stay updated with the latest innovations,<br/> tech trends, and expert tips tailored for your business success.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-4 py-2 w-[280px] sm:w-[340px] border border-gray-300  text-white focus:outline-none focus:ring-2 focus:ring-[#94d533] bg-[#1e182d] rounded-[50px]"
                />
              <Button 
              text="Subscribe"
              bgColour="#94d533"
              textColour="black"
              onClick={handleSubscribe} />
            </div>
            <ToastContainer />
        </section>
    );
};

export default Subscription;
