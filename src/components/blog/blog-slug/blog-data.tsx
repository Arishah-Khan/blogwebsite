// Define the type for the blog posts
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
  
  export default blogData;
  