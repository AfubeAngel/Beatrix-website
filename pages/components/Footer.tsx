import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-6 md:px-12 lg:px-[120px] py-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-10">
          {/* Left Side */}
          <div className="flex flex-col items-center lg:items-start lg:justify-center">
            <Image
              src="/Beatrix-logo.svg"
              alt="Beatrix Logo"
              width={60}
              height={46}
            />
            <p className="mt-4 text-sm text-center lg:text-left ">
              Integrative Nutrition & Health Coach
              <br />
              Helping you achieve optimal wellness through
              <br />
              personalized nutrition and lifestyle guidance.
            </p>
            <nav className="mt-4 flex space-x-6 text-sm">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          {/* Right Side - Instagram Feed */}
          <div className=" flex flex-col">
            <h4 className="font-semibold text-xl text-primary-main mb-8 text-center ">Follow on Instagram</h4>
            <Image src="/Insta-footer.svg" alt={"instragram-placeholder-image"} width={252} height={252} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>Copyright © 2025 Beatrix | All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="text-primary-main hover:[#4A7A8C] text-lg" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-primary-main hover:[#4A7A8C] text-lg" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="text-primary-main hover:[#4A7A8C] text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
