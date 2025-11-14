import { useState } from "react";
import { useForm } from "react-hook-form";
import Select, { StylesConfig } from "react-select";
import Navbar from "./components/Navbar";
import Breadcrumbs from "./components/forms/breadcrumbs";

// Define TypeScript Interface for Form Data
interface FollowUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: { value: string; label: string } | null;
  age: string;
  positiveChanges: string;
  mainConcerns: string;
  weightChanges: string;
  sleep: string;
  digestion: string;
  mood: string;
  cookingMore: string;
}

type OptionType = {
  value: string;
  label: string;
};

export default function FollowUpConsultation() {
  const { register, handleSubmit } = useForm<FollowUpFormData>();
  const [loading, setLoading] = useState(false);

  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#f7f7f7",
      border: "1px solid #e5e7eb",
      borderRadius: "0.5rem",
      height: "50px",
      padding: "0.25rem 0.5rem",
      boxShadow: state.isFocused ? "0 0 0 2px #37A18E" : "none",
      "&:hover": {
        borderColor: "#37A18E",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9ca3af",
      fontSize: "0.95rem",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#111827",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#6b7280",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "0.5rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      zIndex: 50,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? "#e0f2f1"
        : state.isSelected
        ? "#37A18E"
        : "#fff",
      color: state.isSelected ? "#fff" : "#111827",
      padding: "0.5rem 1rem",
      cursor: "pointer",
    }),
  };

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  // Form Submission
  const onSubmit = async (data: FollowUpFormData) => {
    setLoading(true);

    // Simulate sending form data to backend
    setTimeout(() => {
      console.log("Form Data Submitted:", data);
      setLoading(false);
      alert("Your follow-up consultation request has been submitted.");
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen flex justify-center py-10 ">
        <div className="bg-white w-full max-w-7xl mx-auto px-4 lg:px-[120px] ">
          <h2 className="text-[36px] tracking-tighter lg:text-[64px] font-bold text-center mb-4">
            Follow-Up Consultation (Revisit)
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Take the first step towards your health transformation with a
            personalized 30-minute consultation.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Health Information */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[24px] lg:text-[36px] font-semibold mt-10 lg:mt-[60px] ">
                Health Information
              </h3>

              <div className="flex flex-col gap-4">
                <label className="block text-black">
                  First, what positive changes have you noticed since your last
                  session?
                </label>
                <textarea
                  {...register("positiveChanges")}
                  placeholder="Please provide an answer"
                  rows={3}
                  className="input-field w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
                ></textarea>
              </div>

              <div className="flex flex-col gap-4">
                <label className="block text-black">
                  What are your main concerns at this time?
                </label>
                <textarea
                  {...register("mainConcerns")}
                  placeholder="Please provide an answer"
                  rows={3}
                  className="input-field w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
                ></textarea>
              </div>

              <div className="flex flex-col gap-4">
                <label className="block text-black">
                  Any changes with your weight?
                </label>
                <textarea
                  {...register("weightChanges")}
                  placeholder="Please provide an answer"
                  rows={3}
                  className="input-field w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
                ></textarea>
              </div>

              <div className="flex flex-col gap-4">
                <label className="block text-black">How is your sleep?</label>
                <textarea
                  {...register("sleep")}
                  placeholder="Please provide an answer"
                  rows={3}
                  className="input-field w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
                ></textarea>
              </div>

              <div className="flex flex-col gap-4">
                <label className="block text-black">
                  Constipation or Diarrhea?
                </label>
                <textarea
                  {...register("digestion")}
                  placeholder="Please provide an answer"
                  rows={3}
                  className="input-field w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
                ></textarea>
              </div>

              <div className="flex flex-col gap-4">
                <label className="block text-black">How is your mood?</label>
                <textarea
                  {...register("mood")}
                  placeholder="Please provide an answer"
                  rows={3}
                  className="input-field w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
                ></textarea>
              </div>

              <div className="flex flex-col gap-4">
                <label className="block text-black">
                  Are you cooking more?
                </label>
                <textarea
                  {...register("cookingMore")}
                  placeholder="Please provide an answer"
                  rows={3}
                  className="input-field w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
                ></textarea>
              </div>
            </div>

            {/* Personal Information */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[24px] lg:text-[36px] font-semibold mt-10 lg:mt-[60px] mb-3 ">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <label className="block text-black">Full Name</label>
                  <input
                    {...register("firstName")}
                    type="text"
                    name="name"
                    className="w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="block text-black">Last Name</label>
                  <input
                    {...register("lastName")}
                    type="text"
                    name="name"
                    className="w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <label className="block text-black">Email Address</label>
                  <input
                    {...register("email")}
                    type="email"
                    name="name"
                    className="w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="block text-black">Phone Number</label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="Enter your Phone Number"
                    className="w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full flex flex-col gap-4 ">
                  <label className="block text-gray-800 font-medium">
                    Gender
                  </label>
                  <Select
                    options={genderOptions}
                    placeholder="Enter your gender"
                    styles={customStyles}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="block text-black">Age</label>
                  <input
                    {...register("age")}
                    type="number"
                    placeholder="Enter your age"
                    className="w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Additonal Information */}
            <div className="my-10 lg:my-20">
              <h3 className="text-[24px] lg:text-[36px] font-semibold mt-5 lg:mt-10 mb-4 ">
                Additional Comments
              </h3>

              <div className="flex flex-col gap-4">
                <label className="block text-black">
                  Anything else you would like to share?:
                </label>
                <textarea
                  {...register("positiveChanges")}
                  placeholder="Enter comment"
                  rows={3}
                  className="input-field w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="w-[121px] lg:w-[336px] h-[52px] bg-[#4A7A8C] hover:bg-[#185971] cursor-pointer text-white py-2 rounded-lg transition"
              >
                {loading ? "Submitting..." : "Submit form"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
