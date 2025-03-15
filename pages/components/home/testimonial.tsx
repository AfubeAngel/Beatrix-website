import { useState } from "react";

const testimonials = [
  {
    text: "I've always struggled with balancing my demanding career and personal life. After working with Coach Abby, I now feel more in control of my stress levels.",
    name: "Chimamanda",
    role: "Corporate Manager",
  },
  {
    text: "This coaching experience has been different. I'm eating better, managing my stress, and feeling healthier than ever before.",
    name: "Adebayo",
    role: "Teacher",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-bold mb-6">What Our Clients Say</h2>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-2 bg-primary-lighter p-6 rounded-lg">
        {/* Left Side */}
        <div className="pr-6 border-r border-gray-300">
          <p className="text-lg italic">“{testimonials[0].text}”</p>
          <p className="mt-4 font-bold">{testimonials[0].name}</p>
          <p className="text-gray-500">{testimonials[0].role}</p>
        </div>

        {/* Right Side */}
        <div className="pl-6">
          <p className="text-lg italic">“{testimonials[1].text}”</p>
          <p className="mt-4 font-bold">{testimonials[1].name}</p>
          <p className="text-gray-500">{testimonials[1].role}</p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="relative md:hidden bg-primary-lighter p-6 rounded-lg">
        <p className="text-lg italic">“{testimonials[index].text}”</p>
        <p className="mt-4 font-bold">{testimonials[index].name}</p>
        <p className="text-gray-500">{testimonials[index].role}</p>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
        >
          ←
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
        >
          →
        </button>
      </div>
    </section>
  );
}
