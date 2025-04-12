import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Navbar from "./components/Navbar";

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

export default function FollowUpConsultation() {
  const { register, handleSubmit } = useForm<FollowUpFormData>();
  const [loading, setLoading] = useState(false);

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
      <div className="min-h-screen flex justify-center py-10 ">
        <div className="bg-white w-full max-w-7xl mx-auto px-4 lg:px-[120px] ">
          <h2 className="text-[36px] lg:text-[64px] font-bold text-center mb-4">
            Follow-Up Consultation (Revisit)
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Take the first step towards your health transformation with a
            personalized 30-minute consultation.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Personal Information */}
            <h3 className="text-[24px] lg:text-[36px] font-semibold mt-20 lg:mt-[100px] mb-6 lg:mb-10 ">
              Personal Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
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
            <div className="grid grid-cols-2 gap-4">
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
              <div>
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
            <div className="grid grid-cols-2 gap-4">
              <Select
                options={genderOptions}
                placeholder="Gender"
                className="w-full "
              />
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

            {/* Health Information */}
            <h3 className="text-[24px] lg:text-[36px] font-semibold mt-20 lg:mt-[100px] mb-6 lg:mb-10 ">
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
              <label className="block text-black">Are you cooking more?</label>
              <textarea
                {...register("cookingMore")}
                placeholder="Please provide an answer"
                rows={3}
                className="input-field w-full p-3 border bg-[#F6F6F6] border-[#F6F6F6] rounded-lg"
              ></textarea>
            </div>

            {/* Additonal Information */}
            <div className="mb-10 lg:mb-20">
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
            <button
              type="submit"
              className="w-[121px] h-[52px] bg-primary-main text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              {loading ? "Submitting..." : "Submit form"}
            </button>
          </form>

          {/* health assessment Cards */}
          <section className="flex flex-col gap-10 mt-10 lg:mt-20">
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl lg:text-4xl font-semibold">
                Health Assessment Forms
              </h3>
              <p className="text-default">
                Start your wellness journey by selecting the appropriate
                consultation and completing your personalized health assessment.
                All of your information will remain confidential between you and
                the Health Coach
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md ">
                <h3 className="text-xl font-semibold">
                  First-time consultation
                </h3>
                <p className="text-gray-600 mt-2">
                  For new clients starting their wellness journey or addressing
                  a new health goal.
                </p>
                <button className="mt-10 bg-primary-main text-white px-4 py-2 rounded-[10px] hover:bg-green-700">
                  Book consultation
                </button>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md ">
                <h3 className="text-xl font-semibold">
                  Follow-Up Consultation (Revisit)
                </h3>
                <p className="text-gray-600 mt-2">
                  For existing clients to review progress, adjust plans, and
                  continue their wellness journey.
                </p>
                <button className="mt-10 bg-primary-main text-white px-4 py-2 rounded-[10px] hover:bg-green-700">
                  Schedule follow-up consultation
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
