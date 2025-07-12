import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";
import "@splidejs/splide/css"; // Import styles

const testimonials = [
  {
    name: "Susan Blum",
    role: "Assistant Clinical Professor at Mount Sinai",
    img: "/training/geneen.png",
  },
  {
    name: "Mark Hyman",
    role: "MD, Founder of The UltraWellness Center",
    img: "/training/mark hy.png",
  },
  {
    name: "Geneen Roth",
    role: "Bestselling Author on Emotional Eating",
    img: "/training/geneen.png",
  },
  {
    name: "Marion Nestle",
    role: "PhD, Professor at New York University",
    img: "/training/marion.png",
  },
    {
    name: "Mark Bitmann",
    role: "Food writer for The New York Times ",
    img: "/training/mark.png",
  },
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
      <h2 className="text-2xl lg:text-[48px] font-bold text-center mb-6 max-w-[900px] mx-auto">
        Trained by the World&apos;s Leading Health and Wellness Experts
      </h2>

      <p className="text-center text-base lg:text-xl text-[#6D6D6D] max-w-[974px] mx-auto mb-8 lg:mb-10">
        I trained at the Institute of Integrative Nutrition, learning from top
        wellness experts and over 100 dietary theories. This expertise allows me
        to craft personalized, sustainable health solutions for every client
      </p>

      {/* Splide Slider */}
      <div ref={sliderRef} className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {testimonials.map((person, index) => (
              <li
                key={index}
                className="splide__slide bg-white py-2 px-4 rounded-2xl shadow-lg border border-primary-main flex gap-2 max-w-[385px] h-[94px]"
              >
                <Image
                  src={person.img}
                  width={40}
                  height={40}
                  className="rounded-full mb-3 w-10 h-10 "
                  alt={person.name}
                />
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-lg">{person.name}</p>
                  <p className="text-gray-500 text-sm">{person.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
