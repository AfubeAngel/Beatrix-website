import ContactForm from "./components/contact/contactform";
import ContactInfo from "./components/contact/contactinfo";
import FAQ from "./components/contact/faq";
import Navbar from "./components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="container mt-8 lg:mt-[85px] mx-auto px-4 lg:px-[100px]">
        <div className="flex flex-col mx-auto gap-4 mb-10 lg:mb-[100px] max-w-2xl ">
          <h1 className="text-center text-4xl lg:text-[64px] font-semibold">
            Get in touch with Coach Abby
          </h1>
          <p className="text-center text-base text-gray-500 tracking-wide">
            Have questions about your wellness journey? I&apos;m here to help
            you take the first step towards a healthier, more balanced life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-[77px] ">
          <ContactForm />
          <ContactInfo />
        </div>

        <FAQ />
      </div>
    </>
  );
}
