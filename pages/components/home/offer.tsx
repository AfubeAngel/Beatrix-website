import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";
import Image from "next/image";

const offers = [
  {
    title: "One-on-One Coaching",
    description:
      "Providing personalised and compassionate support to help professional women overcome overwhelm and achieve authentic success.",
    icon: "/offer/icon1.svg",
  },
  {
    title: "Holistic Lifestyle Changes",
    description:
      "Creating sustainable lifestyle strategies tailored to individual needs, promoting balance and improved overall wellness.",
    icon: "/offer/icon2.svg",
  },
  {
    title: "Stress Management & Burnout Prevention",
    description:
      "Equipping women with practical tools to effectively manage high-stress environments and prevent burnout for long-term well-being.",
    icon: "/offer/icon3.svg",
  },
  {
    title: "Empowering Women in Leadership",
    description:
      "Helping women redefine success on their terms, enhance self-awareness, and thrive in both personal and professional spheres.",
    icon: "/offer/icon4.svg",
  },
];

export default function Offer() {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      new Splide(sliderRef.current, {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 1,
        gap: "1rem",
        autoScroll: { speed: 5 },
        pagination: false,
        arrows: false,
      }).mount({ AutoScroll });
    }
  }, []);

  return (
    <div className="px-4 py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 ">
          {/* Left Section - Text */}
          <div className="max-w-[440px] flex flex-col gap-[150px] ">
            <div className="flex flex-col gap-4">
              <h2 className="text-[28px] md:text-[48px] font-semibold mb-4 lg:tracking-tight lg:leading-15">
                What I Offer You as Your Health Coach
              </h2>
              <p className="mb-6 text-[20px] text-gray-700 tracking-wide leading-7">
                I offer tailored coaching that focuses on what matters most to
                you, whether fostering work–life balance, redefining success, or
                regaining a sense of purpose.
              </p>
            </div>
            <button className="hidden lg:block bg-primary-main text-white px-6 py-3 w-[302px] h-14 rounded-2xl hover:bg-primary-main">
              Start Your Wellness Journey
            </button>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid sm:grid-cols-2 gap-6 ">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="bg-white shadow-sm p-10 rounded-2xl max-w-[338px] h-[292px] hover:shadow-md transition"
              >
                <div className="flex gap-2 items-center mb-4 ">
                <div className="text-2xl w-10 h-10 rounded-full p-[2px] bg-[#D5DAF4] flex items-center justify-center">
                  <Image
                    src={offer.icon}
                    width={20}
                    height={20}
                    className="w-4 h-4 "
                    alt={offer.title}
                  />
                </div>
                <h3 className="font-semibold text-[18px]">{offer.title}</h3>
                </div>
                <p className="text-base text-gray-600">{offer.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="block md:hidden w-full">
            <div ref={sliderRef} className="splide w-full">
              <div className="splide__track">
                <ul className="splide__list max-w-[375px]">
                  {offers.map((offer, index) => (
                    <li
                      key={index}
                      className="splide__slide bg-white rounded-xl shadow-sm p-5 border hover:shadow-md transition lg:p-10 max-w-[338px] h-[292px]"
                    >
                      <div className="flex gap-2 items-center">
                        <div className="text-2xl mb-3 w-10 h-10 rounded-full bg-[#D5DAF4] flex items-center justify-center">
                          <Image
                            src={offer.icon}
                            width={20}
                            height={20}
                            className=""
                            alt={offer.title}
                          />
                        </div>
                        <h3 className="font-semibold mb-2">{offer.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        {offer.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <button className="block mx-auto lg:hidden bg-primary-main text-white px-6 py-3 w-[302px] h-14 rounded-2xl hover:bg-primary-main">
            Start Your Wellness Journey
          </button>
        </div>
      </div>
    </div>
  );
}
