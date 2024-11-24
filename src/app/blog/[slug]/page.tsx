import blogData from "@/components/blog/blog-slug/blog-data";
import CommentsSection from "@/components/blog/blog-slug/blog-comment";
import BlogsTopic from "@/components/blog/blogs-topic";
import Image from "next/image";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const BlogPage = ({ params }: BlogPageProps) => {
  const { slug } = params;
  const post = blogData.find((blog) => blog.slug === slug);

  if (!post) {
    return <div className="text-white text-center">Post not found!</div>;
  }

  return (
    <div>
      {/* Title Section */}
      <div className="mb-2 sm:mb-8 py-12 text-center mx-auto px-2 sm:px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white pt-6 max-w-4xl mx-auto">
          {post.fullTitle}
        </h1>

      </div>

      <BlogsTopic />

      {/* Main Image Section */}
      <div className="grid grid-cols-1 justify-items-center px-4 max-w-5xl mx-auto pb-10">
        <div className="pt-8 pb-4 flex items-center flex-col">
          <Image
            src={post.imageUrl}
            alt={post.fullTitle}
            width={600}
            height={400}
            className=" w-[300px] sm:[450px] md:w-[600px] h-auto rounded-[20px] my-4 border-2 border-[#d5c533]"
          />
          <div className="flex gap-5 sm:gap-10">
            <p className="flex items-center text-base sm:text-lg text-[#94d533]">
              <FaUser className="mr-2" /> By {post.author}
            </p>
            <p className="flex items-center text-base sm:text-lg text-[#94d533]">
              <FaCalendarAlt className="mr-2" /> {post.date}
            </p>
          </div>
        </div>

        {/* Author, Date, Short Description and Bio */}
        <div className="mb-8">
          <p className="text-gray-300 text-center">{post.description}</p>

          {/* Author Bio Section */}
          <div className="mt-4 py-4 max-w-[90%] md:max-w-[50%] mx-auto text-center">
            <h3 className="text-2xl font-semibold text-[#94d533]">About the Author</h3>
            <p className="text-white mt-2 text-justify">{post.authorBio}</p>
          </div>
        </div>

        {/* Content Section */}
        <div>
          {/* Dynamically Render Content from Nested Object */}
          <h2 className="text-2xl font-bold mt-4 mb-2 text-[#94d533]">Introduction</h2>
          <p className=" text-base sm:text-lg text-gray-200">{post.content.introduction}</p>

          <h2 className="text-2xl font-bold mt-8 mb-2 text-[#94d533]">Main Content</h2>
          <p className="text-base sm:text-lg text-gray-200">{post.content.mainContent}</p>

          <h2 className="text-2xl font-bold mt-8 mb-2 text-[#94d533]">Conclusion</h2>
          <p className="text-base sm:text-lg text-gray-200">{post.content.conclusion}</p>
        </div>
      </div>

      <CommentsSection />
    </div>
  );
};

// Static Paths Generation
export const generateStaticParams = async () => {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
};

export default BlogPage;
