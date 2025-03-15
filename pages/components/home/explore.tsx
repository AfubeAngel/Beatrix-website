import Image from "next/image";


const Explore = () => {
    return (
        <section className="mt-20 lg:mt-[150px] ">
            <h2>
            Explore My Holistic Health Coaching
            </h2>
            <p>As your Health Coach, I will listen carefully and we’ll navigate the world of 
            contradictory nutrition and health advice together to explore what works for you</p>

            {/* breakdown section */}
            <section className="grid col-1 lg:col-3 gap-4 ">
                <div className="bg-blue-300 lg:bg-white p-4 ">
                    <p>Togethwe we will:</p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>
                <p>Togethwe we will:</p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <Image className="hidden lg:block" src="" alt="" width={378} height={291} />
            </section>

        </section>
    )
};

export default Explore;