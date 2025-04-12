
import BookConsultation from "./components/about/book-consultation";
// import Hero from "./components/about/hero";
import Journey from "./components/about/journey";
import Trainings from "./components/about/trainings";
import Navbar from "./components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Journey />
      <Trainings /> 
      <BookConsultation />
    </div>
  );
}
