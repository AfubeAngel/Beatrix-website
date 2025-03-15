
import Hero from "./components/about/Hero";
import Navbar from "./components/Navbar";
import BlogSection from "./components/resources/blogSection";
import SubFooter from "./components/resources/footer-sub";
import Testimonials from "./components/resources/testimonial";

export default function Resources() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Testimonials />
      <BlogSection />
      <SubFooter />
    </div>
  );
}