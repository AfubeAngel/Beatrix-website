import Image from "next/image";

const Explore = () => {
  return (
    <section className="flex flex-col items-center mt-10 lg:mt-[100px] px-4 lg:px-[120px] ">
      <h2 className="xl:text-5xl text-2xl tracking-wide font-semibold text-black p-0 lg:leading-15">
        Explore My Holistic Health Coaching
      </h2>
      <p>
        As your Health Coach, I will listen carefully and we’ll navigate the
        world of contradictory nutrition and health advice together to explore
        what works for you
      </p>

      {/* breakdown section */}
      <div className=" rounded-lg">
        {/* DESKTOP: Three Columns | MOBILE: Stacked */}
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* COLUMN 1 */}
          <div className="flex-1 lg:bg-white p-6 rounded-lg shadow w-full bg-gray-500">
            <h3 className="text-lg font-semibold">Together we will:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Connect the dots between who you are and who you want to be
              </li>
              <li>Create your personal blueprint</li>
              <li>Decipher your body’s unique needs</li>
              <li>Set your personal goals and work</li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div className="flex-1 bg-blue-200 lg:bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">What you get:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Two 50-minute sessions per month</li>
              <li>Email support between sessions</li>
              <li>Simple healthy recipes</li>
              <li>Handouts specific to your needs and goals</li>
            </ul>
          </div>

          {/* COLUMN 3: IMAGE (HIDDEN ON MOBILE) */}
          <div className="hidden md:flex ">
            <Image
              src="/image.png" // Ensure the image is in the /public folder
              alt="Meditating woman"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
