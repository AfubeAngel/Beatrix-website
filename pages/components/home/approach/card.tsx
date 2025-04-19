import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imgSrc }) => {
  return (
    <div className="bg-[#FEFEFE] border-1 border-[#FEFEFE] shadow-sm rounded-md overflow-hidden p-4 h-[476px] mt-6 lg:mt-10 ">
      <Image src={imgSrc} alt={title} width={366} height={300} className="rounded-md shadow-none lg:shadow w-full h-[300px] max-h-[461px] max-w-[574px] " />
      <h3 className="text-2xl font-semibold my-4">{title}</h3>
      <p className="text-[#5D5D5D] text-base lg:text-xl ">{description}</p>
    </div>
  );
};

export default Card;

