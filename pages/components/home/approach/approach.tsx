import ApproachImages from "./approach-imagesection";

const Approach = () => {
    return (
        <div className="mt-20 lg:mt-[100px] flex flex-col items-center px-4 lg:px-[120px] max-w-8xl mx-auto ">
            <h2 className="xl:text-5xl text-2xl tracking-wide font-semibold text-black p-0 lg:leading-15 mb-10 ">
            My Approach To Health and Wellness
            </h2>
            {/* <p className="mt-6 flex items-center text-default text-lg text-center tracking-tight lg:max-w-[1114px] ">I take a holistic approach to health, looking at how all areas of your life connect. Does stress or lack of sleep impact your eating or energy? Together, we’ll explore how these factors affect your overall well-being.  
            I help you tune into your body’s needs and build self-awareness to make informed decisions, free from fad diets or trends. We’ll define what matters most to you and create specific, actionable goals. I won’t dictate a diet but will guide you in understanding how foods make you feel and how 
            to use that knowledge. Let’s co-create a plan that works for your life, with clear steps to move you closer to your health goals</p> */}
            <ApproachImages />
        </div>
    )
};

export default Approach;