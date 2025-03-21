import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-10 mt-2 lg:mt-5 mb-6 lg:mb-10 items-center justify-center px-4 lg:px-[120px] ">
      <div className="max-w-3xl text-center lg:text-left ">
        <h2 className="xl:text-[64px] text-2xl font-semibold text-black p-0 lg:leading-15 ">
          Meet <span className="text-primary-main">Health Coach Abby</span>
        </h2>
        <div className="mt-6 text-default text-[20px] tracking-tight mb-10 ">
          <p className="mb-4">
            Hello there! I’m Abimbola, but most people call me Health Coach
            Abby. I’m an Integrative Health and Nutrition Coach based in Lagos,
            Nigeria, where I live with my two amazing kids.
          </p>
          <p>
            My journey into wellness started after I faced health challenges
            following the birth of my second child. I’ve been where you are,
            tired, stressed, and searching for answers. I’m here to help you
            take back control of your health
          </p>
        </div>
      </div>
      <Image
        src="/Aboutpage-hero.png"
        alt="about"
        width={500}
        height={500}
        className="w-full lg:max-w-[500px] h-[500px] "
      />
    </section>
  );
};

export default Hero;
