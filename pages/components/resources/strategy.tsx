import Image from "next/image";

export default function Strategy() {
  return (
      <div className="mt-16 flex flex-col gap-10 ">
        {/* Resource Item 1 */}
        <div className="flex justify-between items-center text-center bg-white px-4 lg:px-[120px]">
            <div>
            <h3 className="text-xl font-semibold mt-4">7-Day Meal Planner for Balanced Energy</h3>
          <p className="text-gray-500 mt-2">A structured meal plan designed to keep you energized and healthy.</p>
          <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
            Download Now
          </button>
            </div>
          <Image
            src="/resource-phone.png" // Replace with actual image
            width={200}
            height={300}
            alt="7-Day Meal Planner"
            className="rounded-lg"
          />
        </div>

        {/* Resource Item 2 */}
        <div className="flex justify-between items-center text-center bg-white px-4 lg:px-[120px]">
          <Image
            src="/resource-phone.png" // Replace with actual image
            width={200}
            height={300}
            alt="Immunity Guide"
            className="rounded-lg"
          />
          <div>
          <h3 className="text-xl font-semibold mt-4">Simple Strategies to Improve Digestion and Boost Immunity</h3>
          <p className="text-gray-500 mt-2">Essential tips to strengthen your gut and immune system naturally.</p>
          <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
            Download Now
          </button>
          </div>
        </div>
      </div>
  );
};