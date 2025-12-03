import { useState, useRef, useEffect } from "react";
import { FiClock } from "react-icons/fi";

interface TimePickerProps {
  value: string | null;
  onSelect: (time: string) => void;
}

const times = ["10:00am", "11:15am", "12:30pm", "01:45pm", "03:00pm"];

export default function TimePicker({ value, onSelect }: TimePickerProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col space-y-3 w-full relative" ref={wrapperRef}>
      <label className="font-medium text-gray-700">Choose a Time</label>

      {/* Input-like Box */}
      <div
        onClick={() => setShowDropdown((prev) => !prev)}
        className="border rounded-xl px-4 py-3 bg-white shadow-sm text-gray-800 flex items-center gap-3 cursor-pointer"
      >
        <FiClock />

        <span>{value || "Select time"}</span>
      </div>

      {/* Time Dropdown */}
      {showDropdown && (
        <div className="absolute z-50 mt-25 w-full border border-[#EFEFEF] rounded-2xl p-4 bg-white shadow-sm">
          <div className="flex flex-col space-y-3">
            {times.map((t) => (
              <button
                key={t}
                className={`text-left text-gray-700 ${t === value ? "font-semibold" : ""}`}
                onClick={() => {
                  onSelect(t);
                  setShowDropdown(false); // Close dropdown on select
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
