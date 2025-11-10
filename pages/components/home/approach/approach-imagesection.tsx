import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";
import Image from "next/image";

const cardData = [
  {
    title: "Bio-IINdividuality",
    description:
      "No one-size-fits-all, your nutrition and lifestyle should be as unique as you. Let’s find what truly works for you",
    icon: "/placeholder.png",
  },
  {
    title: "Deconstructing Cravings",
    description:
      "Cravings play a critical role in understanding what your body needs and shouldn’t be ignored. When you learn how to deconstruct your cravings, you will be able to reclaim a sense of balance and harmony.",
    icon: "/approach/cravings.png",
  },
  {
    title: "Crowding Out",
    description:
      "Nourish your body with healthy foods first, and cravings for unhealthy options will fade naturally. Small steps, big impact",
    icon: "/approach/crowding-out.png",
  },
  {
    title: "Integrative Nutrition Plate",
    description:
      "The Integrative Nutrition Plate emphasizes the importance of local and organic produce, whole grains, high-quality proteins, plant-based fats, water, and herbs and spices.",
    icon: "/approach/nutrition.png",
  },
  {
    title: "Primary Food",
    description:
      "It’s easy to overlook all of the things that contribute to our sense of nourishment and fulfillment. It’s not just the food we eat that affects our health, but all of the other factors present in our daily lives. ",
    icon: "/approach/primary-food.png",
  },
];

export default function ApproachImages() {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      new Splide(sliderRef.current, {
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 2,
        gap: "1rem",
        autoScroll: { speed: 4 },
        pagination: false,
        arrows: false,
      }).mount({ AutoScroll });
    }
  }, []);

  return (
    <>
      {/* desktop slide */}
      <div className="hidden md:block w-full">
        <div ref={sliderRef} className="splide w-full">
          <div className="splide__track pb-5">
            <ul className="splide__list ">
              {cardData.map((data, index) => (
                <li
                  key={index}
                  className="splide__slide rounded-2xl border-2 border-[#EFEFEF] shadow-lg p-5 hover:shadow-md transition lg:p-10 max-w-[757px] h-[300px]  "
                >
                  <div className="flex gap-10">
                  <Image
                    src={data.icon}
                    width={318}
                    height={220}
                    className="w-[318px] h-[220px] rounded-lg object-cover"
                    alt={data.title}
                  />
                  <div className="flex flex-col gap-4 w-[318px] h-[220px]">
                    <h3 className="font-semibold text-2xl ">{data.title}</h3>
                    <p className="text-base text-gray-600">{data.description}</p>
                  </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile grid View */}
      <div className="grid grid-cols-1 md:hidden sm:grid-cols-2 gap-6 ">
        {cardData.map((data, index) => (
          <div
            key={index}
            className="bg-white shadow-sm p-4 rounded-2xl max-w-[338px] h-auto hover:shadow-md transition"
          >
                  <div className="flex flex-col gap-4 ">
                  <Image
                    src={data.icon}
                    width={318}
                    height={220}
                    className="w-auto rounded-lg object-cover"
                    alt={data.title}
                  />
                  <div className="flex flex-col gap-4">
                    <h3 className="font-semibold text-xl ">{data.title}</h3>
                    <p className="text-base text-gray-600">{data.description}</p>
                  </div>
                  </div>
          </div>
        ))}
      </div>
    </>
  );
}
