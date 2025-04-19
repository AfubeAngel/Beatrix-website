import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    image: "/placeholder.png", // Replace with actual image paths
    title: "Integrative Nutrition: A new way of life",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition to provide a more individualized approach to eating and living.",
    link: "#",
  },
  {
    image: "/placeholder.png",
    title: "How to Successfully Navigate Parties",
    description:
      "Holidays are on the horizon, and the requisite parties and annual celebrations are about to commence. But this doesn’t have to mean ditching diets and revoking routines.",
    link: "#",
  },
  {
    image: "/placeholder.png",
    title: "Truth Behind Health and Wellness Myths",
    description:
      "You've likely heard a claim about a food, exercise regimen, or wellness trend, and shared it with others, only to find out later that it's either inaccurate or untrue.",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="mt-20 lg:mt-[100px] px-4 lg:px-[120px] ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">
          Explore Our Blog for Wellness Tips
        </h2>

        {/* Desktop: 3 Columns | Mobile: 1 Column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-default mt-2">{post.description}</p>
                <a
                  href={post.link}
                  className="text-link font-medium mt-2 inline-block underline "
                >
                  Continue reading
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Button to View All Posts */}
        <button className="mt-10 lg:mt-20 text-center flex items-center justify-self-center w-[150px] h-13 ">
          <Link
            href="/blog"
            className="bg-primary-main text-white py-4 px-3 rounded-md flex gap-1"
          >
            View all posts
              <Image
                src="/rightthin-arrow.svg"
                width={24}
                height={24}
                alt="right-thin-arrow"
              />
          </Link>
        </button>
      </div>
    </section>
  );
}
