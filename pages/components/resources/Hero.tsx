import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-4 lg:py-12 mx-auto text-center relative">
      {/* Text Section */}
      <h1 className="text-4xl font-bold leading-tight">
        Free Resources to Transform Your Health
      </h1>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Explore valuable tools & guides to supercharge your nutrition and well-being.
      </p>
      <button className="mt-6 bg-primary-main text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition">
        Download Free Guide
      </button>

      {/* Image + Green Stripe Section */}
      <div className="relative mt-10 lg:mt-45 flex justify-center items-center h-[400px]">
        {/* Green stripe behind */}
        <div className="absolute top-1/2 left-0 w-full h-20 bg-[#A7C78F] -translate-y-1/2 z-0" />
        
        {/* Image in front */}
        <Image
          src="/resources-hero.png"
          width={800}
          height={500}
          alt="Health Resources"
          className="drop-shadow-lg relative z-10"
        />
      </div>
    </section>
  );
}
