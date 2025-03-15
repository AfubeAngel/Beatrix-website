import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-6 md:px-12 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div>
            <Image src="/logo.svg" alt="Beatrix Logo" width={100} height={50} />
            <p className="mt-4 text-sm">
              Integrative Nutrition & Health Coach
              <br />
              Helping you achieve optimal wellness through personalized
              nutrition and lifestyle guidance.
            </p>
            <nav className="mt-4 flex space-x-6 text-sm">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          {/* Right Side - Instagram Feed */}
          <div className="text-left md:text-right">
            <h4 className="font-semibold text-gray-900">Follow on Instagram</h4>
            <div className="mt-4 grid grid-cols-2 gap-2 w-40 md:w-48 mx-auto md:ml-auto">
              <div className="w-full h-16 bg-gray-200"></div>
              <div className="w-full h-16 bg-gray-200"></div>
              <div className="w-full h-16 bg-gray-200"></div>
              <div className="w-full h-16 bg-gray-200"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>Copyright © 2025 Beatrix | All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="text-green-700 hover:text-green-900 text-lg" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-green-700 hover:text-green-900 text-lg" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="text-green-700 hover:text-green-900 text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
