import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Select, { GroupBase, StylesConfig } from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "./components/Navbar";
import Breadcrumbs from "./components/forms/breadcrumbs";

// Define TypeScript Interface for Form Data
interface ConsultationFormData {
  // fullName: string;
  // email: string;
  // gender: { value: string; label: string } | null;
  // age: string;
  // phone: string;
  // contactMethod: { value: string; label: string } | null;
  time: { value: string; label: string } | null;
}

interface OptionType {
  value: string;
  label: string;
}

export default function Consultation() {
  const { handleSubmit, control } = useForm<ConsultationFormData>();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const customStyles: StylesConfig<OptionType, false, GroupBase<OptionType>> = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#F6F6F6",
      borderColor: "#F6F6F6",
      borderRadius: "0.5rem",
      padding: "3px",
      height: "50px",
      boxShadow: state.isFocused ? "0 0 0 1px #a7c78f" : "none",
      "&:hover": {
        borderColor: "#cbd5e0",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9ca3af",
    }),
  };

  // const genderOptions = [
  //   { value: "male", label: "Male" },
  //   { value: "female", label: "Female" },
  //   { value: "other", label: "Other" },
  // ];

  // const contactMethods = [
  //   { value: "email", label: "Email" },
  //   { value: "phone", label: "Phone" },
  // ];

  const timeSlots = [
    "09:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "01:00pm",
    "02:00pm",
    "03:00pm",
    "04:00pm",
  ].map((time) => ({ value: time, label: time }));

  // Fix TypeScript "any" error by using ConsultationFormData
  const onSubmit: SubmitHandler<ConsultationFormData> = (data) => {
    console.log("Form Data:", { ...data, selectedDate });
  };

  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen flex max-w-7xl mx-auto py-10 px-4 lg:px-[150px]">
        <div className="bg-white rounded-lg w-full">
          <h2 className="text-[36px] lg:text-[64px] font-bold tracking-tighter leading-10 lg:leading-20 text-center mb-4">
            Schedule Your Appointment
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Take the first step towards your health transformation with a
            personalized 30-minute consultation.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className=" items-center ">
            <div className="mt-10 lg:mt-[100px]">
              <div>
                <h3 className="text-2xl lg:text-[36px] font-bold ">
                  Pick Your Consultation Time
                </h3>
                <p>
                  Select a date and time that works best for you. Your
                  consultation will be held via
                </p>
                <span>
                  Google Meet, and you’ll receive a link after booking
                </span>
              </div>

              <hr className="my-10 text-[#E7E4E3]" />

              <div>
                <h3 className="text-2xl lg:text-[36px] font-bold ">
                  Available Hours
                </h3>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-15">
                  <div className="flex lg:flex-col gap-2">
                    <p>Monday & Friday</p>
                    <p>10:00 AM - 3:00 PM</p>
                  </div>
                  <div className="flex lg:flex-col gap-2">
                    <p>Tuesday & Thursday</p>
                    <p>10:00 AM - 2:30 PM</p>
                  </div>
                </div>
              </div>

              <hr className="my-10 text-[#E7E4E3]" />

              <div className="grid grid-cols-2 gap-4 mt-10">
                {/* Date Picker */}
                {/* <div className="w-full flex flex-col gap-4">
                  <label className="block text-gray-700 font-medium">
                    Select Preferred Date
                  </label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Select date"
                    className="w-full px-4 py-3 bg-[#F6F6F6] border border-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-main"
                    calendarClassName="bg-white shadow-lg p-4 rounded-2xl border border-gray-100"
                    dayClassName={(date) =>
                      `text-gray-700 hover:bg-primary-light w-10 h-10 rounded-full flex items-center justify-center ${
                        selectedDate?.toDateString() === date.toDateString()
                          ? "bg-primary-main text-white"
                          : ""
                      }`
                    }
                    popperPlacement="bottom-start"
                    popperClassName="!z-50"
                  />
                </div> */}
                
                <div className="w-full flex flex-col gap-4">
                  <label className="block text-gray-700 font-medium">
                    Select Preferred Date
                  </label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Select date"
                    className="w-full px-4 py-3 bg-[#F6F6F6] border border-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-main"
                    calendarClassName="!w-[420px] bg-white shadow-xl p-6 rounded-2xl border border-gray-100"
                    dayClassName={(date) =>
                      `text-gray-700 text-sm font-medium hover:bg-primary-light transition-all duration-200
       w-12 h-12 rounded-full flex items-center justify-center
       ${
         selectedDate?.toDateString() === date.toDateString()
           ? "bg-primary-main text-white"
           : ""
       }`
                    }
                    popperPlacement="bottom-start"
                    popperClassName="!z-50"
                  />
                </div>

                {/* Time Selection */}
                <div className="flex flex-col gap-4">
                  <label className="block text-gray-700">Choose a Time</label>
                  <Controller
                    name="time"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={timeSlots}
                        styles={customStyles}
                        placeholder="Select time"
                        isClearable
                      />
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-100 ">
              <button
                type="submit"
                className="w-[198px] h-[52px] cursor-pointer bg-primary-main text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Book your consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
