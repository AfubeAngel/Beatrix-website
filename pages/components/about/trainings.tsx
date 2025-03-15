import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";
import "@splidejs/splide/css"; // Import styles

const testimonials = [
  { name: "Susan Blum", role: "Assistant Clinical Professor at Mount Sinai", img: "/images/susan.jpg" },
  { name: "Mark Hyman", role: "MD, Founder of The UltraWellness Center", img: "/images/mark.jpg" },
  { name: "Geneen Roth", role: "Bestselling Author on Emotional Eating", img: "/images/geneen.jpg" },
  { name: "Marion Nestle", role: "PhD, Professor at New York University", img: "/images/marion.jpg" },
];

export default function AutoScrollSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      new Splide(sliderRef.current, {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 3, // Show 3 at a time
        gap: "1rem",
        autoScroll: { speed: 1.5 },
        pagination: false, // ❌ Remove dots
        arrows: false, // ❌ Remove arrows
        breakpoints: {
          1024: { perPage: 2 }, // Medium screens show 2
          768: { perPage: 1 }, // Mobile shows 1
        },
      }).mount({ AutoScroll });
    }
  }, []);

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Trained by the World&apos;s Leading Health <span className="text-red-600">and</span> Wellness Experts
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        I trained at the Institute of Integrative Nutrition, learning from top
        wellness experts and over 100 dietary theories.
      </p>

      {/* Splide Slider */}
      <div ref={sliderRef} className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {testimonials.map((person, index) => (
              <li key={index} className="splide__slide bg-white p-6 rounded-lg shadow-lg border border-gray-300 text-center flex flex-col items-center w-[300px] h-[150px]">
                <Image src={person.img} width={50} height={50} className="rounded-full mb-3" alt={person.name} />
                <p className="font-bold text-lg">{person.name}</p>
                <p className="text-gray-500 text-sm">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
