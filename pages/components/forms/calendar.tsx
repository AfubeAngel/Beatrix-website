import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


interface CalendarProps {
  value: Dayjs | null;
  onChange: (date: Dayjs) => void;
}

export default function Calendar({ value, onChange }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(value || dayjs());

  const monthName = currentMonth.format("MMMM");
  const year = currentMonth.year();

  const daysInMonth = currentMonth.daysInMonth();
  const startOfMonth = currentMonth.startOf("month").day();

  const prevMonth = () => setCurrentMonth(currentMonth.subtract(1, "month"));
  const nextMonth = () => setCurrentMonth(currentMonth.add(1, "month"));

  const days = [];

  // Fill empty slots before 1st
  for (let i = 0; i < startOfMonth; i++) {
    days.push(null);
  }

  // Fill days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(dayjs(`${year}-${currentMonth.month() + 1}-${i}`));
  }

  return (
    <div className="border border-[#EFEFEF] rounded-2xl p-6 bg-white shadow-sm">
      {/* Month Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="text-gray-600 text-3xl cursor-pointer ">
          <IoIosArrowBack />
        </button>
        <h2 className="text-xl font-semibold">{monthName}</h2>
        <button onClick={nextMonth} className="text-gray-600 text-3xl cursor-pointer ">
          <IoIosArrowForward />
        </button>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 text-center text-gray-500 text-sm mb-3">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-3">
        {days.map((d, idx) => {
          if (!d) return <div key={idx}></div>;
          const dayOfWeek = d.day(); // Monday = 0, Tuesday = 1, ...
          const isDisabled = dayOfWeek === 2 || dayOfWeek === 5 || dayOfWeek === 6; //  Wed, Sat, Sun
          const selected = value?.isSame(d, "day");
        
          return (
            <button
              key={idx}
              onClick={() => !isDisabled && onChange(d)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center
                ${
                  isDisabled
                    ? "bg-none text-gray-400 cursor-not-allowed"
                    : selected
                    ? "bg-[#0C405B] text-white"
                    : "bg-gray-100 text-gray-700"
                }
              `}
              disabled={isDisabled}
            >
              {d.date()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
