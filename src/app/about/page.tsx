import HeroSec from "@/components/about/hero-sec";
import Mission from "@/components/about/mission";
import Team from "@/components/about/team";
import BlogsTopic from "@/components/blog/blogs-topic";

export default function AboutUs(){
    return(
        <main>
            <HeroSec />
            <BlogsTopic />
            <Mission/>
            <Team />
        </main>
    )
}