import { useRouter } from "next/router";
import blogPosts from "./data/blogData";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { PiCalendarBlank } from "react-icons/pi";
import { FiClock } from "react-icons/fi";
import { FaComment, FaHeart, FaShare } from "react-icons/fa";

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Find the post that matches the slug
  const post = blogPosts.find((p) => p.link === `/blog/${slug}`);

  if (!post) return <p>Post not found</p>;

  return (
    <>
      <Navbar />

      <section className="flex flex-col py-10 lg:py-20 mx-auto ">
        <div className="flex flex-col mt-5 mb-5 lg:mb-10 px-4 lg:px-[105px] ">
          {/* Title */}
          <h1 className="text-4xl lg:text-[64px] tracking-normal lg:tracking-tighter leading-10 lg:leading-20 w-full lg:max-w-4xl font-semibold">
            {post.title}
          </h1>
          <div className="flex gap-10">
            <div className="flex justify-center items-center gap-4">
              <PiCalendarBlank color="black" />
              <span>{post.date}</span>
            </div>
            <div className="flex justify-center items-center gap-4">
              <FiClock /> <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-6 lg:mt-[100px] lg:mb-6 border-gray-300" />

        {/* Like, Comment, Share */}
        <div className="flex items-center justify-between px-4 lg:pl-50 max-w-7xl">
          <div className="flex gap-6 text-[#5D5D5D] text-sm mx-auto">
            <div className="flex items-center gap-2">
              <FaHeart />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaComment />
              <span>{post.comments}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaShare />
              <span>{post.likes}</span>
            </div>
          </div>

          <button className="text-[#4A7A8C] hover:text-white bg-white hover:bg-[#4A7A8C] border border-[#4A7A8C] cursor-pointer  px-6 py-2 rounded-xl w-[123px] text-sm transition">
            Share
          </button>
        </div>

        {/* Horizontal Line */}
        <hr className="my-6 lg:mb-[100px] border-gray-300" />

        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={800}
          className="w-full h-[400px] lg:h-[800px] object-cover my-10 lg:my-20 "
        />

        {/* Article Body */}
        <div className="prose max-w-full px-2 lg:px-[105px] mx-auto ">
          {post.body.map((block, index) => {
            switch (block.type) {
              case "h2":
                return (
                  <h2 key={index} className="text-2xl font-bold mt-6 mb-4">
                    {block.content}
                  </h2>
                );
              case "h3":
                return (
                  <h3 key={index} className="text-xl font-semibold mt-4 mb-2">
                    {block.content}
                  </h3>
                );
              case "p":
                return (
                  <p key={index} className="mb-4 text-gray-700">
                    {block.content}
                  </p>
                );
              default:
                return null;
            }
          })}
        </div>
        {/* Add full content here */}

        {/* Author Info */}
        <hr className="my-10 lg:mt-[100px] border-gray-300" />

        <div className="flex items-center justify-center gap-4">
          <Image
            src={post.author.image}
            alt="Author"
            width={120}
            height={120}
            className="rounded-full w-10 h-10 lg:w-[120px] lg:h-[120px] "
          />
          <div className=" flex flex-col gap-4 max-w-[604px]">
            <p className="text-sm lg:text-2xl font-semibold text-[#262626]">
              Written by {post.author.name}
            </p>
            <p className="text-sm lg:text-xl text-[#5D5D5D]">
                {post.author.bio}
            </p>
          </div>
        </div>
        <hr className="mt-10 border-gray-300" />

        {/* Comment Section */}
        <div></div>

        {/* Latest Article section */}
        <div></div>
      </section>
    </>
  );
}
