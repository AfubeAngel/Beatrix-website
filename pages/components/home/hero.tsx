import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-12 xl:gap-[154px] mt-10 lg:mt-20 mb-6 lg:mb-10 justify-center px-4 lg:px-[120px] ">
    <div className="max-w-3xl text-center lg:text-left ">
      <h2 className="xl:text-[64px] text-[36px] tracking-wide font-semibold text-gray-800 p-0 xl:leading-20 ">
        Transform your Health with Personalized Wellness Coaching
      </h2>
      <p className="lg:max-w-[528px] mt-4 text-default text-[20px] tracking-tight">
        Beatrix helps high-achieving professionals find sustainable health
        solutions that work for their unique lives. Together, we simplify
        wellness, so you can focus on what matters most.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start mt-5 lg:mt-10 ">
        <button className="px-6 py-3 bg-green-700 text-white rounded-lg">
          Book Consultation
        </button>
        <button className="px-6 py-3 bg-green-700 text-white rounded-lg">
          Book Health Coaching
        </button>
      </div>
    </div>
      <Image
        src="/hero-image.jpg"
        alt="Coach"
        width={400}
        height={433}
        className="w-full lg:max-w-[400px] h-[433px] "
      />
  </section>
  );
};

export default Hero;
