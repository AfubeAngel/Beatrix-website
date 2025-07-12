import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-12 xl:gap-[154px] mt-10 lg:mt-20 mb-6 lg:mb-[100px] justify-center px-4 lg:px-[120px] ">
      <div className="max-w-3xl text-center lg:text-left ">
        <h2 className="xl:text-[56px] text-black text-[28px] tracking-tighter font-semibold p-0 xl:leading-16 ">
          Empowering Professional Women to Thrive Through Balance,
          Self-Awareness and Sustainable Wellness
        </h2>
        <p className="lg:max-w-[707px] mt-4 text-default text-[20px] tracking-tight lg:mt-6 ">
          I guide ambitious women through stress, self-doubt, and burnout with
          holistic support tailored to their lives. Whether through one-on-one
          coaching, group sessions, or workshops, my mission is to help you
          reconnect with your strength, find clarity, and step into the
          confident, unstoppable version of yourself at work, home, and within.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start mt-5 lg:mt-10 w-full">
          <button className="px-6 py-3 bg-primary-main text-white rounded-2xl w-[200px] mx-auto md:mx-0 md:w-auto">
            <Link href="/consultation">Book Consultation</Link>
          </button>
        </div>
      </div>
      <Image
        src="/hero-image.jpg"
        alt="Coach"
        width={500}
        height={536}
        className="w-full lg:max-w-[500px] h-[536px] "
      />
    </section>
  );
};

export default Hero;
