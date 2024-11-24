import AboutSec from "@/components/about-home";
import Blog from "@/components/blog-home";
import HeroSection from "@/components/heroSec";
import Solution from "@/components/solution";

export default function Home() {
  return (
    <>
    <HeroSection/> 
    <AboutSec />
    <Solution />
    <Blog />
    </>
  );
}
