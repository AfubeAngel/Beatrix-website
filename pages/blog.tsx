import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";

const blogPosts = [
  {
    title: "Integrative Nutrition: A New Way of Life",
    description: "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/placeholder.png", // Replace with actuage
    link: "#",
  },
  {
    title: "How to Successfully Navigate Parties",
    description: "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/blogimg.png",
    link: "#",
  },
  {
    title: "Truth Behind Health and Wellness Myths",
    description: "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/placeholder.png",
    link: "#",
  },
  {
    title: "Nutrition & Healthy Eating Foods",
    description: "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/blogimg.png",
    link: "#",
  },
  {
    title: "Women’s Health & Hormonal Balance",
    description: "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/placeholder.png",
    link: "#",
  },
  {
    title: "Mindfulness & Mental Health",
    description: "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/blogimg.png",
    link: "#",
  },
  {
    title: "Health Coaching & Personal Growth",
    description: "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/placeholder.png",
    link: "#",
  },
  {
    title: "Meal Prep for a Stress-Free Week",
    description: "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/blogimg.png",
    link: "#",
  },
  {
    title: "How to Enjoy Food Without Guilt",
    description: "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/blogimg.png",
    link: "#",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <section className="py-12 px-6 max-w-7xl mx-auto">
        {/* Featured Blog Section */}
        <div className="relative w-full h-[500px] flex flex-col justify-end p-8 bg-black/50 text-white rounded-lg overflow-hidden">
          <Image
            src="/placeholder.png" // Replace with actual image
            alt="Featured Blog"
            className="-z-10 absolute inset-0"
            width={1440}
            height={900}
          />
          <h1 className="text-[30px] lg:text-[50px] font-bold max-w-2xl">
            How to Listen to Your Body: Understanding Hunger, Cravings &
            Fullness
          </h1>
          <p className="mt-2 max-w-xl">
            Explore ways to improve your relationship with food and your body.
          </p>
          <Link
            href="#"
            className="mt-4 bg-white text-black w-[142px] h-[52px] px-2 flex justify-center items-center rounded-lg hover:bg-green-700 transition"
          >
            Continue Reading
          </Link>
        </div>

        {/* Recent Blog Posts Section */}
        <h2 className="text-3xl font-bold mt-12 mb-6">Recent Blog Posts</h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              className="block bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={post.image}
                width={400}
                height={250}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-xl lg:text-[36px] tracking-tight leading-10 font-semibold">{post.title}</h3>
                <p className="text-default text-sm">{post.description}</p>
                <Link href="#" className="text-sm text-blue-600 underline ">Continue reading</Link>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
