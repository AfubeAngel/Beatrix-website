import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "I've always struggled with balancing my demanding career and personal life. After working with Coach Abby, I now feel more in control of my stress levels.",
    name: "Chimamanda",
    role: "Corporate Manager",
  },
  {
    text: "This coaching experience has been different. I'm eating better, managing my stress, and feeling healthier than ever before. It's the most sustainable change I’ve ever made.",
    name: "Adebayo",
    role: "Teacher",
  },
  {
    text: "The sessions have been a life-changer for me! I now have a structured approach to managing my time effectively.",
    name: "Fatima",
    role: "Entrepreneur",
  },
  {
    text: "I have found new clarity in my personal and professional growth thanks to these coaching sessions.",
    name: "Daniel",
    role: "Software Engineer",
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
    <section className="mt-20 lg:mt-[100px]  px-4 lg:px-[120px] ">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-[24px] lg:text-[48px] font-semibold mb-6">
        What Our Clients Say
      </h2>

      {/* Desktop View - Shows Two Testimonials Side by Side */}
      <div className="hidden md:flex bg-primary-lighter p-20 rounded-lg relative">
        {/* Left Testimonial */}
        <div className="w-1/2 pr-6 border-r border-gray-300">
          <p className="text-lg italic">“{testimonials[index].text}”</p>
          <p className="mt-4 text-primary-main font-bold">{testimonials[index].name}</p>
          <p className="text-[#7C7C7C]">{testimonials[index].role}</p>
        </div>

        {/* Right Testimonial (Next Item in Array) */}
        <div className="w-1/2 pl-6">
          <p className="text-lg italic">
            “{testimonials[(index + 1) % testimonials.length].text}”
          </p>
          <p className="mt-4 text-primary-main font-bold">
            {testimonials[(index + 1) % testimonials.length].name}
          </p>
          <p className="text-[#7C7C7C]">
            {testimonials[(index + 1) % testimonials.length].role}
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 transform p-3 "
        >
          <Image src="/left-arrow.svg" alt="left-arrow" width={20} height={20} />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-4 transform p-3 "
        >
          <Image src="/right-arrow.svg" alt="right-arrow" width={20} height={20} />
        </button>
      </div>

      {/* Mobile View - Shows One Testimonial with Arrows */}
      <div className="relative md:hidden bg-primary-lighter p-6 rounded-lg">
        <div className=" w-[268px] mx-auto">
        <p className="text-lg italic">“{testimonials[index].text}”</p>
        <p className="mt-4 text-primary-main font-bold">{testimonials[index].name}</p>
        <p className="text-[#7C7C7C]">{testimonials[index].role}</p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-1 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-400"
        >
          <Image
            src="/left-arrow.svg"
            alt="left-arrow"
            width={10}
            height={10}
          />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-400"
        >
          <Image
            src="/right-arrow.svg"
            alt="right-arrow"
            width={10}
            height={10}
          />
        </button>
      </div>
      </div>
    </section>
  );
}
