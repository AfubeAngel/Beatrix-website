import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto text-center">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold leading-tight">
        Free Resources to Transform Your Health
      </h1>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Explore valuable tools & guides to supercharge your nutrition and well-being.
      </p>
      <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition">
        Download Free Guide
      </button>

      {/* Image Section */}
      <div className="relative flex justify-center">
        <Image
          src="/resources-hero.png" // Replace with actual image
          width={800}
          height={500}
          alt="Health Resources"
          className="drop-shadow-lg"
        />
      </div>


    </section>
  );
}
