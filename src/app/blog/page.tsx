import BlogList from "@/components/blog/blog-cards/blog-card";
import BlogsTopic from "@/components/blog/blogs-topic";
import HeroSec from "@/components/blog/hero-sec";

export default function Blog(){
    return(
        <main>
            <HeroSec />
            <BlogsTopic />
            <BlogList />
        </main>
    )
}