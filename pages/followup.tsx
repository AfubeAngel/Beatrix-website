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
      <div className="min-h-screen flex justify-center py-10 px-4">
        <div className="bg-white p-8 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-center mb-4">
            Follow-Up Consultation (Revisit)
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Take the first step towards your health transformation with a
            personalized 30-minute consultation.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Personal Information */}
            <h3 className="text-xl font-semibold">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                {...register("firstName")}
                placeholder="First name"
                className="input-field"
              />
              <input
                {...register("lastName")}
                placeholder="Surname name"
                className="input-field"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                className="input-field"
              />
              <input
                {...register("phone")}
                type="tel"
                placeholder="Phone Number"
                className="input-field"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Select
                options={genderOptions}
                placeholder="Gender"
                className="w-full"
              />
              <input
                {...register("age")}
                type="number"
                placeholder="Age"
                className="input-field"
              />
            </div>

            {/* Health Information */}
            <h3 className="text-xl font-semibold">Health Information</h3>
            <textarea
              {...register("positiveChanges")}
              placeholder="First, what positive changes have you noticed since your last session?"
              className="input-field"
            ></textarea>
            <textarea
              {...register("mainConcerns")}
              placeholder="What are your main concerns at this time?"
              className="input-field"
            ></textarea>
            <textarea
              {...register("weightChanges")}
              placeholder="Any changes with your weight?"
              className="input-field"
            ></textarea>
            <textarea
              {...register("sleep")}
              placeholder="How is your sleep?"
              className="input-field"
            ></textarea>
            <textarea
              {...register("digestion")}
              placeholder="Constipation or Diarrhea?"
              className="input-field"
            ></textarea>
            <textarea
              {...register("mood")}
              placeholder="How is your mood?"
              className="input-field"
            ></textarea>
            <textarea
              {...register("cookingMore")}
              placeholder="Are you cooking more?"
              className="input-field"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? "Submitting..." : "Book your consultation"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
