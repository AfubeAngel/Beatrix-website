import Link from "next/link";

const SubFooter = () => {
    return (
      <div className="bg-primary-main flex flex-col gap-6 lg:gap-10 items-center justify-center text-center py-[53px] mt-20 lg:mt-[100px] ">
        <p className="font-normal text-sm lg:text-[32px] text-white max-w-[328px] lg:max-w-[1135px] ">
          When was the last time you received the personal attention you deserve and talked with someone about your health?.
        </p>
        <button className="text-black py-4 rounded-[10px] bg-white flex items-center justify-center w-[145px] h-[52px] ">
          <Link className="font-medium text-sm" href="">Book Consultation</Link></button>
      </div>
    );
  };
  
  export default SubFooter;
  