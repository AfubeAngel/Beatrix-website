import Image from "next/image";
import {
  FaCalendarAlt,
  FaClock,
  FaHeart,
  FaComment,
  FaShare,
} from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function ArticlePage() {
  return (
    <>
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 py-12 text-[#333]">
        {/* Title */}
        <h1 className="text-4xl font-bold leading-tight">
          How to Listen to Your Body: Understanding Hunger, Cravings & Fullness
        </h1>

        {/* Date & Time Info */}
        <div className="flex items-center gap-6 text-[#5D5D5D] mt-4 text-sm">
          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            <span>April 10, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock />
            <span>5 mins</span>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-6 border-gray-300" />

        {/* Like, Comment, Share */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6 text-[#5D5D5D] text-sm">
            <div className="flex items-center gap-2">
              <FaHeart />
              <span>124</span>
            </div>
            <div className="flex items-center gap-2">
              <FaComment />
              <span>18</span>
            </div>
            <div className="flex items-center gap-2">
              <FaShare />
              <span>Share</span>
            </div>
          </div>

          <button className="bg-primary-main text-white px-6 py-2 rounded-lg text-sm hover:bg-green-700 transition">
            Share
          </button>
        </div>

        {/* Horizontal Line */}
        <hr className="my-6 border-gray-300" />

        {/* Article Image */}
        <div className="w-full h-[400px] lg:h-[800px] relative mb-10">
          <Image
            src="/placeholder.png"
            alt="Article banner"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Article Body */}
        <article className="prose lg:prose-lg max-w-none">
          <h2>Understanding Your Hunger</h2>
          <p>
            Learning to listen to your body starts with tuning into its natural
            hunger signals...
          </p>
          <h3>Types of Hunger</h3>
          <p>
            Physical hunger and emotional hunger feel different. Recognizing the
            cues helps you respond appropriately...
          </p>
          <h3>Cravings & Fullness</h3>
          <p>
            Cravings aren&apos;t always bad—they might signal a nutrient
            deficiency or emotional need...
          </p>
        </article>

        {/* Author Info */}
        <hr className="my-10 border-gray-300" />
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/author.png"
            alt="Author"
            width={64}
            height={64}
            className="rounded-full"
          />
          <p className="text-sm text-[#5D5D5D]">
            Written by <strong>Amibibola</strong>
          </p>
        </div>
        <hr className="mt-10 border-gray-300" />
      </section>
    </>
  );
}
