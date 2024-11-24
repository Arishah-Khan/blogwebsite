"use client"
import Button from "../button/button";
import { toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for React-Toastify

export default function Form() {
    // Submit form handler
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Show success toast when the form is submitted
        toast.success("Form submitted successfully!");

        const form = e.currentTarget as HTMLFormElement;
        form.reset();
    };

    return (
        <section className="pt-10">

            <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#f2f2f4] mb-4">
                    Send Us a Message
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm text-[#f2f2f4] mb-2">Name</label>
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-md bg-[#1e182d] text-[#f2f2f4] border border-[#94d533] focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-[#f2f2f4] mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-md bg-[#1e182d] text-[#f2f2f4] border border-[#94d533] focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-[#f2f2f4] mb-2">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="Your Phone Number"
                            className="w-full p-3 rounded-md bg-[#1e182d] text-[#f2f2f4] border border-[#94d533] focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-[#f2f2f4] mb-2">Subject</label>
                        <input
                            type="text"
                            placeholder="Subject of Your Message"
                            className="w-full p-3 rounded-md bg-[#1e182d] text-[#f2f2f4] border border-[#94d533] focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-[#f2f2f4] mb-2">Message</label>
                        <textarea
                            name="message"
                            placeholder="Write your message here..."
                            className="w-full p-3 rounded-md bg-[#1e182d] text-[#f2f2f4] border border-[#94d533] focus:outline-none h-32"
                            required
                        ></textarea>
                    </div>
                    <Button text="Submit" bgColour="#94d533" textColour="black" />
                </form>
            </div>
        </section>
    );
}
