import { useState, useRef, useEffect } from "react";
import { Dayjs } from "dayjs";
import Calendar from "./calendar";
import { PiCalendarBlank } from "react-icons/pi";

interface Props {
  value: Dayjs | null;
  onChange: (date: Dayjs) => void;
}

export default function PreferredDatePicker({ value, onChange }: Props) {
  const [showCalendar, setShowCalendar] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close calendar if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col space-y-3 w-full relative" ref={wrapperRef}>
      <label className="font-medium text-gray-700">Select Preferred Date</label>

      {/* Input-like Box */}
      <div
        onClick={() => setShowCalendar((prev) => !prev)}
        className="border rounded-xl px-4 py-3 bg-white shadow-sm text-gray-800 flex items-center gap-3 cursor-pointer"
      >
        
        <PiCalendarBlank color="black" />

        <span>{value ? value.format("MMMM D, YYYY") : "Choose date"}</span>
      </div>

      {/* Calendar Dropdown */}
      {showCalendar && (
        <div className="absolute z-50 mt-25 w-full">
          <Calendar value={value} onChange={(d) => { onChange(d); setShowCalendar(false); }} />
        </div>
      )}
    </div>
  );
}


