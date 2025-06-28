// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import About from "./components/home/about";
import Approach from "./components/home/approach/approach";
import BlogSection from "./components/home/blogSection";
import Explore from "./components/home/explore";
import SubFooter from "./components/home/footer-sub";
import Hero from "./components/home/hero";
import Offer from "./components/home/offer";
import SubHero from "./components/home/sub-hero";
import Testimonials from "./components/home/testimonial";
import Navbar from "./components/Navbar";
import SignupPopup from "./components/SignupModal";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SubHero />
      <Offer />
      <About />
      <Approach />
      <Explore />
      <Testimonials />
      <BlogSection />
      <SubFooter />
      <SignupPopup />
    </div>
  );
}
