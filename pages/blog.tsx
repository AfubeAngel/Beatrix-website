
import Image from "next/image";

const blogPosts = [
  {
    title: "Integrative Nutrition: A New Way of Life",
    image: "/images/blog1.jpg", // Replace with actual image
    link: "#",
  },
  {
    title: "How to Successfully Navigate Parties",
    image: "/images/blog2.jpg",
    link: "#",
  },
  {
    title: "Truth Behind Health and Wellness Myths",
    image: "/images/blog3.jpg",
    link: "#",
  },
  {
    title: "Nutrition & Healthy Eating Foods",
    image: "/images/blog4.jpg",
    link: "#",
  },
  {
    title: "Women’s Health & Hormonal Balance",
    image: "/images/blog5.jpg",
    link: "#",
  },
  {
    title: "Mindfulness & Mental Health",
    image: "/images/blog6.jpg",
    link: "#",
  },
  {
    title: "Health Coaching & Personal Growth",
    image: "/images/blog7.jpg",
    link: "#",
  },
  {
    title: "Meal Prep for a Stress-Free Week",
    image: "/images/blog8.jpg",
    link: "#",
  },
  {
    title: "How to Enjoy Food Without Guilt",
    image: "/images/blog9.jpg",
    link: "#",
  },
];

export default function BlogPage() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      {/* Featured Blog Section */}
      <div className="relative w-full h-[500px] flex flex-col justify-end p-8 bg-black/50 text-white rounded-lg overflow-hidden">
        <Image
          src="/images/featured-blog.jpg" // Replace with actual image
          alt="Featured Blog"
          layout="fill"
          objectFit="cover"
          className="-z-10 absolute inset-0"
        />
        <h1 className="text-4xl font-bold max-w-2xl">
          How to Listen to Your Body: Understanding Hunger, Cravings & Fullness
        </h1>
        <p className="mt-2 max-w-xl">
          Explore ways to improve your relationship with food and your body.
        </p>
        <a href="#" className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
          Read More
        </a>
      </div>

      {/* Recent Blog Posts Section */}
      <h2 className="text-3xl font-bold mt-12 mb-6">Recent Blog Posts</h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <a key={index} href={post.link} className="block bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src={post.image} width={400} height={250} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{post.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
