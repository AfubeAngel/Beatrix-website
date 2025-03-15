import Image from "next/image";

const blogPosts = [
    {
      image: "/images/blog1.jpg", // Replace with actual image paths
      title: "Integrative Nutrition: A new way of life",
      description:
        "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition to provide a more individualized approach to eating and living.",
      link: "#",
    },
    {
      image: "/images/blog2.jpg",
      title: "How to Successfully Navigate Parties",
      description:
        "Holidays are on the horizon, and the requisite parties and annual celebrations are about to commence. But this doesn’t have to mean ditching diets and revoking routines.",
      link: "#",
    },
    {
      image: "/images/blog3.jpg",
      title: "Truth Behind Health and Wellness Myths",
      description:
        "You've likely heard a claim about a food, exercise regimen, or wellness trend, and shared it with others, only to find out later that it's either inaccurate or untrue.",
      link: "#",
    },
  ];
  
  export default function BlogSection() {
    return (
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Explore Our Blog for Wellness Tips</h2>
  
        {/* Desktop: 3 Columns | Mobile: 1 Column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src={post.image} alt={post.title} width={300} height={300} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-default mt-2">{post.description}</p>
                <a href={post.link} className="text-link font-medium mt-2 inline-block">
                  Continue reading
                </a>
              </div>
            </div>
          ))}
        </div>
  
        {/* Button to View All Posts */}
        <div className="mt-8 text-center">
          <a href="#" className="bg-primary-main text-white px-6 py-2 rounded-md inline-block">
            View all posts →
          </a>
        </div>
      </section>
    );
  }
  