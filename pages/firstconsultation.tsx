import Link from "next/link";
// import ContactForm from "./components/contact/contactform";
// import ContactInfo from "./components/contact/contactinfo";
import FAQ from "./components/contact/faq";
import Navbar from "./components/Navbar";

export default function Consultation() {
  return (
    <>
      <Navbar />
      <section className=" mt-8 lg:mt-[85px] mx-auto px-4 lg:px-[120px]">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-[36px] lg:text-[64px] font-semibold text-center leading-18 max-w-3xl">
            First-time consultation
          </h2>
          <p className="text-center text-gray-600 mb-[37px] ">
            Complete the appropriate assessment before your coaching session for
            personalized guidance. All of your information will remain
            confidential between you and the Health Coach
          </p>
        </div>

        {/* Consultation Cards */}
        <section className="flex flex-col gap-10 mb-20 ">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 lg:p-10 rounded-lg shadow-lg border-1 border-gray-100 max-w-[600px] h-[280px] ">
              <h3 className="text-xl font-semibold">Women’s Health Form</h3>
              <p className="text-gray-600 mt-2">
                Comprehensive questionnaire covering nutritional needs, health
                history, and women-specific wellness
              </p>
              <button className="mt-10 cursor-pointer bg-primary-main text-white px-4 py-2 rounded-[10px] hover:bg-green-700">
                <Link href="/womenhealth">Complete assessment form</Link>
              </button>
            </div>

          <div className="bg-white p-6 lg:p-10 rounded-lg shadow-lg border-1 border-gray-100 max-w-[600px] h-[280px] ">
            <h3 className="text-xl font-semibold">Men’s Health Form</h3>
            <p className="text-gray-600 mt-2">
              Comprehensive questionnaire covering nutritional needs, health
              history, and men-specific wellness
            </p>
            <button className="mt-10 bg-primary-main text-white px-4 py-2 rounded-[10px] hover:bg-green-700">
              <Link href="/menhealth">Complete assessment form</Link>
            </button>
          </div>
          </div>
        </section>

        <div className="bg-white p-6 rounded-lg mb-[200px] lg:p-10 shadow-lg border-1 border-gray-100 w-full h-[280px]">
          <h3 className="text-xl font-semibold">
            Follow-Up Consultation (Revisit)
          </h3>
          <p className="text-gray-600 mt-2">
            For existing clients to review progress, adjust plans, and continue
            your wellness journey
          </p>
          <button className="mt-10 cursor-pointer bg-primary-main text-white px-4 py-2 rounded-[10px] hover:bg-green-700">
            <Link href="/followup">Book follow-up consultation</Link>
          </button>
        </div>

      <FAQ />
      </section>

    </>
  );
}
