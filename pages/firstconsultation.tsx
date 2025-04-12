import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import Navbar from "./components/Navbar";

// Define TypeScript Interface for Form Data
interface ConsultationFormData {
  fullName: string;
  email: string;
  gender: { value: string; label: string } | null;
  age: string;
  phone: string;
  contactMethod: { value: string; label: string } | null;
  time: { value: string; label: string } | null;
}

export default function Consultation() {
  const { register, handleSubmit, control } = useForm<ConsultationFormData>();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const contactMethods = [
    { value: "email", label: "Email" },
    { value: "phone", label: "Phone" },
  ];

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
      <div className="min-h-screen flex max-w-7xl mx-auto py-10 px-4 lg:px-[150px]">
        <div className="bg-white rounded-lg w-full ">
          <h2 className="text-2xl font-bold text-center mb-4">
            First-time Consultation
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Take the first step towards your health transformation with a
            personalized 30-minute consultation.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 items-center ">
            {/* Full Name */}     
            <div className='flex flex-col gap-4'>
              <label className="block text-black">Full Name</label>
              <input
              {...register("fullName")}
                type="text"
                name="name"
                className="w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
                placeholder='Enter your full name'
                required
              />
            </div>

            {/* Email */}
            <div className='flex flex-col gap-4'>
              <label className="block text-black">Email Address</label>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
              />
            </div>

            {/* Gender & Age */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Gender</label>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={genderOptions}
                      placeholder="Select gender"
                    />
                  )}
                />
              </div>
              <div className='flex flex-col gap-4'>
                <label className="block text-black">Age</label>
                <input
                  {...register("age")}
                  type="number"
                  placeholder="Enter your age"
                  className="w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
                />
              </div>
            </div>

            {/* Phone Number & Contact Method */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Preferred Contact Method
                </label>
                <Controller
                  name="contactMethod"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={contactMethods}
                      placeholder="Select method"
                    />
                  )}
                />
              </div>
            </div>

            <div className="mt-10 lg:mt-[100px]">
          <h3>Pick Your Consultation Time</h3>
          <p>Select a date and time that works best for you. Your consultation will be held via 
          Google Meet, and you’ll receive a link after booking</p>
            <div className="grid grid-cols-2 gap-4 mt-10">
            {/* Date Picker */}
            <div>
              <label className="block w-full text-gray-700">
                Select Preferred Date
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MMMM d, yyyy"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Time Selection */}
            <div>
              <label className="block text-gray-700">Choose a Time</label>
              <Controller
                name="time"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={timeSlots}
                    placeholder="Select time"
                  />
                )}
              />
            </div>
            </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-[198px] h-[52px] mt-10 lg:mt-[100px] bg-primary-main text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Book your consultation
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
