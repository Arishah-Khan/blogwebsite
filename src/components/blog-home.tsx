import Image from "next/image";
import BlogCard from "./blog/blog-cards/card";

interface IBlogData {
    slug: string;
    description: string;
    date: string;
    fullTitle: string;
    imageUrl: string;
    author: string;
}

const blogData: IBlogData[] = [
    {
        slug: 'software-development',
        description: 'Building robust and scalable software solutions to help businesses grow.',
        date: '15/02/2024',
        fullTitle: 'The Future of Software Development: Trends & Predictions',
        imageUrl: '/images/software.png',
        author: 'John Doe',
    },
    {
        slug: 'cloud-computing',
        description: 'The impact of cloud technology on businesses and individuals.',
        date: '25/02/2024',
        fullTitle: 'Cloud Computing: Transforming the Future of IT',
        imageUrl: '/images/cloud.png',
        author: 'Michael Johnson',
    },
    {
        slug: 'artificial-intelligence',
        description: 'How AI is shaping the future of technology and automation.',
        date: '01/03/2024',
        fullTitle: 'Artificial Intelligence: Revolutionizing Industries',
        imageUrl: '/images/ai.jpeg',
        author: 'Sara Lee',
    },
]

export default function Blog() {
    return (
        <section className="pb-8">
            <h5 className="text-lg lg:text-3xl font-semibold text-[#94d533] text-center md:text-left flex gap-1 justify-center items-center">
                <Image src="/images/logo2.png" alt="logo" width="40" height="40" />  Our Blog
            </h5>
            <h2 className="text-2xl text-center sm:text-3xl md:text-2xl lg:text-4xl font-bold text-[#f2f2f4] mt-4 max-w-[800px] mx-auto">
                The TechTrans Blog: Innovating Through Knowledge
            </h2>

            <div className="flex mx-10 gap-12 flex-wrap justify-center items-center py-8 ">
                {blogData.map((blog) => (
                    <BlogCard
                        key={blog.slug}
                        slug={blog.slug}
                        description={blog.description}
                        date={blog.date}
                        fullTitle={blog.fullTitle}
                        imageUrl={blog.imageUrl}
                        author={blog.author}
                    />
                ))}
            </div>
        </section>

    )
}