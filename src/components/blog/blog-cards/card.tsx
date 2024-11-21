import Image from "next/image";
import Link from "next/link";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

interface BlogCardProps {
    slug: string;       // Slug for the blog (for URL)
    description: string; // Description for the card
    date: string;        // Date of the blog post
    fullTitle: string;   // Full title of the blog
    imageUrl: string;    // Image URL for the blog
    author: string;      // Author of the blog
}

const BlogCard = ({ slug, description, date, fullTitle, imageUrl, author }: BlogCardProps) => {
    return (
        <div className="shadow-md rounded-md flex flex-col justify-center items-center">
            {/* Image */}
            <div className=" ">
                <Image
                    src={imageUrl}
                    alt={fullTitle}
                    width={300}
                    height={300}
                    className="rounded-md w-[300px] h-[200px]"
                />
            </div>

            {/* Content Overlay */}
            <div className=" bg-[#94d533] text-[#00000d] p-4 rounded-md">
            <div className="flex justify-between items-center mb-4 ">
                    {/* Date */}
                    <p className="text-sm flex items-center gap-2">
                        <AiOutlineCalendar className="" /> {date}
                    </p>

                    {/* Author */}
                    <p className="text-sm flex items-center gap-2">
                        <FaUserAlt className="" /> By {author}
                    </p>
                </div>
                {/* Title */}
                <h2 className="text-xl font-semibold">
                    <Link href={`/blog/${slug}`} >
                        {fullTitle}
                    </Link>
                </h2>

                {/* Description */}
                <p className="text-sm mt-2">{description}</p>
                <Link href={`/blog/${slug}`} className="mt-4">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
