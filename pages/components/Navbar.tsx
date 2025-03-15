import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white mt-6 lg:mt-10 w-full z-50">
      <div className="max-w-[1228px] h-10 mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <Image src="/Logo.svg" className="hidden lg:block" alt={"logo"} width={60} height={47.2}/>
          <Image src="/Logo.svg" className="block lg:hidden" alt={"logo"} width={48} height={37.67}/>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <Link href="/" className="text-gray-700 hover:">Home</Link>
            <Link href="#about" className="text-gray-700 hover:text-green-700">About</Link>
            <Link href="#resources" className="text-gray-700 hover:text-green-700">Resources</Link>
            <Link href="#blog" className="text-gray-700 hover:text-green-700">Blog</Link>
            <Link href="#contact" className="bg-green-700 text-white px-4 py-2 rounded-lg">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-green-700" onClick={() => setIsOpen(true)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
          <div className="w-3/4 bg-white shadow-lg h-full p-6">
            {/* Close Button */}
            <button className="text-gray-700 text-2xl" onClick={() => setIsOpen(false)}>✕</button>
            <h2 className="text-lg font-semibold mt-4">Menu</h2>

            {/* Mobile Menu Links */}
            <div className="mt-6 space-y-6">
              <Link href="/" className="block text-gray-700 hover:text-green-700">Home</Link>
              <Link href="#about" className="block text-gray-700 hover:text-green-700">About</Link>
              <Link href="#resources" className="block text-gray-700 hover:text-green-700">Resources</Link>
              <Link href="#blog" className="block text-gray-700 hover:text-green-700">Blog</Link>
            </div>

            {/* Contact Button */}
            <div className="mt-8">
              <Link href="#contact" className="block text-center bg-green-700 text-white px-6 py-3 rounded-lg">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
