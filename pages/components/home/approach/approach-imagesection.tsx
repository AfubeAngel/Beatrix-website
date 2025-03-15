import Card from "./card";

export default function ApproachImages() {
  const cardData = [
    {
      title: "Bio-IINdividuality",
      description: "No one-size-fits-all; your nutrition should be unique to you.",
      imgSrc: "/images/bio-individuality.jpg",
    },
    {
      title: "Deconstructing Cravings",
      description: "Decode your cravings to nourish yourself better.",
      imgSrc: "/images/cravings.jpg",
    },
    {
      title: "Crowding Out",
      description: "Eat healthy first, and cravings for unhealthy food will fade.",
      imgSrc: "/images/crowding-out.jpg",
    },
    {
      title: "Integrative Nutrition Plate",
      description: "Emphasizing local, organic produce, proteins, and whole grains.",
      imgSrc: "/images/nutrition-plate.jpg",
    },
    {
      title: "Primary Food",
      description: "Wellness is more than food—relationships and movement matter too.",
      imgSrc: "/images/primary-food.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
