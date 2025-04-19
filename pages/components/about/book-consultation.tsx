import Link from "next/link";

const BookConsultation = () => {
  return (
    <div className="bg-primary-light flex flex-col items-center gap-4 lg:gap-10 justify-center text-center py-[53px]">
      <p className="font-normal text-sm lg:text-[32px] max-w-[328px] lg:max-w-[1135px] ">
        Each session will leave you feeling inspired and motivated. We will talk
        about things beyond food, seeking to bring balance to important elements
        of your life such as love and relationships as well as career and money
      </p>
        <button className="px-6 py-3 bg-primary-main text-white rounded-lg hover:bg-green-700 transition">
        <Link href="/consultation">
          Book a Session
      </Link>
        </button>
    </div>
  );
};

export default BookConsultation;
