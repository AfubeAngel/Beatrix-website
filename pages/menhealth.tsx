import { useState } from "react";
//import TextArea from "./components/forms/textarea";
import InputField from "./components/forms/inputfield";
import Navbar from "./components/Navbar";
import SelectField from "./components/forms/selectfield";
import Textarea from "./components/forms/textarea";
import Link from "next/link";

export default function MenHealthForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    emailFrequency: "",
    phone: "",
    age: "",
    height: "",
    currentWeight: "",
    weightSixMonthsAgo: "",
    weightOneYearAgo: "",
    weightChangeDesire: "",
    weightChangeDetails: "",

    relationshipStatus: "",
    pets: "",
    children: "",
    occupation: "",
    workHours: "",

    majorHealthConcerns: "",
    digestion: "",
    energyLevel: "",
    sleep: "",
    exercise: "",
    stressLevel: "",
    stressTriggers: "",
    birthControl: "",
    menstrualCycle: "",
    pregnancyStatus: "",

    medications: "",
    supplements: "",

    foodAllergies: "",
    foodDislikes: "",
    typicalDayMeals: "",
    cravings: "",
    snacking: "",

    additionalComments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // Submit to API or email here
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10 lg:px-[120px] ">
        <h1 className="text-[36px] lg:text-[64px] font-bold text-center mb-4">
          Men’s Health History
        </h1>
        <p className="text-gray-500 text-center mb-6">
          All of your information will remain confidential between you and the
          Health Coach.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-5xl mx-auto text-sm text-gray-800"
        >
          {/* Personal Information */}
          <h2 className="text-[24px] lg:text-[36px] font-semibold mt-20 lg:mt-[100px] mb-6 lg:mb-10">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <InputField
              label="First Name"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
              placeholder="Enter your first name"
            />
            <InputField
              label="Surname"
              name="surname"
              onChange={handleChange}
              value={formData.surname}
              placeholder="Surname name"
            />
            <InputField
              label="Email Address"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Email Address"
            />
            <SelectField
              label="How often do you check your e-mail:"
              name="emailFrequency"
              value={formData.emailFrequency}
              onChange={handleChange}
            >
              <option value="">Select option</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </SelectField>
            <InputField
              label="Phone Number"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              placeholder="Phone number"
            />
            <InputField
              label="Age"
              name="age"
              onChange={handleChange}
              value={formData.age}
              placeholder="Age"
            />
            <InputField
              label="Height"
              name="height"
              onChange={handleChange}
              value={formData.height}
              placeholder="Height"
            />
            <InputField
              label="Current Weight"
              name="currentWeight"
              onChange={handleChange}
              value={formData.currentWeight}
              placeholder="Current weight"
            />
            <InputField
              label="Weight Six months ago"
              name="weightSixMonthsAgo"
              onChange={handleChange}
              value={formData.weightSixMonthsAgo}
              placeholder="Weight six months ago"
            />
            <InputField
              label="Weight one year ago"
              name="weightOneYearAgo"
              onChange={handleChange}
              value={formData.weightOneYearAgo}
              placeholder="Weight one year ago"
            />
            <SelectField
              label="Would you like your weight to be different?"
              name="weightChangeDesire"
              value={formData.weightChangeDesire}
              onChange={handleChange}
            >
              <option value="">Select option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </SelectField>
            <InputField
              label="If so, what & how?"
              name="weightChangeDetails"
              onChange={handleChange}
              value={formData.weightChangeDetails}
              placeholder="If so, what & how?"
            />
          </div>

          {/* Social Information */}
          <h2 className="text-[24px] lg:text-[36px] font-semibold mt-20 lg:mt-[100px] mb-6 lg:mb-10">
            Social Information
          </h2>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <SelectField
                label="Relationship Status"
                name="relationshipStatus"
                onChange={handleChange}
                value={formData.relationshipStatus}
              >
                <option value="">Select option</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
              </SelectField>
              <SelectField
                label="Pets?"
                name="pets"
                onChange={handleChange}
                value={formData.pets}
              >
                <option value="">Select option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </SelectField>
              <SelectField
                label="Children?"
                name="children"
                onChange={handleChange}
                value={formData.children}
              >
                <option value="">Select option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </SelectField>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <InputField
                label="Occupation"
                name="occupation"
                onChange={handleChange}
                value={formData.occupation}
                placeholder="Occupation"
              />
              <InputField
                label="Hours of work per week"
                name="workHours"
                onChange={handleChange}
                value={formData.workHours}
                placeholder="Hours of work per week"
              />
            </div>
          </div>

          {/* Health Information */}
          <h2 className="text-[24px] lg:text-[36px] font-semibold mt-20 lg:mt-[100px] mb-6 lg:mb-10">
            Health Information
          </h2>
          <div className="">
            <InputField
              label=""
              name="majorHealthConcerns"
              onChange={handleChange}
              value={formData.majorHealthConcerns}
              placeholder="Any major health concerns?"
            />
            <InputField
              label=""
              name="digestion"
              onChange={handleChange}
              value={formData.digestion}
              placeholder="Digestion?"
            />
            <InputField
              label=""
              name="energyLevel"
              onChange={handleChange}
              value={formData.energyLevel}
              placeholder="Energy levels?"
            />
            <InputField
              label=""
              name="sleep"
              onChange={handleChange}
              value={formData.sleep}
              placeholder="Sleep quality?"
            />
            <InputField
              label=""
              name="exercise"
              onChange={handleChange}
              value={formData.exercise}
              placeholder="Exercise habits?"
            />
            <InputField
              label=""
              name="stressLevel"
              onChange={handleChange}
              value={formData.stressLevel}
              placeholder="Stress level?"
            />
            <InputField
              label=""
              name="stressTriggers"
              onChange={handleChange}
              value={formData.stressTriggers}
              placeholder="Stress triggers?"
            />
          </div>

          {/* Medical Information */}
          <h2 className="text-[24px] lg:text-[36px] font-semibold mt-20 lg:mt-[100px] mb-6 lg:mb-10">
            Medical Information
          </h2>
          <div className="">
            <InputField
              label=""
              name="medications"
              onChange={handleChange}
              value={formData.medications}
              placeholder="Are you on any medications?"
            />
            <InputField
              label=""
              name="supplements"
              onChange={handleChange}
              value={formData.supplements}
              placeholder="Do you take any supplements?"
            />
          </div>

          {/* Food Information */}
          <h2 className="text-[24px] lg:text-[36px] font-semibold mt-20 lg:mt-[100px] mb-6 lg:mb-10">
            Food Information
          </h2>
          <div className="">
            <InputField
              label=""
              name="foodAllergies"
              onChange={handleChange}
              value={formData.foodAllergies}
              placeholder="Food allergies?"
            />
            <InputField
              label=""
              name="foodDislikes"
              onChange={handleChange}
              value={formData.foodDislikes}
              placeholder="Foods you dislike?"
            />
            <textarea
              name="typicalDayMeals"
              onChange={handleChange}
              value={formData.typicalDayMeals}
              placeholder="What do you eat on a typical day?"
              className="col-span-2 p-2 border rounded"
            />
            <InputField
              label=""
              name="cravings"
              onChange={handleChange}
              value={formData.cravings}
              placeholder="Any cravings?"
            />
            <InputField
              label=""
              name="snacking"
              onChange={handleChange}
              value={formData.snacking}
              placeholder="Snacking habits?"
            />
          </div>

          {/* Additional Comments */}
          <h2 className="text-[24px] lg:text-[36px] font-semibold mt-20 lg:mt-[100px] mb-6 ">
            Additional Comments
          </h2>
          <Textarea
            name="additionalComments"
            onChange={handleChange}
            value={formData.additionalComments}
            placeholder="Enter comments"
            rows={4}
            label={"Anything else you would like to share?:"}
          />

          {/* health assessment Cards */}
          <section className="flex flex-col gap-10 mt-10 lg:mt-20">
            <div className="flex flex-col gap-5">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md ">
            <h3 className="text-xl font-semibold">Women’s Health Form</h3>
            <p className="text-gray-600 mt-2">
            Comprehensive questionnaire covering nutritional needs, health history, and women-specific wellness
            </p>
            <button className="mt-10 bg-primary-main text-white px-4 py-2 rounded-[10px] hover:bg-green-700">
            <Link href="/womenhealth">
            Complete assessment form
            </Link>
            </button>
          </div>
            </div>
          </section>

          {/* Submit */}
          <button
            type="submit"
            className="bg-primary-main text-white px-6 py-2 rounded hover:bg-green-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
