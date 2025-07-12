import Link from "next/link";

const BookConsultation = () => {
  return (
    <div className="bg-secondary-main flex flex-col items-center gap-4 lg:gap-10 justify-center text-center py-[53px]">
      <p className="font-normal text-lg lg:text-2xl max-w-[328px] lg:max-w-[1135px] ">
I offer tailored coaching that focuses on what matters most to you, whether fostering work-life balance, redefining success, or regaining a sense of purpose. My mission is to help you reconnect with that inner strength, transform it into a driving force, and create the life you deserve.
      </p>
        <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-primary-main transition">
        <Link href="/consultation">
          Book Consultation
      </Link>
        </button>
    </div>
  );
};

export default BookConsultation;
