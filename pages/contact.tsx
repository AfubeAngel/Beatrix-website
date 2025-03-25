import ContactForm from "./components/contact/contactform";
import ContactInfo from "./components/contact/contactinfo";
import FAQ from "./components/contact/faq";
import Navbar from "./components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="container mt-8 lg:mt-[85px] max-w-7xl mx-auto px-4 lg:px-[150px]">
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
    </>
  );
}
