import { useState } from "react";
import DatePicker from "react-datepicker";
import Select, { SingleValue } from "react-select";
import "react-datepicker/dist/react-datepicker.css";

const ConsultationForm = () => {
  // Define types for select options
  type OptionType = { value: string; label: string };

  // State for form fields
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<OptionType | null>(null);
  const [age, setAge] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [contactMethod, setContactMethod] = useState<OptionType | null>(null);
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<string>("09:00am");

  // Gender options
  const genderOptions: OptionType[] = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  // Contact method options
  const contactOptions: OptionType[] = [
    { value: "email", label: "Email" },
    { value: "phone", label: "Phone" },
  ];

  // Time options
  const timeOptions: OptionType[] = [
    "09:00am", "10:00am", "11:00am", "12:00pm",
    "01:00pm", "02:00pm", "03:00pm", "04:00pm", "05:00pm"
  ].map((t) => ({ value: t, label: t }));

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      fullName,
      email,
      gender: gender?.value || "",
      age,
      phone,
      contactMethod: contactMethod?.value || "",
      date,
      time,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <form className="bg-black p-8 w-full max-w-2xl space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-center text-gray-400">
          Take the first step towards your health transformation with a personalized 30-minute consultation
        </h2>

        {/* Full Name */}
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Gender & Age */}
        <div className="flex gap-4">
          <Select
            options={genderOptions}
            placeholder="Enter your gender"
            className="w-1/2 text-black"
            value={gender}
            onChange={(selected: SingleValue<OptionType>) => setGender(selected)}
          />
          <input
            type="number"
            placeholder="Enter your age"
            className="w-1/2 p-3 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        {/* Phone & Contact Method */}
        <div className="flex gap-4">
          <input
            type="tel"
            placeholder="Enter phone number"
            className="w-1/2 p-3 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <Select
            options={contactOptions}
            placeholder="Email"
            className="w-1/2 text-black"
            value={contactMethod}
            onChange={(selected: SingleValue<OptionType>) => setContactMethod(selected)}
          />
        </div>

        <p className="text-center text-gray-400">
          Select a date and time that works best for you. Your consultation will be held via
          <span className="text-gray-300"> Google Meet</span>, and you&apos;ll receive a link after booking.
        </p>

        {/* Date & Time Picker */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <DatePicker
              selected={date}
              onChange={(newDate: Date | null) => newDate && setDate(newDate)}
              className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none"
              dateFormat="MMMM d, yyyy"
            />
          </div>
          <div className="w-1/2 relative">
            <Select
              options={timeOptions}
              placeholder="09:00am"
              className="text-black"
              value={timeOptions.find((t) => t.value === time)}
              onChange={(selected: SingleValue<OptionType>) => selected && setTime(selected.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 p-3 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Book Consultation
        </button>
      </form>
    </div>
  );
};

export default ConsultationForm;
