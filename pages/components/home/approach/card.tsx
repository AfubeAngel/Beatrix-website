import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imgSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
      <Image src={imgSrc} alt={title} width={400} height={250} className="rounded-md" />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default Card;

