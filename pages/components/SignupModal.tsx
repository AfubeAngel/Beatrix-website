import { useEffect, useRef } from "react";

const SignupModal = ({ onClose }: { onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose(); // Close the modal
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">
          Being healthy doesn’t have to be hard
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Sign up for my free cleanse cheat sheet to get updates!
        </p>

        <form className="flex flex-col space-y-3">
          <input type="text" placeholder="Name" className="border p-2 rounded" />
          <input type="email" placeholder="Email" className="border p-2 rounded" />
          <input type="text" placeholder="Phone" className="border p-2 rounded" />
          <input type="text" placeholder="Company" className="border p-2 rounded" />
          <textarea placeholder="Leave a message" className="border p-2 rounded"></textarea>
          <button type="submit" className="bg-green-600 text-white p-2 rounded">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
