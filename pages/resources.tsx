
import Hero from "./components/resources/Hero";
import Navbar from "./components/Navbar";
import BlogSection from "./components/resources/blogSection";
import SubFooter from "./components/resources/footer-sub";
import Testimonials from "./components/resources/testimonial";
import Strategy from "./components/resources/strategy";

export default function Resources() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Strategy />
      <Testimonials />
      <BlogSection />
      <SubFooter />
    </div>
  );
}