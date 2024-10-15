// import { main } from "framer-motion/client";
// import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import Testiscard from "./components/Testiscard";
// import Events from "./components/ui/Events";
import { MacbookScrollDemo } from "./components/MacbookScrollDemo";
// import { PinContainer } from "./components/ui/3d-pin";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96]
    bg-grid-white/[0.04]">
  <HeroSection />
  <FeaturedCourses/>
  <MacbookScrollDemo/>
  <WhyChooseUs/>
  <Testiscard/>
  
  
  
 

    </main>
  );
}

