// import { main } from "framer-motion/client";
// import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import Testiscard from "./components/Testiscard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96]
    bg-grid-white/[0.04]">
  <HeroSection />
  <FeaturedCourses/>
  <WhyChooseUs/>
  <Testiscard/>
    </main>
  );
}

