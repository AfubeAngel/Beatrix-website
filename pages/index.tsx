// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import About from "./components/home/about";
import Approach from "./components/home/approach/approach";
import Explore from "./components/home/explore";
import Hero from "./components/home/hero";
import SubHero from "./components/home/sub-hero";
import Navbar from "./components/Navbar";

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
      <About />
      <Approach />
      <Explore />
    </div>
  );
}
