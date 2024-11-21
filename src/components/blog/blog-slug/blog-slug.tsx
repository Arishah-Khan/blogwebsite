import blogData from '@/components/blog/blog-slug/blog-data';
import { useRouter } from 'next/router';

interface BlogPost {
    slug: string;
    description: string;
    date: string;
    fullTitle: string;
    imageUrl: string;
    author: string;
  }
  
  // Your blog data array (import or define it)
  const blogData: BlogPost[] = [
    {
      slug: 'software-development',
      description: 'Building robust and scalable software solutions to help businesses grow.',
      date: '15/02/2024',
      fullTitle: 'The Future of Software Development: Trends & Predictions',
      imageUrl: '/images/software.jpeg',
      author: 'John Doe',
    },
  ];

// Generate paths based on available blog slugs
export async function getStaticPaths() {
  const paths = blogData.map((blog) => ({
    params: { slug: blog.slug }, // Each dynamic path will contain 'slug'
  }));

  console.log(paths); // Check if paths are correct

  return {
    paths,
    fallback: false, // false means other paths will result in a 404
  };
}

// Fetch the data for the blog post based on the slug
export async function getStaticProps({ params }: { params: { slug: string } }) {
  console.log('Slug:', params.slug); // Log to check the slug passed

  const blogPost = blogData.find((blog) => blog.slug === params.slug);

  if (!blogPost) {
    return { notFound: true }; // If blog post not found, return 404
  }

  return {
    props: {
      blogPost, // Pass the blogPost data as a prop to the component
    },
  };
}

const BlogPost = ({ blogPost }: { blogPost: { fullTitle: string; date: string; author: string; imageUrl: string; description: string } }) => {
    // Check if blogPost is available
    if (!blogPost) {
      return <div>Blog not found!</div>;
    }
  
    return (
      <div>
        <h1>{blogPost.fullTitle}</h1>
        <p>{blogPost.date} | {blogPost.author}</p>
        <img src={blogPost.imageUrl} alt={blogPost.fullTitle} />
        <p>{blogPost.description}</p>
      </div>
    );
  };
  

export default BlogPost;
