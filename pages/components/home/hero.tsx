import Image from "next/image";

const Hero = () => {
  return (
<section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-12 lg:gap-[154px] bg-white py-16 px-6 lg:px-[105px] max-w-7xl mx-auto">
  <div className="max-w-3xl text-center md:text-left mx-auto">
    <h2 className="text-4xl font-bold text-gray-800">
      Transform your Health with Personalized Wellness Coaching
    </h2>
    <p className="mt-4 text-gray-600">
      Beatrix helps high-achieving professionals find sustainable health solutions that work for their unique lives. 
      Together, we simplify wellness, so you can focus on what matters most.
    </p>
    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
      <button className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg">Book Consultation</button>
      <button className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg">Book Health Coaching</button>
    </div>
  </div>
  <div className="flex justify-center">
    <Image src="/heroImage.png" alt="Coach" width={400} height={433} className="w-full max-w-[400px]" />
  </div>
</section>
  );
};

export default Hero;
