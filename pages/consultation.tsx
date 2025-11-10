import Link from "next/link";
// import ContactForm from "./components/contact/contactform";
// import ContactInfo from "./components/contact/contactinfo";
import FAQ from "./components/contact/faq";
import Navbar from "./components/Navbar";

export default function Consultation() {
  return (
    <>
      <Navbar />
      <section className=" mt-8 lg:mt-[85px] mx-auto px-4 lg:px-[100px]">
        <div className="flex flex-col items-center gap-4">
        <h2 className="text-[36px] lg:text-[64px] font-semibold text-center leading-18 max-w-3xl">
          Book your Health Consultation
        </h2>
        <p className="text-center text-gray-600 mb-[37px] ">
Please select the type of consultation you need and then fill out the right health assessment form
        </p>
        </div>

        {/* Consultation Cards */}
        <section className="flex flex-col gap-10 mb-20 ">
        {/* <div className="flex flex-col gap-5 ">
            <h3 className="text-2xl lg:text-4xl font-semibold">Consultation forms</h3>
            <p className="text-default ">Start your wellness journey by selecting the appropriate consultation and completing your personalized health assessment. All of your information will remain confidential between you and the Health Coach</p>
        </div> */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg ">
            <h3 className="text-xl font-semibold">First-time consultation</h3>
            <p className="text-gray-600 mt-2">
For new clients starting their wellness journey or addressing a new health goal
            </p>
            <button className="mt-10 cursor-pointer bg-primary-main text-white px-4 py-2 rounded-[10px] hover:bg-green-700">
              <Link href="/firstconsultation">
              Book consultation
              </Link>
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold">
              Follow-Up Consultation (Revisit)
            </h3>
            <p className="text-gray-600 mt-2">
For existing clients to review progress, adjust plans, and continue your wellness journey
            </p>
            <button className="mt-10 cursor-pointer bg-primary-main text-white px-4 py-2 rounded-[10px] hover:bg-green-700">
              <Link href="/followup">
              Schedule follow-up consultation
              </Link>
            </button>
          </div>
        </div>
        </section>

        {/* health assessment Cards */}
        {/* <section className="flex flex-col gap-10 ">
        <div className="flex flex-col gap-5">
            <h3 className="text-2xl lg:text-4xl font-semibold">Health Assessment Forms</h3>
            <p className="text-default">Complete the appropriate assessment before your coaching session for personalized guidance.  
            All of your information will remain confidential between you and the Health Coach</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg ">
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

          <div className="bg-gray-100 p-6 rounded-lg ">
            <h3 className="text-xl font-semibold">
            Men’s Health Form
            </h3>
            <p className="text-gray-600 mt-2">
            Comprehensive questionnaire covering nutritional needs, health history, and men-specific wellness
            </p>
            <button className="mt-10 bg-primary-main text-white px-4 py-2 rounded-[10px] hover:bg-green-700">
            <Link href="/menhealth">
            Complete assessment form
            </Link>
            </button>
          </div>
        </div>
        </section> */}

      {/* <div className="container mt-8 lg:mt-[85px] max-w-7xl mx-auto">
        <div className="flex flex-col mx-auto gap-4 mb-10 lg:mb-[100px] max-w-2xl ">
        <h1 className="text-center text-4xl lg:text-[64px] font-semibold">Get in touch</h1>
        <p className="text-center text-base text-gray-500 tracking-wide">
          Have questions about your wellness journey? I’m here to help you make
          the first step towards a healthier, more balanced life.
        </p>
        </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div> */}

        <FAQ />
      {/* </div> */}
      </section>
    </>
  );
}
