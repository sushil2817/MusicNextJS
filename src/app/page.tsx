// import Image from "next/image"
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection"
import WhyChooseUs from "../components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
MusicSchoolTestimonials



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       <HeroSection /> 
       <FeaturedCourses></FeaturedCourses>
         <WhyChooseUs></WhyChooseUs>
         <MusicSchoolTestimonials/>
         <UpcomingWebinars/>
    </main>
  );
}
