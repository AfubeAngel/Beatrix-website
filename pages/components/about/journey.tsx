import Image from "next/image";

const Journey = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-12 xl:gap-[154px] mt-20 lg:mt-30 mb-6 lg:mb-10 justify-center px-4 lg:px-[120px] ">
      <Image
        src="/about-2.png"
        alt="about"
        width={500}
        height={500}
        className="w-full lg:max-w-[500px] h-[500px] "
      />
      <div className="max-w-3xl text-center lg:text-left ">
        <h2 className="xl:text-5xl text-2xl tracking-wide font-semibold text-black p-0 lg:leading-15 ">
          My Journey to Wellness
        </h2>
        <div className="lg:max-w-[528px] mt-6 text-default text-lg tracking-tight mb-10 ">
          <p className="mb-4">
            After my second child, I struggled with weight gain and a series of
            health issues, including autoimmune challenges, mood swings,
            headaches, and more. Initially, I didn’t connect the dots, thinking
            my weight was the only problem. But as the symptoms piled up, I knew
            I needed to make a change—for myself and my family.{" "}
          </p>
          <p>
            I started researching, experimenting, and making small but
            significant lifestyle changes. It wasn’t always easy, but it led me
            to a deeper understanding of what wellness truly means. My passion
            for holistic health eventually guided me to the Institute of
            Integrative Nutrition, where I trained as a certified health coach
          </p>
        </div>
      </div>
    </section>
  );
};

export default Journey;
