import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Check if the current route is the blog page or an article page
  const isBlogPage = router.pathname.startsWith("/blog");

  return (
    <nav className="bg-white mt-6 lg:mt-10 w-full z-50 px-4 lg:px-[105px]">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/Logo.svg"
              className="hidden lg:block"
              alt={"logo"}
              width={60}
              height={37.2}
            />
            <Image
              src="/Logo.svg"
              className="block lg:hidden"
              alt={"logo"}
              width={48}
              height={37.67}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center text-[20px] space-x-12">
            <Link
              href="/"
              className={`${
                router.pathname === "/"
                  ? "text-[#53793C] font-semibold"
                  : "text-[#6D6D6D]"
              } hover:text-[#53793C]`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${
                router.pathname === "/about"
                  ? "text-[#53793C] font-semibold"
                  : "text-[#6D6D6D]"
              } hover:text-[#53793C]`}
            >
              About
            </Link>

            <Link
              href="/resources"
              className={`${
                router.pathname === "/resources"
                  ? "text-[#53793C] font-semibold"
                  : "text-[#6D6D6D]"
              } hover:text-[#53793C]`}
            >
              Resources
            </Link>

            <Link
              href="/blog"
              className={`${
                router.pathname.startsWith("/blog")
                  ? "text-[#53793C] font-semibold"
                  : "text-[#6D6D6D]"
              } hover:text-[#53793C]`}
            >
              Blog
            </Link>

            {/* Search Icon for Blog Pages */}
            {isBlogPage && (
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="cursor-pointer flex justify-center w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-[50%] border border-[#E7E7E7] bg-[#F6F6F6] "
              >
                <Image src="/Search.svg" alt="Search" width={24} height={24} />
              </button>
            )}

            <button className="bg-primary-main text-base text-white items-center justify-center rounded-lg w-[83px] h-[52px] ">
              <Link href="/contact">Contact</Link>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-700"
            onClick={() => setIsOpen(true)}
          >
            <Image
              src="/MenuOutline.svg"
              alt="mobile-menu"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Search Bar (Only for Blog Pages) */}
        {isBlogPage && searchOpen && (
          <div className="mt-4 flex justify-center">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full max-w-md"
            />
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-opacity-100 flex justify-end">
          <div className="w-3/4 bg-white shadow-lg h-full p-6">
            <div className="flex justify-between mb-20 ">
              <h2 className="text-2xl font-semibold ">Menu</h2>
              {/* Close Button */}
              <button
                className="text-gray-700 text-2xl w-6 h-6"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex flex-col items-center space-y-20">
              <Link
                href="/"
                className="block text-gray-700 hover:text-[#53793C] active:text-[#53793C]"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-[#53793C] active:text-[#53793C]"
              >
                About
              </Link>
              <Link
                href="/resources"
                className="block text-gray-700 hover:text-[#53793C] active:text-[#53793C]"
              >
                Resources
              </Link>
              <Link
                href="/blog"
                className="block text-gray-700 hover:text-[#53793C] active:text-[#53793C]"
              >
                Blog
              </Link>
            </div>

            {/* Contact Button */}
            <div className="mt-20">
              <button className="bg-primary-main text-base text-white items-center justify-center rounded-lg w-full h-10 ">
                <Link href="/contact">Contact</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
