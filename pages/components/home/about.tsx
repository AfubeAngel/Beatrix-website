import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-12 xl:gap-[154px] mt-20 lg:mt-30 mb-6 lg:mb-10 justify-center px-4 lg:px-[120px] ">
      <div className="max-w-3xl  text-center lg:text-left ">
        <h2 className="xl:text-5xl text-2xl tracking-wide font-semibold text-black p-0 lg:leading-15 ">
          Meet Health Coach Abby
        </h2>
        <div className="lg:max-w-[528px] mt-6 text-default text-lg tracking-tight mb-10 ">
          <p className="mb-6 text-base lg:text-[17px] tracking-tight">
            Hi, I’m Abimbola Afolabi, but most people know me as Health Coach
            Abby. I’m here to support professional women like you on your
            journey toward balance, clarity, and authentic success.
          </p>
          <p className="mb-6 text-base lg:text-[17px] tracking-tight">
            I offer tailored coaching that focuses on what matters most to you,
            whether fostering work-life balance, redefining success, or
            regaining a sense of purpose.
          </p>
          <p className="mb-6 text-base lg:text-[17px] tracking-tight">
            My mission is to help you reconnect with that inner strength,
            transform it into a driving force, and create the life you deserve.
          </p>
        </div>

        <button className="px-6 py-3 cursor-pointer bg-[#4A7A8C] hover:bg-[#185971] text-white rounded-lg">
          <Link href="/about">Learn more about Coach Abby</Link>
        </button>
      </div>
      <Image
        src="/home-about.png"
        alt="about"
        width={500}
        height={500}
        className="w-full lg:max-w-[500px] h-[500px] "
      />
    </section>
  );
};

export default About;
