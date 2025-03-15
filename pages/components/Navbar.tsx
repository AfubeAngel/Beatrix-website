import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white mt-6 lg:mt-10 w-full z-50 px-4 lg:px-[105px]">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center ">
          {/* Logo */}
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

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center text-[20px] space-x-12">
            <Link href="/" className="text-default hover:text-primary-main ">
              Home
            </Link>
            <Link href="/about" className="text-default hover:text-primary-main">
              About
            </Link>
            <Link
              href="/resources"
              className="text-default hover:text-green-700"
            >
              Resources
            </Link>
            <Link href="#blog" className="text-default hover:text-green-700">
              Blog
            </Link>
            <button
              className="bg-primary-main text-base text-white items-center justify-center rounded-lg w-[83px] h-[52px] "
            >
              <a href="#">Contact</a>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-700"
            onClick={() => setIsOpen(true)}
          >
            <Image src="/MenuOutline.svg" alt="mobile-menu" width={24} height={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-100 flex justify-end">
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
                className="block text-gray-700 hover:text-green-700"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-green-700"
              >
                About
              </Link>
              <Link
                href="/resources"
                className="block text-gray-700 hover:text-green-700"
              >
                Resources
              </Link>
              <Link
                href="#blog"
                className="block text-gray-700 hover:text-green-700"
              >
                Blog
              </Link>
            </div>

            {/* Contact Button */}
            <div className="mt-20">
              <button
              className="bg-primary-main text-base text-white items-center justify-center rounded-lg w-full h-10 "
            >
              <a href="#">Contact</a>
            </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
