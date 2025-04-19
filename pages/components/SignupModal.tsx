import { useEffect, useState } from "react";
import Image from "next/image";

export default function SignupPopup() {
  const [showPopup, setShowPopup] = useState(false);
  //const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const popupDismissed = sessionStorage.getItem("popupDismissed");
  
    if (!popupDismissed) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000); // Show after 5 seconds
  
      return () => clearTimeout(timer);
    }
  }, []);
  

  // Trigger modal after user scrolls past 400px
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;

  //     if (scrollY > 400 && !sessionStorage.getItem("popupDismissed")) {
  //       setShowPopup(true);
  //       window.removeEventListener("scroll", handleScroll); // Prevent repeated triggers
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // Close on outside click
  // useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (
  //       popupRef.current &&
  //       e.target instanceof Node &&
  //       !popupRef.current.contains(e.target)
  //     ) {
  //       setShowPopup(false);
  //       sessionStorage.setItem("popupDismissed", "true"); // Avoid showing again
  //     }
  //   };

  //   if (showPopup) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [showPopup]);

  if (!showPopup) return null;
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 z-[1000] flex justify-center items-center px-4">
      
      {/* Background container: Image + Gray Box */}
      
      <div className="relative w-full max-w-5xl h-[90vh] flex flex-col md:flex-row overflow-hidden rounded-xl">
        {/* Left Image */}
        <div className="w-full md:w-2/3 h-1/2 md:h-full">
          <Image
            src="/signupmodal.png"
            alt="Healthy Food"
            width={500}
            height={900}
            className="object-cover w-full h-full static"
          />
        </div>
  
        {/* Right Gray Box */}
        <div className="w-full md:w-1/3 h-1/2 md:h-full bg-gray-50" />
  
        {/* Floating Form */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 md:p-10 rounded-xl shadow-lg w-[90%] max-w-md z-10">
          {/* Close Button */}
          <button
            onClick={() => {
              setShowPopup(false);
              sessionStorage.setItem("popupDismissed", "true");
            }}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-xl z-10"
            aria-label="Close"
          >
            &times;
          </button>
  
          <h3 className="text-xl md:text-2xl font-semibold text-green-800 mb-2">
            Being healthy doesn’t have to be hard
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Sign up for my free cleanse cheat sheet to find out how + to get
            more updates from me!
          </p>
  
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border rounded"
                placeholder="e.g. (123) 456-7890"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Leave us a message</label>
              <textarea
                className="w-full px-3 py-2 border rounded"
                placeholder="Please type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  
  
}




