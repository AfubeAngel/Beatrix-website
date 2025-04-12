import Image from "next/image";

export default function Strategy() {
  return (
      <div className=" flex flex-col gap-10 ">
        {/* Resource Item 1 */}
        <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-50 lg:gap-150 justify-between items-center text-center md:text-start bg-white mx-auto mt-10 md:mt-[100px] px-4 md:px-[120px] lg:px-0 ">
            <div className=" max-w-[452px]">
            <h3 className="text-[24px] lg:text-[48px] font-semibold my-4 ">7-Day Meal Planner for Balanced Energy</h3>
          <p className="text-gray-500 mt-2 mb-10 ">This 7-day meal planner is designed to help you eat well without the stress. Each day includes breakfast, lunch, dinner, and snack ideas that are easy to prepare and packed with nutrients</p>
          <button className="mt-4 bg-primary-main w-[165px] h-[52px] text-white py-2 rounded-md hover:bg-green-700 transition">
            Download Planner
          </button>
            </div>
          <Image
            src="/resource-phone.png" 
            width={200}
            height={300}
            alt="7-Day Meal Planner"
            className="rounded-lg"
          />
        </div>

        {/* Resource Item 2 */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-50 lg:gap-150 justify-between items-center text-center md:text-start bg-white mx-auto mt-10 md:mt-[100px] px-4 md:px-[120px] lg:px-0 ">
          <Image
            src="/resource-phone.png" // Replace with actual image
            width={200}
            height={300}
            alt="Immunity Guide"
            className="rounded-lg"
          />
          <div className=" max-w-[452px]">
          <h3 className="text-[24px] lg:text-[48px] font-semibold my-4">Simple Strategies to Improve Digestion and Boost Immunity</h3>
          <p className="text-gray-500 mt-2 mb-10 ">Your gut health is the foundation of your overall well-being. 
            In this guide, you’ll discover 5 practical steps to heal your gut, improve digestion, and strengthen your immune system</p>
          <button className="mt-4 bg-primary-main text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
            Download Now
          </button>
          </div>
        </div>
      </div>
  );
};