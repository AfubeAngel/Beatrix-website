import ContactForm from "./components/contact/contactform";
import ContactInfo from "./components/contact/contactinfo";
import FAQ from "./components/contact/faq";
import Navbar from "./components/Navbar";

export default function Consultation() {
  return (
    <>
      <Navbar />
      <section className="container mt-8 lg:mt-[85px] max-w-7xl mx-auto px-4 lg:px-[150px]">
        <h2 className="text-3xl font-bold text-center mb-6">
          Schedule Consultation and Health Coaching
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Take the first step towards your health transformation with a
          personalized consultation.
        </p>

        {/* Consultation Cards */}
        <section>
        <div>
            <h3>Consultation forms</h3>
            <p>Start your wellness journey by selecting the appropriate consultation and completing your personalized health assessment. All of your information will remain confidential between you and the Health Coach</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">First-time consultation</h3>
            <p className="text-gray-600 mt-2">
              For new clients starting their wellness journey or addressing a
              new health goal.
            </p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Book consultation
            </button>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">
              Follow-Up Consultation (Revisit)
            </h3>
            <p className="text-gray-600 mt-2">
              For existing clients to review progress, adjust plans, and
              continue their wellness journey.
            </p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Schedule follow-up consultation
            </button>
          </div>
        </div>
        </section>

        {/* health assessment Cards */}
        <section>
        <div>
            <h3>Health Assessment Forms</h3>
            <p>Start your wellness journey by selecting the appropriate consultation and completing your personalized health assessment. All of your information will remain confidential between you and the Health Coach</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">First-time consultation</h3>
            <p className="text-gray-600 mt-2">
              For new clients starting their wellness journey or addressing a
              new health goal.
            </p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Book consultation
            </button>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">
              Follow-Up Consultation (Revisit)
            </h3>
            <p className="text-gray-600 mt-2">
              For existing clients to review progress, adjust plans, and
              continue their wellness journey.
            </p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Schedule follow-up consultation
            </button>
          </div>
        </div>
        </section>

      <div className="container mt-8 lg:mt-[85px] max-w-7xl mx-auto">
        <div className="flex flex-col mx-auto gap-4 mb-10 lg:mb-[100px] max-w-2xl ">
        <h1 className="text-center text-4xl lg:text-[64px] font-semibold">Get in touch</h1>
        <p className="text-center text-base text-gray-500 tracking-wide">
          Have questions about your wellness journey? I’m here to help you make
          the first step towards a healthier, more balanced life.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>

        <FAQ />
      </div>
      </section>
    </>
  );
}
