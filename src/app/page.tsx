// import Image from "next/image"
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection"
import WhyChooseUs from "../components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import { World1 } from "@/components/world";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased ">
       <HeroSection /> 
       <FeaturedCourses></FeaturedCourses>
         <WhyChooseUs></WhyChooseUs>
         <MusicSchoolTestimonials/>
         <UpcomingWebinars/>
         <World1></World1>
         <Instructors/>
         <Footer></Footer>

    </main>
  );
}
