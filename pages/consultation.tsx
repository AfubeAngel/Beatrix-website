import Link from "next/link";
// import ContactForm from "./components/contact/contactform";
// import ContactInfo from "./components/contact/contactinfo";
import FAQ from "./components/contact/faq";
import Navbar from "./components/Navbar";

export default function Consultation() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col mt-8 mx-auto px-4 lg:px-[120px] xl:px-[154px] ">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-[36px] lg:text-[64px] tracking-tighter font-semibold text-center leading-18 ">
            Book Your Health Consultation
          </h2>
          <p className="text-center text-gray-600 mb-[37px] ">
            Please select the type of consultation you need and then fill out
            the right health assessment form
          </p>
        </div>

        {/* Consultation Cards */}
        <section className="flex flex-col gap-10 mx-auto ">
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <div className="flex flex-col justify-between bg-white p-6 lg:p-10 rounded-lg shadow-lg border-1 border-gray-100 max-w-[600px] h-[280px] ">
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold">
                  First-time consultation
                </h3>
                <p className="text-gray-600 text-base lg:text-xl mt-2">
                  For new clients starting their wellness journey or addressing
                  a new health goal
                </p>
              </div>
              <button className="cursor-pointer w-[216px] bg-primary-main text-white px-4 py-2 rounded-[10px] hover:bg-green-700">
                <Link href="/firstconsultation">Book consultation</Link>
              </button>
            </div>

            <div className="flex flex-col justify-between bg-white p-6 lg:p-10 rounded-lg shadow-lg border-1 border-gray-100 max-w-[600px] h-[280px]">
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold">
                  Follow-Up Consultation (Revisit)
                </h3>
                <p className="text-gray-600 text-base lg:text-xl mt-2">
                  For existing clients to review progress, adjust plans, and
                  continue your wellness journey
                </p>
              </div>
              <button className=" cursor-pointer w-[293px] lg:w-[326px] bg-primary-main text-white px-4 py-2 rounded-[10px] hover:bg-green-700">
                <Link href="/followup">Schedule follow-up consultation</Link>
              </button>
            </div>
          </div>
          <FAQ />
        </section>
      </section>
    </>
  );
}
