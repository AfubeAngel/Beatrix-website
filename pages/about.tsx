
import AboutHero from "./components/about/about-hero";
import BookConsultation from "./components/about/book-consultation";
import Journey from "./components/about/journey";
import Trainings from "./components/about/trainings";
import Navbar from "./components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <Journey />
      <Trainings /> 
      <BookConsultation />
    </div>
  );
}
