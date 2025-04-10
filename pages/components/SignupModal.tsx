// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// export default function SignupPopup() {
//   const [showPopup, setShowPopup] = useState(false);
//   const popupRef = useRef<HTMLDivElement | null>(null); // ✅ Typed ref

//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     setTimeout(() => setShowPopup(true), 10000);
//   //     window.removeEventListener("scroll", handleScroll);
//   //   };

//   //   window.addEventListener("scroll", handleScroll);
//   //   return () => window.removeEventListener("scroll", handleScroll);
//   // }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrollPercent = (scrollTop / docHeight) * 100;
  
//       if (scrollPercent > 30) {
//         setShowPopup(true);
//         window.removeEventListener("scroll", handleScroll);
//       }
//     };
  
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
  
  

//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (
//         popupRef.current &&
//         e.target instanceof Node &&
//         !popupRef.current.contains(e.target)
//       ) {
//         setShowPopup(false);
//       }
//     };

//     if (showPopup) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [showPopup]);

//   if (!showPopup) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
//       <div
//         ref={popupRef}
//         className="bg-white rounded-xl p-6 max-w-md w-full relative md:flex md:max-w-4xl overflow-hidden"
//       >
//         {/* Left side - Image */}
//         <div className="hidden md:block md:w-1/2">
//           <Image
//             src="/placeholder.png"
//             alt="Healthy Food"
//             width={400}
//             height={400}
//             className="object-cover h-full w-full"
//           />
//         </div>

//         {/* Right side - Form */}
//         <div className="md:w-1/2 w-full px-4">
//           <h3 className="text-xl md:text-2xl font-semibold text-green-800 mb-2">
//             Being healthy doesn’t have to be hard
//           </h3>
//           <p className="text-sm text-gray-600 mb-4">
//             Sign up for my free cleanse cheat sheet to find out how + to get
//             more updates from me!
//           </p>

//           <form className="space-y-3">
//             <div>
//               <label className="block text-sm font-medium">Name</label>
//               <input
//                 type="text"
//                 className="w-full px-3 py-2 border rounded"
//                 placeholder="Your Name"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Email</label>
//               <input
//                 type="email"
//                 className="w-full px-3 py-2 border rounded"
//                 placeholder="example@email.com"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Phone</label>
//               <input
//                 type="tel"
//                 className="w-full px-3 py-2 border rounded"
//                 placeholder="e.g. (123) 456-7890"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Leave us a message</label>
//               <textarea
//                 className="w-full px-3 py-2 border rounded"
//                 placeholder="Please type your message here..."
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
//             >
//               Sign up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function SignupPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  // Trigger modal after user scrolls past 400px
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 400 && !sessionStorage.getItem("popupDismissed")) {
        setShowPopup(true);
        window.removeEventListener("scroll", handleScroll); // Prevent repeated triggers
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popupRef.current &&
        e.target instanceof Node &&
        !popupRef.current.contains(e.target)
      ) {
        setShowPopup(false);
        sessionStorage.setItem("popupDismissed", "true"); // Avoid showing again
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[1000] flex justify-center items-center px-4">
      <div
        ref={popupRef}
        className="bg-white rounded-xl p-6 max-w-md w-full relative md:flex md:max-w-4xl overflow-hidden"
      >
        {/* Left side - Image */}
        <div className="hidden md:block md:w-1/2">
          <Image
            src="/salad-bg.jpg"
            alt="Healthy Food"
            width={400}
            height={400}
            className="object-cover h-full w-full"
          />
        </div>

        {/* Right side - Form */}
        <div className="md:w-1/2 w-full px-4">
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
