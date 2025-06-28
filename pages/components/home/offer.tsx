
// const offers = [
//   {
//     title: 'One-on-One Coaching',
//     description:
//       'Providing personalised and compassionate support to help professional women overcome overwhelm and achieve authentic success.',
//     icon: '👩‍⚕️',
//   },
//   {
//     title: 'Holistic Lifestyle Changes',
//     description:
//       'Creating sustainable lifestyle strategies tailored to individual needs, promoting balance and improved overall wellness.',
//     icon: '🍃',
//   },
//   {
//     title: 'Stress Management & Burnout Prevention',
//     description:
//       'Equipping women with practical tools to effectively manage high-stress environments and prevent burnout for long-term well-being.',
//     icon: '🧘‍♀️',
//   },
//   {
//     title: 'Empowering Women in Leadership',
//     description:
//       'Helping women redefine success on their terms, enhance self-awareness, and thrive in both personal and professional spheres.',
//     icon: '💼',
//   },
// ];

// export default function Offer() {
//   return (
//     <div className="px-4 py-12 md:py-20 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           <div>
//             <h2 className="text-3xl font-bold mb-4">
//               What I Offer You as Your Health Coach
//             </h2>
//             <p className="mb-6 text-gray-700">
//               I offer tailored coaching that focuses on what matters most to you, whether fostering work–life balance, redefining success, or regaining a sense of purpose.
//             </p>
//             <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
//               Start Your Wellness Journey
//             </button>
//           </div>

//           <div className="grid sm:grid-cols-2 gap-6">
//             {offers.map((offer, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl shadow-sm p-5 border hover:shadow-md transition"
//               >
//                 <div className="text-2xl mb-3">{offer.icon}</div>
//                 <h3 className="font-semibold mb-2">{offer.title}</h3>
//                 <p className="text-sm text-gray-600">{offer.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";

const offers = [
  {
    title: "One-on-One Coaching",
    description:
      "Providing personalised and compassionate support to help professional women overcome overwhelm and achieve authentic success.",
    icon: "👩‍⚕️",
  },
  {
    title: "Holistic Lifestyle Changes",
    description:
      "Creating sustainable lifestyle strategies tailored to individual needs, promoting balance and improved overall wellness.",
    icon: "🍃",
  },
  {
    title: "Stress Management & Burnout Prevention",
    description:
      "Equipping women with practical tools to effectively manage high-stress environments and prevent burnout for long-term well-being.",
    icon: "🧘‍♀️",
  },
  {
    title: "Empowering Women in Leadership",
    description:
      "Helping women redefine success on their terms, enhance self-awareness, and thrive in both personal and professional spheres.",
    icon: "💼",
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
          <div className="max-w-[440px] flex flex-col justify-between">
            <div className="flex flex-col gap-4">
                <h2 className="text-[28px] md:text-[48px] font-bold mb-4 lg:leading-14">
                    What I Offer You as Your Health Coach
                </h2>
                <p className="mb-6 text-[20px] text-gray-700 tracking-wide leading-7">
                    I offer tailored coaching that focuses on what matters most to
                    you, whether fostering work–life balance, redefining success, or
                    regaining a sense of purpose.
                </p>
            </div>
            <button className="bg-primary-main text-white px-6 py-3 w-[302px] h-14 rounded-md hover:bg-primary-main">
              Start Your Wellness Journey
            </button>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid sm:grid-cols-2 gap-6">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-5 border hover:shadow-md transition"
              >
                <div className="text-2xl mb-3">{offer.icon}</div>
                <h3 className="font-semibold mb-2">{offer.title}</h3>
                <p className="text-sm text-gray-600">{offer.description}</p>
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
            className="splide__slide bg-white rounded-xl shadow-sm p-5 border hover:shadow-md transition max-w-[338px] h-[292px]"
          >
            <div className="text-2xl mb-3">{offer.icon}</div>
            <h3 className="font-semibold mb-2">{offer.title}</h3>
            <p className="text-sm text-gray-600">{offer.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}
