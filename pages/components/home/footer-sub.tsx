import Link from "next/link";

const SubFooter = () => {
    return (
      <div className="bg-[#F1F3FB] flex flex-col gap-6 lg:gap-10 mb-20 lg:mb-[145px] items-center justify-center text-center py-[53px] mt-20 lg:mt-[100px] ">
        <p className="font-normal text-sm lg:text-2xl text-[#292F4C] max-w-[328px] lg:max-w-[1135px] ">
          My mission is to help you reconnect with that inner strength, transform it into a driving force, and create the life you deserve. I’m here to walk with you every step of the way.
Are you ready to take the first step?
        </p>
        <button className="text-[#F1F3FB] py-4 rounded-[10px] bg-[#5E6CAE] flex items-center justify-center w-[234px] h-[56px] ">
          <Link className="font-medium text-sm" href="/consultation">Book Consultation</Link></button>
      </div>
    );
  };
  
  export default SubFooter;
  