
import BookConsultation from "./components/about/book-consultation";
import Hero from "./components/about/Hero";
import Journey from "./components/about/journey";
import Navbar from "./components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Journey />
      <BookConsultation />
    </div>
  );
}
