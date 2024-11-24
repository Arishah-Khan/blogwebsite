import Image from "next/image";

export default function BlogsTopic() {
    const blogTopic = [
        "Software Development",
        "Cloud Solution",
        "Cyber Security",
        "Data Analytics",
        "Manage IT Services",
        "Network Solution",
        "Consulting IT Services",
        "AI & Machine Learning",
        "Cloud Migration",
        "Blockchain Technology",
        "Business Automation",
        "Digital Transformation",
        "IoT (Internet of Things) Solutions",
        "Cybersecurity Solutions",
        "Software as a Service (SaaS)",
        "DevOps Solutions",
        "Enterprise Resource Planning (ERP) Systems",
        "Big Data Solutions",
        "Robotic Process Automation (RPA)",
        "Virtualization Solutions",
        "Edge Computing"
    ];

    return (
        <section className="px-2 sm:px-4 py-1 sm:py-3  bg-[#94d533]">
            <div className="overflow-hidden">
                <div className="flex animate-marquee space-x-4 sm:space-x-8 py-2">
                    {[...blogTopic, ...blogTopic].map((topic, index) => (
                        <span
                            key={index}
                            className="flex items-center space-x-2 whitespace-nowrap text-base sm:text-lg font-semibold cursor-pointer transition duration-300"
                        >
                            <Image
                                src="/images/logo.png"
                                alt="logo"
                                width="20"
                                height="20"
                                className="inline ml-10" 
                            />
                            <span>{topic}</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
