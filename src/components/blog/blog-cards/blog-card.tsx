import BlogCard from "./card";

interface IBlogData {
    slug: string;       // Slug for the blog (for URL)
    description: string; // Description for the card
    date: string;        // Date of the blog post
    fullTitle: string;   // Full title of the blog
    imageUrl: string;    // Image URL for the blog
    author: string;      // Author of the blog
}


const blogData:IBlogData[] = [
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
    {
        slug: 'blockchain',
        description: 'Understanding blockchain technology and its potential applications.',
        date: '10/03/2024',
        fullTitle: 'Blockchain: The Backbone of Digital Transformation',
        imageUrl: '/images/blockchain.jpeg',
        author: 'David Wilson',
    },

    {
        slug: 'internet-of-things',
        description: 'Exploring the role of IoT in connecting devices and improving efficiency.',
        date: '25/03/2024',
        fullTitle: 'Internet of Things (IoT): Connecting the World Around Us',
        imageUrl: '/images/internet.jpeg',
        author: 'Chris Brown',
    },
    {
        slug: 'cybersecurity',
        description: 'Securing the digital world: How to protect against cyber threats.',
        date: '30/03/2024',
        fullTitle: 'Cybersecurity: Safeguarding Your Digital Assets',
        imageUrl: '/images/cyber.png',
        author: 'Laura Davis',
    },
    {
        slug: 'devops',
        description: 'The role of DevOps in modern software development practices.',
        date: '05/04/2024',
        fullTitle: 'DevOps: Bridging the Gap Between Development and Operations',
        imageUrl: '/images/dev.jpeg',
        author: 'Robert Miller',
    },
    {
        slug: 'big-data',
        description: 'How big data is transforming industries and decision-making.',
        date: '12/04/2024',
        fullTitle: 'Big Data: Unleashing the Power of Information',
        imageUrl: '/images/big.jpeg',
        author: 'Olivia Moore',
    },
    {
        slug: 'machine-learning',
        description: 'Exploring the intersection of machine learning and artificial intelligence.',
        date: '18/04/2024',
        fullTitle: 'Machine Learning: Transforming Industries Through Data',
        imageUrl: '/images/machine.jpeg',
        author: 'Liam Harris',
    },
    {
        slug: 'augmented-reality',
        description: 'How augmented reality (AR) is enhancing user experiences.',
        date: '25/04/2024',
        fullTitle: 'Augmented Reality: The Next Big Thing in Technology',
        imageUrl: '/images/augmneted.jpeg',
        author: 'Sophia Clarke',
    },
    {
        slug: 'virtual-reality',
        description: 'Understanding the rise of virtual reality in entertainment and education.',
        date: '02/05/2024',
        fullTitle: 'Virtual Reality: Shaping the Future of Interactive Experiences',
        imageUrl: '/images/virtual.jpeg',
        author: 'Ethan Walker',
    },
    {
        slug: 'data-science',
        description: 'The role of data science in solving complex business problems.',
        date: '10/05/2024',
        fullTitle: 'Data Science: Extracting Meaning from Massive Datasets',
        imageUrl: '/images/data.jpeg',
        author: 'Isabella Taylor',
    },
    {
        slug: 'quantum-computing',
        description: 'The promises and challenges of quantum computing in the future.',
        date: '05/06/2024',
        fullTitle: 'Quantum Computing: Pushing the Boundaries of Computing Power',
        imageUrl: '/images/quantum.jpeg',
        author: 'Benjamin White',
    },
    {
        slug: 'robotics',
        description: 'The role of robotics in automation and everyday life.',
        date: '12/06/2024',
        fullTitle: 'Robotics: Shaping the Future of Work and Life',
        imageUrl: '/images/robots.jpeg',
        author: 'Ava Scott',
    },

    {
        slug: 'autonomous-vehicles',
        description: 'The future of autonomous vehicles and their potential impact on society.',
        date: '26/06/2024',
        fullTitle: 'Autonomous Vehicles: Revolutionizing Transportation and Mobility',
        imageUrl: '/images/vehicle.jpeg',
        author: 'Mason Clark',
    },
];


const BlogList = () => {
    return (
        <div className="flex mx-10 gap-12 flex-wrap justify-center items-center py-8 mt-10">
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
    );
};

export default BlogList;
