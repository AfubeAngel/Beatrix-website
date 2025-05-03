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
  

  if (!showPopup) return null;
  return (
    <div className="fixed inset-0 bg-gray/30 backdrop-blur-sm z-[1000] flex justify-center items-center px-4">
      
      {/* Background container: Image + Gray Box */}
      
      <div className="relative w-full max-w-[900px] h-[700px] flex flex-col md:flex-row overflow-hidden rounded-xl">
        {/* Left Image */}
        <div className="w-full md:w-[60%] h-1/2 md:h-full">
          <Image
            src="/signupmodal.png"
            alt="Healthy Food"
            width={400}
            height={900}
            className="object-cover w-full h-full static"
          />
        </div>
  
        {/* Right Gray Box */}
        <div className="w-full md:w-[40%] h-1/2 md:h-full bg-gray-50" />
  
        {/* Floating Form */}
        <div className="absolute top-[55%] lg:top-1/2 left-1/2 lg:left-[65%] -translate-x-1/2 -translate-y-1/2 bg-white p-6 md:p-10 rounded-xl shadow-lg w-[340px] lg:w-[90%] max-w-md z-10">
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
  
          <h3 className="text-xl md:text-2xl font-semibold text-primary-main mb-2">
            Being healthy doesn’t have to be hard
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Sign up for my free cleanse cheat sheet to find out how + to get
            more updates from me!
          </p>
  
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-semibold text-primary-main mb-1">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-primary-main mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-primary-main mb-1">Phone</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border rounded"
                placeholder="e.g. (123) 456-7890"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-primary-main mb-1">Leave us a message</label>
              <textarea
                className="w-full px-3 py-2 border rounded"
                placeholder="Please type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary-main text-white px-6 py-2 rounded hover:bg-green-800"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  
  
}




