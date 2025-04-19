import Card from "./card";

export default function ApproachImages() {
  const cardData = [
    {
      title: "Bio-IINdividuality",
      description: "No one-size-fits-all, your nutrition and lifestyle should be as unique as you. Let’s find what truly works for you",
      imgSrc: "/placeholder.png",
    },
    {
      title: "Deconstructing Cravings",
      description: "Cravings are messages from your body decode them to find balance and nourish yourself effectively",
      imgSrc: "/placeholder.png",
    },
    {
      title: "Crowding Out",
      description: "Nourish your body with healthy foods first, and cravings for unhealthy options will fade naturally. Small steps, big impact",
      imgSrc: "/placeholder.png",
    },
    {
      title: "Integrative Nutrition Plate",
      description: "The Integrative Nutrition Plate emphasizes the importance of local and organic produce, whole grains, high-quality proteins, plant-based fats, and water",
      imgSrc: "/placeholder.png",
    },
    {
      title: "Primary Food",
      description: "Wellness is more than food, healthy relationships, movement, career, and spirituality nourish you. When balanced, everything else falls into place.",
      imgSrc: "/placeholder.png",
    },
  ];

  return (
<div className="flex flex-wrap gap-6 max-w-[344px] md:max-w-7xl mx-auto ">
{cardData.map((card, index) => (
  <div 
    key={index} 
    className={`flex-grow basis-[30%] min-w-[180px] `}
  >
    <Card {...card} />
  </div>
))}
</div>

  );
}
