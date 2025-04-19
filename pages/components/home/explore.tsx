import Image from "next/image";

const Explore = () => {
  return (
    <section className="flex flex-col items-center mt-10 lg:mt-[100px] px-4 lg:px-[120px] ">
      <div className="max-w-7xl mx-auto">
      <h2 className="xl:text-5xl text-2xl tracking-wide font-semibold text-black p-0 lg:leading-15 mb-6 lg:mb-10 ">
        Explore My Holistic Health Coaching
      </h2>
      <p className="mb-6 lg:mb-10 max-w-3xl text-[#6D6D6D] text-xl ">
        As your Health Coach, I will listen carefully and we’ll navigate the
        world of contradictory nutrition and health advice together to explore
        what works for you
      </p>

      {/* breakdown section */}
      <div className=" rounded-lg mt-4">
        {/* DESKTOP: Three Columns | MOBILE: Stacked */}
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* COLUMN 1 */}
          <div className="flex-1 lg:bg-white p-6 rounded-lg w-full bg-[#F6F6F6] ">
            <h3 className="text-xl font-semibold mb-2">Together we will:</h3>
            <ul className="list-disc list-inside text-gray-700 text-base p-2 ">
              <li className="text-[18px] my-2">
                Connect the dots between who you are and who you want to be
              </li>
              <li className="text-[18px] my-2 ">Create your personal blueprint</li>
              <li className="text-[18px] my-2 ">Decipher your body’s unique needs</li>
              <li className="text-[18px] mt-2">Set your personal goals and work</li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div className="flex-1 bg-[#F6F6F6] lg:bg-white p-6 rounded-lg ">
            <h3 className="text-xl font-semibold mb-2 ">What you get:</h3>
            <ul className="list-disc list-inside text-gray-700 p-2 ">
              <li className="text-[18px] my-2 ">Two 50-minute sessions per month</li>
              <li className="text-[18px] my-2 ">Email support between sessions</li>
              <li className="text-[18px] my-2 ">Simple healthy recipes</li>
              <li className="text-[18px] my-2 ">Handouts specific to your needs and goals</li>
            </ul>
          </div>

          {/* COLUMN 3: IMAGE (HIDDEN ON MOBILE) */}
          <div className="hidden lg:flex ">
            <Image
              src="/explore-woman.png" // Ensure the image is in the /public folder
              alt="Meditating woman"
              width={378}
              height={281}
              className="rounded-lg h-[281px] w-[378px] object-cover"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Explore;
