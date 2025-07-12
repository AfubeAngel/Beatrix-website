import Image from "next/image";

const Journey = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-12 xl:gap-[100px] mt-20 lg:mt-30 mb-6 lg:mb-10 justify-center px-4 lg:px-[120px] ">
      <Image
        src="/about-2.png"
        alt="about"
        width={500}
        height={430}
        className="w-full lg:max-w-[500px] h-[430px] "
      />
      <div className="max-w-3xl text-center lg:text-left ">
        <h2 className="xl:text-5xl tracking-tight text-2xl font-semibold text-black p-0 lg:leading-20 ">
          My Journey to Wellness
        </h2>
        <div className="lg:max-w-[640px] flex flex-col gap-6 text-[#6D6D6D] text-base lg:text-xl mt-6 mb-10 ">
          <p >
            I believe that thriving begins with self-awareness. By helping you uncover and address the root causes of stress, imposter syndrome, and exhaustion, I empower you to move forward with resilience and confidence. 
          </p>
          <p >
            My approach is not about quick fixes or one-size-fits-all solutions. It’s about creating compassionate, personalised strategies that support sustainable and meaningful change.
          </p>
          <p >
            As a certified health coach, I specialise in stress management, holistic lifestyle changes, and building resilience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Journey;
