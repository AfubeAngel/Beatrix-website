import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-12 xl:gap-[154px] mt-20 lg:mt-30 mb-6 lg:mb-10 justify-center px-4 lg:px-[120px] ">
      <div className="max-w-3xl text-center lg:text-left ">
        <h2 className="xl:text-5xl text-2xl tracking-wide font-semibold text-black p-0 lg:leading-15 ">
          Meet Abby: The Coach Who Puts Your health First
        </h2>
        <div className="lg:max-w-[528px] mt-6 text-default text-lg tracking-tight mb-10 ">
        <p className="mb-4">
          Hi, I’m Abimbola—call me Health Coach Abby! Based in Lagos, Nigeria,
          I’m a mom of two whose personal health journey inspired me to help
          others. After battling my own health challenges, I discovered the
          power of integrative nutrition and sustainable lifestyle shifts.
        </p>
          <p>
            Now, as a certified Integrative Nutrition Health Coach, I work with
            you to create personalized, practical wellness strategies that fit
            your unique life. Together, we’ll focus on more than just food—we’ll
            build a balanced, healthy lifestyle that empowers you to thrive
          </p>
        </div>

          <button className="px-6 py-3 bg-primary-main text-white rounded-lg">
            Learn more about Abby
          </button>
      </div>
      <Image
        src="/aboutimage.png"
        alt="about"
        width={500}
        height={500}
        className="w-full lg:max-w-[500px] h-[500px] "
      />
    </section>
  );
};

export default About;
