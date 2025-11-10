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
      <h2 className="text-[24px] lg:text-[48px] text-center font-semibold mb-6">
       Hear from the People I’ve Coached
      </h2>

      {/* Desktop View */}
<div className="hidden md:flex justify-center items-center px-4">
  <div className="bg-primary-main rounded-[20px] lg:py-[65px] lg:px-[133px] py-12 px-8 max-w-3xl w-full flex flex-col items-center text-center relative">
    <p className="text-lg lg:text-xl text-white leading-relaxed tracking-tight max-w-2xl">
      “{testimonials[index].text}”
    </p>

    {/* Name and Role */}
    <p className="mt-2 text-white font-bold">{testimonials[index].name}</p>
    <p className="text-white">{testimonials[index].role}</p>

    {/* Navigation Arrows */}
    <button
      onClick={prevTestimonial}
      className="absolute lg:left-[-50px] xl:left-[-200px] top-1/2 -translate-y-1/2 flex justify-center items-center w-10 h-10 rounded-full border border-primary-main"
    >
      <Image src="/left-arrow.svg" alt="left-arrow" width={10} height={10} />
    </button>

    <button
      onClick={nextTestimonial}
      className="absolute lg:right-[-50px] xl:right-[-200px] top-1/2 -translate-y-1/2 flex justify-center items-center w-10 h-10 rounded-full border border-primary-main"
    >
      <Image src="/right-arrow.svg" alt="right-arrow" width={10} height={10} />
    </button>
  </div>
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
