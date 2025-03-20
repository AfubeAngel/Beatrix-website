import ContactForm from "./components/contact/contactform";
import ContactInfo from "./components/contact/contactinfo";
import FAQ from "./components/contact/faq";
import Navbar from "./components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-center text-3xl font-bold">Get in touch</h1>
        <p className="text-center text-gray-500 mb-8">
          Have questions about your wellness journey? I’m here to help you make
          the first step towards a healthier, more balanced life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>

        <FAQ />
      </div>
    </>
  );
}
