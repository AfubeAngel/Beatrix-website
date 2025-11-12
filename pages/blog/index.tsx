import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

const blogPosts = [
  {
    title: "Integrative Nutrition: A New Way of Life",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/placeholder.png", 
    link: "#",
  },
  {
    title: "How to Successfully Navigate Parties",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/blogimg.png",
    link: "#",
  },
  {
    title: "Truth Behind Health and Wellness Myths",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/placeholder.png",
    link: "#",
  },
  {
    title: "Nutrition & Healthy Eating Foods",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/blogimg.png",
    link: "#",
  },
  {
    title: "Women’s Health & Hormonal Balance",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/placeholder.png",
    link: "#",
  },
  {
    title: "Mindfulness & Mental Health",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/blogimg.png",
    link: "#",
  },
  {
    title: "Health Coaching & Personal Growth",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/placeholder.png",
    link: "#",
  },
  {
    title: "Meal Prep for a Stress-Free Week",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/blogimg.png",
    link: "#",
  },
  {
    title: "How to Enjoy Food Without Guilt",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/blogimg.png",
    link: "#",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* Hero / Featured Blog Section */}
      <section className="relative w-full h-screen flex flex-col justify-end text-white max-h-[900px] z-0">
        <Image
          src="/bloghero.png" // Replace with actual image
          alt="Featured Blog"
          fill
          className="absolute inset-0 object-cover -z-10 opacity-300 "
        />
        <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-[1] pointer-events-none" />
        <div className="relative flex flex-col gap-4 z-10  px-6 lg:px-[105px] pb-12">
          <p className="text-2xl lg:text-[36px] font-semibold tracking-tighter ">
            Featured
          </p>
          <h1 className="text-[36px] lg:text-[64px] lg:leading-20 tracking-tighter font-semibold lg:max-w-[1102px] ">
            How to Listen to Your Body: Understanding Hunger, Cravings &
            Fullness
          </h1>
          <p className=" text-base lg:text-xl ">
            Learn how to tune into your body&apos;s natural signals and make
            mindful choices that support your well-being
          </p>
          <Link
            href="#"
            className="mt-2 lg:mt-0 bg-white text-sm text-black w-[194px] h-[52px] px-2 flex justify-center items-center rounded-2xl hover:bg-[#4A7A8C] hover:text-white transition"
          >
            Continue Reading
          </Link>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-[28px] lg:text-[48px] tracking-tight font-semibold mt-12 mb-6">
          Recent Blog Posts
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 ">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={post.link}
              className="block bg-white rounded-lg overflow-hidden"
            >
              <Image
                src={post.image}
                width={404}
                height={300}
                alt={post.title}
                className="w-full h-[300px] object-cover"
              />
              <div className="flex flex-col justify-between mt-4">
                <h3 className="text-xl lg:text-2xl lg:leading-7 tracking-tight leading-10 font-semibold">
                  {post.title}
                </h3>
                <p className="text-base mt-4 mb-6 ">{post.description}</p>
                <span className="text-sm hover:font-bold text-[#4A7A8C] hover:text-[#1c6884] underline">
                  Continue reading
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
