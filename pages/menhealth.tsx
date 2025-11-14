import { useState } from "react";
import InputField from "./components/forms/inputfield";
import Navbar from "./components/Navbar";
import SelectField from "./components/forms/selectfield";
import Textarea from "./components/forms/textarea";
import Breadcrumbs from "./components/forms/breadcrumbs";

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

    mainHealthConcern: "",
    healthGoals: "",
    bestMoments: "",
    seriousIllness: "",
    motherHealth: "",
    fatherHealth: "",
    bloodType: "",
    sleep: "",
    workingHours: "",
    sleepPattern: "",
    sleepTrack: "",
    digestion: "",
    allergies: "",

    medications: "",
    helpers: "",
    sports: "",

    childhoodMeals: "",
    cooking: "",
    supportSystem: "",
    homeCooked: "",
    notHomeCooked: "",
    addictions: "",
    healthImprovement: "",
    typicalMeals: "",

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
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 py-10 lg:px-[120px] ">
        <Breadcrumbs/>
        <h1 className="text-[36px] lg:text-[64px] font-bold text-center leading-10 mb-4">
          Men’s Health History
        </h1>
        <p className="text-gray-500 text-center mb-6">
          All of your information will remain confidential between you and the
          Health Coach.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col max-w-5xl mx-auto text-sm text-gray-800"
        >
          {/* Personal Information */}
          <h2 className="text-[24px] lg:text-[36px] font-semibold mt-4 lg:mt-[60px] mb-6 lg:mb-10">
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
              placeholder="Enter your surname"
            />
            <InputField
              label="Email Address"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Enter your email address"
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
              placeholder="Enter your phone number"
            />
            <InputField
              label="Age"
              name="age"
              onChange={handleChange}
              value={formData.age}
              placeholder="Enter your age"
            />
            <InputField
              label="Height"
              name="height"
              onChange={handleChange}
              value={formData.height}
              placeholder="Enter your height"
            />
            <InputField
              label="Current Weight"
              name="currentWeight"
              onChange={handleChange}
              value={formData.currentWeight}
              placeholder="Enter your current weight"
            />
            <InputField
              label="Weight Six months ago"
              name="weightSixMonthsAgo"
              onChange={handleChange}
              value={formData.weightSixMonthsAgo}
              placeholder="Enter your weight six months ago"
            />
            <InputField
              label="Weight one year ago"
              name="weightOneYearAgo"
              onChange={handleChange}
              value={formData.weightOneYearAgo}
              placeholder="Enter your weight one year ago"
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
          <h2 className="text-[24px] lg:text-[36px] font-semibold mt-20 lg:mt-[100px] mb-4">
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
          <h2 className="text-[24px] lg:text-[36px] font-semibold mt-20 lg:mt-[100px] mb-5">
            Health Information
          </h2>
          <div>
            {/* Textfield part */}
            <div className="flex flex-col gap-6">
              <Textarea
                name="mainHealthConcern"
                onChange={handleChange}
                value={formData.mainHealthConcern}
                placeholder="Enter your answer"
                rows={4}
                label={"Please list your main health concerns"}
              />
              <Textarea
                name="healthGoals"
                onChange={handleChange}
                value={formData.healthGoals}
                placeholder="Enter your answer"
                rows={4}
                label={"Other concerns and/or goals"}
              />
              <Textarea
                name="bestMoments"
                onChange={handleChange}
                value={formData.bestMoments}
                placeholder="Enter your answer"
                rows={4}
                label={"At what point in your life did you feel the best?"}
              />
              <Textarea
                name="additionalComments"
                onChange={handleChange}
                value={formData.additionalComments}
                placeholder="Enter your answer"
                rows={4}
                label={"Any serious illnesses/hospitalisation/injuries?"}
              />
            </div>

            <div className="flex flex-col my-6 lg:flex-row gap-6">
              <Textarea
                name="motherHealth"
                onChange={handleChange}
                value={formData.motherHealth}
                placeholder="Enter your answer"
                rows={4}
                label={"How is/was the health of your mother?"}
              />
              <Textarea
                name="fatherHealth"
                onChange={handleChange}
                value={formData.fatherHealth}
                placeholder="Enter your answer"
                rows={4}
                label={"How is/was the health of your father?"}
              />
            </div>

            <Textarea
              name="bloodType"
              onChange={handleChange}
              value={formData.bloodType}
              placeholder="Enter your answer"
              rows={4}
              label={"What blood type are you?"}
            />

            {/* Input field part */}
            <div className="grid grid-cols-1 lg:grid-cols-2 my-4 gap-4">
              <InputField
                label="How is your sleep?"
                name="sleep"
                onChange={handleChange}
                value={formData.sleep}
                placeholder="Enter your answer"
              />
              <InputField
                label="Hours of work per week"
                name="workingHours"
                onChange={handleChange}
                value={formData.workingHours}
                placeholder="Enter your answer"
              />
              <InputField
                label="Do you wake up at night?"
                name="sleepPattern"
                onChange={handleChange}
                value={formData.sleepPattern}
                placeholder="Enter your answer"
              />
              <InputField
                label="Why?"
                name="sleepTrack"
                onChange={handleChange}
                value={formData.sleepTrack}
                placeholder="Enter your answer"
              />
              <InputField
                label="Constipation/Diarrhea/Gas?"
                name="digestion"
                onChange={handleChange}
                value={formData.digestion}
                placeholder="Enter your answer"
              />
              <InputField
                label="Allergies or sensitivities? Please explain"
                name="allergies"
                onChange={handleChange}
                value={formData.allergies}
                placeholder="Enter your answer"
              />
            </div>
          </div>

          {/* Medical Information */}
          <h2 className="text-[24px] lg:text-[36px] font-semibold mt-10 lg:mt-[60px] ">
            Medical Information
          </h2>
          <div className="flex flex-col gap-4">
            <InputField
              label="Do you take any supplements or medications"
              name="medications"
              onChange={handleChange}
              value={formData.medications}
              placeholder="Enter your answer"
            />
            <Textarea
              name="helpers"
              onChange={handleChange}
              value={formData.helpers}
              placeholder="Enter your answer"
              rows={4}
              label={
                "Any healers, helpers or therapists with which you are involved? Please list"
              }
            />
            <Textarea
              name="sports"
              onChange={handleChange}
              value={formData.sports}
              placeholder="Enter your answer"
              rows={4}
              label={"What role do sports or exercise play in your life?"}
            />
          </div>

          {/* Food Information */}
          <h2 className="text-[24px] lg:text-[36px] font-semibold mt-10 lg:mt-[60px] ">
            Food Information
          </h2>
          <div className="">
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              <InputField
                label="What foods did you eat often as a child?"
                name="childhoodMeals"
                onChange={handleChange}
                value={formData.childhoodMeals}
                placeholder="Enter your answer"
              />
              <InputField
                label="Do you cook?"
                name="cooking"
                onChange={handleChange}
                value={formData.cooking}
                placeholder="Enter your answer"
              />
            </div>

            <Textarea
              name="supportSystem"
              onChange={handleChange}
              value={formData.supportSystem}
              placeholder="Enter your answer"
              rows={4}
              label={"Will family and/or friends be supportive of your desire to make food and/or lifestyle changes?"}
            />

            <div className="flex flex-col lg:flex-row gap-4 my-4 ">
              <InputField
                label="What percentage of your food is home cooked?"
                name="homeCooked"
                onChange={handleChange}
                value={formData.homeCooked}
                placeholder="Enter your answer"
              />
              <InputField
                label="Where do you get the rest from?"
                name="notHomeCooked"
                onChange={handleChange}
                value={formData.notHomeCooked}
                placeholder="Enter your answer"
              />
            </div>

            <Textarea
              name="addictions"
              onChange={handleChange}
              value={formData.addictions}
              placeholder="Enter your answer"
              rows={4}
              label={"Do you crave sugar, coffee, cigarettes, or have any major addictions?"}
            />
            <Textarea
              name="healthImprovement"
              onChange={handleChange}
              value={formData.healthImprovement}
              placeholder="Enter your answer"
              rows={4}
              label={"The most important thing I should do to improve my health is?"}
            />
            <Textarea
              name="typicalMeals"
              onChange={handleChange}
              value={formData.typicalMeals}
              placeholder="Enter your answer"
              rows={4}
              label={"What is food like for you now? (Breakfast, Lunch, Dinner, Snacks, Liquids"}
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

          {/* Submit */}
          <button
            type="submit"
            className="self-center w-[174px] h-14 bg-[#4A7A8C] hover:bg-[#185971] rounded-[8px] lg:w-[336px] cursor-pointer text-white mt-10 px-6 py-2 "
          >
            Submit form
          </button>
        </form>
      </div>
    </>
  );
}